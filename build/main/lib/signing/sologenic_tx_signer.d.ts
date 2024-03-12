import XrplAccount from '../account';
import * as SologenicTypes from '../../types/';
export default abstract class SologenicTxSigner implements SologenicTypes.ISologenicTxSigner {
    protected includeSequence: boolean;
    signerID: string;
    cancelled: boolean;
    options: any;
    constructor(options: any);
    /**
     * Should we include a sequence number (for xumm, let xumm decide)
     */
    getIncludeSequence(): boolean;
    cancelSigning(cancel: boolean): boolean;
    sign(txJson: SologenicTypes.TX, txId: string, account?: XrplAccount, signingOptions?: any): Promise<any>;
    requestConnection(): Promise<any>;
}
