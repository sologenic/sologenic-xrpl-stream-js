[typescript](../README.md) › [Globals](../globals.md) › [Uint8ClampedArray](uint8clampedarray.md)

# Interface: Uint8ClampedArray

A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.
If the requested number of bytes could not be allocated an exception is raised.

## Hierarchy

* **Uint8ClampedArray**

## Indexable

* \[ **index**: *number*\]: number

A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.
If the requested number of bytes could not be allocated an exception is raised.

## Index

### Properties

* [BYTES_PER_ELEMENT](uint8clampedarray.md#bytes_per_element)
* [[Symbol.toStringTag]](uint8clampedarray.md#[symbol.tostringtag])
* [buffer](uint8clampedarray.md#buffer)
* [byteLength](uint8clampedarray.md#bytelength)
* [byteOffset](uint8clampedarray.md#byteoffset)
* [length](uint8clampedarray.md#length)

### Methods

* [[Symbol.iterator]](uint8clampedarray.md#[symbol.iterator])
* [copyWithin](uint8clampedarray.md#copywithin)
* [entries](uint8clampedarray.md#entries)
* [every](uint8clampedarray.md#every)
* [fill](uint8clampedarray.md#fill)
* [filter](uint8clampedarray.md#filter)
* [find](uint8clampedarray.md#find)
* [findIndex](uint8clampedarray.md#findindex)
* [forEach](uint8clampedarray.md#foreach)
* [includes](uint8clampedarray.md#includes)
* [indexOf](uint8clampedarray.md#indexof)
* [join](uint8clampedarray.md#join)
* [keys](uint8clampedarray.md#keys)
* [lastIndexOf](uint8clampedarray.md#lastindexof)
* [map](uint8clampedarray.md#map)
* [reduce](uint8clampedarray.md#reduce)
* [reduceRight](uint8clampedarray.md#reduceright)
* [reverse](uint8clampedarray.md#reverse)
* [set](uint8clampedarray.md#set)
* [slice](uint8clampedarray.md#slice)
* [some](uint8clampedarray.md#some)
* [sort](uint8clampedarray.md#sort)
* [subarray](uint8clampedarray.md#subarray)
* [toLocaleString](uint8clampedarray.md#tolocalestring)
* [toString](uint8clampedarray.md#tostring)
* [values](uint8clampedarray.md#values)

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2267

The size in bytes of each element in the array.

___

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"Uint8ClampedArray"*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:280

___

###  buffer

• **buffer**: *[ArrayBufferLike](../globals.md#arraybufferlike)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2272

The ArrayBuffer instance referenced by the array.

___

###  byteLength

• **byteLength**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2277

The length in bytes of the array.

___

###  byteOffset

• **byteOffset**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2282

The offset in bytes of the array.

___

###  length

• **length**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2381

The length of the array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹number›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:303

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2293

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

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[number, number]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:307

Returns an array of key, value pairs for every entry in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹[number, number]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2303

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: number, `start?`: undefined | number, `end?`: undefined | number): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2313

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2322

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls
the callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

___

###  find

▸ **find**(`predicate`: function, `thisArg?`: any): *number | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2333

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`value`: number, `index`: number, `obj`: [Uint8ClampedArray](uint8clampedarray.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8ClampedArray](uint8clampedarray.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2344

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: number, `index`: number, `obj`: [Uint8ClampedArray](uint8clampedarray.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8ClampedArray](uint8clampedarray.md) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2353

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: number, `fromIndex?`: undefined | number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:63

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: number, `fromIndex?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2361

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the  search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2368

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹number›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:312

Returns an list of keys in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: number, `fromIndex?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2376

Returns the index of the last occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  map

▸ **map**(`callbackfn`: function, `thisArg?`: any): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2391

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2403

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

**Returns:** *number*

▸ **reduce**(`callbackfn`: function, `initialValue`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2404

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2416

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2428

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

**Returns:** *number*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2429

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2441

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2446

Reverses the elements in an Array.

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

___

###  set

▸ **set**(`array`: [ArrayLike](arraylike.md)‹number›, `offset?`: undefined | number): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2453

Sets a value or an array of values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [ArrayLike](arraylike.md)‹number› | A typed or untyped array of values to set. |
`offset?` | undefined &#124; number | The index in the current array at which the values are to be written.  |

**Returns:** *void*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2460

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2470

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8ClampedArray](uint8clampedarray.md)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8ClampedArray](uint8clampedarray.md) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2481

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2489

Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | The index of the beginning of the array. |
`end?` | undefined &#124; number | The index of the end of the array.  |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2494

Converts a number to a string by using the current locale.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2499

Returns a string representation of an array.

**Returns:** *string*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹number›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:317

Returns an list of values in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*
