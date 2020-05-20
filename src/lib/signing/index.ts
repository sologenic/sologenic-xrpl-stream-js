import { RippleAPI } from 'ripple-lib';

import XrplAccount from '../account';

import * as SologenicTypes from '../../types/';

export default abstract class SologenicTxSigner implements SologenicTypes.ISologenicTxSigner {
  protected rippleApi!: RippleAPI;
  protected includeSequence: boolean = false;

  constructor(options: any) {
    if (options && options.hasOwnProperty('rippleApi')) {
      this.rippleApi = options.rippleApi;
    } else {
      this.rippleApi = new RippleAPI({});
    }
  }

  /**
   * Should we include a sequence number (for xumm, let xumm decide)
   */
  public getIncludeSequence(): boolean {
    return this.includeSequence;
  }

  public async sign(
    txJson: SologenicTypes.TX,
    txId: string,
    account?: XrplAccount,
    signingOptions?: any
  ): Promise<any> {
    txJson;
    txId;
    account;
    signingOptions;

    throw new Error('Method not implemented.');
  }
}

import { OfflineSigner } from './offline';
import { XummSigner } from './xumm';

export {
  OfflineSigner,
  XummSigner
};
