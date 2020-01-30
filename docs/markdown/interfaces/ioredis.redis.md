[typescript](../README.md) › [Globals](../globals.md) › [IORedis](../modules/ioredis.md) › [Redis](ioredis.redis.md)

# Interface: Redis

## Hierarchy

* [EventEmitter](../classes/nodejs.eventemitter.md)

* [Commander](../classes/commander.md)

  ↳ **Redis**

## Index

### Properties

* [Promise](ioredis.redis.md#promise)
* [status](ioredis.redis.md#status)

### Methods

* [addListener](ioredis.redis.md#addlistener)
* [append](ioredis.redis.md#append)
* [auth](ioredis.redis.md#auth)
* [bgrewriteaof](ioredis.redis.md#bgrewriteaof)
* [bgsave](ioredis.redis.md#bgsave)
* [bitcount](ioredis.redis.md#bitcount)
* [blpop](ioredis.redis.md#blpop)
* [brpop](ioredis.redis.md#brpop)
* [brpoplpush](ioredis.redis.md#brpoplpush)
* [client](ioredis.redis.md#client)
* [cluster](ioredis.redis.md#cluster)
* [config](ioredis.redis.md#config)
* [connect](ioredis.redis.md#connect)
* [createBuiltinCommand](ioredis.redis.md#createbuiltincommand)
* [dbsize](ioredis.redis.md#dbsize)
* [debug](ioredis.redis.md#debug)
* [decr](ioredis.redis.md#decr)
* [decrby](ioredis.redis.md#decrby)
* [defineCommand](ioredis.redis.md#definecommand)
* [del](ioredis.redis.md#del)
* [discard](ioredis.redis.md#discard)
* [disconnect](ioredis.redis.md#disconnect)
* [dump](ioredis.redis.md#dump)
* [duplicate](ioredis.redis.md#duplicate)
* [echo](ioredis.redis.md#echo)
* [emit](ioredis.redis.md#emit)
* [eval](ioredis.redis.md#eval)
* [evalsha](ioredis.redis.md#evalsha)
* [eventNames](ioredis.redis.md#eventnames)
* [exec](ioredis.redis.md#exec)
* [exists](ioredis.redis.md#exists)
* [expire](ioredis.redis.md#expire)
* [expireat](ioredis.redis.md#expireat)
* [flushall](ioredis.redis.md#flushall)
* [flushdb](ioredis.redis.md#flushdb)
* [get](ioredis.redis.md#get)
* [getBuffer](ioredis.redis.md#getbuffer)
* [getBuiltinCommands](ioredis.redis.md#getbuiltincommands)
* [getMaxListeners](ioredis.redis.md#getmaxlisteners)
* [getbit](ioredis.redis.md#getbit)
* [getrange](ioredis.redis.md#getrange)
* [getset](ioredis.redis.md#getset)
* [hdel](ioredis.redis.md#hdel)
* [hexists](ioredis.redis.md#hexists)
* [hget](ioredis.redis.md#hget)
* [hgetBuffer](ioredis.redis.md#hgetbuffer)
* [hgetall](ioredis.redis.md#hgetall)
* [hincrby](ioredis.redis.md#hincrby)
* [hincrbyfloat](ioredis.redis.md#hincrbyfloat)
* [hkeys](ioredis.redis.md#hkeys)
* [hlen](ioredis.redis.md#hlen)
* [hmget](ioredis.redis.md#hmget)
* [hmset](ioredis.redis.md#hmset)
* [hscan](ioredis.redis.md#hscan)
* [hscanStream](ioredis.redis.md#hscanstream)
* [hset](ioredis.redis.md#hset)
* [hsetBuffer](ioredis.redis.md#hsetbuffer)
* [hsetnx](ioredis.redis.md#hsetnx)
* [hvals](ioredis.redis.md#hvals)
* [incr](ioredis.redis.md#incr)
* [incrby](ioredis.redis.md#incrby)
* [incrbyfloat](ioredis.redis.md#incrbyfloat)
* [info](ioredis.redis.md#info)
* [keys](ioredis.redis.md#keys)
* [lastsave](ioredis.redis.md#lastsave)
* [lindex](ioredis.redis.md#lindex)
* [linsert](ioredis.redis.md#linsert)
* [listenerCount](ioredis.redis.md#listenercount)
* [listeners](ioredis.redis.md#listeners)
* [llen](ioredis.redis.md#llen)
* [lpop](ioredis.redis.md#lpop)
* [lpopBuffer](ioredis.redis.md#lpopbuffer)
* [lpush](ioredis.redis.md#lpush)
* [lpushx](ioredis.redis.md#lpushx)
* [lrange](ioredis.redis.md#lrange)
* [lrangeBuffer](ioredis.redis.md#lrangebuffer)
* [lrem](ioredis.redis.md#lrem)
* [lset](ioredis.redis.md#lset)
* [ltrim](ioredis.redis.md#ltrim)
* [mget](ioredis.redis.md#mget)
* [migrate](ioredis.redis.md#migrate)
* [monitor](ioredis.redis.md#monitor)
* [move](ioredis.redis.md#move)
* [mset](ioredis.redis.md#mset)
* [msetnx](ioredis.redis.md#msetnx)
* [multi](ioredis.redis.md#multi)
* [object](ioredis.redis.md#object)
* [off](ioredis.redis.md#off)
* [on](ioredis.redis.md#on)
* [once](ioredis.redis.md#once)
* [persist](ioredis.redis.md#persist)
* [pexpire](ioredis.redis.md#pexpire)
* [pexpireat](ioredis.redis.md#pexpireat)
* [pfadd](ioredis.redis.md#pfadd)
* [pfcount](ioredis.redis.md#pfcount)
* [pfmerge](ioredis.redis.md#pfmerge)
* [ping](ioredis.redis.md#ping)
* [pipeline](ioredis.redis.md#pipeline)
* [prependListener](ioredis.redis.md#prependlistener)
* [prependOnceListener](ioredis.redis.md#prependoncelistener)
* [psetex](ioredis.redis.md#psetex)
* [psubscribe](ioredis.redis.md#psubscribe)
* [pttl](ioredis.redis.md#pttl)
* [publish](ioredis.redis.md#publish)
* [publishBuffer](ioredis.redis.md#publishbuffer)
* [punsubscribe](ioredis.redis.md#punsubscribe)
* [quit](ioredis.redis.md#quit)
* [randomkey](ioredis.redis.md#randomkey)
* [rawListeners](ioredis.redis.md#rawlisteners)
* [removeAllListeners](ioredis.redis.md#removealllisteners)
* [removeListener](ioredis.redis.md#removelistener)
* [rename](ioredis.redis.md#rename)
* [renamenx](ioredis.redis.md#renamenx)
* [restore](ioredis.redis.md#restore)
* [rpop](ioredis.redis.md#rpop)
* [rpoplpush](ioredis.redis.md#rpoplpush)
* [rpoplpushBuffer](ioredis.redis.md#rpoplpushbuffer)
* [rpush](ioredis.redis.md#rpush)
* [rpushBuffer](ioredis.redis.md#rpushbuffer)
* [rpushx](ioredis.redis.md#rpushx)
* [sadd](ioredis.redis.md#sadd)
* [save](ioredis.redis.md#save)
* [scan](ioredis.redis.md#scan)
* [scanStream](ioredis.redis.md#scanstream)
* [scard](ioredis.redis.md#scard)
* [script](ioredis.redis.md#script)
* [sdiff](ioredis.redis.md#sdiff)
* [sdiffstore](ioredis.redis.md#sdiffstore)
* [select](ioredis.redis.md#select)
* [sendCommand](ioredis.redis.md#sendcommand)
* [send_command](ioredis.redis.md#send_command)
* [set](ioredis.redis.md#set)
* [setBuffer](ioredis.redis.md#setbuffer)
* [setMaxListeners](ioredis.redis.md#setmaxlisteners)
* [setbit](ioredis.redis.md#setbit)
* [setex](ioredis.redis.md#setex)
* [setnx](ioredis.redis.md#setnx)
* [setrange](ioredis.redis.md#setrange)
* [shutdown](ioredis.redis.md#shutdown)
* [sinter](ioredis.redis.md#sinter)
* [sinterstore](ioredis.redis.md#sinterstore)
* [sismember](ioredis.redis.md#sismember)
* [slaveof](ioredis.redis.md#slaveof)
* [smembers](ioredis.redis.md#smembers)
* [smove](ioredis.redis.md#smove)
* [sort](ioredis.redis.md#sort)
* [spop](ioredis.redis.md#spop)
* [srandmember](ioredis.redis.md#srandmember)
* [srem](ioredis.redis.md#srem)
* [sscan](ioredis.redis.md#sscan)
* [sscanStream](ioredis.redis.md#sscanstream)
* [strlen](ioredis.redis.md#strlen)
* [subscribe](ioredis.redis.md#subscribe)
* [substr](ioredis.redis.md#substr)
* [sunion](ioredis.redis.md#sunion)
* [sunionstore](ioredis.redis.md#sunionstore)
* [sync](ioredis.redis.md#sync)
* [time](ioredis.redis.md#time)
* [ttl](ioredis.redis.md#ttl)
* [type](ioredis.redis.md#type)
* [unlink](ioredis.redis.md#unlink)
* [unsubscribe](ioredis.redis.md#unsubscribe)
* [unwatch](ioredis.redis.md#unwatch)
* [watch](ioredis.redis.md#watch)
* [xack](ioredis.redis.md#xack)
* [xadd](ioredis.redis.md#xadd)
* [xclaim](ioredis.redis.md#xclaim)
* [xdel](ioredis.redis.md#xdel)
* [xgroup](ioredis.redis.md#xgroup)
* [xinfo](ioredis.redis.md#xinfo)
* [xlen](ioredis.redis.md#xlen)
* [xpending](ioredis.redis.md#xpending)
* [xrange](ioredis.redis.md#xrange)
* [xread](ioredis.redis.md#xread)
* [xreadgroup](ioredis.redis.md#xreadgroup)
* [xrevrange](ioredis.redis.md#xrevrange)
* [xtrim](ioredis.redis.md#xtrim)
* [zadd](ioredis.redis.md#zadd)
* [zaddBuffer](ioredis.redis.md#zaddbuffer)
* [zcard](ioredis.redis.md#zcard)
* [zcount](ioredis.redis.md#zcount)
* [zincrby](ioredis.redis.md#zincrby)
* [zinterstore](ioredis.redis.md#zinterstore)
* [zrange](ioredis.redis.md#zrange)
* [zrangebyscore](ioredis.redis.md#zrangebyscore)
* [zrank](ioredis.redis.md#zrank)
* [zrem](ioredis.redis.md#zrem)
* [zremrangebyrank](ioredis.redis.md#zremrangebyrank)
* [zremrangebyscore](ioredis.redis.md#zremrangebyscore)
* [zrevrange](ioredis.redis.md#zrevrange)
* [zrevrangebyscore](ioredis.redis.md#zrevrangebyscore)
* [zrevrank](ioredis.redis.md#zrevrank)
* [zscan](ioredis.redis.md#zscan)
* [zscanStream](ioredis.redis.md#zscanstream)
* [zscore](ioredis.redis.md#zscore)
* [zunionstore](ioredis.redis.md#zunionstore)

## Properties

###  Promise

• **Promise**: *typeof Promise*

Defined in node_modules/@types/ioredis/index.d.ts:60

___

###  status

• **status**: *string*

Defined in node_modules/@types/ioredis/index.d.ts:61

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

###  append

▸ **append**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:102

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **append**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:103

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |

**Returns:** *[Promise](promise.md)‹number›*

___

###  auth

▸ **auth**(`password`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:373

**Parameters:**

▪ **password**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **auth**(`password`: string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:374

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *[Promise](promise.md)‹string›*

___

###  bgrewriteaof

▸ **bgrewriteaof**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:389

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **bgrewriteaof**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:390

**Returns:** *[Promise](promise.md)‹string›*

___

###  bgsave

▸ **bgsave**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:386

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **bgsave**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:387

**Returns:** *[Promise](promise.md)‹string›*

___

###  bitcount

▸ **bitcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:68

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

▸ **bitcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:69

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **start**: *number*

▪ **end**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **bitcount**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

▸ **bitcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`end` | number |

**Returns:** *[Promise](promise.md)‹number›*

___

###  blpop

▸ **blpop**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:164

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  brpop

▸ **brpop**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:162

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  brpoplpush

▸ **brpoplpush**(`source`: string, `destination`: string, `timeout`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:166

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **timeout**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **brpoplpush**(`source`: string, `destination`: string, `timeout`: number): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:167

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`timeout` | number |

**Returns:** *[Promise](promise.md)‹any›*

___

###  client

▸ **client**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:476

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cluster

▸ **cluster**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:465

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  config

▸ **config**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:445

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  connect

▸ **connect**(`callback?`: undefined | function): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

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

###  dbsize

▸ **dbsize**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:370

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **dbsize**(): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:371

**Returns:** *[Promise](promise.md)‹number›*

___

###  debug

▸ **debug**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:443

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  decr

▸ **decr**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:133

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

Defined in node_modules/@types/ioredis/index.d.ts:134

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  decrby

▸ **decrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `decrement`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:326

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **decrement**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **decrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `decrement`: number): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:327

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`decrement` | number |

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

Defined in node_modules/@types/ioredis/index.d.ts:108

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Promise](promise.md)‹number›*

___

###  discard

▸ **discard**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:407

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **discard**(): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:408

**Returns:** *[Promise](promise.md)‹any›*

___

###  disconnect

▸ **disconnect**(): *void*

Defined in node_modules/@types/ioredis/index.d.ts:63

**Returns:** *void*

___

###  dump

▸ **dump**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:471

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **dump**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:472

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹string›*

___

###  duplicate

▸ **duplicate**(): *[Redis](ioredis.redis.md)*

Defined in node_modules/@types/ioredis/index.d.ts:64

**Returns:** *[Redis](ioredis.redis.md)*

___

###  echo

▸ **echo**(`message`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:380

**Parameters:**

▪ **message**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **echo**(`message`: string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:381

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[Promise](promise.md)‹string›*

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

###  eval

▸ **eval**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:478

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  evalsha

▸ **evalsha**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:480

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[eventNames](../classes/nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:623

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  exec

▸ **exec**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:404

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **exec**(): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:405

**Returns:** *[Promise](promise.md)‹any›*

___

###  exists

▸ **exists**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:112

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Promise](promise.md)‹number›*

▸ **exists**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:113

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

___

###  expire

▸ **expire**(`key`: [KeyType](../modules/ioredis.md#keytype), `seconds`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:355

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

Defined in node_modules/@types/ioredis/index.d.ts:356

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`seconds` | number |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  expireat

▸ **expireat**(`key`: [KeyType](../modules/ioredis.md#keytype), `timestamp`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:361

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **timestamp**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **expireat**(`key`: [KeyType](../modules/ioredis.md#keytype), `timestamp`: number): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:362

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`timestamp` | number |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  flushall

▸ **flushall**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:416

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **flushall**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:417

**Returns:** *[Promise](promise.md)‹string›*

___

###  flushdb

▸ **flushdb**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:413

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **flushdb**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:414

**Returns:** *[Promise](promise.md)‹string›*

___

###  get

▸ **get**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:73

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

Defined in node_modules/@types/ioredis/index.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹string | null›*

___

###  getBuffer

▸ **getBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:76

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

Defined in node_modules/@types/ioredis/index.d.ts:77

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

###  getbit

▸ **getbit**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:118

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **offset**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **getbit**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:119

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`offset` | number |

**Returns:** *[Promise](promise.md)‹number›*

___

###  getrange

▸ **getrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:124

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **start**: *number*

▪ **end**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **getrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:125

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`end` | number |

**Returns:** *[Promise](promise.md)‹string›*

___

###  getset

▸ **getset**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:329

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string &#124; null |

**Returns:** *void*

▸ **getset**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any): *[Promise](promise.md)‹string | null›*

Defined in node_modules/@types/ioredis/index.d.ts:330

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |

**Returns:** *[Promise](promise.md)‹string | null›*

___

###  hdel

▸ **hdel**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`fields`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:303

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...fields` | string[] |

**Returns:** *any*

___

###  hexists

▸ **hexists**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:317

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **field**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **hexists**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:318

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  hget

▸ **hget**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:286

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

Defined in node_modules/@types/ioredis/index.d.ts:287

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |

**Returns:** *[Promise](promise.md)‹string | null›*

___

###  hgetBuffer

▸ **hgetBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:288

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **field**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **hgetBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/ioredis/index.d.ts:289

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

___

###  hgetall

▸ **hgetall**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:314

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **hgetall**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:315

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹any›*

___

###  hincrby

▸ **hincrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `increment`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:297

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **field**: *string*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **hincrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `increment`: number): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:298

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`increment` | number |

**Returns:** *[Promise](promise.md)‹number›*

___

###  hincrbyfloat

▸ **hincrbyfloat**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `increment`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:300

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **field**: *string*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **hincrbyfloat**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `increment`: number): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:301

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`increment` | number |

**Returns:** *[Promise](promise.md)‹number›*

___

###  hkeys

▸ **hkeys**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:308

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **hkeys**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:309

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹any›*

___

###  hlen

▸ **hlen**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:305

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

▸ **hlen**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  hmget

▸ **hmget**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`fields`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:295

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...fields` | string[] |

**Returns:** *any*

___

###  hmset

▸ **hmset**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: any[]): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:291

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | any[] |

**Returns:** *[Promise](promise.md)‹0 | 1›*

▸ **hmset**(`key`: [KeyType](../modules/ioredis.md#keytype), `data`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:292

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **data**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **hmset**(`key`: [KeyType](../modules/ioredis.md#keytype), `data`: any): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:293

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`data` | any |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  hscan

▸ **hscan**(`key`: [KeyType](../modules/ioredis.md#keytype), `cursor`: number, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:497

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`cursor` | number |
`...args` | any[] |

**Returns:** *any*

___

###  hscanStream

▸ **hscanStream**(`key`: [KeyType](../modules/ioredis.md#keytype), `options?`: [ScanStreamOption](ioredis.scanstreamoption.md)): *[Readable](../classes/_stream_.internal.readable.md)*

Defined in node_modules/@types/ioredis/index.d.ts:511

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`options?` | [ScanStreamOption](ioredis.scanstreamoption.md) |

**Returns:** *[Readable](../classes/_stream_.internal.readable.md)*

___

###  hset

▸ **hset**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:278

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

Defined in node_modules/@types/ioredis/index.d.ts:279

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`value` | any |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  hsetBuffer

▸ **hsetBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:280

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

▸ **hsetBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/ioredis/index.d.ts:281

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`value` | any |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

___

###  hsetnx

▸ **hsetnx**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:283

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

▸ **hsetnx**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:284

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`value` | any |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  hvals

▸ **hvals**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:311

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **hvals**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:312

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹any›*

___

###  incr

▸ **incr**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:130

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

Defined in node_modules/@types/ioredis/index.d.ts:131

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  incrby

▸ **incrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:320

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **incrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:321

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`increment` | number |

**Returns:** *[Promise](promise.md)‹number›*

___

###  incrbyfloat

▸ **incrbyfloat**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:323

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **incrbyfloat**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:324

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`increment` | number |

**Returns:** *[Promise](promise.md)‹number›*

___

###  info

▸ **info**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:421

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **info**(`section`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:422

**Parameters:**

▪ **section**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **info**(`section?`: undefined | string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:423

**Parameters:**

Name | Type |
------ | ------ |
`section?` | undefined &#124; string |

**Returns:** *[Promise](promise.md)‹string›*

___

###  keys

▸ **keys**(`pattern`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:367

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

Defined in node_modules/@types/ioredis/index.d.ts:368

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string |

**Returns:** *[Promise](promise.md)‹string[]›*

___

###  lastsave

▸ **lastsave**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:395

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **lastsave**(): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:396

**Returns:** *[Promise](promise.md)‹number›*

___

###  lindex

▸ **lindex**(`key`: [KeyType](../modules/ioredis.md#keytype), `index`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:172

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **index**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **lindex**(`key`: [KeyType](../modules/ioredis.md#keytype), `index`: number): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:173

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`index` | number |

**Returns:** *[Promise](promise.md)‹string›*

___

###  linsert

▸ **linsert**(`key`: [KeyType](../modules/ioredis.md#keytype), `direction`: "BEFORE" | "AFTER", `pivot`: string, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:150

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **direction**: *"BEFORE" | "AFTER"*

▪ **pivot**: *string*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **linsert**(`key`: [KeyType](../modules/ioredis.md#keytype), `direction`: "BEFORE" | "AFTER", `pivot`: string, `value`: any): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:151

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`direction` | "BEFORE" &#124; "AFTER" |
`pivot` | string |
`value` | any |

**Returns:** *[Promise](promise.md)‹number›*

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

Defined in node_modules/@types/ioredis/index.d.ts:169

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

Defined in node_modules/@types/ioredis/index.d.ts:170

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  lpop

▸ **lpop**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:156

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **lpop**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:157

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹string›*

___

###  lpopBuffer

▸ **lpopBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:159

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

Defined in node_modules/@types/ioredis/index.d.ts:160

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

___

###  lpush

▸ **lpush**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`values`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:142

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...values` | any[] |

**Returns:** *any*

___

###  lpushx

▸ **lpushx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:147

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **lpushx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:148

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |

**Returns:** *[Promise](promise.md)‹number›*

___

###  lrange

▸ **lrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:178

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

▸ **lrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:179

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |

**Returns:** *[Promise](promise.md)‹any›*

___

###  lrangeBuffer

▸ **lrangeBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:181

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

Defined in node_modules/@types/ioredis/index.d.ts:182

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)[]›*

___

###  lrem

▸ **lrem**(`key`: [KeyType](../modules/ioredis.md#keytype), `count`: number, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:187

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **count**: *number*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **lrem**(`key`: [KeyType](../modules/ioredis.md#keytype), `count`: number, `value`: any): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:188

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`count` | number |
`value` | any |

**Returns:** *[Promise](promise.md)‹number›*

___

###  lset

▸ **lset**(`key`: [KeyType](../modules/ioredis.md#keytype), `index`: number, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:175

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **index**: *number*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **lset**(`key`: [KeyType](../modules/ioredis.md#keytype), `index`: number, `value`: any): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:176

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`index` | number |
`value` | any |

**Returns:** *[Promise](promise.md)‹any›*

___

###  ltrim

▸ **ltrim**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:184

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

▸ **ltrim**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:185

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |

**Returns:** *[Promise](promise.md)‹any›*

___

###  mget

▸ **mget**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:136

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  migrate

▸ **migrate**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:469

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  monitor

▸ **monitor**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:428

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [EventEmitter](../classes/nodejs.eventemitter.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [EventEmitter](../classes/nodejs.eventemitter.md) |

**Returns:** *void*

▸ **monitor**(): *[Promise](promise.md)‹[EventEmitter](../classes/nodejs.eventemitter.md)›*

Defined in node_modules/@types/ioredis/index.d.ts:429

**Returns:** *[Promise](promise.md)‹[EventEmitter](../classes/nodejs.eventemitter.md)›*

___

###  move

▸ **move**(`key`: [KeyType](../modules/ioredis.md#keytype), `db`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:346

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **db**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **move**(`key`: [KeyType](../modules/ioredis.md#keytype), `db`: string): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:347

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`db` | string |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  mset

▸ **mset**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:332

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

▸ **mset**(`data`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:333

**Parameters:**

▪ **data**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **mset**(`data`: any): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:334

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *[Promise](promise.md)‹string›*

___

###  msetnx

▸ **msetnx**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:336

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

▸ **msetnx**(`data`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:337

**Parameters:**

▪ **data**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **msetnx**(`data`: any): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:338

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  multi

▸ **multi**(`commands?`: string[][], `options?`: [MultiOptions](ioredis.multioptions.md)): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:401

**Parameters:**

Name | Type |
------ | ------ |
`commands?` | string[][] |
`options?` | [MultiOptions](ioredis.multioptions.md) |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **multi**(`options`: object): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:402

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`pipeline` | false |

**Returns:** *[Promise](promise.md)‹string›*

___

###  object

▸ **object**(`subcommand`: string, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:474

**Parameters:**

Name | Type |
------ | ------ |
`subcommand` | string |
`...args` | any[] |

**Returns:** *any*

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

###  persist

▸ **persist**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:437

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **persist**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:438

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  pexpire

▸ **pexpire**(`key`: [KeyType](../modules/ioredis.md#keytype), `milliseconds`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:358

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **milliseconds**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **pexpire**(`key`: [KeyType](../modules/ioredis.md#keytype), `milliseconds`: number): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:359

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`milliseconds` | number |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  pexpireat

▸ **pexpireat**(`key`: [KeyType](../modules/ioredis.md#keytype), `millisecondsTimestamp`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:364

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **millisecondsTimestamp**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **pexpireat**(`key`: [KeyType](../modules/ioredis.md#keytype), `millisecondsTimestamp`: number): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:365

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`millisecondsTimestamp` | number |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  pfadd

▸ **pfadd**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`elements`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:503

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...elements` | string[] |

**Returns:** *any*

___

###  pfcount

▸ **pfcount**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:505

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  pfmerge

▸ **pfmerge**(`destkey`: [KeyType](../modules/ioredis.md#keytype), ...`sourcekeys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:501

**Parameters:**

Name | Type |
------ | ------ |
`destkey` | [KeyType](../modules/ioredis.md#keytype) |
`...sourcekeys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  ping

▸ **ping**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:376

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **ping**(`message`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:377

**Parameters:**

▪ **message**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **ping**(`message?`: undefined | string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:378

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

**Returns:** *[Promise](promise.md)‹string›*

___

###  pipeline

▸ **pipeline**(`commands?`: string[][]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:507

**Parameters:**

Name | Type |
------ | ------ |
`commands?` | string[][] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

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

###  psetex

▸ **psetex**(`key`: [KeyType](../modules/ioredis.md#keytype), `milliseconds`: number, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:99

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **milliseconds**: *number*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **psetex**(`key`: [KeyType](../modules/ioredis.md#keytype), `milliseconds`: number, `value`: any): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:100

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`milliseconds` | number |
`value` | any |

**Returns:** *[Promise](promise.md)‹any›*

___

###  psubscribe

▸ **psubscribe**(...`patterns`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:451

**Parameters:**

Name | Type |
------ | ------ |
`...patterns` | string[] |

**Returns:** *any*

___

###  pttl

▸ **pttl**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:434

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

▸ **pttl**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:435

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  publish

▸ **publish**(`channel`: string, `message`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:455

**Parameters:**

▪ **channel**: *string*

▪ **message**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **publish**(`channel`: string, `message`: string): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:456

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | string |

**Returns:** *[Promise](promise.md)‹number›*

___

###  publishBuffer

▸ **publishBuffer**(`channel`: string, `message`: [Buffer](../classes/buffer.md)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:458

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | [Buffer](../classes/buffer.md) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  punsubscribe

▸ **punsubscribe**(...`patterns`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:453

**Parameters:**

Name | Type |
------ | ------ |
`...patterns` | string[] |

**Returns:** *any*

___

###  quit

▸ **quit**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:484

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **quit**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:485

**Returns:** *[Promise](promise.md)‹string›*

___

###  randomkey

▸ **randomkey**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:340

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **randomkey**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:341

**Returns:** *[Promise](promise.md)‹string›*

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

###  rename

▸ **rename**(`key`: [KeyType](../modules/ioredis.md#keytype), `newkey`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:349

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **newkey**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **rename**(`key`: [KeyType](../modules/ioredis.md#keytype), `newkey`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:350

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`newkey` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹string›*

___

###  renamenx

▸ **renamenx**(`key`: [KeyType](../modules/ioredis.md#keytype), `newkey`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:352

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **newkey**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 0 | 1): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 0 &#124; 1 |

**Returns:** *void*

▸ **renamenx**(`key`: [KeyType](../modules/ioredis.md#keytype), `newkey`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹0 | 1›*

Defined in node_modules/@types/ioredis/index.d.ts:353

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`newkey` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹0 | 1›*

___

###  restore

▸ **restore**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:467

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rpop

▸ **rpop**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:153

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **rpop**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:154

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹string›*

___

###  rpoplpush

▸ **rpoplpush**(`source`: string, `destination`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:190

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **rpoplpush**(`source`: string, `destination`: string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:191

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |

**Returns:** *[Promise](promise.md)‹string›*

___

###  rpoplpushBuffer

▸ **rpoplpushBuffer**(`source`: string, `destination`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:193

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **rpoplpushBuffer**(`source`: string, `destination`: string): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/ioredis/index.d.ts:194

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

___

###  rpush

▸ **rpush**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`values`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:138

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...values` | any[] |

**Returns:** *any*

___

###  rpushBuffer

▸ **rpushBuffer**(`key`: string, ...`values`: [Buffer](../classes/buffer.md)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:140

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`...values` | [Buffer](../classes/buffer.md)[] |

**Returns:** *any*

___

###  rpushx

▸ **rpushx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:144

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **rpushx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:145

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |

**Returns:** *[Promise](promise.md)‹number›*

___

###  sadd

▸ **sadd**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`members`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:196

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...members` | any[] |

**Returns:** *any*

___

###  save

▸ **save**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:383

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **save**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:384

**Returns:** *[Promise](promise.md)‹string›*

___

###  scan

▸ **scan**(`cursor`: number): *[Promise](promise.md)‹[string, string[]]›*

Defined in node_modules/@types/ioredis/index.d.ts:487

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |

**Returns:** *[Promise](promise.md)‹[string, string[]]›*

▸ **scan**(`cursor`: number, `matchOption`: "match" | "MATCH", `pattern`: string): *[Promise](promise.md)‹[string, string[]]›*

Defined in node_modules/@types/ioredis/index.d.ts:489

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *[Promise](promise.md)‹[string, string[]]›*

▸ **scan**(`cursor`: number, `countOption`: "count" | "COUNT", `count`: number): *[Promise](promise.md)‹[string, string[]]›*

Defined in node_modules/@types/ioredis/index.d.ts:490

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *[Promise](promise.md)‹[string, string[]]›*

▸ **scan**(`cursor`: number, `matchOption`: "match" | "MATCH", `pattern`: string, `countOption`: "count" | "COUNT", `count`: number): *[Promise](promise.md)‹[string, string[]]›*

Defined in node_modules/@types/ioredis/index.d.ts:492

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *[Promise](promise.md)‹[string, string[]]›*

▸ **scan**(`cursor`: number, `countOption`: "count" | "COUNT", `count`: number, `matchOption`: "match" | "MATCH", `pattern`: string): *[Promise](promise.md)‹[string, string[]]›*

Defined in node_modules/@types/ioredis/index.d.ts:493

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`countOption` | "count" &#124; "COUNT" |
`count` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *[Promise](promise.md)‹[string, string[]]›*

___

###  scanStream

▸ **scanStream**(`options?`: [ScanStreamOption](ioredis.scanstreamoption.md)): *[Readable](../classes/_stream_.internal.readable.md)*

Defined in node_modules/@types/ioredis/index.d.ts:509

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ScanStreamOption](ioredis.scanstreamoption.md) |

**Returns:** *[Readable](../classes/_stream_.internal.readable.md)*

___

###  scard

▸ **scard**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:206

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

▸ **scard**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:207

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  script

▸ **script**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:482

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sdiff

▸ **sdiff**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:225

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  sdiffstore

▸ **sdiffstore**(`destination`: string, ...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:227

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  select

▸ **select**(`index`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:343

**Parameters:**

▪ **index**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **select**(`index`: number): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:344

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Promise](promise.md)‹string›*

___

###  sendCommand

▸ **sendCommand**(): *void*

*Inherited from [Commander](../classes/commander.md).[sendCommand](../classes/commander.md#sendcommand)*

Defined in node_modules/@types/ioredis/index.d.ts:48

**Returns:** *void*

___

###  send_command

▸ **send_command**(`command`: string, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`...args` | any[] |

**Returns:** *any*

___

###  set

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode?`: string | any[], `time?`: number | string, `setMode?`: number | string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:79

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

Defined in node_modules/@types/ioredis/index.d.ts:81

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

Defined in node_modules/@types/ioredis/index.d.ts:82

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

Defined in node_modules/@types/ioredis/index.d.ts:83

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

Defined in node_modules/@types/ioredis/index.d.ts:84

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

Defined in node_modules/@types/ioredis/index.d.ts:86

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

Defined in node_modules/@types/ioredis/index.d.ts:88

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

Defined in node_modules/@types/ioredis/index.d.ts:89

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

Defined in node_modules/@types/ioredis/index.d.ts:90

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

Defined in node_modules/@types/ioredis/index.d.ts:91

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

###  setbit

▸ **setbit**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:115

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **offset**: *number*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **setbit**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `value`: any): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:116

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`offset` | number |
`value` | any |

**Returns:** *[Promise](promise.md)‹number›*

___

###  setex

▸ **setex**(`key`: [KeyType](../modules/ioredis.md#keytype), `seconds`: number, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:96

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **seconds**: *number*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **setex**(`key`: [KeyType](../modules/ioredis.md#keytype), `seconds`: number, `value`: any): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`seconds` | number |
`value` | any |

**Returns:** *[Promise](promise.md)‹any›*

___

###  setnx

▸ **setnx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:93

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

Defined in node_modules/@types/ioredis/index.d.ts:94

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |

**Returns:** *[Promise](promise.md)‹any›*

___

###  setrange

▸ **setrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `value`: any, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:121

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **offset**: *number*

▪ **value**: *any*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **setrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `value`: any): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:122

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`offset` | number |
`value` | any |

**Returns:** *[Promise](promise.md)‹number›*

___

###  shutdown

▸ **shutdown**(`save`: "SAVE" | "NOSAVE", `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:392

**Parameters:**

▪ **save**: *"SAVE" | "NOSAVE"*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **shutdown**(`save`: "SAVE" | "NOSAVE"): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:393

**Parameters:**

Name | Type |
------ | ------ |
`save` | "SAVE" &#124; "NOSAVE" |

**Returns:** *[Promise](promise.md)‹any›*

___

###  sinter

▸ **sinter**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:217

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  sinterstore

▸ **sinterstore**(`destination`: string, ...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:219

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  sismember

▸ **sismember**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:203

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: 1 | 0): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | 1 &#124; 0 |

**Returns:** *void*

▸ **sismember**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string): *[Promise](promise.md)‹1 | 0›*

Defined in node_modules/@types/ioredis/index.d.ts:204

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |

**Returns:** *[Promise](promise.md)‹1 | 0›*

___

###  slaveof

▸ **slaveof**(`host`: string, `port`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:440

**Parameters:**

▪ **host**: *string*

▪ **port**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **slaveof**(`host`: string, `port`: number): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:441

**Parameters:**

Name | Type |
------ | ------ |
`host` | string |
`port` | number |

**Returns:** *[Promise](promise.md)‹string›*

___

###  smembers

▸ **smembers**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:229

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **smembers**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:230

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹any›*

___

###  smove

▸ **smove**(`source`: string, `destination`: string, `member`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:200

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **smove**(`source`: string, `destination`: string, `member`: string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:201

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`member` | string |

**Returns:** *[Promise](promise.md)‹string›*

___

###  sort

▸ **sort**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:419

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *any*

___

###  spop

▸ **spop**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:209

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **spop**(`key`: [KeyType](../modules/ioredis.md#keytype), `count`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:210

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **count**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **spop**(`key`: [KeyType](../modules/ioredis.md#keytype), `count?`: undefined | number): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`count?` | undefined &#124; number |

**Returns:** *[Promise](promise.md)‹any›*

___

###  srandmember

▸ **srandmember**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:213

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **srandmember**(`key`: [KeyType](../modules/ioredis.md#keytype), `count`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:214

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **count**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **srandmember**(`key`: [KeyType](../modules/ioredis.md#keytype), `count?`: undefined | number): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:215

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`count?` | undefined &#124; number |

**Returns:** *[Promise](promise.md)‹any›*

___

###  srem

▸ **srem**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`members`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:198

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...members` | any[] |

**Returns:** *any*

___

###  sscan

▸ **sscan**(`key`: [KeyType](../modules/ioredis.md#keytype), `cursor`: number, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:495

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`cursor` | number |
`...args` | any[] |

**Returns:** *any*

___

###  sscanStream

▸ **sscanStream**(`key`: [KeyType](../modules/ioredis.md#keytype), `options?`: [ScanStreamOption](ioredis.scanstreamoption.md)): *[Readable](../classes/_stream_.internal.readable.md)*

Defined in node_modules/@types/ioredis/index.d.ts:510

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`options?` | [ScanStreamOption](ioredis.scanstreamoption.md) |

**Returns:** *[Readable](../classes/_stream_.internal.readable.md)*

___

###  strlen

▸ **strlen**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:105

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

▸ **strlen**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:106

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  subscribe

▸ **subscribe**(...`channels`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:447

**Parameters:**

Name | Type |
------ | ------ |
`...channels` | any[] |

**Returns:** *any*

___

###  substr

▸ **substr**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:127

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **start**: *number*

▪ **end**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **substr**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:128

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`end` | number |

**Returns:** *[Promise](promise.md)‹string›*

___

###  sunion

▸ **sunion**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:221

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  sunionstore

▸ **sunionstore**(`destination`: string, ...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:223

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  sync

▸ **sync**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:410

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **sync**(): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:411

**Returns:** *[Promise](promise.md)‹any›*

___

###  time

▸ **time**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:425

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **time**(): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:426

**Returns:** *[Promise](promise.md)‹any›*

___

###  ttl

▸ **ttl**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:431

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

▸ **ttl**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:432

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  type

▸ **type**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:398

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **type**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:399

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹string›*

___

###  unlink

▸ **unlink**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:110

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Promise](promise.md)‹number›*

___

###  unsubscribe

▸ **unsubscribe**(...`channels`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:449

**Parameters:**

Name | Type |
------ | ------ |
`...channels` | string[] |

**Returns:** *any*

___

###  unwatch

▸ **unwatch**(`callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:462

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **unwatch**(): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:463

**Returns:** *[Promise](promise.md)‹string›*

___

###  watch

▸ **watch**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:460

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *any*

___

###  xack

▸ **xack**(`key`: [KeyType](../modules/ioredis.md#keytype), `group`: string, ...`ids`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:514

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`group` | string |
`...ids` | string[] |

**Returns:** *any*

___

###  xadd

▸ **xadd**(`key`: [KeyType](../modules/ioredis.md#keytype), `id`: string, ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:516

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`id` | string |
`...args` | string[] |

**Returns:** *any*

▸ **xadd**(`key`: [KeyType](../modules/ioredis.md#keytype), `maxLenOption`: "MAXLEN" | "maxlen", `count`: number, ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:517

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`maxLenOption` | "MAXLEN" &#124; "maxlen" |
`count` | number |
`...args` | string[] |

**Returns:** *any*

▸ **xadd**(`key`: [KeyType](../modules/ioredis.md#keytype), `maxLenOption`: "MAXLEN" | "maxlen", `approximate`: "~", `count`: number, ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:518

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`maxLenOption` | "MAXLEN" &#124; "maxlen" |
`approximate` | "~" |
`count` | number |
`...args` | string[] |

**Returns:** *any*

___

###  xclaim

▸ **xclaim**(`key`: [KeyType](../modules/ioredis.md#keytype), `group`: string, `consumer`: string, `minIdleTime`: number, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:520

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`group` | string |
`consumer` | string |
`minIdleTime` | number |
`...args` | any[] |

**Returns:** *any*

___

###  xdel

▸ **xdel**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`ids`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:522

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...ids` | string[] |

**Returns:** *any*

___

###  xgroup

▸ **xgroup**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:524

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  xinfo

▸ **xinfo**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:526

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  xlen

▸ **xlen**(`key`: [KeyType](../modules/ioredis.md#keytype)): *any*

Defined in node_modules/@types/ioredis/index.d.ts:528

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *any*

___

###  xpending

▸ **xpending**(`key`: [KeyType](../modules/ioredis.md#keytype), `group`: string, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:530

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`group` | string |
`...args` | any[] |

**Returns:** *any*

___

###  xrange

▸ **xrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: string, `end`: string, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:532

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | string |
`end` | string |
`...args` | any[] |

**Returns:** *any*

___

###  xread

▸ **xread**(...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:534

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  xreadgroup

▸ **xreadgroup**(`groupOption`: "GROUP" | "group", `group`: string, `consumer`: string, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:536

**Parameters:**

Name | Type |
------ | ------ |
`groupOption` | "GROUP" &#124; "group" |
`group` | string |
`consumer` | string |
`...args` | any[] |

**Returns:** *any*

___

###  xrevrange

▸ **xrevrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `end`: string, `start`: string, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:538

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`end` | string |
`start` | string |
`...args` | any[] |

**Returns:** *any*

___

###  xtrim

▸ **xtrim**(`key`: [KeyType](../modules/ioredis.md#keytype), `maxLenOption`: "MAXLEN" | "maxlen", ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:540

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`maxLenOption` | "MAXLEN" &#124; "maxlen" |
`...args` | any[] |

**Returns:** *any*

___

###  zadd

▸ **zadd**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *[Promise](promise.md)‹number | string›*

Defined in node_modules/@types/ioredis/index.d.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *[Promise](promise.md)‹number | string›*

___

###  zaddBuffer

▸ **zaddBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `score1`: number, `member1`: [Buffer](../classes/buffer.md)): *[Promise](promise.md)‹string | number›*

Defined in node_modules/@types/ioredis/index.d.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`score1` | number |
`member1` | [Buffer](../classes/buffer.md) |

**Returns:** *[Promise](promise.md)‹string | number›*

___

###  zcard

▸ **zcard**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:266

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

▸ **zcard**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:267

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Promise](promise.md)‹number›*

___

###  zcount

▸ **zcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:263

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **min**: *number | string*

▪ **max**: *number | string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number |

**Returns:** *void*

▸ **zcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string): *[Promise](promise.md)‹number›*

Defined in node_modules/@types/ioredis/index.d.ts:264

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`min` | number &#124; string |
`max` | number &#124; string |

**Returns:** *[Promise](promise.md)‹number›*

___

###  zincrby

▸ **zincrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number, `member`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:236

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **increment**: *number*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **zincrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number, `member`: string): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:237

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`increment` | number |
`member` | string |

**Returns:** *[Promise](promise.md)‹any›*

___

###  zinterstore

▸ **zinterstore**(`destination`: string, `numkeys`: number, `key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:249

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`numkeys` | number |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *any*

___

###  zrange

▸ **zrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:251

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

Defined in node_modules/@types/ioredis/index.d.ts:252

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

Defined in node_modules/@types/ioredis/index.d.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *[Promise](promise.md)‹any›*

___

###  zrangebyscore

▸ **zrangebyscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string, ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:259

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`min` | number &#124; string |
`max` | number &#124; string |
`...args` | string[] |

**Returns:** *any*

___

###  zrank

▸ **zrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:272

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number &#124; null |

**Returns:** *void*

▸ **zrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string): *[Promise](promise.md)‹number | null›*

Defined in node_modules/@types/ioredis/index.d.ts:273

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |

**Returns:** *[Promise](promise.md)‹number | null›*

___

###  zrem

▸ **zrem**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`members`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:239

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...members` | any[] |

**Returns:** *any*

___

###  zremrangebyrank

▸ **zremrangebyrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:244

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

▸ **zremrangebyrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:245

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |

**Returns:** *[Promise](promise.md)‹any›*

___

###  zremrangebyscore

▸ **zremrangebyscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:241

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **min**: *number | string*

▪ **max**: *number | string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | any |

**Returns:** *void*

▸ **zremrangebyscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:242

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`min` | number &#124; string |
`max` | number &#124; string |

**Returns:** *[Promise](promise.md)‹any›*

___

###  zrevrange

▸ **zrevrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:255

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

▸ **zrevrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:256

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

▸ **zrevrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `withScores?`: undefined | "WITHSCORES"): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *[Promise](promise.md)‹any›*

___

###  zrevrangebyscore

▸ **zrevrangebyscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `max`: number | string, `min`: number | string, ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:261

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`max` | number &#124; string |
`min` | number &#124; string |
`...args` | string[] |

**Returns:** *any*

___

###  zrevrank

▸ **zrevrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:275

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: number | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | number &#124; null |

**Returns:** *void*

▸ **zrevrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string): *[Promise](promise.md)‹number | null›*

Defined in node_modules/@types/ioredis/index.d.ts:276

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |

**Returns:** *[Promise](promise.md)‹number | null›*

___

###  zscan

▸ **zscan**(`key`: [KeyType](../modules/ioredis.md#keytype), `cursor`: number, ...`args`: any[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:499

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`cursor` | number |
`...args` | any[] |

**Returns:** *any*

___

###  zscanStream

▸ **zscanStream**(`key`: [KeyType](../modules/ioredis.md#keytype), `options?`: [ScanStreamOption](ioredis.scanstreamoption.md)): *[Readable](../classes/_stream_.internal.readable.md)*

Defined in node_modules/@types/ioredis/index.d.ts:512

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`options?` | [ScanStreamOption](ioredis.scanstreamoption.md) |

**Returns:** *[Readable](../classes/_stream_.internal.readable.md)*

___

###  zscore

▸ **zscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback`: function): *void*

Defined in node_modules/@types/ioredis/index.d.ts:269

**Parameters:**

▪ **key**: *[KeyType](../modules/ioredis.md#keytype)*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](error.md), `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`res` | string |

**Returns:** *void*

▸ **zscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/ioredis/index.d.ts:270

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |

**Returns:** *[Promise](promise.md)‹string›*

___

###  zunionstore

▸ **zunionstore**(`destination`: string, `numkeys`: number, `key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *any*

Defined in node_modules/@types/ioredis/index.d.ts:247

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`numkeys` | number |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *any*
