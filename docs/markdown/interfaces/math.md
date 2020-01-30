[typescript](../README.md) › [Globals](../globals.md) › [Math](math.md)

# Interface: Math

## Hierarchy

* **Math**

## Index

### Properties

* [E](math.md#e)
* [LN10](math.md#ln10)
* [LN2](math.md#ln2)
* [LOG10E](math.md#log10e)
* [LOG2E](math.md#log2e)
* [PI](math.md#pi)
* [SQRT1_2](math.md#sqrt1_2)
* [SQRT2](math.md#sqrt2)
* [[Symbol.toStringTag]](math.md#[symbol.tostringtag])

### Methods

* [abs](math.md#abs)
* [acos](math.md#acos)
* [acosh](math.md#acosh)
* [asin](math.md#asin)
* [asinh](math.md#asinh)
* [atan](math.md#atan)
* [atan2](math.md#atan2)
* [atanh](math.md#atanh)
* [cbrt](math.md#cbrt)
* [ceil](math.md#ceil)
* [clz32](math.md#clz32)
* [cos](math.md#cos)
* [cosh](math.md#cosh)
* [exp](math.md#exp)
* [expm1](math.md#expm1)
* [floor](math.md#floor)
* [fround](math.md#fround)
* [hypot](math.md#hypot)
* [imul](math.md#imul)
* [log](math.md#log)
* [log10](math.md#log10)
* [log1p](math.md#log1p)
* [log2](math.md#log2)
* [max](math.md#max)
* [min](math.md#min)
* [pow](math.md#pow)
* [random](math.md#random)
* [round](math.md#round)
* [sign](math.md#sign)
* [sin](math.md#sin)
* [sinh](math.md#sinh)
* [sqrt](math.md#sqrt)
* [tan](math.md#tan)
* [tanh](math.md#tanh)
* [trunc](math.md#trunc)

## Properties

###  E

• **E**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:619

The mathematical constant e. This is Euler's number, the base of natural logarithms.

___

###  LN10

• **LN10**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:621

The natural logarithm of 10.

___

###  LN2

• **LN2**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:623

The natural logarithm of 2.

___

###  LOG10E

• **LOG10E**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:627

The base-10 logarithm of e.

___

###  LOG2E

• **LOG2E**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:625

The base-2 logarithm of e.

___

###  PI

• **PI**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:629

Pi. This is the ratio of the circumference of a circle to its diameter.

___

###  SQRT1_2

• **SQRT1_2**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:631

The square root of 0.5, or, equivalently, one divided by the square root of 2.

___

###  SQRT2

• **SQRT2**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:633

The square root of 2.

___

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:165

## Methods

###  abs

▸ **abs**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:639

Returns the absolute value of a number (the value without regard to whether it is positive or negative).
For example, the absolute value of -5 is the same as the absolute value of 5.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression for which the absolute value is needed.  |

**Returns:** *number*

___

###  acos

▸ **acos**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:644

Returns the arc cosine (or inverse cosine) of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  acosh

▸ **acosh**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:168

Returns the inverse hyperbolic cosine of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  asin

▸ **asin**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:649

Returns the arcsine of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  asinh

▸ **asinh**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:174

Returns the inverse hyperbolic sine of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  atan

▸ **atan**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:654

Returns the arctangent of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression for which the arctangent is needed.  |

**Returns:** *number*

___

###  atan2

▸ **atan2**(`y`: number, `x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:660

Returns the angle (in radians) from the X axis to a point.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | A numeric expression representing the cartesian y-coordinate. |
`x` | number | A numeric expression representing the cartesian x-coordinate.  |

**Returns:** *number*

___

###  atanh

▸ **atanh**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:180

Returns the inverse hyperbolic tangent of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  cbrt

▸ **cbrt**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:210

Returns an implementation-dependent approximation to the cube root of number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  ceil

▸ **ceil**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:665

Returns the smallest integer greater than or equal to its numeric argument.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  clz32

▸ **clz32**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:105

Returns the number of leading zero bits in the 32-bit binary representation of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  cos

▸ **cos**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:670

Returns the cosine of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  cosh

▸ **cosh**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:150

Returns the hyperbolic cosine of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  exp

▸ **exp**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:675

Returns e (the base of natural logarithms) raised to a power.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression representing the power of e.  |

**Returns:** *number*

___

###  expm1

▸ **expm1**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:144

Returns the result of (e^x - 1), which is an implementation-dependent approximation to
subtracting 1 from the exponential function of x (e raised to the power of x, where e
is the base of the natural logarithms).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  floor

▸ **floor**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:680

Returns the greatest integer less than or equal to its numeric argument.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  fround

▸ **fround**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:204

Returns the nearest single precision float representation of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  hypot

▸ **hypot**(...`values`: number[]): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:191

Returns the square root of the sum of squares of its arguments.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...values` | number[] | Values to compute the square root for.     If no arguments are passed, the result is +0.     If there is only one argument, the result is the absolute value.     If any argument is +Infinity or -Infinity, the result is +Infinity.     If any argument is NaN, the result is NaN.     If all arguments are either +0 or −0, the result is +0.  |

**Returns:** *number*

___

###  imul

▸ **imul**(`x`: number, `y`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:112

Returns the result of 32-bit multiplication of two numbers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | First number |
`y` | number | Second number  |

**Returns:** *number*

___

###  log

▸ **log**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:685

Returns the natural logarithm (base e) of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  log10

▸ **log10**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:124

Returns the base 10 logarithm of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  log1p

▸ **log1p**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:136

Returns the natural logarithm of 1 + x.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  log2

▸ **log2**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:130

Returns the base 2 logarithm of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  max

▸ **max**(...`values`: number[]): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:690

Returns the larger of a set of supplied numeric expressions.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...values` | number[] | Numeric expressions to be evaluated.  |

**Returns:** *number*

___

###  min

▸ **min**(...`values`: number[]): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:695

Returns the smaller of a set of supplied numeric expressions.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...values` | number[] | Numeric expressions to be evaluated.  |

**Returns:** *number*

___

###  pow

▸ **pow**(`x`: number, `y`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:701

Returns the value of a base expression taken to a specified power.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The base value of the expression. |
`y` | number | The exponent value of the expression.  |

**Returns:** *number*

___

###  random

▸ **random**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:703

Returns a pseudorandom number between 0 and 1.

**Returns:** *number*

___

###  round

▸ **round**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:708

Returns a supplied numeric expression rounded to the nearest integer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The value to be rounded to the nearest integer.  |

**Returns:** *number*

___

###  sign

▸ **sign**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:118

Returns the sign of the x, indicating whether x is positive, negative or zero.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The numeric expression to test  |

**Returns:** *number*

___

###  sin

▸ **sin**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:713

Returns the sine of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  sinh

▸ **sinh**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:156

Returns the hyperbolic sine of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  sqrt

▸ **sqrt**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:718

Returns the square root of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*

___

###  tan

▸ **tan**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:723

Returns the tangent of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  tanh

▸ **tanh**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:162

Returns the hyperbolic tangent of a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression that contains an angle measured in radians.  |

**Returns:** *number*

___

###  trunc

▸ **trunc**(`x`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:198

Returns the integral part of the a numeric expression, x, removing any fractional digits.
If x is already an integer, the result is x.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | A numeric expression.  |

**Returns:** *number*
