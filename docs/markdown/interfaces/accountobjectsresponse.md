[typescript](../README.md) › [Globals](../globals.md) › [AccountObjectsResponse](accountobjectsresponse.md)

# Interface: AccountObjectsResponse

## Hierarchy

* **AccountObjectsResponse**

## Index

### Properties

* [account](accountobjectsresponse.md#account)
* [account_objects](accountobjectsresponse.md#account_objects)
* [ledger_current_index](accountobjectsresponse.md#optional-ledger_current_index)
* [ledger_hash](accountobjectsresponse.md#optional-ledger_hash)
* [ledger_index](accountobjectsresponse.md#optional-ledger_index)
* [limit](accountobjectsresponse.md#optional-limit)
* [marker](accountobjectsresponse.md#optional-marker)
* [validated](accountobjectsresponse.md#optional-validated)

## Properties

###  account

• **account**: *string*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:18

___

###  account_objects

• **account_objects**: *[Array](regexpmatcharray.md#array)‹[CheckLedgerEntry](checkledgerentry.md) | [RippleStateLedgerEntry](ripplestateledgerentry.md) | [OfferLedgerEntry](offerledgerentry.md) | [SignerListLedgerEntry](signerlistledgerentry.md) | [EscrowLedgerEntry](escrowledgerentry.md) | [PayChannelLedgerEntry](paychannelledgerentry.md) | [DepositPreauthLedgerEntry](depositpreauthledgerentry.md)›*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:19

___

### `Optional` ledger_current_index

• **ledger_current_index**? : *undefined | number*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:22

___

### `Optional` ledger_hash

• **ledger_hash**? : *undefined | string*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:20

___

### `Optional` ledger_index

• **ledger_index**? : *undefined | number*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:21

___

### `Optional` limit

• **limit**? : *undefined | number*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:23

___

### `Optional` marker

• **marker**? : *undefined | string*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:24

___

### `Optional` validated

• **validated**? : *undefined | false | true*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/account_objects.d.ts:25
