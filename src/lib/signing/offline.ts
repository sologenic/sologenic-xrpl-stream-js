import { RippleAPI } from 'ripple-lib';
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

      if (typeof txJson.Flags === 'undefined')
        txJson.Flags = 0;

      if ((txJson.Flags & 0x80000000) === 0) {
        txJson.Flags |= 0x80000000;
      }

      // Convert tx.Flags to an unsigned
      txJson.Flags = txJson.Flags >>> 0;

      const signedTx: SologenicTypes.SignedTx = this.rippleApi.sign(
        JSON.stringify(txJson),
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
