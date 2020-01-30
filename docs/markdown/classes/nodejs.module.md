[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [Module](nodejs.module.md)

# Class: Module

## Hierarchy

* **Module**

## Index

### Constructors

* [constructor](nodejs.module.md#constructor)

### Properties

* [children](nodejs.module.md#children)
* [exports](nodejs.module.md#exports)
* [filename](nodejs.module.md#filename)
* [id](nodejs.module.md#id)
* [loaded](nodejs.module.md#loaded)
* [parent](nodejs.module.md#parent)
* [paths](nodejs.module.md#paths)
* [require](nodejs.module.md#require)
* [Module](nodejs.module.md#static-module)
* [builtinModules](nodejs.module.md#static-builtinmodules)

### Methods

* [createRequire](nodejs.module.md#static-createrequire)
* [createRequireFromPath](nodejs.module.md#static-createrequirefrompath)
* [runMain](nodejs.module.md#static-runmain)
* [wrap](nodejs.module.md#static-wrap)

## Constructors

###  constructor

\+ **new Module**(`id`: string, `parent?`: [Module](nodejs.module.md#static-module)): *[Module](nodejs.module.md)*

Defined in node_modules/@types/node/globals.d.ts:1150

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`parent?` | [Module](nodejs.module.md#static-module) |

**Returns:** *[Module](nodejs.module.md)*

## Properties

###  children

• **children**: *[Module](nodejs.module.md)[]*

Defined in node_modules/@types/node/globals.d.ts:1149

___

###  exports

• **exports**: *any*

Defined in node_modules/@types/node/globals.d.ts:1143

___

###  filename

• **filename**: *string*

Defined in node_modules/@types/node/globals.d.ts:1146

___

###  id

• **id**: *string*

Defined in node_modules/@types/node/globals.d.ts:1145

___

###  loaded

• **loaded**: *boolean*

Defined in node_modules/@types/node/globals.d.ts:1147

___

###  parent

• **parent**: *[Module](nodejs.module.md) | null*

Defined in node_modules/@types/node/globals.d.ts:1148

___

###  paths

• **paths**: *string[]*

Defined in node_modules/@types/node/globals.d.ts:1150

___

###  require

• **require**: *[NodeRequireFunction](../interfaces/noderequirefunction.md)*

Defined in node_modules/@types/node/globals.d.ts:1144

___

### `Static` Module

▪ **Module**: *typeof Module*

Defined in node_modules/@types/node/globals.d.ts:1141

___

### `Static` builtinModules

▪ **builtinModules**: *string[]*

Defined in node_modules/@types/node/globals.d.ts:1139

## Methods

### `Static` createRequire

▸ **createRequire**(`path`: string): *[NodeRequireFunction](../interfaces/noderequirefunction.md)*

Defined in node_modules/@types/node/globals.d.ts:1138

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[NodeRequireFunction](../interfaces/noderequirefunction.md)*

___

### `Static` createRequireFromPath

▸ **createRequireFromPath**(`path`: string): *[NodeRequireFunction](../interfaces/noderequirefunction.md)*

Defined in node_modules/@types/node/globals.d.ts:1137

**`deprecated`** Deprecated since: v12.2.0. Please use createRequire() instead.

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[NodeRequireFunction](../interfaces/noderequirefunction.md)*

___

### `Static` runMain

▸ **runMain**(): *void*

Defined in node_modules/@types/node/globals.d.ts:1131

**Returns:** *void*

___

### `Static` wrap

▸ **wrap**(`code`: string): *string*

Defined in node_modules/@types/node/globals.d.ts:1132

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *string*
