[typescript](../README.md) › [Globals](../globals.md) › [math](../modules/math.md) › [Unit](math.unit.md)

# Interface: Unit

## Hierarchy

* **Unit**

## Index

### Methods

* [abs](math.unit.md#abs)
* [clone](math.unit.md#clone)
* [divide](math.unit.md#divide)
* [equalBase](math.unit.md#equalbase)
* [equals](math.unit.md#equals)
* [format](math.unit.md#format)
* [formatUnits](math.unit.md#formatunits)
* [hasBase](math.unit.md#hasbase)
* [multiply](math.unit.md#multiply)
* [pow](math.unit.md#pow)
* [splitUnit](math.unit.md#splitunit)
* [to](math.unit.md#to)
* [toJSON](math.unit.md#tojson)
* [toNumber](math.unit.md#tonumber)
* [toNumeric](math.unit.md#tonumeric)
* [toSI](math.unit.md#tosi)
* [toString](math.unit.md#tostring)
* [valueOf](math.unit.md#valueof)

## Methods

###  abs

▸ **abs**(`unit`: [Unit](math.unit.md)): *[Unit](math.unit.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3020

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](math.unit.md) |

**Returns:** *[Unit](math.unit.md)*

___

###  clone

▸ **clone**(): *[Unit](math.unit.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3013

**Returns:** *[Unit](math.unit.md)*

___

###  divide

▸ **divide**(`unit`: [Unit](math.unit.md)): *[Unit](math.unit.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3018

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](math.unit.md) |

**Returns:** *[Unit](math.unit.md)*

___

###  equalBase

▸ **equalBase**(`unit`: [Unit](math.unit.md)): *boolean*

Defined in node_modules/@types/mathjs/index.d.ts:3015

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](math.unit.md) |

**Returns:** *boolean*

___

###  equals

▸ **equals**(`unit`: [Unit](math.unit.md)): *boolean*

Defined in node_modules/@types/mathjs/index.d.ts:3016

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](math.unit.md) |

**Returns:** *boolean*

___

###  format

▸ **format**(`options`: [FormatOptions](math.formatoptions.md)): *string*

Defined in node_modules/@types/mathjs/index.d.ts:3028

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FormatOptions](math.formatoptions.md) |

**Returns:** *string*

___

###  formatUnits

▸ **formatUnits**(): *string*

Defined in node_modules/@types/mathjs/index.d.ts:3027

**Returns:** *string*

___

###  hasBase

▸ **hasBase**(`base`: any): *boolean*

Defined in node_modules/@types/mathjs/index.d.ts:3014

**Parameters:**

Name | Type |
------ | ------ |
`base` | any |

**Returns:** *boolean*

___

###  multiply

▸ **multiply**(`unit`: [Unit](math.unit.md)): *[Unit](math.unit.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3017

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](math.unit.md) |

**Returns:** *[Unit](math.unit.md)*

___

###  pow

▸ **pow**(`unit`: [Unit](math.unit.md)): *[Unit](math.unit.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3019

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](math.unit.md) |

**Returns:** *[Unit](math.unit.md)*

___

###  splitUnit

▸ **splitUnit**(`parts`: [ReadonlyArray](readonlyarray.md)‹string | [Unit](math.unit.md)›): *[Unit](math.unit.md)[]*

Defined in node_modules/@types/mathjs/index.d.ts:3029

**Parameters:**

Name | Type |
------ | ------ |
`parts` | [ReadonlyArray](readonlyarray.md)‹string &#124; [Unit](math.unit.md)› |

**Returns:** *[Unit](math.unit.md)[]*

___

###  to

▸ **to**(`unit`: string): *[Unit](math.unit.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3021

**Parameters:**

Name | Type |
------ | ------ |
`unit` | string |

**Returns:** *[Unit](math.unit.md)*

___

###  toJSON

▸ **toJSON**(): *[MathJSON](math.mathjson.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3026

**Returns:** *[MathJSON](math.mathjson.md)*

___

###  toNumber

▸ **toNumber**(`unit`: string): *number*

Defined in node_modules/@types/mathjs/index.d.ts:3022

**Parameters:**

Name | Type |
------ | ------ |
`unit` | string |

**Returns:** *number*

___

###  toNumeric

▸ **toNumeric**(`unit`: string): *number | [Fraction](math.fraction.md) | [BigNumber](math.bignumber.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3023

**Parameters:**

Name | Type |
------ | ------ |
`unit` | string |

**Returns:** *number | [Fraction](math.fraction.md) | [BigNumber](math.bignumber.md)*

___

###  toSI

▸ **toSI**(): *[Unit](math.unit.md)*

Defined in node_modules/@types/mathjs/index.d.ts:3024

**Returns:** *[Unit](math.unit.md)*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/@types/mathjs/index.d.ts:3025

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *string*

Defined in node_modules/@types/mathjs/index.d.ts:3012

**Returns:** *string*
