[typescript](../README.md) › [Globals](../globals.md) › [IORedis](../modules/ioredis.md) › [Command](ioredis.command.md)

# Interface: Command

## Hierarchy

* **Command**

## Index

### Methods

* [setArgumentTransformer](ioredis.command.md#setargumenttransformer)
* [setReplyTransformer](ioredis.command.md#setreplytransformer)

## Methods

###  setArgumentTransformer

▸ **setArgumentTransformer**(`name`: string, `fn`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:55

**Parameters:**

▪ **name**: *string*

▪ **fn**: *function*

▸ (`args`: any[]): *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any[] |

**Returns:** *void*

___

###  setReplyTransformer

▸ **setReplyTransformer**(`name`: string, `fn`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:56

**Parameters:**

▪ **name**: *string*

▪ **fn**: *function*

▸ (`result`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

**Returns:** *void*
