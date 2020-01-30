[typescript](../README.md) › [Globals](../globals.md) › ["fs"](../modules/_fs_.md) › [ReadStream](_fs_.readstream.md)

# Class: ReadStream

## Hierarchy

  ↳ [Readable](_stream_.internal.readable.md)

  ↳ **ReadStream**

## Implements

* [ReadableStream](../interfaces/nodejs.readablestream.md)

## Index

### Constructors

* [constructor](_fs_.readstream.md#constructor)

### Properties

* [bytesRead](_fs_.readstream.md#bytesread)
* [destroyed](_fs_.readstream.md#destroyed)
* [path](_fs_.readstream.md#path)
* [readable](_fs_.readstream.md#readable)
* [readableHighWaterMark](_fs_.readstream.md#readablehighwatermark)
* [readableLength](_fs_.readstream.md#readablelength)
* [readableObjectMode](_fs_.readstream.md#readableobjectmode)
* [defaultMaxListeners](_fs_.readstream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_fs_.readstream.md#[symbol.asynciterator])
* [_destroy](_fs_.readstream.md#_destroy)
* [_read](_fs_.readstream.md#_read)
* [addListener](_fs_.readstream.md#addlistener)
* [close](_fs_.readstream.md#close)
* [destroy](_fs_.readstream.md#destroy)
* [emit](_fs_.readstream.md#emit)
* [eventNames](_fs_.readstream.md#eventnames)
* [getMaxListeners](_fs_.readstream.md#getmaxlisteners)
* [isPaused](_fs_.readstream.md#ispaused)
* [listenerCount](_fs_.readstream.md#listenercount)
* [listeners](_fs_.readstream.md#listeners)
* [off](_fs_.readstream.md#off)
* [on](_fs_.readstream.md#on)
* [once](_fs_.readstream.md#once)
* [pause](_fs_.readstream.md#pause)
* [pipe](_fs_.readstream.md#pipe)
* [prependListener](_fs_.readstream.md#prependlistener)
* [prependOnceListener](_fs_.readstream.md#prependoncelistener)
* [push](_fs_.readstream.md#push)
* [rawListeners](_fs_.readstream.md#rawlisteners)
* [read](_fs_.readstream.md#read)
* [removeAllListeners](_fs_.readstream.md#removealllisteners)
* [removeListener](_fs_.readstream.md#removelistener)
* [resume](_fs_.readstream.md#resume)
* [setEncoding](_fs_.readstream.md#setencoding)
* [setMaxListeners](_fs_.readstream.md#setmaxlisteners)
* [unpipe](_fs_.readstream.md#unpipe)
* [unshift](_fs_.readstream.md#unshift)
* [wrap](_fs_.readstream.md#wrap)
* [from](_fs_.readstream.md#static-from)
* [listenerCount](_fs_.readstream.md#static-listenercount)

## Constructors

###  constructor

\+ **new ReadStream**(`opts?`: [ReadableOptions](../interfaces/_stream_.internal.readableoptions.md)): *[ReadStream](_fs_.readstream.md)*

*Inherited from [ReadStream](_fs_.readstream.md).[constructor](_fs_.readstream.md#constructor)*

Defined in node_modules/@types/node/stream.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ReadableOptions](../interfaces/_stream_.internal.readableoptions.md) |

**Returns:** *[ReadStream](_fs_.readstream.md)*

## Properties

###  bytesRead

• **bytesRead**: *number*

Defined in node_modules/@types/node/fs.d.ts:90

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[destroyed](_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:30

___

###  path

• **path**: *string | [Buffer](buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:91

___

###  readable

• **readable**: *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md).[readable](../interfaces/nodejs.readablestream.md#readable)*

*Inherited from [Hash](_crypto_.hash.md).[readable](_crypto_.hash.md#readable)*

Defined in node_modules/@types/node/stream.d.ts:26

___

###  readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [Hash](_crypto_.hash.md).[readableHighWaterMark](_crypto_.hash.md#readablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:27

___

###  readableLength

• **readableLength**: *number*

*Inherited from [Hash](_crypto_.hash.md).[readableLength](_crypto_.hash.md#readablelength)*

Defined in node_modules/@types/node/stream.d.ts:28

___

###  readableObjectMode

• **readableObjectMode**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[readableObjectMode](_crypto_.hash.md#readableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:29

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹any›*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[[Symbol.asyncIterator]](_crypto_.hash.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/stream.d.ts:103

**Returns:** *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹any›*

___

###  _destroy

▸ **_destroy**(`error`: [Error](../interfaces/error.md) | null, `callback`: function): *void*

*Inherited from [ReadStream](_fs_.readstream.md).[_destroy](_fs_.readstream.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:42

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

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [Hash](_crypto_.hash.md).[_read](_crypto_.hash.md#_read)*

Defined in node_modules/@types/node/stream.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:98

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

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:99

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

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:100

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  close

▸ **close**(): *void*

Defined in node_modules/@types/node/fs.d.ts:89

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](../interfaces/error.md)): *void*

*Inherited from [Hash](_crypto_.hash.md).[destroy](_crypto_.hash.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: any): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | any |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[isPaused](_crypto_.hash.md#ispaused)*

Defined in node_modules/@types/node/stream.d.ts:37

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

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

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

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

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/fs.d.ts:102

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

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/fs.d.ts:103

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

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/fs.d.ts:104

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/fs.d.ts:106

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

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/fs.d.ts:107

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

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/fs.d.ts:108

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[pause](_crypto_.hash.md#pause)*

Defined in node_modules/@types/node/stream.d.ts:35

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

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:110

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

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:111

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

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:112

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:114

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

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:115

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

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:116

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[push](_crypto_.hash.md#push)*

Defined in node_modules/@types/node/stream.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  read

▸ **read**(`size?`: undefined | number): *any*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[read](_crypto_.hash.md#read)*

Defined in node_modules/@types/node/stream.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

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

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:96

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:97

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:98

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:99

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:100

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](_crypto_.hash.md).[removeListener](_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:101

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

▸ **resume**(): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[resume](_crypto_.hash.md#resume)*

Defined in node_modules/@types/node/stream.d.ts:36

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[setEncoding](_crypto_.hash.md#setencoding)*

Defined in node_modules/@types/node/stream.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  unpipe

▸ **unpipe**(`destination?`: [WritableStream](../interfaces/nodejs.writablestream.md)): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[unpipe](_crypto_.hash.md#unpipe)*

Defined in node_modules/@types/node/stream.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | [WritableStream](../interfaces/nodejs.writablestream.md) |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: any, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *void*

*Inherited from [Hash](_crypto_.hash.md).[unshift](_crypto_.hash.md#unshift)*

Defined in node_modules/@types/node/stream.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: [ReadableStream](../interfaces/nodejs.readablestream.md)): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Hash](_crypto_.hash.md).[wrap](_crypto_.hash.md#wrap)*

Defined in node_modules/@types/node/stream.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | [ReadableStream](../interfaces/nodejs.readablestream.md) |

**Returns:** *this*

___

### `Static` from

▸ **from**(`iterable`: [Iterable](../interfaces/iterable.md)‹any› | [AsyncIterable](../interfaces/asynciterable.md)‹any›, `options?`: [ReadableOptions](../interfaces/_stream_.internal.readableoptions.md)): *[Readable](_stream_.internal.readable.md)*

*Inherited from [Hash](_crypto_.hash.md).[from](_crypto_.hash.md#static-from)*

Defined in node_modules/@types/node/stream.d.ts:24

A utility method for creating Readable Streams out of iterators.

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | [Iterable](../interfaces/iterable.md)‹any› &#124; [AsyncIterable](../interfaces/asynciterable.md)‹any› |
`options?` | [ReadableOptions](../interfaces/_stream_.internal.readableoptions.md) |

**Returns:** *[Readable](_stream_.internal.readable.md)*

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
