[typescript](../README.md) › [Globals](../globals.md) › [SologenicTxHandler](sologenictxhandler.md)

# Class: SologenicTxHandler

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **SologenicTxHandler**

## Index

### Constructors

* [constructor](sologenictxhandler.md#constructor)

### Properties

* [account](sologenictxhandler.md#protected-account)
* [feeCushion](sologenictxhandler.md#protected-feecushion)
* [ledger](sologenictxhandler.md#protected-ledger)
* [math](sologenictxhandler.md#protected-math)
* [rippleApi](sologenictxhandler.md#protected-rippleapi)
* [secret](sologenictxhandler.md#protected-secret)
* [sequence](sologenictxhandler.md#protected-sequence)
* [txEvents](sologenictxhandler.md#protected-txevents)
* [txmq](sologenictxhandler.md#protected-txmq)
* [defaultMaxListeners](sologenictxhandler.md#static-defaultmaxlisteners)

### Methods

* [_ValidateTxOnLedger](sologenictxhandler.md#private-_validatetxonledger)
* [_addMemo](sologenictxhandler.md#private-_addmemo)
* [_addRawTXtoQueue](sologenictxhandler.md#private-_addrawtxtoqueue)
* [_connected](sologenictxhandler.md#private-_connected)
* [_constructRawTx](sologenictxhandler.md#private-_constructrawtx)
* [_dispatch](sologenictxhandler.md#private-_dispatch)
* [_dispatchHandler](sologenictxhandler.md#private-_dispatchhandler)
* [_dispatchToLedger](sologenictxhandler.md#private-_dispatchtoledger)
* [_fetchCurrentState](sologenictxhandler.md#private-_fetchcurrentstate)
* [_initiateTx](sologenictxhandler.md#private-_initiatetx)
* [_resolve](sologenictxhandler.md#private-_resolve)
* [_subscribeWS](sologenictxhandler.md#private-_subscribews)
* [_txDispatched](sologenictxhandler.md#private-_txdispatched)
* [_txFailed](sologenictxhandler.md#private-_txfailed)
* [_validateMissedTransactions](sologenictxhandler.md#private-_validatemissedtransactions)
* [_validateOnLedger](sologenictxhandler.md#private-_validateonledger)
* [addListener](sologenictxhandler.md#addlistener)
* [connect](sologenictxhandler.md#connect)
* [emit](sologenictxhandler.md#emit)
* [eventNames](sologenictxhandler.md#eventnames)
* [fetchCurrentState](sologenictxhandler.md#fetchcurrentstate)
* [getAccountSequence](sologenictxhandler.md#getaccountsequence)
* [getLedgerBaseFeeXRP](sologenictxhandler.md#getledgerbasefeexrp)
* [getLedgerVersion](sologenictxhandler.md#getledgerversion)
* [getMaxListeners](sologenictxhandler.md#getmaxlisteners)
* [getRippleApi](sologenictxhandler.md#getrippleapi)
* [listenerCount](sologenictxhandler.md#listenercount)
* [listeners](sologenictxhandler.md#listeners)
* [off](sologenictxhandler.md#off)
* [on](sologenictxhandler.md#on)
* [once](sologenictxhandler.md#once)
* [prependListener](sologenictxhandler.md#prependlistener)
* [prependOnceListener](sologenictxhandler.md#prependoncelistener)
* [rawListeners](sologenictxhandler.md#rawlisteners)
* [removeAllListeners](sologenictxhandler.md#removealllisteners)
* [removeListener](sologenictxhandler.md#removelistener)
* [setAccount](sologenictxhandler.md#setaccount)
* [setAccountSequence](sologenictxhandler.md#setaccountsequence)
* [setLedgerBaseFeeXRP](sologenictxhandler.md#setledgerbasefeexrp)
* [setLedgerVersion](sologenictxhandler.md#setledgerversion)
* [setMaxListeners](sologenictxhandler.md#setmaxlisteners)
* [submit](sologenictxhandler.md#submit)
* [listenerCount](sologenictxhandler.md#static-listenercount)

### Object literals

* [keypair](sologenictxhandler.md#protected-keypair)

## Constructors

###  constructor

\+ **new SologenicTxHandler**(`rippleApiOptions`: [RippleAPIOptions](../interfaces/rippleapioptions.md), `sologenicOptions`: [TransactionHandlerOptions](../interfaces/transactionhandleroptions.md)): *[SologenicTxHandler](sologenictxhandler.md)*

*Defined in [src/lib/sologenictxhandler.ts:82](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L82)*

Creates an instance of sologenic tx handler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rippleApiOptions` | [RippleAPIOptions](../interfaces/rippleapioptions.md) | This parameter is used to construct ripple-lib and takes in: |
`sologenicOptions` | [TransactionHandlerOptions](../interfaces/transactionhandleroptions.md) | Sologenic queue option.  See [QUEUE_TYPE_STXMQ_HASH](../globals.md#const-queue_type_stxmq_hash) or [QUEUE_TYPE_STXMQ_REDIS](../globals.md#const-queue_type_stxmq_redis) ```typescript {   queueType?: QueueType;    // If queueType is [QUEUE_TYPE_STXMQ_REDIS](../globals.md#const-queue_type_stxmq_redis)   redis?: {     port?: number;     host?: string;     family?: number;     password?: string;     db?: number;   }; }  |

**Returns:** *[SologenicTxHandler](sologenictxhandler.md)*

## Properties

### `Protected` account

• **account**: *string* = ""

*Defined in [src/lib/sologenictxhandler.ts:38](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L38)*

XRPL Master Account Address

___

### `Protected` feeCushion

• **feeCushion**: *number* = 1.2

*Defined in [src/lib/sologenictxhandler.ts:72](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L72)*

Our fee cushion to make sure that all fees are multiplied by
1.2 so that we ensure that we're not being rejected by the
XRPL for too small of a txFee.

___

### `Protected` ledger

• **ledger**: *[Ledger](../interfaces/ledger.md)*

*Defined in [src/lib/sologenictxhandler.ts:65](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L65)*

The ledger class member is for tracking the current state of the ledger
by tracking the base XRP fee, ledger hash, version, timestamp and so on.
Please refer to the interface definition to see the fields received by
the XRPL stream ledger updates in [[SologenicTypes.Ledger]]

___

### `Protected` math

• **math**: *any*

*Defined in [src/lib/sologenictxhandler.ts:82](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L82)*

Our math library used to calculate fees

___

### `Protected` rippleApi

• **rippleApi**: *[RippleAPI](rippleapi.md)*

*Defined in [src/lib/sologenictxhandler.ts:33](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L33)*

Ripple API.  See [RippleAPI](rippleapi.md) for more details.

___

### `Protected` secret

• **secret**: *string* = ""

*Defined in [src/lib/sologenictxhandler.ts:43](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L43)*

XRPL Master Account Secret/Seed

___

### `Protected` sequence

• **sequence**: *number* = 0

*Defined in [src/lib/sologenictxhandler.ts:77](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L77)*

Current sequence number of the XRPL

___

### `Protected` txEvents

• **txEvents**: *object*

*Defined in [src/lib/sologenictxhandler.ts:57](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L57)*

Internal queue for transaction events occuring on a specific transaction.
Events are emitted globally to the [SologenicTxHandler](sologenictxhandler.md) instance and the
txEvents queue

#### Type declaration:

* \[ **key**: *string*\]: [EventEmitter](_events_.internal.eventemitter.md)

___

### `Protected` txmq

• **txmq**: *any*

*Defined in [src/lib/sologenictxhandler.ts:28](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L28)*

Transaction management queue.  See [TXMQƨ](txmq_.md) for more details

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

### `Private` _ValidateTxOnLedger

▸ **_ValidateTxOnLedger**(`id`: string, `dispatchedTX`: [dispatchedTX](../interfaces/dispatchedtx.md)): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:930](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L930)*

Validate transaction on the XRP Ledger

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | - |
`dispatchedTX` | [dispatchedTX](../interfaces/dispatchedtx.md) |   |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

### `Private` _addMemo

▸ **_addMemo**(`tx`: [unsignedTX](../interfaces/unsignedtx.md)): *[TX](../interfaces/tx.md)*

*Defined in [src/lib/sologenictxhandler.ts:513](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L513)*

Add id to the memo field of the transactions.
More info: https://xrpl.org/transaction-common-fields.html#memos-field

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tx` | [unsignedTX](../interfaces/unsignedtx.md) | An unsigned transaction that a memo field will be added |

**Returns:** *[TX](../interfaces/tx.md)*

SologenicTypes.TX or throws an Error if the memo cannot be added to the unsigned transaction

___

### `Private` _addRawTXtoQueue

▸ **_addRawTXtoQueue**(`tx`: [txJSON](../interfaces/txjson.md), `id?`: undefined | string): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:487](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L487)*

Add the raw transaction to the queue.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tx` | [txJSON](../interfaces/txjson.md) | - |
`id?` | undefined &#124; string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

### `Private` _connected

▸ **_connected**(): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/sologenictxhandler.ts:352](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L352)*

Check if we're connected to the XRPL

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

connected

___

### `Private` _constructRawTx

▸ **_constructRawTx**(`tx`: [TX](../interfaces/tx.md)): *[txJSON](../interfaces/txjson.md)*

*Defined in [src/lib/sologenictxhandler.ts:478](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L478)*

Helper function to add any other properties to the TX before being added to the queue.

**Parameters:**

Name | Type |
------ | ------ |
`tx` | [TX](../interfaces/tx.md) |

**Returns:** *[txJSON](../interfaces/txjson.md)*

SologenicTypes.txJSON

___

### `Private` _dispatch

▸ **_dispatch**(): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:541](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L541)*

Dispatch listener

**`description`** Recursively loop and fetch the persistent data store to fetch groups of transactions to be dispatched

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

### `Private` _dispatchHandler

▸ **_dispatchHandler**(`unsignedTX`: [unsignedTX](../interfaces/unsignedtx.md)): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:566](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L566)*

Dispatch job handler

**`description`** Recursively try transactions and based on the dispatch result try again, or a

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTX` | [unsignedTX](../interfaces/unsignedtx.md) |   |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

### `Private` _dispatchToLedger

▸ **_dispatchToLedger**(`unsignedTX`: [unsignedTX](../interfaces/unsignedtx.md)): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/sologenictxhandler.ts:587](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L587)*

Dispatch executor

**`description`** Dispatches the transaction to the ledger

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTX` | [unsignedTX](../interfaces/unsignedtx.md) |   |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

### `Private` _fetchCurrentState

▸ **_fetchCurrentState**(): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:387](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L387)*

Fetch the current ledger and account information to be used for transaction submission

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

void or throws an Error if the error is unrecoverable and cannot connect to the XRPL

___

### `Private` _initiateTx

▸ **_initiateTx**(`id`: string, `tx`: [TX](../interfaces/tx.md)): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:465](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L465)*

Initiate the transaction, prepare it to add the queue

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`tx` | [TX](../interfaces/tx.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

void  Throws an Error if unable to add the queue to the TXMQƨ

___

### `Private` _resolve

▸ **_resolve**(`id`: string): *[Promise](../interfaces/promise.md)‹[ResolvedTX](../interfaces/resolvedtx.md)›*

*Defined in [src/lib/sologenictxhandler.ts:366](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L366)*

Recursive loop and query TXMQƨ to see when the id is validated

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Transaction ID in the TXMQƨ |

**Returns:** *[Promise](../interfaces/promise.md)‹[ResolvedTX](../interfaces/resolvedtx.md)›*

SologenicTypes.ResolvedTX

___

### `Private` _subscribeWS

▸ **_subscribeWS**(): *any*

*Defined in [src/lib/sologenictxhandler.ts:434](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L434)*

Subscribe to ripple-lib websocket events connect, disconnect, error and ledger stream updates.

**Returns:** *any*

___

### `Private` _txDispatched

▸ **_txDispatched**(`unsignedTX`: [unsignedTX](../interfaces/unsignedtx.md), `tx`: [TX](../interfaces/tx.md), `result`: [FormattedSubmitResponse](../interfaces/formattedsubmitresponse.md), `signedTx`: [signedTX](../interfaces/signedtx.md), `firstLedgerSequence`: number): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/sologenictxhandler.ts:807](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L807)*

Handle dispatched transaction

**`description`** Check the state of the dispatched transaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTX` | [unsignedTX](../interfaces/unsignedtx.md) | - |
`tx` | [TX](../interfaces/tx.md) | - |
`result` | [FormattedSubmitResponse](../interfaces/formattedsubmitresponse.md) | - |
`signedTx` | [signedTX](../interfaces/signedtx.md) | - |
`firstLedgerSequence` | number |   |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

### `Private` _txFailed

▸ **_txFailed**(`unsignedTX`: [unsignedTX](../interfaces/unsignedtx.md), `reason`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/sologenictxhandler.ts:861](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L861)*

Handle failed transaction

**`description`** Remove the failed transaction from the queue and emit a failed event

**Parameters:**

Name | Type |
------ | ------ |
`unsignedTX` | [unsignedTX](../interfaces/unsignedtx.md) |
`reason` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

### `Private` _validateMissedTransactions

▸ **_validateMissedTransactions**(): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:901](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L901)*

Validate missed transactions sitting on the dispatched queue

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

void or throws an Error if an error is caught

___

### `Private` _validateOnLedger

▸ **_validateOnLedger**(): *void*

*Defined in [src/lib/sologenictxhandler.ts:919](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L919)*

Event Listener
Validate transaction that are added to the dispatched queue once they have been emitted

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  connect

▸ **connect**(): *[Promise](../interfaces/promise.md)‹this›*

*Defined in [src/lib/sologenictxhandler.ts:226](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L226)*

Connect to various services: RippleAPI, fetch current ledger state.

**Returns:** *[Promise](../interfaces/promise.md)‹this›*

this  Return reference to itself or raises an exception.

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[eventNames](nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  fetchCurrentState

▸ **fetchCurrentState**(): *[Promise](../interfaces/promise.md)‹[Number](../interfaces/number.md)›*

*Defined in [src/lib/sologenictxhandler.ts:425](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L425)*

Get the current state account state

**Returns:** *[Promise](../interfaces/promise.md)‹[Number](../interfaces/number.md)›*

sequence

___

###  getAccountSequence

▸ **getAccountSequence**(): *number*

*Defined in [src/lib/sologenictxhandler.ts:210](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L210)*

Getter returning the current account sequence

**Returns:** *number*

___

###  getLedgerBaseFeeXRP

▸ **getLedgerBaseFeeXRP**(): *string*

*Defined in [src/lib/sologenictxhandler.ts:175](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L175)*

Getter returning the XRPL base fee

**Returns:** *string*

___

###  getLedgerVersion

▸ **getLedgerVersion**(): *number*

*Defined in [src/lib/sologenictxhandler.ts:192](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L192)*

Getter returning the XRPL ledger version

**Returns:** *number*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  getRippleApi

▸ **getRippleApi**(): *[RippleAPI](rippleapi.md)*

*Defined in [src/lib/sologenictxhandler.ts:218](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L218)*

Expose the ripple API so that our tests can use it to check
transaction status and states.

**Returns:** *[RippleAPI](rippleapi.md)*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listenerCount](nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[off](nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[on](nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[once](nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependListener](nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependOnceListener](nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[rawListeners](nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setAccount

▸ **setAccount**(`account`: [Account](../interfaces/account.md)): *[Promise](../interfaces/promise.md)‹void›*

*Defined in [src/lib/sologenictxhandler.ts:262](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L262)*

Set the current account to use on the XRPL for transactions or use
a keypair.  See the [[SologenicTypes.Account]] interface for more
details.

Once an account has been set, connect to the XRPL and fetch the
current account state, including the sequence number and validate
any missed transactions.

**`params`** account  XRPL account address and secret, or address and a keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [Account](../interfaces/account.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  setAccountSequence

▸ **setAccountSequence**(`sequence`: number): *this*

*Defined in [src/lib/sologenictxhandler.ts:201](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L201)*

Mutator for defining the current account sequence

**`params`** sequence  Sequence number

**Parameters:**

Name | Type |
------ | ------ |
`sequence` | number |

**Returns:** *this*

___

###  setLedgerBaseFeeXRP

▸ **setLedgerBaseFeeXRP**(`fee`: string): *this*

*Defined in [src/lib/sologenictxhandler.ts:166](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L166)*

Mutator for defining the XRPL base fee

**`params`** fee  XRPL fee

**Parameters:**

Name | Type |
------ | ------ |
`fee` | string |

**Returns:** *this*

___

###  setLedgerVersion

▸ **setLedgerVersion**(`version`: number): *this*

*Defined in [src/lib/sologenictxhandler.ts:183](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L183)*

Mutator for defining the XRPL ledger version

**`params`** version  Set the current ledger version

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  submit

▸ **submit**(`tx`: [TX](../interfaces/tx.md)): *[TransactionObject](../interfaces/transactionobject.md)*

*Defined in [src/lib/sologenictxhandler.ts:328](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L328)*

Submit transaction to system. This transaction will then be move to persistent
data storage(Redis) or hash store and will be handeled.
Each transaction is assigned an id (uuid) to be tracked in the system.
Assigned IDs remain with the transaction until validated.
Since the transactions are not final until validated, the only way to track
transactions in the system is to track them with
ids across different channels in the system (e.g. message queue).
This ID is also submitted as a refference withing the transaction
in the Memo field (HEX representation)
submit() is non-blocking, but returns an object with three properties
explain in the return.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tx` | [TX](../interfaces/tx.md) | Transaction Object e.g.: ```typescript  {    TransactionType: "AccountSet",    Account: "rEzaLebaTBXNy7C4s8Ru7yxxkE65bDAAkF",    SetFlag: 5  }  ```   It is important to note that certain properties such as Fee, Sequence, Flags, LastLedgerSequence are inserted by this class  and are overridden if provided.  |

**Returns:** *[TransactionObject](../interfaces/transactionobject.md)*

TransactionObject or throws an Error

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*

## Object literals

### `Protected` keypair

### ▪ **keypair**: *object*

*Defined in [src/lib/sologenictxhandler.ts:50](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L50)*

XRPL Keypair.  See https://xrpl.org/cryptographic-keys.html#master-key-pair
and https://xrpl.org/cryptographic-keys.html#regular-key-pair for more details
on the difference between the account seed and key pairs

###  privateKey

• **privateKey**: *string* = ""

*Defined in [src/lib/sologenictxhandler.ts:50](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L50)*

###  publicKey

• **publicKey**: *string* = ""

*Defined in [src/lib/sologenictxhandler.ts:50](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/sologenictxhandler.ts#L50)*
