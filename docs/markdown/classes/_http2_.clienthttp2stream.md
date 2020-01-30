[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [ClientHttp2Stream](_http2_.clienthttp2stream.md)

# Class: ClientHttp2Stream

## Hierarchy

  ↳ [Http2Stream](_http2_.http2stream.md)

  ↳ **ClientHttp2Stream**

## Implements

* [ReadableStream](../interfaces/nodejs.readablestream.md)
* [Writable](_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_http2_.clienthttp2stream.md#private-constructor)

### Properties

* [aborted](_http2_.clienthttp2stream.md#aborted)
* [bufferSize](_http2_.clienthttp2stream.md#buffersize)
* [closed](_http2_.clienthttp2stream.md#closed)
* [destroyed](_http2_.clienthttp2stream.md#destroyed)
* [endAfterHeaders](_http2_.clienthttp2stream.md#endafterheaders)
* [id](_http2_.clienthttp2stream.md#optional-id)
* [pending](_http2_.clienthttp2stream.md#pending)
* [readable](_http2_.clienthttp2stream.md#readable)
* [readableHighWaterMark](_http2_.clienthttp2stream.md#readablehighwatermark)
* [readableLength](_http2_.clienthttp2stream.md#readablelength)
* [readableObjectMode](_http2_.clienthttp2stream.md#readableobjectmode)
* [rstCode](_http2_.clienthttp2stream.md#rstcode)
* [sentHeaders](_http2_.clienthttp2stream.md#sentheaders)
* [sentInfoHeaders](_http2_.clienthttp2stream.md#optional-sentinfoheaders)
* [sentTrailers](_http2_.clienthttp2stream.md#optional-senttrailers)
* [session](_http2_.clienthttp2stream.md#session)
* [state](_http2_.clienthttp2stream.md#state)
* [writable](_http2_.clienthttp2stream.md#writable)
* [writableFinished](_http2_.clienthttp2stream.md#writablefinished)
* [writableHighWaterMark](_http2_.clienthttp2stream.md#writablehighwatermark)
* [writableLength](_http2_.clienthttp2stream.md#writablelength)
* [writableObjectMode](_http2_.clienthttp2stream.md#writableobjectmode)
* [defaultMaxListeners](_http2_.clienthttp2stream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_http2_.clienthttp2stream.md#[symbol.asynciterator])
* [_destroy](_http2_.clienthttp2stream.md#_destroy)
* [_final](_http2_.clienthttp2stream.md#_final)
* [_read](_http2_.clienthttp2stream.md#_read)
* [_write](_http2_.clienthttp2stream.md#_write)
* [_writev](_http2_.clienthttp2stream.md#optional-_writev)
* [addListener](_http2_.clienthttp2stream.md#addlistener)
* [close](_http2_.clienthttp2stream.md#close)
* [cork](_http2_.clienthttp2stream.md#cork)
* [destroy](_http2_.clienthttp2stream.md#destroy)
* [emit](_http2_.clienthttp2stream.md#emit)
* [end](_http2_.clienthttp2stream.md#end)
* [eventNames](_http2_.clienthttp2stream.md#eventnames)
* [getMaxListeners](_http2_.clienthttp2stream.md#getmaxlisteners)
* [isPaused](_http2_.clienthttp2stream.md#ispaused)
* [listenerCount](_http2_.clienthttp2stream.md#listenercount)
* [listeners](_http2_.clienthttp2stream.md#listeners)
* [off](_http2_.clienthttp2stream.md#off)
* [on](_http2_.clienthttp2stream.md#on)
* [once](_http2_.clienthttp2stream.md#once)
* [pause](_http2_.clienthttp2stream.md#pause)
* [pipe](_http2_.clienthttp2stream.md#pipe)
* [prependListener](_http2_.clienthttp2stream.md#prependlistener)
* [prependOnceListener](_http2_.clienthttp2stream.md#prependoncelistener)
* [priority](_http2_.clienthttp2stream.md#priority)
* [push](_http2_.clienthttp2stream.md#push)
* [rawListeners](_http2_.clienthttp2stream.md#rawlisteners)
* [read](_http2_.clienthttp2stream.md#read)
* [removeAllListeners](_http2_.clienthttp2stream.md#removealllisteners)
* [removeListener](_http2_.clienthttp2stream.md#removelistener)
* [resume](_http2_.clienthttp2stream.md#resume)
* [sendTrailers](_http2_.clienthttp2stream.md#sendtrailers)
* [setDefaultEncoding](_http2_.clienthttp2stream.md#setdefaultencoding)
* [setEncoding](_http2_.clienthttp2stream.md#setencoding)
* [setMaxListeners](_http2_.clienthttp2stream.md#setmaxlisteners)
* [setTimeout](_http2_.clienthttp2stream.md#settimeout)
* [uncork](_http2_.clienthttp2stream.md#uncork)
* [unpipe](_http2_.clienthttp2stream.md#unpipe)
* [unshift](_http2_.clienthttp2stream.md#unshift)
* [wrap](_http2_.clienthttp2stream.md#wrap)
* [write](_http2_.clienthttp2stream.md#write)
* [from](_http2_.clienthttp2stream.md#static-from)
* [listenerCount](_http2_.clienthttp2stream.md#static-listenercount)

## Constructors

### `Private` constructor

\+ **new ClientHttp2Stream**(): *[ClientHttp2Stream](_http2_.clienthttp2stream.md)*

*Overrides [Http2Stream](_http2_.http2stream.md).[constructor](_http2_.http2stream.md#protected-constructor)*

Defined in node_modules/@types/node/http2.d.ts:185

**Returns:** *[ClientHttp2Stream](_http2_.clienthttp2stream.md)*

## Properties

###  aborted

• **aborted**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[aborted](_http2_.http2stream.md#aborted)*

Defined in node_modules/@types/node/http2.d.ts:65

___

###  bufferSize

• **bufferSize**: *number*

*Inherited from [Http2Stream](_http2_.http2stream.md).[bufferSize](_http2_.http2stream.md#buffersize)*

Defined in node_modules/@types/node/http2.d.ts:66

___

###  closed

• **closed**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[closed](_http2_.http2stream.md#closed)*

Defined in node_modules/@types/node/http2.d.ts:67

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[destroyed](_http2_.http2stream.md#destroyed)*

*Overrides [Hash](_crypto_.hash.md).[destroyed](_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/http2.d.ts:68

___

###  endAfterHeaders

• **endAfterHeaders**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[endAfterHeaders](_http2_.http2stream.md#endafterheaders)*

Defined in node_modules/@types/node/http2.d.ts:73

Set the true if the END_STREAM flag was set in the request or response HEADERS frame received,
indicating that no additional data should be received and the readable side of the Http2Stream will be closed.

___

### `Optional` id

• **id**? : *undefined | number*

*Inherited from [Http2Stream](_http2_.http2stream.md).[id](_http2_.http2stream.md#optional-id)*

Defined in node_modules/@types/node/http2.d.ts:74

___

###  pending

• **pending**: *boolean*

*Inherited from [Http2Stream](_http2_.http2stream.md).[pending](_http2_.http2stream.md#pending)*

Defined in node_modules/@types/node/http2.d.ts:75

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

###  rstCode

• **rstCode**: *number*

*Inherited from [Http2Stream](_http2_.http2stream.md).[rstCode](_http2_.http2stream.md#rstcode)*

Defined in node_modules/@types/node/http2.d.ts:76

___

###  sentHeaders

• **sentHeaders**: *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sentHeaders](_http2_.http2stream.md#sentheaders)*

Defined in node_modules/@types/node/http2.d.ts:77

___

### `Optional` sentInfoHeaders

• **sentInfoHeaders**? : *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)[]*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sentInfoHeaders](_http2_.http2stream.md#optional-sentinfoheaders)*

Defined in node_modules/@types/node/http2.d.ts:78

___

### `Optional` sentTrailers

• **sentTrailers**? : *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sentTrailers](_http2_.http2stream.md#optional-senttrailers)*

Defined in node_modules/@types/node/http2.d.ts:79

___

###  session

• **session**: *[Http2Session](_http2_.http2session.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[session](_http2_.http2stream.md#session)*

Defined in node_modules/@types/node/http2.d.ts:80

___

###  state

• **state**: *[StreamState](../interfaces/_http2_.streamstate.md)*

*Inherited from [Http2Stream](_http2_.http2stream.md).[state](_http2_.http2stream.md#state)*

Defined in node_modules/@types/node/http2.d.ts:81

___

###  writable

• **writable**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[writable](_crypto_.hash.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:221

___

###  writableFinished

• **writableFinished**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[writableFinished](_crypto_.hash.md#writablefinished)*

Defined in node_modules/@types/node/stream.d.ts:222

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [Hash](_crypto_.hash.md).[writableHighWaterMark](_crypto_.hash.md#writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:223

___

###  writableLength

• **writableLength**: *number*

*Inherited from [Hash](_crypto_.hash.md).[writableLength](_crypto_.hash.md#writablelength)*

Defined in node_modules/@types/node/stream.d.ts:224

___

###  writableObjectMode

• **writableObjectMode**: *boolean*

*Inherited from [Hash](_crypto_.hash.md).[writableObjectMode](_crypto_.hash.md#writableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:225

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

*Inherited from [Hash](_crypto_.hash.md).[_destroy](_crypto_.hash.md#_destroy)*

*Overrides [ReadStream](_fs_.readstream.md).[_destroy](_fs_.readstream.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:229

**Parameters:**

▪ **error**: *[Error](../interfaces/error.md) | null*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from [Hash](_crypto_.hash.md).[_final](_crypto_.hash.md#_final)*

Defined in node_modules/@types/node/stream.d.ts:230

**Parameters:**

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

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [Hash](_crypto_.hash.md).[_write](_crypto_.hash.md#_write)*

Defined in node_modules/@types/node/stream.d.ts:227

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

*Inherited from [Hash](_crypto_.hash.md).[_writev](_crypto_.hash.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:228

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

▸ **addListener**(`event`: "continue", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:188

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *object*

**Returns:** *this*

▸ **addListener**(`event`: "headers", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:189

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **addListener**(`event`: "push", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:190

**Parameters:**

▪ **event**: *"push"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **addListener**(`event`: "response", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:191

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[addListener](_http2_.http2stream.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:192

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

▸ **close**(`code?`: undefined | number, `callback?`: undefined | function): *void*

*Inherited from [Http2Stream](_http2_.http2stream.md).[close](_http2_.http2stream.md#close)*

Defined in node_modules/@types/node/http2.d.ts:83

**Parameters:**

Name | Type |
------ | ------ |
`code?` | undefined &#124; number |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  cork

▸ **cork**(): *void*

*Inherited from [Hash](_crypto_.hash.md).[cork](_crypto_.hash.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:237

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

▸ **emit**(`event`: "continue"): *boolean*

*Overrides [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:194

**Parameters:**

Name | Type |
------ | ------ |
`event` | "continue" |

**Returns:** *boolean*

▸ **emit**(`event`: "headers", `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *boolean*

*Overrides [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:195

**Parameters:**

Name | Type |
------ | ------ |
`event` | "headers" |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "push", `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *boolean*

*Overrides [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:196

**Parameters:**

Name | Type |
------ | ------ |
`event` | "push" |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "response", `headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *boolean*

*Overrides [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:197

**Parameters:**

Name | Type |
------ | ------ |
`event` | "response" |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Overrides [Http2Stream](_http2_.http2stream.md).[emit](_http2_.http2stream.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:198

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

*Inherited from [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

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

▸ **on**(`event`: "continue", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

Defined in node_modules/@types/node/http2.d.ts:200

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *object*

**Returns:** *this*

▸ **on**(`event`: "headers", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

Defined in node_modules/@types/node/http2.d.ts:201

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **on**(`event`: "push", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

Defined in node_modules/@types/node/http2.d.ts:202

**Parameters:**

▪ **event**: *"push"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **on**(`event`: "response", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

Defined in node_modules/@types/node/http2.d.ts:203

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[on](_http2_.http2stream.md#on)*

Defined in node_modules/@types/node/http2.d.ts:204

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

▸ **once**(`event`: "continue", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

Defined in node_modules/@types/node/http2.d.ts:206

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *object*

**Returns:** *this*

▸ **once**(`event`: "headers", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

Defined in node_modules/@types/node/http2.d.ts:207

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **once**(`event`: "push", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

Defined in node_modules/@types/node/http2.d.ts:208

**Parameters:**

▪ **event**: *"push"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **once**(`event`: "response", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

Defined in node_modules/@types/node/http2.d.ts:209

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[once](_http2_.http2stream.md#once)*

Defined in node_modules/@types/node/http2.d.ts:210

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

▸ **prependListener**(`event`: "continue", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:212

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *object*

**Returns:** *this*

▸ **prependListener**(`event`: "headers", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:213

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "push", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:214

**Parameters:**

▪ **event**: *"push"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **prependListener**(`event`: "response", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:215

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependListener](_http2_.http2stream.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:216

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

▸ **prependOnceListener**(`event`: "continue", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:218

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *object*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "headers", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:219

**Parameters:**

▪ **event**: *"headers"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "push", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:220

**Parameters:**

▪ **event**: *"push"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) |
`flags` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "response", `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:221

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`headers`: [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md), `flags`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md) & [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md) |
`flags` | number |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Http2Stream](_http2_.http2stream.md).[prependOnceListener](_http2_.http2stream.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:222

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

###  priority

▸ **priority**(`options`: [StreamPriorityOptions](../interfaces/_http2_.streampriorityoptions.md)): *void*

*Inherited from [Http2Stream](_http2_.http2stream.md).[priority](_http2_.http2stream.md#priority)*

Defined in node_modules/@types/node/http2.d.ts:84

**Parameters:**

Name | Type |
------ | ------ |
`options` | [StreamPriorityOptions](../interfaces/_http2_.streampriorityoptions.md) |

**Returns:** *void*

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

###  sendTrailers

▸ **sendTrailers**(`headers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)): *void*

*Inherited from [Http2Stream](_http2_.http2stream.md).[sendTrailers](_http2_.http2stream.md#sendtrailers)*

Defined in node_modules/@types/node/http2.d.ts:86

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |

**Returns:** *void*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [Hash](_crypto_.hash.md).[setDefaultEncoding](_crypto_.hash.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:233

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

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

*Inherited from [Http2Stream](_http2_.http2stream.md).[setTimeout](_http2_.http2stream.md#settimeout)*

Defined in node_modules/@types/node/http2.d.ts:85

**Parameters:**

Name | Type |
------ | ------ |
`msecs` | number |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [Hash](_crypto_.hash.md).[uncork](_crypto_.hash.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:238

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

###  write

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[write](_crypto_.hash.md#write)*

Defined in node_modules/@types/node/stream.d.ts:231

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

*Inherited from [Hash](_crypto_.hash.md).[write](_crypto_.hash.md#write)*

Defined in node_modules/@types/node/stream.d.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

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
