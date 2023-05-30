import * as RippleError from 'sologenic-ripple-lib-1-10-0-patched/dist/npm/common/errors';
import XrplAccount, { XrplAddressException, XrplSecretException, XrplKeypairException, XrplKeypairOrSecretMissingException } from './account';
import TXMQƨ from './queues';
import { OfflineSigner } from './signing';
import { SologenicError } from './error';
import { all as mathAll, create as mathCreate } from 'mathjs';
import { EventEmitter } from 'events';
import { v4 as uuid } from 'uuid';
import { wait, formatOrderbook } from './utils';
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
            // this.rippleApi = new RippleAPI({
            //   feeCushion: 1,
            //   timeout: 1000000,
            //   ...rippleApiOptions
            // });
            this.rippleApi = new xrpl.Client(xrplClientOptions.server, {
                feeCushion: 1,
                timeout: 1000000,
                ...xrplClientOptions
            });
            console.log('sxsj-app: 1.0.42');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHhoYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90eGhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLFdBQVcsTUFBTSw0REFBNEQsQ0FBQztBQUMxRixPQUFPLFdBQVcsRUFBRSxFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixtQ0FBbUMsRUFDcEMsTUFBTSxXQUFXLENBQUM7QUFFbkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV6QyxPQUFPLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBTyxNQUFNLElBQUksVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFVaEQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDbkQsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdCOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBbUVsRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSDtJQUNFLHFEQUFxRDtJQUNyRCxpQkFBbUQsRUFDbkQsZ0JBQTBEO1FBRTFEOztXQUVHO1FBQ0gsS0FBSyxFQUFFLENBQUM7UUFyRlY7O1dBRUc7UUFDTyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBTXRDLG1DQUFtQztRQUVuQzs7O1dBR0c7UUFDTyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFNUM7Ozs7V0FJRztRQUNPLGFBQVEsR0FBb0MsRUFBRSxDQUFDO1FBVXpEOzs7O1dBSUc7UUFDTyxlQUFVLEdBQVcsR0FBRyxDQUFDO1FBRW5DOztXQUVHO1FBQ08sc0JBQWlCLEdBQVcsR0FBRyxDQUFDO1FBWTFDOztXQUVHO1FBQ08scUJBQWdCLEdBQXNDLElBQUksYUFBYSxDQUMvRSxFQUFFLENBQ0gsQ0FBQztRQTRCQSxJQUFJO1lBQ0Y7O2VBRUc7WUFDSCxtQ0FBbUM7WUFDbkMsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsTUFBTTtZQUVOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtnQkFDekQsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLEdBQUcsaUJBQWlCO2FBQ3JCLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUVoQzs7ZUFFRztZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVwQjs7ZUFFRztZQUNILElBQUksQ0FBQyxNQUFNLEdBQUc7Z0JBQ1osVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLGVBQWUsRUFBRSxHQUFHO2dCQUNwQixhQUFhLEVBQUUsQ0FBQzthQUNqQixDQUFDO1lBRUY7O2VBRUc7WUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCO2dCQUN6RCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO2dCQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRU47O2VBRUc7WUFDSCxJQUFJO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHVDQUF1QzthQUNqRjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO1lBRUQ7O2VBRUc7WUFDSCxJQUNFLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxLQUFLLFdBQVc7Z0JBQ2xELGdCQUFnQixDQUFDLFVBQVUsRUFDM0I7Z0JBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDeEI7WUFFRDs7ZUFFRztZQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDOUIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLFNBQVMsRUFBRSxFQUFFO2FBQ2QsQ0FBQyxDQUFDO1lBRUg7O2VBRUc7WUFFSCxJQUFJLE9BQU8sZ0JBQWdCLENBQUMsZ0JBQWdCLEtBQUssV0FBVztnQkFDMUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1NBQzdEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRW5CLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1CQUFtQixDQUFDLGdCQUFvQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1CQUFtQjtRQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG1CQUFtQixDQUFDLEdBQVc7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBRTdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQixDQUFDLE9BQWU7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBRXBDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRU0sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxLQUFLLENBQUMscUJBQXFCLENBQUMsTUFBYztRQUMvQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzFDLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSTtZQUN2QixVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDMUIsWUFBWSxFQUFFLFdBQVc7WUFDekIsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7UUFFSCxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzdDLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTztZQUMxQixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDdkIsWUFBWSxFQUFFLFdBQVc7WUFDekIsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7UUFFSCxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQ3JFLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsRUFBRSxDQUNILENBQUM7UUFDRixNQUFNLGNBQWMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3RDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FDTCxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEQsTUFBTSxrQkFBa0IsR0FBRyxlQUFlLENBQ3hDLENBQUMsR0FBRyxZQUFZLEVBQUUsR0FBRyxjQUFjLENBQUMsRUFDcEMsTUFBTSxDQUNQLENBQUM7UUFFRixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsT0FBTztRQUNsQixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdEMsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BDLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUV4QixNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ3RELE9BQU8sRUFBRSxRQUFRO29CQUNqQixZQUFZLEVBQUUsV0FBVztpQkFDMUIsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUV6RCxnQ0FBZ0M7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztpQkFDOUI7Z0JBRUQsK0JBQStCO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtZQUVELGNBQWM7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QiwyRkFBMkY7WUFDM0YsSUFBSSxLQUFLLFlBQVksV0FBVyxDQUFDLGlCQUFpQixFQUFFO2dCQUNsRCxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDeEIsT0FBTyxJQUFJLENBQUM7Z0JBQ1osb0NBQW9DO2FBQ3JDO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsYUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2hELE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFdkUsT0FBTyxjQUFjLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUErQjtRQUNyRCxJQUFJO1lBQ0YsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQy9CLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE1BQU8sRUFDZixPQUFPLE9BQU8sQ0FBQyxPQUFPLEtBQUssV0FBVztnQkFDdEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxXQUFXO2dCQUM5QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTO2dCQUMzQixDQUFDLENBQUMsU0FBUyxFQUNiLE9BQU8sT0FBTyxDQUFDLE9BQU8sS0FBSyxXQUFXO2dCQUN0QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLFdBQVc7Z0JBQy9DLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQzVCLENBQUMsQ0FBQyxTQUFTLEVBQ2IsT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN2RSxDQUFDO1lBRUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFFL0Isb0VBQW9FO1lBQ3BFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUV2QixJQUFJLElBQUksQ0FBQyxVQUFVO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUUzQixrRkFBa0Y7WUFDbEYsZUFBZTtZQUVmLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRXJCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDaEMsTUFBTSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztTQUMxQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxLQUFLLFlBQVksb0JBQW9CLEVBQUU7Z0JBQ3pDLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNLElBQUksS0FBSyxZQUFZLG1CQUFtQixFQUFFO2dCQUMvQyxNQUFNLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6QztpQkFBTSxJQUFJLEtBQUssWUFBWSxvQkFBb0IsRUFBRTtnQkFDaEQsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekM7aUJBQU0sSUFBSSxLQUFLLFlBQVksbUNBQW1DLEVBQUU7Z0JBQy9ELE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLE1BQU0sS0FBSyxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSSxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQXdCO1FBQ2xELElBQUk7WUFDRixvRUFBb0U7WUFDcEUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRXZCLDZFQUE2RTtZQUM3RSx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFFL0IsSUFBSSxJQUFJLENBQUMsVUFBVTtnQkFDakIsa0JBQWtCO2dCQUNsQixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFM0Isa0ZBQWtGO1lBQ2xGLGVBQWU7WUFFZixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVyQixNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7U0FDMUM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksS0FBSyxZQUFZLG9CQUFvQixFQUFFO2dCQUN6QyxNQUFNLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6QztpQkFBTSxJQUFJLEtBQUssWUFBWSxtQkFBbUIsRUFBRTtnQkFDL0MsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekM7aUJBQU0sSUFBSSxLQUFLLFlBQVksb0JBQW9CLEVBQUU7Z0JBQ2hELE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNLElBQUksS0FBSyxZQUFZLG1DQUFtQyxFQUFFO2dCQUMvRCxNQUFNLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxNQUFNLEtBQUssQ0FBQzthQUNiO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQVEsQ0FDbkIsVUFBcUM7UUFFckMsc0RBQXNEO1FBQ3RELGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLEtBQUs7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2pCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDbEQsVUFBVSxDQUFDLElBQUksRUFDZixVQUFVLENBQUMsRUFBRSxDQUNkLENBQUM7UUFFRix1QkFBdUI7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJCRztJQUNJLE1BQU0sQ0FDWCxFQUFxQixFQUNyQixpQkFBMEIsSUFBSTtRQUU5QixJQUFJO1lBQ0YsOENBQThDO1lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1lBRWxCLCtFQUErRTtZQUMvRSxJQUFJLENBQUMsUUFBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWM7Z0JBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7WUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFekIsT0FBTztnQkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFO29CQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLEVBQUU7YUFDTCxDQUFDO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssS0FBSyxDQUFDLFVBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBVTtRQUMvQixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQ2xELEVBQUUsQ0FDSCxDQUFDO1FBRUYsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7WUFDcEMsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUMvQyxFQUFFLENBQ0gsQ0FBQztZQUVGLCtDQUErQztZQUUvQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsaUJBQWlCO1lBQ2pCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLEtBQUssQ0FBQyxrQkFBa0I7UUFDOUIsSUFBSTtZQUNGLDREQUE0RDtZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0QyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNyQztZQUVELGdJQUFnSTtZQUNoSSxtR0FBbUc7WUFDbkcsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsY0FBYztnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUU7YUFDeEMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUNsQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3pDLENBQUM7WUFFRixPQUFPO1NBQ1I7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLDJGQUEyRjtZQUMzRixJQUFJLEtBQUssWUFBWSxXQUFXLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2xELHVDQUF1QztnQkFDdkMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDaEMseUJBQXlCO2FBQzFCO2lCQUFNLElBQUksS0FBSyxZQUFZLFdBQVcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BELE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssWUFBWTtRQUNsQixJQUFJO1lBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNyQyxnREFBZ0Q7Z0JBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUU7cUJBQ2hCLFNBQVMsRUFBRTtxQkFDWCxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtnQkFDeEMsWUFBWTtnQkFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ25DLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUE2QixFQUFFLEVBQUU7Z0JBQ2pFLDRCQUE0QjtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBVSxFQUFFLEVBQXFCO1FBQ3pELElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FDekI7Z0JBQ0UsTUFBTSxFQUFFLEVBQUU7YUFDWCxFQUNELEVBQUUsQ0FDSCxDQUFDO1NBQ0g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxLQUFLLENBQUMsZ0JBQWdCLENBQzVCLE1BQTZCLEVBQzdCLEVBQVc7UUFFWCxJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDL0IsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDNUMsRUFBRSxDQUNILENBQUM7WUFFRixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxrQkFBa0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsZ0RBQWdELENBQ3hHLENBQUM7Z0JBQ0YsT0FBTzthQUNSO1lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDOUIsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDNUMsTUFBTSxFQUNOLEVBQUUsQ0FDSCxDQUFDO1lBRUYsTUFBTSxXQUFXLEdBQStCO2dCQUM5QyxFQUFFLEVBQUUsRUFBRztnQkFDUCxNQUFNLEVBQUUsTUFBTTthQUNmLENBQUM7WUFFRixtQ0FBbUM7WUFDbkMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLFFBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNyRDtZQUVELGdCQUFnQjtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNsQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxRQUFRLENBQUMsRUFBNkI7UUFDNUMsSUFBSTtZQUNGLElBQUksYUFBYSxHQUFzQjtnQkFDckMsR0FBRyxFQUFHLENBQUMsSUFBSyxDQUFDLE1BQU07Z0JBQ25CLEtBQUssRUFBRTtvQkFDTCxHQUFHLENBQUMsRUFBRyxDQUFDLElBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFHLENBQUMsSUFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFFekQ7d0JBQ0UsSUFBSSxFQUFFOzRCQUNKLFFBQVEsRUFBRSxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lDQUMxQyxLQUFLLENBQUMsRUFBRSxDQUFDO2lDQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FDUCxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN0QyxDQUFDLENBQUM7aUNBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQztpQ0FDUixXQUFXLEVBQUU7eUJBQ2pCO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssS0FBSyxDQUFDLFNBQVM7UUFDckIsSUFBSTtZQUNGLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtnQkFDOUIsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN6RDtZQUVELHNDQUFzQztZQUN0QyxNQUFNLE1BQU0sR0FBZ0MsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDaEUsWUFBWSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDN0MsQ0FBQztZQUVGLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUNqQyw4REFBOEQ7Z0JBQzlELDJEQUEyRDtnQkFDM0QsMEJBQTBCO2dCQUUxQixLQUFLLElBQUksRUFBRSxJQUFJLE1BQU0sRUFBRTtvQkFDckIsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUM1QyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNoRCxFQUFFLENBQUMsRUFBRSxDQUNOLENBQUM7b0JBRUYsSUFBSSxPQUFPLGtCQUFrQixLQUFLLFdBQVcsRUFBRTt3QkFDN0MsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2pDO3lCQUFNO3dCQUNMLHFFQUFxRTt3QkFDckUsU0FBUztxQkFDVjtpQkFDRjthQUNGO1lBRUQsbUVBQW1FO1lBQ25FLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpCLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDL0I7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLDRDQUE0QztZQUU1Qyx5RUFBeUU7WUFDekUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFakIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxLQUFLLENBQUMsZ0JBQWdCLENBQzVCLFVBQXFDO1FBRXJDLElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNqQixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNoRCxVQUFVLEVBQ1YsVUFBVSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1lBRUYsTUFBTSxZQUFZLEdBQWdDO2dCQUNoRCxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUc7Z0JBQ2xCLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSTthQUN4QixDQUFDO1lBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFbkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO2lCQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxFQUFFO2dCQUNyQixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNyQyxrQkFBa0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQ2xELFVBQVUsQ0FBQyxFQUFFLENBQ2QsQ0FBQztnQkFFRixJQUFJLFdBQVcsRUFBRTtvQkFDZixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNqQixrQkFBa0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQ2xELFVBQVUsQ0FBQyxFQUFFLENBQ2QsQ0FBQztvQkFDRixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7aUJBQ25EO2dCQUVELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtvQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFDOUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDakIsWUFBWSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFDNUMsVUFBVSxDQUFDLEVBQUUsQ0FDZCxDQUFDO29CQUNGLE9BQU87aUJBQ1I7cUJBQU07b0JBQ0wsTUFBTSxNQUFNLEdBQVksTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQzFELFVBQVUsRUFDVixRQUFRLENBQ1QsQ0FBQztvQkFFRixJQUFJLE1BQU0sRUFBRTt3QkFDVixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNqQixZQUFZLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUM1QyxVQUFVLENBQUMsRUFBRSxDQUNkLENBQUM7d0JBRUYsT0FBTztxQkFDUjt5QkFBTTt3QkFDTCxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUNoRDtpQkFDRjtZQUNILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFO2dCQUNuQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRXZELE1BQU0sS0FBSyxDQUFDO1lBQ2QsQ0FBQyxDQUFDO2lCQUNELE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDbEIscUNBQXFDO2dCQUNyQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNqQixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNoRCxVQUFVLENBQUMsRUFBRSxDQUNkLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxnRUFBZ0U7WUFDaEUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDNUIsVUFBcUM7UUFFckMsK0NBQStDO1FBQy9DLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDMUMseUJBQXlCO1FBRXpCLHlDQUF5QztRQUN6QyxxQ0FBcUM7UUFDckMsa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsK0VBQStFO1FBQy9FLG1GQUFtRjtRQUNuRixzRUFBc0U7UUFDdEUsbUNBQW1DO1FBQ25DLGVBQWU7UUFDZixNQUFNO1FBQ04sV0FBVztRQUNYLElBQUk7UUFFSixJQUFJLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxXQUFXO1lBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUUvRCwyREFBMkQ7UUFDM0QseUZBQXlGO1FBQ3pGLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUc7WUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUc7WUFDUixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FDNUIsSUFBSSxDQUFDLElBQUk7aUJBQ04sUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQ3JELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDZCxDQUFDO1FBRU4seUNBQXlDO1FBQ3pDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFaEMsZ0ZBQWdGO1FBQ2hGLElBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO1lBQzFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQ2xDO1lBQ0EsMERBQTBEO1lBQzFELDREQUE0RDtZQUM1RCxZQUFZO1lBRVosdUNBQXVDO1lBQ3ZDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDN0Q7UUFFRCxxR0FBcUc7UUFDckcsRUFBRSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxrQkFBa0I7WUFDM0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0I7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTVCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUVqQiwyRkFBMkY7UUFDM0Ysa0NBQWtDO1FBRWxDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQjthQUN6QixJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUM5QyxJQUFJLENBQUMsQ0FBQyxRQUFpQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVyRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSyxLQUFLLENBQUMseUJBQXlCLENBQ3JDLFVBQXFDLEVBQ3JDLFFBQWlDO1FBRWpDLElBQUk7WUFDRixnRUFBZ0U7WUFDaEUsTUFBTSxtQkFBbUIsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUU1RCx1Q0FBdUM7WUFDdkMsTUFBTSxZQUFZLEdBQTJDLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FDM0YsUUFBUSxDQUFDLE9BQU8sQ0FDakIsQ0FBQztZQUVGLGdFQUFnRTtZQUNoRSx1QkFBdUI7WUFDdkIsd0NBQXdDO1lBQ3hDLE1BQU07WUFFTjs7Ozs7Ozs7OztjQVVFO1lBRUYsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxZQUFZLEVBQUU7Z0JBQ3RELE1BQU0sWUFBWSxHQUFnQztvQkFDaEQsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO29CQUNmLEtBQUssRUFBRSxVQUFVO29CQUNqQixNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFO2lCQUM3RixDQUFDO2dCQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFFL0MsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFdBQVcsRUFBRTtvQkFDdEQsSUFBSSxDQUFDLFFBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztpQkFDM0Q7Z0JBRUQsNkNBQTZDO2dCQUM3Qyw0R0FBNEc7Z0JBQzVHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLEVBQUU7b0JBQzFELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqQjtnQkFFRCw0Q0FBNEM7Z0JBQzVDLCtFQUErRTtnQkFDL0Usc0VBQXNFO2dCQUN0RSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLGdCQUFnQixFQUFFO29CQUMxRCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakI7Z0JBRUQsK21CQUErbUI7Z0JBQy9tQixJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLHNCQUFzQixFQUFFO29CQUNoRSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakI7Z0JBRUQsb2FBQW9hO2dCQUNwYSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLDBCQUEwQixFQUFFO29CQUNwRSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakI7Z0JBRUQsMEVBQTBFO2dCQUMxRSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLGNBQWMsRUFBRTtvQkFDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUN6QixVQUFVLEVBQ1YsY0FBYyxFQUNkLFlBQVksQ0FBQyxNQUFNLENBQ3BCLENBQUM7aUJBQ0g7Z0JBRUQsNE5BQTROO2dCQUM1TixJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTtvQkFDdEQsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pCO2dCQUVELGtPQUFrTztnQkFDbE8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxXQUFXLEVBQUU7b0JBQ3JELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqQjtnQkFFRCwySEFBMkg7Z0JBQzNILDRGQUE0RjtnQkFDNUYsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxhQUFhLEVBQUU7b0JBQ3ZELE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQ2hDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsQjtnQkFFRCxvSUFBb0k7Z0JBQ3BJLDRGQUE0RjtnQkFDNUYsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxZQUFZLEVBQUU7b0JBQ3RELE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQ2hDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsQjtnQkFFRCwrQkFBK0I7Z0JBQy9CLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO29CQUNwRCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakI7Z0JBRUQsNkpBQTZKO2dCQUM3SixJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLFdBQVcsRUFBRTtvQkFDckQscUdBQXFHO29CQUNyRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEI7Z0JBRUQsb0hBQW9IO2dCQUNwSCxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdkQsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pCO2dCQUVELGdWQUFnVjtnQkFDaFYsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqQjtnQkFFRCxvWEFBb1g7Z0JBQ3BYLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN2RCxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLG9CQUFvQixFQUFFO3dCQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQ3pCLFVBQVUsRUFDVixZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFDakMsWUFBWSxDQUNiLENBQUM7cUJBQ0g7b0JBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxhQUFhLEVBQUU7d0JBQ3ZELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FDekIsVUFBVSxFQUNWLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUNqQyxZQUFZLENBQ2IsQ0FBQztxQkFDSDtvQkFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLFlBQVksRUFBRTt3QkFDdEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUN6QixVQUFVLEVBQ1YsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQ2pDLFlBQVksQ0FDYixDQUFDO3FCQUNIO29CQUVELElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEtBQUssYUFBYSxFQUFFO3dCQUN2RCx3QkFBd0I7d0JBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUN6QixVQUFVLEVBQ1YsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQ2pDLFlBQVksQ0FDYixDQUFDO3FCQUNIO29CQUVELElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEtBQUssZUFBZSxFQUFFO3dCQUN6RCxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FDekIsVUFBVSxFQUNWLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUNqQyxZQUFZLENBQ2IsQ0FBQztxQkFDSDtpQkFDRjtnQkFFRCxvT0FBb087Z0JBQ3BPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN2RCxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FDekIsVUFBVSxFQUNWLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUNqQyxZQUFZLENBQ2IsQ0FBQztpQkFDSDthQUNGO1lBRUQsb0NBQW9DO1lBRXBDLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUM3QixZQUFZLEVBQ1osVUFBVSxFQUNWLFFBQVEsRUFDUixtQkFBbUIsQ0FDcEIsQ0FBQztTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLEtBQUssWUFBWSxXQUFXLENBQUMsWUFBWSxFQUFFO2dCQUM3QyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLG9CQUFvQixFQUFFO29CQUM3QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQ25CLFVBQVUsRUFDVixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQ3BELFNBQVMsQ0FDVixDQUFDO2lCQUNIO3FCQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDNUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUNuQixVQUFVLEVBQ1YsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsRUFDekYsU0FBUyxDQUNWLENBQUM7aUJBQ0g7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hFO1lBRUQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLEtBQUssQ0FBQyxhQUFhLENBQ3pCLE1BQVcsRUFDWCxVQUFxQyxFQUNyQyxRQUFpQyxFQUNqQyxtQkFBMkI7UUFFM0IsSUFBSTtZQUNGLGdFQUFnRTtZQUNoRSxNQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhFLGtDQUFrQztZQUNsQyxNQUFNLFlBQVksR0FBZ0M7Z0JBQ2hELFVBQVUsRUFBRSxVQUFVO2dCQUN0QixHQUFHO29CQUNELE1BQU0sRUFBRTt3QkFDTixHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO3dCQUMzQyxXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxJQUFJLEVBQUUsTUFBTyxDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsSUFBSTt3QkFDbEMsVUFBVSxFQUFFLGtCQUFrQixDQUFDLGtCQUFrQjt3QkFDakQsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFFBQVE7cUJBQ3RDO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLDBCQUEwQjtZQUMxQixNQUFNLFVBQVUsR0FBZ0MsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDakUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNuRCxZQUFZLEVBQ1osVUFBVSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1lBRUYsTUFBTSxlQUFlLEdBQW1DO2dCQUN0RCxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7Z0JBQ2pCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixZQUFZLEVBQUUsWUFBWTthQUMzQixDQUFDO1lBRUYsbUNBQW1DO1lBQ25DLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxRQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDakU7WUFFRCxnQkFBZ0I7WUFDaEIseURBQXlEO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSyxLQUFLLENBQUMsU0FBUyxDQUNyQixVQUFxQyxFQUNyQyxNQUFjLEVBQ2QsTUFBVztRQUVYLElBQUk7WUFDRixrQ0FBa0M7WUFDbEMsTUFBTSxRQUFRLEdBQTRCO2dCQUN4QyxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBRztvQkFDRCxLQUFLLEVBQUU7d0JBQ0wsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO3FCQUNoQztpQkFDRjthQUNGLENBQUM7WUFFRixpQ0FBaUM7WUFDakMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDWCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUM1QyxVQUFVLENBQUMsRUFBRSxDQUNkO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNYLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDbkQsVUFBVSxDQUFDLEVBQUUsQ0FDZDtnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDWCxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNoRCxVQUFVLENBQUMsRUFBRSxDQUNkO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNYLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQy9DLFFBQVEsRUFDUixRQUFRLENBQUMsVUFBVyxDQUFDLEVBQUUsQ0FDeEI7YUFDRixDQUFDLENBQUM7WUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FpQkU7WUFFRixNQUFNLFdBQVcsR0FBK0I7Z0JBQzlDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTtnQkFDakIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQztZQUVGLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUVqQywyQ0FBMkM7WUFDM0MsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLFFBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUMzRDtZQUVELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLEtBQUssQ0FBQywyQkFBMkI7UUFDdkMsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQzFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FDcEQsQ0FBQztZQUVGLEtBQUssTUFBTSxZQUFZLElBQUksYUFBYyxFQUFFO2dCQUN6QyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwRTtZQUVELE9BQU87U0FDUjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyxpQkFBaUI7UUFDdkIsd0VBQXdFO1FBRXhFLElBQUksQ0FBQyxFQUFFLENBQ0wsWUFBWSxFQUNaLEtBQUssRUFBRSxlQUErQyxFQUFFLEVBQUU7WUFDeEQsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQzVCLGVBQWUsQ0FBQyxFQUFFLEVBQ2xCLGVBQWUsQ0FBQyxZQUFZLENBQzdCLENBQUM7UUFDSixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLEtBQUssQ0FBQyxtQkFBbUIsQ0FDL0IsRUFBVSxFQUNWLFlBQXlDO1FBRXpDLElBQUk7WUFDRjs7Ozs7Y0FLRTtZQUVGLGlHQUFpRztZQUVqRyw4Q0FBOEM7WUFFOUMsZ0VBQWdFO1lBQ2hFLDhCQUE4QjtZQUM5QixNQUFNO1lBQ04sb0NBQW9DO1lBQ3BDLHdEQUF3RDtZQUN4RCx3REFBd0Q7WUFDeEQsTUFBTTtZQUNOLEtBQUs7WUFFTCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxJQUFJO2dCQUNiLFdBQVcsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUk7YUFDdEMsQ0FBQyxDQUFDO1lBRUgsa0RBQWtEO1lBQ2xELGlHQUFpRztZQUNqRyxJQUFJLFdBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNqQzs7Ozs7c0JBS007Z0JBRU4sTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDeEMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNuRCxFQUFFLENBQ0gsQ0FBQztnQkFFRixtREFBbUQ7Z0JBQ25ELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2pCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDbkQsRUFBRSxDQUNILENBQUM7Z0JBRUYsTUFBTSxjQUFjLEdBQWtDO29CQUNwRCxFQUFFLEVBQUUsRUFBRTtvQkFDTixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsVUFBVSxFQUFFO3dCQUNWLGVBQWUsRUFBRSxXQUFZLENBQUMsTUFBTSxDQUFDLFFBQVE7d0JBQzdDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVE7d0JBQ3RDLEdBQUcsRUFBRSxXQUFZLENBQUMsTUFBTSxDQUFDLEdBQUc7d0JBQzVCLElBQUksRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUk7d0JBQzlCLGFBQWEsRUFBRSxXQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQjt3QkFDckQsNkNBQTZDO3FCQUM5QztvQkFDRCxNQUFNLEVBQUUsV0FBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUTtpQkFDN0QsQ0FBQztnQkFFRixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNqQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQ2xELGNBQWMsQ0FBQyxVQUFVLEVBQ3pCLEVBQUUsQ0FDSCxDQUFDO2dCQUVGLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFdBQVcsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLFFBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUN0RDtnQkFFRCxtQ0FBbUM7Z0JBQ25DLElBQUksY0FBYyxFQUFFO29CQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDeEM7Z0JBRUQsNEdBQTRHO2dCQUM1RyxrQ0FBa0M7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCwyREFBMkQ7Z0JBQzNELGdFQUFnRTtnQkFDaEUsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWhCLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUV4RCxzREFBc0Q7Z0JBQ3RELFlBQVk7Z0JBQ1oseUJBQXlCO2dCQUN6Qiw2QkFBNkI7Z0JBQzdCLCtCQUErQjtnQkFDL0IsS0FBSztnQkFDTCx1REFBdUQ7Z0JBQ3ZELFlBQVk7Z0JBQ1osdUJBQXVCO2dCQUN2QiwrQkFBK0I7Z0JBQy9CLEtBQUs7Z0JBQ0wsc0NBQXNDO2dCQUN0Qyx1Q0FBdUM7Z0JBQ3ZDLHdJQUF3STtnQkFDeEksbURBQW1EO2dCQUNuRCxzREFBc0Q7Z0JBQ3RELHVEQUF1RDtnQkFDdkQsSUFBSTtnQkFDSiwwQ0FBMEM7Z0JBQzFDLDZEQUE2RDthQUM5RDtZQUNELE9BQU87U0FDUjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QseUhBQXlIO1lBQ3pILElBQUksS0FBSyxZQUFZLFdBQVcsQ0FBQyxhQUFhLEVBQUU7Z0JBQzlDLE1BQU0sWUFBWSxHQUFnQztvQkFDaEQsRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLFlBQVk7b0JBQ25CLE1BQU0sRUFBRSxlQUFlO29CQUN2QixZQUFZLEVBQUUsWUFBWTtpQkFDM0IsQ0FBQztnQkFFRixNQUFNLFlBQVksR0FBaUM7b0JBQ2pELEVBQUUsRUFBRSxFQUFFO29CQUNOLE1BQU0sRUFBRSxTQUFTO29CQUNqQixZQUFZLEVBQUUsWUFBWTtpQkFDM0IsQ0FBQztnQkFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBRXBDLHFJQUFxSTtnQkFDckksSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUM3QyxJQUFJLENBQUMsUUFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxRQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztpQkFDbkQ7Z0JBRUQsK0NBQStDO2dCQUMvQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNqQixrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQ25ELEVBQUUsQ0FDSCxDQUFDO2dCQUVGLHVDQUF1QztnQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQWEsQ0FBQyxVQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLHNEQUFzRDtnQkFDdEQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRDtTQUNGO0lBQ0gsQ0FBQztDQUNGIn0=