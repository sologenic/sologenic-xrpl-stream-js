import Crossmark from '@crossmarkio/sdk';
export class CrossmarkSigner {
    _address;
    get address() {
        return this._address;
    }
    get currentTxRefs() {
        return undefined;
    }
    constructor(props) {
        this._address = props?.address;
    }
    async requestConnection() {
        try {
            const { response } = await Crossmark.methods.signInAndWait();
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
            const { response } = await Crossmark.methods.signAndWait(tx);
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
