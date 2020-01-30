[typescript](../README.md) › [Globals](../globals.md) › [ArrayConstructor](arrayconstructor.md)

# Interface: ArrayConstructor

## Hierarchy

* **ArrayConstructor**

## Callable

▸ (`arrayLength?`: undefined | number): *any[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1377

**Parameters:**

Name | Type |
------ | ------ |
`arrayLength?` | undefined &#124; number |

**Returns:** *any[]*

▸ <**T**>(`arrayLength`: number): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1378

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrayLength` | number |

**Returns:** *T[]*

▸ <**T**>(...`items`: T[]): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1379

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...items` | T[] |

**Returns:** *T[]*

## Index

### Constructors

* [constructor](arrayconstructor.md#constructor)

### Properties

* [[Symbol.species]](arrayconstructor.md#[symbol.species])
* [prototype](arrayconstructor.md#prototype)

### Methods

* [from](arrayconstructor.md#from)
* [isArray](arrayconstructor.md#isarray)
* [of](arrayconstructor.md#of)

## Constructors

###  constructor

\+ **new ArrayConstructor**(`arrayLength?`: undefined | number): *any[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1374

**Parameters:**

Name | Type |
------ | ------ |
`arrayLength?` | undefined &#124; number |

**Returns:** *any[]*

\+ **new ArrayConstructor**<**T**>(`arrayLength`: number): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1375

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arrayLength` | number |

**Returns:** *T[]*

\+ **new ArrayConstructor**<**T**>(...`items`: T[]): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1376

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...items` | T[] |

**Returns:** *T[]*

## Properties

###  [Symbol.species]

• **[Symbol.species]**: *[ArrayConstructor](arrayconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:308

___

###  prototype

• **prototype**: *any[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1382

## Methods

###  from

▸ **from**<**T**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:72

Creates an array from an array-like object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arrayLike` | [ArrayLike](arraylike.md)‹T› | An array-like object to convert to an array.  |

**Returns:** *T[]*

▸ **from**<**T**, **U**>(`arrayLike`: [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *U[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:80

Creates an array from an iterable object.

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

▪ **arrayLike**: *[ArrayLike](arraylike.md)‹T›*

An array-like object to convert to an array.

▪ **mapfn**: *function*

A mapping function to call on every element of the array.

▸ (`v`: T, `k`: number): *U*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |
`k` | number |

▪`Optional`  **thisArg**: *any*

Value of 'this' used to invoke the mapfn.

**Returns:** *U[]*

▸ **from**<**T**>(`iterable`: [Iterable](iterable.md)‹T› | [ArrayLike](arraylike.md)‹T›): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

Creates an array from an iterable object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | [Iterable](iterable.md)‹T› &#124; [ArrayLike](arraylike.md)‹T› | An iterable object to convert to an array.  |

**Returns:** *T[]*

▸ **from**<**T**, **U**>(`iterable`: [Iterable](iterable.md)‹T› | [ArrayLike](arraylike.md)‹T›, `mapfn`: function, `thisArg?`: any): *U[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

Creates an array from an iterable object.

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

▪ **iterable**: *[Iterable](iterable.md)‹T› | [ArrayLike](arraylike.md)‹T›*

An iterable object to convert to an array.

▪ **mapfn**: *function*

A mapping function to call on every element of the array.

▸ (`v`: T, `k`: number): *U*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |
`k` | number |

▪`Optional`  **thisArg**: *any*

Value of 'this' used to invoke the mapfn.

**Returns:** *U[]*

___

###  isArray

▸ **isArray**(`arg`: any): *arg is any[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1381

**Parameters:**

Name | Type |
------ | ------ |
`arg` | any |

**Returns:** *arg is any[]*

___

###  of

▸ **of**<**T**>(...`items`: T[]): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:86

Returns a new array from a set of elements.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T[] | A set of elements to include in the new array object.  |

**Returns:** *T[]*
