[typescript](../README.md) › [Globals](../globals.md) › [BigUint64ArrayConstructor](biguint64arrayconstructor.md)

# Interface: BigUint64ArrayConstructor

## Hierarchy

* **BigUint64ArrayConstructor**

## Index

### Constructors

* [constructor](biguint64arrayconstructor.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](biguint64arrayconstructor.md#bytes_per_element)
* [prototype](biguint64arrayconstructor.md#prototype)

### Methods

* [from](biguint64arrayconstructor.md#from)
* [of](biguint64arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new BigUint64ArrayConstructor**(`length?`: undefined | number): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:571

**Parameters:**

Name | Type |
------ | ------ |
`length?` | undefined &#124; number |

**Returns:** *[BigUint64Array](biguint64array.md)*

\+ **new BigUint64ArrayConstructor**(`array`: [Iterable](iterable.md)‹bigint›): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:572

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Iterable](iterable.md)‹bigint› |

**Returns:** *[BigUint64Array](biguint64array.md)*

\+ **new BigUint64ArrayConstructor**(`buffer`: [ArrayBufferLike](../globals.md#arraybufferlike), `byteOffset?`: undefined | number, `length?`: undefined | number): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:573

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [ArrayBufferLike](../globals.md#arraybufferlike) |
`byteOffset?` | undefined &#124; number |
`length?` | undefined &#124; number |

**Returns:** *[BigUint64Array](biguint64array.md)*

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:577

The size in bytes of each element in the array.

___

###  prototype

• **prototype**: *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:571

## Methods

###  from

▸ **from**(`arrayLike`: [ArrayLike](arraylike.md)‹bigint›): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:591

Creates an array from an array-like or iterable object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹bigint› | An array-like or iterable object to convert to an array. |

**Returns:** *[BigUint64Array](biguint64array.md)*

▸ **from**<**U**>(`arrayLike`: [ArrayLike](arraylike.md)‹U›, `mapfn`: function, `thisArg?`: any): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:592

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

**Returns:** *[BigUint64Array](biguint64array.md)*

___

###  of

▸ **of**(...`items`: bigint[]): *[BigUint64Array](biguint64array.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.bigint.d.ts:583

Returns a new array from a set of elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | bigint[] | A set of elements to include in the new array object.  |

**Returns:** *[BigUint64Array](biguint64array.md)*
