[typescript](../README.md) › [Globals](../globals.md) › [RangeSet](rangeset.md)

# Class: RangeSet

## Hierarchy

* **RangeSet**

## Index

### Constructors

* [constructor](rangeset.md#constructor)

### Properties

* [ranges](rangeset.md#ranges)

### Methods

* [addRange](rangeset.md#addrange)
* [addValue](rangeset.md#addvalue)
* [containsRange](rangeset.md#containsrange)
* [containsValue](rangeset.md#containsvalue)
* [parseAndAddRanges](rangeset.md#parseandaddranges)
* [reset](rangeset.md#reset)
* [serialize](rangeset.md#serialize)

## Constructors

###  constructor

\+ **new RangeSet**(): *[RangeSet](rangeset.md)*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:2

**Returns:** *[RangeSet](rangeset.md)*

## Properties

###  ranges

• **ranges**: *[Array](../interfaces/regexpmatcharray.md#array)‹[number, number]›*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:2

## Methods

###  addRange

▸ **addRange**(`start`: number, `end`: number): *void*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *void*

___

###  addValue

▸ **addValue**(`value`: number): *void*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  containsRange

▸ **containsRange**(`start`: number, `end`: number): *boolean*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *boolean*

___

###  containsValue

▸ **containsValue**(`value`: number): *boolean*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *boolean*

___

###  parseAndAddRanges

▸ **parseAndAddRanges**(`rangesString`: string): *void*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`rangesString` | string |

**Returns:** *void*

___

###  reset

▸ **reset**(): *void*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:4

**Returns:** *void*

___

###  serialize

▸ **serialize**(): *string*

Defined in node_modules/ripple-lib/dist/npm/common/rangeset.d.ts:5

**Returns:** *string*
