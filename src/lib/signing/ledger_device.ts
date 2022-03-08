import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
import { SologenicError } from '../error';
import { wait } from '../utils';
import { RippleAPI } from 'ripple-lib';
const TransportWebUSB = require('@ledgerhq/hw-transport-webusb').default;
const Xrp = require('@ledgerhq/hw-app-xrp').default;

const binaryCodec = require('ripple-binary-codec');
export class LedgerDeviceSigner extends SologenicTxSigner {
  protected getAddress: any = '';
  protected getAppConfiguration: any = '';
  protected signTransaction: any = '';
  protected transport: any = '';
  protected bip32Path: string = ''; // "44'/144'/i'/0/0";
  protected address: string = '';
  protected publicKey: string = '';
  protected api: RippleAPI;
  private _signAttempts: number = 0;
  signerID: string = 'ledger';

  constructor(options: any) {
    super(options);

    if (options.hasOwnProperty('ripple_server')) {
      // this.ripple_server = options['ripple_server'];
      console.log(options['ripple_server']);

      this.api = new RippleAPI({
        server: options['ripple_server'],
        feeCushion: 1,
        timeout: 1000000
      });

      this.api.connect();
    } else {
      throw new Error('Ripple Server url is missing');
    }

    this.includeSequence = true;
  }

  public async getWalletAddress() {
    if (this.address && this.publicKey) {
      return {
        address: this.address,
        publicKey: this.publicKey
      };
    } else {
      // const { address, publicKey } = await this.getAddress(this.bip32Path);

      // this.address = address;
      // this.publicKey = publicKey;

      // return {
      //   address,
      //   publicKey
      // };

      let accounts: Object[] = [];
      let bipIndex = 0;

      while (true) {
        const { address, publicKey } = await this.getAddress(
          `44'/144'/${bipIndex}'/0/0`
        );

        const addressInfo = await this.api
          .getAccountInfo(address)
          .then(r => r)
          .catch(() => null);

        const account = {
          address: address,
          publicKey: publicKey,
          info: addressInfo,
          index: bipIndex
        };

        accounts = [...accounts, account];

        if (addressInfo === null) {
          break;
        }

        bipIndex++;
      }

      return { accounts };
    }
  }

  public async setSelectedAccount(
    account: SologenicTypes.LedgerSelectedAccount
  ): Promise<Boolean> {
    const bip32 = `44'/144'/${account.index}'/0/0`;

    this.bip32Path = bip32;
    this.address = account.address;
    this.publicKey = account.publicKey;

    return true;
  }

  public async requestConnection(): Promise<
    SologenicTypes.SignerConnectionRef
  > {
    try {
      // Request connection to Ledger Device (Speculos uses http, the actual device use webusb)
      const trans = await TransportWebUSB.create();
      // Create the communication object between the Ledger and the WebApp
      const xrpApp = new Xrp(trans);

      this.getAddress = xrpApp.getAddress;
      this.getAppConfiguration = xrpApp.getAppConfiguration;
      this.signTransaction = xrpApp.signTransaction;
      this.transport = trans;

      return await this.getWalletAddress();
    } catch (e) {
      console.log('E_CONNECTING_SIGNER ->', e);
      throw new Error(e.message);
    }
  }

  public async sign(
    txJson: SologenicTypes.TX,
    txId: string,
    _account?: XrplAccount,
    _signingOptions: any = {}
  ): Promise<SologenicTypes.SignedTx> {
    try {
      if (this._signAttempts > 10) {
        throw new SologenicError('1003');
      }

      this._signAttempts += 1;
      // Delete the transaction metadata if it exists since the signing will fail
      // as this TransactionMetadata is not known to the schema.
      if (txJson.TransactionMetadata) delete txJson.TransactionMetadata;

      if (txJson.LastLedgerSequence)
        txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 100;

      // Add Public Key to the txJson to encode.
      txJson.SigningPubKey = this.publicKey.toUpperCase();

      // Encode the Transaction
      const txBlob: string = await binaryCodec.encode(txJson);

      // Pass the txBlob to be signed by the LedgerDevice, this will return ONLY the signature for the transaction. It will not return the signed transaction.
      const signature: string = await this.signTransaction(
        this.bip32Path,
        txBlob
      );

      // Add the signature to the transaction
      txJson.TxnSignature = signature.toUpperCase();

      // Return the signed transaction
      return {
        id: txId,
        signedTransaction: binaryCodec.encode(txJson)
      };
    } catch (e) {
      // This error is thrown if the user rejects the transaction on the LedgerDevice
      if (e.statusText === 'CONDITIONS_OF_USE_NOT_SATISFIED') {
        throw new SologenicError('2003');
      }

      if (e.id === 'TransportLocked') {
        if (e.message === 'Ledger Device is busy (lock getAddress)') {
          await wait(500);
          await this.sign(txJson, txId, _account, _signingOptions);
        } else {
          throw new Error('Device Busy');
        }
      }

      throw new SologenicError('1000');
    }
  }
}
