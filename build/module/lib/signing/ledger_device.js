import { SologenicTxSigner } from './index';
import { SologenicError } from '../error';
import { wait } from '../utils';
const TransportWebUSB = require('@ledgerhq/hw-transport-webusb').default;
const Xrp = require('@ledgerhq/hw-app-xrp').default;
const xrpl = require('xrpl');
const binaryCodec = require('ripple-binary-codec');
export class LedgerDeviceSigner extends SologenicTxSigner {
    getAddress = '';
    getAppConfiguration = '';
    signTransaction = '';
    transport = '';
    bip32Path = ''; // "44'/144'/i'/0/0";
    address = '';
    publicKey = '';
    api;
    _signAttempts = 0;
    signerID = 'ledger';
    constructor(options) {
        super(options);
        if (options.hasOwnProperty('ripple_server')) {
            this.api = new xrpl.Client(options['ripple_server'], {
                feeCushion: 1,
                timeout: 100000
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
            let accounts = [];
            let bipIndex = 0;
            while (true) {
                const { address, publicKey } = await this.getAddress(`44'/144'/${bipIndex}'/0/0`);
                const getAddressInfo = async (address) => {
                    try {
                        const acc = await this.api.request({
                            command: 'account_info',
                            account: address
                        });
                        return acc.result.account_data;
                    }
                    catch (e) {
                        if (e.message === 'Account not found.')
                            return null;
                    }
                };
                const addressInfo = await getAddressInfo(address);
                const account = {
                    address: address,
                    publicKey: publicKey,
                    info: addressInfo,
                    index: bipIndex
                };
                const last = accounts[accounts.length - 1];
                if (addressInfo === null && last && last.info === null) {
                    accounts = [...accounts, account];
                    break;
                }
                accounts = [...accounts, account];
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
                throw new SologenicError('1003');
            }
            this._signAttempts += 1;
            // Delete the transaction metadata if it exists since the signing will fail
            // as this TransactionMetadata is not known to the schema.
            if (txJson.TransactionMetadata)
                delete txJson.TransactionMetadata;
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 1000;
            txJson.Flags = txJson.Flags ? (txJson.Flags += 2147483648) : 2147483648;
            // Add Public Key to the txJson to encode.
            txJson.SigningPubKey = this.publicKey.toUpperCase();
            // Encode the Transaction
            const txBlob = await binaryCodec.encode(txJson);
            // Pass the txBlob to be signed by the LedgerDevice, this will return ONLY the signature for the transaction. It will not return the signed transaction.
            const signature = await this.signTransaction(this.bip32Path, txBlob);
            // Add the signature to the transaction
            txJson.TxnSignature = signature.toUpperCase();
            const blob = binaryCodec.encode(txJson);
            // Return the signed transaction
            return {
                id: txId,
                signedTransaction: blob,
                tx_blob: blob
            };
        }
        catch (e) {
            console.log(e);
            if (e.name === 'DisconnectedDeviceDuringOperation') {
                throw new SologenicError('3001');
            }
            if (e.statusText === 'UNKNOWN_ERROR') {
                throw new SologenicError('3000');
            }
            // This error is thrown if the user rejects the transaction on the LedgerDevice
            if (e.statusText === 'CONDITIONS_OF_USE_NOT_SATISFIED') {
                throw new SologenicError('2003');
            }
            if (e.id === 'TransportLocked') {
                if (e.message === 'Ledger Device is busy (lock getAddress)') {
                    await wait(500);
                    await this.sign(txJson, txId, _account, _signingOptions);
                }
                else {
                    throw new Error('Device Busy');
                }
            }
            throw new SologenicError('1000');
        }
    }
}
