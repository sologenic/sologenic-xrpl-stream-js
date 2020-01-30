[typescript](../README.md) › [Globals](../globals.md) › ["net"](../modules/_net_.md) › [Server](_net_.server.md)

# Class: Server

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Server**

  ↳ [Server](_http_.server.md)

  ↳ [Http2Server](_http2_.http2server.md)

  ↳ [Server](_tls_.server.md)

## Index

### Constructors

* [constructor](_net_.server.md#constructor)

### Properties

* [connections](_net_.server.md#connections)
* [listening](_net_.server.md#listening)
* [maxConnections](_net_.server.md#maxconnections)
* [defaultMaxListeners](_net_.server.md#static-defaultmaxlisteners)

### Methods

* [addListener](_net_.server.md#addlistener)
* [address](_net_.server.md#address)
* [close](_net_.server.md#close)
* [emit](_net_.server.md#emit)
* [eventNames](_net_.server.md#eventnames)
* [getConnections](_net_.server.md#getconnections)
* [getMaxListeners](_net_.server.md#getmaxlisteners)
* [listen](_net_.server.md#listen)
* [listenerCount](_net_.server.md#listenercount)
* [listeners](_net_.server.md#listeners)
* [off](_net_.server.md#off)
* [on](_net_.server.md#on)
* [once](_net_.server.md#once)
* [prependListener](_net_.server.md#prependlistener)
* [prependOnceListener](_net_.server.md#prependoncelistener)
* [rawListeners](_net_.server.md#rawlisteners)
* [ref](_net_.server.md#ref)
* [removeAllListeners](_net_.server.md#removealllisteners)
* [removeListener](_net_.server.md#removelistener)
* [setMaxListeners](_net_.server.md#setmaxlisteners)
* [unref](_net_.server.md#unref)
* [listenerCount](_net_.server.md#static-listenercount)

## Constructors

###  constructor

\+ **new Server**(`connectionListener?`: undefined | function): *[Server](_net_.server.md)*

Defined in node_modules/@types/node/net.d.ts:181

**Parameters:**

Name | Type |
------ | ------ |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Server](_net_.server.md)*

\+ **new Server**(`options?`: undefined | object, `connectionListener?`: undefined | function): *[Server](_net_.server.md)*

Defined in node_modules/@types/node/net.d.ts:182

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Server](_net_.server.md)*

## Properties

###  connections

• **connections**: *number*

Defined in node_modules/@types/node/net.d.ts:200

___

###  listening

• **listening**: *boolean*

Defined in node_modules/@types/node/net.d.ts:201

___

###  maxConnections

• **maxConnections**: *number*

Defined in node_modules/@types/node/net.d.ts:199

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:210

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:211

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "connection", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:212

**Parameters:**

▪ **event**: *"connection"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:213

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:214

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  address

▸ **address**(): *[AddressInfo](../interfaces/_net_.addressinfo.md) | string | null*

Defined in node_modules/@types/node/net.d.ts:195

**Returns:** *[AddressInfo](../interfaces/_net_.addressinfo.md) | string | null*

___

###  close

▸ **close**(`callback?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:194

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/net.d.ts:216

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/net.d.ts:217

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "connection", `socket`: [Socket](_net_.socket.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/net.d.ts:218

**Parameters:**

Name | Type |
------ | ------ |
`event` | "connection" |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/net.d.ts:219

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "listening"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/net.d.ts:220

**Parameters:**

Name | Type |
------ | ------ |
`event` | "listening" |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[eventNames](nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getConnections

▸ **getConnections**(`cb`: function): *void*

Defined in node_modules/@types/node/net.d.ts:196

**Parameters:**

▪ **cb**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `count`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`count` | number |

**Returns:** *void*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listen

▸ **listen**(`port?`: undefined | number, `hostname?`: undefined | string, `backlog?`: undefined | number, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:185

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`hostname?` | undefined &#124; string |
`backlog?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`port?`: undefined | number, `hostname?`: undefined | string, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:186

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`hostname?` | undefined &#124; string |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`port?`: undefined | number, `backlog?`: undefined | number, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:187

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`backlog?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`port?`: undefined | number, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:188

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`path`: string, `backlog?`: undefined | number, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:189

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`backlog?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`path`: string, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:190

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`options`: [ListenOptions](../interfaces/_net_.listenoptions.md), `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:191

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ListenOptions](../interfaces/_net_.listenoptions.md) |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`handle`: any, `backlog?`: undefined | number, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:192

**Parameters:**

Name | Type |
------ | ------ |
`handle` | any |
`backlog?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`handle`: any, `listeningListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:193

**Parameters:**

Name | Type |
------ | ------ |
`handle` | any |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listenerCount](nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[off](nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

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

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/net.d.ts:222

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/net.d.ts:223

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "connection", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/net.d.ts:224

**Parameters:**

▪ **event**: *"connection"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/net.d.ts:225

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "listening", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/net.d.ts:226

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/net.d.ts:228

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/net.d.ts:229

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "connection", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/net.d.ts:230

**Parameters:**

▪ **event**: *"connection"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/net.d.ts:231

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/net.d.ts:232

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:234

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:235

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "connection", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:236

**Parameters:**

▪ **event**: *"connection"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:237

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:238

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:240

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:241

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "connection", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:242

**Parameters:**

▪ **event**: *"connection"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:243

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:244

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[rawListeners](nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  ref

▸ **ref**(): *this*

Defined in node_modules/@types/node/net.d.ts:197

**Returns:** *this*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

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

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  unref

▸ **unref**(): *this*

Defined in node_modules/@types/node/net.d.ts:198

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
