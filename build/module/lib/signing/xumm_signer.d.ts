import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
import { XummWalletSignerSubmitPayload } from '../../types/api_signer';
export declare class XummWalletSigner extends SologenicTxSigner {
    protected server_url: string;
    protected container_id: string;
    protected address: string;
    protected signing_refs: any;
    protected fallback_container_id: string;
    protected is_mobile: boolean;
    signerID: string;
    constructor(options: any);
    requestConnection(): Promise<SologenicTypes.SignerConnectionRef>;
    sign(txJson: SologenicTypes.TX, txId: string, _account?: XrplAccount, _signingOptions?: any): Promise<SologenicTypes.SignedTx>;
    showSigningQRcode(): void;
    checkForSigned(url: string, id: string): Promise<XummWalletSignerSubmitPayload>;
}
