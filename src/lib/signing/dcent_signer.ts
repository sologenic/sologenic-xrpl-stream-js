import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
import { SologenicError } from '../error';
const binaryCodec = require('ripple-binary-codec');
const DcentWebConnector = require('dcent-web-connector');

export class DcentSigner extends SologenicTxSigner {
  signerID: string = 'dcent';
  protected bip32Path: string = "m/44'/144'/0'/0/0";
  protected address: string = '';

  constructor(options: any) {
    super(options);
    this.includeSequence = true;
  }

  async requestConnection(): Promise<SologenicTypes.SignerConnectionRef> {
    try {
      // Request connection to Ledger Device (Speculos uses http, the actual device use webusb)
      const dcentInfo = await DcentWebConnector.getAccountInfo();

      const ripple_account = dcentInfo.body.parameter.account.find(
        (acc: { coin_name: string }) => acc.coin_name === 'RIPPLE'
      );

      if (typeof ripple_account === 'undefined') {
        throw new Error('Ripple Account Not Found.');
      }

      const ripple_address = await DcentWebConnector.getAddress(
        'ripple',
        ripple_account.address_path
      );

      if (ripple_address.body.parameter.address) {
        DcentWebConnector.popupWindowClose();
      }

      this.address = ripple_address.body.parameter.address;
      return {
        address: ripple_address.body.parameter.address
      };
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async sign(
    txJson: SologenicTypes.TX,
    txId: string,
    _account?: XrplAccount,
    _signingOptions: any = {}
  ): Promise<SologenicTypes.SignedTx> {
    try {
      if (txJson.TransactionMetadata) delete txJson.TransactionMetadata;
      if (txJson.LastLedgerSequence)
        txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 100;

      const signedTX = await DcentWebConnector.getXrpSignedTransaction(
        txJson,
        this.bip32Path
      );

      txJson.SigningPubKey = signedTX.body.parameter.pubkey.toUpperCase();
      txJson.TxnSignature = signedTX.body.parameter.sign.toUpperCase();

      // Return the signed transaction
      DcentWebConnector.popupWindowClose();
      return {
        id: txId,
        signedTransaction: binaryCodec.encode(txJson)
      };
    } catch (e) {
      // This error is thrown if the user rejects the transaction on the D'Cent
      if (e.body.error.code === 'user_cancel') {
        DcentWebConnector.popupWindowClose();
        throw new SologenicError('2003');
      }

      throw new SologenicError('1000');
    }
  }
}
