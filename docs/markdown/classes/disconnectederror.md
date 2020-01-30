[typescript](../README.md) › [Globals](../globals.md) › [DisconnectedError](disconnectederror.md)

# Class: DisconnectedError

## Hierarchy

  ↳ [ConnectionError](connectionerror.md)

  ↳ **DisconnectedError**

## Index

### Constructors

* [constructor](disconnectederror.md#constructor)

### Properties

* [data](disconnectederror.md#optional-data)
* [message](disconnectederror.md#message)
* [name](disconnectederror.md#name)
* [stack](disconnectederror.md#optional-stack)

### Methods

* [inspect](disconnectederror.md#inspect)
* [toString](disconnectederror.md#tostring)

## Constructors

###  constructor

\+ **new DisconnectedError**(`message?`: undefined | string, `data?`: any): *[DisconnectedError](disconnectederror.md)*

*Inherited from [RippleError](rippleerror.md).[constructor](rippleerror.md#constructor)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |
`data?` | any |

**Returns:** *[DisconnectedError](disconnectederror.md)*

## Properties

### `Optional` data

• **data**? : *any*

*Inherited from [RippleError](rippleerror.md).[data](rippleerror.md#optional-data)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:4

___

###  message

• **message**: *string*

*Inherited from [RippleError](rippleerror.md).[message](rippleerror.md#message)*

*Overrides [Error](../interfaces/error.md).[message](../interfaces/error.md#message)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:3

___

###  name

• **name**: *string*

*Inherited from [RippleError](rippleerror.md).[name](rippleerror.md#name)*

*Overrides [Error](../interfaces/error.md).[name](../interfaces/error.md#name)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:2

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [Error](../interfaces/error.md).[stack](../interfaces/error.md#optional-stack)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

## Methods

###  inspect

▸ **inspect**(): *string*

*Inherited from [RippleError](rippleerror.md).[inspect](rippleerror.md#inspect)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:7

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [RippleError](rippleerror.md).[toString](rippleerror.md#tostring)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:6

**Returns:** *string*
