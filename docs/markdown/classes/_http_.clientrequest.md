[typescript](../README.md) › [Globals](../globals.md) › ["http"](../modules/_http_.md) › [ClientRequest](_http_.clientrequest.md)

# Class: ClientRequest

## Hierarchy

  ↳ [OutgoingMessage](_http_.outgoingmessage.md)

  ↳ **ClientRequest**

## Implements

* [WritableStream](../interfaces/nodejs.writablestream.md)

## Index

### Constructors

* [constructor](_http_.clientrequest.md#constructor)

### Properties

* [aborted](_http_.clientrequest.md#aborted)
* [chunkedEncoding](_http_.clientrequest.md#chunkedencoding)
* [connection](_http_.clientrequest.md#connection)
* [destroyed](_http_.clientrequest.md#destroyed)
* [finished](_http_.clientrequest.md#finished)
* [headersSent](_http_.clientrequest.md#headerssent)
* [path](_http_.clientrequest.md#path)
* [sendDate](_http_.clientrequest.md#senddate)
* [shouldKeepAlive](_http_.clientrequest.md#shouldkeepalive)
* [socket](_http_.clientrequest.md#socket)
* [upgrading](_http_.clientrequest.md#upgrading)
* [useChunkedEncodingByDefault](_http_.clientrequest.md#usechunkedencodingbydefault)
* [writable](_http_.clientrequest.md#writable)
* [writableFinished](_http_.clientrequest.md#writablefinished)
* [writableHighWaterMark](_http_.clientrequest.md#writablehighwatermark)
* [writableLength](_http_.clientrequest.md#writablelength)
* [writableObjectMode](_http_.clientrequest.md#writableobjectmode)
* [defaultMaxListeners](_http_.clientrequest.md#static-defaultmaxlisteners)

### Methods

* [_destroy](_http_.clientrequest.md#_destroy)
* [_final](_http_.clientrequest.md#_final)
* [_write](_http_.clientrequest.md#_write)
* [_writev](_http_.clientrequest.md#optional-_writev)
* [abort](_http_.clientrequest.md#abort)
* [addListener](_http_.clientrequest.md#addlistener)
* [addTrailers](_http_.clientrequest.md#addtrailers)
* [cork](_http_.clientrequest.md#cork)
* [destroy](_http_.clientrequest.md#destroy)
* [emit](_http_.clientrequest.md#emit)
* [end](_http_.clientrequest.md#end)
* [eventNames](_http_.clientrequest.md#eventnames)
* [flushHeaders](_http_.clientrequest.md#flushheaders)
* [getHeader](_http_.clientrequest.md#getheader)
* [getHeaderNames](_http_.clientrequest.md#getheadernames)
* [getHeaders](_http_.clientrequest.md#getheaders)
* [getMaxListeners](_http_.clientrequest.md#getmaxlisteners)
* [hasHeader](_http_.clientrequest.md#hasheader)
* [listenerCount](_http_.clientrequest.md#listenercount)
* [listeners](_http_.clientrequest.md#listeners)
* [off](_http_.clientrequest.md#off)
* [on](_http_.clientrequest.md#on)
* [onSocket](_http_.clientrequest.md#onsocket)
* [once](_http_.clientrequest.md#once)
* [pipe](_http_.clientrequest.md#pipe)
* [prependListener](_http_.clientrequest.md#prependlistener)
* [prependOnceListener](_http_.clientrequest.md#prependoncelistener)
* [rawListeners](_http_.clientrequest.md#rawlisteners)
* [removeAllListeners](_http_.clientrequest.md#removealllisteners)
* [removeHeader](_http_.clientrequest.md#removeheader)
* [removeListener](_http_.clientrequest.md#removelistener)
* [setDefaultEncoding](_http_.clientrequest.md#setdefaultencoding)
* [setHeader](_http_.clientrequest.md#setheader)
* [setMaxListeners](_http_.clientrequest.md#setmaxlisteners)
* [setNoDelay](_http_.clientrequest.md#setnodelay)
* [setSocketKeepAlive](_http_.clientrequest.md#setsocketkeepalive)
* [setTimeout](_http_.clientrequest.md#settimeout)
* [uncork](_http_.clientrequest.md#uncork)
* [write](_http_.clientrequest.md#write)
* [listenerCount](_http_.clientrequest.md#static-listenercount)

## Constructors

###  constructor

\+ **new ClientRequest**(`url`: string | [URL](_url_.url.md) | [ClientRequestArgs](../interfaces/_http_.clientrequestargs.md), `cb?`: undefined | function): *[ClientRequest](_http_.clientrequest.md)*

*Overrides [OutgoingMessage](_http_.outgoingmessage.md).[constructor](_http_.outgoingmessage.md#constructor)*

Defined in node_modules/@types/node/http.d.ts:176

**Parameters:**

Name | Type |
------ | ------ |
`url` | string &#124; [URL](_url_.url.md) &#124; [ClientRequestArgs](../interfaces/_http_.clientrequestargs.md) |
`cb?` | undefined &#124; function |

**Returns:** *[ClientRequest](_http_.clientrequest.md)*

## Properties

###  aborted

• **aborted**: *number*

Defined in node_modules/@types/node/http.d.ts:176

___

###  chunkedEncoding

• **chunkedEncoding**: *boolean*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[chunkedEncoding](_http_.outgoingmessage.md#chunkedencoding)*

Defined in node_modules/@types/node/http.d.ts:124

___

###  connection

• **connection**: *[Socket](_net_.socket.md)*

*Overrides [OutgoingMessage](_http_.outgoingmessage.md).[connection](_http_.outgoingmessage.md#connection)*

Defined in node_modules/@types/node/http.d.ts:174

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Signer](_crypto_.signer.md).[destroyed](_crypto_.signer.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:125

___

###  finished

• **finished**: *boolean*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[finished](_http_.outgoingmessage.md#finished)*

Defined in node_modules/@types/node/http.d.ts:128

___

###  headersSent

• **headersSent**: *boolean*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[headersSent](_http_.outgoingmessage.md#headerssent)*

Defined in node_modules/@types/node/http.d.ts:129

___

###  path

• **path**: *string*

Defined in node_modules/@types/node/http.d.ts:180

___

###  sendDate

• **sendDate**: *boolean*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[sendDate](_http_.outgoingmessage.md#senddate)*

Defined in node_modules/@types/node/http.d.ts:127

___

###  shouldKeepAlive

• **shouldKeepAlive**: *boolean*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[shouldKeepAlive](_http_.outgoingmessage.md#shouldkeepalive)*

Defined in node_modules/@types/node/http.d.ts:125

___

###  socket

• **socket**: *[Socket](_net_.socket.md)*

Defined in node_modules/@types/node/http.d.ts:175

___

###  upgrading

• **upgrading**: *boolean*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[upgrading](_http_.outgoingmessage.md#upgrading)*

Defined in node_modules/@types/node/http.d.ts:123

___

###  useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: *boolean*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[useChunkedEncodingByDefault](_http_.outgoingmessage.md#usechunkedencodingbydefault)*

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

###  abort

▸ **abort**(): *void*

Defined in node_modules/@types/node/http.d.ts:181

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "abort", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:187

**Parameters:**

▪ **event**: *"abort"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "connect", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:188

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "continue", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:189

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "information", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:190

**Parameters:**

▪ **event**: *"information"*

▪ **listener**: *function*

▸ (`info`: [InformationEvent](../interfaces/_http_.informationevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [InformationEvent](../interfaces/_http_.informationevent.md) |

**Returns:** *this*

▸ **addListener**(`event`: "response", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:191

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **addListener**(`event`: "socket", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:192

**Parameters:**

▪ **event**: *"socket"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **addListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:193

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "upgrade", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:194

**Parameters:**

▪ **event**: *"upgrade"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:195

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:196

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:197

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

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:198

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:199

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **addListener**(`event`: "unpipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:200

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[addListener](_crypto_.signer.md#addlistener)*

Defined in node_modules/@types/node/http.d.ts:201

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

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[addTrailers](_http_.outgoingmessage.md#addtrailers)*

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

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[flushHeaders](_http_.outgoingmessage.md#flushheaders)*

Defined in node_modules/@types/node/http.d.ts:142

**Returns:** *void*

___

###  getHeader

▸ **getHeader**(`name`: string): *number | string | string[] | undefined*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[getHeader](_http_.outgoingmessage.md#getheader)*

Defined in node_modules/@types/node/http.d.ts:136

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *number | string | string[] | undefined*

___

###  getHeaderNames

▸ **getHeaderNames**(): *string[]*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[getHeaderNames](_http_.outgoingmessage.md#getheadernames)*

Defined in node_modules/@types/node/http.d.ts:138

**Returns:** *string[]*

___

###  getHeaders

▸ **getHeaders**(): *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[getHeaders](_http_.outgoingmessage.md#getheaders)*

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

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[hasHeader](_http_.outgoingmessage.md#hasheader)*

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

▸ **on**(`event`: "abort", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:203

**Parameters:**

▪ **event**: *"abort"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "connect", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:204

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "continue", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:205

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "information", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:206

**Parameters:**

▪ **event**: *"information"*

▪ **listener**: *function*

▸ (`info`: [InformationEvent](../interfaces/_http_.informationevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [InformationEvent](../interfaces/_http_.informationevent.md) |

**Returns:** *this*

▸ **on**(`event`: "response", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:207

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **on**(`event`: "socket", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:208

**Parameters:**

▪ **event**: *"socket"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **on**(`event`: "timeout", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:209

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "upgrade", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:210

**Parameters:**

▪ **event**: *"upgrade"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:211

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:212

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:213

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

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:214

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:215

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **on**(`event`: "unpipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:216

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[on](_crypto_.signer.md#on)*

Defined in node_modules/@types/node/http.d.ts:217

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

###  onSocket

▸ **onSocket**(`socket`: [Socket](_net_.socket.md)): *void*

Defined in node_modules/@types/node/http.d.ts:182

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *void*

___

###  once

▸ **once**(`event`: "abort", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:219

**Parameters:**

▪ **event**: *"abort"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "connect", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:220

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "continue", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:221

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "information", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:222

**Parameters:**

▪ **event**: *"information"*

▪ **listener**: *function*

▸ (`info`: [InformationEvent](../interfaces/_http_.informationevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [InformationEvent](../interfaces/_http_.informationevent.md) |

**Returns:** *this*

▸ **once**(`event`: "response", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:223

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **once**(`event`: "socket", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:224

**Parameters:**

▪ **event**: *"socket"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **once**(`event`: "timeout", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:225

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "upgrade", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:226

**Parameters:**

▪ **event**: *"upgrade"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:227

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:228

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:229

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

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:230

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:231

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **once**(`event`: "unpipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:232

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[once](_crypto_.signer.md#once)*

Defined in node_modules/@types/node/http.d.ts:233

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

▸ **prependListener**(`event`: "abort", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:235

**Parameters:**

▪ **event**: *"abort"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "connect", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:236

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "continue", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:237

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "information", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:238

**Parameters:**

▪ **event**: *"information"*

▪ **listener**: *function*

▸ (`info`: [InformationEvent](../interfaces/_http_.informationevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [InformationEvent](../interfaces/_http_.informationevent.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "response", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:239

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "socket", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:240

**Parameters:**

▪ **event**: *"socket"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:241

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "upgrade", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:242

**Parameters:**

▪ **event**: *"upgrade"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:243

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:244

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:245

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

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:246

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:247

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependListener**(`event`: "unpipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:248

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependListener](_crypto_.signer.md#prependlistener)*

Defined in node_modules/@types/node/http.d.ts:249

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

▸ **prependOnceListener**(`event`: "abort", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:251

**Parameters:**

▪ **event**: *"abort"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "connect", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:252

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "continue", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:253

**Parameters:**

▪ **event**: *"continue"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "information", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:254

**Parameters:**

▪ **event**: *"information"*

▪ **listener**: *function*

▸ (`info`: [InformationEvent](../interfaces/_http_.informationevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [InformationEvent](../interfaces/_http_.informationevent.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "response", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:255

**Parameters:**

▪ **event**: *"response"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "socket", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:256

**Parameters:**

▪ **event**: *"socket"*

▪ **listener**: *function*

▸ (`socket`: [Socket](_net_.socket.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:257

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "upgrade", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:258

**Parameters:**

▪ **event**: *"upgrade"*

▪ **listener**: *function*

▸ (`response`: [IncomingMessage](_http_.incomingmessage.md), `socket`: [Socket](_net_.socket.md), `head`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [IncomingMessage](_http_.incomingmessage.md) |
`socket` | [Socket](_net_.socket.md) |
`head` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:259

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:260

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:261

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

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:262

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:263

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unpipe", `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:264

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: stream.Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | stream.Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Overrides [Signer](_crypto_.signer.md).[prependOnceListener](_crypto_.signer.md#prependoncelistener)*

Defined in node_modules/@types/node/http.d.ts:265

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

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[removeHeader](_http_.outgoingmessage.md#removeheader)*

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

*Inherited from [OutgoingMessage](_http_.outgoingmessage.md).[setHeader](_http_.outgoingmessage.md#setheader)*

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

###  setNoDelay

▸ **setNoDelay**(`noDelay?`: undefined | false | true): *void*

Defined in node_modules/@types/node/http.d.ts:184

**Parameters:**

Name | Type |
------ | ------ |
`noDelay?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  setSocketKeepAlive

▸ **setSocketKeepAlive**(`enable?`: undefined | false | true, `initialDelay?`: undefined | number): *void*

Defined in node_modules/@types/node/http.d.ts:185

**Parameters:**

Name | Type |
------ | ------ |
`enable?` | undefined &#124; false &#124; true |
`initialDelay?` | undefined &#124; number |

**Returns:** *void*

___

###  setTimeout

▸ **setTimeout**(`timeout`: number, `callback?`: undefined | function): *this*

*Overrides [OutgoingMessage](_http_.outgoingmessage.md).[setTimeout](_http_.outgoingmessage.md#settimeout)*

Defined in node_modules/@types/node/http.d.ts:183

**Parameters:**

Name | Type |
------ | ------ |
`timeout` | number |
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
