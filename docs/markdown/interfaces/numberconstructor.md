[typescript](../README.md) › [Globals](../globals.md) › [NumberConstructor](numberconstructor.md)

# Interface: NumberConstructor

## Hierarchy

* **NumberConstructor**

## Callable

▸ (`value?`: any): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:572

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *number*

## Index

### Constructors

* [constructor](numberconstructor.md#constructor)

### Properties

* [EPSILON](numberconstructor.md#epsilon)
* [MAX_SAFE_INTEGER](numberconstructor.md#max_safe_integer)
* [MAX_VALUE](numberconstructor.md#max_value)
* [MIN_SAFE_INTEGER](numberconstructor.md#min_safe_integer)
* [MIN_VALUE](numberconstructor.md#min_value)
* [NEGATIVE_INFINITY](numberconstructor.md#negative_infinity)
* [NaN](numberconstructor.md#nan)
* [POSITIVE_INFINITY](numberconstructor.md#positive_infinity)
* [prototype](numberconstructor.md#prototype)

### Methods

* [isFinite](numberconstructor.md#isfinite)
* [isInteger](numberconstructor.md#isinteger)
* [isNaN](numberconstructor.md#isnan)
* [isSafeInteger](numberconstructor.md#issafeinteger)
* [parseFloat](numberconstructor.md#parsefloat)
* [parseInt](numberconstructor.md#parseint)

## Constructors

###  constructor

\+ **new NumberConstructor**(`value?`: any): *[Number](number.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:571

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Number](number.md)*

## Properties

###  EPSILON

• **EPSILON**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:219

The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
that is representable as a Number value, which is approximately:
2.2204460492503130808472633361816 x 10‍−‍16.

___

###  MAX_SAFE_INTEGER

• **MAX_SAFE_INTEGER**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:254

The value of the largest integer n such that n and n + 1 are both exactly representable as
a Number value.
The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.

___

###  MAX_VALUE

• **MAX_VALUE**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:577

The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308.

___

###  MIN_SAFE_INTEGER

• **MIN_SAFE_INTEGER**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:261

The value of the smallest integer n such that n and n − 1 are both exactly representable as
a Number value.
The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).

___

###  MIN_VALUE

• **MIN_VALUE**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:580

The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324.

___

###  NEGATIVE_INFINITY

• **NEGATIVE_INFINITY**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:592

A value that is less than the largest negative number that can be represented in JavaScript.
JavaScript displays NEGATIVE_INFINITY values as -infinity.

___

###  NaN

• **NaN**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:586

A value that is not a number.
In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.

___

###  POSITIVE_INFINITY

• **POSITIVE_INFINITY**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:598

A value greater than the largest number that can be represented in JavaScript.
JavaScript displays POSITIVE_INFINITY values as infinity.

___

###  prototype

• **prototype**: *[Number](number.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:574

## Methods

###  isFinite

▸ **isFinite**(`number`: number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:227

Returns true if passed value is finite.
Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
number. Only finite values of the type number, result in true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`number` | number | A numeric value.  |

**Returns:** *boolean*

___

###  isInteger

▸ **isInteger**(`number`: number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:233

Returns true if the value passed is an integer, false otherwise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`number` | number | A numeric value.  |

**Returns:** *boolean*

___

###  isNaN

▸ **isNaN**(`number`: number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:241

Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
to a number. Only values of the type number, that are also NaN, result in true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`number` | number | A numeric value.  |

**Returns:** *boolean*

___

###  isSafeInteger

▸ **isSafeInteger**(`number`: number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:247

Returns true if the value passed is a safe integer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`number` | number | A numeric value.  |

**Returns:** *boolean*

___

###  parseFloat

▸ **parseFloat**(`string`: string): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:267

Converts a string to a floating-point number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | A string that contains a floating-point number.  |

**Returns:** *number*

___

###  parseInt

▸ **parseInt**(`string`: string, `radix?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:276

Converts A string to an integer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | - |
`radix?` | undefined &#124; number | A value between 2 and 36 that specifies the base of the number in numString. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.  |

**Returns:** *number*
