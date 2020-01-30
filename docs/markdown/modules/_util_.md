[typescript](../README.md) › [Globals](../globals.md) › ["util"](_util_.md)

# Module: "util"

## Index

### Modules

* [inspect](_util_.inspect.md)
* [promisify](_util_.promisify.md)
* [types](_util_.types.md)

### Classes

* [TextDecoder](../classes/_util_.textdecoder.md)
* [TextEncoder](../classes/_util_.textencoder.md)

### Interfaces

* [CustomPromisify](../interfaces/_util_.custompromisify.md)
* [EncodeIntoResult](../interfaces/_util_.encodeintoresult.md)
* [InspectOptions](../interfaces/_util_.inspectoptions.md)

### Functions

* [callbackify](_util_.md#callbackify)
* [debuglog](_util_.md#debuglog)
* [deprecate](_util_.md#deprecate)
* [format](_util_.md#format)
* [formatWithOptions](_util_.md#formatwithoptions)
* [inherits](_util_.md#inherits)
* [isArray](_util_.md#isarray)
* [isBoolean](_util_.md#isboolean)
* [isBuffer](_util_.md#isbuffer)
* [isDate](_util_.md#isdate)
* [isDeepStrictEqual](_util_.md#isdeepstrictequal)
* [isError](_util_.md#iserror)
* [isFunction](_util_.md#isfunction)
* [isNull](_util_.md#isnull)
* [isNullOrUndefined](_util_.md#isnullorundefined)
* [isNumber](_util_.md#isnumber)
* [isObject](_util_.md#isobject)
* [isPrimitive](_util_.md#isprimitive)
* [isRegExp](_util_.md#isregexp)
* [isString](_util_.md#isstring)
* [isSymbol](_util_.md#issymbol)
* [isUndefined](_util_.md#isundefined)
* [log](_util_.md#log)

## Functions

###  callbackify

▸ **callbackify**(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:61

**Parameters:**

▪ **fn**: *function*

▸ (): *[Promise](../interfaces/promise.md)‹void›*

**Returns:** *function*

▸ (`callback`: function): *void*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |

▸ **callbackify**<**TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:62

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (): *[Promise](../interfaces/promise.md)‹TResult›*

**Returns:** *function*

▸ (`callback`: function): *void*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md), `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |
`result` | TResult |

▸ **callbackify**<**T1**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:63

**Type parameters:**

▪ **T1**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

**Returns:** *function*

▸ (`arg1`: T1, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |

▸ **callbackify**<**T1**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:64

**Type parameters:**

▪ **T1**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

**Returns:** *function*

▸ (`arg1`: T1, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md), `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |
`result` | TResult |

▸ **callbackify**<**T1**, **T2**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:65

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |

▸ **callbackify**<**T1**, **T2**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:66

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`result` | TResult |

▸ **callbackify**<**T1**, **T2**, **T3**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:67

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |

▸ **callbackify**<**T1**, **T2**, **T3**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:68

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`result` | TResult |

▸ **callbackify**<**T1**, **T2**, **T3**, **T4**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:70

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |

▸ **callbackify**<**T1**, **T2**, **T3**, **T4**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:72

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`result` | TResult |

▸ **callbackify**<**T1**, **T2**, **T3**, **T4**, **T5**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:74

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **arg5**: *T5*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |

▸ **callbackify**<**T1**, **T2**, **T3**, **T4**, **T5**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:76

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **arg5**: *T5*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`result` | TResult |

▸ **callbackify**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:79

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `arg6`: T6): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |
`arg6` | T6 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `arg6`: T6, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **arg5**: *T5*

▪ **arg6**: *T6*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |

▸ **callbackify**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:82

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `arg6`: T6): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |
`arg6` | T6 |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `arg6`: T6, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **arg5**: *T5*

▪ **arg6**: *T6*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`result` | TResult |

___

###  debuglog

▸ **debuglog**(`key`: string): *function*

Defined in node_modules/@types/node/util.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *function*

▸ (`msg`: string, ...`param`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |
`...param` | any[] |

___

###  deprecate

▸ **deprecate**<**T**>(`fn`: T, `message`: string, `code?`: undefined | string): *T*

Defined in node_modules/@types/node/util.d.ts:54

**Type parameters:**

▪ **T**: *[Function](../interfaces/function.md)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | T |
`message` | string |
`code?` | undefined &#124; string |

**Returns:** *T*

___

###  format

▸ **format**(`format`: any, ...`param`: any[]): *string*

Defined in node_modules/@types/node/util.d.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`format` | any |
`...param` | any[] |

**Returns:** *string*

___

###  formatWithOptions

▸ **formatWithOptions**(`inspectOptions`: [InspectOptions](../interfaces/_util_.inspectoptions.md), `format`: string, ...`param`: any[]): *string*

Defined in node_modules/@types/node/util.d.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`inspectOptions` | [InspectOptions](../interfaces/_util_.inspectoptions.md) |
`format` | string |
`...param` | any[] |

**Returns:** *string*

___

###  inherits

▸ **inherits**(`constructor`: any, `superConstructor`: any): *void*

Defined in node_modules/@types/node/util.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`constructor` | any |
`superConstructor` | any |

**Returns:** *void*

___

###  isArray

▸ **isArray**(`object`: any): *object is any[]*

Defined in node_modules/@types/node/util.d.ts:23

**`deprecated`** since v4.0.0 - use `Array.isArray()` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is any[]*

___

###  isBoolean

▸ **isBoolean**(`object`: any): *object is boolean*

Defined in node_modules/@types/node/util.d.ts:33

**`deprecated`** since v4.0.0 - use `typeof value === 'boolean'` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is boolean*

___

###  isBuffer

▸ **isBuffer**(`object`: any): *object is Buffer*

Defined in node_modules/@types/node/util.d.ts:35

**`deprecated`** since v4.0.0 - use `Buffer.isBuffer()` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is Buffer*

___

###  isDate

▸ **isDate**(`object`: any): *object is Date*

Defined in node_modules/@types/node/util.d.ts:27

**`deprecated`** since v4.0.0 - use `util.types.isDate()` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is Date*

___

###  isDeepStrictEqual

▸ **isDeepStrictEqual**(`val1`: any, `val2`: any): *boolean*

Defined in node_modules/@types/node/util.d.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`val1` | any |
`val2` | any |

**Returns:** *boolean*

___

###  isError

▸ **isError**(`object`: any): *object is Error*

Defined in node_modules/@types/node/util.d.ts:29

**`deprecated`** since v4.0.0 - use `util.types.isNativeError()` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is Error*

___

###  isFunction

▸ **isFunction**(`object`: any): *boolean*

Defined in node_modules/@types/node/util.d.ts:37

**`deprecated`** since v4.0.0 - use `typeof value === 'function'` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isNull

▸ **isNull**(`object`: any): *object is null*

Defined in node_modules/@types/node/util.d.ts:39

**`deprecated`** since v4.0.0 - use `value === null` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is null*

___

###  isNullOrUndefined

▸ **isNullOrUndefined**(`object`: any): *object is null | undefined*

Defined in node_modules/@types/node/util.d.ts:41

**`deprecated`** since v4.0.0 - use `value === null || value === undefined` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is null | undefined*

___

###  isNumber

▸ **isNumber**(`object`: any): *object is number*

Defined in node_modules/@types/node/util.d.ts:43

**`deprecated`** since v4.0.0 - use `typeof value === 'number'` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is number*

___

###  isObject

▸ **isObject**(`object`: any): *boolean*

Defined in node_modules/@types/node/util.d.ts:45

**`deprecated`** since v4.0.0 - use `value !== null && typeof value === 'object'` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isPrimitive

▸ **isPrimitive**(`object`: any): *boolean*

Defined in node_modules/@types/node/util.d.ts:47

**`deprecated`** since v4.0.0 - use `(typeof value !== 'object' && typeof value !== 'function') || value === null` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isRegExp

▸ **isRegExp**(`object`: any): *object is RegExp*

Defined in node_modules/@types/node/util.d.ts:25

**`deprecated`** since v4.0.0 - use `util.types.isRegExp()` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is RegExp*

___

###  isString

▸ **isString**(`object`: any): *object is string*

Defined in node_modules/@types/node/util.d.ts:49

**`deprecated`** since v4.0.0 - use `typeof value === 'string'` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is string*

___

###  isSymbol

▸ **isSymbol**(`object`: any): *object is symbol*

Defined in node_modules/@types/node/util.d.ts:51

**`deprecated`** since v4.0.0 - use `typeof value === 'symbol'` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is symbol*

___

###  isUndefined

▸ **isUndefined**(`object`: any): *object is undefined*

Defined in node_modules/@types/node/util.d.ts:53

**`deprecated`** since v4.0.0 - use `value === undefined` instead.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *object is undefined*

___

###  log

▸ **log**(`string`: string): *void*

Defined in node_modules/@types/node/util.d.ts:6

**`deprecated`** since v0.11.3 - use a third party module instead.

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |

**Returns:** *void*
