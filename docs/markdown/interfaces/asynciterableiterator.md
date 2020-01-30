[typescript](../README.md) › [Globals](../globals.md) › [AsyncIterableIterator](asynciterableiterator.md)

# Interface: AsyncIterableIterator <**T, TReturn, TNext**>

## Type parameters

▪ **T**

▪ **TReturn**

▪ **TNext**

## Hierarchy

* [AsyncIterator](asynciterator.md)‹T›

  ↳ **AsyncIterableIterator**

## Index

### Methods

* [[Symbol.asyncIterator]](asynciterableiterator.md#[symbol.asynciterator])
* [next](asynciterableiterator.md#next)
* [return](asynciterableiterator.md#optional-return)
* [throw](asynciterableiterator.md#optional-throw)

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](asynciterableiterator.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:44

**Returns:** *[AsyncIterableIterator](asynciterableiterator.md)‹T›*

___

###  next

▸ **next**(...`args`: [] | [TNext]): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

*Inherited from [AsyncIterator](asynciterator.md).[next](asynciterator.md#next)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [TNext] |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

___

### `Optional` return

▸ **return**(`value?`: TReturn | [PromiseLike](promiselike.md)‹TReturn›): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

*Inherited from [AsyncIterator](asynciterator.md).[return](asynciterator.md#optional-return)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`value?` | TReturn &#124; [PromiseLike](promiselike.md)‹TReturn› |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

___

### `Optional` throw

▸ **throw**(`e?`: any): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

*Inherited from [AsyncIterator](asynciterator.md).[throw](asynciterator.md#optional-throw)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`e?` | any |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*
