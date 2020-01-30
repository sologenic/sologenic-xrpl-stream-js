[typescript](../README.md) › [Globals](../globals.md) › [BigInt64Array](bigint64array.md)

# Interface: BigInt64Array

A typed array of 64-bit signed integer values. The contents are initialized to 0. If the
requested number of bytes could not be allocated, an exception is raised.

## Hierarchy

* **BigInt64Array**

## Indexable

* \[ **index**: *number*\]: bigint

A typed array of 64-bit signed integer values. The contents are initialized to 0. If the
requested number of bytes could not be allocated, an exception is raised.

## Index

### Properties

* [BYTES_PER_ELEMENT](bigint64array.md#bytes_per_element)
* [[Symbol.toStringTag]](bigint64array.md#[symbol.tostringtag])
* [buffer](bigint64array.md#buffer)
* [byteLength](bigint64array.md#bytelength)
* [byteOffset](bigint64array.md#byteoffset)
* [length](bigint64array.md#length)

### Methods

* [[Symbol.iterator]](bigint64array.md#[symbol.iterator])
* [copyWithin](bigint64array.md#copywithin)
* [entries](bigint64array.md#entries)
* [every](bigint64array.md#every)
* [fill](bigint64array.md#fill)
* [filter](bigint64array.md#filter)
* [find](bigint64array.md#find)
* [findIndex](bigint64array.md#findindex)
* [forEach](bigint64array.md#foreach)
* [includes](bigint64array.md#includes)
* [indexOf](bigint64array.md#indexof)
* [join](bigint64array.md#join)
* [keys](bigint64array.md#keys)
* [lastIndexOf](bigint64array.md#lastindexof)
* [map](bigint64array.md#map)
* [reduce](bigint64array.md#reduce)
* [reduceRight](bigint64array.md#reduceright)
* [reverse](bigint64array.md#reverse)
* [set](bigint64array.md#set)
* [slice](bigint64array.md#slice)
* [some](bigint64array.md#some)
* [sort](bigint64array.md#sort)
* [subarray](bigint64array.md#subarray)
* [toLocaleString](bigint64array.md#tolocalestring)
* [toString](bigint64array.md#tostring)
* [values](bigint64array.md#values)

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:65

The size in bytes of each element in the array.

___

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"BigInt64Array"*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:296

___

###  buffer

• **buffer**: *[ArrayBufferLike](../globals.md#arraybufferlike)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:68

The ArrayBuffer instance referenced by the array.

___

###  byteLength

• **byteLength**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:71

The length in bytes of the array.

___

###  byteOffset

• **byteOffset**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:74

The offset in bytes of the array.

___

###  length

• **length**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:184

The length of the array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹bigint›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:294

**Returns:** *[IterableIterator](iterableiterator.md)‹bigint›*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:85

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

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[number, bigint]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:88

Yields index, value pairs for every entry in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹[number, bigint]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:98

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns false,
or until the end of the array.

▸ (`value`: bigint, `index`: number, `array`: [BigInt64Array](bigint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: bigint, `start?`: undefined | number, `end?`: undefined | number): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:108

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | bigint | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:117

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls
the callbackfn function one time for each element in the array.

▸ (`value`: bigint, `index`: number, `array`: [BigInt64Array](bigint64array.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[BigInt64Array](bigint64array.md)*

___

###  find

▸ **find**(`predicate`: function, `thisArg?`: any): *bigint | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:128

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`value`: bigint, `index`: number, `array`: [BigInt64Array](bigint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *bigint | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:139

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: bigint, `index`: number, `array`: [BigInt64Array](bigint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:148

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

▸ (`value`: bigint, `index`: number, `array`: [BigInt64Array](bigint64array.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: bigint, `fromIndex?`: undefined | number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:155

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | bigint | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: bigint, `fromIndex?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:163

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | bigint | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:170

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹number›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:173

Yields each index in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: bigint, `fromIndex?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:181

Returns the index of the last occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | bigint | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  map

▸ **map**(`callbackfn`: function, `thisArg?`: any): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:194

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: bigint, `index`: number, `array`: [BigInt64Array](bigint64array.md)): *bigint*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[BigInt64Array](bigint64array.md)*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:206

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: bigint, `currentValue`: bigint, `currentIndex`: number, `array`: [BigInt64Array](bigint64array.md)): *bigint*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | bigint |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigInt64Array](bigint64array.md) |

**Returns:** *bigint*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:218

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: bigint, `currentIndex`: number, `array`: [BigInt64Array](bigint64array.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:230

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: bigint, `currentValue`: bigint, `currentIndex`: number, `array`: [BigInt64Array](bigint64array.md)): *bigint*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | bigint |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigInt64Array](bigint64array.md) |

**Returns:** *bigint*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:242

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: bigint, `currentIndex`: number, `array`: [BigInt64Array](bigint64array.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:245

Reverses the elements in the array.

**Returns:** *this*

___

###  set

▸ **set**(`array`: [ArrayLike](arraylike.md)‹bigint›, `offset?`: undefined | number): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:252

Sets a value or an array of values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [ArrayLike](arraylike.md)‹bigint› | A typed or untyped array of values to set. |
`offset?` | undefined &#124; number | The index in the current array at which the values are to be written.  |

**Returns:** *void*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:259

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array.  |

**Returns:** *[BigInt64Array](bigint64array.md)*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:269

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls the
callbackfn function for each element in the array until the callbackfn returns true, or until
the end of the array.

▸ (`value`: bigint, `index`: number, `array`: [BigInt64Array](bigint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigInt64Array](bigint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:275

Sorts the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.  |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:283

Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | The index of the beginning of the array. |
`end?` | undefined &#124; number | The index of the end of the array.  |

**Returns:** *[BigInt64Array](bigint64array.md)*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:286

Converts the array to a string by using the current locale.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:289

Returns a string representation of the array.

**Returns:** *string*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹bigint›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:292

Yields each value in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹bigint›*
