import * as SologenicTypes from '../types/';
export declare class XrplException extends Error {
    /**
     * @param message      Message for error
     * @param error        Inner error
     */
    error?: Error;
    constructor(message: string, error?: Error | undefined);
}
export declare class XrplAddressException extends XrplException {
    constructor(message: string, error?: Error | undefined);
}
export declare class XrplSecretException extends XrplException {
    constructor(message: string, error?: Error | undefined);
}
export declare class XrplKeypairException extends XrplException {
    constructor(message: string, error?: Error | undefined);
}
export declare class XrplKeypairOrSecretMissingException extends XrplException {
    constructor(message: string, error?: Error | undefined);
}
export default class XrplAccount {
    constructor(address: string, secret?: string, publicKey?: string, privateKey?: string);
    /**
     * XRPL Account
     */
    protected address: string;
    /**
     * XRPL Account Secret
     */
    protected secret?: string;
    /**
     * XRPL Keypair.  Reference https://xrpl.org/cryptographic-keys.html#master-key-pair
     * and https://xrpl.org/cryptographic-keys.html#regular-key-pair for more details on
     * on the difference between the account seed and key pairs and how to disable the
     * master key on your account
     */
    protected keypair?: SologenicTypes.KeyPair;
    /**
     * Current sequence number of the XRPL
     */
    protected currentSequence: number;
    protected previousSequence?: number;
    protected previousTxId?: any;
    /**
     * Initialize an xrpl account
     */
    static getAccount(address: string, secret?: string, publicKey?: string, privateKey?: string): XrplAccount;
    /**
     * Validate an account
     */
    validate(): void;
    /**
     * Set XRPL account sequence
     * @param sequence XRPL account sequence
     * @returns {Promise.<this>}
     */
    setAccountSequence(currentSequence: number, previousSequence?: number, previousTxId?: string): this;
    /**
     * Increment XRPL account sequence by
     * @param steps Increment by number of steps (signed; -1 to decrement by 1)
     * @returns {Promise.<this>}
     */
    incrementAccountSequenceBy(steps: number): this;
    /**
     * Get the current XRPL account sequence
     * @returns {Promise.<number>}
     */
    getCurrentAccountSequence(): number;
    getAddress(): any;
    getSecret(): any;
    getKeypair(): any;
    setAddress(address: string): this;
    setSecret(secret: string): this;
    setKeypair(keypair: SologenicTypes.KeyPair): this;
    getAccount(): SologenicTypes.Account;
    /**
     * Helper method to verify that the account has a keypair
     * @returns {boolean}
     */
    hasKeypair(): boolean;
    /**
     * Helper method to verify the account has a secret
     * @returns {boolean}
     */
    hasSecret(): boolean;
}
