import { http, promiseTimeout, wait } from '../utils';

import Redis from 'ioredis';

import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import SologenicTxSigner from './index';
import { SologenicError } from '../error';
import { IXummQueryPayload, IXummSubmitPayload } from '../../types/xumm';

export class XummSigner extends SologenicTxSigner {
  protected xummApiKey: string = '';
  protected xummApiSecret: string = '';
  protected xummApiEndpoint: string = 'https://xumm.app/api/v1/platform/payload';
  protected xummApiUserToken?: string;

  private redisClient = new Redis();

  // 60 seconds should be enough for a user interaction
  protected maximumExecutionTime: number = 60 * 1000;

  constructor(options: any) {
    super(options);

    this.includeSequence = false;

    if (options.hasOwnProperty('xummApiEndpoint')) {
      this.xummApiEndpoint = options['xummApiEndpoint'];
    }

    if (options.hasOwnProperty('xummApiKey')) {
      this.xummApiKey = options['xummApiKey'];
    }

    if (options.hasOwnProperty('xummApiSecret')) {
      this.xummApiSecret = options['xummApiSecret'];
    }

    if (options.hasOwnProperty('xummApiUserToken')) {
      this.xummApiUserToken = options['xummApiUserToken'];
    }

    if (options.hasOwnProperty('maximumExecutionTime')) {
      this.maximumExecutionTime = options['maximumExecutionTime'];
    }
  }

  protected _headers(): object {
    return {
      'X-API-Key': this.xummApiKey,
      'X-API-Secret': this.xummApiSecret
    }
  }

  async verify(payload: string, account?: XrplAccount): Promise<IXummQueryPayload | undefined> {
    while (true) {
      const result = await http<IXummQueryPayload>(
        `${this.xummApiEndpoint}/${payload}`,
        'GET',
        this._headers()
      );

      console.log(result);

      if (typeof(result.application.issued_user_token) !== 'undefined' && account!.getAddress()) {
        await this.redisClient.set(
          'xumm:account:' + account!.getAddress(),
          result.application.issued_user_token)
      }

      if (result.hasOwnProperty('error') && result.hasOwnProperty('code') && result.hasOwnProperty('message')) {
        return undefined;
      } else if (result.meta! && result.meta!.resolved) {
        if (result.meta!.signed)
          // The request has been signed, send it back, otherwise return undefined if the
          // request has been resolved but not signed/cancelled/expired/etc.
          // This is probably quite simple for now and can be extended later.
          return result;

        return undefined;
      }

      await wait(2500);
    }
  }

  async sign(
    txJson: string,
    txId: string,
    account?: XrplAccount,
    signingOptions?: any
  ): Promise<SologenicTypes.SignedTx> {
    txJson;
    account;
    signingOptions;

    const extra = {
      options: {
        submit: false,
        expire: Math.ceil(this.maximumExecutionTime / 1000 / 60).toFixed()
      },
      user_token: await this.redisClient.get('xumm:account:' + account!.getAddress()) || ""
    };

    const result = await http<IXummSubmitPayload>(
      this.xummApiEndpoint,
      'POST',
      this._headers(),
      JSON.stringify({
        txjson: JSON.parse(txJson),
        ...extra
      }
    ));

    const verification: IXummQueryPayload =
      await promiseTimeout(this.maximumExecutionTime, this.verify(result.uuid, account));

    if (typeof verification === 'undefined') {
      // Unable to sign request (request was rejected or cancelled)
      throw new SologenicError('2002');
    }

    return {
      id: txId,
      signedTransaction: verification.response.hex
    };
  }
}
