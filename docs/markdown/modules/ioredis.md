[typescript](../README.md) › [Globals](../globals.md) › [IORedis](ioredis.md)

# Module: IORedis

## Index

### Interfaces

* [Cluster](../interfaces/ioredis.cluster.md)
* [ClusterOptions](../interfaces/ioredis.clusteroptions.md)
* [ClusterStatic](../interfaces/ioredis.clusterstatic.md)
* [Command](../interfaces/ioredis.command.md)
* [MultiOptions](../interfaces/ioredis.multioptions.md)
* [NatMap](../interfaces/ioredis.natmap.md)
* [NodeConfiguration](../interfaces/ioredis.nodeconfiguration.md)
* [Pipeline](../interfaces/ioredis.pipeline.md)
* [Redis](../interfaces/ioredis.redis.md)
* [RedisOptions](../interfaces/ioredis.redisoptions.md)
* [ScanStreamOption](../interfaces/ioredis.scanstreamoption.md)

### Type aliases

* [CallbackFunction](ioredis.md#callbackfunction)
* [ClusterNode](ioredis.md#clusternode)
* [DNSLookupFunction](ioredis.md#dnslookupfunction)
* [KeyType](ioredis.md#keytype)
* [NodeRole](ioredis.md#noderole)

## Type aliases

###  CallbackFunction

Ƭ **CallbackFunction**: *function*

Defined in node_modules/@types/ioredis/index.d.ts:907

#### Type declaration:

▸ (`err?`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `result?`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`result?` | T |

___

###  ClusterNode

Ƭ **ClusterNode**: *string | number | [NodeConfiguration](../interfaces/ioredis.nodeconfiguration.md)*

Defined in node_modules/@types/ioredis/index.d.ts:903

___

###  DNSLookupFunction

Ƭ **DNSLookupFunction**: *function*

Defined in node_modules/@types/ioredis/index.d.ts:1082

#### Type declaration:

▸ (`hostname`: string, `callback`: function): *void*

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md), `address`: string, `family`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) |
`address` | string |
`family` | number |

___

###  KeyType

Ƭ **KeyType**: *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/ioredis/index.d.ts:52

___

###  NodeRole

Ƭ **NodeRole**: *"master" | "slave" | "all"*

Defined in node_modules/@types/ioredis/index.d.ts:905
