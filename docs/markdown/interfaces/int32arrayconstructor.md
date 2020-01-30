[typescript](../README.md) › [Globals](../globals.md) › [Int32ArrayConstructor](int32arrayconstructor.md)

# Interface: Int32ArrayConstructor

## Hierarchy

* **Int32ArrayConstructor**

## Index

### Constructors

* [constructor](int32arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](int32arrayconstructor.md#bytes_per_element)
* [prototype](int32arrayconstructor.md#prototype)

### Methods

* [from](int32arrayconstructor.md#from)
* [of](int32arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Int32ArrayConstructor**(`length`: number): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3341

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Int32Array](int32array.md)*

\+ **new Int32ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3342

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Int32Array](int32array.md)*

\+ **new Int32ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3343

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Int32Array](int32array.md)*

\+ **new Int32ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:407

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Int32Array](int32array.md)*

\+ **new Int32ArrayConstructor**(): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:41

**Returns:** *[Int32Array](int32array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3349

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3341

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3361

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Int32Array](int32array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3369

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

**Returns:** *[Int32Array](int32array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:416

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Int32Array](int32array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Int32Array](int32array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3355

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Int32Array](int32array.md)*
