import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
export declare class DcentSigner extends SologenicTxSigner {
    signerID: string;
    protected bip32Path: string;
    protected address: string;
    constructor(options: any);
    requestConnection(): Promise<SologenicTypes.SignerConnectionRef>;
    sign(txJson: SologenicTypes.TX, txId: string, _account?: XrplAccount, _signingOptions?: any): Promise<SologenicTypes.SignedTx>;
}
