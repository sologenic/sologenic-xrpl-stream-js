[typescript](../README.md) › [Globals](../globals.md) › ["assert"](_assert_.md) › [internal](_assert_.internal.md)

# Module: internal

## Hierarchy

* **internal**

  ↳ [EventEmitter](../classes/_events_.internal.eventemitter.md)

  ↳ [Stream](../classes/_stream_.internal.stream.md)

## Callable

▸ **internal**(`value`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:2

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

## Index

### Classes

* [AssertionError](../classes/_assert_.internal.assertionerror.md)

### Variables

* [strict](_assert_.internal.md#const-strict)

### Functions

* [deepEqual](_assert_.internal.md#deepequal)
* [deepStrictEqual](_assert_.internal.md#deepstrictequal)
* [doesNotReject](_assert_.internal.md#doesnotreject)
* [doesNotThrow](_assert_.internal.md#doesnotthrow)
* [equal](_assert_.internal.md#equal)
* [fail](_assert_.internal.md#fail)
* [ifError](_assert_.internal.md#iferror)
* [notDeepEqual](_assert_.internal.md#notdeepequal)
* [notDeepStrictEqual](_assert_.internal.md#notdeepstrictequal)
* [notEqual](_assert_.internal.md#notequal)
* [notStrictEqual](_assert_.internal.md#notstrictequal)
* [ok](_assert_.internal.md#ok)
* [rejects](_assert_.internal.md#rejects)
* [strictEqual](_assert_.internal.md#strictequal)
* [throws](_assert_.internal.md#throws)

## Variables

### `Const` strict

• **strict**: *typeof internal*

Defined in node_modules/@types/node/assert.d.ts:44

## Functions

###  deepEqual

▸ **deepEqual**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  deepStrictEqual

▸ **deepStrictEqual**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  doesNotReject

▸ **doesNotReject**(`block`: function | [Promise](../interfaces/promise.md)‹any›, `message?`: string | [Error](../interfaces/error.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/assert.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`block` | function &#124; [Promise](../interfaces/promise.md)‹any› |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

▸ **doesNotReject**(`block`: function | [Promise](../interfaces/promise.md)‹any›, `error`: [RegExp](../interfaces/regexp.md) | [Function](../interfaces/function.md), `message?`: string | [Error](../interfaces/error.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/assert.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`block` | function &#124; [Promise](../interfaces/promise.md)‹any› |
`error` | [RegExp](../interfaces/regexp.md) &#124; [Function](../interfaces/function.md) |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  doesNotThrow

▸ **doesNotThrow**(`block`: function, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:34

**Parameters:**

▪ **block**: *function*

▸ (): *any*

▪`Optional`  **message**: *string | [Error](../interfaces/error.md)*

**Returns:** *void*

▸ **doesNotThrow**(`block`: function, `error`: [RegExp](../interfaces/regexp.md) | [Function](../interfaces/function.md), `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:35

**Parameters:**

▪ **block**: *function*

▸ (): *any*

▪ **error**: *[RegExp](../interfaces/regexp.md) | [Function](../interfaces/function.md)*

▪`Optional`  **message**: *string | [Error](../interfaces/error.md)*

**Returns:** *void*

___

###  equal

▸ **equal**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  fail

▸ **fail**(`message?`: string | [Error](../interfaces/error.md)): *never*

Defined in node_modules/@types/node/assert.d.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *never*

▸ **fail**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md), `operator?`: undefined | string, `stackStartFn?`: [Function](../interfaces/function.md)): *never*

Defined in node_modules/@types/node/assert.d.ts:21

**`deprecated`** since v10.0.0 - use fail([message]) or other assert functions instead.

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |
`operator?` | undefined &#124; string |
`stackStartFn?` | [Function](../interfaces/function.md) |

**Returns:** *never*

___

###  ifError

▸ **ifError**(`value`: any): *void*

Defined in node_modules/@types/node/assert.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *void*

___

###  notDeepEqual

▸ **notDeepEqual**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  notDeepStrictEqual

▸ **notDeepStrictEqual**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  notEqual

▸ **notEqual**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  notStrictEqual

▸ **notStrictEqual**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  ok

▸ **ok**(`value`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  rejects

▸ **rejects**(`block`: function | [Promise](../interfaces/promise.md)‹any›, `message?`: string | [Error](../interfaces/error.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/assert.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`block` | function &#124; [Promise](../interfaces/promise.md)‹any› |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

▸ **rejects**(`block`: function | [Promise](../interfaces/promise.md)‹any›, `error`: [RegExp](../interfaces/regexp.md) | [Function](../interfaces/function.md) | [Object](../interfaces/object.md) | [Error](../interfaces/error.md), `message?`: string | [Error](../interfaces/error.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/assert.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`block` | function &#124; [Promise](../interfaces/promise.md)‹any› |
`error` | [RegExp](../interfaces/regexp.md) &#124; [Function](../interfaces/function.md) &#124; [Object](../interfaces/object.md) &#124; [Error](../interfaces/error.md) |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  strictEqual

▸ **strictEqual**(`actual`: any, `expected`: any, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |
`message?` | string &#124; [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  throws

▸ **throws**(`block`: function, `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:32

**Parameters:**

▪ **block**: *function*

▸ (): *any*

▪`Optional`  **message**: *string | [Error](../interfaces/error.md)*

**Returns:** *void*

▸ **throws**(`block`: function, `error`: [RegExp](../interfaces/regexp.md) | [Function](../interfaces/function.md) | [Object](../interfaces/object.md) | [Error](../interfaces/error.md), `message?`: string | [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/assert.d.ts:33

**Parameters:**

▪ **block**: *function*

▸ (): *any*

▪ **error**: *[RegExp](../interfaces/regexp.md) | [Function](../interfaces/function.md) | [Object](../interfaces/object.md) | [Error](../interfaces/error.md)*

▪`Optional`  **message**: *string | [Error](../interfaces/error.md)*

**Returns:** *void*
