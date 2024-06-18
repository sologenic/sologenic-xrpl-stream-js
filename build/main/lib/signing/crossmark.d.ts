import { Transaction } from 'xrpl';
import SologenicTxSigner from './sologenic_tx_signer';
import * as SologenicTypes from '../../types';
export type ISignInTX = Transaction & {
    TransactionKind: string;
};
export interface ISignedTx {
    id?: string;
    tx_blob?: string;
    tx_hex?: string;
    push_token?: string;
    signer?: string;
    tx: Transaction | ISignInTX;
    hash?: string;
    cancelled?: boolean;
    expired?: boolean;
}
interface ICrossmarkSignerProps {
    address?: string;
}
export declare class CrossmarkSigner extends SologenicTxSigner {
    private _address;
    get address(): string;
    get currentTxRefs(): any;
    constructor(props?: ICrossmarkSignerProps);
    requestConnection(): Promise<{
        address: string;
    }>;
    sign(txJson: SologenicTypes.TX, txId: string): Promise<SologenicTypes.SignedTx>;
}
export {};
