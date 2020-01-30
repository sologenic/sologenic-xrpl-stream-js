[typescript](../README.md) › [Globals](../globals.md) › ["repl"](../modules/_repl_.md) › [Recoverable](_repl_.recoverable.md)

# Class: Recoverable

Indicates a recoverable error that a `REPLServer` can use to support multi-line input.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_recoverable_errors

## Hierarchy

  ↳ [SyntaxError](../interfaces/syntaxerror.md)

  ↳ **Recoverable**

## Index

### Constructors

* [constructor](_repl_.recoverable.md#constructor)

### Properties

* [err](_repl_.recoverable.md#err)
* [message](_repl_.recoverable.md#message)
* [name](_repl_.recoverable.md#name)
* [stack](_repl_.recoverable.md#optional-stack)
* [SyntaxError](_repl_.recoverable.md#static-syntaxerror)

## Constructors

###  constructor

\+ **new Recoverable**(`err`: [Error](../interfaces/error.md)): *[Recoverable](_repl_.recoverable.md)*

Defined in node_modules/@types/node/repl.d.ts:378

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *[Recoverable](_repl_.recoverable.md)*

## Properties

###  err

• **err**: *[Error](../interfaces/error.md)*

Defined in node_modules/@types/node/repl.d.ts:378

___

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

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [Error](../interfaces/error.md).[stack](../interfaces/error.md#optional-stack)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` SyntaxError

▪ **SyntaxError**: *[SyntaxErrorConstructor](../interfaces/syntaxerrorconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1028
