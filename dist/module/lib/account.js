import { isValidAddress, isValidSecret, ValidationError } from "xrpl";
export class XrplException extends Error {
    /**
     * @param message      Message for error
     * @param error        Inner error
     */
    error;
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
export class XrplAddressException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
export class XrplSecretException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
export class XrplKeypairException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
export class XrplKeypairOrSecretMissingException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
export default class XrplAccount {
    constructor(address, secret, publicKey, privateKey, mnemonic) {
        this.address = address;
        this.secret = secret;
        this.keypair = undefined;
        this.mnemonic = undefined;
        if (typeof publicKey !== "undefined" || typeof privateKey !== "undefined") {
            this.keypair = {
                publicKey: publicKey,
                privateKey: privateKey
            };
        }
        if (mnemonic) {
            this.mnemonic = mnemonic;
        }
        // Peform a validation
        this.validate();
    }
    /**
     * XRPL Account
     */
    address;
    /**
     * XRPL Account Secret
     */
    secret;
    /**
     * XRPL Account Mnemonic
     */
    mnemonic;
    /**
     * XRPL Keypair.  Reference https://xrpl.org/cryptographic-keys.html#master-key-pair
     * and https://xrpl.org/cryptographic-keys.html#regular-key-pair for more details on
     * on the difference between the account seed and key pairs and how to disable the
     * master key on your account
     */
    keypair;
    /**
     * Current sequence number of the XRPL
     */
    currentSequence = 0;
    previousSequence;
    previousTxId;
    /**
     * Initialize an xrpl account
     */
    static getAccount(address, secret, publicKey, privateKey, mnemonic) {
        return new XrplAccount(address, secret, publicKey, privateKey, mnemonic);
    }
    /**
     * Validate an account
     */
    validate() {
        if (!isValidAddress(this.address)) {
            throw new XrplAddressException("Address is not valid", new ValidationError());
        }
        if (typeof this.secret !== "undefined" && !isValidSecret(this.secret)) {
            throw new XrplSecretException("Secret is not valid", new ValidationError());
        }
        if (typeof this.keypair === "object" &&
            (typeof this.keypair.publicKey === "undefined" ||
                typeof this.keypair.privateKey === "undefined")) {
            throw new XrplKeypairException("Keypair is not valid", new ValidationError());
        }
        // Don't check if we have a keypair or secret because
        // we may only pass in an address because we are are only
        // wanting to monitor an address
        /*
        if (!this.hasKeypair() && !this.hasSecret()) {
          throw new XrplKeypairOrSecretMissingException('Missing keypair or secret');
        }
        */
    }
    /**
     * Set XRPL account sequence
     * @param sequence XRPL account sequence
     * @returns {Promise.<this>}
     */
    setAccountSequence(currentSequence, previousSequence, previousTxId) {
        // Prevent race since the current sequence is sometimes calculate at the end of the
        // ledger, therefore once a transaction is created, it fails because the sequence
        // is already past.
        this.currentSequence = currentSequence;
        this.previousSequence = previousSequence;
        this.previousTxId = previousTxId;
        // console.log(`Assigning account sequence (currentSequence=${this.currentSequence}, previousSequence=${this.previousSequence})`);
        return this;
    }
    /**
     * Increment XRPL account sequence by
     * @param steps Increment by number of steps (signed; -1 to decrement by 1)
     * @returns {Promise.<this>}
     */
    incrementAccountSequenceBy(steps) {
        this.currentSequence = this.currentSequence + steps;
        return this;
    }
    /**
     * Get the current XRPL account sequence
     * @returns {Promise.<number>}
     */
    getCurrentAccountSequence() {
        return this.currentSequence;
    }
    getAddress() {
        return this.address;
    }
    getMnemonic() {
        return this.mnemonic;
    }
    getSecret() {
        return this.hasSecret() ? this.secret : undefined;
    }
    getKeypair() {
        return this.hasKeypair() ? this.keypair : undefined;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
    setSecret(secret) {
        this.secret = secret;
        return this;
    }
    setMnemonic(mnemonic) {
        this.mnemonic = mnemonic;
        return this;
    }
    setKeypair(keypair) {
        this.keypair = keypair;
        return this;
    }
    getAccount() {
        let account = {
            address: this.getAddress(),
            secret: this.getSecret(),
            keypair: this.getKeypair(),
            mnemonic: this.getMnemonic()
        };
        return account;
    }
    /**
     * Helper method to verify that the account has a keypair
     * @returns {boolean}
     */
    hasKeypair() {
        if (typeof this.keypair === "undefined")
            return false;
        if (typeof this.keypair.publicKey !== "undefined" &&
            typeof this.keypair.privateKey !== "undefined") {
            return true;
        }
        return false;
    }
    /**
     * Helper method to verify the account has a secret
     * @returns {boolean}
     */
    hasSecret() {
        if (typeof this.secret !== "undefined" && this.secret !== "") {
            return true;
        }
        return false;
    }
    /**
     * Helper method to verify the account has a secret
     * @returns {boolean}
     */
    hasMnemonic() {
        if (typeof this.mnemonic !== "undefined" && this.mnemonic !== "") {
            return true;
        }
        return false;
    }
}
