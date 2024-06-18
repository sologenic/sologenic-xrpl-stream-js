import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
import { IXummQueryPayload } from '../../types/xumm';
export declare class XummSigner extends SologenicTxSigner {
    protected xummApiKey: string;
    protected xummApiSecret: string;
    protected xummApiEndpoint: string;
    protected xummApiUserToken?: string;
    signerID: string;
    protected maximumExecutionTime: number;
    constructor(options: any);
    protected _headers(): object;
    verify(payload: string): Promise<IXummQueryPayload | undefined>;
    sign(txJson: SologenicTypes.TX, txId: string, account?: XrplAccount, signingOptions?: any): Promise<SologenicTypes.SignedTx>;
}
