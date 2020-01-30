[typescript](../README.md) › [Globals](../globals.md) › [BigInt64ArrayConstructor](bigint64arrayconstructor.md)

# Interface: BigInt64ArrayConstructor

## Hierarchy

* **BigInt64ArrayConstructor**

## Index

### Constructors

* [constructor](bigint64arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](bigint64arrayconstructor.md#bytes_per_element)
* [prototype](bigint64arrayconstructor.md#prototype)

### Methods

* [from](bigint64arrayconstructor.md#from)
* [of](bigint64arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new BigInt64ArrayConstructor**(`length?`: undefined | number): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:302

**Parameters:**

Name | Type |
------ | ------ |
`length?` | undefined &#124; number |

**Returns:** *[BigInt64Array](bigint64array.md)*

\+ **new BigInt64ArrayConstructor**(`array`: [Iterable](iterable.md)‹bigint›): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:303

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Iterable](iterable.md)‹bigint› |

**Returns:** *[BigInt64Array](bigint64array.md)*

\+ **new BigInt64ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset?`: undefined | number, `length?`: undefined | number): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:304

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset?` | undefined &#124; number |
`length?` | undefined &#124; number |

**Returns:** *[BigInt64Array](bigint64array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:308

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:302

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹bigint›): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:322

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹bigint› | An array-like or iterable object to convert to an array. |

**Returns:** *[BigInt64Array](bigint64array.md)*

▸ **from**<**U**>(`arrayLike`: [ArrayLike](arraylike.md)‹U›, `mapfn`: function, `thisArg?`: any): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:323

**Type parameters:**

▪ **U**

**Parameters:**

▪ **arrayLike**: *[ArrayLike](arraylike.md)‹U›*

▪ **mapfn**: *function*

▸ (`v`: U, `k`: number): *bigint*

**Parameters:**

Name | Type |
------ | ------ |
`v` | U |
`k` | number |

▪`Optional`  **thisArg**: *any*

**Returns:** *[BigInt64Array](bigint64array.md)*

___

###  of

▸ **of**(...`items`: bigint[]): *[BigInt64Array](bigint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:314

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | bigint[] | A set of elements to include in the new array object.  |

**Returns:** *[BigInt64Array](bigint64array.md)*
