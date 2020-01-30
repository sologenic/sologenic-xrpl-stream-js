[typescript](../README.md) › [Globals](../globals.md) › [math](../modules/math.md) › [Matrix](math.matrix.md)

# Interface: Matrix

## Hierarchy

* **Matrix**

## Index

### Properties

* [type](math.matrix.md#type)

### Methods

* [clone](math.matrix.md#clone)
* [create](math.matrix.md#create)
* [datatype](math.matrix.md#datatype)
* [density](math.matrix.md#density)
* [diagonal](math.matrix.md#diagonal)
* [forEach](math.matrix.md#foreach)
* [format](math.matrix.md#format)
* [get](math.matrix.md#get)
* [map](math.matrix.md#map)
* [resize](math.matrix.md#resize)
* [set](math.matrix.md#set)
* [size](math.matrix.md#size)
* [storage](math.matrix.md#storage)
* [subset](math.matrix.md#subset)
* [swapRows](math.matrix.md#swaprows)
* [toArray](math.matrix.md#toarray)
* [toJSON](math.matrix.md#tojson)
* [toString](math.matrix.md#tostring)
* [valueOff](math.matrix.md#valueoff)

## Properties

###  type

• **type**: *string*

Defined in node_modules/@types/mathjs/index.d.ts:2941

## Methods

###  clone

▸ **clone**(): *[Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2957

**Returns:** *[Matrix](math.matrix.md)*

___

###  create

▸ **create**(`data`: [MathArray](../modules/math.md#matharray), `datatype?`: undefined | string): *void*

Defined in node_modules/@types/mathjs/index.d.ts:2944

**Parameters:**

Name | Type |
------ | ------ |
`data` | [MathArray](../modules/math.md#matharray) |
`datatype?` | undefined &#124; string |

**Returns:** *void*

___

###  datatype

▸ **datatype**(): *string*

Defined in node_modules/@types/mathjs/index.d.ts:2943

**Returns:** *string*

___

###  density

▸ **density**(): *number*

Defined in node_modules/@types/mathjs/index.d.ts:2945

**Returns:** *number*

___

###  diagonal

▸ **diagonal**(`k?`: number | [BigNumber](math.bignumber.md)): *any[]*

Defined in node_modules/@types/mathjs/index.d.ts:2972

**Parameters:**

Name | Type |
------ | ------ |
`k?` | number &#124; [BigNumber](math.bignumber.md) |

**Returns:** *any[]*

___

###  forEach

▸ **forEach**(`callback`: function, `skipZeros?`: undefined | false | true): *void*

Defined in node_modules/@types/mathjs/index.d.ts:2963

**Parameters:**

▪ **callback**: *function*

▸ (`a`: any, `b`: number, `c`: [Matrix](math.matrix.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |
`b` | number |
`c` | [Matrix](math.matrix.md) |

▪`Optional`  **skipZeros**: *undefined | false | true*

**Returns:** *void*

___

###  format

▸ **format**(`options?`: [FormatOptions](math.formatoptions.md) | number | function): *string*

Defined in node_modules/@types/mathjs/index.d.ts:2969

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FormatOptions](math.formatoptions.md) &#124; number &#124; function |

**Returns:** *string*

___

###  get

▸ **get**(`index`: number[]): *any*

Defined in node_modules/@types/mathjs/index.d.ts:2947

**Parameters:**

Name | Type |
------ | ------ |
`index` | number[] |

**Returns:** *any*

___

###  map

▸ **map**(`callback`: function, `skipZeros?`: undefined | false | true): *[Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2959

**Parameters:**

▪ **callback**: *function*

▸ (`a`: any, `b`: number, `c`: [Matrix](math.matrix.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |
`b` | number |
`c` | [Matrix](math.matrix.md) |

▪`Optional`  **skipZeros**: *undefined | false | true*

**Returns:** *[Matrix](math.matrix.md)*

___

###  resize

▸ **resize**(`size`: [MathArray](../modules/math.md#matharray) | [Matrix](math.matrix.md), `defaultValue?`: number | string): *[Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2953

**Parameters:**

Name | Type |
------ | ------ |
`size` | [MathArray](../modules/math.md#matharray) &#124; [Matrix](math.matrix.md) |
`defaultValue?` | number &#124; string |

**Returns:** *[Matrix](math.matrix.md)*

___

###  set

▸ **set**(`index`: number[], `value`: any, `defaultValue?`: number | string): *[Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2948

**Parameters:**

Name | Type |
------ | ------ |
`index` | number[] |
`value` | any |
`defaultValue?` | number &#124; string |

**Returns:** *[Matrix](math.matrix.md)*

___

###  size

▸ **size**(): *number[]*

Defined in node_modules/@types/mathjs/index.d.ts:2958

**Returns:** *number[]*

___

###  storage

▸ **storage**(): *string*

Defined in node_modules/@types/mathjs/index.d.ts:2942

**Returns:** *string*

___

###  subset

▸ **subset**(`index`: [Index](math.index.md), `replacement?`: any, `defaultValue?`: any): *[Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2946

**Parameters:**

Name | Type |
------ | ------ |
`index` | [Index](math.index.md) |
`replacement?` | any |
`defaultValue?` | any |

**Returns:** *[Matrix](math.matrix.md)*

___

###  swapRows

▸ **swapRows**(`i`: number, `j`: number): *[Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2973

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |

**Returns:** *[Matrix](math.matrix.md)*

___

###  toArray

▸ **toArray**(): *[MathArray](../modules/math.md#matharray) | [Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2967

**Returns:** *[MathArray](../modules/math.md#matharray) | [Matrix](math.matrix.md)*

___

###  toJSON

▸ **toJSON**(): *any*

Defined in node_modules/@types/mathjs/index.d.ts:2971

**Returns:** *any*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/@types/mathjs/index.d.ts:2970

**Returns:** *string*

___

###  valueOff

▸ **valueOff**(): *[MathArray](../modules/math.md#matharray) | [Matrix](math.matrix.md)*

Defined in node_modules/@types/mathjs/index.d.ts:2968

**Returns:** *[MathArray](../modules/math.md#matharray) | [Matrix](math.matrix.md)*
