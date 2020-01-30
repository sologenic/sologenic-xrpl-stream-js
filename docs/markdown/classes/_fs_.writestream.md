[typescript](../README.md) › [Globals](../globals.md) › ["fs"](../modules/_fs_.md) › [WriteStream](_fs_.writestream.md)

# Class: WriteStream

## Hierarchy

  ↳ [Writable](_stream_.internal.writable.md)

  ↳ **WriteStream**

## Implements

* [WritableStream](../interfaces/nodejs.writablestream.md)

## Index

### Constructors

* [constructor](_fs_.writestream.md#constructor)

### Properties

* [bytesWritten](_fs_.writestream.md#byteswritten)
* [destroyed](_fs_.writestream.md#destroyed)
* [path](_fs_.writestream.md#path)
* [writable](_fs_.writestream.md#writable)
* [writableFinished](_fs_.writestream.md#writablefinished)
* [writableHighWaterMark](_fs_.writestream.md#writablehighwatermark)
* [writableLength](_fs_.writestream.md#writablelength)
* [writableObjectMode](_fs_.writestream.md#writableobjectmode)
* [defaultMaxListeners](_fs_.writestream.md#static-defaultmaxlisteners)

### Methods

* [_destroy](_fs_.writestream.md#_destroy)
* [_final](_fs_.writestream.md#_final)
* [_write](_fs_.writestream.md#_write)
* [_writev](_fs_.writestream.md#optional-_writev)
* [addListener](_fs_.writestream.md#addlistener)
* [close](_fs_.writestream.md#close)
* [cork](_fs_.writestream.md#cork)
* [destroy](_fs_.writestream.md#destroy)
* [emit](_fs_.writestream.md#emit)
* [end](_fs_.writestream.md#end)
* [eventNames](_fs_.writestream.md#eventnames)
* [getMaxListeners](_fs_.writestream.md#getmaxlisteners)
* [listenerCount](_fs_.writestream.md#listenercount)
* [listeners](_fs_.writestream.md#listeners)
* [off](_fs_.writestream.md#off)
* [on](_fs_.writestream.md#on)
* [once](_fs_.writestream.md#once)
* [pipe](_fs_.writestream.md#pipe)
* [prependListener](_fs_.writestream.md#prependlistener)
* [prependOnceListener](_fs_.writestream.md#prependoncelistener)
* [rawListeners](_fs_.writestream.md#rawlisteners)
* [removeAllListeners](_fs_.writestream.md#removealllisteners)
* [removeListener](_fs_.writestream.md#removelistener)
* [setDefaultEncoding](_fs_.writestream.md#setdefaultencoding)
* [setMaxListeners](_fs_.writestream.md#setmaxlisteners)
* [uncork](_fs_.writestream.md#uncork)
* [write](_fs_.writestream.md#write)
* [listenerCount](_fs_.writestream.md#static-listenercount)

## Constructors

###  constructor

\+ **new WriteStream**(`opts?`: [WritableOptions](../interfaces/_stream_.internal.writableoptions.md)): *[WriteStream](_fs_.writestream.md)*

*Inherited from [WriteStream](_fs_.writestream.md).[constructor](_fs_.writestream.md#constructor)*

Defined in node_modules/@types/node/stream.d.ts:125

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [WritableOptions](../interfaces/_stream_.internal.writableoptions.md) |

**Returns:** *[WriteStream](_fs_.writestream.md)*

## Properties

###  bytesWritten

• **bytesWritten**: *number*

Defined in node_modules/@types/node/fs.d.ts:121

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Signer](_crypto_.signer.md).[destroyed](_crypto_.signer.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:125

___

###  path

• **path**: *string | [Buffer](buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:122

___

###  writable

• **writable**: *boolean*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[writable](../interfaces/nodejs.writablestream.md#writable)*

*Inherited from [Signer](_crypto_.signer.md).[writable](_crypto_.signer.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:120

___

###  writableFinished

• **writableFinished**: *boolean*

*Inherited from [Signer](_crypto_.signer.md).[writableFinished](_crypto_.signer.md#writablefinished)*

Defined in node_modules/@types/node/stream.d.ts:121

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [Signer](_crypto_.signer.md).[writableHighWaterMark](_crypto_.signer.md#writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:122

___

###  writableLength

• **writableLength**: *number*

*Inherited from [Signer](_crypto_.signer.md).[writableLength](_crypto_.signer.md#writablelength)*

Defined in node_modules/@types/node/stream.d.ts:123

___

###  writableObjectMode

• **writableObjectMode**: *boolean*

*Inherited from [Signer](_crypto_.signer.md).[writableObjectMode](_crypto_.signer.md#writableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:124

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  _destroy

▸ **_destroy**(`error`: [Error](../interfaces/error.md) | null, `callback`: function): *void*

*Inherited from [Signer](_crypto_.signer.md).[_destroy](_crypto_.signer.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:129

**Parameters:**

▪ **error**: *[Error](../interfaces/error.md) | null*

▪ **callback**: *function*

▸ (`error?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from [Signer](_crypto_.signer.md).[_final](_crypto_.signer.md#_final)*

Defined in node_modules/@types/node/stream.d.ts:130

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [Signer](_crypto_.signer.md).[_write](_crypto_.signer.md#_write)*

Defined in node_modules/@types/node/stream.d.ts:127

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: [Array](../interfaces/regexpmatcharray.md#array)‹object›, `callback`: function): *void*

*Inherited from [Signer](_crypto_.signer.md).[_writev](_crypto_.signer.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:128

**Parameters:**

▪ **chunks**: *[Array](../interfaces/regexpmatcharray.md#array)‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:129

events.EventEmitter
  1. open
  2. close

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "open", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:130

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (`fd`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:131

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  close

▸ **close**(): *void*

Defined in node_modules/@types/node/fs.d.ts:120

**Returns:** *void*

___

###  cork

▸ **cork**(): *void*

*Inherited from [Signer](_crypto_.signer.md).[cork](_crypto_.signer.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:137

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](../interfaces/error.md)): *void*

*Inherited from [Signer](_crypto_.signer.md).[destroy](_crypto_.signer.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:139

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[emit](_crypto_.signer.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:159

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[emit](_crypto_.signer.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:160

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[emit](_crypto_.signer.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:161

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[emit](_crypto_.signer.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:162

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: [Readable](_stream_.internal.readable.md)): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[emit](_crypto_.signer.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:163

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: [Readable](_stream_.internal.readable.md)): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[emit](_crypto_.signer.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:164

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unpipe" |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [Signer](_crypto_.signer.md).[emit](_crypto_.signer.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:165

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [Signer](_crypto_.signer.md).[end](_crypto_.signer.md#end)*

Defined in node_modules/@types/node/stream.d.ts:134

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

*Inherited from [Signer](_crypto_.signer.md).[end](_crypto_.signer.md#end)*

Defined in node_modules/@types/node/stream.d.ts:135

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding`: string, `cb?`: undefined | function): *void*

*Inherited from [Signer](_crypto_.signer.md).[end](_crypto_.signer.md#end)*

Defined in node_modules/@types/node/stream.d.ts:136

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`cb?` | undefined &#124; function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

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

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/fs.d.ts:133

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "open", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/fs.d.ts:134

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (`fd`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/fs.d.ts:135

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/fs.d.ts:137

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "open", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/fs.d.ts:138

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (`fd`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/fs.d.ts:139

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [Hash](_crypto_.hash.md).[pipe](_crypto_.hash.md#pipe)*

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

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:141

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "open", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:142

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (`fd`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:143

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:145

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "open", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:146

**Parameters:**

▪ **event**: *"open"*

▪ **listener**: *function*

▸ (`fd`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:147

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[removeListener](_crypto_.signer.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:199

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[removeListener](_crypto_.signer.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:200

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[removeListener](_crypto_.signer.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:201

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **removeListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[removeListener](_crypto_.signer.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:202

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[removeListener](_crypto_.signer.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:203

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **removeListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[removeListener](_crypto_.signer.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:204

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[removeListener](_crypto_.signer.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:205

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

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [Signer](_crypto_.signer.md).[setDefaultEncoding](_crypto_.signer.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:133

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [Signer](_crypto_.signer.md).[uncork](_crypto_.signer.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:138

**Returns:** *void*

___

###  write

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[write](_crypto_.signer.md#write)*

Defined in node_modules/@types/node/stream.d.ts:131

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding`: string, `cb?`: undefined | function): *boolean*

*Inherited from [Signer](_crypto_.signer.md).[write](_crypto_.signer.md#write)*

Defined in node_modules/@types/node/stream.d.ts:132

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`cb?` | undefined &#124; function |

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
