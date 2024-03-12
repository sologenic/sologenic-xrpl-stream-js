"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineSigner = void 0;
const index_1 = require("./index");
const xrpl_1 = require("xrpl");
class OfflineSigner extends index_1.SologenicTxSigner {
    constructor(options) {
        super(options);
        this.signerID = 'offline';
        this.includeSequence = true;
    }
    requestConnection() {
        return true;
    }
    async sign(txJson, txId, account, signingOptions) {
        try {
            if (!this.wallet) {
                // const { publicKey, privateKey } = account.getKeypair();
                this.wallet = xrpl_1.Wallet.fromSeed(account.getSecret());
            }
            // txJson.SigningPubKey = this.wallet.publicKey;
            delete txJson.SigningPubKey;
            if (!signingOptions) {
            }
            // Sign the transaction using the secret provided on init
            // console.log(`Signing transaction txJson=${txJson}, secret=${account.secret}, keypair=${account.keypair}`)
            // Delete the transaction metadata if it exists since the signing will fail
            // as this TransactionMetadata is not known to the schema.
            if (txJson.TransactionMetadata) {
                delete txJson.TransactionMetadata;
            }
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 1000;
            let signedTx = this.wallet.sign(JSON.parse(JSON.stringify(txJson)));
            signedTx.id = txId;
            return signedTx;
        }
        catch (error) {
            console.log(error.data);
            throw error;
        }
    }
}
exports.OfflineSigner = OfflineSigner;
