[typescript](../README.md) › [Globals](../globals.md) › ["child_process"](../modules/_child_process_.md) › [PromiseWithChild](_child_process_.promisewithchild.md)

# Interface: PromiseWithChild <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Promise](promise.md)‹T›

  ↳ **PromiseWithChild**

## Index

### Properties

* [Promise](_child_process_.promisewithchild.md#promise)
* [[Symbol.toStringTag]](_child_process_.promisewithchild.md#[symbol.tostringtag])
* [child](_child_process_.promisewithchild.md#child)

### Methods

* [catch](_child_process_.promisewithchild.md#catch)
* [finally](_child_process_.promisewithchild.md#finally)
* [then](_child_process_.promisewithchild.md#then)

## Properties

###  Promise

• **Promise**: *[PromiseConstructor](promiseconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:152

___

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [Promise](promise.md).[[Symbol.toStringTag]](promise.md#[symbol.tostringtag])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:169

___

###  child

• **child**: *[ChildProcess](_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:289

## Methods

###  catch

▸ **catch**<**TResult**>(`onrejected?`: function | undefined | null): *[Promise](promise.md)‹T | TResult›*

*Inherited from [Promise](promise.md).[catch](promise.md#catch)*

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

*Inherited from [Promise](promise.md).[finally](promise.md#finally)*

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

*Inherited from [Promise](promise.md).[then](promise.md#then)*

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
