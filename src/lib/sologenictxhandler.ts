import { RippleAPI } from 'ripple-lib';
import * as SologenicTypes from '../types/';
import * as RippleError from 'ripple-lib/dist/npm/common/errors';

import { SologenicError } from './error';

import { all as mathAll, create as mathCreate } from 'mathjs';
import { TXMQƨ } from './stxmq';
import { EventEmitter } from 'events';
import { v4 as uuid } from 'uuid';
import { wait } from './soloutils';

/**
 * The [[SologenicTxHandler]] maintains state of a transaction from
 * its inception until it has been validated in the XRPL.
 *
 * The Sologenic TX handler can use two different queues at the
 * current point in time, one which is called [[HashQueue]] and
 * the other [[RedisQueue]] where the hash queue is ephemeral and
 * the redis queue can persist events between process restarts.
 * @packageDocumentation
 */
export class SologenicTxHandler extends EventEmitter {
  /**
   * Queue mutator/getter for create, replace, update, and delete type queue based operations
   */
  protected txmq: any;

  /**
   * Clear cache of sologenic tx handler when the queue is initialized
   */
  protected clearCache: boolean = false;

  /**
   * Ripple API of Sologenic TX Handler.  See [[RippleAPI]] for more documentation
   */
  protected rippleApi!: RippleAPI;

  /**
   * Dispatch listener boolean flag for Sologenic TX Handler.  This is to ensure we're only
   * running a single dispatcher thread at a time.
   */
  protected dispatchListener: boolean = false;

  /**
   * XRPL Account
   */
  protected account: string = '';

  /**
   * XRPL Account Secret
   */
  protected secret: string = '';

  /**
   * XRPL Keypair.  Reference https://xrpl.org/cryptographic-keys.html#master-key-pair
   * and https://xrpl.org/cryptographic-keys.html#regular-key-pair for more details on
   * on the difference between the account seed and key pairs and how to disable the
   * master key on your account
   */
  protected keypair: SologenicTypes.KeyPair = { publicKey: '', privateKey: '' };

  /**
   * Internal queue for transaction events occuring on a specific transaction.
   * Events are emitted globally to the [[SologenicTxHandler]] instance and the
   * txEvents queue
   */
  protected txEvents: { [key: string]: EventEmitter } = {};

  /**
   * The ledger class member is for tracking the current state of the ledger
   * by tracking the base XRP fee, ledger hash, version, timestamp and so on.
   * Please refer to the interface definition to see the fields received by
   * the XRPL stream ledger updates in [[SologenicTypes.Ledger]]
   */
  protected ledger: SologenicTypes.Ledger;

  /**
   * Our fee cushion to make sure that all fees are multiplied by
   * 1.2 so that we ensure that we're not being rejected by the
   * XRPL for too small of a txFee.
   */
  protected feeCushion: number = 1.2;

  /**
   * Current sequence number of the XRPL
   */
  protected sequence: number = 0;

  /**
   * Our math library used to calculate fees
   */
  protected math: any;

  /**
   * Constructor for an instance of sologenic tx handler.
   *
   * @param rippleApiOptions     This parameter is used to construct ripple-lib and takes in:
   * @param server               XRPL server to connect (eg. wss://s1.ripple.com)
   * @param feeCushion?          This property is overridden by Sologenic to 1.2
   * @param maxFeeXRP?           Maximum fee that we'll use when sending a transaction to the XRPL
   * @param trace                Enable tracing on the XRPL
   * @param proxy                Use a proxy server
   * @param timeout              Overridden by Sologenic to 1000000
   * @param sologenicOptions     Sologenic queue option.  See [[QUEUE_TYPE_STXMQ_HASH]] or [[QUEUE_TYPE_STXMQ_REDIS]]
   *
   * @throws SologenicError      Sologenic exception
   *
   * Please see the [[README.md]] for an example and more details on using this library and the initialization parameters.
   */
constructor(
    rippleApiOptions: SologenicTypes.RippleAPIOptions,
    sologenicOptions: SologenicTypes.TransactionHandlerOptions
  ) {
    /**
     * Event emitter constructor
     */
    super();

    try {
      /**
       * Construct a new Ripple API instance
       */
      this.rippleApi = new RippleAPI({
        feeCushion: 1,
        timeout: 1000000,
        ...rippleApiOptions
      });

      /**
       * Subscribe to ripple-lib on("") events
       */
      this._subscribeWS();

      /**
       * Initialize ledger object
       */
      this.ledger = {
        baseFeeXRP: '0.00001',
        ledgerTimestamp: '0',
        ledgerVersion: 0
      };

      /**
        Initialize TXMQƨ (Sologenic Transaction Message Queue)
      */
      try {
        this.txmq = new TXMQƨ(sologenicOptions); // Pass on the queue connection details
      } catch (error) {
        throw new SologenicError('1002', error);
      }

      /**
       * Set clearCache to true if the client needs to ignore and clean the queue before starting
       */
      if (
        typeof sologenicOptions.clearCache !== 'undefined' &&
        sologenicOptions.clearCache
      ) {
        this.clearCache = true;
      }

      /**
        Initialize BigNumber
      */
      this.math = mathCreate(mathAll, {
        epsilon: 1e-12,
        number: 'BigNumber',
        precision: 64
      });
    } catch (error) {
      throw new SologenicError('1001', error);
    }
  }

  /**
   * Set XRPL base fee for transactions, the ledger object is updated by ledger streaming event updates
   * @param fee Fee in XRP (not drops), this will be converted when constructing the TX
   * @returns {Promise.<this>}
   */
  public async setLedgerBaseFeeXRP(fee: string): Promise<this> {
    this.ledger.baseFeeXRP = fee;

    return this;
  }

  /**
   * Get XRPL base fee for transactions
   * @param fee Fee in XRP (not drops), this will be converted when constructing the TX
   * @returns {Promise.<string>}
   */
  public async getLedgerBaseFeeXRP(): Promise<string> {
    return this.ledger.baseFeeXRP;
  }

  /**
   * Set XRPL ledger version, the ledger object is updated by ledger streaming event updates
   * @param version XRPL ledger version
   * @returns {Promise.<this>}
   */
  public async setLedgerVersion(version: number): Promise<this> {
    this.ledger.ledgerVersion = version;

    return this;
  }

  /**
   * Get XRPL ledger version
   * @returns {Promise.<number>}
   */
  public async getLedgerVersion(): Promise<number> {
    return this.ledger.ledgerVersion;
  }

  /**
   * Set XRPL account sequence
   * @param sequence XRPL account sequence
   * @returns {Promise.<this>}
   */
  public async setAccountSequence(sequence: number): Promise<this> {
    this.sequence = sequence;

    return this;
  }

  /**
   * Increment XRPL account sequence by
   * @param steps Increment by number of steps (signed; -1 to decrement by 1)
   * @returns {Promise.<this>}
   */
  public async incrementAccountSequenceBy(steps: number): Promise<this> {
    this.sequence = this.sequence + steps;

    return this;
  }

  /**
   * Get the current XRPL account sequence
   * @returns {Promise.<number>}
   */
  public async getAccountSequence(): Promise<number> {
    return this.sequence;
  }

  /**
   * Get access to the initialized Ripple API instance used by the Sologenic TX Handler
   * @returns {RippleAPI}
   */
  public getRippleApi(): RippleAPI {
    return this.rippleApi;
  }

  /**
   * Connect to various services: RippleAPI, fetch current ledger state.
   * @returns {Promise.<this>}
   */
  public async connect(): Promise<this> {
    try {
      if (!this.getRippleApi().isConnected()) {
        await this.getRippleApi().connect();
        await this._connected();

        // Start the dispatcher listener
        if (!this.dispatchListener) {
          this._dispatch();
          this.dispatchListener = true;
        }

        // Start the validator listener
        this._validateOnLedger();
      }

      // Return this
      return this;
    } catch (error) {
      // if there is a disconnection error, keep trying until connection is made. Retry in 1000ms
      if (error instanceof RippleError.DisconnectedError) {
        await this._connected();
        return this;
        // throw new SologenicError('1003');
      }
      return this;
    }
  }

  /**
   * Helper method to verify that the account has a keypair
   * @returns {boolean}
   */
  public hasKeypair(): boolean {
    if ((typeof this.account !== 'undefined' && this.account !== '') &&
      (typeof this.keypair.publicKey !== 'undefined' && this.keypair.publicKey !== '') &&
      (typeof this.keypair.privateKey !== 'undefined' && this.keypair.privateKey !== '')) {
        return true;
      }

      return false;
  }

  /**
   * Helper method to verify the account has a secret
   * @returns {boolean}
   */
  public hasSecret(): boolean {
    if ((typeof this.account !== 'undefined' && this.account !== '') &&
      (typeof this.secret !== 'undefined' && this.secret !== '')) {
        return true;
      }

      return false;
  }

  /**
   * Set the current account to use on the XRPL for transactions or use
   * a keypair.  See the [[SologenicTypes.Account]] interface for more
   * details.
   *
   * Once an account has been set, connect to the XRPL and fetch the
   * current account state, including the sequence number and validate
   * any missed transactions.
   *
   * @param {account}           XRPL account address and secret, or address and a keypair
   * @returns {Promise.<void>}
   * @throws {SologenicError}
   */
  public async setAccount(account: SologenicTypes.Account): Promise<void> {
    try {
      await this.connect();

      /*
        Is this a valid XRP address?
      */
      if (this.getRippleApi().isValidAddress(account.address)) {
        this.account = account.address;
      } else {
        throw new SologenicError('2000', new RippleError.ValidationError());
      }
      /*
        Is this a valid XRP secret? and if no keypair is set
      */
      if (!this.hasKeypair()) {
        if (this.getRippleApi().isValidSecret(account.secret)) {
          this.secret = account.secret;
          this.keypair = {
            publicKey: '',
            privateKey: ''
          };
        } else {
          throw new SologenicError('2001', new RippleError.ValidationError());
        }
      } else {
        this.keypair = account.keypair;
        this.secret = '';
      }

      await this._fetchCurrentState();

      if (this.clearCache) {
        /**
         * Clear the cache
        */
        await this.txmq.delAll();
      } else {
        /**
         * Process any missed transactions before continuing
         * Transactions can be missed if they are in the dispatched state. This function processes previous transactions left in the queue, if any.
         */
        await this._validateMissedTransactions();
      }
    } catch (error) {
      throw new SologenicError('1001', error);
    }
  }

  /**
   * Submit transaction to system. This transaction will then be move to persistent
   * data storage(Redis) or hash store and will be handeled.
   * Each transaction is assigned an id (uuid) to be tracked in the system.
   * Assigned IDs remain with the transaction until validated.
   * Since the transactions are not final until validated, the only way to track
   * transactions in the system is to track them with
   * ids across different channels in the system (e.g. message queue).
   * This ID is also submitted as a refference withing the transaction
   * in the Memo field (HEX representation)
   * submit() is non-blocking, but returns an object with three properties
   * explain in the return.
   *
   * @example
   * ```typescript
   *  {
   *    TransactionType: "AccountSet",
   *    Account: "rEzaLebaTBXNy7C4s8Ru7yxxkE65bDAAkF",
   *    SetFlag: 5
   *  }
   *  ```
   *
   *  It is important to note that certain properties such as Fee, Sequence, Flags, LastLedgerSequence are inserted by this class
   *  and are overridden if provided.
   *
   * @param   {tx}                  Transaction Object
   * @returns {TransactionObject}
   */
  public submit(tx: SologenicTypes.TX): SologenicTypes.TransactionObject {
    try {
      // Generate a unique ID using the uuid library
      const id = uuid();

      // Add a new EventEmitter to txEvents array identifiable with the generated id.
      this.txEvents![id] = new EventEmitter();
      this._initiateTx(id, tx);

      return {
        events: this.txEvents![id],
        id,
        promise: (() => {
          return this._resolve(id);
        })()
      };
    } catch (error) {
      return error;
    }
  }

  /**
   * Check if we're connected to the XRPL
   * @returns connected
   */
  private async _connected(): Promise<boolean> {
    if (this.getRippleApi().isConnected()) {
      return true;
    } else {
      await wait(100);
      return this._connected();
    }
  }

  /**
   * Recursivle loop and query TXMQƨ to see when the id has been validated, every 100 milliseconds
   * @param id
   * @returns ResolvedTx
   */
  private async _resolve(id: string): Promise<SologenicTypes.ResolvedTx> {
    const validated = await this.txmq.get('txmq:validated:' + this.account, id);

    if (typeof validated !== 'undefined') {
      return validated.data;
    } else {
      const failed = await this.txmq.get('txmq:failed:' + this.account, id);

      if (typeof failed !== 'undefined') {
        return failed.data;
      }

      // retry in 100ms
      await wait(100);
      return this._resolve(id);
    }
  }

  /**
   * Fetches current ledger and account information to be used for transaction submission
   *
   * @returns {Promise.<void>}
   * @throws {SologenicError}
   */
  private async _fetchCurrentState(): Promise<void> {
    try {
      // If the Ripple API is not connected, make sure we connect.
      if (!this.getRippleApi().isConnected()) {
        await this.getRippleApi().connect();
      }

      // Use the ripple-lib built in REST functions to get the ledger version and fee. Please note that these
      // values are updated using the WS after the first initilization, until this method is called again
      await this.setLedgerVersion(await this.getRippleApi().getLedgerVersion());
      await this.setLedgerBaseFeeXRP(await this.getRippleApi().getFee());

      // Get account info of the current XRP account and set the sequence to submit transactions
      const account = await this.getRippleApi().request('account_info', {
        account: this.account
      });

      await this.setAccountSequence(account.account_data.Sequence);
    } catch (error) {
      // if there is a disconnection error, keep trying until connection is made. Retry in 1000ms
      if (error instanceof RippleError.DisconnectedError) {
        // wait for connection to be re-established
        await this.getRippleApi().connect();
        // try fetching the current state again
        await this._fetchCurrentState();
        // Unspecific RippleError
      } else if (error instanceof RippleError.RippledError) {
        throw new SologenicError('1004', error);
      } else {
        throw new SologenicError('1000', error);
      }
    }
  }

  /**
   * Get the current state account state
   */
  public async fetchCurrentState(): Promise<Number> {
    await this._fetchCurrentState();

    return this.sequence;
  }

  /**
   * Subscribe to ripple-lib websocket events connect, disconnect, error and ledger stream updates.
   * @throws {SologenicError}
   */
  private _subscribeWS(): any {
    try {
      this.getRippleApi().on('connect', () => {
        // Reconnect
      });

      this.getRippleApi().on('disconnect', () => {
        // Reconnect
        this.getRippleApi().connect();
      });

      this.getRippleApi().on('error', () => {
        // Reconnect
        this.getRippleApi().connect();
      });

      this.getRippleApi().on('ledger', (ledger: SologenicTypes.Ledger) => {
        // Update the ledger version
        this.ledger = ledger;
      });
    } catch (error) {
      throw new SologenicError('1005', error);
    }
  }

  /**
   * Initiate the transaction, prepare it to add the queue
   *
   * @param {id}  Transaction ID generated by the UUID library
   * @param {tx}  Raw Transaction Object
   *
   * @throws {SologenicError}
   */
  private async _initiateTx(id: string, tx: SologenicTypes.TX): Promise<void> {
    try {
      await this._addRawTxToQueue(this._constructRawTx(tx), id);
    } catch (error) {
      throw new SologenicError('1000', error);
    }
  }

  /**
   * Helper function to add any other properties to the TX before being added to the queue.
   * @param {tx}  Raw Transaction Object
   */
  private _constructRawTx(tx: SologenicTypes.TX): SologenicTypes.TxJSON {
    return { txJSON: tx };
  }

  /**
   * Add the raw transaction to the queue.
   * @param {id}  Transaction ID generated by the UUID library
   * @param {tx}  Raw Transaction Object
   */
  private async _addRawTxToQueue(
    txJson: SologenicTypes.TxJSON,
    id?: string
  ): Promise<void> {
    try {
      const item = await this.txmq.add('txmq:raw:' + this.account, txJson, id);

      const queuedEvent: SologenicTypes.QueuedEvent = {
        id: id!,
        txJson: txJson
      };

      // Emit on object specific listener
      if (typeof this.txEvents![item.id] !== 'undefined') {
        this.txEvents![item.id].emit('queued', queuedEvent);
      }

      // Emit globally
      this.emit('queued', queuedEvent);
    } catch (error) {
      throw new SologenicError('1000', error);
    }
  }

  /**
   * Add id to the memo field of the transactions.
   * More info: https://xrpl.org/transaction-common-fields.html#memos-field
   *
   * @param {tx}  Raw Transaction Object
   */
  private _addMemo(tx: SologenicTypes.UnsignedTx): SologenicTypes.TX {
    try {
      const constructedTx: SologenicTypes.TX = {
        ...tx!.data!.txJSON,
        Memos: [
          {
            Memo: {
              MemoData: unescape(encodeURIComponent(tx.id))
                .split('')
                .map(v => {
                  return v.charCodeAt(0).toString(16);
                })
                .join('')
                .toUpperCase()
            }
          }
        ]
      };
      return constructedTx;
    } catch (error) {
      throw new SologenicError('1000', error);
    }
  }

  /**
   * Dispatch listener
   *
   * @description Recursively loop and fetch the persistent data store to fetch groups of transactions to be dispatched
   */
  private async _dispatch(): Promise<void> {
    try {
      // Get raw transactions from the queue
      const unsignedTxs: Array<SologenicTypes.UnsignedTx> = await this.txmq.getAll(
        'txmq:raw:' + this.account
      );
      // Loop through each, FIFO order, and dispatch the transaction
      for (const unsignedTx of unsignedTxs!) {
        await this._dispatchHandler(unsignedTx);
      }
      // Once the queue is dispatched, wait 100ms and re-fetch the queue.
      await wait(100);
      return await this._dispatch();
    } catch (error) {
      // Ignore errors and re-try the queue, wait 100ms and re-fetch the queue.
      await wait(100);
      return this._dispatch();
    }
  }

  /**
   * Dispatch job handler
   *
   * @description Recursively try transactions and based on the dispatch result try again, or a
   * @param unsignedTx
   */
  private async _dispatchHandler(
    unsignedTx: SologenicTypes.UnsignedTx
  ): Promise<void> {
    try {
      const result: boolean = await this._dispatchToLedger(unsignedTx);
      if (result) {
        await this.txmq.del('txmq:raw:' + this.account, unsignedTx.id);
        return;
      } else {
        return await this._dispatchHandler(unsignedTx);
      }
    } catch (error) {
      throw new SologenicError('1000', error);
    }
  }

  /**
   * Dispatch the transaction to the ledger
   *
   * @description Adds a memo to the transaction for tracking
   * @description Validates the the tx Flags are stored as an unsigned integer as JS converts to a signed integer
   * @description Calculates the transaction fee, including applying a multiplier (default: 1.2)
   * @description Sets the sequence for the transaction based on the accounts last sequence number
   * @description Calculates the maximum ledger version we will wait for before we fail or requeue the transaction (default: 3 validated ledgers)
   * @description Signs the transaction with the account secret or keypair
   *
   * @param unsignedTx
   * @throws {SologenicError}
   */
  private async _dispatchToLedger(
    unsignedTx: SologenicTypes.UnsignedTx
  ): Promise<boolean> {
    try {
      // Add id in the memo common field for tracking
      const tx = this._addMemo(unsignedTx);

      if (!this.getRippleApi().isValidAddress(tx.Account)) {
        throw new SologenicError('2000', new RippleError.ValidationError());
      }

      if (typeof tx.Flags === 'undefined') {
        // Transaction Specific Settings
        switch (tx.TransactionType) {
          case 'AccountSet':
            tx.Flags = this.getRippleApi().txFlags.Universal.FullyCanonicalSig;
            // JavaScript converts operands to 32-bit signed ints before doing bitwise
            // operations. We need to convert it back to an unsigned int.
            tx.Flags = tx.Flags >>> 0;
            break;
        }
      } else {
        tx.Flags = tx.Flags >>> 0;
      }

      // multiply the fee by 1.2 to make sure the tx goes through
      // Suggestion. In cases of surge in network fee, this value can be dynamically increased.
      tx.Fee = this.getRippleApi().xrpToDrops(
        this.math.multiply(await this.getLedgerBaseFeeXRP(), this.feeCushion).toFixed(6)
      );

      // Set the sequence of this tx to the latest sequence obtained from account_info
      tx.Sequence = await this.getAccountSequence();

      // Set LastLedgerSequence for this tx to make sure it becomes invalid after 3 verified closed ledgers
      tx.LastLedgerSequence = (await this.getLedgerVersion()) + 3

      // console.log(`Signing (secret=${this.secret}, keypair={publicKey=${this.keypair.publicKey}, privateKey=${this.keypair.privateKey}})`);

      // Sign the transaction using the secret provided on init
      const signedTx: SologenicTypes.SignedTx = this.getRippleApi().sign(
        JSON.stringify(tx),
        this.hasSecret() ? this.secret : undefined,
        undefined,
        this.hasKeypair() ? this.keypair : undefined
      );

      // store the `before` ledger this transaction is being submitted
      const firstLedgerSequence: number = await this.getLedgerVersion();

      // Submit the transaction to the ledger
      const result: SologenicTypes.FormattedSubmitResponse = await this.getRippleApi().submit(
        signedTx.signedTransaction
      );

      // Increase our sequence for next transaction
      await this.incrementAccountSequenceBy(1);

      /*
        If the result code is NOT tesSUCCESS, emit to object listner and globally warning the error.
        Note transaction is not ignore as it could be still validated due to many reasons
        Check:
        https://xrpl.org/tec-codes.html
        https://xrpl.org/tef-codes.html
        https://xrpl.org/tel-codes.html
        https://xrpl.org/tem-codes.html
        https://xrpl.org/ter-codes.html
        https://xrpl.org/tes-success.html
      */

      if (result.resultCode !== 'tesSUCCESS') {
        const warningEvent: SologenicTypes.WarningEvent = {
          id: unsignedTx.id,
          state: 'dispatch',
          reason: `${result.resultCode}: ${result.resultMessage}`,
          unsignedTx: unsignedTx
        };

        this.emit('warning', warningEvent);

        if (typeof this.txEvents![unsignedTx.id] !== 'undefined') {
          this.txEvents![unsignedTx.id].emit('warning', warningEvent);
        }

        // Specific actions based on different errors
        // 	The account sending the transaction does not have enough XRP to pay the Fee specified in the transaction.
        if (result.resultCode === 'terINSUF_FEE_B') {
          await wait(100);
        }

        // The network fee has increased due to load
        // The Fee from the transaction is not high enough to meet the server's current
        // transaction cost requirement, which is derived from its load level.
        if (result.resultCode === 'telINSUF_FEE_P') {
          await wait(100);
        }

        // The transaction did not meet the open ledger cost and also was not added to the transaction queue. This code occurs when a transaction with the same sender and sequence number already exists in the queue and the new one does not pay a large enough transaction cost to replace the existing transaction. To replace a transaction in the queue, the new transaction must have a Fee value that is at least 25% more, as measured in fee levels. You can increase the Fee and try again, send this with a higher Sequence number so it doesn't replace an existing transaction, or try sending to another server. New in: rippled 0.70.2
        if (result.resultCode === 'telCAN_NOT_QUEUE_FEE') {
          await wait(100);
        }

        // The transaction did not meet the open ledger cost and also was not added to the transaction queue because a transaction queued ahead of it from the same sender blocks it. (This includes all SetRegularKey and SignerListSet transactions, as well as AccountSet transactions that change the RequireAuth/OptionalAuth, DisableMaster, or AccountTxnID flags.) You can try again later, or try submitting to a different server.
        if (result.resultCode === 'telCAN_NOT_QUEUE_BLOCKED') {
          await wait(100);
        }

        // 	The address sending the transaction is not funded in the ledger (yet).
        if (result.resultCode === 'terNOaccount') {
          this.sequence--;
          return await this._txFailed(unsignedTx, 'terNOaccount', result);
        }

        // 	The transaction would involve adding currency issued by an account with lsfRequireAuth enabled to a trust line that is not authorized. For example, you placed an offer to buy a currency you aren't authorized to hold.
        if (result.resultCode === 'terNO_AUTH') {
          await wait(100);
        }

        // 	The transaction requires that account sending it has a nonzero "owners count", so the transaction cannot succeed. For example, an account cannot enable the lsfRequireAuth flag if it has any trust lines or available offers.
        if (result.resultCode === 'terOWNERS') {
          await wait(100);
        }

        // The sequence number of the transaction is lower than the current sequence number of the account sending the transaction.
        // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
        if (result.resultCode === 'tefPAST_SEQ') {
          await this._fetchCurrentState();
          await wait(1000);
        }
        // 	The Sequence number of the current transaction is higher than the current sequence number of the account sending the transaction.
        // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
        if (result.resultCode === 'terPRE_SEQ') {
          await this._fetchCurrentState();
          await wait(1000);
        }
        // 	Unspecified retriable error.
        if (result.resultCode === 'terRETRY') {
          await wait(100);
        }

        // 	The transaction met the load-scaled transaction cost but did not meet the open ledger requirement, so the transaction has been queued for a future ledger.
        if (result.resultCode === 'terQUEUED') {
          // Wait 4000ms and continue, possibly too many transactions were submitted to the same rippled server
          await wait(4000);
        }

        // These codes indicate that the transaction was malformed, and cannot succeed according to the XRP Ledger protocol.
        if (result.resultCode.startsWith('tem')) {
          await wait(100);
        }

        // These codes indicate an error in the local server processing the transaction; it is possible that another server with a different configuration or load level could process the transaction successfully. They have numerical values in the range -399 to -300. The exact code for any given error is subject to change, so don't rely on it.
        if (result.resultCode.startsWith('tel')) {
          await wait(100);
        }

        // These codes indicate that the transaction failed and was not included in a ledger, but the transaction could have succeeded in some theoretical ledger. Typically this means that the transaction can no longer succeed in any future ledger. They have numerical values in the range -199 to -100. The exact code for any given error is subject to change, so don't rely on it.
        if (result.resultCode.startsWith('tef')) {
          if (result.resultCode === 'tefBAD_AUTH_MASTER') {
            this.incrementAccountSequenceBy(-1);
            return await this._txFailed(unsignedTx, result.resultCode, result);
          }

          if (result.resultCode === 'tefBAD_AUTH') {
            this.incrementAccountSequenceBy(-1);
            return await this._txFailed(unsignedTx, result.resultCode, result);
          }

          if (result.resultCode === 'tefALREADY') {
            this.incrementAccountSequenceBy(-1);
            return await this._txFailed(unsignedTx, result.resultCode, result);
          }

          if (result.resultCode === 'tefPAST_SEQ') {
            // Past account sequence
            return await this._txFailed(unsignedTx, result.resultCode, result);
          }
        }

        // These codes indicate that the transaction failed, but it was applied to a ledger to apply the transaction cost. They have numerical values in the range 100 to 199. Ripple recommends using the text code, not the numeric value.
        if (result.resultCode.startsWith('tec')) {
          return await this._txFailed(unsignedTx, result.resultCode, result);
        }
      }
      // Handle the dispatched transaction
      return await this._txDispatched(
        unsignedTx,
        tx,
        result,
        signedTx,
        firstLedgerSequence);
    } catch (error) {
      if (error instanceof RippleError.RippledError) {
        if (error.data.error === 'invalidTransaction') {
          return this._txFailed(unsignedTx, `${error.data.error}: ${error.data.error_exception}`, undefined);

        } else if (error.data.resultCode.startsWidth('tem')) {
          return this._txFailed(unsignedTx, `${error.data.error}: ${error.data.error_exception} (${error.data.resultCode})`, undefined);
        }
      } else {
        return this._txFailed(unsignedTx, error.message, undefined);
      }

      await wait(1000);
      return false;
    }
  }

  /**
   * Handle dispatched transaction and emit (dispatched) events to event listeners
   *
   * @param unsignedTx
   * @param tx
   * @param result
   * @param signedTx
   * @param firstLedgerSequence
   */
  private async _txDispatched(
    unsignedTx: SologenicTypes.UnsignedTx,
    tx: SologenicTypes.TX,
    result: SologenicTypes.FormattedSubmitResponse,
    signedTx: SologenicTypes.SignedTx,
    firstLedgerSequence: number
  ): Promise<boolean> {
    try {
      // construct the dispatched object
      const dispatchedTx: SologenicTypes.DispatchedTx = {
        unsignedTx: unsignedTx,
        ...{
          result: {
            ...{ status: result.resultCode },
            firstLedger: firstLedgerSequence,
            hash: signedTx.id,
            lastLedger: tx.LastLedgerSequence,
            sequence: tx.Sequence
          }
        }
      };

      // Add to dispatched queue
      const dispatched: SologenicTypes.DispatchedTx = await this.txmq.add('txmq:dispatched:' + this.account, dispatchedTx, unsignedTx.id);

      const dispatchedEvent: SologenicTypes.DispatchedEvent = {
        id: unsignedTx.id,
        unsignedTx: unsignedTx,
        dispatchedTx: dispatchedTx
      };

      // Emit on object specific listener
      if (typeof this.txEvents![unsignedTx.id] !== 'undefined') {
        this.txEvents![unsignedTx.id].emit('dispatched', dispatchedEvent);
      }

      // Emit globally
      this.emit('dispatched', dispatchedEvent);

      return dispatched ? true : false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Handle failed transaction and emit (failed) events to event listeners for
   * @param unsignedTx
   * @param tx
   * @param result
   * @param signedTx
   * @param firstLedgerSequence
   *
   * @throws {SologenicError}
   */
  private async _txFailed(
    unsignedTx: SologenicTypes.UnsignedTx,
    reason: string,
    result: any
  ): Promise<boolean> {
    try {
      // construct the dispatched object
      const failedTx: SologenicTypes.FailedTx = {
        unsignedTx: unsignedTx,
        result: result,
        ...{
          cause: {
            ...{ status: 'failed', reason }
          }
        }
      };

      await this.txmq.del('txmq:dispatched:' + this.account, unsignedTx.id);
      await this.txmq.add('txmq:failed:' + this.account, failedTx, unsignedTx.id);

      const failedEvent: SologenicTypes.FailedEvent = {
        id: unsignedTx.id,
        failedTx: failedTx,
        result: result,
        reason: reason
      };

      // Emit globally
      this.emit('failed', failedEvent);

      // Emit on object specific listener channel
      if (typeof this.txEvents![unsignedTx.id] !== 'undefined') {
        this.txEvents![unsignedTx.id].emit('failed', failedEvent);
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Validate missed transactions sitting on the dispatched queue
   *
   * @throws {SologenicError}
   */
  private async _validateMissedTransactions(): Promise<void> {
    try {
      const dispatchedTxs = await this.txmq.getAll('txmq:dispatched:' + this.account);
      for (const dispatchedTx of dispatchedTxs!) {
        await this._validateTxOnLedger(dispatchedTx.id, dispatchedTx.data);
      }

      return;
    } catch (error) {
      throw new SologenicError('1006');
    }
  }

  /**
   * Event listener for dispatched events
   * @description Validate transaction that are added to the dispatched queue once they have been emitted
   */
  private _validateOnLedger(): void {
    this.on('dispatched', async (dispatchedEvent: SologenicTypes.DispatchedEvent) => {
      await this._validateTxOnLedger(dispatchedEvent.id, dispatchedEvent.dispatchedTx);
    });
  }

  /**
   * Validate transactions on the XRP Ledger
   *
   * @param id
   * @param dispatchedTx
   */
  private async _validateTxOnLedger(
    id: string,
    dispatchedTx: SologenicTypes.DispatchedTx
  ): Promise<void> {
    try {
      // Check and see if the dispatched transaction's ledger is passed or we are in the current ledger
      if (dispatchedTx!.result!.lastLedger <= this.ledger.ledgerVersion) {
        // Get the transaction details from the ledger

        const validatedTx = await this.getRippleApi().getTransaction(
          dispatchedTx.result.hash, {
            includeRawTransaction: false,
            maxLedgerVersion: dispatchedTx.result.lastLedger,
            minLedgerVersion: dispatchedTx.result.firstLedger
          });

        // Remove the transaction from the dispatched queue
        const exists = await this.txmq.del('txmq:dispatched:' + this.account, id);

        // Make sure this transaction existed in the queue
        if (exists) {
          // only if the result from the closed ledger is tesSUCCESS, consider this transaction to be final
          if (validatedTx!.outcome.result === 'tesSUCCESS') {
            /*
              Add them to `validated` queue for archiving. This queue is not processed and is just for the records.

              Suggestion: add a TTL to these transactions in this queue to avoid overloading Redis or memory and possibly move these
              transactions to a database
            */

            const validatedEvent: SologenicTypes.ValidatedEvent = <SologenicTypes.ValidatedEvent>{
              id: id,
              dispatchedTx: dispatchedTx,
              resolvedTx: {
                accountSequence: validatedTx!.sequence,
                sequence: dispatchedTx.result.sequence,
                fee: validatedTx!.outcome.fee,
                hash: dispatchedTx.result.hash,
                ledgerVersion: validatedTx!.outcome.ledgerVersion,
                timestamp: validatedTx!.outcome.timestamp
              },
              reason: validatedTx!.outcome.result
            };

            // console.log(`Adding validated event (queue: txmq:validated:${this.address}, key: ${id})`);
            await this.txmq.add('txmq:validated:' + this.account, validatedEvent.resolvedTx, id);

            if (typeof this.txEvents![id] !== 'undefined') {
              this.txEvents![id].emit('validated', validatedEvent);
            }

            // Emit on object specific listener
            this.emit('validated', validatedEvent);

            // At this stage, it is safe to delete the object specific listner's EventEmitter object since validation is
            // the last event that is emitted.
            delete this.txEvents![id];
          } else {
            // Transaction was in the ledger but failed for any reason.
            // This transaction is now moved to txmq:raw: for re-processing.

            const warningEvent: SologenicTypes.WarningEvent = {
              id: id,
              state: 'validation',
              reason: 'not_validated',
              dispatchedTx: dispatchedTx
            };

            const requeueEvent: SologenicTypes.RequeuedEvent = {
              id: id,
              reason: 'requeue',
              dispatchedTx: dispatchedTx
            };

            this.emit('warning', warningEvent)
            this.emit('requeued', requeueEvent);

            // emit on object specific listener channel warning and requeued. Letting the client know that this transaction is being re-processed
            if (typeof this.txEvents![id] !== 'undefined') {
              this.txEvents![id].emit('warning', warningEvent);
              this.txEvents![id].emit('requeued', requeueEvent);
            }

            // add the transaction to the raw queue
            this._addRawTxToQueue(dispatchedTx.unsignedTx.data, id);
          }
        }
      } else {
        /*
          If the current ledger is greater than the lastLedgerSequence of the transaction
          Or in other words, this transaction is not in a final ledger
          Recursivley wait 1000ms and try again
        */
        await wait(1000);
        return await this._validateTxOnLedger(id, dispatchedTx);
      }
      return;
    } catch (error) {
      // Transaction not found on the ledger, It means this transaction was ignore for whatever reason. Re-queue and re-process
      if (error instanceof RippleError.NotFoundError) {
        const warningEvent: SologenicTypes.WarningEvent = {
          id: id,
          state: 'validation',
          reason: 'not_validated',
          dispatchedTx: dispatchedTx
        };

        const requeueEvent: SologenicTypes.RequeuedEvent = {
          id: id,
          reason: 'requeue',
          dispatchedTx: dispatchedTx
        };

        this.emit('warning', warningEvent)
        this.emit('requeued', requeueEvent);

        // emit on object specific listener channel warning and requeued. Letting the client know that this transaction is being re-processed
        if (typeof this.txEvents![id] !== 'undefined') {
          this.txEvents![id].emit('warning', warningEvent);
          this.txEvents![id].emit('requeued', requeueEvent);
        }

        // remove transaction from the dispatched queue
        await this.txmq.del('txmq:dispatched:' + this.account, id);

        // add the transaction to the raw queue
        this._addRawTxToQueue(dispatchedTx.unsignedTx.data, id);
      } else {
        // if unspecified error, wait 1000ms re-try validation
        await wait(1000);
        return this._validateTxOnLedger(id, dispatchedTx);
      }
    }
  }
}
