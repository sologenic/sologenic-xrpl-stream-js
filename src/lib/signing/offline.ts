import { RippleAPI } from 'ripple-lib';
import { SologenicError } from '../error';
import * as SologenicTypes from '../../types';

import XrplAccount from '../account';
import SologenicTxSigner from './index';

export class OfflineSigner extends SologenicTxSigner
  implements SologenicTypes.ISologenicTxSigner {
  protected rippleApi!: RippleAPI;

  constructor(options: any) {
    super(options);

    this.includeSequence = true;
  }

  async sign(
    txJson: string,
    txId: string,
    account: XrplAccount,
    signingOptions?: any
  ): Promise<SologenicTypes.SignedTx> {
    try {
      // Sign the transaction using the secret provided on init
      // console.log(`Signing transaction txJson=${txJson}, secret=${account.secret}, keypair=${account.keypair}`)

      const signedTx: SologenicTypes.SignedTx = this.rippleApi.sign(
        txJson,
        account.getSecret(),
        signingOptions,
        account.getKeypair()
      );

      signedTx.id = txId;

      return signedTx;
    } catch (error) {
      // console.log(`Signing error: ${error}`);
      // Re-throw the error (we catch it just for debugging purposes)
      throw error;
    }
  }
}
