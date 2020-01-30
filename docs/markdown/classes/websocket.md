[typescript](../README.md) › [Globals](../globals.md) › [WebSocket](websocket.md)

# Class: WebSocket

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **WebSocket**

## Index

### Classes

* [Server](websocket.server.md)

### Interfaces

* [ClientOptions](../interfaces/websocket.clientoptions.md)
* [PerMessageDeflateOptions](../interfaces/websocket.permessagedeflateoptions.md)
* [ServerOptions](../interfaces/websocket.serveroptions.md)

### Type aliases

* [CertMeta](websocket.md#static-certmeta)
* [Data](websocket.md#static-data)
* [VerifyClientCallbackAsync](websocket.md#static-verifyclientcallbackasync)
* [VerifyClientCallbackSync](websocket.md#static-verifyclientcallbacksync)

### Constructors

* [constructor](websocket.md#constructor)

### Properties

* [CLOSED](websocket.md#closed)
* [CLOSING](websocket.md#closing)
* [CONNECTING](websocket.md#connecting)
* [OPEN](websocket.md#open)
* [binaryType](websocket.md#binarytype)
* [bufferedAmount](websocket.md#bufferedamount)
* [bytesReceived](websocket.md#bytesreceived)
* [extensions](websocket.md#extensions)
* [onclose](websocket.md#onclose)
* [onerror](websocket.md#onerror)
* [onmessage](websocket.md#onmessage)
* [onopen](websocket.md#onopen)
* [protocol](websocket.md#protocol)
* [protocolVersion](websocket.md#protocolversion)
* [readyState](websocket.md#readystate)
* [url](websocket.md#url)
* [CLOSED](websocket.md#static-closed)
* [CLOSING](websocket.md#static-closing)
* [CONNECTING](websocket.md#static-connecting)
* [OPEN](websocket.md#static-open)
* [defaultMaxListeners](websocket.md#static-defaultmaxlisteners)

### Methods

* [addEventListener](websocket.md#addeventlistener)
* [addListener](websocket.md#addlistener)
* [close](websocket.md#close)
* [emit](websocket.md#emit)
* [eventNames](websocket.md#eventnames)
* [getMaxListeners](websocket.md#getmaxlisteners)
* [listenerCount](websocket.md#listenercount)
* [listeners](websocket.md#listeners)
* [off](websocket.md#off)
* [on](websocket.md#on)
* [once](websocket.md#once)
* [pause](websocket.md#pause)
* [ping](websocket.md#ping)
* [pong](websocket.md#pong)
* [prependListener](websocket.md#prependlistener)
* [prependOnceListener](websocket.md#prependoncelistener)
* [rawListeners](websocket.md#rawlisteners)
* [removeAllListeners](websocket.md#removealllisteners)
* [removeEventListener](websocket.md#removeeventlistener)
* [removeListener](websocket.md#removelistener)
* [resume](websocket.md#resume)
* [send](websocket.md#send)
* [setMaxListeners](websocket.md#setmaxlisteners)
* [stream](websocket.md#stream)
* [terminate](websocket.md#terminate)
* [listenerCount](websocket.md#static-listenercount)

## Type aliases

### `Static` CertMeta

Ƭ **CertMeta**: *string | string[] | [Buffer](buffer.md) | [Buffer](buffer.md)[]*

Defined in node_modules/@types/ws/index.d.ts:112

CertMeta represents the accepted types for certificate & key data.

___

### `Static` Data

Ƭ **Data**: *string | [Buffer](buffer.md) | [ArrayBuffer](../interfaces/arraybuffer.md) | [Buffer](buffer.md)[]*

Defined in node_modules/@types/ws/index.d.ts:107

Data represents the message payload received over the WebSocket.

___

### `Static` VerifyClientCallbackAsync

Ƭ **VerifyClientCallbackAsync**: *function*

Defined in node_modules/@types/ws/index.d.ts:126

VerifyClientCallbackAsync is an asynchronous callback used to inspect the
incoming message. The return value (boolean) of the function determines
whether or not to accept the handshake.

#### Type declaration:

▸ (`info`: object, `callback`: function): *void*

**Parameters:**

▪ **info**: *object*

Name | Type |
------ | ------ |
`origin` | string |
`req` | [IncomingMessage](_http_.incomingmessage.md) |
`secure` | boolean |

▪ **callback**: *function*

▸ (`res`: boolean, `code?`: undefined | number, `message?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`res` | boolean |
`code?` | undefined &#124; number |
`message?` | undefined &#124; string |

___

### `Static` VerifyClientCallbackSync

Ƭ **VerifyClientCallbackSync**: *function*

Defined in node_modules/@types/ws/index.d.ts:119

VerifyClientCallbackSync is a synchronous callback used to inspect the
incoming message. The return value (boolean) of the function determines
whether or not to accept the handshake.

#### Type declaration:

▸ (`info`: object): *boolean*

**Parameters:**

▪ **info**: *object*

Name | Type |
------ | ------ |
`origin` | string |
`req` | [IncomingMessage](_http_.incomingmessage.md) |
`secure` | boolean |

## Constructors

###  constructor

\+ **new WebSocket**(`address`: string, `options?`: [ClientOptions](../interfaces/websocket.clientoptions.md)): *[WebSocket](websocket.md)*

Defined in node_modules/@types/ws/index.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`options?` | [ClientOptions](../interfaces/websocket.clientoptions.md) |

**Returns:** *[WebSocket](websocket.md)*

\+ **new WebSocket**(`address`: string, `protocols?`: string | string[], `options?`: [ClientOptions](../interfaces/websocket.clientoptions.md)): *[WebSocket](websocket.md)*

Defined in node_modules/@types/ws/index.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`protocols?` | string &#124; string[] |
`options?` | [ClientOptions](../interfaces/websocket.clientoptions.md) |

**Returns:** *[WebSocket](websocket.md)*

## Properties

###  CLOSED

• **CLOSED**: *number*

Defined in node_modules/@types/ws/index.d.ts:34

___

###  CLOSING

• **CLOSING**: *number*

Defined in node_modules/@types/ws/index.d.ts:33

___

###  CONNECTING

• **CONNECTING**: *number*

Defined in node_modules/@types/ws/index.d.ts:31

___

###  OPEN

• **OPEN**: *number*

Defined in node_modules/@types/ws/index.d.ts:32

___

###  binaryType

• **binaryType**: *string*

Defined in node_modules/@types/ws/index.d.ts:22

___

###  bufferedAmount

• **bufferedAmount**: *number*

Defined in node_modules/@types/ws/index.d.ts:23

___

###  bytesReceived

• **bytesReceived**: *number*

Defined in node_modules/@types/ws/index.d.ts:24

___

###  extensions

• **extensions**: *object*

Defined in node_modules/@types/ws/index.d.ts:25

#### Type declaration:

___

###  onclose

• **onclose**: *function*

Defined in node_modules/@types/ws/index.d.ts:38

#### Type declaration:

▸ (`event`: object): *void*

**Parameters:**

▪ **event**: *object*

Name | Type |
------ | ------ |
`code` | number |
`reason` | string |
`target` | [WebSocket](websocket.md) |
`wasClean` | boolean |

___

###  onerror

• **onerror**: *function*

Defined in node_modules/@types/ws/index.d.ts:37

#### Type declaration:

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

___

###  onmessage

• **onmessage**: *function*

Defined in node_modules/@types/ws/index.d.ts:39

#### Type declaration:

▸ (`event`: object): *void*

**Parameters:**

▪ **event**: *object*

Name | Type |
------ | ------ |
`data` | [Data](websocket.md#static-data) |
`target` | [WebSocket](websocket.md) |
`type` | string |

___

###  onopen

• **onopen**: *function*

Defined in node_modules/@types/ws/index.d.ts:36

#### Type declaration:

▸ (`event`: object): *void*

**Parameters:**

▪ **event**: *object*

Name | Type |
------ | ------ |
`target` | [WebSocket](websocket.md) |

___

###  protocol

• **protocol**: *string*

Defined in node_modules/@types/ws/index.d.ts:26

___

###  protocolVersion

• **protocolVersion**: *number*

Defined in node_modules/@types/ws/index.d.ts:27

___

###  readyState

• **readyState**: *number*

Defined in node_modules/@types/ws/index.d.ts:28

___

###  url

• **url**: *string*

Defined in node_modules/@types/ws/index.d.ts:29

___

### `Static` CLOSED

▪ **CLOSED**: *number*

Defined in node_modules/@types/ws/index.d.ts:20

___

### `Static` CLOSING

▪ **CLOSING**: *number*

Defined in node_modules/@types/ws/index.d.ts:19

___

### `Static` CONNECTING

▪ **CONNECTING**: *number*

Defined in node_modules/@types/ws/index.d.ts:17

___

### `Static` OPEN

▪ **OPEN**: *number*

Defined in node_modules/@types/ws/index.d.ts:18

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addEventListener

▸ **addEventListener**(`method`: "message", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`method` | "message" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **addEventListener**(`method`: "close", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`method` | "close" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **addEventListener**(`method`: "error", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`method` | "error" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **addEventListener**(`method`: "open", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`method` | "open" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **addEventListener**(`method`: string, `listener?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`listener?` | undefined &#124; function |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:84

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `message`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`message` | string |

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:85

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "headers", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:86

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: object, `request`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | object |
`request` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **addListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:87

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`data`: [Data](websocket.md#static-data)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Data](websocket.md#static-data) |

**Returns:** *this*

▸ **addListener**(`event`: "open", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:88

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "ping" | "pong", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:89

**Parameters:**

▪ **event**: *"ping" | "pong"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "unexpected-response", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:90

**Parameters:**

▪ **event**: *"unexpected-response"*

▪ **listener**: *function*

▸ (`request`: [ClientRequest](_http_.clientrequest.md), `response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ClientRequest](_http_.clientrequest.md) |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:91

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

▸ **close**(`code?`: undefined | number, `data?`: undefined | string): *void*

Defined in node_modules/@types/ws/index.d.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`code?` | undefined &#124; number |
`data?` | undefined &#124; string |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/events.d.ts:32

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

Defined in node_modules/@types/ws/index.d.ts:75

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `reason`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`reason` | string |

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:76

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "headers", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:77

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: object, `request`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | object |
`request` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **on**(`event`: "message", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:78

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`data`: [Data](websocket.md#static-data)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Data](websocket.md#static-data) |

**Returns:** *this*

▸ **on**(`event`: "open", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:79

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "ping" | "pong", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:80

**Parameters:**

▪ **event**: *"ping" | "pong"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "unexpected-response", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:81

**Parameters:**

▪ **event**: *"unexpected-response"*

▪ **listener**: *function*

▸ (`request`: [ClientRequest](_http_.clientrequest.md), `response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ClientRequest](_http_.clientrequest.md) |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:82

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

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[once](nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/events.d.ts:22

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

###  pause

▸ **pause**(): *void*

Defined in node_modules/@types/ws/index.d.ts:45

**Returns:** *void*

___

###  ping

▸ **ping**(`data?`: any, `mask?`: undefined | false | true, `failSilently?`: undefined | false | true): *void*

Defined in node_modules/@types/ws/index.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |
`mask?` | undefined &#124; false &#124; true |
`failSilently?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  pong

▸ **pong**(`data?`: any, `mask?`: undefined | false | true, `failSilently?`: undefined | false | true): *void*

Defined in node_modules/@types/ws/index.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |
`mask?` | undefined &#124; false &#124; true |
`failSilently?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependListener](nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:23

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

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependOnceListener](nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:24

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

###  removeEventListener

▸ **removeEventListener**(`method`: "message", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`method` | "message" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **removeEventListener**(`method`: "close", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`method` | "close" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **removeEventListener**(`method`: "error", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`method` | "error" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **removeEventListener**(`method`: "open", `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`method` | "open" |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **removeEventListener**(`method`: string, `listener?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`listener?` | undefined &#124; function |

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:93

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `message`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`message` | string |

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:94

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **removeListener**(`event`: "headers", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:95

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: object, `request`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | object |
`request` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **removeListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:96

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`data`: [Data](websocket.md#static-data)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Data](websocket.md#static-data) |

**Returns:** *this*

▸ **removeListener**(`event`: "open", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:97

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "ping" | "pong", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:98

**Parameters:**

▪ **event**: *"ping" | "pong"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **removeListener**(`event`: "unexpected-response", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:99

**Parameters:**

▪ **event**: *"unexpected-response"*

▪ **listener**: *function*

▸ (`request`: [ClientRequest](_http_.clientrequest.md), `response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ClientRequest](_http_.clientrequest.md) |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/ws/index.d.ts:100

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

###  resume

▸ **resume**(): *void*

Defined in node_modules/@types/ws/index.d.ts:46

**Returns:** *void*

___

###  send

▸ **send**(`data`: any, `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **send**(`data`: any, `options`: object, `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:50

**Parameters:**

▪ **data**: *any*

▪ **options**: *object*

Name | Type |
------ | ------ |
`binary?` | undefined &#124; false &#124; true |
`mask?` | undefined &#124; false &#124; true |

▪`Optional`  **cb**: *undefined | function*

**Returns:** *void*

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

###  stream

▸ **stream**(`options`: object, `cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:51

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`binary?` | undefined &#124; false &#124; true |
`mask?` | undefined &#124; false &#124; true |

▪`Optional`  **cb**: *undefined | function*

**Returns:** *void*

▸ **stream**(`cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

___

###  terminate

▸ **terminate**(): *void*

Defined in node_modules/@types/ws/index.d.ts:53

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
