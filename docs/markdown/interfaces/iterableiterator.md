[typescript](../README.md) › [Globals](../globals.md) › [IterableIterator](iterableiterator.md)

# Interface: IterableIterator <**T, TReturn, TNext**>

## Type parameters

▪ **T**

▪ **TReturn**

▪ **TNext**

## Hierarchy

* [Iterator](iterator.md)‹T›

  ↳ **IterableIterator**

## Index

### Methods

* [[Symbol.iterator]](iterableiterator.md#[symbol.iterator])
* [next](iterableiterator.md#next)
* [return](iterableiterator.md#optional-return)
* [throw](iterableiterator.md#optional-throw)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:55

**Returns:** *[IterableIterator](iterableiterator.md)‹T›*

___

###  next

▸ **next**(...`args`: [] | [TNext]): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

*Inherited from [Iterator](iterator.md).[next](iterator.md#next)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [TNext] |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

___

### `Optional` return

▸ **return**(`value?`: TReturn): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

*Inherited from [Iterator](iterator.md).[return](iterator.md#optional-return)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`value?` | TReturn |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

___

### `Optional` throw

▸ **throw**(`e?`: any): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

*Inherited from [Iterator](iterator.md).[throw](iterator.md#optional-throw)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`e?` | any |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*
