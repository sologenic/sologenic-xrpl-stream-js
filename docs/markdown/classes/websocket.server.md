[typescript](../README.md) › [Globals](../globals.md) › [WebSocket](websocket.md) › [Server](websocket.server.md)

# Class: Server

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Server**

## Index

### Constructors

* [constructor](websocket.server.md#constructor)

### Properties

* [clients](websocket.server.md#clients)
* [options](websocket.server.md#options)
* [path](websocket.server.md#path)
* [defaultMaxListeners](websocket.server.md#static-defaultmaxlisteners)

### Methods

* [addListener](websocket.server.md#addlistener)
* [close](websocket.server.md#close)
* [emit](websocket.server.md#emit)
* [eventNames](websocket.server.md#eventnames)
* [getMaxListeners](websocket.server.md#getmaxlisteners)
* [handleUpgrade](websocket.server.md#handleupgrade)
* [listenerCount](websocket.server.md#listenercount)
* [listeners](websocket.server.md#listeners)
* [off](websocket.server.md#off)
* [on](websocket.server.md#on)
* [once](websocket.server.md#once)
* [prependListener](websocket.server.md#prependlistener)
* [prependOnceListener](websocket.server.md#prependoncelistener)
* [rawListeners](websocket.server.md#rawlisteners)
* [removeAllListeners](websocket.server.md#removealllisteners)
* [removeListener](websocket.server.md#removelistener)
* [setMaxListeners](websocket.server.md#setmaxlisteners)
* [shouldHandle](websocket.server.md#shouldhandle)
* [listenerCount](websocket.server.md#static-listenercount)

## Constructors

###  constructor

\+ **new Server**(`options?`: [ServerOptions](../interfaces/websocket.serveroptions.md), `callback?`: undefined | function): *[Server](websocket.server.md)*

Defined in node_modules/@types/ws/index.d.ts:179

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ServerOptions](../interfaces/websocket.serveroptions.md) |
`callback?` | undefined &#124; function |

**Returns:** *[Server](websocket.server.md)*

## Properties

###  clients

• **clients**: *[Set](../interfaces/set.md)‹[WebSocket](websocket.md)›*

Defined in node_modules/@types/ws/index.d.ts:179

___

###  options

• **options**: *[ServerOptions](../interfaces/websocket.serveroptions.md)*

Defined in node_modules/@types/ws/index.d.ts:177

___

###  path

• **path**: *string*

Defined in node_modules/@types/ws/index.d.ts:178

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: "connection", `cb`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:195

**Parameters:**

▪ **event**: *"connection"*

▪ **cb**: *function*

▸ (`client`: [WebSocket](websocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [WebSocket](websocket.md) |

**Returns:** *this*

▸ **addListener**(`event`: "error", `cb`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:196

**Parameters:**

▪ **event**: *"error"*

▪ **cb**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "headers", `cb`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:197

**Parameters:**

▪ **event**: *"headers"*

▪ **cb**: *function*

▸ (`headers`: string[], `request`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | string[] |
`request` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **addListener**(`event`: "listening", `cb`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:198

**Parameters:**

▪ **event**: *"listening"*

▪ **cb**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/ws/index.d.ts:199

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

▸ **close**(`cb?`: undefined | function): *void*

Defined in node_modules/@types/ws/index.d.ts:183

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

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

###  handleUpgrade

▸ **handleUpgrade**(`request`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `upgradeHead`: [Buffer](buffer.md), `callback`: function): *void*

Defined in node_modules/@types/ws/index.d.ts:184

**Parameters:**

▪ **request**: *[IncomingMessage](_http_.incomingmessage.md)*

▪ **socket**: *[Socket](_net_.socket.md)*

▪ **upgradeHead**: *[Buffer](buffer.md)*

▪ **callback**: *function*

▸ (`client`: [WebSocket](websocket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [WebSocket](websocket.md) |

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

▸ **on**(`event`: "connection", `cb`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:189

**Parameters:**

▪ **event**: *"connection"*

▪ **cb**: *function*

▸ (`socket`: [WebSocket](websocket.md), `request`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [WebSocket](websocket.md) |
`request` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **on**(`event`: "error", `cb`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:190

**Parameters:**

▪ **event**: *"error"*

▪ **cb**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "headers", `cb`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:191

**Parameters:**

▪ **event**: *"headers"*

▪ **cb**: *function*

▸ (`headers`: string[], `request`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | string[] |
`request` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **on**(`event`: "listening", `cb`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:192

**Parameters:**

▪ **event**: *"listening"*

▪ **cb**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/ws/index.d.ts:193

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

###  shouldHandle

▸ **shouldHandle**(`request`: [IncomingMessage](_http_.incomingmessage.md)): *boolean*

Defined in node_modules/@types/ws/index.d.ts:186

**Parameters:**

Name | Type |
------ | ------ |
`request` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *boolean*

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
