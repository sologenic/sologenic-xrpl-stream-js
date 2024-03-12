import { SologenicTxSigner } from './index';
import { SologenicError } from '../error';
const binaryCodec = require('ripple-binary-codec');
const DcentWebConnector = require('dcent-web-connector');
export class DcentSigner extends SologenicTxSigner {
    signerID = 'dcent';
    bip32Path = "m/44'/144'/0'/0/0";
    address = '';
    constructor(options) {
        super(options);
        this.includeSequence = true;
    }
    async requestConnection() {
        try {
            // Request connection to Ledger Device (Speculos uses http, the actual device use webusb)
            const dcentInfo = await DcentWebConnector.getAccountInfo();
            const ripple_account = dcentInfo.body.parameter.account.find((acc) => acc.coin_name === 'RIPPLE');
            if (typeof ripple_account === 'undefined') {
                throw new Error('Ripple Account Not Found.');
            }
            const ripple_address = await DcentWebConnector.getAddress('ripple', ripple_account.address_path);
            if (ripple_address.body.parameter.address) {
                DcentWebConnector.popupWindowClose();
            }
            this.address = ripple_address.body.parameter.address;
            return {
                address: ripple_address.body.parameter.address
            };
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async sign(txJson, txId, _account, _signingOptions = {}) {
        try {
            if (txJson.TransactionMetadata)
                delete txJson.TransactionMetadata;
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 1000;
            txJson.Flags = txJson.Flags ? (txJson.Flags += 2147483648) : 2147483648;
            const signedTX = await DcentWebConnector.getXrpSignedTransaction(txJson, this.bip32Path);
            txJson.SigningPubKey = signedTX.body.parameter.pubkey.toUpperCase();
            txJson.TxnSignature = signedTX.body.parameter.sign.toUpperCase();
            const blob = binaryCodec.encode(txJson);
            // Return the signed transaction
            DcentWebConnector.popupWindowClose();
            return {
                id: txId,
                signedTransaction: blob,
                tx_blob: blob
            };
        }
        catch (e) {
            console.log(e);
            // This error is thrown if the user rejects the transaction on the D'Cent
            if (e.body.error.code === 'param_error') {
                DcentWebConnector.popupWindowClose();
                throw new SologenicError('2002');
            }
            if (e.body.error.code === 'user_cancel') {
                DcentWebConnector.popupWindowClose();
                throw new SologenicError('2003');
            }
            throw new SologenicError('1000');
        }
    }
}
