import { RippleAPI } from 'ripple-lib';
import { SologenicError } from '../error';
import * as SologenicTypes from '../../types';

import XrplAccount from '../account';
import { SologenicTxSigner } from './index';

export class OfflineSigner extends SologenicTxSigner
  implements SologenicTypes.ISologenicTxSigner {
  protected rippleApi!: RippleAPI;
  signerID: string = 'offline';

  constructor(options: any) {
    super(options);

    this.includeSequence = true;
  }

  requestConnection(): any {
    return true;
  }

  async sign(
    txJson: SologenicTypes.TX,
    txId: string,
    account: XrplAccount,
    signingOptions?: any
  ): Promise<SologenicTypes.SignedTx> {
    try {
      // Sign the transaction using the secret provided on init
      // console.log(`Signing transaction txJson=${txJson}, secret=${account.secret}, keypair=${account.keypair}`)

      // Delete the transaction metadata if it exists since the signing will fail
      // as this TransactionMetadata is not known to the schema.
      if (txJson.TransactionMetadata) {
        delete txJson.TransactionMetadata;
      }

      const signedTx: SologenicTypes.SignedTx = this.rippleApi.sign(
        JSON.stringify(txJson),
        account.getSecret(),
        signingOptions,
        account.getKeypair()
      );

      signedTx.id = txId;

      return signedTx;
    } catch (error) {
      // Re-throw the error (we catch it just for debugging purposes)
      throw error;
    }
  }
}
