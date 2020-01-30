[typescript](../README.md) › [Globals](../globals.md) › [RedisQueue](redisqueue.md)

# Class: RedisQueue

## Hierarchy

* **RedisQueue**

## Implements

* [IQueue](../interfaces/iqueue.md)

## Index

### Constructors

* [constructor](redisqueue.md#constructor)

### Properties

* [redis](redisqueue.md#private-redis)

### Methods

* [add](redisqueue.md#add)
* [appendEvent](redisqueue.md#appendevent)
* [del](redisqueue.md#del)
* [delAll](redisqueue.md#delall)
* [get](redisqueue.md#get)
* [getAll](redisqueue.md#getall)
* [pop](redisqueue.md#pop)

## Constructors

###  constructor

\+ **new RedisQueue**(`options`: any): *[RedisQueue](redisqueue.md)*

*Defined in [src/lib/queues/redis.ts:7](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *[RedisQueue](redisqueue.md)*

## Properties

### `Private` redis

• **redis**: *any*

*Defined in [src/lib/queues/redis.ts:7](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L7)*

## Methods

###  add

▸ **add**(`queue`: string, `data`: object, `id?`: undefined | string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md)›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/redis.ts:23](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L23)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string | - |
`data` | object | - |
`id?` | undefined &#124; string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md)›*

___

###  appendEvent

▸ **appendEvent**(`queue`: string, `id`: string, `event_name`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/redis.ts:141](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |
`event_name` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  del

▸ **del**(`queue`: string, `id`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/redis.ts:101](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  delAll

▸ **delAll**(`queue`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/redis.ts:128](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L128)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  get

▸ **get**(`queue`: string, `id`: string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | undefined›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/redis.ts:44](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L44)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string | - |
`id` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | undefined›*

___

###  getAll

▸ **getAll**(`queue`: string): *[Promise](../interfaces/promise.md)‹[Array](../interfaces/regexpmatcharray.md#array)‹[MQTX](../interfaces/mqtx.md)››*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/redis.ts:66](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L66)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[Array](../interfaces/regexpmatcharray.md#array)‹[MQTX](../interfaces/mqtx.md)››*

___

###  pop

▸ **pop**(`queue`: string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/redis.ts:85](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/redis.ts#L85)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | boolean›*
