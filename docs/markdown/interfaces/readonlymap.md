[typescript](../README.md) › [Globals](../globals.md) › [ReadonlyMap](readonlymap.md)

# Interface: ReadonlyMap <**K, V, K, V**>

## Type parameters

▪ **K**

▪ **V**

▪ **K**

▪ **V**

## Hierarchy

* **ReadonlyMap**

## Index

### Properties

* [size](readonlymap.md#size)

### Methods

* [[Symbol.iterator]](readonlymap.md#[symbol.iterator])
* [entries](readonlymap.md#entries)
* [forEach](readonlymap.md#foreach)
* [get](readonlymap.md#get)
* [has](readonlymap.md#has)
* [keys](readonlymap.md#keys)
* [values](readonlymap.md#values)

## Properties

###  size

• **size**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:42

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹[K, V]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:141

Returns an iterable of entries in the map.

**Returns:** *[IterableIterator](iterableiterator.md)‹[K, V]›*

___

###  entries

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[K, V]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:146

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *[IterableIterator](iterableiterator.md)‹[K, V]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:39

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V, `key`: K, `map`: [ReadonlyMap](readonlymap.md)‹K, V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`key` | K |
`map` | [ReadonlyMap](readonlymap.md)‹K, V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V | undefined*

___

###  has

▸ **has**(`key`: K): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹K›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:151

Returns an iterable of keys in the map

**Returns:** *[IterableIterator](iterableiterator.md)‹K›*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹V›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:156

Returns an iterable of values in the map

**Returns:** *[IterableIterator](iterableiterator.md)‹V›*
