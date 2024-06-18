import Crossmark from '@crossmarkio/sdk';
import { SologenicError } from '../error';
import SologenicTxSigner from './sologenic_tx_signer';
export class CrossmarkSigner extends SologenicTxSigner {
    _address;
    get address() {
        return this._address;
    }
    get currentTxRefs() {
        return undefined;
    }
    constructor(props) {
        super(props);
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
                throw new SologenicError('2003');
            }
            throw new SologenicError('1000');
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async sign(txJson, txId) {
        try {
            const { response } = await Crossmark.methods.signAndWait(txJson);
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
                throw new SologenicError('2003');
            }
            throw new SologenicError('1000');
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
