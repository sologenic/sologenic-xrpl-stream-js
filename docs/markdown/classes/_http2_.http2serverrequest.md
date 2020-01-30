[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [Http2ServerRequest](_http2_.http2serverrequest.md)

# Class: Http2ServerRequest

## Hierarchy

  ↳ [Readable](_stream_.internal.readable.md)

  ↳ **Http2ServerRequest**

## Implements

* [ReadableStream](../interfaces/nodejs.readablestream.md)

## Index

### Constructors

* [constructor](_http2_.http2serverrequest.md#constructor)

### Properties

* [aborted](_http2_.http2serverrequest.md#aborted)
* [authority](_http2_.http2serverrequest.md#authority)
* [destroyed](_http2_.http2serverrequest.md#destroyed)
* [headers](_http2_.http2serverrequest.md#headers)
* [httpVersion](_http2_.http2serverrequest.md#httpversion)
* [method](_http2_.http2serverrequest.md#method)
* [rawHeaders](_http2_.http2serverrequest.md#rawheaders)
* [rawTrailers](_http2_.http2serverrequest.md#rawtrailers)
* [readable](_http2_.http2serverrequest.md#readable)
* [readableHighWaterMark](_http2_.http2serverrequest.md#readablehighwatermark)
* [readableLength](_http2_.http2serverrequest.md#readablelength)
* [readableObjectMode](_http2_.http2serverrequest.md#readableobjectmode)
* [scheme](_http2_.http2serverrequest.md#scheme)
* [socket](_http2_.http2serverrequest.md#socket)
* [stream](_http2_.http2serverrequest.md#stream)
* [trailers](_http2_.http2serverrequest.md#trailers)
* [url](_http2_.http2serverrequest.md#url)
* [defaultMaxListeners](_http2_.http2serverrequest.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_http2_.http2serverrequest.md#[symbol.asynciterator])
* [_destroy](_http2_.http2serverrequest.md#_destroy)
* [_read](_http2_.http2serverrequest.md#_read)
* [addListener](_http2_.http2serverrequest.md#addlistener)
* [destroy](_http2_.http2serverrequest.md#destroy)
* [emit](_http2_.http2serverrequest.md#emit)
* [eventNames](_http2_.http2serverrequest.md#eventnames)
* [getMaxListeners](_http2_.http2serverrequest.md#getmaxlisteners)
* [isPaused](_http2_.http2serverrequest.md#ispaused)
* [listenerCount](_http2_.http2serverrequest.md#listenercount)
* [listeners](_http2_.http2serverrequest.md#listeners)
* [off](_http2_.http2serverrequest.md#off)
* [on](_http2_.http2serverrequest.md#on)
* [once](_http2_.http2serverrequest.md#once)
* [pause](_http2_.http2serverrequest.md#pause)
* [pipe](_http2_.http2serverrequest.md#pipe)
* [prependListener](_http2_.http2serverrequest.md#prependlistener)
* [prependOnceListener](_http2_.http2serverrequest.md#prependoncelistener)
* [push](_http2_.http2serverrequest.md#push)
* [rawListeners](_http2_.http2serverrequest.md#rawlisteners)
* [read](_http2_.http2serverrequest.md#read)
* [removeAllListeners](_http2_.http2serverrequest.md#removealllisteners)
* [removeListener](_http2_.http2serverrequest.md#removelistener)
* [resume](_http2_.http2serverrequest.md#resume)
* [setEncoding](_http2_.http2serverrequest.md#setencoding)
* [setMaxListeners](_http2_.http2serverrequest.md#setmaxlisteners)
* [setTimeout](_http2_.http2serverrequest.md#settimeout)
* [unpipe](_http2_.http2serverrequest.md#unpipe)
* [unshift](_http2_.http2serverrequest.md#unshift)
* [wrap](_http2_.http2serverrequest.md#wrap)
* [from](_http2_.http2serverrequest.md#static-from)
* [listenerCount](_http2_.http2serverrequest.md#static-listenercount)

## Constructors

###  constructor

\+ **new Http2ServerRequest**(`stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md), `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `options`: stream.ReadableOptions, `rawHeaders`: string[]): *[Http2ServerRequest](_http2_.http2serverrequest.md)*

*Overrides [ReadStream](_fs_.readstream.md).[constructor](_fs_.readstream.md#constructor)*

Defined in node_modules/@types/node/http2.d.ts:585

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`options` | stream.ReadableOptions |
`rawHeaders` | string[] |

**Returns:** *[Http2ServerRequest](_http2_.http2serverrequest.md)*

## Properties

###  aborted

• **aborted**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:588

___

###  authority

• **authority**: *string*

Defined in node_modules/@types/node/http2.d.ts:589

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[destroyed](_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:30

___

###  headers

• **headers**: *[IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md)*

Defined in node_modules/@types/node/http2.d.ts:590

___

###  httpVersion

• **httpVersion**: *string*

Defined in node_modules/@types/node/http2.d.ts:591

___

###  method

• **method**: *string*

Defined in node_modules/@types/node/http2.d.ts:592

___

###  rawHeaders

• **rawHeaders**: *string[]*

Defined in node_modules/@types/node/http2.d.ts:593

___

###  rawTrailers

• **rawTrailers**: *string[]*

Defined in node_modules/@types/node/http2.d.ts:594

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

###  scheme

• **scheme**: *string*

Defined in node_modules/@types/node/http2.d.ts:595

___

###  socket

• **socket**: *[Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)*

Defined in node_modules/@types/node/http2.d.ts:597

___

###  stream

• **stream**: *[ServerHttp2Stream](_http2_.serverhttp2stream.md)*

Defined in node_modules/@types/node/http2.d.ts:598

___

###  trailers

• **trailers**: *[IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md)*

Defined in node_modules/@types/node/http2.d.ts:599

___

###  url

• **url**: *string*

Defined in node_modules/@types/node/http2.d.ts:600

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

▸ **addListener**(`event`: "aborted", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:604

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (`hadError`: boolean, `code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`hadError` | boolean |
`code` | number |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:605

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:606

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:607

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:608

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:609

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:610

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

▸ **emit**(`event`: "aborted", `hadError`: boolean, `code`: number): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:612

**Parameters:**

Name | Type |
------ | ------ |
`event` | "aborted" |
`hadError` | boolean |
`code` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: [Buffer](buffer.md) | string): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:615

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:616

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:618

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

▸ **on**(`event`: "aborted", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:620

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (`hadError`: boolean, `code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`hadError` | boolean |
`code` | number |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:621

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:622

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:623

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:624

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:625

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/http2.d.ts:626

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

▸ **once**(`event`: "aborted", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:628

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (`hadError`: boolean, `code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`hadError` | boolean |
`code` | number |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:629

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:630

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:631

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:632

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:633

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/http2.d.ts:634

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

▸ **prependListener**(`event`: "aborted", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:636

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (`hadError`: boolean, `code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`hadError` | boolean |
`code` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:637

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:638

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:639

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:640

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:641

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:642

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

▸ **prependOnceListener**(`event`: "aborted", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:644

**Parameters:**

▪ **event**: *"aborted"*

▪ **listener**: *function*

▸ (`hadError`: boolean, `code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`hadError` | boolean |
`code` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:645

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:646

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](buffer.md) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](buffer.md) &#124; string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:647

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:648

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:649

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:650

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

▸ **read**(`size?`: undefined | number): *[Buffer](buffer.md) | string | null*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Overrides [Hash](_crypto_.hash.md).[read](_crypto_.hash.md#read)*

Defined in node_modules/@types/node/http2.d.ts:602

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *[Buffer](buffer.md) | string | null*

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

###  setTimeout

▸ **setTimeout**(`msecs`: number, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/http2.d.ts:596

**Parameters:**

Name | Type |
------ | ------ |
`msecs` | number |
`callback?` | undefined &#124; function |

**Returns:** *void*

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
