[typescript](../README.md) › [Globals](../globals.md) › [math](../modules/math.md) › [Complex](math.complex.md)

# Interface: Complex

## Hierarchy

* **Complex**

## Index

### Properties

* [im](math.complex.md#im)
* [re](math.complex.md#re)

### Methods

* [clone](math.complex.md#clone)
* [compare](math.complex.md#compare)
* [equals](math.complex.md#equals)
* [format](math.complex.md#format)
* [fromJSON](math.complex.md#fromjson)
* [fromPolar](math.complex.md#frompolar)
* [toJSON](math.complex.md#tojson)
* [toPolar](math.complex.md#topolar)
* [toString](math.complex.md#tostring)

## Properties

###  im

• **im**: *number*

Defined in node_modules/@types/mathjs/index.d.ts:2986

___

###  re

• **re**: *number*

Defined in node_modules/@types/mathjs/index.d.ts:2985

## Methods

###  clone

▸ **clone**(): *[Complex](math.complex.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2987

**Returns:** *[Complex](math.complex.md)*

___

###  compare

▸ **compare**(`a`: [Complex](math.complex.md), `b`: [Complex](math.complex.md)): *number*

Defined in node_modules/@types/mathjs/index.d.ts:2996

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Complex](math.complex.md) |
`b` | [Complex](math.complex.md) |

**Returns:** *number*

___

###  equals

▸ **equals**(`other`: [Complex](math.complex.md)): *boolean*

Defined in node_modules/@types/mathjs/index.d.ts:2988

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Complex](math.complex.md) |

**Returns:** *boolean*

___

###  format

▸ **format**(`precision?`: undefined | number): *string*

Defined in node_modules/@types/mathjs/index.d.ts:2989

**Parameters:**

Name | Type |
------ | ------ |
`precision?` | undefined &#124; number |

**Returns:** *string*

___

###  fromJSON

▸ **fromJSON**(`json`: object): *[Complex](math.complex.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2990

**Parameters:**

Name | Type |
------ | ------ |
`json` | object |

**Returns:** *[Complex](math.complex.md)*

___

###  fromPolar

▸ **fromPolar**(`polar`: object): *[Complex](math.complex.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2991

**Parameters:**

Name | Type |
------ | ------ |
`polar` | object |

**Returns:** *[Complex](math.complex.md)*

▸ **fromPolar**(`r`: number, `phi`: number): *[Complex](math.complex.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2992

**Parameters:**

Name | Type |
------ | ------ |
`r` | number |
`phi` | number |

**Returns:** *[Complex](math.complex.md)*

___

###  toJSON

▸ **toJSON**(): *object*

Defined in node_modules/@types/mathjs/index.d.ts:2993

**Returns:** *object*

___

###  toPolar

▸ **toPolar**(): *[PolarCoordinates](math.polarcoordinates.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2994

**Returns:** *[PolarCoordinates](math.polarcoordinates.md)*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/@types/mathjs/index.d.ts:2995

**Returns:** *string*
