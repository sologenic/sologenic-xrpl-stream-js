[typescript](../README.md) › [Globals](../globals.md) › [Generator](generator.md)

# Interface: Generator <**T, TReturn, TNext**>

## Type parameters

▪ **T**

▪ **TReturn**

▪ **TNext**

## Hierarchy

* [Iterator](iterator.md)‹T, TReturn, TNext›

  ↳ **Generator**

## Index

### Methods

* [[Symbol.iterator]](generator.md#[symbol.iterator])
* [next](generator.md#next)
* [return](generator.md#return)
* [throw](generator.md#throw)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[Generator](generator.md)‹T, TReturn, TNext›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.generator.d.ts:28

**Returns:** *[Generator](generator.md)‹T, TReturn, TNext›*

___

###  next

▸ **next**(...`args`: [] | [TNext]): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

*Overrides [Iterator](iterator.md).[next](iterator.md#next)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.generator.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [TNext] |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

___

###  return

▸ **return**(`value`: TReturn): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

*Overrides [Iterator](iterator.md).[return](iterator.md#optional-return)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.generator.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`value` | TReturn |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

___

###  throw

▸ **throw**(`e`: any): *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*

*Overrides [Iterator](iterator.md).[throw](iterator.md#optional-throw)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.generator.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *[IteratorResult](../globals.md#iteratorresult)‹T, TReturn›*
