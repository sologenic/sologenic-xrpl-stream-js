[typescript](../README.md) › [Globals](../globals.md) › [OfferCreateTransaction](offercreatetransaction.md)

# Interface: OfferCreateTransaction

## Hierarchy

* object

  ↳ **OfferCreateTransaction**

## Indexable

* \[ **Field**: *string*\]: string | number | [Array](regexpmatcharray.md#array)‹any› | [RippledAmount](../globals.md#rippledamount) | undefined

## Index

### Properties

* [Account](offercreatetransaction.md#account)
* [AccountTxnID](offercreatetransaction.md#optional-accounttxnid)
* [Expiration](offercreatetransaction.md#optional-expiration)
* [Fee](offercreatetransaction.md#fee)
* [Field](offercreatetransaction.md#field)
* [Flags](offercreatetransaction.md#flags)
* [Fulfillment](offercreatetransaction.md#optional-fulfillment)
* [LastLedgerSequence](offercreatetransaction.md#optional-lastledgersequence)
* [Memos](offercreatetransaction.md#optional-memos)
* [OfferSequence](offercreatetransaction.md#optional-offersequence)
* [Sequence](offercreatetransaction.md#sequence)
* [Signers](offercreatetransaction.md#signers)
* [SigningPubKey](offercreatetransaction.md#signingpubkey)
* [SourceTag](offercreatetransaction.md#optional-sourcetag)
* [TakerGets](offercreatetransaction.md#takergets)
* [TakerPays](offercreatetransaction.md#takerpays)
* [TransactionType](offercreatetransaction.md#transactiontype)
* [TxnSignature](offercreatetransaction.md#txnsignature)

## Properties

###  Account

• **Account**: *string*

*Overrides __type.Account*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:5

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:30

___

### `Optional` AccountTxnID

• **AccountTxnID**? : *undefined | string*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:6

___

### `Optional` Expiration

• **Expiration**? : *undefined | number*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:18

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:37

___

###  Fee

• **Fee**: *string*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:7

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:31

___

###  Field

• **Field**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:8

___

###  Flags

• **Flags**: *number*

*Overrides __type.Flags*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:9

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:32

___

### `Optional` Fulfillment

• **Fulfillment**? : *undefined | string*

*Inherited from __type.Fulfillment*

Defined in node_modules/ripple-lib/dist/npm/transaction/utils.d.ts:17

___

### `Optional` LastLedgerSequence

• **LastLedgerSequence**? : *number*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:10

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:33

___

### `Optional` Memos

• **Memos**? : *object[]*

*Overrides __type.Memos*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:19

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:39

___

### `Optional` OfferSequence

• **OfferSequence**? : *undefined | number*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:20

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:38

___

###  Sequence

• **Sequence**: *number*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:11

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:34

___

###  Signers

• **Signers**: *any[]*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:12

___

###  SigningPubKey

• **SigningPubKey**: *string*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:13

___

### `Optional` SourceTag

• **SourceTag**? : *undefined | number*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:14

___

###  TakerGets

• **TakerGets**: *[RippledAmount](../globals.md#rippledamount)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:15

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:35

___

###  TakerPays

• **TakerPays**: *[RippledAmount](../globals.md#rippledamount)*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:16

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:36

___

###  TransactionType

• **TransactionType**: *"OfferCreate"*

*Overrides __type.TransactionType*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:4

Defined in node_modules/ripple-lib/dist/npm/transaction/types.d.ts:29

___

###  TxnSignature

• **TxnSignature**: *string*

Defined in node_modules/ripple-lib/dist/npm/common/types/objects/transactions.d.ts:17
