[typescript](../README.md) › [Globals](../globals.md) › ["tls"](../modules/_tls_.md) › [Server](_tls_.server.md)

# Class: Server

## Hierarchy

  ↳ [Server](_net_.server.md)

  ↳ **Server**

  ↳ [Http2SecureServer](_http2_.http2secureserver.md)

  ↳ [Server](_https_.server.md)

## Index

### Constructors

* [constructor](_tls_.server.md#constructor)

### Properties

* [connections](_tls_.server.md#connections)
* [listening](_tls_.server.md#listening)
* [maxConnections](_tls_.server.md#maxconnections)
* [defaultMaxListeners](_tls_.server.md#static-defaultmaxlisteners)

### Methods

* [addContext](_tls_.server.md#addcontext)
* [addListener](_tls_.server.md#addlistener)
* [address](_tls_.server.md#address)
* [close](_tls_.server.md#close)
* [emit](_tls_.server.md#emit)
* [eventNames](_tls_.server.md#eventnames)
* [getConnections](_tls_.server.md#getconnections)
* [getMaxListeners](_tls_.server.md#getmaxlisteners)
* [listen](_tls_.server.md#listen)
* [listenerCount](_tls_.server.md#listenercount)
* [listeners](_tls_.server.md#listeners)
* [off](_tls_.server.md#off)
* [on](_tls_.server.md#on)
* [once](_tls_.server.md#once)
* [prependListener](_tls_.server.md#prependlistener)
* [prependOnceListener](_tls_.server.md#prependoncelistener)
* [rawListeners](_tls_.server.md#rawlisteners)
* [ref](_tls_.server.md#ref)
* [removeAllListeners](_tls_.server.md#removealllisteners)
* [removeListener](_tls_.server.md#removelistener)
* [setMaxListeners](_tls_.server.md#setmaxlisteners)
* [unref](_tls_.server.md#unref)
* [listenerCount](_tls_.server.md#static-listenercount)

## Constructors

###  constructor

\+ **new Server**(`connectionListener?`: undefined | function): *[Server](_tls_.server.md)*

*Inherited from [Server](_net_.server.md).[constructor](_net_.server.md#constructor)*

Defined in node_modules/@types/node/net.d.ts:181

**Parameters:**

Name | Type |
------ | ------ |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Server](_tls_.server.md)*

\+ **new Server**(`options?`: undefined | object, `connectionListener?`: undefined | function): *[Server](_tls_.server.md)*

*Inherited from [Server](_net_.server.md).[constructor](_net_.server.md#constructor)*

Defined in node_modules/@types/node/net.d.ts:182

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Server](_tls_.server.md)*

## Properties

###  connections

• **connections**: *number*

*Inherited from [Server](_http_.server.md).[connections](_http_.server.md#connections)*

Defined in node_modules/@types/node/net.d.ts:200

___

###  listening

• **listening**: *boolean*

*Inherited from [Server](_http_.server.md).[listening](_http_.server.md#listening)*

Defined in node_modules/@types/node/net.d.ts:201

___

###  maxConnections

• **maxConnections**: *number*

*Inherited from [Server](_http_.server.md).[maxConnections](_http_.server.md#maxconnections)*

Defined in node_modules/@types/node/net.d.ts:199

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addContext

▸ **addContext**(`hostName`: string, `credentials`: [SecureContextOptions](../interfaces/_tls_.securecontextoptions.md)): *void*

Defined in node_modules/@types/node/tls.d.ts:288

**Parameters:**

Name | Type |
------ | ------ |
`hostName` | string |
`credentials` | [SecureContextOptions](../interfaces/_tls_.securecontextoptions.md) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [Server](_http_.server.md).[addListener](_http_.server.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:298

events.EventEmitter
1. tlsClientError
2. newSession
3. OCSPRequest
4. resumeSession
5. secureConnection

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "tlsClientError", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[addListener](_http_.server.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:299

**Parameters:**

▪ **event**: *"tlsClientError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **addListener**(`event`: "newSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[addListener](_http_.server.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:300

**Parameters:**

▪ **event**: *"newSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `sessionData`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **sessionData**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "OCSPRequest", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[addListener](_http_.server.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:301

**Parameters:**

▪ **event**: *"OCSPRequest"*

▪ **listener**: *function*

▸ (`certificate`: [Buffer](buffer.md), `issuer`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **certificate**: *[Buffer](buffer.md)*

▪ **issuer**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "resumeSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[addListener](_http_.server.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:302

**Parameters:**

▪ **event**: *"resumeSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `sessionData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`sessionData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "secureConnection", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[addListener](_http_.server.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:303

**Parameters:**

▪ **event**: *"secureConnection"*

▪ **listener**: *function*

▸ (`tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **addListener**(`event`: "keylog", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[addListener](_http_.server.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:304

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

___

###  address

▸ **address**(): *[AddressInfo](../interfaces/_net_.addressinfo.md) | string | null*

*Inherited from [Server](_http_.server.md).[address](_http_.server.md#address)*

Defined in node_modules/@types/node/net.d.ts:195

**Returns:** *[AddressInfo](../interfaces/_net_.addressinfo.md) | string | null*

___

###  close

▸ **close**(`callback?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[close](_http_.server.md#close)*

Defined in node_modules/@types/node/net.d.ts:194

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [Server](_http_.server.md).[emit](_http_.server.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "tlsClientError", `err`: [Error](../interfaces/error.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *boolean*

*Overrides [Server](_http_.server.md).[emit](_http_.server.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:307

**Parameters:**

Name | Type |
------ | ------ |
`event` | "tlsClientError" |
`err` | [Error](../interfaces/error.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "newSession", `sessionId`: [Buffer](buffer.md), `sessionData`: [Buffer](buffer.md), `callback`: function): *boolean*

*Overrides [Server](_http_.server.md).[emit](_http_.server.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:308

**Parameters:**

▪ **event**: *"newSession"*

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **sessionData**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`resp` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "OCSPRequest", `certificate`: [Buffer](buffer.md), `issuer`: [Buffer](buffer.md), `callback`: function): *boolean*

*Overrides [Server](_http_.server.md).[emit](_http_.server.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:309

**Parameters:**

▪ **event**: *"OCSPRequest"*

▪ **certificate**: *[Buffer](buffer.md)*

▪ **issuer**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`resp` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "resumeSession", `sessionId`: [Buffer](buffer.md), `callback`: function): *boolean*

*Overrides [Server](_http_.server.md).[emit](_http_.server.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:310

**Parameters:**

▪ **event**: *"resumeSession"*

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `sessionData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`sessionData` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "secureConnection", `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *boolean*

*Overrides [Server](_http_.server.md).[emit](_http_.server.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:311

**Parameters:**

Name | Type |
------ | ------ |
`event` | "secureConnection" |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "keylog", `line`: [Buffer](buffer.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *boolean*

*Overrides [Server](_http_.server.md).[emit](_http_.server.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:312

**Parameters:**

Name | Type |
------ | ------ |
`event` | "keylog" |
`line` | [Buffer](buffer.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

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

*Inherited from [Server](_http_.server.md).[getConnections](_http_.server.md#getconnections)*

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

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

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

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

Defined in node_modules/@types/node/net.d.ts:186

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`hostname?` | undefined &#124; string |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`port?`: undefined | number, `backlog?`: undefined | number, `listeningListener?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

Defined in node_modules/@types/node/net.d.ts:187

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`backlog?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`port?`: undefined | number, `listeningListener?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

Defined in node_modules/@types/node/net.d.ts:188

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`path`: string, `backlog?`: undefined | number, `listeningListener?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

Defined in node_modules/@types/node/net.d.ts:189

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`backlog?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`path`: string, `listeningListener?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

Defined in node_modules/@types/node/net.d.ts:190

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`options`: [ListenOptions](../interfaces/_net_.listenoptions.md), `listeningListener?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

Defined in node_modules/@types/node/net.d.ts:191

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ListenOptions](../interfaces/_net_.listenoptions.md) |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`handle`: any, `backlog?`: undefined | number, `listeningListener?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

Defined in node_modules/@types/node/net.d.ts:192

**Parameters:**

Name | Type |
------ | ------ |
`handle` | any |
`backlog?` | undefined &#124; number |
`listeningListener?` | undefined &#124; function |

**Returns:** *this*

▸ **listen**(`handle`: any, `listeningListener?`: undefined | function): *this*

*Inherited from [Server](_http_.server.md).[listen](_http_.server.md#listen)*

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

*Overrides [Server](_http_.server.md).[on](_http_.server.md#on)*

Defined in node_modules/@types/node/tls.d.ts:314

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "tlsClientError", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[on](_http_.server.md#on)*

Defined in node_modules/@types/node/tls.d.ts:315

**Parameters:**

▪ **event**: *"tlsClientError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **on**(`event`: "newSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[on](_http_.server.md#on)*

Defined in node_modules/@types/node/tls.d.ts:316

**Parameters:**

▪ **event**: *"newSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `sessionData`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **sessionData**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "OCSPRequest", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[on](_http_.server.md#on)*

Defined in node_modules/@types/node/tls.d.ts:317

**Parameters:**

▪ **event**: *"OCSPRequest"*

▪ **listener**: *function*

▸ (`certificate`: [Buffer](buffer.md), `issuer`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **certificate**: *[Buffer](buffer.md)*

▪ **issuer**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "resumeSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[on](_http_.server.md#on)*

Defined in node_modules/@types/node/tls.d.ts:318

**Parameters:**

▪ **event**: *"resumeSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `sessionData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`sessionData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "secureConnection", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[on](_http_.server.md#on)*

Defined in node_modules/@types/node/tls.d.ts:319

**Parameters:**

▪ **event**: *"secureConnection"*

▪ **listener**: *function*

▸ (`tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **on**(`event`: "keylog", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[on](_http_.server.md#on)*

Defined in node_modules/@types/node/tls.d.ts:320

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [Server](_http_.server.md).[once](_http_.server.md#once)*

Defined in node_modules/@types/node/tls.d.ts:322

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "tlsClientError", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[once](_http_.server.md#once)*

Defined in node_modules/@types/node/tls.d.ts:323

**Parameters:**

▪ **event**: *"tlsClientError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **once**(`event`: "newSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[once](_http_.server.md#once)*

Defined in node_modules/@types/node/tls.d.ts:324

**Parameters:**

▪ **event**: *"newSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `sessionData`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **sessionData**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "OCSPRequest", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[once](_http_.server.md#once)*

Defined in node_modules/@types/node/tls.d.ts:325

**Parameters:**

▪ **event**: *"OCSPRequest"*

▪ **listener**: *function*

▸ (`certificate`: [Buffer](buffer.md), `issuer`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **certificate**: *[Buffer](buffer.md)*

▪ **issuer**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "resumeSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[once](_http_.server.md#once)*

Defined in node_modules/@types/node/tls.d.ts:326

**Parameters:**

▪ **event**: *"resumeSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `sessionData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`sessionData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "secureConnection", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[once](_http_.server.md#once)*

Defined in node_modules/@types/node/tls.d.ts:327

**Parameters:**

▪ **event**: *"secureConnection"*

▪ **listener**: *function*

▸ (`tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **once**(`event`: "keylog", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[once](_http_.server.md#once)*

Defined in node_modules/@types/node/tls.d.ts:328

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependListener](_http_.server.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:330

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "tlsClientError", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependListener](_http_.server.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:331

**Parameters:**

▪ **event**: *"tlsClientError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "newSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependListener](_http_.server.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:332

**Parameters:**

▪ **event**: *"newSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `sessionData`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **sessionData**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "OCSPRequest", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependListener](_http_.server.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:333

**Parameters:**

▪ **event**: *"OCSPRequest"*

▪ **listener**: *function*

▸ (`certificate`: [Buffer](buffer.md), `issuer`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **certificate**: *[Buffer](buffer.md)*

▪ **issuer**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "resumeSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependListener](_http_.server.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:334

**Parameters:**

▪ **event**: *"resumeSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `sessionData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`sessionData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "secureConnection", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependListener](_http_.server.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:335

**Parameters:**

▪ **event**: *"secureConnection"*

▪ **listener**: *function*

▸ (`tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "keylog", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependListener](_http_.server.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:336

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependOnceListener](_http_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:338

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "tlsClientError", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependOnceListener](_http_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:339

**Parameters:**

▪ **event**: *"tlsClientError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "newSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependOnceListener](_http_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:340

**Parameters:**

▪ **event**: *"newSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `sessionData`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **sessionData**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "OCSPRequest", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependOnceListener](_http_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:341

**Parameters:**

▪ **event**: *"OCSPRequest"*

▪ **listener**: *function*

▸ (`certificate`: [Buffer](buffer.md), `issuer`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **certificate**: *[Buffer](buffer.md)*

▪ **issuer**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `resp`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`resp` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "resumeSession", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependOnceListener](_http_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:342

**Parameters:**

▪ **event**: *"resumeSession"*

▪ **listener**: *function*

▸ (`sessionId`: [Buffer](buffer.md), `callback`: function): *void*

**Parameters:**

▪ **sessionId**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md), `sessionData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`sessionData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "secureConnection", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependOnceListener](_http_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:343

**Parameters:**

▪ **event**: *"secureConnection"*

▪ **listener**: *function*

▸ (`tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "keylog", `listener`: function): *this*

*Overrides [Server](_http_.server.md).[prependOnceListener](_http_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:344

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md), `tlsSocket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |
`tlsSocket` | [TLSSocket](_tls_.tlssocket.md) |

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

*Inherited from [Server](_http_.server.md).[ref](_http_.server.md#ref)*

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

*Inherited from [Server](_http_.server.md).[unref](_http_.server.md#unref)*

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
