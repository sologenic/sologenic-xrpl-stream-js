[typescript](../README.md) › [Globals](../globals.md) › ["worker_threads"](../modules/_worker_threads_.md) › [Worker](_worker_threads_.worker.md)

# Class: Worker

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Worker**

## Index

### Constructors

* [constructor](_worker_threads_.worker.md#constructor)

### Properties

* [stderr](_worker_threads_.worker.md#stderr)
* [stdin](_worker_threads_.worker.md#stdin)
* [stdout](_worker_threads_.worker.md#stdout)
* [threadId](_worker_threads_.worker.md#threadid)
* [defaultMaxListeners](_worker_threads_.worker.md#static-defaultmaxlisteners)

### Methods

* [addListener](_worker_threads_.worker.md#addlistener)
* [emit](_worker_threads_.worker.md#emit)
* [eventNames](_worker_threads_.worker.md#eventnames)
* [getMaxListeners](_worker_threads_.worker.md#getmaxlisteners)
* [listenerCount](_worker_threads_.worker.md#listenercount)
* [listeners](_worker_threads_.worker.md#listeners)
* [moveMessagePortToContext](_worker_threads_.worker.md#movemessageporttocontext)
* [off](_worker_threads_.worker.md#off)
* [on](_worker_threads_.worker.md#on)
* [once](_worker_threads_.worker.md#once)
* [postMessage](_worker_threads_.worker.md#postmessage)
* [prependListener](_worker_threads_.worker.md#prependlistener)
* [prependOnceListener](_worker_threads_.worker.md#prependoncelistener)
* [rawListeners](_worker_threads_.worker.md#rawlisteners)
* [receiveMessageOnPort](_worker_threads_.worker.md#receivemessageonport)
* [ref](_worker_threads_.worker.md#ref)
* [removeAllListeners](_worker_threads_.worker.md#removealllisteners)
* [removeListener](_worker_threads_.worker.md#removelistener)
* [setMaxListeners](_worker_threads_.worker.md#setmaxlisteners)
* [terminate](_worker_threads_.worker.md#terminate)
* [unref](_worker_threads_.worker.md#unref)
* [listenerCount](_worker_threads_.worker.md#static-listenercount)

## Constructors

###  constructor

\+ **new Worker**(`filename`: string, `options?`: [WorkerOptions](../interfaces/_worker_threads_.workeroptions.md)): *[Worker](_worker_threads_.worker.md)*

Defined in node_modules/@types/node/worker_threads.d.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |
`options?` | [WorkerOptions](../interfaces/_worker_threads_.workeroptions.md) |

**Returns:** *[Worker](_worker_threads_.worker.md)*

## Properties

###  stderr

• **stderr**: *[Readable](_stream_.internal.readable.md)*

Defined in node_modules/@types/node/worker_threads.d.ts:68

___

###  stdin

• **stdin**: *[Writable](_stream_.internal.writable.md) | null*

Defined in node_modules/@types/node/worker_threads.d.ts:66

___

###  stdout

• **stdout**: *[Readable](_stream_.internal.readable.md)*

Defined in node_modules/@types/node/worker_threads.d.ts:67

___

###  threadId

• **threadId**: *number*

Defined in node_modules/@types/node/worker_threads.d.ts:69

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:105

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:106

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`exitCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exitCode` | number |

**Returns:** *this*

▸ **addListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:107

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

▸ **addListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:108

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:109

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

###  emit

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/worker_threads.d.ts:111

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "exit", `exitCode`: number): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/worker_threads.d.ts:112

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`exitCode` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `value`: any): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/worker_threads.d.ts:113

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`value` | any |

**Returns:** *boolean*

▸ **emit**(`event`: "online"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/worker_threads.d.ts:114

**Parameters:**

Name | Type |
------ | ------ |
`event` | "online" |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/worker_threads.d.ts:115

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

###  moveMessagePortToContext

▸ **moveMessagePortToContext**(`port`: [MessagePort](_worker_threads_.messageport.md), `context`: [Context](../interfaces/_vm_.context.md)): *[MessagePort](_worker_threads_.messageport.md)*

Defined in node_modules/@types/node/worker_threads.d.ts:95

Transfer a `MessagePort` to a different `vm` Context. The original `port`
object will be rendered unusable, and the returned `MessagePort` instance will
take its place.

The returned `MessagePort` will be an object in the target context, and will
inherit from its global `Object` class. Objects passed to the
`port.onmessage()` listener will also be created in the target context
and inherit from its global `Object` class.

However, the created `MessagePort` will no longer inherit from
`EventEmitter`, and only `port.onmessage()` can be used to receive
events using it.

**Parameters:**

Name | Type |
------ | ------ |
`port` | [MessagePort](_worker_threads_.messageport.md) |
`context` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *[MessagePort](_worker_threads_.messageport.md)*

___

###  off

▸ **off**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

Defined in node_modules/@types/node/worker_threads.d.ts:147

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **off**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

Defined in node_modules/@types/node/worker_threads.d.ts:148

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`exitCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exitCode` | number |

**Returns:** *this*

▸ **off**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

Defined in node_modules/@types/node/worker_threads.d.ts:149

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

▸ **off**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

Defined in node_modules/@types/node/worker_threads.d.ts:150

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

Defined in node_modules/@types/node/worker_threads.d.ts:151

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

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/worker_threads.d.ts:117

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "exit", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/worker_threads.d.ts:118

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`exitCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exitCode` | number |

**Returns:** *this*

▸ **on**(`event`: "message", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/worker_threads.d.ts:119

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

▸ **on**(`event`: "online", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/worker_threads.d.ts:120

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/worker_threads.d.ts:121

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

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/worker_threads.d.ts:123

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/worker_threads.d.ts:124

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`exitCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exitCode` | number |

**Returns:** *this*

▸ **once**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/worker_threads.d.ts:125

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

▸ **once**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/worker_threads.d.ts:126

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/worker_threads.d.ts:127

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

###  postMessage

▸ **postMessage**(`value`: any, `transferList?`: [Array](../interfaces/regexpmatcharray.md#array)‹[ArrayBuffer](../interfaces/arraybuffer.md) | [MessagePort](_worker_threads_.messageport.md)›): *void*

Defined in node_modules/@types/node/worker_threads.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`transferList?` | [Array](../interfaces/regexpmatcharray.md#array)‹[ArrayBuffer](../interfaces/arraybuffer.md) &#124; [MessagePort](_worker_threads_.messageport.md)› |

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:129

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:130

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`exitCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exitCode` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:131

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

▸ **prependListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:132

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:133

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

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:135

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:136

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`exitCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exitCode` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:137

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:138

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:139

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

###  receiveMessageOnPort

▸ **receiveMessageOnPort**(`port`: [MessagePort](_worker_threads_.messageport.md)): *object | undefined*

Defined in node_modules/@types/node/worker_threads.d.ts:103

Receive a single message from a given `MessagePort`. If no message is available,
`undefined` is returned, otherwise an object with a single `message` property
that contains the message payload, corresponding to the oldest message in the
`MessagePort`’s queue.

**Parameters:**

Name | Type |
------ | ------ |
`port` | [MessagePort](_worker_threads_.messageport.md) |

**Returns:** *object | undefined*

___

###  ref

▸ **ref**(): *void*

Defined in node_modules/@types/node/worker_threads.d.ts:74

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

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:141

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **removeListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:142

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`exitCode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exitCode` | number |

**Returns:** *this*

▸ **removeListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:143

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

▸ **removeListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:144

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/worker_threads.d.ts:145

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

###  terminate

▸ **terminate**(): *[Promise](../interfaces/promise.md)‹number›*

Defined in node_modules/@types/node/worker_threads.d.ts:80

Stop all JavaScript execution in the worker thread as soon as possible.
Returns a Promise for the exit code that is fulfilled when the `exit` event is emitted.

**Returns:** *[Promise](../interfaces/promise.md)‹number›*

___

###  unref

▸ **unref**(): *void*

Defined in node_modules/@types/node/worker_threads.d.ts:75

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
