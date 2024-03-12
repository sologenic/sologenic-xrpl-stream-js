export default class SologenicTxSigner {
    includeSequence = false;
    signerID = "default";
    cancelled = false;
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
        throw new Error("Method not implemented.");
    }
    async requestConnection() {
        throw new Error("Method not implemented.");
    }
}
