[typescript](../README.md) › [Globals](../globals.md) › [Promise](promise.md)

# Interface: Promise <**T, T, T, T**>

Represents the completion of an asynchronous operation
Represents the completion of an asynchronous operation

## Type parameters

▪ **T**

▪ **T**

▪ **T**

▪ **T**

## Hierarchy

* **Promise**

  ↳ [PromiseWithChild](_child_process_.promisewithchild.md)

## Index

### Properties

* [[Symbol.toStringTag]](promise.md#[symbol.tostringtag])

### Methods

* [catch](promise.md#catch)
* [finally](promise.md#finally)
* [then](promise.md#then)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:169

## Methods

###  catch

▸ **catch**<**TResult**>(`onrejected?`: function | undefined | null): *[Promise](promise.md)‹T | TResult›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1430

Attaches a callback for only the rejection of the Promise.

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onrejected?` | function &#124; undefined &#124; null | The callback to execute when the Promise is rejected. |

**Returns:** *[Promise](promise.md)‹T | TResult›*

A Promise for the completion of the callback.

___

###  finally

▸ **finally**(`onfinally?`: function | undefined | null): *[Promise](promise.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.promise.d.ts:31

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onfinally?` | function &#124; undefined &#124; null | The callback to execute when the Promise is settled (fulfilled or rejected). |

**Returns:** *[Promise](promise.md)‹T›*

A Promise for the completion of the callback.

___

###  then

▸ **then**<**TResult1**, **TResult2**>(`onfulfilled?`: function | undefined | null, `onrejected?`: function | undefined | null): *[Promise](promise.md)‹TResult1 | TResult2›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1423

Attaches callbacks for the resolution and/or rejection of the Promise.

**Type parameters:**

▪ **TResult1**

▪ **TResult2**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onfulfilled?` | function &#124; undefined &#124; null | The callback to execute when the Promise is resolved. |
`onrejected?` | function &#124; undefined &#124; null | The callback to execute when the Promise is rejected. |

**Returns:** *[Promise](promise.md)‹TResult1 | TResult2›*

A Promise for the completion of which ever callback is executed.
