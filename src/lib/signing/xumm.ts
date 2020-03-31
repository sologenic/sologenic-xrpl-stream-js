import { http, promiseTimeout, wait } from '../utils';

import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import SologenicTxSigner from './index';
import uuid from 'uuid';
import { SologenicError } from '../error';

export interface IXummSubmitPayload {
  uuid: string,
  next: {
    always: string;
    no_push_msg_received: string;
  },
  refs: {
    qr_png: string,
    qr_matrix: string,
    qr_uri_quality_opts: []
  },
  websocket_status: string,
  pushed: boolean
};

export interface IXummQueryPayload {
  meta: {
    exists: boolean,
    uuid: any,
    multisign: boolean,
    submit: boolean,
    destination: any,
    resolved_destination: any,
    resolved: boolean,
    signed: boolean,
    cancelled: boolean,
    expired: boolean,
    pushed: boolean,
    app_opened: any,
    return_url_app: any
    return_url_web?: any
  },

  custom_meta?: {
    identifier: any,
    blob: any,
    instruction: any
  },

  application: {
    name: any,
    description: any,
    disabled: any,
    uuidv4: any,
    icon_url: any,
    issued_user_token: any
  }

  payload: {
    tx_type: any,
    tx_destination: any,
    tx_destination_tag: any
    request_json?: any
    created_at: any,
    expires_at: any,
    expires_in_seconds: any
  },

  response: {
    hex: any,
    txid: any,
    resolved_at: any,
    dispatched_to: any,
    dispatched_result: any,
    multisign_account: any,
    account: any
  }
}

export class XummSigner extends SologenicTxSigner {
  protected xummApiKey: string = '';
  protected xummApiSecret: string = '';
  protected xummApiEndpoint: string = 'https://xumm.app/api/v1/platform/payload';
  protected xummApiUserToken?: string;

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

  async token(): Promise<string> {
    const result = await http<IXummQueryPayload>(
      this.xummApiEndpoint,
      'GET',
      this._headers()
    );

    return "";
  };

  async verify(payload: string): Promise<IXummQueryPayload | undefined> {
    while (true) {
      const result = await http<IXummQueryPayload>(
        `${this.xummApiEndpoint}/${payload}`,
        'GET',
        this._headers()
      );

      /*
        {
          error: true,
          message: 'Endpoint unknown or method invalid for given endpoint',
          reference: '',
          code: 404,
          req: '/v1/platform/payload/1fb3f20e-fe62-4822-a893-b35322f2bd0a',
          method: 'POST'
        }
      */

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

      await wait(5000);
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

    const result = await http<IXummSubmitPayload>(
      this.xummApiEndpoint,
      'POST',
      this._headers(),
      JSON.stringify({
        txjson: JSON.parse(txJson)
      }
    ));

    const verification: IXummQueryPayload =
      await promiseTimeout(this.maximumExecutionTime, this.verify(result.uuid));

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
