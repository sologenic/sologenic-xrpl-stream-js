import { RippleAPI } from 'sologenic-ripple-lib-1-10-0-patched';
import { SologenicError } from '../error';
import * as SologenicTypes from '../../types';

import XrplAccount from '../account';
import { SologenicTxSigner } from './index';
import { Wallet } from 'xrpl';

export class OfflineSigner extends SologenicTxSigner
  implements SologenicTypes.ISologenicTxSigner {
  protected rippleApi!: RippleAPI;
  protected wallet: any;
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
      if (!this.wallet || this.wallet.classicAddress !== account.getAddress()) {
        // const { publicKey, privateKey } = account.getKeypair();
        // this.wallet = Wallet.fromSeed(account.getSecret());
        if (account.hasKeypair()) {
          const { publicKey, privateKey } = account.getKeypair();

          this.wallet = new Wallet(publicKey, privateKey);
        } else {
          this.wallet = Wallet.fromSeed(account.getSecret());
        }
      }

      // txJson.SigningPubKey = this.wallet.publicKey;
      delete txJson.SigningPubKey;

      if (!signingOptions) {
      }

      // Sign the transaction using the secret provided on init
      // console.log(Signing transaction txJson=${txJson}, secret=${account.secret}, keypair=${account.keypair})

      // Delete the transaction metadata if it exists since the signing will fail
      // as this TransactionMetadata is not known to the schema.
      if (txJson.TransactionMetadata) {
        delete txJson.TransactionMetadata;
      }

      if (txJson.LastLedgerSequence)
        txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 1000;

      let signedTx: SologenicTypes.SignedTx = this.wallet.sign(
        JSON.parse(JSON.stringify(txJson))
      );

      // const signedTx: SologenicTypes.SignedTx = this.rippleApi.sign(
      //   JSON.stringify(txJson),
      //   account.getSecret(),
      //   signingOptions,
      //   account.getKeypair()
      // );

      signedTx.id = txId;

      return signedTx;
    } catch (error) {
      console.log('EROEROEROEORERER', error);

      throw error;
    }
  }
}
