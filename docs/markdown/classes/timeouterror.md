[typescript](../README.md) › [Globals](../globals.md) › [TimeoutError](timeouterror.md)

# Class: TimeoutError

## Hierarchy

  ↳ [ConnectionError](connectionerror.md)

  ↳ **TimeoutError**

## Index

### Constructors

* [constructor](timeouterror.md#constructor)

### Properties

* [data](timeouterror.md#optional-data)
* [message](timeouterror.md#message)
* [name](timeouterror.md#name)
* [stack](timeouterror.md#optional-stack)

### Methods

* [inspect](timeouterror.md#inspect)
* [toString](timeouterror.md#tostring)

## Constructors

###  constructor

\+ **new TimeoutError**(`message?`: undefined | string, `data?`: any): *[TimeoutError](timeouterror.md)*

*Inherited from [RippleError](rippleerror.md).[constructor](rippleerror.md#constructor)*

Defined in node_modules/ripple-lib/dist/npm/common/errors.d.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |
`data?` | any |

**Returns:** *[TimeoutError](timeouterror.md)*

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
