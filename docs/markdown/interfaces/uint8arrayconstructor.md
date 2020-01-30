[typescript](../README.md) › [Globals](../globals.md) › [Uint8ArrayConstructor](uint8arrayconstructor.md)

# Interface: Uint8ArrayConstructor

## Hierarchy

* **Uint8ArrayConstructor**

## Index

### Constructors

* [constructor](uint8arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](uint8arrayconstructor.md#bytes_per_element)
* [prototype](uint8arrayconstructor.md#prototype)

### Methods

* [from](uint8arrayconstructor.md#from)
* [of](uint8arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Uint8ArrayConstructor**(`length`: number): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2226

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Uint8Array](uint8array.md)*

\+ **new Uint8ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2227

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Uint8Array](uint8array.md)*

\+ **new Uint8ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2228

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Uint8Array](uint8array.md)*

\+ **new Uint8ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:290

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Uint8Array](uint8array.md)*

\+ **new Uint8ArrayConstructor**(): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:25

**Returns:** *[Uint8Array](uint8array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2234

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2226

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2246

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Uint8Array](uint8array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2254

Creates an array from an array-like or iterable object.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **arrayLike**: *[ArrayLike](arraylike.md)‹T›*

An array-like or iterable object to convert to an array.

▪ **mapfn**: *function*

A mapping function to call on every element of the array.

▸ (`v`: T, `k`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |
`k` | number |

▪`Optional`  **thisArg**: *any*

Value of 'this' used to invoke the mapfn.

**Returns:** *[Uint8Array](uint8array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:299

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Uint8Array](uint8array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Uint8Array](uint8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2240

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Uint8Array](uint8array.md)*
