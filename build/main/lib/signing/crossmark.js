"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossmarkSigner = void 0;
const sdk_1 = __importDefault(require("@crossmarkio/sdk"));
const error_1 = require("../error");
const sologenic_tx_signer_1 = __importDefault(require("./sologenic_tx_signer"));
class CrossmarkSigner extends sologenic_tx_signer_1.default {
    get address() {
        return this._address;
    }
    get currentTxRefs() {
        return undefined;
    }
    constructor(props) {
        super(props);
        this._address = props === null || props === void 0 ? void 0 : props.address;
    }
    async requestConnection() {
        try {
            const { response } = await sdk_1.default.methods.signInAndWait();
            if (response.data.address) {
                this._address = response.data.address;
                return { address: this._address };
            }
            if (response.data.meta.isRejected) {
                throw new error_1.SologenicError('2003');
            }
            throw new error_1.SologenicError('1000');
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async sign(txJson, txId) {
        try {
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 1000;
            const { response } = await sdk_1.default.methods.signAndWait(txJson);
            if (response.data.meta.isSigned && response.data.meta.isSuccess) {
                return {
                    id: txId,
                    tx_blob: response.data.txBlob,
                    signedTransaction: response.data.txBlob
                    //   tx: tx,
                    //   signer: this._address
                };
            }
            if (response.data.meta.isRejected) {
                throw new error_1.SologenicError('2003');
            }
            throw new error_1.SologenicError('1000');
        }
        catch (e) {
            throw new Error(e.message);
            //   throw {
            //     thrower: 'Crossmark.sign',
            //     error: e
            //   };
        }
    }
}
exports.CrossmarkSigner = CrossmarkSigner;
