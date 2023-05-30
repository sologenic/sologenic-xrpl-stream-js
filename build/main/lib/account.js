"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrplKeypairOrSecretMissingException = exports.XrplKeypairException = exports.XrplSecretException = exports.XrplAddressException = exports.XrplException = void 0;
const sologenic_ripple_lib_1_10_0_patched_1 = require("sologenic-ripple-lib-1-10-0-patched");
const RippleError = __importStar(require("sologenic-ripple-lib-1-10-0-patched/dist/npm/common/errors"));
class XrplException extends Error {
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
exports.XrplException = XrplException;
class XrplAddressException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
exports.XrplAddressException = XrplAddressException;
class XrplSecretException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
exports.XrplSecretException = XrplSecretException;
class XrplKeypairException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
exports.XrplKeypairException = XrplKeypairException;
class XrplKeypairOrSecretMissingException extends XrplException {
    constructor(message, error) {
        super(message, error);
    }
}
exports.XrplKeypairOrSecretMissingException = XrplKeypairOrSecretMissingException;
class XrplAccount {
    constructor(address, secret, publicKey, privateKey, mnemonic) {
        /**
         * Ripple API
         */
        this.rippleApi = new sologenic_ripple_lib_1_10_0_patched_1.RippleAPI();
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
exports.default = XrplAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkZBQWdFO0FBQ2hFLHdHQUEwRjtBQUUxRixNQUFhLGFBQWMsU0FBUSxLQUFLO0lBUXRDLFlBQVksT0FBZSxFQUFFLEtBQXlCO1FBQ3BELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQWJELHNDQWFDO0FBRUQsTUFBYSxvQkFBcUIsU0FBUSxhQUFhO0lBQ3JELFlBQVksT0FBZSxFQUFFLEtBQXlCO1FBQ3BELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBSkQsb0RBSUM7QUFFRCxNQUFhLG1CQUFvQixTQUFRLGFBQWE7SUFDcEQsWUFBWSxPQUFlLEVBQUUsS0FBeUI7UUFDcEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFKRCxrREFJQztBQUVELE1BQWEsb0JBQXFCLFNBQVEsYUFBYTtJQUNyRCxZQUFZLE9BQWUsRUFBRSxLQUF5QjtRQUNwRCxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUpELG9EQUlDO0FBRUQsTUFBYSxtQ0FBb0MsU0FBUSxhQUFhO0lBQ3BFLFlBQVksT0FBZSxFQUFFLEtBQXlCO1FBQ3BELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBSkQsa0ZBSUM7QUFFRCxNQUFxQixXQUFXO0lBQzlCLFlBQ0UsT0FBZSxFQUNmLE1BQWUsRUFDZixTQUFrQixFQUNsQixVQUFtQixFQUNuQixRQUFpQjtRQXNCbkI7O1dBRUc7UUFFTyxjQUFTLEdBQWMs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