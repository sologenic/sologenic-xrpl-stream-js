import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
export declare class SoloWalletSigner extends SologenicTxSigner {
    protected server_url: string;
    protected container_id: string;
    protected address: string;
    protected signing_refs: any;
    protected fallback_container_id: string;
    protected is_mobile: boolean;
    protected deeplink_url: string;
    signerID: string;
    constructor(options: any);
    requestConnection(): Promise<SologenicTypes.SignerConnectionRef>;
    sign(txJson: SologenicTypes.TX, txId: string, _account?: XrplAccount, _signingOptions?: any): Promise<SologenicTypes.SignedTx>;
    showSigningQRcode(): void;
}
