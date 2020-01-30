[typescript](../README.md) › [Globals](../globals.md) › [AsyncIterator](asynciterator.md)

# Interface: AsyncIterator <**T, TReturn, TNext**>

## Type parameters

▪ **T**

▪ **TReturn**

▪ **TNext**

## Hierarchy

* **AsyncIterator**

  ↳ [AsyncGenerator](asyncgenerator.md)

  ↳ [AsyncIterableIterator](asynciterableiterator.md)

## Index

### Methods

* [next](asynciterator.md#next)
* [return](asynciterator.md#optional-return)
* [throw](asynciterator.md#optional-throw)

## Methods

###  next

▸ **next**(...`args`: [] | [TNext]): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [TNext] |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

___

### `Optional` return

▸ **return**(`value?`: TReturn | [PromiseLike](promiselike.md)‹TReturn›): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`value?` | TReturn &#124; [PromiseLike](promiselike.md)‹TReturn› |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

___

### `Optional` throw

▸ **throw**(`e?`: any): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`e?` | any |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*
