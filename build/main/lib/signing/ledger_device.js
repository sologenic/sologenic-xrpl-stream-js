"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerDeviceSigner = void 0;
const index_1 = require("./index");
const error_1 = require("../error");
const utils_1 = require("../utils");
const ripple_lib_1 = require("ripple-lib");
const TransportWebUSB = require('@ledgerhq/hw-transport-webusb').default;
const Xrp = require('@ledgerhq/hw-app-xrp').default;
const binaryCodec = require('ripple-binary-codec');
class LedgerDeviceSigner extends index_1.SologenicTxSigner {
    constructor(options) {
        super(options);
        this.getAddress = '';
        this.getAppConfiguration = '';
        this.signTransaction = '';
        this.transport = '';
        this.bip32Path = ''; // "44'/144'/i'/0/0";
        this.address = '';
        this.publicKey = '';
        this._signAttempts = 0;
        this.signerID = 'ledger';
        if (options.hasOwnProperty('ripple_server')) {
            // this.ripple_server = options['ripple_server'];
            console.log(options['ripple_server']);
            this.api = new ripple_lib_1.RippleAPI({
                server: options['ripple_server'],
                feeCushion: 1,
                timeout: 1000000
            });
            this.api.connect();
        }
        else {
            throw new Error('Ripple Server url is missing');
        }
        this.includeSequence = true;
    }
    async getWalletAddress() {
        if (this.address && this.publicKey) {
            return {
                address: this.address,
                publicKey: this.publicKey
            };
        }
        else {
            // const { address, publicKey } = await this.getAddress(this.bip32Path);
            // this.address = address;
            // this.publicKey = publicKey;
            // return {
            //   address,
            //   publicKey
            // };
            let accounts = [];
            let bipIndex = 0;
            while (true) {
                const { address, publicKey } = await this.getAddress(`44'/144'/${bipIndex}'/0/0`);
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
    async setSelectedAccount(account) {
        const bip32 = `44'/144'/${account.index}'/0/0`;
        this.bip32Path = bip32;
        this.address = account.address;
        this.publicKey = account.publicKey;
        return true;
    }
    async requestConnection() {
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
        }
        catch (e) {
            console.log('E_CONNECTING_SIGNER ->', e);
            throw new Error(e.message);
        }
    }
    async sign(txJson, txId, _account, _signingOptions = {}) {
        try {
            if (this._signAttempts > 10) {
                throw new error_1.SologenicError('1003');
            }
            this._signAttempts += 1;
            // Delete the transaction metadata if it exists since the signing will fail
            // as this TransactionMetadata is not known to the schema.
            if (txJson.TransactionMetadata)
                delete txJson.TransactionMetadata;
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 100;
            // Add Public Key to the txJson to encode.
            txJson.SigningPubKey = this.publicKey.toUpperCase();
            // Encode the Transaction
            const txBlob = await binaryCodec.encode(txJson);
            // Pass the txBlob to be signed by the LedgerDevice, this will return ONLY the signature for the transaction. It will not return the signed transaction.
            const signature = await this.signTransaction(this.bip32Path, txBlob);
            // Add the signature to the transaction
            txJson.TxnSignature = signature.toUpperCase();
            // Return the signed transaction
            return {
                id: txId,
                signedTransaction: binaryCodec.encode(txJson)
            };
        }
        catch (e) {
            // This error is thrown if the user rejects the transaction on the LedgerDevice
            if (e.statusText === 'CONDITIONS_OF_USE_NOT_SATISFIED') {
                throw new error_1.SologenicError('2003');
            }
            if (e.id === 'TransportLocked') {
                if (e.message === 'Ledger Device is busy (lock getAddress)') {
                    await utils_1.wait(500);
                    await this.sign(txJson, txId, _account, _signingOptions);
                }
                else {
                    throw new Error('Device Busy');
                }
            }
            throw new error_1.SologenicError('1000');
        }
    }
}
exports.LedgerDeviceSigner = LedgerDeviceSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVkZ2VyX2RldmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2lnbmluZy9sZWRnZXJfZGV2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1DQUE0QztBQUM1QyxvQ0FBMEM7QUFDMUMsb0NBQWdDO0FBQ2hDLDJDQUF1QztBQUN2QyxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDekUsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBRXBELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25ELE1BQWEsa0JBQW1CLFNBQVEseUJBQWlCO0lBWXZELFlBQVksT0FBWTtRQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFaUCxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUM5QixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7UUFDN0MsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXpCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLGFBQVEsR0FBVyxRQUFRLENBQUM7UUFLMUIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzNDLGlEQUFpRDtZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxzQkFBUyxDQUFDO2dCQUN2QixNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztnQkFDaEMsVUFBVSxFQUFFLENBQUM7Z0JB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