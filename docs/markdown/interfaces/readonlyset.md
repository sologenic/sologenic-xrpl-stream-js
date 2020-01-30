[typescript](../README.md) › [Globals](../globals.md) › [ReadonlySet](readonlyset.md)

# Interface: ReadonlySet <**T, T**>

## Type parameters

▪ **T**

▪ **T**

## Hierarchy

* **ReadonlySet**

## Index

### Properties

* [size](readonlyset.md#size)

### Methods

* [[Symbol.iterator]](readonlyset.md#[symbol.iterator])
* [entries](readonlyset.md#entries)
* [forEach](readonlyset.md#foreach)
* [has](readonlyset.md#has)
* [keys](readonlyset.md#keys)
* [values](readonlyset.md#values)

## Properties

###  size

• **size**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:76

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:189

Iterates over values in the set.

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*

___

###  entries

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[T, T]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:194

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *[IterableIterator](iterableiterator.md)‹[T, T]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:74

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: T, `value2`: T, `set`: [ReadonlySet](readonlyset.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`value2` | T |
`set` | [ReadonlySet](readonlyset.md)‹T› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: T): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:75

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:199

Despite its name, returns an iterable of the values in the set,

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:204

Returns an iterable of values in the set.

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*
