[typescript](../README.md) › [Globals](../globals.md) › [BigNumber](bignumber.md)

# Class: BigNumber

## Hierarchy

* **BigNumber**

## Index

### Constructors

* [constructor](bignumber.md#constructor)

### Properties

* [c](bignumber.md#c)
* [e](bignumber.md#e)
* [s](bignumber.md#s)
* [EUCLID](bignumber.md#static-euclid)
* [ROUND_CEIL](bignumber.md#static-round_ceil)
* [ROUND_DOWN](bignumber.md#static-round_down)
* [ROUND_FLOOR](bignumber.md#static-round_floor)
* [ROUND_HALF_CEIL](bignumber.md#static-round_half_ceil)
* [ROUND_HALF_DOWN](bignumber.md#static-round_half_down)
* [ROUND_HALF_EVEN](bignumber.md#static-round_half_even)
* [ROUND_HALF_FLOOR](bignumber.md#static-round_half_floor)
* [ROUND_HALF_UP](bignumber.md#static-round_half_up)
* [ROUND_UP](bignumber.md#static-round_up)

### Methods

* [abs](bignumber.md#abs)
* [absoluteValue](bignumber.md#absolutevalue)
* [add](bignumber.md#add)
* [ceil](bignumber.md#ceil)
* [cmp](bignumber.md#cmp)
* [comparedTo](bignumber.md#comparedto)
* [decimalPlaces](bignumber.md#decimalplaces)
* [div](bignumber.md#div)
* [divToInt](bignumber.md#divtoint)
* [dividedBy](bignumber.md#dividedby)
* [dividedToIntegerBy](bignumber.md#dividedtointegerby)
* [dp](bignumber.md#dp)
* [eq](bignumber.md#eq)
* [equals](bignumber.md#equals)
* [floor](bignumber.md#floor)
* [greaterThan](bignumber.md#greaterthan)
* [greaterThanOrEqualTo](bignumber.md#greaterthanorequalto)
* [gt](bignumber.md#gt)
* [gte](bignumber.md#gte)
* [isFinite](bignumber.md#isfinite)
* [isInt](bignumber.md#isint)
* [isInteger](bignumber.md#isinteger)
* [isNaN](bignumber.md#isnan)
* [isNeg](bignumber.md#isneg)
* [isNegative](bignumber.md#isnegative)
* [isZero](bignumber.md#iszero)
* [lessThan](bignumber.md#lessthan)
* [lessThanOrEqualTo](bignumber.md#lessthanorequalto)
* [lt](bignumber.md#lt)
* [lte](bignumber.md#lte)
* [minus](bignumber.md#minus)
* [mod](bignumber.md#mod)
* [modulo](bignumber.md#modulo)
* [mul](bignumber.md#mul)
* [neg](bignumber.md#neg)
* [negated](bignumber.md#negated)
* [plus](bignumber.md#plus)
* [pow](bignumber.md#pow)
* [precision](bignumber.md#precision)
* [round](bignumber.md#round)
* [sd](bignumber.md#sd)
* [shift](bignumber.md#shift)
* [sqrt](bignumber.md#sqrt)
* [squareRoot](bignumber.md#squareroot)
* [sub](bignumber.md#sub)
* [times](bignumber.md#times)
* [toDigits](bignumber.md#todigits)
* [toExponential](bignumber.md#toexponential)
* [toFixed](bignumber.md#tofixed)
* [toFormat](bignumber.md#toformat)
* [toFraction](bignumber.md#tofraction)
* [toJSON](bignumber.md#tojson)
* [toNumber](bignumber.md#tonumber)
* [toPower](bignumber.md#topower)
* [toPrecision](bignumber.md#toprecision)
* [toString](bignumber.md#tostring)
* [trunc](bignumber.md#trunc)
* [truncated](bignumber.md#truncated)
* [valueOf](bignumber.md#valueof)
* [another](bignumber.md#static-another)
* [config](bignumber.md#static-config)
* [max](bignumber.md#static-max)
* [min](bignumber.md#static-min)
* [random](bignumber.md#static-random)

## Constructors

###  constructor

\+ **new BigNumber**(`value`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:444

Returns a new instance of a BigNumber object. If a base is specified, the value is rounded according to the
current [Configuration.DECIMAL_PLACES](../interfaces/configuration.md#optional-decimal_places) and [Configuration.ROUNDING_MODE](../interfaces/configuration.md#optional-rounding_mode) configuration. See Errors for the treatment of an invalid value or base.

```ts
x = new BigNumber(9)                       // '9'
y = new BigNumber(x)                       // '9'

// 'new' is optional if ERRORS is false
BigNumber(435.345)                         // '435.345'

new BigNumber('5032485723458348569331745.33434346346912144534543')
new BigNumber('4.321e+4')                  // '43210'
new BigNumber('-735.0918e-430')            // '-7.350918e-428'
new BigNumber(Infinity)                    // 'Infinity'
new BigNumber(NaN)                         // 'NaN'
new BigNumber('.5')                        // '0.5'
new BigNumber('+2')                        // '2'
new BigNumber(-10110100.1, 2)              // '-180.5'
new BigNumber(-0b10110100.1)               // '-180.5'
new BigNumber('123412421.234324', 5)       // '607236.557696'
new BigNumber('ff.8', 16)                  // '255.5'
new BigNumber('0xff.8')                    // '255.5'
```

The following throws `not a base 2 number` if [Configuration.ERRORS](../interfaces/configuration.md#optional-errors) is true, otherwise it returns a BigNumber with value `NaN`.

```ts
new BigNumber(9, 2)
```

The following throws `number type has more than 15 significant digits` if [Configuration.ERRORS](../interfaces/configuration.md#optional-errors) is true, otherwise it returns a BigNumber with value `96517860459076820`.

```ts
new BigNumber(96517860459076817.4395)
```

The following throws `not a number` if [Configuration.ERRORS](../interfaces/configuration.md#optional-errors) is true, otherwise it returns a BigNumber with value `NaN`.

```ts
new BigNumber('blurgh')
```

A value is only rounded by the constructor if a base is specified.

```ts
BigNumber.config({ DECIMAL_PLACES: 5 })
new BigNumber(1.23456789)                  // '1.23456789'
new BigNumber(1.23456789, 10)              // '1.23457'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; string &#124; [BigNumber](bignumber.md) | A numeric value.  Legitimate values include `±0`, `±Infinity` and `NaN`.  Values of type `number` with more than 15 significant digits are considered invalid (if [Configuration.ERRORS](../interfaces/configuration.md#optional-errors) is `true`) as calling `toString` or `valueOf` on such numbers may not result in the intended value.  There is no limit to the number of digits of a value of type `string` (other than that of JavaScript's maximum array size).  Decimal string values may be in exponential, as well as normal (fixed-point) notation. Non-decimal values must be in normal notation. String values in hexadecimal literal form, e.g. `'0xff'`, are valid, as are string values with the octal and binary prefixs `'0o'` and `'0b'`.  String values in octal literal form without the prefix will be interpreted as decimals, e.g. `'011'` is interpreted as 11, not 9.  Values in any base may have fraction digits.  For bases from 10 to 36, lower and/or upper case letters can be used to represent values from 10 to 35.  For bases above 36, a-z represents values from 10 to 35, A-Z from 36 to 61, and $ and _ represent 62 and 63 respectively (this can be changed by editing the ALPHABET variable near the top of the source file).  |
`base?` | undefined &#124; number | integer, 2 to 64 inclusive  The base of value. If base is omitted, or is `null` or `undefined`, base 10 is assumed.  |

**Returns:** *[BigNumber](bignumber.md)*

## Properties

###  c

• **c**: *number[]*

Defined in node_modules/bignumber.js/bignumber.d.ts:432

Coefficient: Array of base `1e14` numbers or `null`

**`readonly`** 

___

###  e

• **e**: *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:438

Exponent: Integer, `-1000000000` to `1000000000` inclusive or `null`

**`readonly`** 

___

###  s

• **s**: *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:444

Sign: `-1`, `1` or `null`

**`readonly`** 

___

### `Static` EUCLID

▪ **EUCLID**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:325

The remainder is always positive. Euclidian division: `q = sign(n) * floor(a / abs(n))`

___

### `Static` ROUND_CEIL

▪ **ROUND_CEIL**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:292

Rounds towards Infinity

___

### `Static` ROUND_DOWN

▪ **ROUND_DOWN**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:289

Rounds towards zero

___

### `Static` ROUND_FLOOR

▪ **ROUND_FLOOR**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:295

Rounds towards -Infinity

___

### `Static` ROUND_HALF_CEIL

▪ **ROUND_HALF_CEIL**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:315

Rounds towards nearest neighbour. If equidistant, rounds towards `Infinity`

___

### `Static` ROUND_HALF_DOWN

▪ **ROUND_HALF_DOWN**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:305

Rounds towards nearest neighbour. If equidistant, rounds towards zero

___

### `Static` ROUND_HALF_EVEN

▪ **ROUND_HALF_EVEN**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:310

Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour

___

### `Static` ROUND_HALF_FLOOR

▪ **ROUND_HALF_FLOOR**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:320

Rounds towards nearest neighbour. If equidistant, rounds towards `-Infinity`

___

### `Static` ROUND_HALF_UP

▪ **ROUND_HALF_UP**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:300

Rounds towards nearest neighbour. If equidistant, rounds away from zero

___

### `Static` ROUND_UP

▪ **ROUND_UP**: *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:286

Rounds away from zero

## Methods

###  abs

▸ **abs**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:542

See [BigNumber.absoluteValue](bignumber.md#absolutevalue)

**Returns:** *[BigNumber](bignumber.md)*

___

###  absoluteValue

▸ **absoluteValue**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:537

Returns a BigNumber whose value is the absolute value, i.e. the magnitude, of the value of this BigNumber. The
return value is always exact and unrounded.
```ts
x = new BigNumber(-0.8)
y = x.absoluteValue()           // '0.8'
z = y.abs()                     // '0.8'
```

**`alias`** [BigNumber.abs](bignumber.md#abs)

**Returns:** *[BigNumber](bignumber.md)*

___

###  add

▸ **add**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:547

See [plus](bignumber.md#plus)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  ceil

▸ **ceil**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:560

Returns a BigNumber whose value is the value of this BigNumber rounded to a whole number in the direction of
positive `Infinity`.

```ts
x = new BigNumber(1.3)
x.ceil()                        // '2'
y = new BigNumber(-1.8)
y.ceil()                        // '-1'
```

**Returns:** *[BigNumber](bignumber.md)*

___

###  cmp

▸ **cmp**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:586

See [comparedTo](bignumber.md#comparedto)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *number*

___

###  comparedTo

▸ **comparedTo**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:581

 Returns |                                                               |
:-------:|---------------------------------------------------------------|
    1    | If the value of this BigNumber is greater than the value of n
   -1    | If the value of this BigNumber is less than the value of n
    0    | If this BigNumber and n have the same value
  null   | If the value of either this BigNumber or n is NaN

```ts
x = new BigNumber(Infinity)
y = new BigNumber(5)
x.comparedTo(y)                 // 1
x.comparedTo(x.minus(1))        // 0
y.cmp(NaN)                      // null
y.cmp('110', 2)                 // -1
```

**`alias`** [cmp](bignumber.md#cmp)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *number*

___

###  decimalPlaces

▸ **decimalPlaces**(): *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:601

Return the number of decimal places of the value of this BigNumber, or `null` if the value of this BigNumber is
`±Infinity` or `NaN`.

```ts
x = new BigNumber(123.45)
x.decimalPlaces()               // 2
y = new BigNumber('9.9e-101')
y.dp()                          // 102
```

**`alias`** [dp](bignumber.md#dp)

**Returns:** *number*

___

###  div

▸ **div**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:627

See [dividedBy](bignumber.md#dividedby)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  divToInt

▸ **divToInt**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:647

See [dividedToIntegerBy](bignumber.md#dividedtointegerby)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  dividedBy

▸ **dividedBy**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:622

Returns a BigNumber whose value is the value of this BigNumber divided by n, rounded according to the current
DECIMAL_PLACES and ROUNDING_MODE configuration.

```ts
x = new BigNumber(355)
y = new BigNumber(113)
x.dividedBy(y)                  // '3.14159292035398230088'
x.div(5)                        // '71'
x.div(47, 16)                   // '5'
```

**`alias`** [div](bignumber.md#div)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  dividedToIntegerBy

▸ **dividedToIntegerBy**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:642

Return a BigNumber whose value is the integer part of dividing the value of this BigNumber by n.

```ts
x = new BigNumber(5)
y = new BigNumber(3)
x.dividedToIntegerBy(y)         // '1'
x.divToInt(0.7)                 // '7'
x.divToInt('0.f', 16)           // '5'
```

**`alias`** [divToInt](bignumber.md#divtoint)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  dp

▸ **dp**(): *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:606

See [decimalPlaces](bignumber.md#decimalplaces)

**Returns:** *number*

___

###  eq

▸ **eq**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:673

See [equals](bignumber.md#equals)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  equals

▸ **equals**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:668

Returns true if the value of this BigNumber equals the value of `n`, otherwise returns `false`. As with JavaScript,
`NaN` does not equal `NaN`.

Note: This method uses the [comparedTo](bignumber.md#comparedto) internally.

```ts
0 === 1e-324                    // true
x = new BigNumber(0)
x.equals('1e-324')              // false
BigNumber(-0).eq(x)             // true  ( -0 === 0 )
BigNumber(255).eq('ff', 16)     // true

y = new BigNumber(NaN)
y.equals(NaN)                   // false
```

**`alias`** [eq](bignumber.md#eq)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  floor

▸ **floor**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:686

Returns a BigNumber whose value is the value of this BigNumber rounded to a whole number in the direction of
negative `Infinity`.

```ts
x = new BigNumber(1.8)
x.floor()                       // '1'
y = new BigNumber(-1.3)
y.floor()                       // '-2'
```

**Returns:** *[BigNumber](bignumber.md)*

___

###  greaterThan

▸ **greaterThan**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:703

Returns `true` if the value of this BigNumber is greater than the value of `n`, otherwise returns `false`.

Note: This method uses the comparedTo method internally.

```ts
0.1 > (0.3 - 0.2)                           // true
x = new BigNumber(0.1)
x.greaterThan(BigNumber(0.3).minus(0.2))    // false
BigNumber(0).gt(x)                          // false
BigNumber(11, 3).gt(11.1, 2)                // true
```

**`alias`** [gt](bignumber.md#gt)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  greaterThanOrEqualTo

▸ **greaterThanOrEqualTo**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:717

Returns `true` if the value of this BigNumber is greater than or equal to the value of `n`, otherwise returns `false`.

Note: This method uses the comparedTo method internally.

**`alias`** [gte](bignumber.md#gte)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  gt

▸ **gt**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:708

See [greaterThan](bignumber.md#greaterthan)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  gte

▸ **gte**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:722

See [greaterThanOrEqualTo](bignumber.md#greaterthanorequalto)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  isFinite

▸ **isFinite**(): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:730

Returns true if the value of this BigNumber is a finite number, otherwise returns false. The only possible
non-finite values of a BigNumber are `NaN`, `Infinity` and `-Infinity`.

Note: The native method `isFinite()` can be used if `n <= Number.MAX_VALUE`.

**Returns:** *boolean*

___

###  isInt

▸ **isInt**(): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:741

See [isInteger](bignumber.md#isinteger)

**Returns:** *boolean*

___

###  isInteger

▸ **isInteger**(): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:736

Returns true if the value of this BigNumber is a whole number, otherwise returns false.

**`alias`** [isInt](bignumber.md#isint)

**Returns:** *boolean*

___

###  isNaN

▸ **isNaN**(): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:748

Returns `true` if the value of this BigNumber is `NaN`, otherwise returns `false`.

Note: The native method isNaN() can also be used.

**Returns:** *boolean*

___

###  isNeg

▸ **isNeg**(): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:762

See [isNegative](bignumber.md#isnegative)

**Returns:** *boolean*

___

###  isNegative

▸ **isNegative**(): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:757

Returns true if the value of this BigNumber is negative, otherwise returns false.

Note: `n < 0` can be used if `n <= * -Number.MIN_VALUE`.

**`alias`** [isNeg](bignumber.md#isneg)

**Returns:** *boolean*

___

###  isZero

▸ **isZero**(): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:769

Returns true if the value of this BigNumber is zero or minus zero, otherwise returns false.

Note: `n == 0` can be used if `n >= Number.MIN_VALUE`.

**Returns:** *boolean*

___

###  lessThan

▸ **lessThan**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:778

Returns true if the value of this BigNumber is less than the value of n, otherwise returns false.

Note: This method uses [comparedTo](bignumber.md#comparedto) internally.

**`alias`** [lt](bignumber.md#lt)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  lessThanOrEqualTo

▸ **lessThanOrEqualTo**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:790

Returns true if the value of this BigNumber is less than or equal the value of n, otherwise returns false.

Note: This method uses [comparedTo](bignumber.md#comparedto) internally.

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  lt

▸ **lt**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:783

See [lessThan](bignumber.md#lessthan)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  lte

▸ **lte**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *boolean*

Defined in node_modules/bignumber.js/bignumber.d.ts:795

See [lessThanOrEqualTo](bignumber.md#lessthanorequalto)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *boolean*

___

###  minus

▸ **minus**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:804

Returns a BigNumber whose value is the value of this BigNumber minus `n`.

The return value is always exact and unrounded.

**`alias`** [sub](bignumber.md#sub)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  mod

▸ **mod**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:832

See [modulo](bignumber.md#modulo)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  modulo

▸ **modulo**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:827

Returns a BigNumber whose value is the value of this BigNumber modulo n, i.e. the integer remainder of dividing
this BigNumber by n.

The value returned, and in particular its sign, is dependent on the value of the [Configuration.MODULO_MODE](../interfaces/configuration.md#optional-modulo_mode)
setting of this BigNumber constructor. If it is `1` (default value), the result will have the same sign as this
BigNumber, and it will match that of Javascript's `%` operator (within the limits of double precision) and
BigDecimal's remainder method.

The return value is always exact and unrounded.

```ts
1 % 0.9                         // 0.09999999999999998
x = new BigNumber(1)
x.modulo(0.9)                   // '0.1'
y = new BigNumber(33)
y.mod('a', 33)                  // '3'
```

**`alias`** [mod](bignumber.md#mod)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  mul

▸ **mul**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:837

See [times](bignumber.md#times)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  neg

▸ **neg**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:856

See [negated](bignumber.md#negated)

**Returns:** *[BigNumber](bignumber.md)*

___

###  negated

▸ **negated**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:851

Returns a BigNumber whose value is the value of this BigNumber negated, i.e. multiplied by -1.

```ts
x = new BigNumber(1.8)
x.negated()                     // '-1.8'
y = new BigNumber(-1.3)
y.neg()                         // '1.3'
```

**`alias`** [neg](bignumber.md#neg)

**Returns:** *[BigNumber](bignumber.md)*

___

###  plus

▸ **plus**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:865

Returns a BigNumber whose value is the value of this BigNumber plus `n`.

The return value is always exact and unrounded.

**`alias`** [add](bignumber.md#add)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  pow

▸ **pow**(`n`: number, `m?`: number | string | [BigNumber](bignumber.md)): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:1196

See [toPower](bignumber.md#topower)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`m?` | number &#124; string &#124; [BigNumber](bignumber.md) |

**Returns:** *[BigNumber](bignumber.md)*

___

###  precision

▸ **precision**(`z?`: boolean | number): *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:874

If z is true or 1 then any trailing zeros of the integer part of a number are counted as significant digits,
otherwise they are not.

**`alias`** [sd](bignumber.md#sd)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`z?` | boolean &#124; number | true, false, 0 or 1 |

**Returns:** *number*

___

###  round

▸ **round**(`dp?`: undefined | number, `rm?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:906

Returns a BigNumber whose value is the value of this BigNumber rounded by rounding mode rm to a maximum of dp
decimal places.

 - if dp is omitted, or is null or undefined, the return value is n rounded to a whole number.
 - if rm is omitted, or is null or undefined, ROUNDING_MODE is used.

```ts
x = 1234.56
Math.round(x)                             // 1235
y = new BigNumber(x)
y.round()                                 // '1235'
y.round(1)                                // '1234.6'
y.round(2)                                // '1234.56'
y.round(10)                               // '1234.56'
y.round(0, 1)                             // '1234'
y.round(0, 6)                             // '1235'
y.round(1, 1)                             // '1234.5'
y.round(1, BigNumber.ROUND_HALF_EVEN)     // '1234.6'
y                                         // '1234.56'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dp?` | undefined &#124; number | integer, 0 to 1e+9 inclusive |
`rm?` | undefined &#124; number | integer, 0 to 8 inclusive  |

**Returns:** *[BigNumber](bignumber.md)*

___

###  sd

▸ **sd**(`z?`: boolean | number): *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:879

See [precision](bignumber.md#precision)

**Parameters:**

Name | Type |
------ | ------ |
`z?` | boolean &#124; number |

**Returns:** *number*

___

###  shift

▸ **shift**(`n`: number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:916

Returns a BigNumber whose value is the value of this BigNumber shifted n places.

The shift is of the decimal point, i.e. of powers of ten, and is to the left if n is negative or to the right if
n is positive. The return value is always exact and unrounded.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | integer, -9007199254740991 to 9007199254740991 inclusive  |

**Returns:** *[BigNumber](bignumber.md)*

___

###  sqrt

▸ **sqrt**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:932

See [squareRoot](bignumber.md#squareroot)

**Returns:** *[BigNumber](bignumber.md)*

___

###  squareRoot

▸ **squareRoot**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:927

Returns a BigNumber whose value is the square root of the value of this BigNumber, rounded according to the
current DECIMAL_PLACES and ROUNDING_MODE configuration.

The return value will be correctly rounded, i.e. rounded
as if the result was first calculated to an infinite number of correct digits before rounding.

**`alias`** [sqrt](bignumber.md#sqrt)

**Returns:** *[BigNumber](bignumber.md)*

___

###  sub

▸ **sub**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:937

See [minus](bignumber.md#minus)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  times

▸ **times**(`n`: number | string | [BigNumber](bignumber.md), `base?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:946

Returns a BigNumber whose value is the value of this BigNumber times n.

The return value is always exact and unrounded.

**`alias`** [mul](bignumber.md#mul)

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; string &#124; [BigNumber](bignumber.md) |
`base?` | undefined &#124; number |

**Returns:** *[BigNumber](bignumber.md)*

___

###  toDigits

▸ **toDigits**(`sd?`: undefined | number, `rm?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:970

Returns a BigNumber whose value is the value of this BigNumber rounded to sd significant digits using rounding mode rm.

If sd is omitted or is null or undefined, the return value will not be rounded.

If rm is omitted or is null or undefined, ROUNDING_MODE will be used.

```ts
BigNumber.config({ precision: 5, rounding: 4 })
x = new BigNumber(9876.54321)

x.toDigits()                          // '9876.5'
x.toDigits(6)                         // '9876.54'
x.toDigits(6, BigNumber.ROUND_UP)     // '9876.55'
x.toDigits(2)                         // '9900'
x.toDigits(2, 1)                      // '9800'
x                                     // '9876.54321'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sd?` | undefined &#124; number | integer, 1 to 1e+9 inclusive |
`rm?` | undefined &#124; number | integer, 0 to 8 inclusive  |

**Returns:** *[BigNumber](bignumber.md)*

___

###  toExponential

▸ **toExponential**(`dp?`: undefined | number, `rm?`: undefined | number): *string*

Defined in node_modules/bignumber.js/bignumber.d.ts:1001

Returns a string representing the value of this BigNumber in exponential notation rounded using rounding mode rm
to dp decimal places, i.e with one digit before the decimal point and dp digits after it.

If the value of this BigNumber in exponential notation has fewer than dp fraction digits, the return value will
be appended with zeros accordingly.

If dp is omitted, or is null or undefined, the number of digits after the decimal point defaults to the minimum
number of digits necessary to represent the value exactly.

If rm is omitted or is null or undefined, ROUNDING_MODE is used.

```ts
x = 45.6
y = new BigNumber(x)
x.toExponential()               // '4.56e+1'
y.toExponential()               // '4.56e+1'
x.toExponential(0)              // '5e+1'
y.toExponential(0)              // '5e+1'
x.toExponential(1)              // '4.6e+1'
y.toExponential(1)              // '4.6e+1'
y.toExponential(1, 1)           // '4.5e+1'  (ROUND_DOWN)
x.toExponential(3)              // '4.560e+1'
y.toExponential(3)              // '4.560e+1'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dp?` | undefined &#124; number | integer, 0 to 1e+9 inclusive |
`rm?` | undefined &#124; number | integer, 0 to 8 inclusive  |

**Returns:** *string*

___

###  toFixed

▸ **toFixed**(`dp?`: undefined | number, `rm?`: undefined | number): *string*

Defined in node_modules/bignumber.js/bignumber.d.ts:1037

Returns a string representing the value of this BigNumber in normal (fixed-point) notation rounded to dp decimal
places using rounding mode `rm`.

If the value of this BigNumber in normal notation has fewer than `dp` fraction digits, the return value will be
appended with zeros accordingly.

Unlike `Number.prototype.toFixed`, which returns exponential notation if a number is greater or equal to 10<sup>21</sup>, this
method will always return normal notation.

If dp is omitted or is `null` or `undefined`, the return value will be unrounded and in normal notation. This is also
unlike `Number.prototype.toFixed`, which returns the value to zero decimal places.

It is useful when fixed-point notation is required and the current `EXPONENTIAL_AT` setting causes toString to
return exponential notation.

If `rm` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.

```ts
x = 3.456
y = new BigNumber(x)
x.toFixed()                     // '3'
y.toFixed()                     // '3.456'
y.toFixed(0)                    // '3'
x.toFixed(2)                    // '3.46'
y.toFixed(2)                    // '3.46'
y.toFixed(2, 1)                 // '3.45'  (ROUND_DOWN)
x.toFixed(5)                    // '3.45600'
y.toFixed(5)                    // '3.45600'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dp?` | undefined &#124; number | integer, 0 to 1e+9 inclusive |
`rm?` | undefined &#124; number | integer, 0 to 8 inclusive  |

**Returns:** *string*

___

###  toFormat

▸ **toFormat**(`dp?`: undefined | number, `rm?`: undefined | number): *string*

Defined in node_modules/bignumber.js/bignumber.d.ts:1086

Returns a string representing the value of this BigNumber in normal (fixed-point) notation rounded to dp decimal
places using rounding mode `rm`, and formatted according to the properties of the FORMAT object.

See the examples below for the properties of the `FORMAT` object, their types and their usage.

If `dp` is omitted or is `null` or `undefined`, then the return value is not rounded to a fixed number of decimal
places.

If `rm` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.

```ts
format = {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0
}
BigNumber.config({ FORMAT: format })

x = new BigNumber('123456789.123456789')
x.toFormat()                    // '123,456,789.123456789'
x.toFormat(1)                   // '123,456,789.1'

// If a reference to the object assigned to FORMAT has been retained,
// the format properties can be changed directly
format.groupSeparator = ' '
format.fractionGroupSize = 5
x.toFormat()                    // '123 456 789.12345 6789'

BigNumber.config({
    FORMAT: {
        decimalSeparator = ',',
        groupSeparator = '.',
        groupSize = 3,
        secondaryGroupSize = 2
    }
})

x.toFormat(6)                   // '12.34.56.789,123'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dp?` | undefined &#124; number | integer, 0 to 1e+9 inclusive |
`rm?` | undefined &#124; number | integer, 0 to 8 inclusive  |

**Returns:** *string*

___

###  toFraction

▸ **toFraction**(`max?`: number | string | [BigNumber](bignumber.md)): *[string, string]*

Defined in node_modules/bignumber.js/bignumber.d.ts:1110

Returns a string array representing the value of this BigNumber as a simple fraction with an integer numerator
and an integer denominator. The denominator will be a positive non-zero value less than or equal to max.

If a maximum denominator, max, is not specified, or is null or undefined, the denominator will be the lowest
value necessary to represent the number exactly.

```ts
x = new BigNumber(1.75)
x.toFraction()                  // '7, 4'

pi = new BigNumber('3.14159265358')
pi.toFraction()                 // '157079632679,50000000000'
pi.toFraction(100000)           // '312689, 99532'
pi.toFraction(10000)            // '355, 113'
pi.toFraction(100)              // '311, 99'
pi.toFraction(10)               // '22, 7'
pi.toFraction(1)                // '3, 1'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`max?` | number &#124; string &#124; [BigNumber](bignumber.md) | integer >= `1` and < `Infinity`  |

**Returns:** *[string, string]*

___

###  toJSON

▸ **toJSON**(): *string*

Defined in node_modules/bignumber.js/bignumber.d.ts:1130

Same as [valueOf](bignumber.md#valueof)

```ts
x = new BigNumber('177.7e+457')
y = new BigNumber(235.4325)
z = new BigNumber('0.0098074')

// Serialize an array of three BigNumbers
str = JSON.stringify( [x, y, z] )
// "["1.777e+459","235.4325","0.0098074"]"

// Return an array of three BigNumbers
JSON.parse(str, function (key, val) {
    return key === '' ? val : new BigNumber(val)
})
```

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

Defined in node_modules/bignumber.js/bignumber.d.ts:1151

Returns the value of this BigNumber as a JavaScript number primitive.

Type coercion with, for example, the unary plus operator will also work, except that a BigNumber with the value
minus zero will be converted to positive zero.

```ts
x = new BigNumber(456.789)
x.toNumber()                    // 456.789
+x                              // 456.789

y = new BigNumber('45987349857634085409857349856430985')
y.toNumber()                    // 4.598734985763409e+34

z = new BigNumber(-0)
1 / +z                          // Infinity
1 / z.toNumber()                // -Infinity
```

**Returns:** *number*

___

###  toPower

▸ **toPower**(`n`: number, `m?`: number | string | [BigNumber](bignumber.md)): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:1191

Returns a BigNumber whose value is the value of this BigNumber raised to the power `n`, and optionally modulo `a`
modulus `m`.

If `n` is negative the result is rounded according to the current [Configuration.DECIMAL_PLACES](../interfaces/configuration.md#optional-decimal_places) and
[Configuration.ROUNDING_MODE](../interfaces/configuration.md#optional-rounding_mode) configuration.

If `n` is not an integer or is out of range:
 - If `ERRORS` is `true` a BigNumber Error is thrown,
 - else if `n` is greater than `9007199254740991`, it is interpreted as `Infinity`;
 - else if n is less than `-9007199254740991`, it is interpreted as `-Infinity`;
 - else if `n` is otherwise a number, it is truncated to an integer;
 - else it is interpreted as `NaN`.

As the number of digits of the result of the power operation can grow so large so quickly, e.g.
123.456<sup>10000</sup> has over 50000 digits, the number of significant digits calculated is limited to the
value of the [Configuration.POW_PRECISION](../interfaces/configuration.md#optional-pow_precision) setting (default value: `100`) unless a modulus `m` is specified.

Set [Configuration.POW_PRECISION](../interfaces/configuration.md#optional-pow_precision) to `0` for an unlimited number of significant digits to be calculated (this
will cause the method to slow dramatically for larger exponents).

Negative exponents will be calculated to the number of decimal places specified by
[Configuration.DECIMAL_PLACES](../interfaces/configuration.md#optional-decimal_places) (but not to more than [Configuration.POW_PRECISION](../interfaces/configuration.md#optional-pow_precision) significant digits).

If `m` is specified and the value of `m`, `n` and this BigNumber are positive integers, then a fast modular
exponentiation algorithm is used, otherwise if any of the values is not a positive integer the operation will
simply be performed as `x.toPower(n).modulo(m)` with a `POW_PRECISION` of `0`.

```ts
Math.pow(0.7, 2)                // 0.48999999999999994
x = new BigNumber(0.7)
x.toPower(2)                    // '0.49'
BigNumber(3).pow(-2)            // '0.11111111111111111111'
```

**`alias`** [pow](bignumber.md#pow)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | integer, -9007199254740991 to 9007199254740991 inclusive |
`m?` | number &#124; string &#124; [BigNumber](bignumber.md) | - |

**Returns:** *[BigNumber](bignumber.md)*

___

###  toPrecision

▸ **toPrecision**(`sd?`: undefined | number, `rm?`: undefined | number): *string*

Defined in node_modules/bignumber.js/bignumber.d.ts:1223

Returns a string representing the value of this BigNumber rounded to `sd` significant digits using rounding mode
rm.

 - If `sd` is less than the number of digits necessary to represent the integer part of the value in normal
   (fixed-point) notation, then exponential notation is used.
 - If `sd` is omitted, or is `null` or `undefined`, then the return value is the same as `n.toString()`.
 - If `rm` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.

```ts
x = 45.6
y = new BigNumber(x)
x.toPrecision()                 // '45.6'
y.toPrecision()                 // '45.6'
x.toPrecision(1)                // '5e+1'
y.toPrecision(1)                // '5e+1'
y.toPrecision(2, 0)             // '4.6e+1'  (ROUND_UP)
y.toPrecision(2, 1)             // '4.5e+1'  (ROUND_DOWN)
x.toPrecision(5)                // '45.600'
y.toPrecision(5)                // '45.600'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sd?` | undefined &#124; number | integer, 1 to 1e+9 inclusive |
`rm?` | undefined &#124; number | integer, 0 to 8 inclusive  |

**Returns:** *string*

___

###  toString

▸ **toString**(`base?`: undefined | number): *string*

Defined in node_modules/bignumber.js/bignumber.d.ts:1260

Returns a string representing the value of this BigNumber in the specified base, or base 10 if base is omitted or
is `null` or `undefined`.

For bases above 10, values from 10 to 35 are represented by a-z (as with `Number.prototype.toString`), 36 to 61 by
A-Z, and 62 and 63 by `$` and `_` respectively.

If a base is specified the value is rounded according to the current `DECIMAL_PLACES` and `ROUNDING_MODE`
configuration.

If a base is not specified, and this BigNumber has a positive exponent that is equal to or greater than the
positive component of the current `EXPONENTIAL_AT` setting, or a negative exponent equal to or less than the
negative component of the setting, then exponential notation is returned.

If base is `null` or `undefined` it is ignored.

```ts
x = new BigNumber(750000)
x.toString()                    // '750000'
BigNumber.config({ EXPONENTIAL_AT: 5 })
x.toString()                    // '7.5e+5'

y = new BigNumber(362.875)
y.toString(2)                   // '101101010.111'
y.toString(9)                   // '442.77777777777777777778'
y.toString(32)                  // 'ba.s'

BigNumber.config({ DECIMAL_PLACES: 4 });
z = new BigNumber('1.23456789')
z.toString()                    // '1.23456789'
z.toString(10)                  // '1.2346'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`base?` | undefined &#124; number | integer, 2 to 64 inclusive  |

**Returns:** *string*

___

###  trunc

▸ **trunc**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:1279

See [truncated](bignumber.md#truncated)

**Returns:** *[BigNumber](bignumber.md)*

___

###  truncated

▸ **truncated**(): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:1274

Returns a BigNumber whose value is the value of this BigNumber truncated to a whole number.

```ts
x = new BigNumber(123.456)
x.truncated()                   // '123'
y = new BigNumber(-12.3)
y.trunc()                       // '-12'
```

**`alias`** [trunc](bignumber.md#trunc)

**Returns:** *[BigNumber](bignumber.md)*

___

###  valueOf

▸ **valueOf**(): *string*

Defined in node_modules/bignumber.js/bignumber.d.ts:1292

As [toString](bignumber.md#tostring), but does not accept a base argument and includes the minus sign for negative zero.`

```ts
x = new BigNumber('-0')
x.toString()                    // '0'
x.valueOf()                     // '-0'
y = new BigNumber('1.777e+457')
y.valueOf()                     // '1.777e+457'
```

**Returns:** *string*

___

### `Static` another

▸ **another**(`config?`: [Configuration](../interfaces/configuration.md)): *typeof BigNumber*

Defined in node_modules/bignumber.js/bignumber.d.ts:346

Returns a new independent BigNumber constructor with configuration as described by `obj` (see `config`), or with
the default configuration if `obj` is `null` or `undefined`.

```ts
BigNumber.config({ DECIMAL_PLACES: 5 })
BN = BigNumber.another({ DECIMAL_PLACES: 9 })

x = new BigNumber(1)
y = new BN(1)

x.div(3)                        // 0.33333
y.div(3)                        // 0.333333333

// BN = BigNumber.another({ DECIMAL_PLACES: 9 }) is equivalent to:
BN = BigNumber.another()
BN.config({ DECIMAL_PLACES: 9 })
```

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [Configuration](../interfaces/configuration.md) |

**Returns:** *typeof BigNumber*

___

### `Static` config

▸ **config**(`config?`: [Configuration](../interfaces/configuration.md)): *[Configuration](../interfaces/configuration.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:353

Configures the 'global' settings for this particular BigNumber constructor. Returns an object with the above
properties and their current values. If the value to be assigned to any of the above properties is `null` or
`undefined` it is ignored. See Errors for the treatment of invalid values.

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [Configuration](../interfaces/configuration.md) |

**Returns:** *[Configuration](../interfaces/configuration.md)*

▸ **config**(`decimalPlaces?`: undefined | number, `roundingMode?`: [RoundingMode](../enums/roundingmode.md), `exponentialAt?`: number | [number, number], `range?`: number | [number, number], `errors?`: boolean | number, `crypto?`: boolean | number, `moduloMode?`: [RoundingMode](../enums/roundingmode.md), `powPrecision?`: undefined | number, `format?`: [Format](../interfaces/format.md)): *[Configuration](../interfaces/configuration.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:360

Configures the 'global' settings for this particular BigNumber constructor. Returns an object with the above
properties and their current values. If the value to be assigned to any of the above properties is `null` or
`undefined` it is ignored. See Errors for the treatment of invalid values.

**Parameters:**

Name | Type |
------ | ------ |
`decimalPlaces?` | undefined &#124; number |
`roundingMode?` | [RoundingMode](../enums/roundingmode.md) |
`exponentialAt?` | number &#124; [number, number] |
`range?` | number &#124; [number, number] |
`errors?` | boolean &#124; number |
`crypto?` | boolean &#124; number |
`moduloMode?` | [RoundingMode](../enums/roundingmode.md) |
`powPrecision?` | undefined &#124; number |
`format?` | [Format](../interfaces/format.md) |

**Returns:** *[Configuration](../interfaces/configuration.md)*

___

### `Static` max

▸ **max**(...`args`: [Array](../interfaces/regexpmatcharray.md#array)‹number | string | [BigNumber](bignumber.md)›): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:384

Returns a BigNumber whose value is the maximum of `arg1`, `arg2`,... . The argument to this method can also be an
array of values. The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.max(4e9, x, '123456789.9')          // '4000000000'

arr = [12, '13', new BigNumber(14)]
BigNumber.max(arr)                            // '14'
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](../interfaces/regexpmatcharray.md#array)‹number &#124; string &#124; [BigNumber](bignumber.md)› |

**Returns:** *[BigNumber](bignumber.md)*

▸ **max**(`args`: [Array](../interfaces/regexpmatcharray.md#array)‹number | string | [BigNumber](bignumber.md)›): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:385

**Parameters:**

Name | Type |
------ | ------ |
`args` | [Array](../interfaces/regexpmatcharray.md#array)‹number &#124; string &#124; [BigNumber](bignumber.md)› |

**Returns:** *[BigNumber](bignumber.md)*

___

### `Static` min

▸ **min**(...`args`: [Array](../interfaces/regexpmatcharray.md#array)‹number | string | [BigNumber](bignumber.md)›): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:399

See BigNumber for further parameter details. Returns a BigNumber whose value is the minimum of arg1, arg2,... .
The argument to this method can also be an array of values. The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.min(4e9, x, '123456789.9')          // '123456789.9'

arr = [2, new BigNumber(-14), '-15.9999', -12]
BigNumber.min(arr)                            // '-15.9999'
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](../interfaces/regexpmatcharray.md#array)‹number &#124; string &#124; [BigNumber](bignumber.md)› |

**Returns:** *[BigNumber](bignumber.md)*

▸ **min**(`args`: [Array](../interfaces/regexpmatcharray.md#array)‹number | string | [BigNumber](bignumber.md)›): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:400

**Parameters:**

Name | Type |
------ | ------ |
`args` | [Array](../interfaces/regexpmatcharray.md#array)‹number &#124; string &#124; [BigNumber](bignumber.md)› |

**Returns:** *[BigNumber](bignumber.md)*

___

### `Static` random

▸ **random**(`dp?`: undefined | number): *[BigNumber](bignumber.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:426

Returns a new BigNumber with a pseudo-random value equal to or greater than 0 and less than 1.

The return value
will have dp decimal places (or less if trailing zeros are produced). If dp is omitted then the number of decimal
places will default to the current `DECIMAL_PLACES` setting.

Depending on the value of this BigNumber constructor's
`CRYPTO` setting and the support for the crypto object in the host environment, the random digits of the return
value are generated by either `Math.random` (fastest), `crypto.getRandomValues` (Web Cryptography API in recent
browsers) or  `crypto.randomBytes` (Node.js).

If `CRYPTO` is true, i.e. one of the crypto methods is to be used, the
value of a returned BigNumber should be cryptographically-secure and statistically indistinguishable from a
random value.

```ts
BigNumber.config({ DECIMAL_PLACES: 10 })
BigNumber.random()              // '0.4117936847'
BigNumber.random(20)            // '0.78193327636914089009'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dp?` | undefined &#124; number | integer, `0` to `1e+9` inclusive  |

**Returns:** *[BigNumber](bignumber.md)*
