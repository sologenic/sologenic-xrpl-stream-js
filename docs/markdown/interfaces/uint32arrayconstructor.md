[typescript](../README.md) › [Globals](../globals.md) › [Uint32ArrayConstructor](uint32arrayconstructor.md)

# Interface: Uint32ArrayConstructor

## Hierarchy

* **Uint32ArrayConstructor**

## Index

### Constructors

* [constructor](uint32arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](uint32arrayconstructor.md#bytes_per_element)
* [prototype](uint32arrayconstructor.md#prototype)

### Methods

* [from](uint32arrayconstructor.md#from)
* [of](uint32arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Uint32ArrayConstructor**(`length`: number): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3619

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Uint32Array](uint32array.md)*

\+ **new Uint32ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3620

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Uint32Array](uint32array.md)*

\+ **new Uint32ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3621

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Uint32Array](uint32array.md)*

\+ **new Uint32ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:435

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Uint32Array](uint32array.md)*

\+ **new Uint32ArrayConstructor**(): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:45

**Returns:** *[Uint32Array](uint32array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3627

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3619

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3639

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Uint32Array](uint32array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3647

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

**Returns:** *[Uint32Array](uint32array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:444

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Uint32Array](uint32array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Uint32Array](uint32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3633

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Uint32Array](uint32array.md)*
