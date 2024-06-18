import { Transaction } from 'xrpl';
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
export declare class CrossmarkSigner {
    private _address;
    get address(): string;
    get currentTxRefs(): any;
    constructor(props?: ICrossmarkSignerProps);
    requestConnection(): Promise<{
        address: string;
    }>;
    sign(tx: Transaction, txId: string): Promise<{
        id: string;
        tx_blob: string;
        signedTransaction: string;
        tx: Transaction;
        signer: string;
    }>;
}
export {};
