[typescript](../README.md) › [Globals](../globals.md) › [ErrorConstructor](errorconstructor.md)

# Interface: ErrorConstructor

## Hierarchy

* **ErrorConstructor**

## Callable

▸ (`message?`: undefined | string): *[Error](error.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:979

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

**Returns:** *[Error](error.md)*

## Index

### Constructors

* [constructor](errorconstructor.md#constructor)

### Properties

* [prepareStackTrace](errorconstructor.md#optional-preparestacktrace)
* [prototype](errorconstructor.md#prototype)
* [stackTraceLimit](errorconstructor.md#stacktracelimit)

### Methods

* [captureStackTrace](errorconstructor.md#capturestacktrace)

## Constructors

###  constructor

\+ **new ErrorConstructor**(`message?`: undefined | string): *[Error](error.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:978

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

**Returns:** *[Error](error.md)*

## Properties

### `Optional` prepareStackTrace

• **prepareStackTrace**? : *undefined | function*

Defined in node_modules/@types/node/globals.d.ts:140

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

___

###  prototype

• **prototype**: *[Error](error.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:981

___

###  stackTraceLimit

• **stackTraceLimit**: *number*

Defined in node_modules/@types/node/globals.d.ts:142

## Methods

###  captureStackTrace

▸ **captureStackTrace**(`targetObject`: [Object](object.md), `constructorOpt?`: [Function](function.md)): *void*

Defined in node_modules/@types/node/globals.d.ts:133

Create .stack property on a target object

**Parameters:**

Name | Type |
------ | ------ |
`targetObject` | [Object](object.md) |
`constructorOpt?` | [Function](function.md) |

**Returns:** *void*
