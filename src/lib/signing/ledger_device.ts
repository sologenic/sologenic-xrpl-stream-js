import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import SologenicTxSigner from './index';
import { SologenicError } from '../error';

const binaryCodec = require('ripple-binary-codec');

export class LedgerDeviceSigner extends SologenicTxSigner {
  protected getAddress: any = '';
  protected getAppConfiguration: any = '';
  protected signTransaction: any = '';
  protected transport: any = '';
  protected bip32Path: string = "44'/144'/0'/0/0";
  protected address: string = '';
  protected publicKey: string = '';

  constructor(options: any) {
    super(options);

    if (options.hasOwnProperty('getAddress')) {
      this.getAddress = options['getAddress'];
    }

    if (options.hasOwnProperty('getAppConfiguration')) {
      this.getAppConfiguration = options['getAppConfiguration'];
    }

    if (options.hasOwnProperty('signTransaction')) {
      this.signTransaction = options['signTransaction'];
    }

    if (options.hasOwnProperty('transport')) {
      this.transport = options['transport'];
    }
  }

  async getWalletAddress() {
    if (this.address && this.publicKey) {
      return {
        address: this.address,
        publicKey: this.publicKey
      };
    } else {
      const { address, publicKey } = await this.getAddress(this.bip32Path);

      this.address = address;
      this.publicKey = publicKey;

      return {
        address,
        publicKey
      };
    }
  }

  async sign(
    txJson: SologenicTypes.TX,
    txId: string,
    _account?: XrplAccount,
    signingOptions: any = {}
  ): Promise<SologenicTypes.SignedTx> {
    try {
      console.log('TX', txJson, txId);

      const transaction = {
        ...txJson,
        ...signingOptions,
        SigningPubKey: this.publicKey.toUpperCase()
      };
      console.log('Enconding transaction...', transaction);

      const txBlob = binaryCodec.encode(transaction);

      console.log('Sending transaction to device for approval...');

      const signature = await this.signTransaction(this.bip32Path, txBlob);

      console.log('Signature', signature);

      return {
        id: txId,
        signedTransaction: signature.toUpperCase()
      };
    } catch (e) {
      throw e;
    }
  }
}
