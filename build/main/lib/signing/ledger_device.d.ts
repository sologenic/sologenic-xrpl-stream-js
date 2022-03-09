import XrplAccount from '../account';
import * as SologenicTypes from '../../types';
import { SologenicTxSigner } from './index';
import { RippleAPI } from 'ripple-lib';
export declare class LedgerDeviceSigner extends SologenicTxSigner {
    protected getAddress: any;
    protected getAppConfiguration: any;
    protected signTransaction: any;
    protected transport: any;
    protected bip32Path: string;
    protected address: string;
    protected publicKey: string;
    protected api: RippleAPI;
    private _signAttempts;
    signerID: string;
    constructor(options: any);
    getWalletAddress(): Promise<{
        address: string;
        publicKey: string;
        accounts?: undefined;
    } | {
        accounts: Object[];
        address?: undefined;
        publicKey?: undefined;
    }>;
    setSelectedAccount(account: SologenicTypes.LedgerSelectedAccount): Promise<Boolean>;
    requestConnection(): Promise<SologenicTypes.SignerConnectionRef>;
    sign(txJson: SologenicTypes.TX, txId: string, _account?: XrplAccount, _signingOptions?: any): Promise<SologenicTypes.SignedTx>;
}
