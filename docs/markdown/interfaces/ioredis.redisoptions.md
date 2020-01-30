[typescript](../README.md) › [Globals](../globals.md) › [IORedis](../modules/ioredis.md) › [RedisOptions](ioredis.redisoptions.md)

# Interface: RedisOptions

## Hierarchy

* **RedisOptions**

## Index

### Properties

* [autoResendUnfulfilledCommands](ioredis.redisoptions.md#optional-autoresendunfulfilledcommands)
* [autoResubscribe](ioredis.redisoptions.md#optional-autoresubscribe)
* [connectTimeout](ioredis.redisoptions.md#optional-connecttimeout)
* [connectionName](ioredis.redisoptions.md#optional-connectionname)
* [db](ioredis.redisoptions.md#optional-db)
* [dropBufferSupport](ioredis.redisoptions.md#optional-dropbuffersupport)
* [enableOfflineQueue](ioredis.redisoptions.md#optional-enableofflinequeue)
* [enableReadyCheck](ioredis.redisoptions.md#optional-enablereadycheck)
* [family](ioredis.redisoptions.md#optional-family)
* [host](ioredis.redisoptions.md#optional-host)
* [keepAlive](ioredis.redisoptions.md#optional-keepalive)
* [keyPrefix](ioredis.redisoptions.md#optional-keyprefix)
* [lazyConnect](ioredis.redisoptions.md#optional-lazyconnect)
* [maxRetriesPerRequest](ioredis.redisoptions.md#optional-maxretriesperrequest)
* [name](ioredis.redisoptions.md#optional-name)
* [password](ioredis.redisoptions.md#optional-password)
* [path](ioredis.redisoptions.md#optional-path)
* [port](ioredis.redisoptions.md#optional-port)
* [readOnly](ioredis.redisoptions.md#optional-readonly)
* [sentinels](ioredis.redisoptions.md#optional-sentinels)
* [showFriendlyErrorStack](ioredis.redisoptions.md#optional-showfriendlyerrorstack)
* [tls](ioredis.redisoptions.md#optional-tls)

### Methods

* [reconnectOnError](ioredis.redisoptions.md#optional-reconnectonerror)
* [retryStrategy](ioredis.redisoptions.md#optional-retrystrategy)

## Properties

### `Optional` autoResendUnfulfilledCommands

• **autoResendUnfulfilledCommands**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1056

If true, client will resend unfulfilled commands(e.g. block commands) in the previous connection when reconnected.
default: true.

___

### `Optional` autoResubscribe

• **autoResubscribe**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1051

After reconnected, if the previous connection was in the subscriber mode, client will auto re-subscribe these channels.
default: true.

___

### `Optional` connectTimeout

• **connectTimeout**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1046

The milliseconds before a timeout occurs during the initial connection to the Redis server.
default: 10000.

___

### `Optional` connectionName

• **connectionName**? : *undefined | string*

Defined in node_modules/@types/ioredis/index.d.ts:996

___

### `Optional` db

• **db**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:1004

Database index to use.

___

### `Optional` dropBufferSupport

• **dropBufferSupport**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1070

If you are using the hiredis parser, it's highly recommended to enable this option.
Create another instance with dropBufferSupport disabled for other commands that you want to return binary instead of string

___

### `Optional` enableOfflineQueue

• **enableOfflineQueue**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1041

By default, if there is no active connection to the Redis server, commands are added to a queue
and are executed once the connection is "ready" (when enableReadyCheck is true, "ready" means
the Redis server has loaded the database from disk, otherwise means the connection to the Redis
server has been established). If this option is false, when execute the command when the connection
isn't ready, an error will be returned.

___

### `Optional` enableReadyCheck

• **enableReadyCheck**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1011

When a connection is established to the Redis server, the server might still be loading
the database from disk. While loading, the server not respond to any commands.
To work around this, when this option is true, ioredis will check the status of the Redis server,
and when the Redis server is able to process commands, a ready event will be emitted.

___

### `Optional` family

• **family**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:987

4 (IPv4) or 6 (IPv6), Defaults to 4.

___

### `Optional` host

• **host**? : *undefined | string*

Defined in node_modules/@types/ioredis/index.d.ts:983

___

### `Optional` keepAlive

• **keepAlive**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:995

TCP KeepAlive on the socket with a X ms delay before start. Set to a non-number value to disable keepAlive.

___

### `Optional` keyPrefix

• **keyPrefix**? : *undefined | string*

Defined in node_modules/@types/ioredis/index.d.ts:1012

___

### `Optional` lazyConnect

• **lazyConnect**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1057

___

### `Optional` maxRetriesPerRequest

• **maxRetriesPerRequest**? : *number | null*

Defined in node_modules/@types/ioredis/index.d.ts:1028

By default, all pending commands will be flushed with an error every
20 retry attempts. That makes sure commands won't wait forever when
the connection is down. You can change this behavior by setting
`maxRetriesPerRequest`.

Set maxRetriesPerRequest to `null` to disable this behavior, and
every command will wait forever until the connection is alive again
(which is the default behavior before ioredis v4).

___

### `Optional` name

• **name**? : *undefined | string*

Defined in node_modules/@types/ioredis/index.d.ts:1060

___

### `Optional` password

• **password**? : *undefined | string*

Defined in node_modules/@types/ioredis/index.d.ts:1000

If set, client will send AUTH command with the value of this option when connected.

___

### `Optional` path

• **path**? : *undefined | string*

Defined in node_modules/@types/ioredis/index.d.ts:991

Local domain socket path. If set the port, host and family will be ignored.

___

### `Optional` port

• **port**? : *undefined | number*

Defined in node_modules/@types/ioredis/index.d.ts:982

___

### `Optional` readOnly

• **readOnly**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1065

Enable READONLY mode for the connection. Only available for cluster mode.
default: false.

___

### `Optional` sentinels

• **sentinels**? : *[Array](regexpmatcharray.md#array)‹object›*

Defined in node_modules/@types/ioredis/index.d.ts:1059

___

### `Optional` showFriendlyErrorStack

• **showFriendlyErrorStack**? : *undefined | false | true*

Defined in node_modules/@types/ioredis/index.d.ts:1074

Whether to show a friendly error stack. Will decrease the performance significantly.

___

### `Optional` tls

• **tls**? : *tls.ConnectionOptions*

Defined in node_modules/@types/ioredis/index.d.ts:1058

## Methods

### `Optional` reconnectOnError

▸ **reconnectOnError**(`error`: [Error](error.md)): *boolean | 1 | 2*

Defined in node_modules/@types/ioredis/index.d.ts:1033

1/true means reconnect, 2 means reconnect and resend failed command. Returning false will ignore
the error and do nothing.

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) |

**Returns:** *boolean | 1 | 2*

___

### `Optional` retryStrategy

▸ **retryStrategy**(`times`: number): *number | false*

Defined in node_modules/@types/ioredis/index.d.ts:1017

When the return value isn't a number, ioredis will stop trying to reconnect.
Fixed in: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/15858

**Parameters:**

Name | Type |
------ | ------ |
`times` | number |

**Returns:** *number | false*
