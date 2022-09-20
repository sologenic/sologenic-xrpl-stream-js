import XrplAccount from '../account';

import * as SologenicTypes from '../../types/';

export default abstract class SologenicTxSigner
  implements SologenicTypes.ISologenicTxSigner {
  protected includeSequence: boolean = false;
  signerID: string = 'default';
  cancelled: boolean = false;

  constructor(options: any) {}

  /**
   * Should we include a sequence number (for xumm, let xumm decide)
   */
  public getIncludeSequence(): boolean {
    return this.includeSequence;
  }

  public cancelSigning(cancel: boolean) {
    return (this.cancelled = cancel);
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

  public async requestConnection(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
