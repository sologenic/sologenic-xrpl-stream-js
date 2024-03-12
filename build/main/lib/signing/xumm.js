"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XummSigner = void 0;
const utils_1 = require("../utils");
const index_1 = require("./index");
const error_1 = require("../error");
class XummSigner extends index_1.SologenicTxSigner {
    constructor(options) {
        super(options);
        this.xummApiKey = '';
        this.xummApiSecret = '';
        this.xummApiEndpoint = 'https://xumm.app/api/v1/platform/payload';
        this.signerID = 'xumm';
        // 60 seconds should be enough for a user interaction
        this.maximumExecutionTime = 60 * 1000;
        this.includeSequence = false;
        if (options.hasOwnProperty('xummApiEndpoint')) {
            this.xummApiEndpoint = options['xummApiEndpoint'];
        }
        if (options.hasOwnProperty('xummApiKey')) {
            this.xummApiKey = options['xummApiKey'];
        }
        if (options.hasOwnProperty('xummApiSecret')) {
            this.xummApiSecret = options['xummApiSecret'];
        }
        if (options.hasOwnProperty('xummApiUserToken')) {
            this.xummApiUserToken = options['xummApiUserToken'];
        }
        if (options.hasOwnProperty('maximumExecutionTime')) {
            this.maximumExecutionTime = options['maximumExecutionTime'];
        }
    }
    _headers() {
        return {
            'X-API-Key': this.xummApiKey,
            'X-API-Secret': this.xummApiSecret
        };
    }
    async verify(payload) {
        while (true) {
            const result = await (0, utils_1.http)(`${this.xummApiEndpoint}/${payload}`, 'GET', this._headers());
            if (result.hasOwnProperty('error') &&
                result.hasOwnProperty('code') &&
                result.hasOwnProperty('message')) {
                return undefined;
            }
            else if (result.meta && result.meta.resolved) {
                if (result.meta.signed) {
                    // If you would like to see the raw signed payload
                    // console.log("XUMM SIGNED PAYLOAD");
                    // console.log(result);
                    // The request has been signed, send it back, otherwise return undefined if the
                    // request has been resolved but not signed/cancelled/expired/etc.
                    // This is probably quite simple for now and can be extended later.
                    return result;
                }
                return undefined;
            }
            await (0, utils_1.wait)(2500);
        }
    }
    async sign(txJson, txId, account, signingOptions) {
        txJson;
        account;
        signingOptions;
        const txMeta = txJson.TransactionMetadata;
        const xummMeta = txMeta.xummMeta;
        // Delete the transaction metadata if it exists since the signing will fail
        // as this TransactionMetadata is not known to the schema.
        if (txJson.TransactionMetadata) {
            delete txJson.TransactionMetadata;
        }
        const xummOptionsPayload = {
            options: {
                // If submit is false, xumm returns the signed transaction.
                // If submit is true, xumm returns the signed transaction, but also submits to the XRPL for us.
                submit: false,
                expire: Math.ceil(this.maximumExecutionTime / 1000 / 60).toFixed()
            },
            user_token: typeof xummMeta !== 'undefined' ? xummMeta.issued_user_token : ''
        };
        const result = await (0, utils_1.http)(this.xummApiEndpoint, 'POST', this._headers(), JSON.stringify(Object.assign({ txjson: txJson }, xummOptionsPayload)));
        // If you would like to see the raw response (with app_url) payload to the xumm API
        // console.log("XUMM PAYLOAD (with app_url)");
        // console.log(result);
        const verification = await (0, utils_1.promiseTimeout)(this.maximumExecutionTime, this.verify(result.uuid));
        if (typeof verification === 'undefined') {
            // Unable to sign request (request was rejected or cancelled)
            throw new error_1.SologenicError('2002');
        }
        // Return the signed transaction
        return {
            id: txId,
            signedTransaction: verification.response.hex
        };
    }
}
exports.XummSigner = XummSigner;
