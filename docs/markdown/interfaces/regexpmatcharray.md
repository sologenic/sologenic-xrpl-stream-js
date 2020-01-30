[typescript](../README.md) › [Globals](../globals.md) › [RegExpMatchArray](regexpmatcharray.md)

# Interface: RegExpMatchArray

## Hierarchy

* [Array](regexpmatcharray.md#array)‹string›

  ↳ **RegExpMatchArray**

## Indexable

* \[ **n**: *number*\]: string

## Index

### Properties

* [Array](regexpmatcharray.md#array)
* [groups](regexpmatcharray.md#optional-groups)
* [index](regexpmatcharray.md#optional-index)
* [input](regexpmatcharray.md#optional-input)
* [length](regexpmatcharray.md#length)

### Methods

* [[Symbol.iterator]](regexpmatcharray.md#[symbol.iterator])
* [[Symbol.unscopables]](regexpmatcharray.md#[symbol.unscopables])
* [concat](regexpmatcharray.md#concat)
* [copyWithin](regexpmatcharray.md#copywithin)
* [entries](regexpmatcharray.md#entries)
* [every](regexpmatcharray.md#every)
* [fill](regexpmatcharray.md#fill)
* [filter](regexpmatcharray.md#filter)
* [find](regexpmatcharray.md#find)
* [findIndex](regexpmatcharray.md#findindex)
* [forEach](regexpmatcharray.md#foreach)
* [includes](regexpmatcharray.md#includes)
* [indexOf](regexpmatcharray.md#indexof)
* [join](regexpmatcharray.md#join)
* [keys](regexpmatcharray.md#keys)
* [lastIndexOf](regexpmatcharray.md#lastindexof)
* [map](regexpmatcharray.md#map)
* [pop](regexpmatcharray.md#pop)
* [push](regexpmatcharray.md#push)
* [reduce](regexpmatcharray.md#reduce)
* [reduceRight](regexpmatcharray.md#reduceright)
* [reverse](regexpmatcharray.md#reverse)
* [shift](regexpmatcharray.md#shift)
* [slice](regexpmatcharray.md#slice)
* [some](regexpmatcharray.md#some)
* [sort](regexpmatcharray.md#sort)
* [splice](regexpmatcharray.md#splice)
* [toLocaleString](regexpmatcharray.md#tolocalestring)
* [toString](regexpmatcharray.md#tostring)
* [unshift](regexpmatcharray.md#unshift)
* [values](regexpmatcharray.md#values)

## Properties

###  Array

• **Array**: *[ArrayConstructor](arrayconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1385

___

### `Optional` groups

• **groups**? : *undefined | object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.regexp.d.ts:22

___

### `Optional` index

• **index**? : *undefined | number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:910

___

### `Optional` input

• **input**? : *undefined | string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:911

___

###  length

• **length**: *number*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[length](regexpmatcharray.md#length)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1215

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹string›*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[[Symbol.iterator]](regexpmatcharray.md#[symbol.iterator])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *[IterableIterator](iterableiterator.md)‹string›*

___

###  [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[[Symbol.unscopables]](regexpmatcharray.md#[symbol.unscopables])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

* **copyWithin**: *boolean*

* **entries**: *boolean*

* **fill**: *boolean*

* **find**: *boolean*

* **findIndex**: *boolean*

* **keys**: *boolean*

* **values**: *boolean*

___

###  concat

▸ **concat**(...`items`: [ConcatArray](concatarray.md)‹string›[]): *string[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[concat](regexpmatcharray.md#concat)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1237

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [ConcatArray](concatarray.md)‹string›[] | Additional items to add to the end of array1.  |

**Returns:** *string[]*

▸ **concat**(...`items`: T | [ConcatArray](concatarray.md)‹T›[]): *string[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[concat](regexpmatcharray.md#concat)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1242

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; [ConcatArray](concatarray.md)‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *string[]*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[copyWithin](regexpmatcharray.md#copywithin)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:64

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

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[number, string]›*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[entries](regexpmatcharray.md#entries)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹[number, string]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[every](regexpmatcharray.md#every)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1310

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: string, `index`: number, `array`: string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: string, `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[fill](regexpmatcharray.md#fill)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:53

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[filter](regexpmatcharray.md#filter)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1337

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *string*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: string[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *string[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[filter](regexpmatcharray.md#filter)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1343

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *string[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[find](regexpmatcharray.md#find)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:31

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *string*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: string, `index`: number, `obj`: string[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | string |
`index` | number |
`obj` | string[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *string | undefined*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[find](regexpmatcharray.md#find)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:32

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: string, `index`: number, `obj`: string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`obj` | string[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *string | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[findIndex](regexpmatcharray.md#findindex)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:43

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: string, `index`: number, `obj`: string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`obj` | string[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[forEach](regexpmatcharray.md#foreach)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1325

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: string, `fromIndex?`: undefined | number): *boolean*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[includes](regexpmatcharray.md#includes)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

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

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[indexOf](regexpmatcharray.md#indexof)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1295

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

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[join](regexpmatcharray.md#join)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1247

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹number›*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[keys](regexpmatcharray.md#keys)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

Returns an iterable of keys in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: string, `fromIndex?`: undefined | number): *number*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[lastIndexOf](regexpmatcharray.md#lastindexof)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1301

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

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[map](regexpmatcharray.md#map)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1331

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: string, `index`: number, `array`: string[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  pop

▸ **pop**(): *string | undefined*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[pop](regexpmatcharray.md#pop)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1227

Removes the last element from an array and returns it.

**Returns:** *string | undefined*

___

###  push

▸ **push**(...`items`: string[]): *number*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[push](regexpmatcharray.md#push)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1232

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | string[] | New elements of the Array.  |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *string*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[reduce](regexpmatcharray.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1349

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | string[] |

**Returns:** *string*

▸ **reduce**(`callbackfn`: function, `initialValue`: string): *string*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[reduce](regexpmatcharray.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1350

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | string[] |

▪ **initialValue**: *string*

**Returns:** *string*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[reduce](regexpmatcharray.md#reduce)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1356

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: string, `currentIndex`: number, `array`: string[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | string |
`currentIndex` | number |
`array` | string[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *string*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[reduceRight](regexpmatcharray.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1362

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | string[] |

**Returns:** *string*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: string): *string*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[reduceRight](regexpmatcharray.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1363

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: string, `currentValue`: string, `currentIndex`: number, `array`: string[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string |
`currentValue` | string |
`currentIndex` | number |
`array` | string[] |

▪ **initialValue**: *string*

**Returns:** *string*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[reduceRight](regexpmatcharray.md#reduceright)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1369

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: string, `currentIndex`: number, `array`: string[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | string |
`currentIndex` | number |
`array` | string[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *string[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[reverse](regexpmatcharray.md#reverse)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1251

Reverses the elements in an Array.

**Returns:** *string[]*

___

###  shift

▸ **shift**(): *string | undefined*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[shift](regexpmatcharray.md#shift)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1255

Removes the first element from an array and returns it.

**Returns:** *string | undefined*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *string[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[slice](regexpmatcharray.md#slice)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1261

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

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[some](regexpmatcharray.md#some)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1319

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: string, `index`: number, `array`: string[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |
`array` | string[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[sort](regexpmatcharray.md#sort)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1271

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  splice

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): *string[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[splice](regexpmatcharray.md#splice)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1277

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount?` | undefined &#124; number | The number of elements to remove.  |

**Returns:** *string[]*

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: string[]): *string[]*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[splice](regexpmatcharray.md#splice)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1284

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount` | number | The number of elements to remove. |
`...items` | string[] | Elements to insert into the array in place of the deleted elements.  |

**Returns:** *string[]*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[toLocaleString](regexpmatcharray.md#tolocalestring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1223

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[toString](regexpmatcharray.md#tostring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1219

Returns a string representation of an array.

**Returns:** *string*

___

###  unshift

▸ **unshift**(...`items`: string[]): *number*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[unshift](regexpmatcharray.md#unshift)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1289

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | string[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹string›*

*Inherited from [RegExpMatchArray](regexpmatcharray.md).[values](regexpmatcharray.md#values)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

Returns an iterable of values in the array

**Returns:** *[IterableIterator](iterableiterator.md)‹string›*
