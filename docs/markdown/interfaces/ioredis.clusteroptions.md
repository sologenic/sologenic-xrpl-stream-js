[typescript](../README.md) › [Globals](../globals.md) › [IORedis](../modules/ioredis.md) › [ClusterOptions](ioredis.clusteroptions.md)

# Interface: ClusterOptions

## Hierarchy

* **ClusterOptions**

## Index

### Properties

* [dnsLookup](ioredis.clusteroptions.md#optional-dnslookup)
* [enableOfflineQueue](ioredis.clusteroptions.md#optional-enableofflinequeue)
* [enableReadyCheck](ioredis.clusteroptions.md#optional-enablereadycheck)
* [lazyConnect](ioredis.clusteroptions.md#optional-lazyconnect)
* [maxRedirections](ioredis.clusteroptions.md#optional-maxredirections)
* [natMap](ioredis.clusteroptions.md#optional-natmap)
* [redisOptions](ioredis.clusteroptions.md#optional-redisoptions)
* [retryDelayOnClusterDown](ioredis.clusteroptions.md#optional-retrydelayonclusterdown)
* [retryDelayOnFailover](ioredis.clusteroptions.md#optional-retrydelayonfailover)
* [retryDelayOnTryAgain](ioredis.clusteroptions.md#optional-retrydelayontryagain)
* [scaleReads](ioredis.clusteroptions.md#optional-scalereads)
* [slotsRefreshInterval](ioredis.clusteroptions.md#optional-slotsrefreshinterval)
* [slotsRefreshTimeout](ioredis.clusteroptions.md#optional-slotsrefreshtimeout)

### Methods

* [clusterRetryStrategy](ioredis.clusteroptions.md#optional-clusterretrystrategy)

## Properties

### `Optional` dnsLookup

• **dnsLookup**? : *[DNSLookupFunction](../modules/ioredis.md#dnslookupfunction)*

Defined in node_modules/@types/ioredis/index.d.ts:1100

___

### `Optional` enableOfflineQueue

• **enableOfflineQueue**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1089

___

### `Optional` enableReadyCheck

• **enableReadyCheck**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1090

___

### `Optional` lazyConnect

• **lazyConnect**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1099

___

### `Optional` maxRedirections

• **maxRedirections**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1092

___

### `Optional` natMap

• **natMap**? : *[NatMap](ioredis.natmap.md)*

Defined in node_modules/@types/ioredis/index.d.ts:1101

___

### `Optional` redisOptions

• **redisOptions**? : *[RedisOptions](ioredis.redisoptions.md)*

Defined in node_modules/@types/ioredis/index.d.ts:1098

___

### `Optional` retryDelayOnClusterDown

• **retryDelayOnClusterDown**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1094

___

### `Optional` retryDelayOnFailover

• **retryDelayOnFailover**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1093

___

### `Optional` retryDelayOnTryAgain

• **retryDelayOnTryAgain**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1095

___

### `Optional` scaleReads

• **scaleReads**? : *undefined | string*

Defined in node_modules/@types/ioredis/index.d.ts:1091

___

### `Optional` slotsRefreshInterval

• **slotsRefreshInterval**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1097

___

### `Optional` slotsRefreshTimeout

• **slotsRefreshTimeout**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1096

## Methods

### `Optional` clusterRetryStrategy

▸ **clusterRetryStrategy**(`times`: number, `reason?`: [Error](error.md)): *number | null*

Defined in node_modules/@types/ioredis/index.d.ts:1088

**Parameters:**

Name | Type |
------ | ------ |
`times` | number |
`reason?` | [Error](error.md) |

**Returns:** *number | null*
