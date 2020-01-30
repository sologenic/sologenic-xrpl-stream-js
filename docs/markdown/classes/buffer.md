[typescript](../README.md) › [Globals](../globals.md) › [Buffer](buffer.md)

# Class: Buffer

Raw data is stored in instances of the Buffer class.
A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'

## Hierarchy

* [Uint8Array](../interfaces/uint8array.md)

* [Uint8Array](../interfaces/uint8array.md)

  ↳ **Buffer**

## Indexable

* \[ **index**: *number*\]: number

Raw data is stored in instances of the Buffer class.
A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'

## Index

### Properties

* [BYTES_PER_ELEMENT](buffer.md#bytes_per_element)
* [[Symbol.toStringTag]](buffer.md#[symbol.tostringtag])
* [buffer](buffer.md#buffer)
* [byteLength](buffer.md#bytelength)
* [byteOffset](buffer.md#byteoffset)
* [constructor](buffer.md#constructor)
* [length](buffer.md#length)
* [Uint8Array](buffer.md#static-uint8array)
* [poolSize](buffer.md#static-poolsize)

### Methods

* [[Symbol.iterator]](buffer.md#[symbol.iterator])
* [compare](buffer.md#compare)
* [copy](buffer.md#copy)
* [copyWithin](buffer.md#copywithin)
* [entries](buffer.md#entries)
* [equals](buffer.md#equals)
* [every](buffer.md#every)
* [fill](buffer.md#fill)
* [filter](buffer.md#filter)
* [find](buffer.md#find)
* [findIndex](buffer.md#findindex)
* [forEach](buffer.md#foreach)
* [includes](buffer.md#includes)
* [indexOf](buffer.md#indexof)
* [join](buffer.md#join)
* [keys](buffer.md#keys)
* [lastIndexOf](buffer.md#lastindexof)
* [map](buffer.md#map)
* [readBigInt64BE](buffer.md#readbigint64be)
* [readBigInt64LE](buffer.md#readbigint64le)
* [readBigUInt64BE](buffer.md#readbiguint64be)
* [readBigUInt64LE](buffer.md#readbiguint64le)
* [readDoubleBE](buffer.md#readdoublebe)
* [readDoubleLE](buffer.md#readdoublele)
* [readFloatBE](buffer.md#readfloatbe)
* [readFloatLE](buffer.md#readfloatle)
* [readInt16BE](buffer.md#readint16be)
* [readInt16LE](buffer.md#readint16le)
* [readInt32BE](buffer.md#readint32be)
* [readInt32LE](buffer.md#readint32le)
* [readInt8](buffer.md#readint8)
* [readIntBE](buffer.md#readintbe)
* [readIntLE](buffer.md#readintle)
* [readUInt16BE](buffer.md#readuint16be)
* [readUInt16LE](buffer.md#readuint16le)
* [readUInt32BE](buffer.md#readuint32be)
* [readUInt32LE](buffer.md#readuint32le)
* [readUInt8](buffer.md#readuint8)
* [readUIntBE](buffer.md#readuintbe)
* [readUIntLE](buffer.md#readuintle)
* [reduce](buffer.md#reduce)
* [reduceRight](buffer.md#reduceright)
* [reverse](buffer.md#reverse)
* [set](buffer.md#set)
* [slice](buffer.md#slice)
* [some](buffer.md#some)
* [sort](buffer.md#sort)
* [subarray](buffer.md#subarray)
* [swap16](buffer.md#swap16)
* [swap32](buffer.md#swap32)
* [swap64](buffer.md#swap64)
* [toJSON](buffer.md#tojson)
* [toLocaleString](buffer.md#tolocalestring)
* [toString](buffer.md#tostring)
* [values](buffer.md#values)
* [write](buffer.md#write)
* [writeBigInt64BE](buffer.md#writebigint64be)
* [writeBigInt64LE](buffer.md#writebigint64le)
* [writeBigUInt64BE](buffer.md#writebiguint64be)
* [writeBigUInt64LE](buffer.md#writebiguint64le)
* [writeDoubleBE](buffer.md#writedoublebe)
* [writeDoubleLE](buffer.md#writedoublele)
* [writeFloatBE](buffer.md#writefloatbe)
* [writeFloatLE](buffer.md#writefloatle)
* [writeInt16BE](buffer.md#writeint16be)
* [writeInt16LE](buffer.md#writeint16le)
* [writeInt32BE](buffer.md#writeint32be)
* [writeInt32LE](buffer.md#writeint32le)
* [writeInt8](buffer.md#writeint8)
* [writeIntBE](buffer.md#writeintbe)
* [writeIntLE](buffer.md#writeintle)
* [writeUInt16BE](buffer.md#writeuint16be)
* [writeUInt16LE](buffer.md#writeuint16le)
* [writeUInt32BE](buffer.md#writeuint32be)
* [writeUInt32LE](buffer.md#writeuint32le)
* [writeUInt8](buffer.md#writeuint8)
* [writeUIntBE](buffer.md#writeuintbe)
* [writeUIntLE](buffer.md#writeuintle)
* [alloc](buffer.md#static-alloc)
* [allocUnsafe](buffer.md#static-allocunsafe)
* [allocUnsafeSlow](buffer.md#static-allocunsafeslow)
* [byteLength](buffer.md#static-bytelength)
* [compare](buffer.md#static-compare)
* [concat](buffer.md#static-concat)
* [from](buffer.md#static-from)
* [isBuffer](buffer.md#static-isbuffer)
* [isEncoding](buffer.md#static-isencoding)
* [of](buffer.md#static-of)

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[BYTES_PER_ELEMENT](../interfaces/uint8array.md#bytes_per_element)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[BYTES_PER_ELEMENT](../interfaces/uint8array.md#bytes_per_element)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1988

The size in bytes of each element in the array.

___

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"UInt8Array"*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[[Symbol.toStringTag]](../interfaces/uint8array.md#[symbol.tostringtag])*

*Overrides [Uint8Array](../interfaces/uint8array.md).[[Symbol.toStringTag]](../interfaces/uint8array.md#[symbol.tostringtag])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:276

___

###  buffer

• **buffer**: *[ArrayBufferLike](../globals.md#arraybufferlike)*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[buffer](../interfaces/uint8array.md#buffer)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[buffer](../interfaces/uint8array.md#buffer)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1993

The ArrayBuffer instance referenced by the array.

___

###  byteLength

• **byteLength**: *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[byteLength](../interfaces/uint8array.md#bytelength)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[byteLength](../interfaces/uint8array.md#bytelength)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1998

The length in bytes of the array.

___

###  byteOffset

• **byteOffset**: *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[byteOffset](../interfaces/uint8array.md#byteoffset)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[byteOffset](../interfaces/uint8array.md#byteoffset)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2003

The offset in bytes of the array.

___

###  constructor

\+ **new Buffer**(`str`: string, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:248

Allocates a new buffer containing the given {str}.

**`deprecated`** since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | String to store in buffer. |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) | encoding to use, optional.  Default is 'utf8' |

**Returns:** *[Buffer](buffer.md)*

\+ **new Buffer**(`size`: number): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:256

Allocates a new buffer of {size} octets.

**`deprecated`** since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | count of octets to allocate. |

**Returns:** *[Buffer](buffer.md)*

\+ **new Buffer**(`array`: [Uint8Array](../interfaces/uint8array.md)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:263

Allocates a new buffer containing the given {array} of octets.

**`deprecated`** since v10.0.0 - Use `Buffer.from(array)` instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Uint8Array](../interfaces/uint8array.md) | The octets to store. |

**Returns:** *[Buffer](buffer.md)*

\+ **new Buffer**(`arrayBuffer`: [ArrayBuffer](../interfaces/arraybuffer.md) | [SharedArrayBuffer](../interfaces/sharedarraybuffer.md)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:270

Produces a Buffer backed by the same allocated memory as
the given {ArrayBuffer}/{SharedArrayBuffer}.

**`deprecated`** since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayBuffer` | [ArrayBuffer](../interfaces/arraybuffer.md) &#124; [SharedArrayBuffer](../interfaces/sharedarraybuffer.md) | The ArrayBuffer with which to share memory. |

**Returns:** *[Buffer](buffer.md)*

\+ **new Buffer**(`array`: any[]): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:279

Allocates a new buffer containing the given {array} of octets.

**`deprecated`** since v10.0.0 - Use `Buffer.from(array)` instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | any[] | The octets to store. |

**Returns:** *[Buffer](buffer.md)*

\+ **new Buffer**(`buffer`: [Buffer](buffer.md)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:286

Copies the passed {buffer} data onto a new {Buffer} instance.

**`deprecated`** since v10.0.0 - Use `Buffer.from(buffer)` instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | [Buffer](buffer.md) | The buffer to copy. |

**Returns:** *[Buffer](buffer.md)*

___

###  length

• **length**: *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[length](../interfaces/uint8array.md#length)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[length](../interfaces/uint8array.md#length)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2102

The length of the array.

___

### `Static` Uint8Array

▪ **Uint8Array**: *[Uint8ArrayConstructor](../interfaces/uint8arrayconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2257

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2257

___

### `Static` poolSize

▪ **poolSize**: *number*

Defined in node_modules/@types/node/globals.d.ts:386

This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](../interfaces/iterableiterator.md)‹number›*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[[Symbol.iterator]](../interfaces/uint8array.md#[symbol.iterator])*

*Overrides [Uint8Array](../interfaces/uint8array.md).[[Symbol.iterator]](../interfaces/uint8array.md#[symbol.iterator])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:275

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹number›*

___

###  compare

▸ **compare**(`otherBuffer`: [Uint8Array](../interfaces/uint8array.md), `targetStart?`: undefined | number, `targetEnd?`: undefined | number, `sourceStart?`: undefined | number, `sourceEnd?`: undefined | number): *number*

Defined in node_modules/@types/node/globals.d.ts:394

**Parameters:**

Name | Type |
------ | ------ |
`otherBuffer` | [Uint8Array](../interfaces/uint8array.md) |
`targetStart?` | undefined &#124; number |
`targetEnd?` | undefined &#124; number |
`sourceStart?` | undefined &#124; number |
`sourceEnd?` | undefined &#124; number |

**Returns:** *number*

___

###  copy

▸ **copy**(`targetBuffer`: [Uint8Array](../interfaces/uint8array.md), `targetStart?`: undefined | number, `sourceStart?`: undefined | number, `sourceEnd?`: undefined | number): *number*

Defined in node_modules/@types/node/globals.d.ts:401

**Parameters:**

Name | Type |
------ | ------ |
`targetBuffer` | [Uint8Array](../interfaces/uint8array.md) |
`targetStart?` | undefined &#124; number |
`sourceStart?` | undefined &#124; number |
`sourceEnd?` | undefined &#124; number |

**Returns:** *number*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[copyWithin](../interfaces/uint8array.md#copywithin)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[copyWithin](../interfaces/uint8array.md#copywithin)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2014

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  entries

▸ **entries**(): *[IterableIterator](../interfaces/iterableiterator.md)‹[number, number]›*

*Overrides [Uint8Array](../interfaces/uint8array.md).[entries](../interfaces/uint8array.md#entries)*

Defined in node_modules/@types/node/globals.d.ts:465

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹[number, number]›*

___

###  equals

▸ **equals**(`otherBuffer`: [Uint8Array](../interfaces/uint8array.md)): *boolean*

Defined in node_modules/@types/node/globals.d.ts:393

**Parameters:**

Name | Type |
------ | ------ |
`otherBuffer` | [Uint8Array](../interfaces/uint8array.md) |

**Returns:** *boolean*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[every](../interfaces/uint8array.md#every)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[every](../interfaces/uint8array.md#every)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2024

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: string | [Uint8Array](../interfaces/uint8array.md) | number, `offset?`: undefined | number, `end?`: undefined | number, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *this*

*Overrides [Uint8Array](../interfaces/uint8array.md).[fill](../interfaces/uint8array.md#fill)*

Defined in node_modules/@types/node/globals.d.ts:461

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; [Uint8Array](../interfaces/uint8array.md) &#124; number |
`offset?` | undefined &#124; number |
`end?` | undefined &#124; number |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *this*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Uint8Array](../interfaces/uint8array.md)*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[filter](../interfaces/uint8array.md#filter)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[filter](../interfaces/uint8array.md#filter)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2043

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls
the callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8Array](../interfaces/uint8array.md)*

___

###  find

▸ **find**(`predicate`: function, `thisArg?`: any): *number | undefined*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[find](../interfaces/uint8array.md#find)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[find](../interfaces/uint8array.md#find)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2054

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`value`: number, `index`: number, `obj`: [Uint8Array](../interfaces/uint8array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8Array](../interfaces/uint8array.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[findIndex](../interfaces/uint8array.md#findindex)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[findIndex](../interfaces/uint8array.md#findindex)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2065

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: number, `index`: number, `obj`: [Uint8Array](../interfaces/uint8array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8Array](../interfaces/uint8array.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[forEach](../interfaces/uint8array.md#foreach)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[forEach](../interfaces/uint8array.md#foreach)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2074

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`value`: string | number | [Buffer](buffer.md), `byteOffset?`: undefined | number, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *boolean*

*Overrides [Uint8Array](../interfaces/uint8array.md).[includes](../interfaces/uint8array.md#includes)*

Defined in node_modules/@types/node/globals.d.ts:466

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number &#124; [Buffer](buffer.md) |
`byteOffset?` | undefined &#124; number |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`value`: string | number | [Uint8Array](../interfaces/uint8array.md), `byteOffset?`: undefined | number, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *number*

*Overrides [Uint8Array](../interfaces/uint8array.md).[indexOf](../interfaces/uint8array.md#indexof)*

Defined in node_modules/@types/node/globals.d.ts:463

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number &#124; [Uint8Array](../interfaces/uint8array.md) |
`byteOffset?` | undefined &#124; number |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[join](../interfaces/uint8array.md#join)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[join](../interfaces/uint8array.md#join)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2089

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *[IterableIterator](../interfaces/iterableiterator.md)‹number›*

*Overrides [Uint8Array](../interfaces/uint8array.md).[keys](../interfaces/uint8array.md#keys)*

Defined in node_modules/@types/node/globals.d.ts:467

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`value`: string | number | [Uint8Array](../interfaces/uint8array.md), `byteOffset?`: undefined | number, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *number*

*Overrides [Uint8Array](../interfaces/uint8array.md).[lastIndexOf](../interfaces/uint8array.md#lastindexof)*

Defined in node_modules/@types/node/globals.d.ts:464

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number &#124; [Uint8Array](../interfaces/uint8array.md) |
`byteOffset?` | undefined &#124; number |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *number*

___

###  map

▸ **map**(`callbackfn`: function, `thisArg?`: any): *[Uint8Array](../interfaces/uint8array.md)*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[map](../interfaces/uint8array.md#map)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[map](../interfaces/uint8array.md#map)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2112

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8Array](../interfaces/uint8array.md)*

___

###  readBigInt64BE

▸ **readBigInt64BE**(`offset?`: undefined | number): *bigint*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`offset?` | undefined &#124; number |

**Returns:** *bigint*

___

###  readBigInt64LE

▸ **readBigInt64LE**(`offset?`: undefined | number): *bigint*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`offset?` | undefined &#124; number |

**Returns:** *bigint*

___

###  readBigUInt64BE

▸ **readBigUInt64BE**(`offset?`: undefined | number): *bigint*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`offset?` | undefined &#124; number |

**Returns:** *bigint*

___

###  readBigUInt64LE

▸ **readBigUInt64LE**(`offset?`: undefined | number): *bigint*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`offset?` | undefined &#124; number |

**Returns:** *bigint*

___

###  readDoubleBE

▸ **readDoubleBE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:441

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readDoubleLE

▸ **readDoubleLE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:440

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readFloatBE

▸ **readFloatBE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:439

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readFloatLE

▸ **readFloatLE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:438

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readInt16BE

▸ **readInt16BE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:435

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readInt16LE

▸ **readInt16LE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:434

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readInt32BE

▸ **readInt32BE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:437

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readInt32LE

▸ **readInt32LE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:436

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readInt8

▸ **readInt8**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:433

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readIntBE

▸ **readIntBE**(`offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:427

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

###  readIntLE

▸ **readIntLE**(`offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:426

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

###  readUInt16BE

▸ **readUInt16BE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:430

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readUInt16LE

▸ **readUInt16LE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:429

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readUInt32BE

▸ **readUInt32BE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:432

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readUInt32LE

▸ **readUInt32LE**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:431

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readUInt8

▸ **readUInt8**(`offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:428

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

###  readUIntBE

▸ **readUIntBE**(`offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:425

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

###  readUIntLE

▸ **readUIntLE**(`offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:424

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[reduce](../interfaces/uint8array.md#reduce)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[reduce](../interfaces/uint8array.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2124

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

**Returns:** *number*

▸ **reduce**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[reduce](../interfaces/uint8array.md#reduce)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[reduce](../interfaces/uint8array.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2125

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[reduce](../interfaces/uint8array.md#reduce)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[reduce](../interfaces/uint8array.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2137

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[reduceRight](../interfaces/uint8array.md#reduceright)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[reduceRight](../interfaces/uint8array.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2149

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

**Returns:** *number*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[reduceRight](../interfaces/uint8array.md#reduceright)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[reduceRight](../interfaces/uint8array.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2150

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[reduceRight](../interfaces/uint8array.md#reduceright)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[reduceRight](../interfaces/uint8array.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2162

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *this*

*Overrides [Uint8Array](../interfaces/uint8array.md).[reverse](../interfaces/uint8array.md#reverse)*

Defined in node_modules/@types/node/globals.d.ts:442

**Returns:** *this*

___

###  set

▸ **set**(`array`: [ArrayLike](../interfaces/arraylike.md)‹number›, `offset?`: undefined | number): *void*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[set](../interfaces/uint8array.md#set)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[set](../interfaces/uint8array.md#set)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2174

Sets a value or an array of values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [ArrayLike](../interfaces/arraylike.md)‹number› | A typed or untyped array of values to set. |
`offset?` | undefined &#124; number | The index in the current array at which the values are to be written.  |

**Returns:** *void*

___

###  slice

▸ **slice**(`begin?`: undefined | number, `end?`: undefined | number): *[Buffer](buffer.md)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[slice](../interfaces/uint8array.md#slice)*

Defined in node_modules/@types/node/globals.d.ts:410

Returns a new `Buffer` that references **the same memory as the original**, but offset and cropped by the start and end indices.

This method is incompatible with `Uint8Array#slice()`, which returns a copy of the original memory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | Where the new `Buffer` will start. Default: `0`. |
`end?` | undefined &#124; number | Where the new `Buffer` will end (not inclusive). Default: `buf.length`.  |

**Returns:** *[Buffer](buffer.md)*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[some](../interfaces/uint8array.md#some)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[some](../interfaces/uint8array.md#some)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2191

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../interfaces/uint8array.md)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../interfaces/uint8array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[sort](../interfaces/uint8array.md#sort)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[sort](../interfaces/uint8array.md#sort)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2202

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *[Buffer](buffer.md)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[subarray](../interfaces/uint8array.md#subarray)*

Defined in node_modules/@types/node/globals.d.ts:419

Returns a new `Buffer` that references **the same memory as the original**, but offset and cropped by the start and end indices.

This method is compatible with `Uint8Array#subarray()`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | Where the new `Buffer` will start. Default: `0`. |
`end?` | undefined &#124; number | Where the new `Buffer` will end (not inclusive). Default: `buf.length`.  |

**Returns:** *[Buffer](buffer.md)*

___

###  swap16

▸ **swap16**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:443

**Returns:** *[Buffer](buffer.md)*

___

###  swap32

▸ **swap32**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:444

**Returns:** *[Buffer](buffer.md)*

___

###  swap64

▸ **swap64**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:445

**Returns:** *[Buffer](buffer.md)*

___

###  toJSON

▸ **toJSON**(): *object*

Defined in node_modules/@types/node/globals.d.ts:392

**Returns:** *object*

* **data**: *number[]*

* **type**: *"Buffer"*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [Uint8Array](../interfaces/uint8array.md).[toLocaleString](../interfaces/uint8array.md#tolocalestring)*

*Overrides [Uint8Array](../interfaces/uint8array.md).[toLocaleString](../interfaces/uint8array.md#tolocalestring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2215

Converts a number to a string by using the current locale.

**Returns:** *string*

___

###  toString

▸ **toString**(`encoding?`: undefined | string, `start?`: undefined | number, `end?`: undefined | number): *string*

*Overrides [Uint8Array](../interfaces/uint8array.md).[toString](../interfaces/uint8array.md#tostring)*

Defined in node_modules/@types/node/globals.d.ts:391

**Parameters:**

Name | Type |
------ | ------ |
`encoding?` | undefined &#124; string |
`start?` | undefined &#124; number |
`end?` | undefined &#124; number |

**Returns:** *string*

___

###  values

▸ **values**(): *[IterableIterator](../interfaces/iterableiterator.md)‹number›*

*Overrides [Uint8Array](../interfaces/uint8array.md).[values](../interfaces/uint8array.md#values)*

Defined in node_modules/@types/node/globals.d.ts:468

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹number›*

___

###  write

▸ **write**(`string`: string, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *number*

Defined in node_modules/@types/node/globals.d.ts:388

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *number*

▸ **write**(`string`: string, `offset`: number, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *number*

Defined in node_modules/@types/node/globals.d.ts:389

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`offset` | number |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *number*

▸ **write**(`string`: string, `offset`: number, `length`: number, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *number*

Defined in node_modules/@types/node/globals.d.ts:390

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`offset` | number |
`length` | number |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *number*

___

###  writeBigInt64BE

▸ **writeBigInt64BE**(`value`: bigint, `offset?`: undefined | number): *number*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`offset?` | undefined &#124; number |

**Returns:** *number*

___

###  writeBigInt64LE

▸ **writeBigInt64LE**(`value`: bigint, `offset?`: undefined | number): *number*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`offset?` | undefined &#124; number |

**Returns:** *number*

___

###  writeBigUInt64BE

▸ **writeBigUInt64BE**(`value`: bigint, `offset?`: undefined | number): *number*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`offset?` | undefined &#124; number |

**Returns:** *number*

___

###  writeBigUInt64LE

▸ **writeBigUInt64LE**(`value`: bigint, `offset?`: undefined | number): *number*

Defined in node_modules/@types/node/ts3.2/globals.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`offset?` | undefined &#124; number |

**Returns:** *number*

___

###  writeDoubleBE

▸ **writeDoubleBE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:459

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeDoubleLE

▸ **writeDoubleLE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:458

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeFloatBE

▸ **writeFloatBE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:457

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeFloatLE

▸ **writeFloatLE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:456

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeInt16BE

▸ **writeInt16BE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:453

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeInt16LE

▸ **writeInt16LE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:452

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeInt32BE

▸ **writeInt32BE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:455

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeInt32LE

▸ **writeInt32LE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:454

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeInt8

▸ **writeInt8**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:451

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeIntBE

▸ **writeIntBE**(`value`: number, `offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:423

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

###  writeIntLE

▸ **writeIntLE**(`value`: number, `offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:422

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

###  writeUInt16BE

▸ **writeUInt16BE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:448

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeUInt16LE

▸ **writeUInt16LE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:447

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeUInt32BE

▸ **writeUInt32BE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:450

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeUInt32LE

▸ **writeUInt32LE**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:449

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeUInt8

▸ **writeUInt8**(`value`: number, `offset`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:446

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |

**Returns:** *number*

___

###  writeUIntBE

▸ **writeUIntBE**(`value`: number, `offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:421

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

###  writeUIntLE

▸ **writeUIntLE**(`value`: number, `offset`: number, `byteLength`: number): *number*

Defined in node_modules/@types/node/globals.d.ts:420

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |

**Returns:** *number*

___

### `Static` alloc

▸ **alloc**(`size`: number, `fill?`: string | [Buffer](buffer.md) | number, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:368

Allocates a new buffer of {size} octets.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | count of octets to allocate. |
`fill?` | string &#124; [Buffer](buffer.md) &#124; number | if specified, buffer will be initialized by calling buf.fill(fill).    If parameter is omitted, buffer will be filled with zeros. |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) | encoding used for call to buf.fill while initalizing  |

**Returns:** *[Buffer](buffer.md)*

___

### `Static` allocUnsafe

▸ **allocUnsafe**(`size`: number): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:375

Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
of the newly created Buffer are unknown and may contain sensitive data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | count of octets to allocate  |

**Returns:** *[Buffer](buffer.md)*

___

### `Static` allocUnsafeSlow

▸ **allocUnsafeSlow**(`size`: number): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:382

Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
of the newly created Buffer are unknown and may contain sensitive data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | count of octets to allocate  |

**Returns:** *[Buffer](buffer.md)*

___

### `Static` byteLength

▸ **byteLength**(`string`: string | [ArrayBufferView](../modules/nodejs.md#arraybufferview) | [ArrayBuffer](../interfaces/arraybuffer.md) | [SharedArrayBuffer](../interfaces/sharedarraybuffer.md), `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *number*

Defined in node_modules/@types/node/globals.d.ts:340

Gives the actual byte length of a string. encoding defaults to 'utf8'.
This is not the same as String.prototype.length since that returns the number of characters in a string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string &#124; [ArrayBufferView](../modules/nodejs.md#arraybufferview) &#124; [ArrayBuffer](../interfaces/arraybuffer.md) &#124; [SharedArrayBuffer](../interfaces/sharedarraybuffer.md) | string to test. |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) | encoding used to evaluate (defaults to 'utf8')  |

**Returns:** *number*

___

### `Static` compare

▸ **compare**(`buf1`: [Uint8Array](../interfaces/uint8array.md), `buf2`: [Uint8Array](../interfaces/uint8array.md)): *number*

Defined in node_modules/@types/node/globals.d.ts:359

The same as buf1.compare(buf2).

**Parameters:**

Name | Type |
------ | ------ |
`buf1` | [Uint8Array](../interfaces/uint8array.md) |
`buf2` | [Uint8Array](../interfaces/uint8array.md) |

**Returns:** *number*

___

### `Static` concat

▸ **concat**(`list`: [Uint8Array](../interfaces/uint8array.md)[], `totalLength?`: undefined | number): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:355

Returns a buffer which is the result of concatenating all the buffers in the list together.

If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
If the list has exactly one item, then the first item of the list is returned.
If the list has more than one item, then a new Buffer is created.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | [Uint8Array](../interfaces/uint8array.md)[] | An array of Buffer objects to concatenate |
`totalLength?` | undefined &#124; number | Total length of the buffers when concatenated.   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.  |

**Returns:** *[Buffer](buffer.md)*

___

### `Static` from

▸ **from**(`arrayBuffer`: [ArrayBuffer](../interfaces/arraybuffer.md) | [SharedArrayBuffer](../interfaces/sharedarraybuffer.md), `byteOffset?`: undefined | number, `length?`: undefined | number): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:302

When passed a reference to the .buffer property of a TypedArray instance,
the newly created Buffer will share the same allocated memory as the TypedArray.
The optional {byteOffset} and {length} arguments specify a memory range
within the {arrayBuffer} that will be shared by the Buffer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayBuffer` | [ArrayBuffer](../interfaces/arraybuffer.md) &#124; [SharedArrayBuffer](../interfaces/sharedarraybuffer.md) | The .buffer property of any TypedArray or a new ArrayBuffer()  |
`byteOffset?` | undefined &#124; number | - |
`length?` | undefined &#124; number | - |

**Returns:** *[Buffer](buffer.md)*

▸ **from**(`data`: number[]): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:307

Creates a new Buffer using the passed {data}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | number[] | data to create a new Buffer  |

**Returns:** *[Buffer](buffer.md)*

▸ **from**(`data`: [Uint8Array](../interfaces/uint8array.md)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:308

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Uint8Array](../interfaces/uint8array.md) |

**Returns:** *[Buffer](buffer.md)*

▸ **from**(`str`: string, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:314

Creates a new Buffer containing the given JavaScript string {str}.
If provided, the {encoding} parameter identifies the character encoding.
If not provided, {encoding} defaults to 'utf8'.

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *[Buffer](buffer.md)*

___

### `Static` isBuffer

▸ **isBuffer**(`obj`: any): *obj is Buffer*

Defined in node_modules/@types/node/globals.d.ts:325

Returns true if {obj} is a Buffer

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | object to test.  |

**Returns:** *obj is Buffer*

___

### `Static` isEncoding

▸ **isEncoding**(`encoding`: string): *encoding is BufferEncoding*

Defined in node_modules/@types/node/globals.d.ts:332

Returns true if {encoding} is a valid encoding argument.
Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`encoding` | string | string to test.  |

**Returns:** *encoding is BufferEncoding*

___

### `Static` of

▸ **of**(...`items`: number[]): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:319

Creates a new Buffer using the passed {data}

**Parameters:**

Name | Type |
------ | ------ |
`...items` | number[] |

**Returns:** *[Buffer](buffer.md)*
