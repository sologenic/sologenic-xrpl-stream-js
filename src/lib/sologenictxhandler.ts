import { RippleAPI } from 'ripple-lib';
import * as SologenicTypes from '../types/';
import * as RippleError from 'ripple-lib/dist/npm/common/errors';
import { SologenicError } from './error';
import { all as mathAll, create as mathCreate } from 'mathjs';
import util from 'util';
import { TXMQƨ } from './stxmq';
import { EventEmitter } from 'events';
import { v4 as uuid } from 'uuid';

export class SologenicTxHandler extends EventEmitter {
  protected txmq: any;
  protected rippleApi!: RippleAPI;
  protected account: string = '';
  protected secret: string = '';
  protected txEvents: { [key: string]: EventEmitter } = {};
  protected ledger: SologenicTypes.Ledger;
  protected feeCushion: number = 1.2;
  protected sequence: number = 0;
  protected math: any;

  /**
   * Constructor
   *
   * @param rippleApiOptions This parameter is used to construct ripple-lib and takes in:
          server?: string;
          feeCushion?: number; // This property is overridden by Sologenic to 1
          maxFeeXRP?: string;
          trace?: boolean;
          proxy?: string;
          timeout?: number; // This property is overridden by Sologenic to 1000000

   * @param sologenicOptions
        {
          queueType?: QueueType;

          redis?: {
            port?: number;
            host?: string;
            family?: number;
            password?: string;
            db?: number;
          };
        }

    @example sologenicOptions: {
          // When using in-memory hashes
          queueType: 'hash',
          hash: {}

          // When using redis
          queueType: 'redis',
          redis: {
            host: 'localhost',
            port: 6379,
            family: 'redis5.0',
            password: 'password',
            db: '1',
          }
        }
   */

  constructor(
    rippleApiOptions: SologenicTypes.RippleAPIOptions,
    sologenicOptions: SologenicTypes.TransactionHandlerOptions
  ) {
    super();
    try {
      /* Initialize RippleAPI driven from the ripple-lib. Sologenic uses the following methods from this library:
      connect()
      on()
      isValidAddress()
      isConnected()
      getLedgerVersion()
      getFee()
      request()
      xrpToDrops()
      sign()
      submit()
      getTransaction()
      txFlags
      */
      this.rippleApi = new RippleAPI({
        feeCushion: 1,
        timeout: 1000000,
        ...rippleApiOptions
      });

      // Subscribe to ripple-lib on("") events
      this._subscribeWS();

      // Init ledger object
      this.ledger = {
        baseFeeXRP: '0',
        ledgerTimestamp: '0',
        ledgerVersion: 0
      };

      /*
        Initialize TXMQƨ (Sologenic Transaction Message Queue)
      */
      try {
        this.txmq = new TXMQƨ(sologenicOptions); // Pass on the queue connection details
      } catch (error) {
        throw new SologenicError('1002');
      }

      /*
        Initialize BigNumber
      */
      this.math = mathCreate(mathAll, {
        epsilon: 1e-12,
        number: 'BigNumber',
        precision: 64
      });
    } catch (error) {
      console.log(error);
      throw new SologenicError('1001');
    }
  }

  /**
   * Expose the ripple API so that our tests can use it to check
   * transaction status and states.
   */

  public getRippleApi(): RippleAPI {
    return this.rippleApi;
  }

  /**
   * Connect to various services: RippleAPI, fetch current ledger state.
   */
  public async connect(): Promise<this> {
    try {
      await this.getRippleApi().connect();
      await this._connected();

      // Start the dispatcher listener
      this._dispatch();

      // Start the validator listener
      this._validateOnLedger();

      // Return the current class

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

  public async setAccount(account: SologenicTypes.Account): Promise<void> {
    try {
      /*
        Is this a valid XRP address?
      */
      if (this.getRippleApi().isValidAddress(account.address)) {
        this.account = account.address;
      } else {
        throw new SologenicError('2000', new RippleError.ValidationError());
      }
      /*
        Is this a valid XRP secret?
      */
      if (this.getRippleApi().isValidSecret(account.secret)) {
        this.secret = account.secret;
      } else {
        throw new SologenicError('2001', new RippleError.ValidationError());
      }

      // Fetch the current state of the ledger and account sequence
      await this._fetchCurrentState();

      // proccess missed transactions before continuing.
      // Transactions can be missed if they are in the dispatched state. This function processes previous
      // transactions left in the queue, if any.
      await this._validateMissedTransactions();
    } catch (error) {
      throw new SologenicError('1001');
    }
  }

  /**
   * Submit transaction to system. This transaction will then be move to persistent data storage(Redis) or hash store and will be handeled.
   * Each transaction is assigned an id (uuid) to be tracked in the system. Assigned IDs remain with the transaction until validated.
   * Since the transactions are not final until validated, the only way to track transactions in the system is to track them with
   * ids across different channels in the system (e.g. message queue). This ID is also submitted as a refference withing the transaction
   * in the Memo field (HEX representation)
   * Submit() is non-blocking, but returns an object with three properties explain in the return.
   *
   * @param tx Transaction Object e.g.:
   *  {
   *    TransactionType: "AccountSet",
   *    Account: "rEzaLebaTBXNy7C4s8Ru7yxxkE65bDAAkF",
   *    SetFlag: 5
   *  }
   *  It is important to note that certain properties such as Fee, Sequence, Flags, LastLedgerSequence are inserted by this class
   *  and are overridden if provided.
   *
   * @returns TransactionObject
   *    events: Each instance of the submit() gets an instance of `EventEmitter` these events are emitted when certain actions take place
   *            within the transaction submission.
   *            Events: queued, dispatched, requeued, warning, validated
   *    id: This is the uuid generated in a non-blocking approach so clients can later use this id for refference. The id is of type of string
   *        and are generated using v4 of uuid library. e.g: 6316751c-bde4-412b-ac9a-7d05e548171f
   *    promise: This property contains a promise and resolves only when a transaction has been validated.
   *              Contains: hash, dispatchedSequence, accountSequence, ledgerVersion, timestamp, fee
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

  private async _connected(): Promise<boolean> {
    if (this.getRippleApi().isConnected()) {
      return true;
    } else {
      await util.promisify(setTimeout)(100);
      return this._connected();
    }
  }

  /**
   * recursivley loop and query TXMQƨ to see when the id is validated
   * @param id
   * @returns ResolvedTX
   */
  private async _resolve(id: string): Promise<SologenicTypes.ResolvedTX> {
    const validated = await this.txmq.get('txmq:validated:' + this.account, id);

    if (typeof validated !== 'undefined') {
      return validated.data;
    } else {
      const failed = await this.txmq.get('txmq:failed:' + this.account, id);
      if (typeof failed !== 'undefined') {
        return failed.data;
      }

      // retry in 100ms
      await util.promisify(setTimeout)(100);
      return this._resolve(id);
    }
  }

  /**
   *  Fetch the current ledger and account information to be used for transaction submission
   */
  private async _fetchCurrentState(): Promise<void> {
    try {
      // If the Ripple API is not connected, make sure we connect.
      if (!this.getRippleApi().isConnected()) {
        await this.connect();
      }

      // Use the ripple-lib built in REST functions to get the ledger version and fee. Please note that these
      // values are updated using the WS after the first initilization, until this method is called again
      this.ledger.ledgerVersion = await this.getRippleApi().getLedgerVersion();
      this.ledger.baseFeeXRP = await this.getRippleApi().getFee();

      // Get account info of the current XRP account and set the sequence to submit transactions
      const account = await this.getRippleApi().request('account_info', {
        account: this.account
      });
      this.sequence = account.account_data.Sequence;
    } catch (error) {
      // if there is a disconnection error, keep trying until connection is made. Retry in 1000ms
      if (error instanceof RippleError.DisconnectedError) {
        // wait for connection to be re-established
        await this.connect();
        // try fetching the current state again
        await this._fetchCurrentState();
        // Unspecific RippleError
      } else if (error instanceof RippleError.RippledError) {
        throw new SologenicError('1004');
      } else {
        throw new SologenicError('1000');
      }
    }
  }

  /**
   * Subscribe to ripple-lib ws implementation of XRPL WebSockets
   */
  private _subscribeWS(): any {
    try {
      this.getRippleApi().on('connect', () => {
        // Reconnect
      });

      this.getRippleApi().on('disconnect', () => {
        // Reconnect
        this.connect();
      });

      this.getRippleApi().on('error', () => {
        // Reconnect
        this.connect();
      });

      this.getRippleApi().on('ledger', ledger => {
        // Update the ledger version
        this.ledger = ledger;
      });
    } catch (error) {
      throw new SologenicError('1005');
    }
  }

  /**
   * Initiate the transaction, prepare it to add the queue
   * @param id
   * @param tx
   */
  private async _initiateTx(id: string, tx: SologenicTypes.TX): Promise<void> {
    try {
      await this._addRawTXtoQueue(this._constructRawTx(tx), id);
    } catch (error) {
      throw new SologenicError('1000');
    }
  }

  /**
   * Helper function to add any other properties to the TX before being added to the queue.
   * @param tx
   * @returns tx;
   */
  private _constructRawTx(tx: SologenicTypes.TX): SologenicTypes.txJSON {
    return { txJSON: tx };
  }

  /**
   * Add the raw transaction to the queue.
   * @param tx
   * @param id
   */
  private async _addRawTXtoQueue(
    tx: SologenicTypes.txJSON,
    id?: string
  ): Promise<void> {
    try {
      const item = await this.txmq.add('txmq:raw:' + this.account, tx, id);

      // emit on object specific listener
      if (typeof this.txEvents![item.id] !== 'undefined') {
        this.txEvents![item.id].emit('queued', item.data!.txJSON);
      }

      // emit globally
      this.emit('queued', item.id, item.data!.txJSON);
    } catch (error) {
      throw new SologenicError('1000');
    }
  }

  /**
   * Add id to the memo field of the transactions.
   * More info: https://xrpl.org/transaction-common-fields.html#memos-field
   *
   * @param tx
   */
  private _addMemo(tx: SologenicTypes.unsignedTX): SologenicTypes.TX {
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
      throw new SologenicError('1000');
    }
  }

  /**
   * Dispatch listener. Recursivley loop and fetch the persistent data store to fetch groups of transactions to be dispatched
   */
  private async _dispatch(): Promise<void> {
    try {
      // Get raw transactions from the queue
      const unsignedTXs: Array<SologenicTypes.unsignedTX> = await this.txmq.getAll(
        'txmq:raw:' + this.account
      );
      // Loop through each, FIFO order, and dispatch the transaction
      for (const unsignedTX of unsignedTXs!) {
        await this._dispatchHandler(unsignedTX);
      }
      // Once the queue is dispatched, wait 100ms and re-fetch the queue.
      await util.promisify(setTimeout)(100);
      return await this._dispatch();
    } catch (error) {
      // Ignore errors and re-try the queue, wait 100ms and re-fetch the queue.
      await util.promisify(setTimeout)(100);
      return this._dispatch();
    }
  }

  /**
   * dispatch job handler. Recursively try transactions and based on the dispatch result try again, or a
   * @param unsignedTX
   */
  private async _dispatchHandler(
    unsignedTX: SologenicTypes.unsignedTX
  ): Promise<void> {
    try {
      const result: boolean = await this._dispatchToLedger(unsignedTX);
      if (result) {
        await this.txmq.del('txmq:raw:' + this.account, unsignedTX.id);
        return;
      } else {
        return await this._dispatchHandler(unsignedTX);
      }
    } catch (error) {
      throw new SologenicError('1000');
    }
  }

  /**
   * Dispatch the transaction to the ledger
   * @param unsignedTX
   */
  private async _dispatchToLedger(
    unsignedTX: SologenicTypes.unsignedTX
  ): Promise<boolean> {
    try {
      // Add id in the memo common field for tracking
      const tx = this._addMemo(unsignedTX);

      // Make sure the account is valid
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
        this.math.multiply(this.ledger.baseFeeXRP, this.feeCushion).toFixed(6)
      );

      // Set the sequence of this tx to the latest sequence obtained from account_info
      tx.Sequence = this.sequence;

      // Set LastLedgerSequence for this tx to make sure it becomes invalid after 3 verified closed ledgers
      tx.LastLedgerSequence = this.ledger.ledgerVersion + 3;

      // Sign the transaction using the secret provided on init
      const signedTx: SologenicTypes.signedTX = this.getRippleApi().sign(
        JSON.stringify(tx),
        this.secret
      );

      // store the `before` ledger this transaction is being submitted
      const firstLedgerSequence: number = this.ledger.ledgerVersion;

      // Submit the transaction to the ledger
      const result: SologenicTypes.FormattedSubmitResponse = await this.getRippleApi().submit(
        signedTx.signedTransaction
      );

      // increase the sequence for next transaction
      this.sequence++;
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
        this.emit('warning', unsignedTX.id, 'dispatch', result.resultCode);
        if (typeof this.txEvents![unsignedTX.id] !== 'undefined') {
          this.txEvents![unsignedTX.id].emit(
            'warning',
            'dispatch',
            result.resultCode
          );
        }
      }

      // Specific actions based on different errors
      // 	The account sending the transaction does not have enough XRP to pay the Fee specified in the transaction.
      if (result.resultCode === 'terINSUF_FEE_B') {
        await util.promisify(setTimeout)(100);
      }

      // The network fee has increased due to load
      if (result.resultCode === 'telINSUF_FEE_P') {
        await util.promisify(setTimeout)(100);
      }
      // The transaction did not meet the open ledger cost and also was not added to the transaction queue. This code occurs when a transaction with the same sender and sequence number already exists in the queue and the new one does not pay a large enough transaction cost to replace the existing transaction. To replace a transaction in the queue, the new transaction must have a Fee value that is at least 25% more, as measured in fee levels. You can increase the Fee and try again, send this with a higher Sequence number so it doesn't replace an existing transaction, or try sending to another server. New in: rippled 0.70.2
      if (result.resultCode === 'telCAN_NOT_QUEUE_FEE') {
        await util.promisify(setTimeout)(100);
      }

      // The transaction did not meet the open ledger cost and also was not added to the transaction queue because a transaction queued ahead of it from the same sender blocks it. (This includes all SetRegularKey and SignerListSet transactions, as well as AccountSet transactions that change the RequireAuth/OptionalAuth, DisableMaster, or AccountTxnID flags.) You can try again later, or try submitting to a different server.
      if (result.resultCode === 'telCAN_NOT_QUEUE_BLOCKED') {
        await util.promisify(setTimeout)(100);
      }

      // 	The address sending the transaction is not funded in the ledger (yet).
      if (result.resultCode === 'terNOaccount') {
        this.sequence--;
        return await this._txFailed(unsignedTX, 'terNOaccount');
      }

      // 	The transaction would involve adding currency issued by an account with lsfRequireAuth enabled to a trust line that is not authorized. For example, you placed an offer to buy a currency you aren't authorized to hold.
      if (result.resultCode === 'terNO_AUTH') {
        await util.promisify(setTimeout)(100);
      }

      // 	The transaction requires that account sending it has a nonzero "owners count", so the transaction cannot succeed. For example, an account cannot enable the lsfRequireAuth flag if it has any trust lines or available offers.
      if (result.resultCode === 'terOWNERS') {
        await util.promisify(setTimeout)(100);
      }

      // The sequence number of the transaction is lower than the current sequence number of the account sending the transaction.
      // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
      if (result.resultCode === 'tefPAST_SEQ') {
        await this._fetchCurrentState();
        await util.promisify(setTimeout)(1000);
      }
      // 	The Sequence number of the current transaction is higher than the current sequence number of the account sending the transaction.
      // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
      if (result.resultCode === 'terPRE_SEQ') {
        await this._fetchCurrentState();
        await util.promisify(setTimeout)(1000);
      }
      // 	Unspecified retriable error.
      if (result.resultCode === 'terRETRY') {
        await util.promisify(setTimeout)(100);
      }

      // 	The transaction met the load-scaled transaction cost but did not meet the open ledger requirement, so the transaction has been queued for a future ledger.
      if (result.resultCode === 'terQUEUED') {
        // Wait 4000ms and continue, possibly too many transactions were submitted to the same rippled server
        await util.promisify(setTimeout)(4000);
      }

      // These codes indicate that the transaction was malformed, and cannot succeed according to the XRP Ledger protocol.
      if (result.resultCode.startsWith('tem')) {
        await util.promisify(setTimeout)(100);
      }

      // These codes indicate an error in the local server processing the transaction; it is possible that another server with a different configuration or load level could process the transaction successfully. They have numerical values in the range -399 to -300. The exact code for any given error is subject to change, so don't rely on it.
      if (result.resultCode.startsWith('tel')) {
        await util.promisify(setTimeout)(100);
      }

      // These codes indicate that the transaction failed and was not included in a ledger, but the transaction could have succeeded in some theoretical ledger. Typically this means that the transaction can no longer succeed in any future ledger. They have numerical values in the range -199 to -100. The exact code for any given error is subject to change, so don't rely on it.
      if (result.resultCode.startsWith('tef')) {
        if (result.resultCode === 'tefBAD_AUTH_MASTER') {
          this.sequence--;
          return await this._txFailed(unsignedTX, result.resultCode);
        }
      }

      // These codes indicate that the transaction failed, but it was applied to a ledger to apply the transaction cost. They have numerical values in the range 100 to 199. Ripple recommends using the text code, not the numeric value.
      if (result.resultCode.startsWith('tec')) {
        return await this._txFailed(unsignedTX, result.resultCode);
      }
      // handle the dispatched transaction
      return await this._txDispatched(
        unsignedTX,
        tx,
        result,
        signedTx,
        firstLedgerSequence
      );
    } catch (error) {
      // // wait 1000ms and return false allowing transaction to be re-processed
      // // emit globally
      // this.emit('warning', unsignedTX.id, 'dispatch', error.message);
      // // emit on object specific listener channel warning and requeued. Letting the client know that this transaction is being re-processed
      // if (typeof this.txEvents![unsignedTX.id] !== 'undefined') {
      //   this.txEvents![unsignedTX.id].emit(
      //     'warning',
      //     'dispatch',
      //     error.message
      //   );
      // }

      // Catch malformed transactions, invalid addresses etc.
      // remove from the transaction queue allow the rest of the queue to be processed.
      // if (error.status === '2000') {
      //   return await this._txFailed(unsignedTX, error.message);
      // }

      if (typeof error.name !== 'undefined' && error.name === 'RippledError') {
        if (error.data.resultCode.startsWith('tem')) {
          return this._txFailed(unsignedTX, error.data.resultCode);
        }
      }

      return this._txFailed(unsignedTX, error.message);
      // return await this._txFailed(unsignedTX, error.name);

      // These codes indicate that the transaction was malformed, and cannot succeed according to the XRP Ledger protocol.
      // if (error) {
      //   this.sequence--;
      //   return await this._txFailed(unsignedTX, 'terNOaccount');
      // }

      await util.promisify(setTimeout)(1000);
      return false;
    }
  }

  /**
   * Handle dispatched transaction
   * @param unsignedTX
   * @param tx
   * @param result
   * @param signedTx
   * @param firstLedgerSequence
   */
  private async _txDispatched(
    unsignedTX: SologenicTypes.unsignedTX,
    tx: SologenicTypes.TX,
    result: SologenicTypes.FormattedSubmitResponse,
    signedTx: SologenicTypes.signedTX,
    firstLedgerSequence: number
  ): Promise<boolean> {
    try {
      // construct the dispatched object
      const dispatchedTX: SologenicTypes.dispatchedTX = {
        unsignedTX,
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

      // add to dispatched queue
      const dispatched: SologenicTypes.dispatchedTX = await this.txmq.add(
        'txmq:dispatched:' + this.account,
        dispatchedTX,
        unsignedTX.id
      );
      // emit on object specific listener
      if (typeof this.txEvents![unsignedTX.id] !== 'undefined') {
        this.txEvents![unsignedTX.id].emit(
          'dispatched',
          unsignedTX,
          dispatchedTX
        );
      }

      // emit globally
      this.emit('dispatched', unsignedTX.id, dispatchedTX);
      return dispatched ? true : false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Handle failed transaction
   * @param unsignedTX
   * @param tx
   * @param result
   * @param signedTx
   * @param firstLedgerSequence
   */
  private async _txFailed(
    unsignedTX: SologenicTypes.unsignedTX,
    reason: string
  ): Promise<boolean> {
    try {
      // construct the dispatched object
      const failedTX: SologenicTypes.failedTX = {
        unsignedTX,
        ...{
          result: {
            ...{ status: 'failed', reason }
          }
        }
      };

      await this.txmq.del('txmq:dispatched:' + this.account, unsignedTX.id);

      await this.txmq.add(
        'txmq:failed:' + this.account,
        failedTX,
        unsignedTX.id
      );

      // emit globally
      this.emit('failed', unsignedTX.id, 'dispatch', reason);

      // emit on object specific listener channel
      if (typeof this.txEvents![unsignedTX.id] !== 'undefined') {
        this.txEvents![unsignedTX.id].emit('failed', 'dispatch', reason);
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Validate missed transactions sitting on the dispatched queue
   */
  private async _validateMissedTransactions(): Promise<void> {
    try {
      const dispatchedTXs = await this.txmq.getAll(
        'txmq:dispatched:' + this.account
      );
      for (const dispatchedTX of dispatchedTXs!) {
        await this._ValidateTxOnLedger(dispatchedTX.id, dispatchedTX.data);
      }
      return;
    } catch (error) {
      throw new SologenicError('1006');
    }
  }
  /**
   * eventListener to validate transactions that are added to the dispatched queue
   */
  private _validateOnLedger(): void {
    this.on('dispatched', async (id: string, dispatchedTX: any) => {
      await this._ValidateTxOnLedger(id, dispatchedTX);
    });
  }
  /**
   * Validate transaction on the XRP Ledger
   * @param id
   * @param dispatchedTX
   */
  private async _ValidateTxOnLedger(
    id: string,
    dispatchedTX: SologenicTypes.dispatchedTX
  ): Promise<void> {
    try {
      // Check and see if the dispatched transaction's ledger is passed or we are in the current ledger
      if (dispatchedTX!.result!.lastLedger <= this.ledger.ledgerVersion) {
        // Get the transaction details from the ledger
        const validate = await this.getRippleApi().getTransaction(
          dispatchedTX.result.hash,
          {
            includeRawTransaction: false,
            maxLedgerVersion: dispatchedTX.result.lastLedger,
            minLedgerVersion: dispatchedTX.result.firstLedger
          }
        );
        // remove the transaction from the dispatched queue
        const exists = await this.txmq.del(
          'txmq:dispatched:' + this.account,
          id
        );

        // Make sure this transaction existed in the queue
        if (exists) {
          // only if the result from the closed ledger is tesSUCCESS, consider this transaction to be final
          if (validate.outcome.result === 'tesSUCCESS') {
            /*
              add them to `validated` queue for archiving. This queue is not processed and is just for the records.
              Suggestion: add a TTL to these transactions in this queue to avoid overloading Redis or memory and possibly move these
              transactions to a database
            */
            await this.txmq.add(
              'txmq:validated:' + this.account,
              {
                accountSequence: validate.sequence,
                dispatchedSequence: dispatchedTX.result.sequence,
                fee: validate.outcome.fee,
                hash: dispatchedTX.result.hash,
                ledgerVersion: validate.outcome.ledgerVersion,
                timestamp: validate.outcome.timestamp
              },
              id
            );

            // emit on object specific listener
            if (typeof this.txEvents![id] !== 'undefined') {
              this.txEvents![id].emit(
                'validated',
                dispatchedTX,
                dispatchedTX.result
              );
            }

            // emit on object specific listener
            this.emit('validated', id, dispatchedTX.result);

            // At this stage, it is safe to delete the object specific listner's EventEmitter object since validation is
            // the last event that is emitted.
            delete this.txEvents![id];
          } else {
            // Transaction was in the ledger but failed for any reason.
            // This transaction is now moved to txmq:raw: for re-processing.

            // emit globally
            this.emit('warning', id, 'validation', 'not_validated');
            this.emit('requeued', id);

            // emit on object specific listener channel warning and requeued. Letting the client know that this transaction is being re-processed
            if (typeof this.txEvents![id] !== 'undefined') {
              this.txEvents![id].emit('warning', 'validation', 'not_validated');
              this.txEvents![id].emit(
                'requeued',
                dispatchedTX,
                dispatchedTX.result
              );
            }

            // add the transaction to the raw queue
            this._addRawTXtoQueue(dispatchedTX.unsignedTX.data.txJSON, id);
          }
        }
      } else {
        /*
          If the current ledger is greater than the lastLedgerSequence of the transaction
          Or in other words, this transaction is not in a final ledger
          Recursivley wait 1000ms and try again
        */
        await util.promisify(setTimeout)(1000);
        return await this._ValidateTxOnLedger(id, dispatchedTX);
      }
      return;
    } catch (error) {
      // Transaction not found on the ledger, It means this transaction was ignore for whatever reason. Re-queue and re-process
      if (error instanceof RippleError.NotFoundError) {
        // emit globally
        this.emit('warning', id, 'validation', 'not_validated');
        this.emit('requeued', id);

        // emit on object specific listener channel warning and requeued. Letting the client know that this transaction is being re-processed
        if (typeof this.txEvents![id] !== 'undefined') {
          this.txEvents![id].emit('warning', 'validation', 'not_validated');
          this.txEvents![id].emit(
            'requeued',
            id,
            dispatchedTX,
            dispatchedTX.result
          );
        }

        // remove transaction from the dispatched queue
        await this.txmq.del('txmq:dispatched:' + this.account, id);

        // add the transaction to the raw queue
        this._addRawTXtoQueue(dispatchedTX.unsignedTX.data.txJSON, id);
      } else {
        // if unspecified error, wait 1000ms re-try validation
        await util.promisify(setTimeout)(1000);
        return this._ValidateTxOnLedger(id, dispatchedTX);
      }
    }
  }
}
