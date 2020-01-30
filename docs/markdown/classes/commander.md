[typescript](../README.md) › [Globals](../globals.md) › [Commander](commander.md)

# Class: Commander

## Hierarchy

* **Commander**

  ↳ [Redis](../interfaces/ioredis.redis.md)

  ↳ [Cluster](../interfaces/ioredis.cluster.md)

  ↳ [ClusterStatic](../interfaces/ioredis.clusterstatic.md)

## Index

### Methods

* [createBuiltinCommand](commander.md#createbuiltincommand)
* [defineCommand](commander.md#definecommand)
* [getBuiltinCommands](commander.md#getbuiltincommands)
* [sendCommand](commander.md#sendcommand)

## Methods

###  createBuiltinCommand

▸ **createBuiltinCommand**(`commandName`: string): *object*

Defined in node_modules/@types/ioredis/index.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`commandName` | string |

**Returns:** *object*

___

###  defineCommand

▸ **defineCommand**(`name`: string, `definition`: object): *any*

Defined in node_modules/@types/ioredis/index.d.ts:44

**Parameters:**

▪ **name**: *string*

▪ **definition**: *object*

Name | Type |
------ | ------ |
`lua?` | undefined &#124; string |
`numberOfKeys?` | undefined &#124; number |

**Returns:** *any*

___

###  getBuiltinCommands

▸ **getBuiltinCommands**(): *string[]*

Defined in node_modules/@types/ioredis/index.d.ts:42

**Returns:** *string[]*

___

###  sendCommand

▸ **sendCommand**(): *void*

Defined in node_modules/@types/ioredis/index.d.ts:48

**Returns:** *void*
