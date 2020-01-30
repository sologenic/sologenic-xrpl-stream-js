[typescript](../README.md) › [Globals](../globals.md) › [Iterator](iterator.md)

# Interface: Iterator <**T, TReturn, TNext**>

## Type parameters

▪ **T**

▪ **TReturn**

▪ **TNext**

## Hierarchy

* **Iterator**

  ↳ [Generator](generator.md)

  ↳ [IterableIterator](iterableiterator.md)

## Index

### Methods

* [next](iterator.md#next)
* [return](iterator.md#optional-return)
* [throw](iterator.md#optional-throw)

## Methods

###  next

▸ **next**(...`args`: [] | [TNext]): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [TNext] |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

___

### `Optional` return

▸ **return**(`value?`: TReturn): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`value?` | TReturn |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

___

### `Optional` throw

▸ **throw**(`e?`: any): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`e?` | any |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*
