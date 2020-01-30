[typescript](../README.md) › [Globals](../globals.md) › [Map](map.md)

# Interface: Map <**K, V, K, V, K, V**>

## Type parameters

▪ **K**

▪ **V**

▪ **K**

▪ **V**

▪ **K**

▪ **V**

## Hierarchy

* **Map**

## Index

### Properties

* [[Symbol.toStringTag]](map.md#[symbol.tostringtag])
* [size](map.md#size)

### Methods

* [[Symbol.iterator]](map.md#[symbol.iterator])
* [clear](map.md#clear)
* [delete](map.md#delete)
* [entries](map.md#entries)
* [forEach](map.md#foreach)
* [get](map.md#get)
* [has](map.md#has)
* [keys](map.md#keys)
* [set](map.md#set)
* [values](map.md#values)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  size

• **size**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹[K, V]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *[IterableIterator](iterableiterator.md)‹[K, V]›*

___

###  clear

▸ **clear**(): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: K): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[K, V]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *[IterableIterator](iterableiterator.md)‹[K, V]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V, `key`: K, `map`: [Map](map.md)‹K, V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`key` | K |
`map` | [Map](map.md)‹K, V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V | undefined*

___

###  has

▸ **has**(`key`: K): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹K›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *[IterableIterator](iterableiterator.md)‹K›*

___

###  set

▸ **set**(`key`: K, `value`: V): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *this*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹V›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *[IterableIterator](iterableiterator.md)‹V›*
