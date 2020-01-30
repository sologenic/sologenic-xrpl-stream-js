[typescript](../README.md) › [Globals](../globals.md) › [Set](set.md)

# Interface: Set <**T, T, T**>

## Type parameters

▪ **T**

▪ **T**

▪ **T**

## Hierarchy

* **Set**

## Index

### Properties

* [[Symbol.toStringTag]](set.md#[symbol.tostringtag])
* [size](set.md#size)

### Methods

* [[Symbol.iterator]](set.md#[symbol.iterator])
* [add](set.md#add)
* [clear](set.md#clear)
* [delete](set.md#delete)
* [entries](set.md#entries)
* [forEach](set.md#foreach)
* [has](set.md#has)
* [keys](set.md#keys)
* [values](set.md#values)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  size

• **size**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:64

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*

___

###  add

▸ **add**(`value`: T): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: T): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *[IterableIterator](iterableiterator.md)‹[T, T]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *[IterableIterator](iterableiterator.md)‹[T, T]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: T, `value2`: T, `set`: [Set](set.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`value2` | T |
`set` | [Set](set.md)‹T› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: T): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*

___

###  values

▸ **values**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*
