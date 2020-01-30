[typescript](../README.md) › [Globals](../globals.md) › [SologenicError](sologenicerror.md)

# Class: SologenicError

## Hierarchy

* [Error](../interfaces/error.md)

  ↳ **SologenicError**

## Index

### Constructors

* [constructor](sologenicerror.md#constructor)

### Properties

* [message](sologenicerror.md#message)
* [name](sologenicerror.md#name)
* [rippleError](sologenicerror.md#optional-rippleerror)
* [stack](sologenicerror.md#optional-stack)
* [status](sologenicerror.md#status)
* [Error](sologenicerror.md#static-error)

### Methods

* [_getError](sologenicerror.md#_geterror)
* [getErrorCodeById](sologenicerror.md#static-geterrorcodebyid)
* [getErrorCodeByMessage](sologenicerror.md#static-geterrorcodebymessage)
* [getErrorCodes](sologenicerror.md#static-geterrorcodes)

## Constructors

###  constructor

\+ **new SologenicError**(`status`: string, `rippleError?`: [Error](sologenicerror.md#static-error)): *[SologenicError](sologenicerror.md)*

*Defined in [src/lib/error.ts:1](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/error.ts#L1)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | string | Status code for error |
`rippleError?` | [Error](sologenicerror.md#static-error) | Inner error  |

**Returns:** *[SologenicError](sologenicerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [Error](../interfaces/error.md).[message](../interfaces/error.md#message)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [Error](../interfaces/error.md).[name](../interfaces/error.md#name)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` rippleError

• **rippleError**? : *[Error](sologenicerror.md#static-error)*

*Defined in [src/lib/error.ts:7](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/error.ts#L7)*

Inner error

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [Error](../interfaces/error.md).[stack](../interfaces/error.md#optional-stack)*

*Overrides [Error](../interfaces/error.md).[stack](../interfaces/error.md#optional-stack)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  status

• **status**: *string*

*Defined in [src/lib/error.ts:7](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/error.ts#L7)*

Status code for error

___

### `Static` Error

▪ **Error**: *[ErrorConstructor](../interfaces/errorconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984

## Methods

###  _getError

▸ **_getError**(`errorId`: string): *string*

*Defined in [src/lib/error.ts:57](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/error.ts#L57)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorId` | string | An error 'id' |

**Returns:** *string*

An error 'message' or undefined.

___

### `Static` getErrorCodeById

▸ **getErrorCodeById**(`errorId`: string): *string*

*Defined in [src/lib/error.ts:37](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/error.ts#L37)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorId` | string | An error 'id' |

**Returns:** *string*

An error 'message' or undefined.

___

### `Static` getErrorCodeByMessage

▸ **getErrorCodeByMessage**(`message`: string): *string*

*Defined in [src/lib/error.ts:47](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/error.ts#L47)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | An error 'message' |

**Returns:** *string*

An error 'id' or undefined.

___

### `Static` getErrorCodes

▸ **getErrorCodes**(): *[Array](../interfaces/regexpmatcharray.md#array)‹any›*

*Defined in [src/lib/error.ts:18](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/error.ts#L18)*

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹any›*

An array of error codes
