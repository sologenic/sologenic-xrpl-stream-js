"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossmarkSigner = void 0;
const sdk_1 = __importDefault(require("@crossmarkio/sdk"));
class CrossmarkSigner {
    get address() {
        return this._address;
    }
    get currentTxRefs() {
        return undefined;
    }
    constructor(props) {
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
                throw 'connection rejected';
            }
            throw response;
        }
        catch (e) {
            throw {
                thrower: 'Crossmark.requestConnection',
                error: e
            };
        }
    }
    async sign(tx) {
        try {
            const { response } = await sdk_1.default.methods.signAndWait(tx);
            if (response.data.meta.isSigned && response.data.meta.isSuccess) {
                return { tx_blob: response.data.txBlob, tx: tx, signer: this._address };
            }
            if (response.data.meta.isRejected) {
                throw 'tx_rejected';
            }
            throw response;
        }
        catch (e) {
            throw {
                thrower: 'Crossmark.sign',
                error: e
            };
        }
    }
}
exports.CrossmarkSigner = CrossmarkSigner;
