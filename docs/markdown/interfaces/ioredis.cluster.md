[typescript](../README.md) › [Globals](../globals.md) › [IORedis](../modules/ioredis.md) › [Cluster](ioredis.cluster.md)

# Interface: Cluster

## Hierarchy

* [EventEmitter](../classes/nodejs.eventemitter.md)

* [Commander](../classes/commander.md)

  ↳ **Cluster**

## Index

### Methods

* [addListener](ioredis.cluster.md#addlistener)
* [connect](ioredis.cluster.md#connect)
* [createBuiltinCommand](ioredis.cluster.md#createbuiltincommand)
* [decr](ioredis.cluster.md#decr)
* [defineCommand](ioredis.cluster.md#definecommand)
* [del](ioredis.cluster.md#del)
* [disconnect](ioredis.cluster.md#disconnect)
* [emit](ioredis.cluster.md#emit)
* [eventNames](ioredis.cluster.md#eventnames)
* [expire](ioredis.cluster.md#expire)
* [get](ioredis.cluster.md#get)
* [getBuffer](ioredis.cluster.md#getbuffer)
* [getBuiltinCommands](ioredis.cluster.md#getbuiltincommands)
* [getMaxListeners](ioredis.cluster.md#getmaxlisteners)
* [hget](ioredis.cluster.md#hget)
* [hset](ioredis.cluster.md#hset)
* [incr](ioredis.cluster.md#incr)
* [keys](ioredis.cluster.md#keys)
* [listenerCount](ioredis.cluster.md#listenercount)
* [listeners](ioredis.cluster.md#listeners)
* [llen](ioredis.cluster.md#llen)
* [lpopBuffer](ioredis.cluster.md#lpopbuffer)
* [lrangeBuffer](ioredis.cluster.md#lrangebuffer)
* [nodes](ioredis.cluster.md#nodes)
* [off](ioredis.cluster.md#off)
* [on](ioredis.cluster.md#on)
* [once](ioredis.cluster.md#once)
* [prependListener](ioredis.cluster.md#prependlistener)
* [prependOnceListener](ioredis.cluster.md#prependoncelistener)
* [quit](ioredis.cluster.md#quit)
* [rawListeners](ioredis.cluster.md#rawlisteners)
* [removeAllListeners](ioredis.cluster.md#removealllisteners)
* [removeListener](ioredis.cluster.md#removelistener)
* [rpush](ioredis.cluster.md#rpush)
* [rpushBuffer](ioredis.cluster.md#rpushbuffer)
* [sendCommand](ioredis.cluster.md#sendcommand)
* [set](ioredis.cluster.md#set)
* [setBuffer](ioredis.cluster.md#setbuffer)
* [setMaxListeners](ioredis.cluster.md#setmaxlisteners)
* [setnx](ioredis.cluster.md#setnx)
* [zadd](ioredis.cluster.md#zadd)
* [zrange](ioredis.cluster.md#zrange)
* [zrem](ioredis.cluster.md#zrem)

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:608

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  connect

▸ **connect**(`callback`: function): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:910

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

**Returns:** *[Promise](promise.md)‹any›*

___

###  createBuiltinCommand

▸ **createBuiltinCommand**(`commandName`: string): *object*

*Inherited from [Commander](../classes/commander.md).[createBuiltinCommand](../classes/commander.md#createbuiltincommand)*

Defined in node_modules/@types/ioredis/index.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`commandName` | string |

**Returns:** *object*

___

###  decr

▸ **decr**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:940

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **decr**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:941

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  defineCommand

▸ **defineCommand**(`name`: string, `definition`: object): *any*

*Inherited from [Commander](../classes/commander.md).[defineCommand](../classes/commander.md#definecommand)*

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

###  del

▸ **del**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:935

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Promise](promise.md)‹number›*

___

###  disconnect

▸ **disconnect**(): *void*

Defined in node_modules/@types/ioredis/index.d.ts:911

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:618

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[eventNames](../classes/nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:623

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  expire

▸ **expire**(`key`: [KeyType](../modules/ioredis.md#keytype), `seconds`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:970

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **seconds**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **expire**(`key`: [KeyType](../modules/ioredis.md#keytype), `seconds`: number): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:971

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`seconds` | number |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  get

▸ **get**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:914

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string &#124; null |

**Returns:** *void*

▸ **get**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹string | null›*

Defined in node_modules/@types/ioredis/index.d.ts:915

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹string | null›*

___

###  getBuffer

▸ **getBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:917

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **getBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/ioredis/index.d.ts:918

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

___

###  getBuiltinCommands

▸ **getBuiltinCommands**(): *string[]*

*Inherited from [Commander](../classes/commander.md).[getBuiltinCommands](../classes/commander.md#getbuiltincommands)*

Defined in node_modules/@types/ioredis/index.d.ts:42

**Returns:** *string[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[getMaxListeners](../classes/nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:615

**Returns:** *number*

___

###  hget

▸ **hget**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:967

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **field**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string &#124; null |

**Returns:** *void*

▸ **hget**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string): *[Promise](promise.md)‹string | null›*

Defined in node_modules/@types/ioredis/index.d.ts:968

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |

**Returns:** *[Promise](promise.md)‹string | null›*

___

###  hset

▸ **hset**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:964

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **field**: *string*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **hset**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:965

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`value` | any |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  incr

▸ **incr**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:937

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **incr**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:938

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  keys

▸ **keys**(`pattern`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:973

**Parameters:**

▪ **pattern**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string[] |

**Returns:** *void*

▸ **keys**(`pattern`: string): *[Promise](promise.md)‹string[]›*

Defined in node_modules/@types/ioredis/index.d.ts:974

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string |

**Returns:** *[Promise](promise.md)‹string[]›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[listenerCount](../classes/nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:619

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:616

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  llen

▸ **llen**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:950

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **llen**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:951

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  lpopBuffer

▸ **lpopBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:947

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **lpopBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/ioredis/index.d.ts:948

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

___

###  lrangeBuffer

▸ **lrangeBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:953

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md)[] |

**Returns:** *void*

▸ **lrangeBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)[]›*

Defined in node_modules/@types/ioredis/index.d.ts:954

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)[]›*

___

###  nodes

▸ **nodes**(`role?`: [NodeRole](../modules/ioredis.md#noderole)): *[Redis](ioredis.redis.md)[]*

Defined in node_modules/@types/ioredis/index.d.ts:912

**Parameters:**

Name | Type |
------ | ------ |
`role?` | [NodeRole](../modules/ioredis.md#noderole) |

**Returns:** *[Redis](ioredis.redis.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[off](../classes/nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/globals.d.ts:612

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:609

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:610

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:621

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:622

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  quit

▸ **quit**(`callback?`: [CallbackFunction](../modules/ioredis.md#callbackfunction)‹"OK"›): *[Promise](promise.md)‹"OK"›*

Defined in node_modules/@types/ioredis/index.d.ts:913

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [CallbackFunction](../modules/ioredis.md#callbackfunction)‹"OK"› |

**Returns:** *[Promise](promise.md)‹"OK"›*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[rawListeners](../classes/nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeAllListeners](../classes/nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeListener](../classes/nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:611

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rpush

▸ **rpush**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`values`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:943

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...values` | any[] |

**Returns:** *any*

___

###  rpushBuffer

▸ **rpushBuffer**(`key`: string, ...`values`: [Buffer](../classes/buffer.md)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:945

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`...values` | [Buffer](../classes/buffer.md)[] |

**Returns:** *any*

___

###  sendCommand

▸ **sendCommand**(): *void*

*Inherited from [Commander](../classes/commander.md).[sendCommand](../classes/commander.md#sendcommand)*

Defined in node_modules/@types/ioredis/index.d.ts:48

**Returns:** *void*

___

###  set

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode?`: string | any[], `time?`: number | string, `setMode?`: number | string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:920

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`expiryMode?` | string &#124; any[] |
`time?` | number &#124; string |
`setMode?` | number &#124; string |

**Returns:** *[Promise](promise.md)‹string›*

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:921

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `setMode`: string | any[], `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:922

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **setMode**: *string | any[]*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number | string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:923

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **expiryMode**: *string*

▪ **time**: *number | string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number | string, `setMode`: number | string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:924

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **expiryMode**: *string*

▪ **time**: *number | string*

▪ **setMode**: *number | string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

___

###  setBuffer

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode?`: string | any[], `time?`: number | string, `setMode?`: number | string): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/ioredis/index.d.ts:926

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`expiryMode?` | string &#124; any[] |
`time?` | number &#124; string |
`setMode?` | number &#124; string |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:927

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `setMode`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:928

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **setMode**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:929

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **expiryMode**: *string*

▪ **time**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number | string, `setMode`: number | string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:930

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **expiryMode**: *string*

▪ **time**: *number | string*

▪ **setMode**: *number | string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[setMaxListeners](../classes/nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setnx

▸ **setnx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:932

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **setnx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:933

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |

**Returns:** *[Promise](promise.md)‹any›*

___

###  zadd

▸ **zadd**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *[Promise](promise.md)‹number | string›*

Defined in node_modules/@types/ioredis/index.d.ts:956

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *[Promise](promise.md)‹number | string›*

___

###  zrange

▸ **zrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:960

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **zrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:961

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **start**: *number*

▪ **stop**: *number*

▪ **withScores**: *"WITHSCORES"*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **zrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `withScores?`: undefined | "WITHSCORES"): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:962

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *[Promise](promise.md)‹any›*

___

###  zrem

▸ **zrem**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`members`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:958

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...members` | any[] |

**Returns:** *any*
