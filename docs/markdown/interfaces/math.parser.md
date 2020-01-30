[typescript](../README.md) › [Globals](../globals.md) › [math](../modules/math.md) › [Parser](math.parser.md)

# Interface: Parser

## Hierarchy

* **Parser**

## Index

### Properties

* [clear](math.parser.md#clear)
* [set](math.parser.md#set)

### Methods

* [evaluate](math.parser.md#evaluate)
* [get](math.parser.md#get)
* [getAll](math.parser.md#getall)

## Properties

###  clear

• **clear**: *function*

Defined in node_modules/@types/mathjs/index.d.ts:3245

#### Type declaration:

▸ (): *void*

___

###  set

• **set**: *function*

Defined in node_modules/@types/mathjs/index.d.ts:3244

#### Type declaration:

▸ (`variable`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`variable` | string |
`value` | any |

## Methods

###  evaluate

▸ **evaluate**(`expr`: string): *any*

Defined in node_modules/@types/mathjs/index.d.ts:3241

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |

**Returns:** *any*

___

###  get

▸ **get**(`variable`: string): *any*

Defined in node_modules/@types/mathjs/index.d.ts:3242

**Parameters:**

Name | Type |
------ | ------ |
`variable` | string |

**Returns:** *any*

___

###  getAll

▸ **getAll**(): *object*

Defined in node_modules/@types/mathjs/index.d.ts:3243

**Returns:** *object*

* \[ **key**: *string*\]: any
