[typescript](../README.md) › [Globals](../globals.md) › ["http"](../modules/_http_.md) › [OutgoingMessage](_http_.outgoingmessage.md)

# Class: OutgoingMessage

## Hierarchy

  ↳ [Writable](_stream_.internal.writable.md)

  ↳ **OutgoingMessage**

  ↳ [ServerResponse](_http_.serverresponse.md)

  ↳ [ClientRequest](_http_.clientrequest.md)

## Implements

* [WritableStream](../interfaces/nodejs.writablestream.md)

## Index

### Constructors

* [constructor](_http_.outgoingmessage.md#constructor)

### Properties

* [chunkedEncoding](_http_.outgoingmessage.md#chunkedencoding)
* [connection](_http_.outgoingmessage.md#connection)
* [destroyed](_http_.outgoingmessage.md#destroyed)
* [finished](_http_.outgoingmessage.md#finished)
* [headersSent](_http_.outgoingmessage.md#headerssent)
* [sendDate](_http_.outgoingmessage.md#senddate)
* [shouldKeepAlive](_http_.outgoingmessage.md#shouldkeepalive)
* [upgrading](_http_.outgoingmessage.md#upgrading)
* [useChunkedEncodingByDefault](_http_.outgoingmessage.md#usechunkedencodingbydefault)
* [writable](_http_.outgoingmessage.md#writable)
* [writableFinished](_http_.outgoingmessage.md#writablefinished)
* [writableHighWaterMark](_http_.outgoingmessage.md#writablehighwatermark)
* [writableLength](_http_.outgoingmessage.md#writablelength)
* [writableObjectMode](_http_.outgoingmessage.md#writableobjectmode)
* [defaultMaxListeners](_http_.outgoingmessage.md#static-defaultmaxlisteners)

### Methods

* [_destroy](_http_.outgoingmessage.md#_destroy)
* [_final](_http_.outgoingmessage.md#_final)
* [_write](_http_.outgoingmessage.md#_write)
* [_writev](_http_.outgoingmessage.md#optional-_writev)
* [addListener](_http_.outgoingmessage.md#addlistener)
* [addTrailers](_http_.outgoingmessage.md#addtrailers)
* [cork](_http_.outgoingmessage.md#cork)
* [destroy](_http_.outgoingmessage.md#destroy)
* [emit](_http_.outgoingmessage.md#emit)
* [end](_http_.outgoingmessage.md#end)
* [eventNames](_http_.outgoingmessage.md#eventnames)
* [flushHeaders](_http_.outgoingmessage.md#flushheaders)
* [getHeader](_http_.outgoingmessage.md#getheader)
* [getHeaderNames](_http_.outgoingmessage.md#getheadernames)
* [getHeaders](_http_.outgoingmessage.md#getheaders)
* [getMaxListeners](_http_.outgoingmessage.md#getmaxlisteners)
* [hasHeader](_http_.outgoingmessage.md#hasheader)
* [listenerCount](_http_.outgoingmessage.md#listenercount)
* [listeners](_http_.outgoingmessage.md#listeners)
* [off](_http_.outgoingmessage.md#off)
* [on](_http_.outgoingmessage.md#on)
* [once](_http_.outgoingmessage.md#once)
* [pipe](_http_.outgoingmessage.md#pipe)
* [prependListener](_http_.outgoingmessage.md#prependlistener)
* [prependOnceListener](_http_.outgoingmessage.md#prependoncelistener)
* [rawListeners](_http_.outgoingmessage.md#rawlisteners)
* [removeAllListeners](_http_.outgoingmessage.md#removealllisteners)
* [removeHeader](_http_.outgoingmessage.md#removeheader)
* [removeListener](_http_.outgoingmessage.md#removelistener)
* [setDefaultEncoding](_http_.outgoingmessage.md#setdefaultencoding)
* [setHeader](_http_.outgoingmessage.md#setheader)
* [setMaxListeners](_http_.outgoingmessage.md#setmaxlisteners)
* [setTimeout](_http_.outgoingmessage.md#settimeout)
* [uncork](_http_.outgoingmessage.md#uncork)
* [write](_http_.outgoingmessage.md#write)
* [listenerCount](_http_.outgoingmessage.md#static-listenercount)

## Constructors

###  constructor

\+ **new OutgoingMessage**(): *[OutgoingMessage](_http_.outgoingmessage.md)*

*Overrides [WriteStream](_fs_.writestream.md).[constructor](_fs_.writestream.md#constructor)*

Defined in node_modules/@types/node/http.d.ts:130

**Returns:** *[OutgoingMessage](_http_.outgoingmessage.md)*

## Properties

###  chunkedEncoding

• **chunkedEncoding**: *boolean*

Defined in node_modules/@types/node/http.d.ts:124

___

###  connection

• **connection**: *[Socket](_net_.socket.md)*

Defined in node_modules/@types/node/http.d.ts:130

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Signer](_crypto_.signer.md).[destroyed](_crypto_.signer.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:125

___

###  finished

• **finished**: *boolean*

Defined in node_modules/@types/node/http.d.ts:128

___

###  headersSent

• **headersSent**: *boolean*

Defined in node_modules/@types/node/http.d.ts:129

___

###  sendDate

• **sendDate**: *boolean*

Defined in node_modules/@types/node/http.d.ts:127

___

###  shouldKeepAlive

• **shouldKeepAlive**: *boolean*

Defined in node_modules/@types/node/http.d.ts:125

___

###  upgrading

• **upgrading**: *boolean*

Defined in node_modules/@types/node/http.d.ts:123

___

###  useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: *boolean*

Defined in node_modules/@types/node/http.d.ts:126

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

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:151

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:152

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:153

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:154

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:155

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **addListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:156

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:157

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

###  addTrailers

▸ **addTrailers**(`headers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) | [Array](../interfaces/regexpmatcharray.md#array)‹[string, string]›): *void*

Defined in node_modules/@types/node/http.d.ts:141

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) &#124; [Array](../interfaces/regexpmatcharray.md#array)‹[string, string]› |

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

###  flushHeaders

▸ **flushHeaders**(): *void*

Defined in node_modules/@types/node/http.d.ts:142

**Returns:** *void*

___

###  getHeader

▸ **getHeader**(`name`: string): *number | string | string[] | undefined*

Defined in node_modules/@types/node/http.d.ts:136

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *number | string | string[] | undefined*

___

###  getHeaderNames

▸ **getHeaderNames**(): *string[]*

Defined in node_modules/@types/node/http.d.ts:138

**Returns:** *string[]*

___

###  getHeaders

▸ **getHeaders**(): *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

Defined in node_modules/@types/node/http.d.ts:137

**Returns:** *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  hasHeader

▸ **hasHeader**(`name`: string): *boolean*

Defined in node_modules/@types/node/http.d.ts:139

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

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

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:167

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:168

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:169

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "finish", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:170

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:171

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **on**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:172

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:173

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

*Inherited from [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:175

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:176

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:177

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "finish", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:178

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:179

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **once**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:180

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:181

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

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:183

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:184

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:185

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:186

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:187

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:188

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:189

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

*Inherited from [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:191

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:192

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:193

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:194

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:195

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:196

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: [Readable](_stream_.internal.readable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:197

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

###  removeHeader

▸ **removeHeader**(`name`: string): *void*

Defined in node_modules/@types/node/http.d.ts:140

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

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

###  setHeader

▸ **setHeader**(`name`: string, `value`: number | string | string[]): *void*

Defined in node_modules/@types/node/http.d.ts:135

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | number &#124; string &#124; string[] |

**Returns:** *void*

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

###  setTimeout

▸ **setTimeout**(`msecs`: number, `callback?`: undefined | function): *this*

Defined in node_modules/@types/node/http.d.ts:134

**Parameters:**

Name | Type |
------ | ------ |
`msecs` | number |
`callback?` | undefined &#124; function |

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
