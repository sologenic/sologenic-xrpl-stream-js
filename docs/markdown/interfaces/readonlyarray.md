[typescript](../README.md) › [Globals](../globals.md) › [ReadonlyArray](readonlyarray.md)

# Interface: ReadonlyArray <**T, T, T, T**>

## Type parameters

▪ **T**

▪ **T**

▪ **T**

▪ **T**

## Hierarchy

* **ReadonlyArray**

  ↳ [TemplateStringsArray](templatestringsarray.md)

## Indexable

* \[ **n**: *number*\]: T

## Index

### Properties

* [length](readonlyarray.md#length)

### Methods

* [[Symbol.iterator]](readonlyarray.md#[symbol.iterator])
* [concat](readonlyarray.md#concat)
* [entries](readonlyarray.md#entries)
* [every](readonlyarray.md#every)
* [filter](readonlyarray.md#filter)
* [find](readonlyarray.md#find)
* [findIndex](readonlyarray.md#findindex)
* [forEach](readonlyarray.md#foreach)
* [includes](readonlyarray.md#includes)
* [indexOf](readonlyarray.md#indexof)
* [join](readonlyarray.md#join)
* [keys](readonlyarray.md#keys)
* [lastIndexOf](readonlyarray.md#lastindexof)
* [map](readonlyarray.md#map)
* [reduce](readonlyarray.md#reduce)
* [reduceRight](readonlyarray.md#reduceright)
* [slice](readonlyarray.md#slice)
* [some](readonlyarray.md#some)
* [toLocaleString](readonlyarray.md#tolocalestring)
* [toString](readonlyarray.md#tostring)
* [values](readonlyarray.md#values)

## Properties

###  length

• **length**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1090

Gets the length of the array. This is a number one higher than the highest element defined in an array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:96

Iterator of values in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*

___

###  concat

▸ **concat**(...`items`: [ConcatArray](concatarray.md)‹T›[]): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1103

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [ConcatArray](concatarray.md)‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *T[]*

▸ **concat**(...`items`: T | [ConcatArray](concatarray.md)‹T›[]): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1108

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; [ConcatArray](concatarray.md)‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *T[]*

___

###  entries

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[number, T]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:101

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹[number, T]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1140

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: T, `index`: number, `array`: keyof T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | keyof T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1167

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *T*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: keyof T[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | keyof T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1173

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: keyof T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | keyof T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *T[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:352

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *T*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: T, `index`: number, `obj`: keyof T[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | T |
`index` | number |
`obj` | keyof T[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *T | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:353

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: T, `index`: number, `obj`: keyof T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`obj` | keyof T[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *T | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:364

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: T, `index`: number, `obj`: keyof T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`obj` | keyof T[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1155

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: keyof T[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | keyof T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: T, `fromIndex?`: undefined | number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:36

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | T | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: T, `fromIndex?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1125

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | T | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1113

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹number›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:106

Returns an iterable of keys in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: T, `fromIndex?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1131

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | T | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1161

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: T, `index`: number, `array`: keyof T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | keyof T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1179

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: keyof T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | keyof T[] |

**Returns:** *T*

▸ **reduce**(`callbackfn`: function, `initialValue`: T): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1180

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: keyof T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | keyof T[] |

▪ **initialValue**: *T*

**Returns:** *T*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1186

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: T, `currentIndex`: number, `array`: keyof T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | T |
`currentIndex` | number |
`array` | keyof T[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1192

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: keyof T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | keyof T[] |

**Returns:** *T*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: T): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1193

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: T, `currentValue`: T, `currentIndex`: number, `array`: keyof T[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | T |
`currentValue` | T |
`currentIndex` | number |
`array` | keyof T[] |

▪ **initialValue**: *T*

**Returns:** *T*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1199

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: T, `currentIndex`: number, `array`: keyof T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | T |
`currentIndex` | number |
`array` | keyof T[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1119

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *T[]*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1149

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: T, `index`: number, `array`: keyof T[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | keyof T[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1098

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1094

Returns a string representation of an array.

**Returns:** *string*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:111

Returns an iterable of values in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*
