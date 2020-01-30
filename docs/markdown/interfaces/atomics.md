[typescript](../README.md) › [Globals](../globals.md) › [Atomics](atomics.md)

# Interface: Atomics

## Hierarchy

* **Atomics**

## Index

### Properties

* [[Symbol.toStringTag]](atomics.md#[symbol.tostringtag])

### Methods

* [add](atomics.md#add)
* [and](atomics.md#and)
* [compareExchange](atomics.md#compareexchange)
* [exchange](atomics.md#exchange)
* [isLockFree](atomics.md#islockfree)
* [load](atomics.md#load)
* [notify](atomics.md#notify)
* [or](atomics.md#or)
* [store](atomics.md#store)
* [sub](atomics.md#sub)
* [wait](atomics.md#wait)
* [xor](atomics.md#xor)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"Atomics"*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:135

## Methods

###  add

▸ **add**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `value`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:58

Adds a value to the value at the given position in the array, returning the original value.
Until this atomic operation completes, any other read or write operation against the array
will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`value` | number |

**Returns:** *number*

___

###  and

▸ **and**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `value`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:65

Stores the bitwise AND of a value with the value at the given position in the array,
returning the original value. Until this atomic operation completes, any other read or
write operation against the array will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`value` | number |

**Returns:** *number*

___

###  compareExchange

▸ **compareExchange**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `expectedValue`: number, `replacementValue`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:72

Replaces the value at the given position in the array if the original value equals the given
expected value, returning the original value. Until this atomic operation completes, any
other read or write operation against the array will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`expectedValue` | number |
`replacementValue` | number |

**Returns:** *number*

___

###  exchange

▸ **exchange**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `value`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:79

Replaces the value at the given position in the array, returning the original value. Until
this atomic operation completes, any other read or write operation against the array will
block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`value` | number |

**Returns:** *number*

___

###  isLockFree

▸ **isLockFree**(`size`: number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:86

Returns a value indicating whether high-performance algorithms can use atomic operations
(`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed
array.

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *boolean*

___

###  load

▸ **load**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:92

Returns the value at the given position in the array. Until this atomic operation completes,
any other read or write operation against the array will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |

**Returns:** *number*

___

###  notify

▸ **notify**(`typedArray`: [Int32Array](int32array.md), `index`: number, `count`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:126

Wakes up sleeping agents that are waiting on the given index of the array, returning the
number of agents that were awoken.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int32Array](int32array.md) |
`index` | number |
`count` | number |

**Returns:** *number*

___

###  or

▸ **or**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `value`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:99

Stores the bitwise OR of a value with the value at the given position in the array,
returning the original value. Until this atomic operation completes, any other read or write
operation against the array will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`value` | number |

**Returns:** *number*

___

###  store

▸ **store**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `value`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:105

Stores a value at the given position in the array, returning the new value. Until this
atomic operation completes, any other read or write operation against the array will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`value` | number |

**Returns:** *number*

___

###  sub

▸ **sub**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `value`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:112

Subtracts a value from the value at the given position in the array, returning the original
value. Until this atomic operation completes, any other read or write operation against the
array will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`value` | number |

**Returns:** *number*

___

###  wait

▸ **wait**(`typedArray`: [Int32Array](int32array.md), `index`: number, `value`: number, `timeout?`: undefined | number): *"ok" | "not-equal" | "timed-out"*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:120

If the value at the given position in the array is equal to the provided value, the current
agent is put to sleep causing execution to suspend until the timeout expires (returning
`"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
`"not-equal"`.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int32Array](int32array.md) |
`index` | number |
`value` | number |
`timeout?` | undefined &#124; number |

**Returns:** *"ok" | "not-equal" | "timed-out"*

___

###  xor

▸ **xor**(`typedArray`: [Int8Array](int8array.md) | [Uint8Array](uint8array.md) | [Int16Array](int16array.md) | [Uint16Array](uint16array.md) | [Int32Array](int32array.md) | [Uint32Array](uint32array.md), `index`: number, `value`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:133

Stores the bitwise XOR of a value with the value at the given position in the array,
returning the original value. Until this atomic operation completes, any other read or write
operation against the array will block.

**Parameters:**

Name | Type |
------ | ------ |
`typedArray` | [Int8Array](int8array.md) &#124; [Uint8Array](uint8array.md) &#124; [Int16Array](int16array.md) &#124; [Uint16Array](uint16array.md) &#124; [Int32Array](int32array.md) &#124; [Uint32Array](uint32array.md) |
`index` | number |
`value` | number |

**Returns:** *number*
