import { RippleAPI } from 'sologenic-ripple-lib-1-10-0-patched';
import * as RippleError from 'sologenic-ripple-lib-1-10-0-patched/dist/npm/common/errors';
export class XrplException extends Error {
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
        /**
         * Ripple API
         */
        this.rippleApi = new RippleAPI();
        /**
         * Current sequence number of the XRPL
         */
        this.currentSequence = 0;
        this.address = address;
        this.secret = secret;
        this.keypair = undefined;
        this.mnemonic = undefined;
        if (typeof publicKey !== 'undefined' || typeof privateKey !== 'undefined') {
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
     * Initialize an xrpl account
     */
    static getAccount(address, secret, publicKey, privateKey, mnemonic) {
        return new XrplAccount(address, secret, publicKey, privateKey, mnemonic);
    }
    /**
     * Validate an account
     */
    validate() {
        if (!this.rippleApi.isValidAddress(this.address)) {
            throw new XrplAddressException('Address is not valid', new RippleError.ValidationError());
        }
        if (typeof this.secret !== 'undefined' &&
            !this.rippleApi.isValidSecret(this.secret)) {
            throw new XrplSecretException('Secret is not valid', new RippleError.ValidationError());
        }
        if (typeof this.keypair === 'object' &&
            (typeof this.keypair.publicKey === 'undefined' ||
                typeof this.keypair.privateKey === 'undefined')) {
            throw new XrplKeypairException('Keypair is not valid', new RippleError.ValidationError());
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
        if (typeof this.keypair === 'undefined')
            return false;
        if (typeof this.keypair.publicKey !== 'undefined' &&
            typeof this.keypair.privateKey !== 'undefined') {
            return true;
        }
        return false;
    }
    /**
     * Helper method to verify the account has a secret
     * @returns {boolean}
     */
    hasSecret() {
        if (typeof this.secret !== 'undefined' && this.secret !== '') {
            return true;
        }
        return false;
    }
    /**
     * Helper method to verify the account has a secret
     * @returns {boolean}
     */
    hasMnemonic() {
        if (typeof this.mnemonic !== 'undefined' && this.mnemonic !== '') {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEUsT0FBTyxLQUFLLFdBQVcsTUFBTSw0REFBNEQsQ0FBQztBQUUxRixNQUFNLE9BQU8sYUFBYyxTQUFRLEtBQUs7SUFRdEMsWUFBWSxPQUFlLEVBQUUsS0FBeUI7UUFDcEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFDckQsWUFBWSxPQUFlLEVBQUUsS0FBeUI7UUFDcEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUNwRCxZQUFZLE9BQWUsRUFBRSxLQUF5QjtRQUNwRCxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBQ3JELFlBQVksT0FBZSxFQUFFLEtBQXlCO1FBQ3BELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLGFBQWE7SUFDcEUsWUFBWSxPQUFlLEVBQUUsS0FBeUI7UUFDcEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLENBQUMsT0FBTyxPQUFPLFdBQVc7SUFDOUIsWUFDRSxPQUFlLEVBQ2YsTUFBZSxFQUNmLFNBQWtCLEVBQ2xCLFVBQW1CLEVBQ25CLFFBQWlCO1FBc0JuQjs7V0FF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