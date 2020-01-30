[typescript](../README.md) › [Globals](../globals.md) › [RippleError](rippleerror.md)

# Class: RippleError

## Hierarchy

* [Error](../interfaces/error.md)

  ↳ **RippleError**

  ↳ [RippledError](ripplederror.md)

  ↳ [UnexpectedError](unexpectederror.md)

  ↳ [LedgerVersionError](ledgerversionerror.md)

  ↳ [ConnectionError](connectionerror.md)

  ↳ [ValidationError](validationerror.md)

  ↳ [NotFoundError](notfounderror.md)

  ↳ [MissingLedgerHistoryError](missingledgerhistoryerror.md)

  ↳ [PendingLedgerVersionError](pendingledgerversionerror.md)

## Index

### Constructors

* [constructor](rippleerror.md#constructor)

### Properties

* [data](rippleerror.md#optional-data)
* [message](rippleerror.md#message)
* [name](rippleerror.md#name)
* [stack](rippleerror.md#optional-stack)
* [Error](rippleerror.md#static-error)

### Methods

* [inspect](rippleerror.md#inspect)
* [toString](rippleerror.md#tostring)

## Constructors

###  constructor

\+ **new RippleError**(`message?`: undefined | string, `data?`: any): *[RippleError](rippleerror.md)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |
`data?` | any |

**Returns:** *[RippleError](rippleerror.md)*

## Properties

### `Optional` data

• **data**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:4

___

###  message

• **message**: *string*

*Overrides [Error](../interfaces/error.md).[message](../interfaces/error.md#message)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:3

___

###  name

• **name**: *string*

*Overrides [Error](../interfaces/error.md).[name](../interfaces/error.md#name)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:2

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [Error](../interfaces/error.md).[stack](../interfaces/error.md#optional-stack)*

*Overrides [Error](../interfaces/error.md).[stack](../interfaces/error.md#optional-stack)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *[ErrorConstructor](../interfaces/errorconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984

## Methods

###  inspect

▸ **inspect**(): *string*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:7

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:6

**Returns:** *string*
