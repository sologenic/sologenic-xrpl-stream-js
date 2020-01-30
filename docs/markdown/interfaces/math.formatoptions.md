[typescript](../README.md) › [Globals](../globals.md) › [math](../modules/math.md) › [FormatOptions](math.formatoptions.md)

# Interface: FormatOptions

## Hierarchy

* **FormatOptions**

## Index

### Properties

* [fraction](math.formatoptions.md#optional-fraction)
* [lowerExp](math.formatoptions.md#optional-lowerexp)
* [notation](math.formatoptions.md#optional-notation)
* [precision](math.formatoptions.md#optional-precision)
* [upperExp](math.formatoptions.md#optional-upperexp)

## Properties

### `Optional` fraction

• **fraction**? : *undefined | string*

Defined in node_modules/@types/mathjs/index.d.ts:3292

Available values: 'ratio' (default) or 'decimal'. For example
format(fraction(1, 3)) will output '1/3' when 'ratio' is configured,
and will output 0.(3) when 'decimal' is configured.

___

### `Optional` lowerExp

• **lowerExp**? : *undefined | number*

Defined in node_modules/@types/mathjs/index.d.ts:3279

Exponent determining the lower boundary for formatting a value with
an exponent when notation='auto. Default value is -3.

___

### `Optional` notation

• **notation**? : *"fixed" | "exponential" | "engineering" | "auto"*

Defined in node_modules/@types/mathjs/index.d.ts:3264

Number notation. Choose from: 'fixed' Always use regular number
notation. For example '123.40' and '14000000' 'exponential' Always
use exponential notation. For example '1.234e+2' and '1.4e+7' 'auto'
(default) Regular number notation for numbers having an absolute
value between lower and upper bounds, and uses exponential notation
elsewhere. Lower bound is included, upper bound is excluded. For
example '123.4' and '1.4e7'.

___

### `Optional` precision

• **precision**? : *undefined | number*

Defined in node_modules/@types/mathjs/index.d.ts:3273

A number between 0 and 16 to round the digits of the number. In case
of notations 'exponential' and 'auto', precision defines the total
number of significant digits returned and is undefined by default. In
case of notation 'fixed', precision defines the number of significant
digits after the decimal point, and is 0 by default.

___

### `Optional` upperExp

• **upperExp**? : *undefined | number*

Defined in node_modules/@types/mathjs/index.d.ts:3285

Exponent determining the upper boundary for formatting a value with
an exponent when notation='auto. Default value is 5.
