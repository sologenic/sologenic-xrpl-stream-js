import * as SologenicTypes from '../../types';
import XrplAccount from '../account';
import { SologenicTxSigner } from './index';
export declare class OfflineSigner extends SologenicTxSigner implements SologenicTypes.ISologenicTxSigner {
    protected wallet: any;
    signerID: string;
    constructor(options: any);
    requestConnection(): any;
    sign(txJson: SologenicTypes.TX, txId: string, account: XrplAccount, signingOptions?: any): Promise<SologenicTypes.SignedTx>;
}
