[typescript](../README.md) › [Globals](../globals.md) › [AsyncGenerator](asyncgenerator.md)

# Interface: AsyncGenerator <**T, TReturn, TNext**>

## Type parameters

▪ **T**

▪ **TReturn**

▪ **TNext**

## Hierarchy

* [AsyncIterator](asynciterator.md)‹T, TReturn, TNext›

  ↳ **AsyncGenerator**

## Index

### Methods

* [[Symbol.asyncIterator]](asyncgenerator.md#[symbol.asynciterator])
* [next](asyncgenerator.md#next)
* [return](asyncgenerator.md#return)
* [throw](asyncgenerator.md#throw)

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncGenerator](asyncgenerator.md)‹T, TReturn, TNext›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:28

**Returns:** *[AsyncGenerator](asyncgenerator.md)‹T, TReturn, TNext›*

___

###  next

▸ **next**(...`args`: [] | [TNext]): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

*Overrides [AsyncIterator](asynciterator.md).[next](asynciterator.md#next)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [TNext] |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

___

###  return

▸ **return**(`value`: TReturn | [PromiseLike](promiselike.md)‹TReturn›): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

*Overrides [AsyncIterator](asynciterator.md).[return](asynciterator.md#optional-return)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`value` | TReturn &#124; [PromiseLike](promiselike.md)‹TReturn› |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

___

###  throw

▸ **throw**(`e`: any): *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*

*Overrides [AsyncIterator](asynciterator.md).[throw](asynciterator.md#optional-throw)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *[Promise](promise.md)‹[IteratorResult](../globals.md#iteratorresult)‹T, TReturn››*
