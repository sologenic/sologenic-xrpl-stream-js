[typescript](../README.md) › [Globals](../globals.md) › [Int8ArrayConstructor](int8arrayconstructor.md)

# Interface: Int8ArrayConstructor

## Hierarchy

* **Int8ArrayConstructor**

## Index

### Constructors

* [constructor](int8arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](int8arrayconstructor.md#bytes_per_element)
* [prototype](int8arrayconstructor.md#prototype)

### Methods

* [from](int8arrayconstructor.md#from)
* [of](int8arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Int8ArrayConstructor**(`length`: number): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1946

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Int8Array](int8array.md)*

\+ **new Int8ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1947

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Int8Array](int8array.md)*

\+ **new Int8ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1948

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Int8Array](int8array.md)*

\+ **new Int8ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:262

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Int8Array](int8array.md)*

\+ **new Int8ArrayConstructor**(): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:21

**Returns:** *[Int8Array](int8array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1954

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1946

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1966

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Int8Array](int8array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1974

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

**Returns:** *[Int8Array](int8array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:271

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Int8Array](int8array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Int8Array](int8array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1960

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Int8Array](int8array.md)*
