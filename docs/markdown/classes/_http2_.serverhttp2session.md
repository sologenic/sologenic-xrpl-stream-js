[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [ServerHttp2Session](_http2_.serverhttp2session.md)

# Class: ServerHttp2Session

## Hierarchy

  ↳ [Http2Session](_http2_.http2session.md)

  ↳ **ServerHttp2Session**

## Index

### Constructors

* [constructor](_http2_.serverhttp2session.md#private-constructor)

### Properties

* [alpnProtocol](_http2_.serverhttp2session.md#optional-alpnprotocol)
* [closed](_http2_.serverhttp2session.md#closed)
* [connecting](_http2_.serverhttp2session.md#connecting)
* [destroyed](_http2_.serverhttp2session.md#destroyed)
* [encrypted](_http2_.serverhttp2session.md#optional-encrypted)
* [localSettings](_http2_.serverhttp2session.md#localsettings)
* [originSet](_http2_.serverhttp2session.md#optional-originset)
* [pendingSettingsAck](_http2_.serverhttp2session.md#pendingsettingsack)
* [remoteSettings](_http2_.serverhttp2session.md#remotesettings)
* [server](_http2_.serverhttp2session.md#server)
* [socket](_http2_.serverhttp2session.md#socket)
* [state](_http2_.serverhttp2session.md#state)
* [type](_http2_.serverhttp2session.md#type)
* [defaultMaxListeners](_http2_.serverhttp2session.md#static-defaultmaxlisteners)

### Methods

* [addListener](_http2_.serverhttp2session.md#addlistener)
* [altsvc](_http2_.serverhttp2session.md#altsvc)
* [close](_http2_.serverhttp2session.md#close)
* [destroy](_http2_.serverhttp2session.md#destroy)
* [emit](_http2_.serverhttp2session.md#emit)
* [eventNames](_http2_.serverhttp2session.md#eventnames)
* [getMaxListeners](_http2_.serverhttp2session.md#getmaxlisteners)
* [goaway](_http2_.serverhttp2session.md#goaway)
* [listenerCount](_http2_.serverhttp2session.md#listenercount)
* [listeners](_http2_.serverhttp2session.md#listeners)
* [off](_http2_.serverhttp2session.md#off)
* [on](_http2_.serverhttp2session.md#on)
* [once](_http2_.serverhttp2session.md#once)
* [origin](_http2_.serverhttp2session.md#origin)
* [ping](_http2_.serverhttp2session.md#ping)
* [prependListener](_http2_.serverhttp2session.md#prependlistener)
* [prependOnceListener](_http2_.serverhttp2session.md#prependoncelistener)
* [rawListeners](_http2_.serverhttp2session.md#rawlisteners)
* [ref](_http2_.serverhttp2session.md#ref)
* [removeAllListeners](_http2_.serverhttp2session.md#removealllisteners)
* [removeListener](_http2_.serverhttp2session.md#removelistener)
* [setMaxListeners](_http2_.serverhttp2session.md#setmaxlisteners)
* [setTimeout](_http2_.serverhttp2session.md#settimeout)
* [settings](_http2_.serverhttp2session.md#settings)
* [unref](_http2_.serverhttp2session.md#unref)
* [listenerCount](_http2_.serverhttp2session.md#static-listenercount)

## Constructors

### `Private` constructor

\+ **new ServerHttp2Session**(): *[ServerHttp2Session](_http2_.serverhttp2session.md)*

*Overrides [Http2Session](_http2_.http2session.md).[constructor](_http2_.http2session.md#protected-constructor)*

Defined in node_modules/@types/node/http2.d.ts:402

**Returns:** *[ServerHttp2Session](_http2_.serverhttp2session.md)*

## Properties

### `Optional` alpnProtocol

• **alpnProtocol**? : *undefined | string*

*Inherited from [Http2Session](_http2_.http2session.md).[alpnProtocol](_http2_.http2session.md#optional-alpnprotocol)*

Defined in node_modules/@types/node/http2.d.ts:273

___

###  closed

• **closed**: *boolean*

*Inherited from [Http2Session](_http2_.http2session.md).[closed](_http2_.http2session.md#closed)*

Defined in node_modules/@types/node/http2.d.ts:275

___

###  connecting

• **connecting**: *boolean*

*Inherited from [Http2Session](_http2_.http2session.md).[connecting](_http2_.http2session.md#connecting)*

Defined in node_modules/@types/node/http2.d.ts:276

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Http2Session](_http2_.http2session.md).[destroyed](_http2_.http2session.md#destroyed)*

Defined in node_modules/@types/node/http2.d.ts:278

___

### `Optional` encrypted

• **encrypted**? : *undefined | false | true*

*Inherited from [Http2Session](_http2_.http2session.md).[encrypted](_http2_.http2session.md#optional-encrypted)*

Defined in node_modules/@types/node/http2.d.ts:279

___

###  localSettings

• **localSettings**: *[Settings](../interfaces/_http2_.settings.md)*

*Inherited from [Http2Session](_http2_.http2session.md).[localSettings](_http2_.http2session.md#localsettings)*

Defined in node_modules/@types/node/http2.d.ts:281

___

### `Optional` originSet

• **originSet**? : *string[]*

*Inherited from [Http2Session](_http2_.http2session.md).[originSet](_http2_.http2session.md#optional-originset)*

Defined in node_modules/@types/node/http2.d.ts:282

___

###  pendingSettingsAck

• **pendingSettingsAck**: *boolean*

*Inherited from [Http2Session](_http2_.http2session.md).[pendingSettingsAck](_http2_.http2session.md#pendingsettingsack)*

Defined in node_modules/@types/node/http2.d.ts:283

___

###  remoteSettings

• **remoteSettings**: *[Settings](../interfaces/_http2_.settings.md)*

*Inherited from [Http2Session](_http2_.http2session.md).[remoteSettings](_http2_.http2session.md#remotesettings)*

Defined in node_modules/@types/node/http2.d.ts:287

___

###  server

• **server**: *[Http2Server](_http2_.http2server.md) | [Http2SecureServer](_http2_.http2secureserver.md)*

Defined in node_modules/@types/node/http2.d.ts:407

___

###  socket

• **socket**: *[Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)*

*Inherited from [Http2Session](_http2_.http2session.md).[socket](_http2_.http2session.md#socket)*

Defined in node_modules/@types/node/http2.d.ts:289

___

###  state

• **state**: *[SessionState](../interfaces/_http2_.sessionstate.md)*

*Inherited from [Http2Session](_http2_.http2session.md).[state](_http2_.http2session.md#state)*

Defined in node_modules/@types/node/http2.d.ts:290

___

###  type

• **type**: *number*

*Inherited from [Http2Session](_http2_.http2session.md).[type](_http2_.http2session.md#type)*

Defined in node_modules/@types/node/http2.d.ts:292

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: "connect", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[addListener](_http2_.http2session.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:409

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md), `socket`: [Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |
`socket` | [Socket](_net_.socket.md) &#124; [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **addListener**(`event`: "stream", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[addListener](_http2_.http2session.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:410

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

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[addListener](_http2_.http2session.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:411

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

###  altsvc

▸ **altsvc**(`alt`: string, `originOrStream`: number | string | [URL](_url_.url.md) | [AlternativeServiceOptions](../interfaces/_http2_.alternativeserviceoptions.md)): *void*

Defined in node_modules/@types/node/http2.d.ts:405

**Parameters:**

Name | Type |
------ | ------ |
`alt` | string |
`originOrStream` | number &#124; string &#124; [URL](_url_.url.md) &#124; [AlternativeServiceOptions](../interfaces/_http2_.alternativeserviceoptions.md) |

**Returns:** *void*

___

###  close

▸ **close**(`callback?`: undefined | function): *void*

*Inherited from [Http2Session](_http2_.http2session.md).[close](_http2_.http2session.md#close)*

Defined in node_modules/@types/node/http2.d.ts:274

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](../interfaces/error.md), `code?`: undefined | number): *void*

*Inherited from [Http2Session](_http2_.http2session.md).[destroy](_http2_.http2session.md#destroy)*

Defined in node_modules/@types/node/http2.d.ts:277

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) |
`code?` | undefined &#124; number |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "connect", `session`: [ServerHttp2Session](_http2_.serverhttp2session.md), `socket`: [Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)): *boolean*

*Overrides [Http2Session](_http2_.http2session.md).[emit](_http2_.http2session.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:413

**Parameters:**

Name | Type |
------ | ------ |
`event` | "connect" |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |
`socket` | [Socket](_net_.socket.md) &#124; [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "stream", `stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *boolean*

*Overrides [Http2Session](_http2_.http2session.md).[emit](_http2_.http2session.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:414

**Parameters:**

Name | Type |
------ | ------ |
`event` | "stream" |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [Http2Session](_http2_.http2session.md).[emit](_http2_.http2session.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:415

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

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  goaway

▸ **goaway**(`code?`: undefined | number, `lastStreamID?`: undefined | number, `opaqueData?`: [ArrayBufferView](../modules/nodejs.md#arraybufferview)): *void*

*Inherited from [Http2Session](_http2_.http2session.md).[goaway](_http2_.http2session.md#goaway)*

Defined in node_modules/@types/node/http2.d.ts:280

**Parameters:**

Name | Type |
------ | ------ |
`code?` | undefined &#124; number |
`lastStreamID?` | undefined &#124; number |
`opaqueData?` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |

**Returns:** *void*

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

▸ **on**(`event`: "connect", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[on](_http2_.http2session.md#on)*

Defined in node_modules/@types/node/http2.d.ts:417

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md), `socket`: [Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |
`socket` | [Socket](_net_.socket.md) &#124; [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **on**(`event`: "stream", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[on](_http2_.http2session.md#on)*

Defined in node_modules/@types/node/http2.d.ts:418

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

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[on](_http2_.http2session.md#on)*

Defined in node_modules/@types/node/http2.d.ts:419

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

▸ **once**(`event`: "connect", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[once](_http2_.http2session.md#once)*

Defined in node_modules/@types/node/http2.d.ts:421

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md), `socket`: [Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |
`socket` | [Socket](_net_.socket.md) &#124; [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **once**(`event`: "stream", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[once](_http2_.http2session.md#once)*

Defined in node_modules/@types/node/http2.d.ts:422

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

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[once](_http2_.http2session.md#once)*

Defined in node_modules/@types/node/http2.d.ts:423

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

###  origin

▸ **origin**(...`args`: [Array](../interfaces/regexpmatcharray.md#array)‹string | [URL](_url_.url.md) | object›): *void*

Defined in node_modules/@types/node/http2.d.ts:406

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](../interfaces/regexpmatcharray.md#array)‹string &#124; [URL](_url_.url.md) &#124; object› |

**Returns:** *void*

___

###  ping

▸ **ping**(`callback`: function): *boolean*

*Inherited from [Http2Session](_http2_.http2session.md).[ping](_http2_.http2session.md#ping)*

Defined in node_modules/@types/node/http2.d.ts:284

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `duration`: number, `payload`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`duration` | number |
`payload` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **ping**(`payload`: [ArrayBufferView](../modules/nodejs.md#arraybufferview), `callback`: function): *boolean*

*Inherited from [Http2Session](_http2_.http2session.md).[ping](_http2_.http2session.md#ping)*

Defined in node_modules/@types/node/http2.d.ts:285

**Parameters:**

▪ **payload**: *[ArrayBufferView](../modules/nodejs.md#arraybufferview)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `duration`: number, `payload`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`duration` | number |
`payload` | [Buffer](buffer.md) |

**Returns:** *boolean*

___

###  prependListener

▸ **prependListener**(`event`: "connect", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[prependListener](_http2_.http2session.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:425

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md), `socket`: [Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |
`socket` | [Socket](_net_.socket.md) &#124; [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "stream", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[prependListener](_http2_.http2session.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:426

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

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[prependListener](_http2_.http2session.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:427

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

▸ **prependOnceListener**(`event`: "connect", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[prependOnceListener](_http2_.http2session.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:429

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`session`: [ServerHttp2Session](_http2_.serverhttp2session.md), `socket`: [Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [ServerHttp2Session](_http2_.serverhttp2session.md) |
`socket` | [Socket](_net_.socket.md) &#124; [TLSSocket](_tls_.tlssocket.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "stream", `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[prependOnceListener](_http2_.http2session.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:430

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

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Session](_http2_.http2session.md).[prependOnceListener](_http2_.http2session.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:431

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

▸ **ref**(): *void*

*Inherited from [Http2Session](_http2_.http2session.md).[ref](_http2_.http2session.md#ref)*

Defined in node_modules/@types/node/http2.d.ts:286

**Returns:** *void*

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

▸ **setTimeout**(`msecs`: number, `callback?`: undefined | function): *void*

*Inherited from [Http2Session](_http2_.http2session.md).[setTimeout](_http2_.http2session.md#settimeout)*

Defined in node_modules/@types/node/http2.d.ts:288

**Parameters:**

Name | Type |
------ | ------ |
`msecs` | number |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  settings

▸ **settings**(`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

*Inherited from [Http2Session](_http2_.http2session.md).[settings](_http2_.http2session.md#settings)*

Defined in node_modules/@types/node/http2.d.ts:291

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *void*

___

###  unref

▸ **unref**(): *void*

*Inherited from [Http2Session](_http2_.http2session.md).[unref](_http2_.http2session.md#unref)*

Defined in node_modules/@types/node/http2.d.ts:293

**Returns:** *void*

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
