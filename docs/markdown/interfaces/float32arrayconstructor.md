[typescript](../README.md) › [Globals](../globals.md) › [Float32ArrayConstructor](float32arrayconstructor.md)

# Interface: Float32ArrayConstructor

## Hierarchy

* **Float32ArrayConstructor**

## Index

### Constructors

* [constructor](float32arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](float32arrayconstructor.md#bytes_per_element)
* [prototype](float32arrayconstructor.md#prototype)

### Methods

* [from](float32arrayconstructor.md#from)
* [of](float32arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Float32ArrayConstructor**(`length`: number): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3898

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Float32Array](float32array.md)*

\+ **new Float32ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3899

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Float32Array](float32array.md)*

\+ **new Float32ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3900

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Float32Array](float32array.md)*

\+ **new Float32ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:463

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Float32Array](float32array.md)*

\+ **new Float32ArrayConstructor**(): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:49

**Returns:** *[Float32Array](float32array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3906

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3898

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3918

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Float32Array](float32array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3926

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

**Returns:** *[Float32Array](float32array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:472

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Float32Array](float32array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Float32Array](float32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3912

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Float32Array](float32array.md)*
