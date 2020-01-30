[typescript](../README.md) › [Globals](../globals.md) › [RoundingMode](roundingmode.md)

# Enumeration: RoundingMode

The library's enumerated rounding modes are stored as properties of the constructor.
(They are not referenced internally by the library itself.)
Rounding modes 0 to 6 (inclusive) are the same as those of Java's BigDecimal class.

## Index

### Enumeration members

* [EUCLID](roundingmode.md#euclid)
* [ROUND_CEIL](roundingmode.md#round_ceil)
* [ROUND_DOWN](roundingmode.md#round_down)
* [ROUND_FLOOR](roundingmode.md#round_floor)
* [ROUND_HALF_CEIL](roundingmode.md#round_half_ceil)
* [ROUND_HALF_DOWN](roundingmode.md#round_half_down)
* [ROUND_HALF_EVEN](roundingmode.md#round_half_even)
* [ROUND_HALF_FLOOR](roundingmode.md#round_half_floor)
* [ROUND_HALF_UP](roundingmode.md#round_half_up)
* [ROUND_UP](roundingmode.md#round_up)

## Enumeration members

###  EUCLID

• **EUCLID**: = 9

Defined in node_modules/bignumber.js/bignumber.d.ts:280

The remainder is always positive. Euclidian division: `q = sign(n) * floor(a / abs(n))`

___

###  ROUND_CEIL

• **ROUND_CEIL**: = 2

Defined in node_modules/bignumber.js/bignumber.d.ts:254

Rounds towards Infinity

___

###  ROUND_DOWN

• **ROUND_DOWN**: = 1

Defined in node_modules/bignumber.js/bignumber.d.ts:252

Rounds towards zero

___

###  ROUND_FLOOR

• **ROUND_FLOOR**: = 3

Defined in node_modules/bignumber.js/bignumber.d.ts:256

Rounds towards -Infinity

___

###  ROUND_HALF_CEIL

• **ROUND_HALF_CEIL**: = 7

Defined in node_modules/bignumber.js/bignumber.d.ts:272

Rounds towards nearest neighbour. If equidistant, rounds towards `Infinity`

___

###  ROUND_HALF_DOWN

• **ROUND_HALF_DOWN**: = 5

Defined in node_modules/bignumber.js/bignumber.d.ts:264

Rounds towards nearest neighbour. If equidistant, rounds towards zero

___

###  ROUND_HALF_EVEN

• **ROUND_HALF_EVEN**: = 6

Defined in node_modules/bignumber.js/bignumber.d.ts:268

Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour

___

###  ROUND_HALF_FLOOR

• **ROUND_HALF_FLOOR**: = 8

Defined in node_modules/bignumber.js/bignumber.d.ts:276

Rounds towards nearest neighbour. If equidistant, rounds towards `-Infinity`

___

###  ROUND_HALF_UP

• **ROUND_HALF_UP**: = 4

Defined in node_modules/bignumber.js/bignumber.d.ts:260

Rounds towards nearest neighbour. If equidistant, rounds away from zero

___

###  ROUND_UP

• **ROUND_UP**: = 0

Defined in node_modules/bignumber.js/bignumber.d.ts:250

Rounds away from zero
