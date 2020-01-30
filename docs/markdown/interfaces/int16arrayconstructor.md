[typescript](../README.md) › [Globals](../globals.md) › [Int16ArrayConstructor](int16arrayconstructor.md)

# Interface: Int16ArrayConstructor

## Hierarchy

* **Int16ArrayConstructor**

## Index

### Constructors

* [constructor](int16arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](int16arrayconstructor.md#bytes_per_element)
* [prototype](int16arrayconstructor.md#prototype)

### Methods

* [from](int16arrayconstructor.md#from)
* [of](int16arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Int16ArrayConstructor**(`length`: number): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2782

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Int16Array](int16array.md)*

\+ **new Int16ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2783

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Int16Array](int16array.md)*

\+ **new Int16ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2784

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Int16Array](int16array.md)*

\+ **new Int16ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:351

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Int16Array](int16array.md)*

\+ **new Int16ArrayConstructor**(): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:33

**Returns:** *[Int16Array](int16array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2790

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2782

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2802

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Int16Array](int16array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2810

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

**Returns:** *[Int16Array](int16array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:360

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Int16Array](int16array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Int16Array](int16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:2796

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Int16Array](int16array.md)*
