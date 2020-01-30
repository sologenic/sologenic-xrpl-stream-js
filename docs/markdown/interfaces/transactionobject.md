[typescript](../README.md) › [Globals](../globals.md) › [TransactionObject](transactionobject.md)

# Interface: TransactionObject

## Hierarchy

* **TransactionObject**

## Index

### Properties

* [events](transactionobject.md#events)
* [id](transactionobject.md#id)
* [promise](transactionobject.md#promise)

## Properties

###  events

• **events**: *[EventEmitter](../classes/_events_.internal.eventemitter.md)*

*Defined in [src/types/sologenicoptions.d.ts:132](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L132)*

**`description`** events: Each instance of the submit() gets an instance of `EventEmitter` these events are emitted when certain actions take place within the transaction submission.
             Events: {queued, dispatched, requeued, warning, validated}

**`description`** id: This is the uuid generated in a non-blocking approach so clients can later use this id for reference. The id is of type of string and are generated using v4 of uuid library.
             e.g: 6316751c-bde4-412b-ac9a-7d05e548171f

**`description`** promise: This property contains a promise and resolves only when a transaction has been validated.
             Contains: hash, dispatchedSequence, accountSequence, ledgerVersion, timestamp, fee

___

###  id

• **id**: *string*

*Defined in [src/types/sologenicoptions.d.ts:133](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L133)*

___

###  promise

• **promise**: *[Promise](promise.md)‹[ResolvedTX](resolvedtx.md)›*

*Defined in [src/types/sologenicoptions.d.ts:134](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L134)*
