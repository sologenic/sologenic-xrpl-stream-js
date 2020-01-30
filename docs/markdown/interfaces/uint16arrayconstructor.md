[typescript](../README.md) › [Globals](../globals.md) › [Uint16ArrayConstructor](uint16arrayconstructor.md)

# Interface: Uint16ArrayConstructor

## Hierarchy

* **Uint16ArrayConstructor**

## Index

### Constructors

* [constructor](uint16arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](uint16arrayconstructor.md#bytes_per_element)
* [prototype](uint16arrayconstructor.md#prototype)

### Methods

* [from](uint16arrayconstructor.md#from)
* [of](uint16arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new Uint16ArrayConstructor**(`length`: number): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3062

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *[Uint16Array](uint16array.md)*

\+ **new Uint16ArrayConstructor**(`arrayOrArrayBuffer`: [ArrayLike](arraylike.md)‹number› | [ArrayBufferLike](../globals.md#arraybufferlike)): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3063

**Parameters:**

Name | Type |
------ | ------ |
`arrayOrArrayBuffer` | [ArrayLike](arraylike.md)‹number› &#124; [ArrayBufferLike](../globals.md#arraybufferlike) |

**Returns:** *[Uint16Array](uint16array.md)*

\+ **new Uint16ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset`: number, `length?`: undefined | number): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3064

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset` | number |
`length?` | undefined &#124; number |

**Returns:** *[Uint16Array](uint16array.md)*

\+ **new Uint16ArrayConstructor**(`elements`: [Iterable](iterable.md)‹number›): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:379

**Parameters:**

Name | Type |
------ | ------ |
`elements` | [Iterable](iterable.md)‹number› |

**Returns:** *[Uint16Array](uint16array.md)*

\+ **new Uint16ArrayConstructor**(): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:37

**Returns:** *[Uint16Array](uint16array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3070

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3062

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹number›): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3082

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹number› | An array-like or iterable object to convert to an array.  |

**Returns:** *[Uint16Array](uint16array.md)*

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3090

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

**Returns:** *[Uint16Array](uint16array.md)*

▸ **from**(`arrayLike`: [Iterable](iterable.md)‹number›, `mapfn?`: undefined | function, `thisArg?`: any): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:388

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [Iterable](iterable.md)‹number› | An array-like or iterable object to convert to an array. |
`mapfn?` | undefined &#124; function | A mapping function to call on every element of the array. |
`thisArg?` | any | Value of 'this' used to invoke the mapfn.  |

**Returns:** *[Uint16Array](uint16array.md)*

___

###  of

▸ **of**(...`items`: number[]): *[Uint16Array](uint16array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:3076

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | number[] | A set of elements to include in the new array object.  |

**Returns:** *[Uint16Array](uint16array.md)*
