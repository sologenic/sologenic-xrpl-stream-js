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
            const result = await utils_1.http(`${this.xummApiEndpoint}/${payload}`, 'GET', this._headers());
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
            await utils_1.wait(2500);
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
        const result = await utils_1.http(this.xummApiEndpoint, 'POST', this._headers(), JSON.stringify(Object.assign({ txjson: txJson }, xummOptionsPayload)));
        // If you would like to see the raw response (with app_url) payload to the xumm API
        // console.log("XUMM PAYLOAD (with app_url)");
        // console.log(result);
        const verification = await utils_1.promiseTimeout(this.maximumExecutionTime, this.verify(result.uuid));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHVtbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2lnbmluZy94dW1tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUFzRDtBQUl0RCxtQ0FBNEM7QUFDNUMsb0NBQTBDO0FBRzFDLE1BQWEsVUFBVyxTQUFRLHlCQUFpQjtJQVcvQyxZQUFZLE9BQVk7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBWFAsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixvQkFBZSxHQUN2QiwwQ0FBMEMsQ0FBQztRQUU3QyxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRTFCLHFEQUFxRDtRQUMzQyx5QkFBb0IsR0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBS2pELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTdCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUNs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