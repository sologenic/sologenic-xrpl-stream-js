import * as RippleError from 'sologenic-ripple-lib-1-10-0-patched/dist/npm/common/errors';
import XrplAccount, { XrplAddressException, XrplSecretException, XrplKeypairException, XrplKeypairOrSecretMissingException } from './account';
import TXMQƨ from './queues';
import { OfflineSigner } from './signing';
import { SologenicError } from './error';
import { all as mathAll, create as mathCreate } from 'mathjs';
import { EventEmitter } from 'events';
import { v4 as uuid } from 'uuid';
import { wait, formatOrderbook, default_nodes } from './utils';
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
export class SologenicTxHandler extends EventEmitter {
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
        this.signingMechanism = new OfflineSigner({});
        try {
            /**
             * Construct a new Ripple API instance
             */
            this.networkMode = xrplClientOptions.mode || this.networkMode;
            this.rippleApi = new xrpl.Client(xrplClientOptions.custom_server ||
                default_nodes[(xrplClientOptions.mode || 'mainnet')][0], {
                feeCushion: 1,
                timeout: 1000000
            });
            this.rippleNode =
                xrplClientOptions.custom_server ||
                    default_nodes[(xrplClientOptions.mode || 'mainnet')][0];
            console.log('SXSJ: 1.1.31');
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
                this.txmq = new TXMQƨ(sologenicOptions); // Pass on the queue connection details
            }
            catch (error) {
                throw new SologenicError('1002', error);
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
            this.math = mathCreate(mathAll, {
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
            throw new SologenicError('1001', error);
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
        const formattedOrderbook = formatOrderbook([...directOffers, ...reversedOffers], market);
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
                this.rippleNode = default_nodes[this.networkMode].find((node) => !this.attemptedNodes.includes(node));
                if (!this.rippleNode) {
                    throw new Error('Unable to establish connection to the XRP Ledger');
                }
            }
            await wait(300);
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
            let xrplAccount = new XrplAccount(account.address, account.secret, typeof account.keypair !== 'undefined' &&
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
            if (error instanceof XrplAddressException) {
                throw new SologenicError('2000', error);
            }
            else if (error instanceof XrplSecretException) {
                throw new SologenicError('2001', error);
            }
            else if (error instanceof XrplKeypairException) {
                throw new SologenicError('2001', error);
            }
            else if (error instanceof XrplKeypairOrSecretMissingException) {
                throw new SologenicError('2001', error);
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
            if (error instanceof XrplAddressException) {
                throw new SologenicError('2000', error);
            }
            else if (error instanceof XrplSecretException) {
                throw new SologenicError('2001', error);
            }
            else if (error instanceof XrplKeypairException) {
                throw new SologenicError('2001', error);
            }
            else if (error instanceof XrplKeypairOrSecretMissingException) {
                throw new SologenicError('2001', error);
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
            const id = uuid();
            // Add a new EventEmitter to txEvents array identifiable with the generated id.
            this.txEvents[id] = new EventEmitter();
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
            await wait(100);
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
                throw new SologenicError('1004', error);
            }
            else {
                throw new SologenicError('1000', error);
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
    async _initiateTx(id, tx) {
        try {
            await this._addRawTxToQueue({
                txJSON: tx
            }, id);
        }
        catch (error) {
            throw new SologenicError('1000', error);
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
            throw new SologenicError('1000', error);
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
            let constructedTx = {
                ...tx.data.txJSON,
                Memos: [
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
                ]
            };
            return constructedTx;
        }
        catch (error) {
            throw new SologenicError('1000', error);
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
            await wait(1000);
            return await this._dispatch();
        }
        catch (error) {
            // console.log("Caught exception: ", error);
            // Ignore errors and re-try the queue, wait 500ms and re-fetch the queue.
            await wait(1000);
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
            throw new SologenicError('1000', error);
        }
    }
    /**
     * Signs a transaction and executes a callback after the transaction has been signed
     * @param unsignedTx
     * @param callback
     */
    async _signTransaction(unsignedTx) {
        // Add id in the memo common field for tracking
        var tx = { ...this._addMemo(unsignedTx) };
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
                    await wait(100);
                }
                // The network fee has increased due to load
                // The Fee from the transaction is not high enough to meet the server's current
                // transaction cost requirement, which is derived from its load level.
                if (submitResult.result.engine_result === 'telINSUF_FEE_P') {
                    await wait(100);
                }
                // The transaction did not meet the open ledger cost and also was not added to the transaction queue. This code occurs when a transaction with the same sender and sequence number already exists in the queue and the new one does not pay a large enough transaction cost to replace the existing transaction. To replace a transaction in the queue, the new transaction must have a Fee value that is at least 25% more, as measured in fee levels. You can increase the Fee and try again, send this with a higher Sequence number so it doesn't replace an existing transaction, or try sending to another server. New in: rippled 0.70.2
                if (submitResult.result.engine_result === 'telCAN_NOT_QUEUE_FEE') {
                    await wait(100);
                }
                // The transaction did not meet the open ledger cost and also was not added to the transaction queue because a transaction queued ahead of it from the same sender blocks it. (This includes all SetRegularKey and SignerListSet transactions, as well as AccountSet transactions that change the RequireAuth/OptionalAuth, DisableMaster, or AccountTxnID flags.) You can try again later, or try submitting to a different server.
                if (submitResult.result.engine_result === 'telCAN_NOT_QUEUE_BLOCKED') {
                    await wait(100);
                }
                // 	The address sending the transaction is not funded in the ledger (yet).
                if (submitResult.result.engine_result === 'terNOaccount') {
                    this.getAccount().incrementAccountSequenceBy(-1);
                    return await this._txFailed(unsignedTx, 'terNOaccount', submitResult.result);
                }
                // 	The transaction would involve adding currency issued by an account with lsfRequireAuth enabled to a trust line that is not authorized. For example, you placed an offer to buy a currency you aren't authorized to hold.
                if (submitResult.result.engine_result === 'terNO_AUTH') {
                    await wait(100);
                }
                // 	The transaction requires that account sending it has a nonzero "owners count", so the transaction cannot succeed. For example, an account cannot enable the lsfRequireAuth flag if it has any trust lines or available offers.
                if (submitResult.result.engine_result === 'terOWNERS') {
                    await wait(100);
                }
                // The sequence number of the transaction is lower than the current sequence number of the account sending the transaction.
                // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
                if (submitResult.result.engine_result === 'tefPAST_SEQ') {
                    await this._fetchCurrentState();
                    await wait(1000);
                }
                // The Sequence number of the current transaction is higher than the current sequence number of the account sending the transaction.
                // Wait 1000ms and get the current sequence so the next transaction has the correct sequence
                if (submitResult.result.engine_result === 'terPRE_SEQ') {
                    await this._fetchCurrentState();
                    await wait(1000);
                }
                // Unspecified retriable error.
                if (submitResult.result.engine_result === 'terRETRY') {
                    await wait(100);
                }
                //	The transaction met the load-scaled transaction cost but did not meet the open ledger requirement, so the transaction has been queued for a future ledger.
                if (submitResult.result.engine_result === 'terQUEUED') {
                    // Wait 4000ms and continue, possibly too many transactions were submitted to the same rippled server
                    await wait(4000);
                }
                // These codes indicate that the transaction was malformed, and cannot succeed according to the XRP Ledger protocol.
                if (submitResult.result.engine_result.startsWith('tem')) {
                    await wait(100);
                }
                // These codes indicate an error in the local server processing the transaction; it is possible that another server with a different configuration or load level could process the transaction successfully. They have numerical values in the range -399 to -300. The exact code for any given error is subject to change, so don't rely on it.
                if (submitResult.result.engine_result.startsWith('tel')) {
                    await wait(100);
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
    async _txDispatched(result, unsignedTx, signedTx, firstLedgerSequence) {
        try {
            // Decode the signed transaction to get our last ledger sequence
            const decodedTransaction = binaryCodec.decode(signedTx.tx_blob);
            // Construct the dispatched object
            const dispatchedTx = {
                unsignedTx: unsignedTx,
                ...{
                    result: {
                        ...{ status: result.result.engine_result },
                        firstLedger: firstLedgerSequence,
                        hash: result.result.tx_json.hash,
                        lastLedger: decodedTransaction.LastLedgerSequence,
                        sequence: decodedTransaction.Sequence
                    }
                }
            };
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
            const failedTx = {
                unsignedTx: unsignedTx,
                result: result,
                ...{
                    cause: {
                        ...{ status: 'failed', reason }
                    }
                }
            };
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
            throw new SologenicError('1006');
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
                await wait(300);
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
                await wait(1000);
                return this._validateTxOnLedger(id, dispatchedTx);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHhoYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90eGhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLFdBQVcsTUFBTSw0REFBNEQsQ0FBQztBQUMxRixPQUFPLFdBQVcsRUFBRSxFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixtQ0FBbUMsRUFDcEMsTUFBTSxXQUFXLENBQUM7QUFFbkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV6QyxPQUFPLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBTyxNQUFNLElBQUksVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFnQixNQUFNLFNBQVMsQ0FBQztBQU03RSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0I7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUEyRWxEOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNIO0lBQ0UscURBQXFEO0lBQ3JELGlCQUFtRCxFQUNuRCxnQkFBMEQ7UUFFMUQ7O1dBRUc7UUFDSCxLQUFLLEVBQUUsQ0FBQztRQTdGVjs7V0FFRztRQUNPLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNdEMsbUNBQW1DO1FBRW5DOztXQUVHO1FBQ08s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