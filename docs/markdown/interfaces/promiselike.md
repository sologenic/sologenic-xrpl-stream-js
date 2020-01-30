[typescript](../README.md) › [Globals](../globals.md) › [PromiseLike](promiselike.md)

# Interface: PromiseLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **PromiseLike**

## Index

### Methods

* [then](promiselike.md#then)

## Methods

###  then

▸ **then**<**TResult1**, **TResult2**>(`onfulfilled?`: function | undefined | null, `onrejected?`: function | undefined | null): *[PromiseLike](promiselike.md)‹TResult1 | TResult2›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1410

Attaches callbacks for the resolution and/or rejection of the Promise.

**Type parameters:**

▪ **TResult1**

▪ **TResult2**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onfulfilled?` | function &#124; undefined &#124; null | The callback to execute when the Promise is resolved. |
`onrejected?` | function &#124; undefined &#124; null | The callback to execute when the Promise is rejected. |

**Returns:** *[PromiseLike](promiselike.md)‹TResult1 | TResult2›*

A Promise for the completion of which ever callback is executed.
