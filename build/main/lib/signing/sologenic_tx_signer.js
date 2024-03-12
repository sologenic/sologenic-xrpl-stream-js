"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SologenicTxSigner {
    constructor(options) {
        this.includeSequence = false;
        this.signerID = 'default';
        this.cancelled = false;
        this.options = options;
    }
    /**
     * Should we include a sequence number (for xumm, let xumm decide)
     */
    getIncludeSequence() {
        return this.includeSequence;
    }
    cancelSigning(cancel) {
        return (this.cancelled = cancel);
    }
    async sign(txJson, txId, account, signingOptions) {
        txJson;
        txId;
        account;
        signingOptions;
        throw new Error('Method not implemented.');
    }
    async requestConnection() {
        throw new Error('Method not implemented.');
    }
}
exports.default = SologenicTxSigner;
