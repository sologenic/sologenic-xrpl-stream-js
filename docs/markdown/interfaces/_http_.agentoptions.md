[typescript](../README.md) › [Globals](../globals.md) › ["http"](../modules/_http_.md) › [AgentOptions](_http_.agentoptions.md)

# Interface: AgentOptions

## Hierarchy

* **AgentOptions**

  ↳ [AgentOptions](_https_.agentoptions.md)

## Index

### Properties

* [keepAlive](_http_.agentoptions.md#optional-keepalive)
* [keepAliveMsecs](_http_.agentoptions.md#optional-keepalivemsecs)
* [maxFreeSockets](_http_.agentoptions.md#optional-maxfreesockets)
* [maxSockets](_http_.agentoptions.md#optional-maxsockets)
* [timeout](_http_.agentoptions.md#optional-timeout)

## Properties

### `Optional` keepAlive

• **keepAlive**? : *undefined | false | true*

Defined in node_modules/@types/node/http.d.ts:305

Keep sockets around in a pool to be used by other requests in the future. Default = false

___

### `Optional` keepAliveMsecs

• **keepAliveMsecs**? : *undefined | number*

Defined in node_modules/@types/node/http.d.ts:310

When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
Only relevant if keepAlive is set to true.

___

### `Optional` maxFreeSockets

• **maxFreeSockets**? : *undefined | number*

Defined in node_modules/@types/node/http.d.ts:318

Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.

___

### `Optional` maxSockets

• **maxSockets**? : *undefined | number*

Defined in node_modules/@types/node/http.d.ts:314

Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity

___

### `Optional` timeout

• **timeout**? : *undefined | number*

Defined in node_modules/@types/node/http.d.ts:322

Socket timeout in milliseconds. This will set the timeout after the socket is connected.
