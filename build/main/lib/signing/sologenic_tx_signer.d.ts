import { RippleAPI } from 'sologenic-ripple-lib-1-10-0-patched';
import XrplAccount from '../account';
import * as SologenicTypes from '../../types/';
export default abstract class SologenicTxSigner implements SologenicTypes.ISologenicTxSigner {
    protected rippleApi: RippleAPI;
    protected includeSequence: boolean;
    signerID: string;
    cancelled: boolean;
    constructor(options: any);
    /**
     * Should we include a sequence number (for xumm, let xumm decide)
     */
    getIncludeSequence(): boolean;
    cancelSigning(cancel: boolean): boolean;
    sign(txJson: SologenicTypes.TX, txId: string, account?: XrplAccount, signingOptions?: any): Promise<any>;
    requestConnection(): Promise<any>;
}
