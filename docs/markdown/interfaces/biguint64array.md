[typescript](../README.md) › [Globals](../globals.md) › [BigUint64Array](biguint64array.md)

# Interface: BigUint64Array

A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the
requested number of bytes could not be allocated, an exception is raised.

## Hierarchy

* **BigUint64Array**

## Indexable

* \[ **index**: *number*\]: bigint

A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the
requested number of bytes could not be allocated, an exception is raised.

## Index

### Properties

* [BYTES_PER_ELEMENT](biguint64array.md#bytes_per_element)
* [[Symbol.toStringTag]](biguint64array.md#[symbol.tostringtag])
* [buffer](biguint64array.md#buffer)
* [byteLength](biguint64array.md#bytelength)
* [byteOffset](biguint64array.md#byteoffset)
* [length](biguint64array.md#length)

### Methods

* [[Symbol.iterator]](biguint64array.md#[symbol.iterator])
* [copyWithin](biguint64array.md#copywithin)
* [entries](biguint64array.md#entries)
* [every](biguint64array.md#every)
* [fill](biguint64array.md#fill)
* [filter](biguint64array.md#filter)
* [find](biguint64array.md#find)
* [findIndex](biguint64array.md#findindex)
* [forEach](biguint64array.md#foreach)
* [includes](biguint64array.md#includes)
* [indexOf](biguint64array.md#indexof)
* [join](biguint64array.md#join)
* [keys](biguint64array.md#keys)
* [lastIndexOf](biguint64array.md#lastindexof)
* [map](biguint64array.md#map)
* [reduce](biguint64array.md#reduce)
* [reduceRight](biguint64array.md#reduceright)
* [reverse](biguint64array.md#reverse)
* [set](biguint64array.md#set)
* [slice](biguint64array.md#slice)
* [some](biguint64array.md#some)
* [sort](biguint64array.md#sort)
* [subarray](biguint64array.md#subarray)
* [toLocaleString](biguint64array.md#tolocalestring)
* [toString](biguint64array.md#tostring)
* [values](biguint64array.md#values)

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:334

The size in bytes of each element in the array.

___

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"BigUint64Array"*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:565

___

###  buffer

• **buffer**: *[ArrayBufferLike](../globals.md#arraybufferlike)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:337

The ArrayBuffer instance referenced by the array.

___

###  byteLength

• **byteLength**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:340

The length in bytes of the array.

___

###  byteOffset

• **byteOffset**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:343

The offset in bytes of the array.

___

###  length

• **length**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:453

The length of the array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹bigint›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:563

**Returns:** *[IterableIterator](iterableiterator.md)‹bigint›*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:354

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

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:357

Yields index, value pairs for every entry in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹[number, bigint]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:367

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns false,
or until the end of the array.

▸ (`value`: bigint, `index`: number, `array`: [BigUint64Array](biguint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: bigint, `start?`: undefined | number, `end?`: undefined | number): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:377

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

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:386

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls
the callbackfn function one time for each element in the array.

▸ (`value`: bigint, `index`: number, `array`: [BigUint64Array](biguint64array.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[BigUint64Array](biguint64array.md)*

___

###  find

▸ **find**(`predicate`: function, `thisArg?`: any): *bigint | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:397

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`value`: bigint, `index`: number, `array`: [BigUint64Array](biguint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *bigint | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:408

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: bigint, `index`: number, `array`: [BigUint64Array](biguint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:417

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

▸ (`value`: bigint, `index`: number, `array`: [BigUint64Array](biguint64array.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: bigint, `fromIndex?`: undefined | number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:424

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

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:432

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

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:439

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹number›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:442

Yields each index in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: bigint, `fromIndex?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:450

Returns the index of the last occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | bigint | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  map

▸ **map**(`callbackfn`: function, `thisArg?`: any): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:463

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: bigint, `index`: number, `array`: [BigUint64Array](biguint64array.md)): *bigint*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[BigUint64Array](biguint64array.md)*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:475

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: bigint, `currentValue`: bigint, `currentIndex`: number, `array`: [BigUint64Array](biguint64array.md)): *bigint*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | bigint |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigUint64Array](biguint64array.md) |

**Returns:** *bigint*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:487

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: bigint, `currentIndex`: number, `array`: [BigUint64Array](biguint64array.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *bigint*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:499

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: bigint, `currentValue`: bigint, `currentIndex`: number, `array`: [BigUint64Array](biguint64array.md)): *bigint*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | bigint |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigUint64Array](biguint64array.md) |

**Returns:** *bigint*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:511

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: bigint, `currentIndex`: number, `array`: [BigUint64Array](biguint64array.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | bigint |
`currentIndex` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:514

Reverses the elements in the array.

**Returns:** *this*

___

###  set

▸ **set**(`array`: [ArrayLike](arraylike.md)‹bigint›, `offset?`: undefined | number): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:521

Sets a value or an array of values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [ArrayLike](arraylike.md)‹bigint› | A typed or untyped array of values to set. |
`offset?` | undefined &#124; number | The index in the current array at which the values are to be written.  |

**Returns:** *void*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:528

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array.  |

**Returns:** *[BigUint64Array](biguint64array.md)*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:538

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls the
callbackfn function for each element in the array until the callbackfn returns true, or until
the end of the array.

▸ (`value`: bigint, `index`: number, `array`: [BigUint64Array](biguint64array.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`index` | number |
`array` | [BigUint64Array](biguint64array.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:544

Sorts the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.  |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:552

Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | The index of the beginning of the array. |
`end?` | undefined &#124; number | The index of the end of the array.  |

**Returns:** *[BigUint64Array](biguint64array.md)*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:555

Converts the array to a string by using the current locale.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:558

Returns a string representation of the array.

**Returns:** *string*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹bigint›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:561

Yields each value in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹bigint›*
