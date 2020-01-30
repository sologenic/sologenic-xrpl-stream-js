[typescript](../README.md) › [Globals](../globals.md) › [Float64ArrayConstructor](float64arrayconstructor.md)

# Interface: Float64ArrayConstructor

## Hierarchy

* **Float64ArrayConstructor**

## Index

### Constructors

* [constructor](float64arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](float64arrayconstructor.md#bytes_per_element)
* [prototype](float64arrayconstructor.md#prototype)

### Methods

* [from](float64arrayconstructor.md#from)
* [of](float64arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Float64ArrayConstructor**(`length`: number): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4169

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Float64Array](float64array.md)*

\+ **new Float64ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4170

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Float64Array](float64array.md)*

\+ **new Float64ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4171

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Float64Array](float64array.md)*

\+ **new Float64ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:491

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Float64Array](float64array.md)*

\+ **new Float64ArrayConstructor**(): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:53

**Returns:** *[Float64Array](float64array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4177

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4169

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4189

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Float64Array](float64array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4197

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

**Returns:** *[Float64Array](float64array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:500

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Float64Array](float64array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Float64Array](float64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4183

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Float64Array](float64array.md)*
