[typescript](../README.md) › [Globals](../globals.md) › [TemplateStringsArray](templatestringsarray.md)

# Interface: TemplateStringsArray

## Hierarchy

* [ReadonlyArray](readonlyarray.md)‹string›

  ↳ **TemplateStringsArray**

## Indexable

* \[ **n**: *number*\]: string

## Index

### Properties

* [length](templatestringsarray.md#length)
* [raw](templatestringsarray.md#raw)

### Methods

* [[Symbol.iterator]](templatestringsarray.md#[symbol.iterator])
* [concat](templatestringsarray.md#concat)
* [entries](templatestringsarray.md#entries)
* [every](templatestringsarray.md#every)
* [filter](templatestringsarray.md#filter)
* [find](templatestringsarray.md#find)
* [findIndex](templatestringsarray.md#findindex)
* [forEach](templatestringsarray.md#foreach)
* [includes](templatestringsarray.md#includes)
* [indexOf](templatestringsarray.md#indexof)
* [join](templatestringsarray.md#join)
* [keys](templatestringsarray.md#keys)
* [lastIndexOf](templatestringsarray.md#lastindexof)
* [map](templatestringsarray.md#map)
* [reduce](templatestringsarray.md#reduce)
* [reduceRight](templatestringsarray.md#reduceright)
* [slice](templatestringsarray.md#slice)
* [some](templatestringsarray.md#some)
* [toLocaleString](templatestringsarray.md#tolocalestring)
* [toString](templatestringsarray.md#tostring)
* [values](templatestringsarray.md#values)

## Properties

###  length

• **length**: *number*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[length](templatestringsarray.md#length)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1090

Gets the length of the array. This is a number one higher than the highest element defined in an array.

___

###  raw

• **raw**: *keyof string[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:605

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹string›*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[[Symbol.iterator]](templatestringsarray.md#[symbol.iterator])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:96

Iterator of values in the array.

**Returns:** *[IterableIterator](iterableiterator.md)‹string›*

___

###  concat

▸ **concat**(...`items`: [ConcatArray](concatarray.md)‹string›[]): *string[]*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[concat](templatestringsarray.md#concat)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1103

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [ConcatArray](concatarray.md)‹string›[] | Additional items to add to the end of array1.  |

**Returns:** *string[]*

▸ **concat**(...`items`: T | [ConcatArray](concatarray.md)‹T›[]): *string[]*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[concat](templatestringsarray.md#concat)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1108

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; [ConcatArray](concatarray.md)‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *string[]*

___

###  entries

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[number, string]›*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[entries](templatestringsarray.md#entries)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:101

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹[number, string]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[every](templatestringsarray.md#every)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1140

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: string, `index`: number, `array`: keyof string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | keyof string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[filter](templatestringsarray.md#filter)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1167

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *string*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: keyof string[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | keyof string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *string[]*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[filter](templatestringsarray.md#filter)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1173

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: keyof string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | keyof string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *string[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[find](templatestringsarray.md#find)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:352

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *string*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: string, `index`: number, `obj`: keyof string[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | string |
`index` | number |
`obj` | keyof string[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *string | undefined*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[find](templatestringsarray.md#find)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:353

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: string, `index`: number, `obj`: keyof string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`obj` | keyof string[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *string | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[findIndex](templatestringsarray.md#findindex)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:364

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: string, `index`: number, `obj`: keyof string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`obj` | keyof string[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[forEach](templatestringsarray.md#foreach)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1155

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: keyof string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | keyof string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: string, `fromIndex?`: undefined | number): *boolean*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[includes](templatestringsarray.md#includes)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:36

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | string | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: string, `fromIndex?`: undefined | number): *number*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[indexOf](templatestringsarray.md#indexof)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1125

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | string | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[join](templatestringsarray.md#join)*

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

*Inherited from [TemplateStringsArray](templatestringsarray.md).[keys](templatestringsarray.md#keys)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:106

Returns an iterable of keys in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: string, `fromIndex?`: undefined | number): *number*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[lastIndexOf](templatestringsarray.md#lastindexof)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1131

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | string | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[map](templatestringsarray.md#map)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1161

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: keyof string[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | keyof string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *string*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[reduce](templatestringsarray.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1179

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: keyof string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | keyof string[] |

**Returns:** *string*

▸ **reduce**(`callbackfn`: function, `initialValue`: string): *string*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[reduce](templatestringsarray.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1180

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: keyof string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | keyof string[] |

▪ **initialValue**: *string*

**Returns:** *string*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[reduce](templatestringsarray.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1186

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: string, `currentIndex`: number, `array`: keyof string[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | string |
`currentIndex` | number |
`array` | keyof string[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *string*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[reduceRight](templatestringsarray.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1192

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: keyof string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | keyof string[] |

**Returns:** *string*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: string): *string*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[reduceRight](templatestringsarray.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1193

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: keyof string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | keyof string[] |

▪ **initialValue**: *string*

**Returns:** *string*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[reduceRight](templatestringsarray.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1199

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: string, `currentIndex`: number, `array`: keyof string[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | string |
`currentIndex` | number |
`array` | keyof string[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *string[]*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[slice](templatestringsarray.md#slice)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1119

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *string[]*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[some](templatestringsarray.md#some)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1149

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: string, `index`: number, `array`: keyof string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | keyof string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[toLocaleString](templatestringsarray.md#tolocalestring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1098

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[toString](templatestringsarray.md#tostring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1094

Returns a string representation of an array.

**Returns:** *string*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹string›*

*Inherited from [TemplateStringsArray](templatestringsarray.md).[values](templatestringsarray.md#values)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:111

Returns an iterable of values in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹string›*
