[typescript](../README.md) › [Globals](../globals.md) › [Uint8ClampedArrayConstructor](uint8clampedarrayconstructor.md)

# Interface: Uint8ClampedArrayConstructor

## Hierarchy

* **Uint8ClampedArrayConstructor**

## Index

### Constructors

* [constructor](uint8clampedarrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](uint8clampedarrayconstructor.md#bytes_per_element)
* [prototype](uint8clampedarrayconstructor.md#prototype)

### Methods

* [from](uint8clampedarrayconstructor.md#from)
* [of](uint8clampedarrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Uint8ClampedArrayConstructor**(`length`: number): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2505

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

\+ **new Uint8ClampedArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2506

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

\+ **new Uint8ClampedArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2507

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

\+ **new Uint8ClampedArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:320

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

\+ **new Uint8ClampedArrayConstructor**(): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:29

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2513

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2505

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2525

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2533

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

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:330

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Uint8ClampedArray](uint8clampedarray.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2519

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Uint8ClampedArray](uint8clampedarray.md)*
