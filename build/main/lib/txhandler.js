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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SologenicTxHandler = void 0;
const RippleError = __importStar(require("sologenic-ripple-lib-1-10-0-patched/dist/npm/common/errors"));
const account_1 = __importStar(require("./account"));
const queues_1 = __importDefault(require("./queues"));
const signing_1 = require("./signing");
const error_1 = require("./error");
const mathjs_1 = require("mathjs");
const events_1 = require("events");
const uuid_1 = require("uuid");
const utils_1 = require("./utils");
const binaryCodec = require('ripple-binary-codec');
const xrpl = require('xrpl');
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
class SologenicTxHandler extends events_1.EventEmitter {
    /**
     * Constructor for an instance of sologenic tx handler.
     *
     * @param rippleApiOptions     This parameter is used to construct sologenic-ripple-lib-1-10-0-patched and takes in:
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
    // rippleApiOptions: SologenicTypes.RippleAPIOptions,
    xrplClientOptions, sologenicOptions) {
        /**
         * Event emitter constructor
         */
        super();
        /**
         * Clear cache of sologenic tx handler when the queue is initialized
         */
        this.clearCache = false;
        // protected rippleApi!: RippleAPI;
        /**
         * Dispatch listener boolean flag for Sologenic TX Handler.  This is to ensure we're only
         * running a single dispatcher thread at a time.
         */
        this.dispatchListener = false;
        /**
         * Internal queue for transaction events occuring on a specific transaction.
         * Events are emitted globally to the [[SologenicTxHandler]] instance and the
         * txEvents queue
         */
        this.txEvents = {};
        /**
         * Our fee cushion to make sure that all fees are multiplied by
         * 1.2 so that we ensure that we're not being rejected by the
         * XRPL for too small of a txFee.
         */
        this.feeCushion = 1.2;
        /**
         * Delete events older than
         */
        this.maximumTimeToLive = 900;
        /**
         * Signing mechanism
         */
        this.signingMechanism = new signing_1.OfflineSigner({});
        try {
            /**
             * Construct a new Ripple API instance
             */
            // this.rippleApi = new RippleAPI({
            //   feeCushion: 1,
            //   timeout: 1000000,
            //   ...rippleApiOptions
            // });
            this.rippleApi = new xrpl.Client(xrplClientOptions.server, Object.assign({ feeCushion: 1, timeout: 1000000 }, xrplClientOptions));
            console.log('DEV SOLOGENIC 5');
            /**
             * Subscribe to sologenic-ripple-lib-1-10-0-patched on("") events
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
             * Maximum time to live, if this is 0, then we'll not perform any cleanup
             */
            this.maximumTimeToLive = sologenicOptions.maximumTimeToLive
                ? sologenicOptions.maximumTimeToLive
                : 0;
            /**
             * Initialize TXMQƨ (Sologenic Transaction Message Queue)
             */
            try {
                this.txmq = new queues_1.default(sologenicOptions); // Pass on the queue connection details
            }
            catch (error) {
                throw new error_1.SologenicError('1002', error);
            }
            /**
             * Set clearCache to true if the client needs to ignore and clean the queue before starting
             */
            if (typeof sologenicOptions.clearCache !== 'undefined' &&
                sologenicOptions.clearCache) {
                this.clearCache = true;
            }
            /**
             * Initialize BigNumber
             */
            this.math = mathjs_1.create(mathjs_1.all, {
                epsilon: 1e-12,
                number: 'BigNumber',
                precision: 64
            });
            /**
             * Initialize signing mechanism
             */
            if (typeof sologenicOptions.signingMechanism !== 'undefined')
                this.signingMechanism = sologenicOptions.signingMechanism;
        }
        catch (error) {
            console.log(error);
            throw new error_1.SologenicError('1001', error);
        }
    }
    /**
     * Sets the Sologenic TX handler signing mechanism
     * @param signingMechanism
     */
    setSigningMechanism(signingMechanism) {
        this.signingMechanism = signingMechanism;
    }
    /**
     * Gets the Sologenic TX handler signing mechanism
     * @param signingMechanism
     */
    getSigningMechanism() {
        return this.signingMechanism;
    }
    /**
     * Set XRPL base fee for transactions, the ledger object is updated by ledger streaming event updates
     * @param fee Fee in XRP (not drops), this will be converted when constructing the TX
     * @returns {Promise.<this>}
     */
    setLedgerBaseFeeXRP(fee) {
        this.ledger.baseFeeXRP = fee;
        return this;
    }
    /**
     * Get XRPL base fee for transactions
     * @param fee Fee in XRP (not drops), this will be converted when constructing the TX
     * @returns {Promise.<string>}
     */
    getLedgerBaseFeeXRP() {
        return this.ledger.baseFeeXRP;
    }
    /**
     * Set XRPL ledger version, the ledger object is updated by ledger streaming event updates
     * @param version XRPL ledger version
     * @returns {Promise.<this>}
     */
    setLedgerVersion(version) {
        this.ledger.ledgerVersion = version;
        return this;
    }
    /**
     * Get XRPL ledger version
     * @returns {Promise.<number>}
     */
    getLedgerVersion() {
        return this.ledger.ledgerVersion;
    }
    /**
     * Get access to the initialized Ripple API instance used by the Sologenic TX Handler
     * @returns {RippleAPI}
     */
    getRippleApi() {
        return this.rippleApi;
    }
    getXrplUtils() {
        return xrpl;
    }
    async getFormattedOrderbook(market) {
        const offers = await this.rippleApi.request({
            command: 'book_offers',
            taker_gets: market.base,
            taker_pays: market.counter,
            ledger_index: 'validated',
            limit: 200
        });
        const revOffers = await this.rippleApi.request({
            command: 'book_offers',
            taker_gets: market.counter,
            taker_pays: market.base,
            ledger_index: 'validated',
            limit: 200
        });
        const directOffers = (offers.result ? offers.result.offers : []).reduce((acc, res) => {
            return acc.concat(res);
        }, []);
        const reversedOffers = (revOffers.result
            ? revOffers.result.offers
            : []).reduce((acc, res) => acc.concat(res), []);
        const formattedOrderbook = utils_1.formatOrderbook([...directOffers, ...reversedOffers], market);
        return formattedOrderbook;
    }
    /**
     * Connect to various services: RippleAPI, fetch current ledger state.
     * @returns {Promise.<this>}
     */
    async connect() {
        try {
            if (!this.getRippleApi().isConnected()) {
                await this.getRippleApi().connect();
                await this._connected();
                const currentLedger = await this.getRippleApi().request({
                    command: 'ledger',
                    ledger_index: 'validated'
                });
                this.setLedgerVersion(currentLedger.result.ledger_index);
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
        }
        catch (error) {
            console.log('Connect', error);
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
     * Start Signer Connection if this one is not OFFLINE SIGNER
     *
     */
    async connectSigner() {
        if (this.signingMechanism.signerID !== 'offline') {
            const connection_ref = await this.signingMechanism.requestConnection();
            return connection_ref;
        }
    }
    /**
     * Preserve existing functionality
     *
     * @param {account}           XRPL account address and secret, or address and a keypair
     * @returns {Promise.<void>}
     * @throws {SologenicError}
     */
    async setAccount(account) {
        try {
            let xrplAccount = new account_1.default(account.address, account.secret, typeof account.keypair !== 'undefined' &&
                typeof account.keypair.publicKey !== 'undefined'
                ? account.keypair.publicKey
                : undefined, typeof account.keypair !== 'undefined' &&
                typeof account.keypair.privateKey !== 'undefined'
                ? account.keypair.privateKey
                : undefined);
            this.xrplAccount = xrplAccount;
            // The validate method will raise an exception if the account is not
            xrplAccount.validate();
            if (this.clearCache)
                // Clear the cache
                await this.txmq.delAll();
            // Connect, fetch the current state (sequence) of the account, and validate missed
            // transactions
            await this.connect();
            await this._fetchCurrentState();
            await this._validateMissedTransactions();
        }
        catch (error) {
            if (error instanceof account_1.XrplAddressException) {
                throw new error_1.SologenicError('2000', error);
            }
            else if (error instanceof account_1.XrplSecretException) {
                throw new error_1.SologenicError('2001', error);
            }
            else if (error instanceof account_1.XrplKeypairException) {
                throw new error_1.SologenicError('2001', error);
            }
            else if (error instanceof account_1.XrplKeypairOrSecretMissingException) {
                throw new error_1.SologenicError('2001', error);
            }
            else {
                throw error;
            }
        }
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
    async setXrplAccount(xrplAccount) {
        try {
            // The validate method will raise an exception if the account is not
            xrplAccount.validate();
            // If the validation is successful, then continue by setting the XRPL account
            // as the account the Sologenic TX handler will utilize
            this.xrplAccount = xrplAccount;
            if (this.clearCache)
                // Clear the cache
                await this.txmq.delAll();
            // Connect, fetch the current state (sequence) of the account, and validate missed
            // transactions
            await this.connect();
            await this._fetchCurrentState();
            await this._validateMissedTransactions();
        }
        catch (error) {
            if (error instanceof account_1.XrplAddressException) {
                throw new error_1.SologenicError('2000', error);
            }
            else if (error instanceof account_1.XrplSecretException) {
                throw new error_1.SologenicError('2001', error);
            }
            else if (error instanceof account_1.XrplKeypairException) {
                throw new error_1.SologenicError('2001', error);
            }
            else if (error instanceof account_1.XrplKeypairOrSecretMissingException) {
                throw new error_1.SologenicError('2001', error);
            }
            else {
                throw error;
            }
        }
    }
    getAccount() {
        return this.xrplAccount;
    }
    async cancelTx(unsignedTx) {
        // const cancellation: boolean = await this._txFailed(
        //   unsignedTx,
        //   'txCancelled',
        //   'transaction cancelled'
        // );
        this.signingMechanism.cancelSigning(true);
        await this.txmq.add('txmq:cancelled:' + this.getAccount().getAddress(), unsignedTx.data, unsignedTx.id);
        // return cancellation;
        return true;
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
    submit(tx, shouldSubmitTx = true) {
        try {
            // Generate a unique ID using the uuid library
            const id = uuid_1.v4();
            // Add a new EventEmitter to txEvents array identifiable with the generated id.
            this.txEvents[id] = new events_1.EventEmitter();
            if (!shouldSubmitTx)
                tx.submit = shouldSubmitTx;
            this._initiateTx(id, tx);
            return {
                events: this.txEvents[id],
                id,
                promise: (() => {
                    return this._resolve(id);
                })()
            };
        }
        catch (error) {
            return error;
        }
    }
    /**
     * Check if we're connected to the XRPL
     * @returns connected
     */
    async _connected() {
        if (this.getRippleApi().isConnected()) {
            return true;
        }
        else {
            await utils_1.wait(100);
            return this._connected();
        }
    }
    /**
     * Recursivle loop and query TXMQƨ to see when the id has been validated, every 100 milliseconds
     * @param id
     * @returns ResolvedTx
     */
    async _resolve(id) {
        const validated = await this.txmq.get('txmq:validated:' + this.getAccount().getAddress(), id);
        if (typeof validated !== 'undefined') {
            return validated.data;
        }
        else {
            const failed = await this.txmq.get('txmq:failed:' + this.getAccount().getAddress(), id);
            // console.log(`Failed TX (${id}): ${failed}`);
            if (typeof failed !== 'undefined') {
                return failed.data;
            }
            // retry in 100ms
            await utils_1.wait(100);
            return this._resolve(id);
        }
    }
    /**
     * Fetches current ledger and account information to be used for transaction submission
     *
     * @returns {Promise.<void>}
     * @throws {SologenicError}
     */
    async _fetchCurrentState() {
        try {
            // If the Ripple API is not connected, make sure we connect.
            if (!this.getRippleApi().isConnected()) {
                await this.getRippleApi().connect();
            }
            // Use the sologenic-ripple-lib-1-10-0-patched built in REST functions to get the ledger version and fee. Please note that these
            // values are updated using the WS after the first initilization, until this method is called again
            const accountInfo = await this.getRippleApi().request({
                command: 'account_info',
                account: this.getAccount().getAddress()
            });
            this.getAccount().setAccountSequence(accountInfo.result.account_data.Sequence);
            return;
        }
        catch (error) {
            // If there is a disconnection error, keep trying until connection is made. Retry in 1000ms
            if (error instanceof RippleError.DisconnectedError) {
                // Try fetching the current state again
                await this._fetchCurrentState();
                // Unspecific RippleError
            }
            else if (error instanceof RippleError.RippledError) {
                throw new error_1.SologenicError('1004', error);
            }
            else {
                throw new error_1.SologenicError('1000', error);
            }
        }
    }
    /**
     * Subscribe to sologenic-ripple-lib-1-10-0-patched websocket events connect, disconnect, error and ledger stream updates.
     * @throws {SologenicError}
     */
    _subscribeWS() {
        try {
            this.getRippleApi().on('connect', () => {
                // On connection, get the current ledger version
                this.getRippleApi()
                    .getLedger()
                    .then((ledger) => {
                    this.setLedgerVersion(ledger.ledgerVersion);
                });
            });
            this.getRippleApi().on('disconnect', () => {
                // Reconnect
                this.getRippleApi().connect();
            });
            this.getRippleApi().on('error', () => {
                // Reconnect
                this.getRippleApi().connect();
            });
            this.getRippleApi().on('ledger', (ledger) => {
                // Update the ledger version
                this.ledger = ledger;
            });
        }
        catch (error) {
            throw new error_1.SologenicError('1005', error);
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
    async _initiateTx(id, tx) {
        try {
            await this._addRawTxToQueue({
                txJSON: tx
            }, id);
        }
        catch (error) {
            throw new error_1.SologenicError('1000', error);
        }
    }
    /**
     * Add the raw transaction to the queue.
     * @param {id}  Transaction ID generated by the UUID library
     * @param {tx}  Raw Transaction Object
     */
    async _addRawTxToQueue(txJson, id) {
        try {
            const rawTx = await this.txmq.get('txmq:raw:' + this.getAccount().getAddress(), id);
            if (typeof rawTx !== 'undefined') {
                console.log(`TX ID txmq:raw:${this.getAccount().getAddress()}, ${id} already exists on the queue; delete it first!`);
                return;
            }
            const item = await this.txmq.add('txmq:raw:' + this.getAccount().getAddress(), txJson, id);
            const queuedEvent = {
                id: id,
                txJson: txJson
            };
            // Emit on object specific listener
            if (typeof this.txEvents[item.id] !== 'undefined') {
                this.txEvents[item.id].emit('queued', queuedEvent);
            }
            // Emit globally
            this.emit('queued', queuedEvent);
        }
        catch (error) {
            throw new error_1.SologenicError('1000', error);
        }
    }
    /**
     * Add id to the memo field of the transactions.
     * More info: https://xrpl.org/transaction-common-fields.html#memos-field
     *
     * @param {tx}  Raw Transaction Object
     */
    _addMemo(tx) {
        try {
            let constructedTx = Object.assign(Object.assign({}, tx.data.txJSON), { Memos: [
                    ...(tx.data.txJSON.Memos ? tx.data.txJSON.Memos : []),
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
                ] });
            return constructedTx;
        }
        catch (error) {
            throw new error_1.SologenicError('1000', error);
        }
    }
    /**
     * Dispatch listener
     *
     * @description Recursively loop and fetch the persistent data store to fetch groups of transactions to be dispatched
     */
    async _dispatch() {
        try {
            if (this.maximumTimeToLive > 0) {
                await this.txmq.deleteOlderThan(this.maximumTimeToLive);
            }
            // Get raw transactions from the queue
            const txList = await this.txmq.getAll(`txmq:raw:${this.getAccount().getAddress()}`);
            if (typeof txList !== 'undefined') {
                // Loop through each, FIFO order, and dispatch the transaction
                // maybe set a limit here on the maximum number of promises
                // that can run at a time.
                for (var tx of txList) {
                    const signingTransaction = await this.txmq.get('txmq:signing:' + this.getAccount().getAddress(), tx.id);
                    if (typeof signingTransaction === 'undefined') {
                        await this._dispatchHandler(tx);
                    }
                    else {
                        // console.log(`Transaction [${tx.id}] has already been dispatched`);
                        continue;
                    }
                }
            }
            // Once the queue is dispatched, wait 500ms and re-fetch the queue.
            await utils_1.wait(1000);
            return await this._dispatch();
        }
        catch (error) {
            // console.log("Caught exception: ", error);
            // Ignore errors and re-try the queue, wait 500ms and re-fetch the queue.
            await utils_1.wait(1000);
            return this._dispatch();
        }
    }
    /**
     * Dispatch job handler
     *
     * @description Recursively try transactions and based on the dispatch result try again, or a
     * @param unsignedTx
     */
    async _dispatchHandler(unsignedTx) {
        try {
            await this.txmq.add('txmq:signing:' + this.getAccount().getAddress(), unsignedTx, unsignedTx.id);
            const signingEvent = {
                id: unsignedTx.id,
                txJson: unsignedTx.data
            };
            this.emit('signing', signingEvent);
            return this._signTransaction(unsignedTx)
                .then(async (signedTx) => {
                const isCancelled = await this.txmq.get(`txmq:cancelled:${this.getAccount().getAddress()}`, unsignedTx.id);
                if (isCancelled) {
                    await this.txmq.del(`txmq:cancelled:${this.getAccount().getAddress()}`, unsignedTx.id);
                    throw new Error('TRANSACTION_HAS_BEEN_CANCELLED');
                }
                if (unsignedTx.data.txJSON.submit === false) {
                    this.emit('signed', { signedTx, unsignedTx });
                    await this.txmq.del(`txmq:raw:${this.getAccount().getAddress()}`, unsignedTx.id);
                    return;
                }
                else {
                    const result = await this._dispatchSignedTxToLedger(unsignedTx, signedTx);
                    if (result) {
                        await this.txmq.del(`txmq:raw:${this.getAccount().getAddress()}`, unsignedTx.id);
                        return;
                    }
                    else {
                        return await this._dispatchHandler(unsignedTx);
                    }
                }
            })
                .catch(async (error) => {
                await this._txFailed(unsignedTx, error.message, error);
                throw error;
            })
                .finally(async () => {
                // Finally delete the signing message
                await this.txmq.del('txmq:signing:' + this.getAccount().getAddress(), unsignedTx.id);
            });
        }
        catch (error) {
            // console.log('Caught signing exception in _dispatchHandler!');
            throw new error_1.SologenicError('1000', error);
        }
    }
    /**
     * Signs a transaction and executes a callback after the transaction has been signed
     * @param unsignedTx
     * @param callback
     */
    async _signTransaction(unsignedTx) {
        // Add id in the memo common field for tracking
        var tx = Object.assign({}, this._addMemo(unsignedTx));
        // const tx = unsignedTx;
        // if (typeof tx.Flags === 'undefined') {
        //   // Transaction Specific Settings
        //   switch (tx.TransactionType) {
        //     case 'AccountSet':
        //       tx.Flags =
        //       // tx.Flags = this.getRippleApi().txFlags.Universal.FullyCanonicalSig;
        //       // JavaScript converts operands to 32-bit signed ints before doing bitwise
        //       // operations. We need to convert it back to an unsigned int.
        //       tx.Flags = tx.Flags >>> 0;
        //       break;
        //   }
        // } else {
        // }
        if (typeof tx.Flags !== 'undefined')
            tx.Flags = tx.Flags >>> 0;
        // multiply the fee by 1.2 to make sure the tx goes through
        // Suggestion. In cases of surge in network fee, this value can be dynamically increased.
        tx.Fee = tx.Fee
            ? tx.Fee
            : this.getXrplUtils().xrpToDrops(this.math
                .multiply(this.getLedgerBaseFeeXRP(), this.feeCushion)
                .toFixed(6));
        // Update the current state of the ledger
        await this._fetchCurrentState();
        // Set the sequence of this tx to the latest sequence obtained from account_info
        if (this.signingMechanism.getIncludeSequence() &&
            typeof tx.Sequence === 'undefined') {
            // Set the sequence number if it was not already provided,
            // this is for our test cases so we can manually specify our
            // sequence.
            // console.log('Queue', dispatchedTxs);
            tx.Sequence = this.getAccount().getCurrentAccountSequence();
        }
        // Set LastLedgerSequence for this tx to make sure it becomes invalid after 3 verified closed ledgers
        tx.LastLedgerSequence = tx.LastLedgerSequence
            ? tx.LastLedgerSequence
            : this.getLedgerVersion();
        delete tx.submit;
        // Use the signing mechanism and then run the callback once the request has been signed, we
        // could use a promise here too...
        return this.signingMechanism
            .sign(tx, unsignedTx.id, this.getAccount(), {})
            .then((signedTx) => {
            this.txEvents[signedTx.id].emit('signed', signedTx);
            return signedTx;
        })
            .catch(e => {
            throw new Error(e.message);
        });
    }
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
    async _dispatchSignedTxToLedger(unsignedTx, signedTx) {
        try {
            // Store the `before` ledger this transaction is being submitted
            const firstLedgerSequence = this.getLedgerVersion();
            // Submit the transaction to the ledger
            const submitResult = await this.getRippleApi().submit(signedTx.tx_blob);
            // const submitResult: any = await this.getRippleApi().request({
            //   command: 'submit',
            //   tx_blob: signedTx.signedTransaction
            // });
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
            if (submitResult.result.engine_result !== 'tesSUCCESS') {
                const warningEvent = {
                    id: signedTx.id,
                    state: 'dispatch',
                    reason: `${submitResult.result.engine_result}: ${submitResult.result.engine_result_message}`
                };
                this.emit('warning', warningEvent, unsignedTx);
                if (typeof this.txEvents[signedTx.id] !== 'undefined') {
                    this.txEvents[signedTx.id].emit('warning', warningEvent);
                }
                // Specific actions based on different errors
                // The account sending the transaction does not have enough XRP to pay the Fee specified in the transaction.
                if (submitResult.result.engine_result === 'terINSUF_FEE_B') {
                    await utils_1.wait(100);
                }
                // The network fee has increased due to load
                // The Fee from the transaction is not high enough to meet the server's current
                // transaction cost requirement, which is derived from its load level.
                if (submitResult.result.engine_result === 'telINSUF_FEE_P') {
                    await utils_1.wait(100);
                }
                // The transaction did not meet the open ledger cost and also was not added to the transaction queue. This code occurs when a transaction with the same sender and sequence number already exists in the queue and the new one does not pay a large enough transaction cost to replace the existing transaction. To replace a transaction in the queue, the new transaction must have a Fee value that is at least 25% more, as measured in fee levels. You can increase the Fee and try again, send this with a higher Sequence number so it doesn't replace an existing transaction, or try sending to another server. New in: rippled 0.70.2
                if (submitResult.result.engine_result === 'telCAN_NOT_QUEUE_FEE') {
                    await utils_1.wait(100);
                }
                // The transaction did not meet the open ledger cost and also was not added to the transaction queue because a transaction queued ahead of it from the same sender blocks it. (This includes all SetRegularKey and SignerListSet transactions, as well as AccountSet transactions that change the RequireAuth/OptionalAuth, DisableMaster, or AccountTxnID flags.) You can try again later, or try submitting to a different server.
                if (submitResult.result.engine_result === 'telCAN_NOT_QUEUE_BLOCKED') {
                    await utils_1.wait(100);
                }
                // 	The address sending the transaction is not funded in the ledger (yet).
                if (submitResult.result.engine_result === 'terNOaccount') {
                    this.getAccount().incrementAccountSequenceBy(-1);
                    return await this._txFailed(unsignedTx, 'terNOaccount', submitResult.result);
                }
                // 	The transaction would involve adding currency issued by an account with lsfRequireAuth enabled to a trust line that is not authorized. For example, you placed an offer to buy a currency you aren't authorized to hold.
                if (submitResult.result.engine_result === 'terNO_AUTH') {
                    await utils_1.wait(100);
                }
                // 	The transaction requires that account sending it has a nonzero "owners count", so the transaction cannot succeed. For example, an account cannot enable the lsfRequireAuth flag if it has any trust lines or available offers.
                if (submitResult.result.engine_result === 'terOWNERS') {
                    await utils_1.wait(100);
                }
                // The sequence number of the transaction is lower than the current sequence number of the account sending the transaction.
                // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
                if (submitResult.result.engine_result === 'tefPAST_SEQ') {
                    await this._fetchCurrentState();
                    await utils_1.wait(1000);
                }
                // The Sequence number of the current transaction is higher than the current sequence number of the account sending the transaction.
                // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
                if (submitResult.result.engine_result === 'terPRE_SEQ') {
                    await this._fetchCurrentState();
                    await utils_1.wait(1000);
                }
                // Unspecified retriable error.
                if (submitResult.result.engine_result === 'terRETRY') {
                    await utils_1.wait(100);
                }
                //	The transaction met the load-scaled transaction cost but did not meet the open ledger requirement, so the transaction has been queued for a future ledger.
                if (submitResult.result.engine_result === 'terQUEUED') {
                    // Wait 4000ms and continue, possibly too many transactions were submitted to the same rippled server
                    await utils_1.wait(4000);
                }
                // These codes indicate that the transaction was malformed, and cannot succeed according to the XRP Ledger protocol.
                if (submitResult.result.engine_result.startsWith('tem')) {
                    await utils_1.wait(100);
                }
                // These codes indicate an error in the local server processing the transaction; it is possible that another server with a different configuration or load level could process the transaction successfully. They have numerical values in the range -399 to -300. The exact code for any given error is subject to change, so don't rely on it.
                if (submitResult.result.engine_result.startsWith('tel')) {
                    await utils_1.wait(100);
                }
                // These codes indicate that the transaction failed and was not included in a ledger, but the transaction could have succeeded in some theoretical ledger. Typically this means that the transaction can no longer succeed in any future ledger. They have numerical values in the range -199 to -100. The exact code for any given error is subject to change, so don't rely on it.
                if (submitResult.result.engine_result.startsWith('tef')) {
                    if (submitResult.result.engine_result === 'tefBAD_AUTH_MASTER') {
                        this.getAccount().incrementAccountSequenceBy(-1);
                        return await this._txFailed(unsignedTx, submitResult.result.engine_result, submitResult);
                    }
                    if (submitResult.result.engine_result === 'tefBAD_AUTH') {
                        this.getAccount().incrementAccountSequenceBy(-1);
                        return await this._txFailed(unsignedTx, submitResult.result.engine_result, submitResult);
                    }
                    if (submitResult.result.engine_result === 'tefALREADY') {
                        this.getAccount().incrementAccountSequenceBy(-1);
                        return await this._txFailed(unsignedTx, submitResult.result.engine_result, submitResult);
                    }
                    if (submitResult.result.engine_result === 'tefPAST_SEQ') {
                        // Past account sequence
                        return await this._txFailed(unsignedTx, submitResult.result.engine_result, submitResult);
                    }
                    if (submitResult.result.engine_result === 'tefMAX_LEDGER') {
                        return await this._txFailed(unsignedTx, submitResult.result.engine_result, submitResult);
                    }
                }
                // These codes indicate that the transaction failed, but it was applied to a ledger to apply the transaction cost. They have numerical values in the range 100 to 199. Ripple recommends using the text code, not the numeric value.
                if (submitResult.result.engine_result.startsWith('tec')) {
                    return await this._txFailed(unsignedTx, submitResult.result.engine_result, submitResult);
                }
            }
            // Handle the dispatched transaction
            return await this._txDispatched(submitResult, unsignedTx, signedTx, firstLedgerSequence);
        }
        catch (error) {
            if (error instanceof RippleError.RippledError) {
                if (error.data.error === 'invalidTransaction') {
                    return this._txFailed(unsignedTx, `${error.data.error}: ${error.data.error_exception}`, undefined);
                }
                else if (error.data.result.engine_result.startsWith('tem')) {
                    return this._txFailed(unsignedTx, `${error.data.error}: ${error.data.error_exception} (${error.data.result.engine_result})`, undefined);
                }
            }
            else {
                return this._txFailed(unsignedTx, error.message, error.error);
            }
            await utils_1.wait(1000);
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
    async _txDispatched(result, unsignedTx, signedTx, firstLedgerSequence) {
        try {
            // Decode the signed transaction to get our last ledger sequence
            const decodedTransaction = binaryCodec.decode(signedTx.tx_blob);
            // Construct the dispatched object
            const dispatchedTx = Object.assign({ unsignedTx: unsignedTx }, {
                result: Object.assign({ status: result.result.engine_result }, { firstLedger: firstLedgerSequence, hash: result.result.tx_json.hash, lastLedger: decodedTransaction.LastLedgerSequence, sequence: decodedTransaction.Sequence })
            });
            // Add to dispatched queue
            const dispatched = await this.txmq.add('txmq:dispatched:' + this.getAccount().getAddress(), dispatchedTx, unsignedTx.id);
            const dispatchedEvent = {
                id: unsignedTx.id,
                unsignedTx: unsignedTx,
                dispatchedTx: dispatchedTx
            };
            // Emit on object specific listener
            if (typeof this.txEvents[signedTx.id] !== 'undefined') {
                this.txEvents[signedTx.id].emit('dispatched', dispatchedEvent);
            }
            // Emit globally
            // console.log('Emitting globally the dispatched event');
            this.emit('dispatched', dispatchedEvent);
            return dispatched ? true : false;
        }
        catch (error) {
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
    async _txFailed(unsignedTx, reason, result) {
        try {
            // construct the dispatched object
            const failedTx = Object.assign({ unsignedTx: unsignedTx, result: result }, {
                cause: Object.assign({ status: 'failed', reason })
            });
            // Delete the raw transaction too
            await Promise.all([
                this.txmq.del('txmq:raw:' + this.getAccount().getAddress(), unsignedTx.id),
                this.txmq.del('txmq:dispatched:' + this.getAccount().getAddress(), unsignedTx.id),
                this.txmq.del('txmq:signing:' + this.getAccount().getAddress(), unsignedTx.id),
                this.txmq.add('txmq:failed:' + this.getAccount().getAddress(), failedTx, failedTx.unsignedTx.id)
            ]);
            /*
            await this.txmq.del(
              'txmq:raw:' + this.getAccount().getAddress(),
              unsignedTx.id
            );
      
            // Delete any dispatched transaction
            await this.txmq.del(
              'txmq:dispatched:' + this.getAccount().getAddress(),
              unsignedTx.id
            );
      
            await this.txmq.add(
              'txmq:failed:' + this.getAccount().getAddress(),
              failedTx,
              unsignedTx.id
            );
            */
            const failedEvent = {
                id: unsignedTx.id,
                failedTx: failedTx,
                result: result,
                reason: reason
            };
            // Emit globally
            this.emit('failed', failedEvent);
            // Emit on object specific listener channel
            if (typeof this.txEvents[unsignedTx.id] !== 'undefined') {
                this.txEvents[unsignedTx.id].emit('failed', failedEvent);
            }
            return true;
        }
        catch (error) {
            return false;
        }
    }
    /**
     * Validate missed transactions sitting on the dispatched queue
     *
     * @throws {SologenicError}
     */
    async _validateMissedTransactions() {
        try {
            const dispatchedTxs = await this.txmq.getAll('txmq:dispatched:' + this.getAccount().getAddress());
            for (const dispatchedTx of dispatchedTxs) {
                await this._validateTxOnLedger(dispatchedTx.id, dispatchedTx.data);
            }
            return;
        }
        catch (error) {
            throw new error_1.SologenicError('1006');
        }
    }
    /**
     * Event listener for dispatched events
     * @description Validate transaction that are added to the dispatched queue once they have been emitted
     */
    _validateOnLedger() {
        // console.log(`_validateOnLedger: Validating dispatched TX on ledger`);
        this.on('dispatched', async (dispatchedEvent) => {
            await this._validateTxOnLedger(dispatchedEvent.id, dispatchedEvent.dispatchedTx);
        });
    }
    /**
     * Validate transactions on the XRP Ledger
     *
     * @param id
     * @param dispatchedTx
     */
    async _validateTxOnLedger(id, dispatchedTx) {
        try {
            /*
            const currentTime = Math.floor(new Date().getTime());
      
            console.log(`_validateTxOnLedger [${currentTime}]: Validating TX on XRPL (${id})`);
            console.log(dispatchedTx);
            */
            // Check and see if the dispatched transaction's ledger is passed or we are in the current ledger
            // Get the transaction details from the ledger
            // const validatedTx = await this.getRippleApi().getTransaction(
            //   dispatchedTx.result.hash,
            //   {
            //     includeRawTransaction: false,
            //     maxLedgerVersion: dispatchedTx.result.lastLedger,
            //     minLedgerVersion: dispatchedTx.result.firstLedger
            //   }
            // );
            const validatedTx = await this.getRippleApi().request({
                command: 'tx',
                transaction: dispatchedTx.result.hash
            });
            // Make sure this transaction existed in the queue
            // only if the result from the closed ledger is tesSUCCESS, consider this transaction to be final
            if (validatedTx.result.validated) {
                /*
                      Add them to `validated` queue for archiving. This queue is not processed and is just for the records.
        
                      Suggestion: add a TTL to these transactions in this queue to avoid overloading Redis or memory and possibly move these
                      transactions to a database
                    */
                const hasBeenDeleted = await this.txmq.get('txmq:dispatched:' + this.getAccount().getAddress(), id);
                // Remove the transaction from the dispatched queue
                await this.txmq.del('txmq:dispatched:' + this.getAccount().getAddress(), id);
                const validatedEvent = {
                    id: id,
                    dispatchedTx: dispatchedTx,
                    resolvedTx: {
                        accountSequence: validatedTx.result.Sequence,
                        sequence: dispatchedTx.result.sequence,
                        fee: validatedTx.result.Fee,
                        hash: dispatchedTx.result.hash,
                        ledgerVersion: validatedTx.result.LastLedgerSequence
                        // timestamp: validatedTx!.outcome.timestamp!
                    },
                    reason: validatedTx.result.validated ? 'success' : 'Failed'
                };
                await this.txmq.add('txmq:validated:' + this.getAccount().getAddress(), validatedEvent.resolvedTx, id);
                if (typeof this.txEvents[id] !== 'undefined') {
                    this.txEvents[id].emit('validated', validatedEvent);
                }
                // Emit on object specific listener
                if (hasBeenDeleted) {
                    this.emit('validated', validatedEvent);
                }
                // At this stage, it is safe to delete the object specific listner's EventEmitter object since validation is
                // the last event that is emitted.
                delete this.txEvents[id];
            }
            else {
                // Transaction was in the ledger but failed for any reason.
                // This transaction is now moved to txmq:raw: for re-processing.
                await utils_1.wait(300);
                return await this._validateTxOnLedger(id, dispatchedTx);
                // const warningEvent: SologenicTypes.WarningEvent = {
                //   id: id,
                //   state: 'validation',
                //   reason: 'not_validated',
                //   dispatchedTx: dispatchedTx
                // };
                // const requeueEvent: SologenicTypes.RequeuedEvent = {
                //   id: id,
                //   reason: 'requeue',
                //   dispatchedTx: dispatchedTx
                // };
                // this.emit('warning', warningEvent);
                // this.emit('requeued', requeueEvent);
                // // emit on object specific listener channel warning and requeued. Letting the client know that this transaction is being re-processed
                // if (typeof this.txEvents![id] !== 'undefined') {
                //   this.txEvents![id].emit('warning', warningEvent);
                //   this.txEvents![id].emit('requeued', requeueEvent);
                // }
                // // add the transaction to the raw queue
                // this._addRawTxToQueue(dispatchedTx!.unsignedTx!.data, id);
            }
            return;
        }
        catch (error) {
            // Transaction not found on the ledger, It means this transaction was ignore for whatever reason. Re-queue and re-process
            if (error instanceof RippleError.NotFoundError) {
                const warningEvent = {
                    id: id,
                    state: 'validation',
                    reason: 'not_validated',
                    dispatchedTx: dispatchedTx
                };
                const requeueEvent = {
                    id: id,
                    reason: 'requeue',
                    dispatchedTx: dispatchedTx
                };
                this.emit('warning', warningEvent);
                this.emit('requeued', requeueEvent);
                // emit on object specific listener channel warning and requeued. Letting the client know that this transaction is being re-processed
                if (typeof this.txEvents[id] !== 'undefined') {
                    this.txEvents[id].emit('warning', warningEvent);
                    this.txEvents[id].emit('requeued', requeueEvent);
                }
                // Remove transaction from the dispatched queue
                await this.txmq.del('txmq:dispatched:' + this.getAccount().getAddress(), id);
                // add the transaction to the raw queue
                this._addRawTxToQueue(dispatchedTx.unsignedTx.data, id);
            }
            else {
                // if unspecified error, wait 1000ms re-try validation
                await utils_1.wait(1000);
                return this._validateTxOnLedger(id, dispatchedTx);
            }
        }
    }
}
exports.SologenicTxHandler = SologenicTxHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHhoYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90eGhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdHQUEwRjtBQUMxRixxREFLbUI7QUFFbkIsc0RBQTZCO0FBRTdCLHVDQUEwQztBQUUxQyxtQ0FBeUM7QUFFekMsbUNBQW1FO0FBQ25FLG1DQUFzQztBQUV0QywrQkFBa0M7QUFDbEMsbUNBQWdEO0FBVWhELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3Qjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFhLGtCQUFtQixTQUFRLHFCQUFZO0lBbUVsRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSDtJQUNFLHFEQUFxRDtJQUNyRCxpQkFBbUQsRUFDbkQsZ0JBQTBEO1FBRTFEOztXQUVHO1FBQ0gsS0FBSyxFQUFFLENBQUM7UUFyRlY7O1dBRUc7UUFDTyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBTXRDLG1DQUFtQztRQUVuQzs7O1dBR0c7UUFDTyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFNUM7Ozs7V0FJRztRQUNPLGFBQVEsR0FBb0MsRUFBRSxDQUFDO1FBVXpEOzs7O1dBSUc7UUFDTyxlQUFVLEdBQVcsR0FBRyxDQUFDO1FBRW5DOztXQUVHO1FBQ08sc0JBQWlCLEdBQVcsR0FBRyxDQUFDO1FBWTFDOztXQUVHO1FBQ08scUJBQWdCLEdBQXNDLElBQUksdUJBQWEsQ0FDL0UsRUFBRSxDQUNILENBQUM7UUE0QkEsSUFBSTtZQUNGOztlQUVHO1lBQ0gsbUNBQW1DO1lBQ25DLG1CQUFtQjtZQUNuQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLE1BQU07WUFFTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0s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