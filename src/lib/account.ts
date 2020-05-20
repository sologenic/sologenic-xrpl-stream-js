import * as SologenicTypes from '../types/';
import { RippleAPI } from 'ripple-lib';
import * as RippleError from 'ripple-lib/dist/npm/common/errors';

export class XrplException extends Error {
  /**
   * @param message      Message for error
   * @param error        Inner error
   */

  public error?: Error;

  constructor(message: string, error?: Error|undefined) {
    super(message);

    this.error = error;
  }
}

export class XrplAddressException extends XrplException {
  constructor(message: string, error?: Error|undefined) {
    super(message, error);
  }
}

export class XrplSecretException extends XrplException {
  constructor(message: string, error?: Error|undefined) {
    super(message, error);
  }
}

export class XrplKeypairException extends XrplException {
  constructor(message: string, error?: Error|undefined) {
    super(message, error);
  }
}

export class XrplKeypairOrSecretMissingException extends XrplException {
  constructor(message: string, error?: Error|undefined) {
    super(message, error);
  }
}

export default class XrplAccount {
  constructor(address: string, secret?: string, publicKey?: string, privateKey?: string) {
    this.address = address;
    this.secret = secret;
    this.keypair = undefined;

    if (typeof(publicKey) !== 'undefined' || typeof(privateKey) !== 'undefined') {
      this.keypair = {
        publicKey: publicKey!,
        privateKey: privateKey!
      };
    }

    // Peform a validation
    this.validate();
  }

  /**
   * Ripple API
   */

  protected rippleApi: RippleAPI = new RippleAPI();

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

  protected currentSequence: number = 0;
  protected previousSequence?: number;
  protected previousTxId?: any;

  /**
   * Initialize an xrpl account
   */
  public static getAccount(address: string, secret?: string, publicKey?: string, privateKey?: string): XrplAccount {
    return new XrplAccount(address, secret, publicKey, privateKey);
  }

   /**
   * Validate an account
   */
  public validate(): void {
    if (!this.rippleApi.isValidAddress(this.address)) {
      throw new XrplAddressException('Address is not valid', new RippleError.ValidationError());
    }

    if (typeof(this.secret) !== 'undefined' && !this.rippleApi.isValidSecret(this.secret)) {
      throw new XrplSecretException('Secret is not valid', new RippleError.ValidationError());
    }

    if (typeof(this.keypair) === 'object'
      && (typeof(this.keypair.publicKey) === 'undefined' || typeof(this.keypair.privateKey) === 'undefined')) {
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
  public setAccountSequence(currentSequence: number, previousSequence?: number, previousTxId?: string) {
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
  public incrementAccountSequenceBy(steps: number) {
    this.currentSequence = this.currentSequence + steps;

    return this;
  }

  /**
   * Get the current XRPL account sequence
   * @returns {Promise.<number>}
   */
  public getCurrentAccountSequence(): number {
    return this.currentSequence;
  }

  public getAddress(): any {
    return this.address;
  }

  public getSecret(): any {
    return this.hasSecret() ? this.secret : undefined;
  }

  public getKeypair(): any {
    return this.hasKeypair() ? this.keypair : undefined;
  }

  public setAddress(address: string) {
    this.address = address;

    return this;
  }

  public setSecret(secret: string) {
    this.secret = secret;

    return this;
  }

  public setKeypair(keypair: SologenicTypes.KeyPair) {
    this.keypair = keypair;

    return this;
  }

  public getAccount(): SologenicTypes.Account {
    let account: SologenicTypes.Account = {
      address: this.getAddress(),
      secret: this.getSecret(),
      keypair: this.getKeypair()
    };

    return account;
  }

  /**
   * Helper method to verify that the account has a keypair
   * @returns {boolean}
   */
  public hasKeypair(): boolean {
    if (typeof (this.keypair) === 'undefined')
      return false;

      if ((typeof this.keypair.publicKey !== 'undefined') && (typeof this.keypair.privateKey !== 'undefined')) {
        return true;
      }

      return false;
  }

  /**
   * Helper method to verify the account has a secret
   * @returns {boolean}
   */
  public hasSecret(): boolean {
    if (typeof this.secret !== 'undefined' && this.secret !== '') {
        return true;
      }

      return false;
  }
}
