[typescript](../README.md) › [Globals](../globals.md) › [IORedis](../modules/ioredis.md) › [Pipeline](ioredis.pipeline.md)

# Interface: Pipeline

## Hierarchy

* **Pipeline**

## Index

### Properties

* [_queue](ioredis.pipeline.md#_queue)
* [_result](ioredis.pipeline.md#_result)
* [_shaToScript](ioredis.pipeline.md#_shatoscript)
* [_transactions](ioredis.pipeline.md#_transactions)
* [isCluster](ioredis.pipeline.md#iscluster)
* [options](ioredis.pipeline.md#options)
* [redis](ioredis.pipeline.md#redis)

### Methods

* [append](ioredis.pipeline.md#append)
* [auth](ioredis.pipeline.md#auth)
* [bgrewriteaof](ioredis.pipeline.md#bgrewriteaof)
* [bgsave](ioredis.pipeline.md#bgsave)
* [bitcount](ioredis.pipeline.md#bitcount)
* [blpop](ioredis.pipeline.md#blpop)
* [brpop](ioredis.pipeline.md#brpop)
* [brpoplpush](ioredis.pipeline.md#brpoplpush)
* [client](ioredis.pipeline.md#client)
* [cluster](ioredis.pipeline.md#cluster)
* [config](ioredis.pipeline.md#config)
* [dbsize](ioredis.pipeline.md#dbsize)
* [debug](ioredis.pipeline.md#debug)
* [decr](ioredis.pipeline.md#decr)
* [decrby](ioredis.pipeline.md#decrby)
* [del](ioredis.pipeline.md#del)
* [discard](ioredis.pipeline.md#discard)
* [dump](ioredis.pipeline.md#dump)
* [echo](ioredis.pipeline.md#echo)
* [eval](ioredis.pipeline.md#eval)
* [evalsha](ioredis.pipeline.md#evalsha)
* [exec](ioredis.pipeline.md#exec)
* [exists](ioredis.pipeline.md#exists)
* [expire](ioredis.pipeline.md#expire)
* [expireat](ioredis.pipeline.md#expireat)
* [flushall](ioredis.pipeline.md#flushall)
* [flushdb](ioredis.pipeline.md#flushdb)
* [get](ioredis.pipeline.md#get)
* [getBuffer](ioredis.pipeline.md#getbuffer)
* [getbit](ioredis.pipeline.md#getbit)
* [getrange](ioredis.pipeline.md#getrange)
* [getset](ioredis.pipeline.md#getset)
* [hdel](ioredis.pipeline.md#hdel)
* [hexists](ioredis.pipeline.md#hexists)
* [hget](ioredis.pipeline.md#hget)
* [hgetBuffer](ioredis.pipeline.md#hgetbuffer)
* [hgetall](ioredis.pipeline.md#hgetall)
* [hincrby](ioredis.pipeline.md#hincrby)
* [hincrbyfloat](ioredis.pipeline.md#hincrbyfloat)
* [hkeys](ioredis.pipeline.md#hkeys)
* [hlen](ioredis.pipeline.md#hlen)
* [hmget](ioredis.pipeline.md#hmget)
* [hmset](ioredis.pipeline.md#hmset)
* [hscan](ioredis.pipeline.md#hscan)
* [hset](ioredis.pipeline.md#hset)
* [hsetBuffer](ioredis.pipeline.md#hsetbuffer)
* [hsetnx](ioredis.pipeline.md#hsetnx)
* [hvals](ioredis.pipeline.md#hvals)
* [incr](ioredis.pipeline.md#incr)
* [incrby](ioredis.pipeline.md#incrby)
* [incrbyfloat](ioredis.pipeline.md#incrbyfloat)
* [info](ioredis.pipeline.md#info)
* [keys](ioredis.pipeline.md#keys)
* [lastsave](ioredis.pipeline.md#lastsave)
* [lindex](ioredis.pipeline.md#lindex)
* [linsert](ioredis.pipeline.md#linsert)
* [llen](ioredis.pipeline.md#llen)
* [lpop](ioredis.pipeline.md#lpop)
* [lpopBuffer](ioredis.pipeline.md#lpopbuffer)
* [lpush](ioredis.pipeline.md#lpush)
* [lpushx](ioredis.pipeline.md#lpushx)
* [lrange](ioredis.pipeline.md#lrange)
* [lrangeBuffer](ioredis.pipeline.md#lrangebuffer)
* [lrem](ioredis.pipeline.md#lrem)
* [lset](ioredis.pipeline.md#lset)
* [ltrim](ioredis.pipeline.md#ltrim)
* [mget](ioredis.pipeline.md#mget)
* [migrate](ioredis.pipeline.md#migrate)
* [monitor](ioredis.pipeline.md#monitor)
* [move](ioredis.pipeline.md#move)
* [mset](ioredis.pipeline.md#mset)
* [msetnx](ioredis.pipeline.md#msetnx)
* [multi](ioredis.pipeline.md#multi)
* [object](ioredis.pipeline.md#object)
* [persist](ioredis.pipeline.md#persist)
* [pexpire](ioredis.pipeline.md#pexpire)
* [pexpireat](ioredis.pipeline.md#pexpireat)
* [pfadd](ioredis.pipeline.md#pfadd)
* [pfcount](ioredis.pipeline.md#pfcount)
* [pfmerge](ioredis.pipeline.md#pfmerge)
* [ping](ioredis.pipeline.md#ping)
* [psetex](ioredis.pipeline.md#psetex)
* [psubscribe](ioredis.pipeline.md#psubscribe)
* [pttl](ioredis.pipeline.md#pttl)
* [publish](ioredis.pipeline.md#publish)
* [punsubscribe](ioredis.pipeline.md#punsubscribe)
* [quit](ioredis.pipeline.md#quit)
* [randomkey](ioredis.pipeline.md#randomkey)
* [rename](ioredis.pipeline.md#rename)
* [renamenx](ioredis.pipeline.md#renamenx)
* [restore](ioredis.pipeline.md#restore)
* [rpop](ioredis.pipeline.md#rpop)
* [rpoplpush](ioredis.pipeline.md#rpoplpush)
* [rpush](ioredis.pipeline.md#rpush)
* [rpushBuffer](ioredis.pipeline.md#rpushbuffer)
* [rpushx](ioredis.pipeline.md#rpushx)
* [sadd](ioredis.pipeline.md#sadd)
* [save](ioredis.pipeline.md#save)
* [scan](ioredis.pipeline.md#scan)
* [scard](ioredis.pipeline.md#scard)
* [script](ioredis.pipeline.md#script)
* [sdiff](ioredis.pipeline.md#sdiff)
* [sdiffstore](ioredis.pipeline.md#sdiffstore)
* [select](ioredis.pipeline.md#select)
* [set](ioredis.pipeline.md#set)
* [setBuffer](ioredis.pipeline.md#setbuffer)
* [setbit](ioredis.pipeline.md#setbit)
* [setex](ioredis.pipeline.md#setex)
* [setnx](ioredis.pipeline.md#setnx)
* [setrange](ioredis.pipeline.md#setrange)
* [shutdown](ioredis.pipeline.md#shutdown)
* [sinter](ioredis.pipeline.md#sinter)
* [sinterstore](ioredis.pipeline.md#sinterstore)
* [sismember](ioredis.pipeline.md#sismember)
* [slaveof](ioredis.pipeline.md#slaveof)
* [smembers](ioredis.pipeline.md#smembers)
* [smove](ioredis.pipeline.md#smove)
* [sort](ioredis.pipeline.md#sort)
* [spop](ioredis.pipeline.md#spop)
* [srandmember](ioredis.pipeline.md#srandmember)
* [srem](ioredis.pipeline.md#srem)
* [sscan](ioredis.pipeline.md#sscan)
* [strlen](ioredis.pipeline.md#strlen)
* [subscribe](ioredis.pipeline.md#subscribe)
* [substr](ioredis.pipeline.md#substr)
* [sunion](ioredis.pipeline.md#sunion)
* [sunionstore](ioredis.pipeline.md#sunionstore)
* [sync](ioredis.pipeline.md#sync)
* [time](ioredis.pipeline.md#time)
* [ttl](ioredis.pipeline.md#ttl)
* [type](ioredis.pipeline.md#type)
* [unsubscribe](ioredis.pipeline.md#unsubscribe)
* [unwatch](ioredis.pipeline.md#unwatch)
* [watch](ioredis.pipeline.md#watch)
* [xack](ioredis.pipeline.md#xack)
* [xadd](ioredis.pipeline.md#xadd)
* [xclaim](ioredis.pipeline.md#xclaim)
* [xdel](ioredis.pipeline.md#xdel)
* [xgroup](ioredis.pipeline.md#xgroup)
* [xinfo](ioredis.pipeline.md#xinfo)
* [xlen](ioredis.pipeline.md#xlen)
* [xpending](ioredis.pipeline.md#xpending)
* [xrange](ioredis.pipeline.md#xrange)
* [xread](ioredis.pipeline.md#xread)
* [xreadgroup](ioredis.pipeline.md#xreadgroup)
* [xrevrange](ioredis.pipeline.md#xrevrange)
* [xtrim](ioredis.pipeline.md#xtrim)
* [zadd](ioredis.pipeline.md#zadd)
* [zcard](ioredis.pipeline.md#zcard)
* [zcount](ioredis.pipeline.md#zcount)
* [zincrby](ioredis.pipeline.md#zincrby)
* [zinterstore](ioredis.pipeline.md#zinterstore)
* [zrange](ioredis.pipeline.md#zrange)
* [zrangebyscore](ioredis.pipeline.md#zrangebyscore)
* [zrank](ioredis.pipeline.md#zrank)
* [zrem](ioredis.pipeline.md#zrem)
* [zremrangebyrank](ioredis.pipeline.md#zremrangebyrank)
* [zremrangebyscore](ioredis.pipeline.md#zremrangebyscore)
* [zrevrange](ioredis.pipeline.md#zrevrange)
* [zrevrangebyscore](ioredis.pipeline.md#zrevrangebyscore)
* [zrevrank](ioredis.pipeline.md#zrevrank)
* [zscan](ioredis.pipeline.md#zscan)
* [zscore](ioredis.pipeline.md#zscore)
* [zunionstore](ioredis.pipeline.md#zunionstore)

## Properties

###  _queue

• **_queue**: *[Command](ioredis.command.md)[]*

Defined in node_modules/@types/ioredis/index.d.ts:547

___

###  _result

• **_result**: *any[]*

Defined in node_modules/@types/ioredis/index.d.ts:548

___

###  _shaToScript

• **_shaToScript**: *object*

Defined in node_modules/@types/ioredis/index.d.ts:550

#### Type declaration:

___

###  _transactions

• **_transactions**: *number*

Defined in node_modules/@types/ioredis/index.d.ts:549

___

###  isCluster

• **isCluster**: *boolean*

Defined in node_modules/@types/ioredis/index.d.ts:545

___

###  options

• **options**: *[RedisOptions](ioredis.redisoptions.md)*

Defined in node_modules/@types/ioredis/index.d.ts:546

___

###  redis

• **redis**: *[Redis](ioredis.redis.md)*

Defined in node_modules/@types/ioredis/index.d.ts:544

## Methods

###  append

▸ **append**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:573

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  auth

▸ **auth**(`password`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:766

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  bgrewriteaof

▸ **bgrewriteaof**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:777

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  bgsave

▸ **bgsave**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:775

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  bitcount

▸ **bitcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:551

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **bitcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`end` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  blpop

▸ **blpop**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  brpop

▸ **brpop**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:615

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  brpoplpush

▸ **brpoplpush**(`source`: string, `destination`: string, `timeout`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:619

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`timeout` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  client

▸ **client**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:842

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  cluster

▸ **cluster**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:832

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  config

▸ **config**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:816

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  dbsize

▸ **dbsize**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:764

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  debug

▸ **debug**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:814

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  decr

▸ **decr**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:593

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  decrby

▸ **decrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `decrement`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:734

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`decrement` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  del

▸ **del**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:577

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  discard

▸ **discard**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:789

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  dump

▸ **dump**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:838

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  echo

▸ **echo**(`message`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:771

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  eval

▸ **eval**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:844

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  evalsha

▸ **evalsha**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:846

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  exec

▸ **exec**(`callback?`: undefined | function): *[Promise](promise.md)‹any›*

Defined in node_modules/@types/ioredis/index.d.ts:787

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Promise](promise.md)‹any›*

___

###  exists

▸ **exists**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:579

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  expire

▸ **expire**(`key`: [KeyType](../modules/ioredis.md#keytype), `seconds`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:754

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`seconds` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  expireat

▸ **expireat**(`key`: [KeyType](../modules/ioredis.md#keytype), `timestamp`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:758

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`timestamp` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  flushall

▸ **flushall**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:795

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  flushdb

▸ **flushdb**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:793

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  get

▸ **get**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:554

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  getBuffer

▸ **getBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:555

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  getbit

▸ **getbit**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:583

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`offset` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  getrange

▸ **getrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:587

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`end` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  getset

▸ **getset**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:736

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hdel

▸ **hdel**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`fields`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:718

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...fields` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hexists

▸ **hexists**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:728

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hget

▸ **hget**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:706

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hgetBuffer

▸ **hgetBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:707

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hgetall

▸ **hgetall**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:726

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hincrby

▸ **hincrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `increment`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:714

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`increment` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hincrbyfloat

▸ **hincrbyfloat**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `increment`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:716

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`increment` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hkeys

▸ **hkeys**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:722

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hlen

▸ **hlen**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:720

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hmget

▸ **hmget**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`fields`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:712

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...fields` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hmset

▸ **hmset**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:709

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **hmset**(`key`: [KeyType](../modules/ioredis.md#keytype), `data`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:710

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`data` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hscan

▸ **hscan**(`key`: [KeyType](../modules/ioredis.md#keytype), `cursor`: number, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:861

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`cursor` | number |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hset

▸ **hset**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:701

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hsetBuffer

▸ **hsetBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:702

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hsetnx

▸ **hsetnx**(`key`: [KeyType](../modules/ioredis.md#keytype), `field`: string, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:704

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`field` | string |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  hvals

▸ **hvals**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:724

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  incr

▸ **incr**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:591

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  incrby

▸ **incrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:730

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`increment` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  incrbyfloat

▸ **incrbyfloat**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:732

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`increment` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  info

▸ **info**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:799

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **info**(`section`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:800

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  keys

▸ **keys**(`pattern`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:762

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lastsave

▸ **lastsave**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:781

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lindex

▸ **lindex**(`key`: [KeyType](../modules/ioredis.md#keytype), `index`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:623

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`index` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  linsert

▸ **linsert**(`key`: [KeyType](../modules/ioredis.md#keytype), `direction`: "BEFORE" | "AFTER", `pivot`: string, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:607

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`direction` | "BEFORE" &#124; "AFTER" |
`pivot` | string |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  llen

▸ **llen**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:621

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lpop

▸ **lpop**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:611

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lpopBuffer

▸ **lpopBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lpush

▸ **lpush**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`values`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:601

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...values` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lpushx

▸ **lpushx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:605

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lrange

▸ **lrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:627

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lrangeBuffer

▸ **lrangeBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:629

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lrem

▸ **lrem**(`key`: [KeyType](../modules/ioredis.md#keytype), `count`: number, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:633

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`count` | number |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  lset

▸ **lset**(`key`: [KeyType](../modules/ioredis.md#keytype), `index`: number, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:625

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`index` | number |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  ltrim

▸ **ltrim**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:631

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  mget

▸ **mget**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:595

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  migrate

▸ **migrate**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:836

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  monitor

▸ **monitor**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:804

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  move

▸ **move**(`key`: [KeyType](../modules/ioredis.md#keytype), `db`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:748

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`db` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  mset

▸ **mset**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:738

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **mset**(`data`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:739

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  msetnx

▸ **msetnx**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:741

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **msetnx**(`data`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:742

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  multi

▸ **multi**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:785

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  object

▸ **object**(`subcommand`: string, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:840

**Parameters:**

Name | Type |
------ | ------ |
`subcommand` | string |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  persist

▸ **persist**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:810

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  pexpire

▸ **pexpire**(`key`: [KeyType](../modules/ioredis.md#keytype), `milliseconds`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:756

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`milliseconds` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  pexpireat

▸ **pexpireat**(`key`: [KeyType](../modules/ioredis.md#keytype), `millisecondsTimestamp`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:760

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`millisecondsTimestamp` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  pfadd

▸ **pfadd**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`elements`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:867

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...elements` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  pfcount

▸ **pfcount**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:869

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  pfmerge

▸ **pfmerge**(`destkey`: [KeyType](../modules/ioredis.md#keytype), ...`sourcekeys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:865

**Parameters:**

Name | Type |
------ | ------ |
`destkey` | [KeyType](../modules/ioredis.md#keytype) |
`...sourcekeys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  ping

▸ **ping**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:768

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **ping**(`message`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:769

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  psetex

▸ **psetex**(`key`: [KeyType](../modules/ioredis.md#keytype), `milliseconds`: number, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:571

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`milliseconds` | number |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  psubscribe

▸ **psubscribe**(...`patterns`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:822

**Parameters:**

Name | Type |
------ | ------ |
`...patterns` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  pttl

▸ **pttl**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:808

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  publish

▸ **publish**(`channel`: string, `message`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:826

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  punsubscribe

▸ **punsubscribe**(...`patterns`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:824

**Parameters:**

Name | Type |
------ | ------ |
`...patterns` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  quit

▸ **quit**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:850

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  randomkey

▸ **randomkey**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:744

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  rename

▸ **rename**(`key`: [KeyType](../modules/ioredis.md#keytype), `newkey`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:750

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`newkey` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  renamenx

▸ **renamenx**(`key`: [KeyType](../modules/ioredis.md#keytype), `newkey`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:752

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`newkey` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  restore

▸ **restore**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:834

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  rpop

▸ **rpop**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:609

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  rpoplpush

▸ **rpoplpush**(`source`: string, `destination`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:635

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  rpush

▸ **rpush**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`values`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:597

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...values` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  rpushBuffer

▸ **rpushBuffer**(`key`: string, ...`values`: [Buffer](../classes/buffer.md)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:599

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`...values` | [Buffer](../classes/buffer.md)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  rpushx

▸ **rpushx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:603

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sadd

▸ **sadd**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`members`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:637

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...members` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  save

▸ **save**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:773

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  scan

▸ **scan**(`cursor`: number): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:852

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **scan**(`cursor`: number, `matchOption`: "match" | "MATCH", `pattern`: string): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:854

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **scan**(`cursor`: number, `countOption`: "count" | "COUNT", `count`: number): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:855

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **scan**(`cursor`: number, `matchOption`: "match" | "MATCH", `pattern`: string, `countOption`: "count" | "COUNT", `count`: number): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:857

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **scan**(`cursor`: number, `countOption`: "count" | "COUNT", `count`: number, `matchOption`: "match" | "MATCH", `pattern`: string): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:858

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |
`countOption` | "count" &#124; "COUNT" |
`count` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  scard

▸ **scard**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:645

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  script

▸ **script**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:848

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sdiff

▸ **sdiff**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:661

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sdiffstore

▸ **sdiffstore**(`destination`: string, ...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:663

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  select

▸ **select**(`index`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:746

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  set

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:557

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `setMode`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`setMode` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`expiryMode` | string |
`time` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **set**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number, `setMode`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`expiryMode` | string |
`time` | number |
`setMode` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  setBuffer

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `setMode`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`setMode` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`expiryMode` | string |
`time` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **setBuffer**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `expiryMode`: string, `time`: number, `setMode`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`expiryMode` | string |
`time` | number |
`setMode` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  setbit

▸ **setbit**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:581

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`offset` | number |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  setex

▸ **setex**(`key`: [KeyType](../modules/ioredis.md#keytype), `seconds`: number, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:569

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`seconds` | number |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  setnx

▸ **setnx**(`key`: [KeyType](../modules/ioredis.md#keytype), `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:567

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  setrange

▸ **setrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `offset`: number, `value`: any, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:585

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`offset` | number |
`value` | any |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  shutdown

▸ **shutdown**(`save`: "SAVE" | "NOSAVE", `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:779

**Parameters:**

Name | Type |
------ | ------ |
`save` | "SAVE" &#124; "NOSAVE" |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sinter

▸ **sinter**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:653

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sinterstore

▸ **sinterstore**(`destination`: string, ...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:655

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sismember

▸ **sismember**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:643

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  slaveof

▸ **slaveof**(`host`: string, `port`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:812

**Parameters:**

Name | Type |
------ | ------ |
`host` | string |
`port` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  smembers

▸ **smembers**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:665

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  smove

▸ **smove**(`source`: string, `destination`: string, `member`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:641

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`member` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sort

▸ **sort**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:797

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  spop

▸ **spop**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:647

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **spop**(`key`: [KeyType](../modules/ioredis.md#keytype), `count`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:648

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`count` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  srandmember

▸ **srandmember**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:650

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **srandmember**(`key`: [KeyType](../modules/ioredis.md#keytype), `count`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:651

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`count` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  srem

▸ **srem**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`members`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:639

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...members` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sscan

▸ **sscan**(`key`: [KeyType](../modules/ioredis.md#keytype), `cursor`: number, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:859

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`cursor` | number |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  strlen

▸ **strlen**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:575

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  subscribe

▸ **subscribe**(...`channels`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:818

**Parameters:**

Name | Type |
------ | ------ |
`...channels` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  substr

▸ **substr**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `end`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:589

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`end` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sunion

▸ **sunion**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:657

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sunionstore

▸ **sunionstore**(`destination`: string, ...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:659

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  sync

▸ **sync**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:791

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  time

▸ **time**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:802

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  ttl

▸ **ttl**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:806

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  type

▸ **type**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:783

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  unsubscribe

▸ **unsubscribe**(...`channels`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:820

**Parameters:**

Name | Type |
------ | ------ |
`...channels` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  unwatch

▸ **unwatch**(`callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:830

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  watch

▸ **watch**(...`keys`: [KeyType](../modules/ioredis.md#keytype)[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:828

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | [KeyType](../modules/ioredis.md#keytype)[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xack

▸ **xack**(`key`: [KeyType](../modules/ioredis.md#keytype), `group`: string, ...`ids`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:871

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`group` | string |
`...ids` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xadd

▸ **xadd**(`key`: [KeyType](../modules/ioredis.md#keytype), `id`: string, ...`args`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:873

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`id` | string |
`...args` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xclaim

▸ **xclaim**(`key`: [KeyType](../modules/ioredis.md#keytype), `group`: string, `consumer`: string, `minIdleTime`: number, `id`: string, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:875

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`group` | string |
`consumer` | string |
`minIdleTime` | number |
`id` | string |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xdel

▸ **xdel**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`ids`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:877

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...ids` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xgroup

▸ **xgroup**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:879

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xinfo

▸ **xinfo**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:881

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xlen

▸ **xlen**(`key`: [KeyType](../modules/ioredis.md#keytype)): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:883

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xpending

▸ **xpending**(`key`: [KeyType](../modules/ioredis.md#keytype), `group`: string, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:885

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`group` | string |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xrange

▸ **xrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: string, `end`: string, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:887

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | string |
`end` | string |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xread

▸ **xread**(...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:889

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xreadgroup

▸ **xreadgroup**(`command`: "GROUP" | "group", `group`: string, `consumer`: string, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:891

**Parameters:**

Name | Type |
------ | ------ |
`command` | "GROUP" &#124; "group" |
`group` | string |
`consumer` | string |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xrevrange

▸ **xrevrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `end`: string, `start`: string, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:893

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`end` | string |
`start` | string |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  xtrim

▸ **xtrim**(`key`: [KeyType](../modules/ioredis.md#keytype), `strategy`: "MAXLEN" | "maxlen", ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:895

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`strategy` | "MAXLEN" &#124; "maxlen" |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zadd

▸ **zadd**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:667

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zcard

▸ **zcard**(`key`: [KeyType](../modules/ioredis.md#keytype), `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:693

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zcount

▸ **zcount**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:691

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`min` | number &#124; string |
`max` | number &#124; string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zincrby

▸ **zincrby**(`key`: [KeyType](../modules/ioredis.md#keytype), `increment`: number, `member`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:669

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`increment` | number |
`member` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zinterstore

▸ **zinterstore**(`destination`: string, `numkeys`: number, `key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:679

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`numkeys` | number |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zrange

▸ **zrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:681

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **zrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:682

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`withScores` | "WITHSCORES" |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zrangebyscore

▸ **zrangebyscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string, ...`args`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:687

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`min` | number &#124; string |
`max` | number &#124; string |
`...args` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zrank

▸ **zrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:697

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zrem

▸ **zrem**(`key`: [KeyType](../modules/ioredis.md#keytype), ...`members`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:671

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...members` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zremrangebyrank

▸ **zremrangebyrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:675

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zremrangebyscore

▸ **zremrangebyscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `min`: number | string, `max`: number | string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:673

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`min` | number &#124; string |
`max` | number &#124; string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zrevrange

▸ **zrevrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:684

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

▸ **zrevrange**(`key`: [KeyType](../modules/ioredis.md#keytype), `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:685

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`start` | number |
`stop` | number |
`withScores` | "WITHSCORES" |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zrevrangebyscore

▸ **zrevrangebyscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `max`: number | string, `min`: number | string, ...`args`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`max` | number &#124; string |
`min` | number &#124; string |
`...args` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zrevrank

▸ **zrevrank**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:699

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zscan

▸ **zscan**(`key`: [KeyType](../modules/ioredis.md#keytype), `cursor`: number, ...`args`: any[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:863

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`cursor` | number |
`...args` | any[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zscore

▸ **zscore**(`key`: [KeyType](../modules/ioredis.md#keytype), `member`: string, `callback?`: undefined | function): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:695

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`member` | string |
`callback?` | undefined &#124; function |

**Returns:** *[Pipeline](ioredis.pipeline.md)*

___

###  zunionstore

▸ **zunionstore**(`destination`: string, `numkeys`: number, `key`: [KeyType](../modules/ioredis.md#keytype), ...`args`: string[]): *[Pipeline](ioredis.pipeline.md)*

Defined in node_modules/@types/ioredis/index.d.ts:677

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`numkeys` | number |
`key` | [KeyType](../modules/ioredis.md#keytype) |
`...args` | string[] |

**Returns:** *[Pipeline](ioredis.pipeline.md)*
