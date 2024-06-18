/// <reference types="node" />
import * as SologenicTypes from '../types';
import XrplAccount from './account';
import { EventEmitter } from 'events';
import { ISologenicTxSigner } from '../types';
import { Market } from '../types/orderbook';
declare const xrpl: any;
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
export declare class SologenicTxHandler extends EventEmitter {
    /**
     * Queue mutator/getter for create, replace, update, and delete type queue based operations
     */
    protected txmq: any;
    /**
     * Clear cache of sologenic tx handler when the queue is initialized
     */
    protected clearCache: boolean;
    /**
     * Ripple API of Sologenic TX Handler.  See [[RippleAPI]] for more documentation
     */
    protected rippleApi: any;
    /**
     * Dispatch listener boolean flag for Sologenic TX Handler.  This is to ensure we're only
     * running a single dispatcher thread at a time.
     */
    protected dispatchListener: boolean;
    /**
     * Internal queue for transaction events occuring on a specific transaction.
     * Events are emitted globally to the [[SologenicTxHandler]] instance and the
     * txEvents queue
     */
    protected txEvents: {
        [key: string]: EventEmitter;
    };
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
    protected feeCushion: number;
    /**
     * Delete events older than
     */
    protected maximumTimeToLive: number;
    /**
     * Our math library used to calculate fees
     */
    protected math: any;
    /**
     * Our account
     */
    protected xrplAccount: XrplAccount;
    /**
     * Signing mechanism
     */
    protected signingMechanism: SologenicTypes.ISologenicTxSigner;
    /**
     * Constructor for an instance of sologenic tx handler.
     *
     * @param rippleApiOptions     This parameter is used to construct xrpl and takes in:
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
    constructor(xrplClientOptions: SologenicTypes.XRPLClientOptions, sologenicOptions: SologenicTypes.TransactionHandlerOptions);
    /**
     * Sets the Sologenic TX handler signing mechanism
     * @param signingMechanism
     */
    setSigningMechanism(signingMechanism: ISologenicTxSigner): void;
    /**
     * Gets the Sologenic TX handler signing mechanism
     * @param signingMechanism
     */
    getSigningMechanism(): ISologenicTxSigner;
    /**
     * Set XRPL base fee for transactions, the ledger object is updated by ledger streaming event updates
     * @param fee Fee in XRP (not drops), this will be converted when constructing the TX
     * @returns {Promise.<this>}
     */
    setLedgerBaseFeeXRP(fee: string): this;
    /**
     * Get XRPL base fee for transactions
     * @param fee Fee in XRP (not drops), this will be converted when constructing the TX
     * @returns {Promise.<string>}
     */
    getLedgerBaseFeeXRP(): string;
    /**
     * Set XRPL ledger version, the ledger object is updated by ledger streaming event updates
     * @param version XRPL ledger version
     * @returns {Promise.<this>}
     */
    setLedgerVersion(version: number): this;
    /**
     * Get XRPL ledger version
     * @returns {Promise.<number>}
     */
    getLedgerVersion(): number;
    /**
     * Get access to the initialized Ripple API instance used by the Sologenic TX Handler
     * @returns {RippleAPI}
     */
    getRippleApi(): any;
    getXrplUtils(): typeof xrpl;
    getFormattedOrderbook(market: Market): Promise<{
        bids: unknown[];
        asks: unknown[];
    }>;
    /**
     * Connect to various services: RippleAPI, fetch current ledger state.
     * @returns {Promise.<this>}
     */
    connect(): Promise<this>;
    /**
     * Start Signer Connection if this one is not OFFLINE SIGNER
     *
     */
    connectSigner(): Promise<any>;
    /**
     * Preserve existing functionality
     *
     * @param {account}           XRPL account address and secret, or address and a keypair
     * @returns {Promise.<void>}
     * @throws {SologenicError}
     */
    setAccount(account: SologenicTypes.Account): Promise<void>;
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
    setXrplAccount(xrplAccount: XrplAccount): Promise<void>;
    getAccount(): XrplAccount;
    cancelTx(unsignedTx: SologenicTypes.UnsignedTx): Promise<boolean>;
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
    submit(tx: SologenicTypes.TX, shouldSubmitTx?: boolean): SologenicTypes.TransactionObject;
    /**
     * Check if we're connected to the XRPL
     * @returns connected
     */
    private _connected;
    /**
     * Recursivle loop and query TXMQƨ to see when the id has been validated, every 100 milliseconds
     * @param id
     * @returns ResolvedTx
     */
    private _resolve;
    /**
     * Fetches current ledger and account information to be used for transaction submission
     *
     * @returns {Promise.<void>}
     * @throws {SologenicError}
     */
    private _fetchCurrentState;
    /**
     * Subscribe to XRPL websocket events connect, disconnect, error and ledger stream updates.
     * @throws {SologenicError}
     */
    private _subscribeWS;
    /**
     * Initiate the transaction, prepare it to add the queue
     *
     * @param {id}  Transaction ID generated by the UUID library
     * @param {tx}  Raw Transaction Object
     *
     * @throws {SologenicError}
     */
    private _initiateTx;
    /**
     * Add the raw transaction to the queue.
     * @param {id}  Transaction ID generated by the UUID library
     * @param {tx}  Raw Transaction Object
     */
    private _addRawTxToQueue;
    /**
     * Add id to the memo field of the transactions.
     * More info: https://xrpl.org/transaction-common-fields.html#memos-field
     *
     * @param {tx}  Raw Transaction Object
     */
    private _addMemo;
    /**
     * Dispatch listener
     *
     * @description Recursively loop and fetch the persistent data store to fetch groups of transactions to be dispatched
     */
    private _dispatch;
    /**
     * Dispatch job handler
     *
     * @description Recursively try transactions and based on the dispatch result try again, or a
     * @param unsignedTx
     */
    private _dispatchHandler;
    /**
     * Signs a transaction and executes a callback after the transaction has been signed
     * @param unsignedTx
     * @param callback
     */
    private _signTransaction;
    /**
     * Dispatch the signed transaction to the ledger
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
    private _dispatchSignedTxToLedger;
    /**
     * Handle dispatched transaction and emit (dispatched) events to event listeners
     *
     * @param unsignedTx
     * @param tx
     * @param result
     * @param signedTx
     * @param firstLedgerSequence
     */
    private _txDispatched;
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
    private _txFailed;
    /**
     * Validate missed transactions sitting on the dispatched queue
     *
     * @throws {SologenicError}
     */
    private _validateMissedTransactions;
    /**
     * Event listener for dispatched events
     * @description Validate transaction that are added to the dispatched queue once they have been emitted
     */
    private _validateOnLedger;
    /**
     * Validate transactions on the XRP Ledger
     *
     * @param id
     * @param dispatchedTx
     */
    private _validateTxOnLedger;
}
export {};
