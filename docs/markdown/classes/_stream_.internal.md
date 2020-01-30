[typescript](../README.md) › [Globals](../globals.md) › ["stream"](../modules/_stream_.md) › [internal](_stream_.internal.md)

# Class: internal

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **internal**

## Index

### Modules

* [finished](../modules/_stream_.internal.finished.md)
* [pipeline](../modules/_stream_.internal.pipeline.md)

### Classes

* [Duplex](_stream_.internal.duplex.md)
* [PassThrough](_stream_.internal.passthrough.md)
* [Readable](_stream_.internal.readable.md)
* [Stream](_stream_.internal.stream.md)
* [Transform](_stream_.internal.transform.md)
* [Writable](_stream_.internal.writable.md)

### Interfaces

* [DuplexOptions](../interfaces/_stream_.internal.duplexoptions.md)
* [Pipe](../interfaces/_stream_.internal.pipe.md)
* [ReadableOptions](../interfaces/_stream_.internal.readableoptions.md)
* [TransformOptions](../interfaces/_stream_.internal.transformoptions.md)
* [WritableOptions](../interfaces/_stream_.internal.writableoptions.md)

### Type aliases

* [TransformCallback](_stream_.internal.md#static-transformcallback)

### Properties

* [defaultMaxListeners](_stream_.internal.md#static-defaultmaxlisteners)

### Methods

* [addListener](_stream_.internal.md#addlistener)
* [emit](_stream_.internal.md#emit)
* [eventNames](_stream_.internal.md#eventnames)
* [getMaxListeners](_stream_.internal.md#getmaxlisteners)
* [listenerCount](_stream_.internal.md#listenercount)
* [listeners](_stream_.internal.md#listeners)
* [off](_stream_.internal.md#off)
* [on](_stream_.internal.md#on)
* [once](_stream_.internal.md#once)
* [pipe](_stream_.internal.md#pipe)
* [prependListener](_stream_.internal.md#prependlistener)
* [prependOnceListener](_stream_.internal.md#prependoncelistener)
* [rawListeners](_stream_.internal.md#rawlisteners)
* [removeAllListeners](_stream_.internal.md#removealllisteners)
* [removeListener](_stream_.internal.md#removelistener)
* [setMaxListeners](_stream_.internal.md#setmaxlisteners)
* [finished](_stream_.internal.md#static-finished)
* [listenerCount](_stream_.internal.md#static-listenercount)
* [pipeline](_stream_.internal.md#static-pipeline)

## Type aliases

### `Static` TransformCallback

Ƭ **TransformCallback**: *function*

Defined in node_modules/@types/node/stream.d.ts:241

#### Type declaration:

▸ (`error?`: [Error](../interfaces/error.md) | null, `data?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |
`data?` | any |

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:20

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

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[on](nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/events.d.ts:21

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

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

Defined in node_modules/@types/node/stream.d.ts:5

**Type parameters:**

▪ **T**: *[WritableStream](../interfaces/nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined &#124; object |

**Returns:** *T*

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

### `Static` finished

▸ **finished**(`stream`: [ReadableStream](../interfaces/nodejs.readablestream.md) | [WritableStream](../interfaces/nodejs.writablestream.md) | [ReadWriteStream](../interfaces/nodejs.readwritestream.md), `callback`: function): *function*

Defined in node_modules/@types/node/stream.d.ts:261

**Parameters:**

▪ **stream**: *[ReadableStream](../interfaces/nodejs.readablestream.md) | [WritableStream](../interfaces/nodejs.writablestream.md) | [ReadWriteStream](../interfaces/nodejs.readwritestream.md)*

▪ **callback**: *function*

▸ (`err?`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |

**Returns:** *function*

▸ (): *void*

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

___

### `Static` pipeline

▸ **pipeline**<**T**>(`stream1`: [ReadableStream](../interfaces/nodejs.readablestream.md), `stream2`: T, `callback?`: undefined | function): *T*

Defined in node_modules/@types/node/stream.d.ts:266

**Type parameters:**

▪ **T**: *[WritableStream](../interfaces/nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`stream1` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`stream2` | T |
`callback?` | undefined &#124; function |

**Returns:** *T*

▸ **pipeline**<**T**>(`stream1`: [ReadableStream](../interfaces/nodejs.readablestream.md), `stream2`: [ReadWriteStream](../interfaces/nodejs.readwritestream.md), `stream3`: T, `callback?`: undefined | function): *T*

Defined in node_modules/@types/node/stream.d.ts:267

**Type parameters:**

▪ **T**: *[WritableStream](../interfaces/nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`stream1` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`stream2` | [ReadWriteStream](../interfaces/nodejs.readwritestream.md) |
`stream3` | T |
`callback?` | undefined &#124; function |

**Returns:** *T*

▸ **pipeline**<**T**>(`stream1`: [ReadableStream](../interfaces/nodejs.readablestream.md), `stream2`: [ReadWriteStream](../interfaces/nodejs.readwritestream.md), `stream3`: [ReadWriteStream](../interfaces/nodejs.readwritestream.md), `stream4`: T, `callback?`: undefined | function): *T*

Defined in node_modules/@types/node/stream.d.ts:268

**Type parameters:**

▪ **T**: *[WritableStream](../interfaces/nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`stream1` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`stream2` | [ReadWriteStream](../interfaces/nodejs.readwritestream.md) |
`stream3` | [ReadWriteStream](../interfaces/nodejs.readwritestream.md) |
`stream4` | T |
`callback?` | undefined &#124; function |

**Returns:** *T*

▸ **pipeline**<**T**>(`stream1`: [ReadableStream](../interfaces/nodejs.readablestream.md), `stream2`: [ReadWriteStream](../interfaces/nodejs.readwritestream.md), `stream3`: [ReadWriteStream](../interfaces/nodejs.readwritestream.md), `stream4`: [ReadWriteStream](../interfaces/nodejs.readwritestream.md), `stream5`: T, `callback?`: undefined | function): *T*

Defined in node_modules/@types/node/stream.d.ts:275

**Type parameters:**

▪ **T**: *[WritableStream](../interfaces/nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`stream1` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`stream2` | [ReadWriteStream](../interfaces/nodejs.readwritestream.md) |
`stream3` | [ReadWriteStream](../interfaces/nodejs.readwritestream.md) |
`stream4` | [ReadWriteStream](../interfaces/nodejs.readwritestream.md) |
`stream5` | T |
`callback?` | undefined &#124; function |

**Returns:** *T*

▸ **pipeline**(`streams`: [Array](../interfaces/regexpmatcharray.md#array)‹[ReadableStream](../interfaces/nodejs.readablestream.md) | [WritableStream](../interfaces/nodejs.writablestream.md) | [ReadWriteStream](../interfaces/nodejs.readwritestream.md)›, `callback?`: undefined | function): *[WritableStream](../interfaces/nodejs.writablestream.md)*

Defined in node_modules/@types/node/stream.d.ts:283

**Parameters:**

Name | Type |
------ | ------ |
`streams` | [Array](../interfaces/regexpmatcharray.md#array)‹[ReadableStream](../interfaces/nodejs.readablestream.md) &#124; [WritableStream](../interfaces/nodejs.writablestream.md) &#124; [ReadWriteStream](../interfaces/nodejs.readwritestream.md)› |
`callback?` | undefined &#124; function |

**Returns:** *[WritableStream](../interfaces/nodejs.writablestream.md)*

▸ **pipeline**(`stream1`: [ReadableStream](../interfaces/nodejs.readablestream.md), `stream2`: [ReadWriteStream](../interfaces/nodejs.readwritestream.md) | [WritableStream](../interfaces/nodejs.writablestream.md), ...`streams`: [Array](../interfaces/regexpmatcharray.md#array)‹[ReadWriteStream](../interfaces/nodejs.readwritestream.md) | [WritableStream](../interfaces/nodejs.writablestream.md) | function›): *[WritableStream](../interfaces/nodejs.writablestream.md)*

Defined in node_modules/@types/node/stream.d.ts:284

**Parameters:**

Name | Type |
------ | ------ |
`stream1` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`stream2` | [ReadWriteStream](../interfaces/nodejs.readwritestream.md) &#124; [WritableStream](../interfaces/nodejs.writablestream.md) |
`...streams` | [Array](../interfaces/regexpmatcharray.md#array)‹[ReadWriteStream](../interfaces/nodejs.readwritestream.md) &#124; [WritableStream](../interfaces/nodejs.writablestream.md) &#124; function› |

**Returns:** *[WritableStream](../interfaces/nodejs.writablestream.md)*
