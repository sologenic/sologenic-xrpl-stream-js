[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [Http2SecureServer](_http2_.http2secureserver.md)

# Class: Http2SecureServer

## Hierarchy

  ↳ [Server](_tls_.server.md)

  ↳ **Http2SecureServer**

## Index

### Constructors

* [constructor](_http2_.http2secureserver.md#private-constructor)

### Properties

* [connections](_http2_.http2secureserver.md#connections)
* [listening](_http2_.http2secureserver.md#listening)
* [maxConnections](_http2_.http2secureserver.md#maxconnections)
* [defaultMaxListeners](_http2_.http2secureserver.md#static-defaultmaxlisteners)

### Methods

* [addContext](_http2_.http2secureserver.md#addcontext)
* [addListener](_http2_.http2secureserver.md#addlistener)
* [address](_http2_.http2secureserver.md#address)
* [close](_http2_.http2secureserver.md#close)
* [emit](_http2_.http2secureserver.md#emit)
* [eventNames](_http2_.http2secureserver.md#eventnames)
* [getConnections](_http2_.http2secureserver.md#getconnections)
* [getMaxListeners](_http2_.http2secureserver.md#getmaxlisteners)
* [listen](_http2_.http2secureserver.md#listen)
* [listenerCount](_http2_.http2secureserver.md#listenercount)
* [listeners](_http2_.http2secureserver.md#listeners)
* [off](_http2_.http2secureserver.md#off)
* [on](_http2_.http2secureserver.md#on)
* [once](_http2_.http2secureserver.md#once)
* [prependListener](_http2_.http2secureserver.md#prependlistener)
* [prependOnceListener](_http2_.http2secureserver.md#prependoncelistener)
* [rawListeners](_http2_.http2secureserver.md#rawlisteners)
* [ref](_http2_.http2secureserver.md#ref)
* [removeAllListeners](_http2_.http2secureserver.md#removealllisteners)
* [removeListener](_http2_.http2secureserver.md#removelistener)
* [setMaxListeners](_http2_.http2secureserver.md#setmaxlisteners)
* [setTimeout](_http2_.http2secureserver.md#settimeout)
* [unref](_http2_.http2secureserver.md#unref)
* [listenerCount](_http2_.http2secureserver.md#static-listenercount)

## Constructors

### `Private` constructor

\+ **new Http2SecureServer**(): *[Http2SecureServer](_http2_.http2secureserver.md)*

*Overrides [Server](_net_.server.md).[constructor](_net_.server.md#constructor)*

Defined in node_modules/@types/node/http2.d.ts:525

**Returns:** *[Http2SecureServer](_http2_.http2secureserver.md)*

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

*Inherited from [Http2SecureServer](_http2_.http2secureserver.md).[addContext](_http2_.http2secureserver.md#addcontext)*

Defined in node_modules/@types/node/tls.d.ts:288

**Parameters:**

Name | Type |
------ | ------ |
`hostName` | string |
`credentials` | [SecureContextOptions](../interfaces/_tls_.securecontextoptions.md) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "checkContinue", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:528

**Parameters:**

▪ **event**: *"checkContinue"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **addListener**(`event`: "request", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:529

**Parameters:**

▪ **event**: *"request"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **addListener**(`event`: "session", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:530

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |

**Returns:** *this*

▸ **addListener**(`event`: "sessionError", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:531

**Parameters:**

▪ **event**: *"sessionError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "stream", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:532

**Parameters:**

▪ **event**: *"stream"*

▪ **listener**: *function*

▸ (`stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **addListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:533

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "unknownProtocol", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:534

**Parameters:**

▪ **event**: *"unknownProtocol"*

▪ **listener**: *function*

▸ (`socket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Server](_https_.server.md).[addListener](_https_.server.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:535

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

▸ **emit**(`event`: "checkContinue", `request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:537

**Parameters:**

Name | Type |
------ | ------ |
`event` | "checkContinue" |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "request", `request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:538

**Parameters:**

Name | Type |
------ | ------ |
`event` | "request" |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "session", `session`: [ServerHttp2Session](_http2_.serverhttp2session.md)): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:539

**Parameters:**

Name | Type |
------ | ------ |
`event` | "session" |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "sessionError", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:540

**Parameters:**

Name | Type |
------ | ------ |
`event` | "sessionError" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "stream", `stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:541

**Parameters:**

Name | Type |
------ | ------ |
`event` | "stream" |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "timeout"): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:542

**Parameters:**

Name | Type |
------ | ------ |
`event` | "timeout" |

**Returns:** *boolean*

▸ **emit**(`event`: "unknownProtocol", `socket`: [TLSSocket](_tls_.tlssocket.md)): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:543

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unknownProtocol" |
`socket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [Server](_https_.server.md).[emit](_https_.server.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:544

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

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

▸ **on**(`event`: "checkContinue", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:546

**Parameters:**

▪ **event**: *"checkContinue"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **on**(`event`: "request", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:547

**Parameters:**

▪ **event**: *"request"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **on**(`event`: "session", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:548

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |

**Returns:** *this*

▸ **on**(`event`: "sessionError", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:549

**Parameters:**

▪ **event**: *"sessionError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "stream", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:550

**Parameters:**

▪ **event**: *"stream"*

▪ **listener**: *function*

▸ (`stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **on**(`event`: "timeout", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:551

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "unknownProtocol", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:552

**Parameters:**

▪ **event**: *"unknownProtocol"*

▪ **listener**: *function*

▸ (`socket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Server](_https_.server.md).[on](_https_.server.md#on)*

Defined in node_modules/@types/node/http2.d.ts:553

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

▸ **once**(`event`: "checkContinue", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:555

**Parameters:**

▪ **event**: *"checkContinue"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **once**(`event`: "request", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:556

**Parameters:**

▪ **event**: *"request"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **once**(`event`: "session", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:557

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |

**Returns:** *this*

▸ **once**(`event`: "sessionError", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:558

**Parameters:**

▪ **event**: *"sessionError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "stream", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:559

**Parameters:**

▪ **event**: *"stream"*

▪ **listener**: *function*

▸ (`stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **once**(`event`: "timeout", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:560

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "unknownProtocol", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:561

**Parameters:**

▪ **event**: *"unknownProtocol"*

▪ **listener**: *function*

▸ (`socket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Server](_https_.server.md).[once](_https_.server.md#once)*

Defined in node_modules/@types/node/http2.d.ts:562

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

▸ **prependListener**(`event`: "checkContinue", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:564

**Parameters:**

▪ **event**: *"checkContinue"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "request", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:565

**Parameters:**

▪ **event**: *"request"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "session", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:566

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "sessionError", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:567

**Parameters:**

▪ **event**: *"sessionError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "stream", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:568

**Parameters:**

▪ **event**: *"stream"*

▪ **listener**: *function*

▸ (`stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:569

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "unknownProtocol", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:570

**Parameters:**

▪ **event**: *"unknownProtocol"*

▪ **listener**: *function*

▸ (`socket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependListener](_https_.server.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:571

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

▸ **prependOnceListener**(`event`: "checkContinue", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:573

**Parameters:**

▪ **event**: *"checkContinue"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "request", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:574

**Parameters:**

▪ **event**: *"request"*

▪ **listener**: *function*

▸ (`request`: [Http2ServerRequest](_http2_.http2serverrequest.md), `response`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [Http2ServerRequest](_http2_.http2serverrequest.md) |
`response` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "session", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:575

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "sessionError", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:576

**Parameters:**

▪ **event**: *"sessionError"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "stream", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:577

**Parameters:**

▪ **event**: *"stream"*

▪ **listener**: *function*

▸ (`stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:578

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unknownProtocol", `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:579

**Parameters:**

▪ **event**: *"unknownProtocol"*

▪ **listener**: *function*

▸ (`socket`: [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Server](_https_.server.md).[prependOnceListener](_https_.server.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:580

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

###  setTimeout

▸ **setTimeout**(`msec?`: undefined | number, `callback?`: undefined | function): *this*

Defined in node_modules/@types/node/http2.d.ts:582

**Parameters:**

Name | Type |
------ | ------ |
`msec?` | undefined &#124; number |
`callback?` | undefined &#124; function |

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
