[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [Http2Session](_http2_.http2session.md)

# Class: Http2Session

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Http2Session**

  ↳ [ClientHttp2Session](_http2_.clienthttp2session.md)

  ↳ [ServerHttp2Session](_http2_.serverhttp2session.md)

## Index

### Constructors

* [constructor](_http2_.http2session.md#protected-constructor)

### Properties

* [alpnProtocol](_http2_.http2session.md#optional-alpnprotocol)
* [closed](_http2_.http2session.md#closed)
* [connecting](_http2_.http2session.md#connecting)
* [destroyed](_http2_.http2session.md#destroyed)
* [encrypted](_http2_.http2session.md#optional-encrypted)
* [localSettings](_http2_.http2session.md#localsettings)
* [originSet](_http2_.http2session.md#optional-originset)
* [pendingSettingsAck](_http2_.http2session.md#pendingsettingsack)
* [remoteSettings](_http2_.http2session.md#remotesettings)
* [socket](_http2_.http2session.md#socket)
* [state](_http2_.http2session.md#state)
* [type](_http2_.http2session.md#type)
* [defaultMaxListeners](_http2_.http2session.md#static-defaultmaxlisteners)

### Methods

* [addListener](_http2_.http2session.md#addlistener)
* [close](_http2_.http2session.md#close)
* [destroy](_http2_.http2session.md#destroy)
* [emit](_http2_.http2session.md#emit)
* [eventNames](_http2_.http2session.md#eventnames)
* [getMaxListeners](_http2_.http2session.md#getmaxlisteners)
* [goaway](_http2_.http2session.md#goaway)
* [listenerCount](_http2_.http2session.md#listenercount)
* [listeners](_http2_.http2session.md#listeners)
* [off](_http2_.http2session.md#off)
* [on](_http2_.http2session.md#on)
* [once](_http2_.http2session.md#once)
* [ping](_http2_.http2session.md#ping)
* [prependListener](_http2_.http2session.md#prependlistener)
* [prependOnceListener](_http2_.http2session.md#prependoncelistener)
* [rawListeners](_http2_.http2session.md#rawlisteners)
* [ref](_http2_.http2session.md#ref)
* [removeAllListeners](_http2_.http2session.md#removealllisteners)
* [removeListener](_http2_.http2session.md#removelistener)
* [setMaxListeners](_http2_.http2session.md#setmaxlisteners)
* [setTimeout](_http2_.http2session.md#settimeout)
* [settings](_http2_.http2session.md#settings)
* [unref](_http2_.http2session.md#unref)
* [listenerCount](_http2_.http2session.md#static-listenercount)

## Constructors

### `Protected` constructor

\+ **new Http2Session**(): *[Http2Session](_http2_.http2session.md)*

Defined in node_modules/@types/node/http2.d.ts:270

**Returns:** *[Http2Session](_http2_.http2session.md)*

## Properties

### `Optional` alpnProtocol

• **alpnProtocol**? : *undefined | string*

Defined in node_modules/@types/node/http2.d.ts:273

___

###  closed

• **closed**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:275

___

###  connecting

• **connecting**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:276

___

###  destroyed

• **destroyed**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:278

___

### `Optional` encrypted

• **encrypted**? : *undefined | false | true*

Defined in node_modules/@types/node/http2.d.ts:279

___

###  localSettings

• **localSettings**: *[Settings](../interfaces/_http2_.settings.md)*

Defined in node_modules/@types/node/http2.d.ts:281

___

### `Optional` originSet

• **originSet**? : *string[]*

Defined in node_modules/@types/node/http2.d.ts:282

___

###  pendingSettingsAck

• **pendingSettingsAck**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:283

___

###  remoteSettings

• **remoteSettings**: *[Settings](../interfaces/_http2_.settings.md)*

Defined in node_modules/@types/node/http2.d.ts:287

___

###  socket

• **socket**: *[Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)*

Defined in node_modules/@types/node/http2.d.ts:289

___

###  state

• **state**: *[SessionState](../interfaces/_http2_.sessionstate.md)*

Defined in node_modules/@types/node/http2.d.ts:290

___

###  type

• **type**: *number*

Defined in node_modules/@types/node/http2.d.ts:292

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:295

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:296

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "frameError", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:297

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number, `streamID`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |
`streamID` | number |

**Returns:** *this*

▸ **addListener**(`event`: "goaway", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:298

**Parameters:**

▪ **event**: *"goaway"*

▪ **listener**: *function*

▸ (`errorCode`: number, `lastStreamID`: number, `opaqueData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`errorCode` | number |
`lastStreamID` | number |
`opaqueData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "localSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:299

**Parameters:**

▪ **event**: *"localSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **addListener**(`event`: "ping", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:300

**Parameters:**

▪ **event**: *"ping"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "remoteSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:301

**Parameters:**

▪ **event**: *"remoteSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **addListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:302

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:303

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

###  close

▸ **close**(`callback?`: undefined | function): *void*

Defined in node_modules/@types/node/http2.d.ts:274

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](../interfaces/error.md), `code?`: undefined | number): *void*

Defined in node_modules/@types/node/http2.d.ts:277

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) |
`code?` | undefined &#124; number |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:305

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "frameError", `frameType`: number, `errorCode`: number, `streamID`: number): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:307

**Parameters:**

Name | Type |
------ | ------ |
`event` | "frameError" |
`frameType` | number |
`errorCode` | number |
`streamID` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "goaway", `errorCode`: number, `lastStreamID`: number, `opaqueData`: [Buffer](buffer.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:308

**Parameters:**

Name | Type |
------ | ------ |
`event` | "goaway" |
`errorCode` | number |
`lastStreamID` | number |
`opaqueData` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "localSettings", `settings`: [Settings](../interfaces/_http2_.settings.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:309

**Parameters:**

Name | Type |
------ | ------ |
`event` | "localSettings" |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "ping"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:310

**Parameters:**

Name | Type |
------ | ------ |
`event` | "ping" |

**Returns:** *boolean*

▸ **emit**(`event`: "remoteSettings", `settings`: [Settings](../interfaces/_http2_.settings.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:311

**Parameters:**

Name | Type |
------ | ------ |
`event` | "remoteSettings" |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "timeout"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:312

**Parameters:**

Name | Type |
------ | ------ |
`event` | "timeout" |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:313

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

▸ **on**(`event`: "close", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:315

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:316

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "frameError", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:317

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number, `streamID`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |
`streamID` | number |

**Returns:** *this*

▸ **on**(`event`: "goaway", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:318

**Parameters:**

▪ **event**: *"goaway"*

▪ **listener**: *function*

▸ (`errorCode`: number, `lastStreamID`: number, `opaqueData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`errorCode` | number |
`lastStreamID` | number |
`opaqueData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "localSettings", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:319

**Parameters:**

▪ **event**: *"localSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **on**(`event`: "ping", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:320

**Parameters:**

▪ **event**: *"ping"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "remoteSettings", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:321

**Parameters:**

▪ **event**: *"remoteSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **on**(`event`: "timeout", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:322

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:323

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

▸ **once**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:325

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:326

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "frameError", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:327

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number, `streamID`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |
`streamID` | number |

**Returns:** *this*

▸ **once**(`event`: "goaway", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:328

**Parameters:**

▪ **event**: *"goaway"*

▪ **listener**: *function*

▸ (`errorCode`: number, `lastStreamID`: number, `opaqueData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`errorCode` | number |
`lastStreamID` | number |
`opaqueData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "localSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:329

**Parameters:**

▪ **event**: *"localSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **once**(`event`: "ping", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:330

**Parameters:**

▪ **event**: *"ping"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "remoteSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:331

**Parameters:**

▪ **event**: *"remoteSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **once**(`event`: "timeout", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:332

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:333

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

###  ping

▸ **ping**(`callback`: function): *boolean*

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

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:335

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:336

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "frameError", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:337

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number, `streamID`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |
`streamID` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "goaway", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:338

**Parameters:**

▪ **event**: *"goaway"*

▪ **listener**: *function*

▸ (`errorCode`: number, `lastStreamID`: number, `opaqueData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`errorCode` | number |
`lastStreamID` | number |
`opaqueData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "localSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:339

**Parameters:**

▪ **event**: *"localSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "ping", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:340

**Parameters:**

▪ **event**: *"ping"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "remoteSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:341

**Parameters:**

▪ **event**: *"remoteSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:342

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:343

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

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:345

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:346

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "frameError", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:347

**Parameters:**

▪ **event**: *"frameError"*

▪ **listener**: *function*

▸ (`frameType`: number, `errorCode`: number, `streamID`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`frameType` | number |
`errorCode` | number |
`streamID` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "goaway", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:348

**Parameters:**

▪ **event**: *"goaway"*

▪ **listener**: *function*

▸ (`errorCode`: number, `lastStreamID`: number, `opaqueData`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`errorCode` | number |
`lastStreamID` | number |
`opaqueData` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "localSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:349

**Parameters:**

▪ **event**: *"localSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "ping", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:350

**Parameters:**

▪ **event**: *"ping"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "remoteSettings", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:351

**Parameters:**

▪ **event**: *"remoteSettings"*

▪ **listener**: *function*

▸ (`settings`: [Settings](../interfaces/_http2_.settings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:352

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:353

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

Defined in node_modules/@types/node/http2.d.ts:291

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *void*

___

###  unref

▸ **unref**(): *void*

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
