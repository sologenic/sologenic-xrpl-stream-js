[typescript](../README.md) › [Globals](../globals.md) › [Configuration](configuration.md)

# Interface: Configuration

## Hierarchy

* **Configuration**

## Index

### Properties

* [CRYPTO](configuration.md#optional-crypto)
* [DECIMAL_PLACES](configuration.md#optional-decimal_places)
* [ERRORS](configuration.md#optional-errors)
* [EXPONENTIAL_AT](configuration.md#optional-exponential_at)
* [FORMAT](configuration.md#optional-format)
* [MODULO_MODE](configuration.md#optional-modulo_mode)
* [POW_PRECISION](configuration.md#optional-pow_precision)
* [RANGE](configuration.md#optional-range)
* [ROUNDING_MODE](configuration.md#optional-rounding_mode)

## Properties

### `Optional` CRYPTO

• **CRYPTO**? : *boolean | number*

Defined in node_modules/bignumber.js/bignumber.d.ts:160

`true`, `false`, `0` or  `1`.

The value that determines whether cryptographically-secure pseudo-random number generation is used.

If `CRYPTO` is set to `true` then the random method will generate random digits using `crypto.getRandomValues` in
browsers that support it, or `crypto.randomBytes` if using a version of Node.js that supports it.

If neither function is supported by the host environment then attempting to set `CRYPTO` to `true` will fail, and
if [Configuration.ERRORS](configuration.md#optional-errors) is `true` an exception will be thrown.

If `CRYPTO` is `false` then the source of randomness used will be `Math.random` (which is assumed to generate at
least 30 bits of randomness).

See [BigNumber.random](../classes/bignumber.md#static-random).

```ts
BigNumber.config({ CRYPTO: true })
BigNumber.config().CRYPTO       // true
BigNumber.random()              // 0.54340758610486147524
```

**`default`** `false`

___

### `Optional` DECIMAL_PLACES

• **DECIMAL_PLACES**? : *undefined | number*

Defined in node_modules/bignumber.js/bignumber.d.ts:34

integer, `0` to `1e+9` inclusive

The maximum number of decimal places of the results of operations involving division, i.e. division, square root
and base conversion operations, and power operations with negative exponents.

```ts
BigNumber.config({ DECIMAL_PLACES: 5 })
BigNumber.config(5)    // equivalent
```

**`default`** 20

___

### `Optional` ERRORS

• **ERRORS**? : *boolean | number*

Defined in node_modules/bignumber.js/bignumber.d.ts:134

The value that determines whether BigNumber Errors are thrown. If ERRORS is false, no errors will be thrown.
`true`, `false`, `0` or `1`.
```ts
BigNumber.config({ ERRORS: false })
```

**`default`** `true`

___

### `Optional` EXPONENTIAL_AT

• **EXPONENTIAL_AT**? : *number | [number, number]*

Defined in node_modules/bignumber.js/bignumber.d.ts:83

 - `number`: integer, magnitude `0` to `1e+9` inclusive
 - `number[]`: [ integer `-1e+9` to `0` inclusive, integer `0` to `1e+9` inclusive ]

The exponent value(s) at which `toString` returns exponential notation.

If a single number is assigned, the value
is the exponent magnitude.

If an array of two numbers is assigned then the first number is the negative exponent
value at and beneath which exponential notation is used, and the second number is the positive exponent value at
and above which the same.

For example, to emulate JavaScript numbers in terms of the exponent values at which
they begin to use exponential notation, use [-7, 20].

```ts
BigNumber.config({ EXPONENTIAL_AT: 2 })
new BigNumber(12.3)         // '12.3'        e is only 1
new BigNumber(123)          // '1.23e+2'
new BigNumber(0.123)        // '0.123'       e is only -1
new BigNumber(0.0123)       // '1.23e-2'

BigNumber.config({ EXPONENTIAL_AT: [-7, 20] })
new BigNumber(123456789)    // '123456789'   e is only 8
new BigNumber(0.000000123)  // '1.23e-7'

// Almost never return exponential notation:
BigNumber.config({ EXPONENTIAL_AT: 1e+9 })

// Always return exponential notation:
BigNumber.config({ EXPONENTIAL_AT: 0 })
```
Regardless of the value of `EXPONENTIAL_AT`, the `toFixed` method will always return a value in normal notation
and the `toExponential` method will always return a value in exponential form.

Calling `toString` with a base argument, e.g. `toString(10)`, will also always return normal notation.

**`default`** `[-7, 20]`

___

### `Optional` FORMAT

• **FORMAT**? : *[Format](format.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:240

The FORMAT object configures the format of the string returned by the `toFormat` method. The example below shows
the properties of the FORMAT object that are recognised, and their default values. Unlike the other configuration
properties, the values of the properties of the FORMAT object will not be checked for validity. The existing
FORMAT object will simply be replaced by the object that is passed in. Note that all the properties shown below
do not have to be included.

See `toFormat` for examples of usage.

```ts
BigNumber.config({
    FORMAT: {
        // the decimal separator
        decimalSeparator: '.',
        // the grouping separator of the integer part
        groupSeparator: ',',
        // the primary grouping size of the integer part
        groupSize: 3,
        // the secondary grouping size of the integer part
        secondaryGroupSize: 0,
        // the grouping separator of the fraction part
        fractionGroupSeparator: ' ',
        // the grouping size of the fraction part
        fractionGroupSize: 0
    }
});
```

___

### `Optional` MODULO_MODE

• **MODULO_MODE**? : *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:193

The modulo mode used when calculating the modulus: `a mod n`.

The quotient, `q = a / n`, is calculated according to
the [Configuration.ROUNDING_MODE](configuration.md#optional-rounding_mode) that corresponds to the chosen MODULO_MODE.

The remainder, r, is calculated as: `r = a - n * q`.

The modes that are most commonly used for the modulus/remainder operation are shown in the following table.
Although the other rounding modes can be used, they may not give useful results.

 Property          | Value | Description
-------------------|:-----:|---------------------------------------------------------------------------------------
 `ROUND_UP`        |   0   | The remainder is positive if the dividend is negative, otherwise it is negative.
 `ROUND_DOWN`      |   1   | The remainder has the same sign as the dividend. This uses 'truncating division' and matches the behaviour of JavaScript's remainder operator `%`.
 `ROUND_FLOOR`     |   3   | The remainder has the same sign as the divisor.
                   |       | This matches Python's % operator.
 `ROUND_HALF_EVEN` |   6   | The IEEE 754 remainder function.
 `EUCLID`          |   9   | The remainder is always positive. Euclidian division: `q = sign(n) * floor(a / abs(n))`

The rounding/modulo modes are available as enumerated properties of the BigNumber constructor.

See [BigNumber.modulo](../classes/bignumber.md#modulo)

```ts
BigNumber.config({ MODULO_MODE: BigNumber.EUCLID })
BigNumber.config({ MODULO_MODE: 9 })          // equivalent
```

**`default`** [RoundingMode.ROUND_DOWN](../enums/roundingmode.md#round_down)

___

### `Optional` POW_PRECISION

• **POW_PRECISION**? : *undefined | number*

Defined in node_modules/bignumber.js/bignumber.d.ts:210

integer, `0` to `1e+9` inclusive.

The maximum number of significant digits of the result of the power operation (unless a modulus is specified).

If set to 0, the number of signifcant digits will not be limited.

See [BigNumber.toPower](../classes/bignumber.md#topower)

```ts
BigNumber.config({ POW_PRECISION: 100 })
```

**`default`** 100

___

### `Optional` RANGE

• **RANGE**? : *number | [number, number]*

Defined in node_modules/bignumber.js/bignumber.d.ts:122

 - number: integer, magnitude `1` to `1e+9` inclusive
 - number[]: [ integer `-1e+9` to `-1` inclusive, integer `1` to `1e+9` inclusive ]

The exponent value(s) beyond which overflow to `Infinity` and underflow to zero occurs.

If a single number is
assigned, it is the maximum exponent magnitude: values wth a positive exponent of greater magnitude become
Infinity and those with a negative exponent of greater magnitude become zero.

If an array of two numbers is
assigned then the first number is the negative exponent limit and the second number is the positive exponent
limit.

For example, to emulate JavaScript numbers in terms of the exponent values at which they become zero and
Infinity, use [-324, 308].

```ts
BigNumber.config({ RANGE: 500 })
BigNumber.config().RANGE     // [ -500, 500 ]
new BigNumber('9.999e499')   // '9.999e+499'
new BigNumber('1e500')       // 'Infinity'
new BigNumber('1e-499')      // '1e-499'
new BigNumber('1e-500')      // '0'
BigNumber.config({ RANGE: [-3, 4] })
new BigNumber(99999)         // '99999'      e is only 4
new BigNumber(100000)        // 'Infinity'   e is 5
new BigNumber(0.001)         // '0.01'       e is only -3
new BigNumber(0.0001)        // '0'          e is -4
```

The largest possible magnitude of a finite BigNumber is `9.999...e+1000000000`.

The smallest possible magnitude of a non-zero BigNumber is `1e-1000000000`.

**`default`** `[-1e+9, 1e+9]`

___

### `Optional` ROUNDING_MODE

• **ROUNDING_MODE**? : *[RoundingMode](../enums/roundingmode.md)*

Defined in node_modules/bignumber.js/bignumber.d.ts:41

The rounding mode used in the above operations and the default rounding mode of round, toExponential, toFixed,
toFormat and toPrecision. The modes are available as enumerated properties of the BigNumber constructor.

**`default`** [RoundingMode.ROUND_HALF_UP](../enums/roundingmode.md#round_half_up)
