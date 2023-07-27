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
         * Ripple node
         */
        this.rippleNode = '';
        this.attempts = 0;
        this.networkMode = 'mainnet';
        this.attemptedNodes = [];
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
            this.networkMode = xrplClientOptions.mode || this.networkMode;
            this.rippleApi = new xrpl.Client(xrplClientOptions.custom_server ||
                utils_1.default_nodes[(xrplClientOptions.mode || 'mainnet')][0], {
                feeCushion: 1,
                timeout: 1000000
            });
            this.rippleNode =
                xrplClientOptions.custom_server ||
                    utils_1.default_nodes[(xrplClientOptions.mode || 'mainnet')][0];
            console.log('SXSJ: 1.1.43');
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
            ledger_index: 'current',
            limit: 200
        });
        const revOffers = await this.rippleApi.request({
            command: 'book_offers',
            taker_gets: market.counter,
            taker_pays: market.base,
            ledger_index: 'current',
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
            this.attempts += 1;
            if (this.attempts > 5) {
                throw new Error('Switch Nodes');
            }
            else {
                this.rippleApi = new xrpl.Client(this.rippleNode, {
                    feeCushion: 1,
                    timeout: 1000000
                });
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
                return this;
            }
            // Return this
        }
        catch (error) {
            console.log('Connect', error);
            // if there is a disconnection error, keep trying until connection is made. Retry in 1000ms
            // if (error instanceof xrpl.DisconnectedError) {
            //   await this._connected();
            //   return this;
            //   // throw new SologenicError('1003');
            // }
            if (error.message === 'Switch Nodes') {
                this.attempts = 0;
                this.attemptedNodes.push(this.rippleNode);
                this.rippleNode = utils_1.default_nodes[this.networkMode].find((node) => !this.attemptedNodes.includes(node));
                if (!this.rippleNode) {
                    throw new Error('Unable to establish connection to the XRP Ledger');
                }
            }
            await utils_1.wait(300);
            return await this.connect();
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
                : undefined, typeof account.mnemonic !== 'undefined' ? account.mnemonic : undefined);
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
        // Set the Ripple Metrics id
        tx.SourceTag = 110100111;
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
                    if (submitResult.result.engine_result === 'tefNO_AUTH_REQUIRED') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHhoYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90eGhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdHQUEwRjtBQUMxRixxREFLbUI7QUFFbkIsc0RBQTZCO0FBRTdCLHVDQUEwQztBQUMxQyxtQ0FBeUM7QUFFekMsbUNBQThEO0FBQzlELG1DQUFzQztBQUV0QywrQkFBa0M7QUFDbEMsbUNBQTZFO0FBSTdFLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3Qjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFhLGtCQUFtQixTQUFRLHFCQUFZO0lBMkVsRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSDtJQUNFLHFEQUFxRDtJQUNyRCxpQkFBbUQsRUFDbkQsZ0JBQTBEO1FBRTFEOztXQUVHO1FBQ0gsS0FBSyxFQUFFLENBQUM7UUE3RlY7O1dBRUc7UUFDTyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBTXRDLG1DQUFtQztRQUVuQzs7V0FFRztRQUNPLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRTlCOzs7V0FHRztRQUNPLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUU1Qzs7OztXQUlHO1FBQ08sYUFBUSxHQUFvQyxFQUFFLENBQUM7UUFVekQ7Ozs7V0FJRztRQUNPLGVBQVUsR0FBVyxHQUFHLENBQUM7UUFFbkM7O1dBRUc7UUFDTyxzQkFBaUIsR0FBVyxHQUFHLENBQUM7UUFZMUM7O1dBRUc7UUFDTyxxQkFBZ0IsR0FBc0MsSUFBSSx1QkFBYSxDQUMvRSxFQUFFLENBQ0gsQ0FBQztRQTRCQSxJQUFJO1lB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