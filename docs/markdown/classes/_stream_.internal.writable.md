[typescript](../README.md) › [Globals](../globals.md) › ["stream"](../modules/_stream_.md) › [internal](_stream_.internal.md) › [Writable](_stream_.internal.writable.md)

# Class: Writable

## Hierarchy

  ↳ [Stream](_stream_.internal.stream.md)

  ↳ **Writable**

  ↳ [Signer](_crypto_.signer.md)

  ↳ [Verify](_crypto_.verify.md)

  ↳ [WriteStream](_fs_.writestream.md)

  ↳ [OutgoingMessage](_http_.outgoingmessage.md)

## Implements

* [WritableStream](../interfaces/nodejs.writablestream.md)

## Implemented by

* [BrotliCompress](../interfaces/_zlib_.brotlicompress.md)
* [BrotliDecompress](../interfaces/_zlib_.brotlidecompress.md)
* [Cipher](_crypto_.cipher.md)
* [CipherCCM](../interfaces/_crypto_.cipherccm.md)
* [CipherGCM](../interfaces/_crypto_.ciphergcm.md)
* [ClientHttp2Stream](_http2_.clienthttp2stream.md)
* [Decipher](_crypto_.decipher.md)
* [DecipherCCM](../interfaces/_crypto_.decipherccm.md)
* [DecipherGCM](../interfaces/_crypto_.deciphergcm.md)
* [Deflate](../interfaces/_zlib_.deflate.md)
* [DeflateRaw](../interfaces/_zlib_.deflateraw.md)
* [Duplex](_stream_.internal.duplex.md)
* [Gunzip](../interfaces/_zlib_.gunzip.md)
* [Gzip](../interfaces/_zlib_.gzip.md)
* [Hash](_crypto_.hash.md)
* [Hmac](_crypto_.hmac.md)
* [Http2Stream](_http2_.http2stream.md)
* [Inflate](../interfaces/_zlib_.inflate.md)
* [InflateRaw](../interfaces/_zlib_.inflateraw.md)
* [PassThrough](_stream_.internal.passthrough.md)
* [ReadStream](../interfaces/_process_.__global.nodejs.readstream.md)
* [ReadStream](_tty_.readstream.md)
* [ServerHttp2Stream](_http2_.serverhttp2stream.md)
* [Socket](_net_.socket.md)
* [TLSSocket](_tls_.tlssocket.md)
* [Transform](_stream_.internal.transform.md)
* [Unzip](../interfaces/_zlib_.unzip.md)
* [WriteStream](../interfaces/_process_.__global.nodejs.writestream.md)
* [WriteStream](_tty_.writestream.md)

## Index

### Constructors

* [constructor](_stream_.internal.writable.md#constructor)

### Properties

* [destroyed](_stream_.internal.writable.md#destroyed)
* [writable](_stream_.internal.writable.md#writable)
* [writableFinished](_stream_.internal.writable.md#writablefinished)
* [writableHighWaterMark](_stream_.internal.writable.md#writablehighwatermark)
* [writableLength](_stream_.internal.writable.md#writablelength)
* [writableObjectMode](_stream_.internal.writable.md#writableobjectmode)
* [defaultMaxListeners](_stream_.internal.writable.md#static-defaultmaxlisteners)

### Methods

* [_destroy](_stream_.internal.writable.md#_destroy)
* [_final](_stream_.internal.writable.md#_final)
* [_write](_stream_.internal.writable.md#_write)
* [_writev](_stream_.internal.writable.md#optional-_writev)
* [addListener](_stream_.internal.writable.md#addlistener)
* [cork](_stream_.internal.writable.md#cork)
* [destroy](_stream_.internal.writable.md#destroy)
* [emit](_stream_.internal.writable.md#emit)
* [end](_stream_.internal.writable.md#end)
* [eventNames](_stream_.internal.writable.md#eventnames)
* [getMaxListeners](_stream_.internal.writable.md#getmaxlisteners)
* [listenerCount](_stream_.internal.writable.md#listenercount)
* [listeners](_stream_.internal.writable.md#listeners)
* [off](_stream_.internal.writable.md#off)
* [on](_stream_.internal.writable.md#on)
* [once](_stream_.internal.writable.md#once)
* [pipe](_stream_.internal.writable.md#pipe)
* [prependListener](_stream_.internal.writable.md#prependlistener)
* [prependOnceListener](_stream_.internal.writable.md#prependoncelistener)
* [rawListeners](_stream_.internal.writable.md#rawlisteners)
* [removeAllListeners](_stream_.internal.writable.md#removealllisteners)
* [removeListener](_stream_.internal.writable.md#removelistener)
* [setDefaultEncoding](_stream_.internal.writable.md#setdefaultencoding)
* [setMaxListeners](_stream_.internal.writable.md#setmaxlisteners)
* [uncork](_stream_.internal.writable.md#uncork)
* [write](_stream_.internal.writable.md#write)
* [listenerCount](_stream_.internal.writable.md#static-listenercount)

## Constructors

###  constructor

\+ **new Writable**(`opts?`: [WritableOptions](../interfaces/_stream_.internal.writableoptions.md)): *[Writable](_stream_.internal.writable.md)*

Defined in node_modules/@types/node/stream.d.ts:125

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [WritableOptions](../interfaces/_stream_.internal.writableoptions.md) |

**Returns:** *[Writable](_stream_.internal.writable.md)*

## Properties

###  destroyed

• **destroyed**: *boolean*

Defined in node_modules/@types/node/stream.d.ts:125

___

###  writable

• **writable**: *boolean*

*Implementation of [WritableStream](../interfaces/nodejs.writablestream.md).[writable](../interfaces/nodejs.writablestream.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:120

___

###  writableFinished

• **writableFinished**: *boolean*

Defined in node_modules/@types/node/stream.d.ts:121

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

Defined in node_modules/@types/node/stream.d.ts:122

___

###  writableLength

• **writableLength**: *number*

Defined in node_modules/@types/node/stream.d.ts:123

___

###  writableObjectMode

• **writableObjectMode**: *boolean*

Defined in node_modules/@types/node/stream.d.ts:124

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  _destroy

▸ **_destroy**(`error`: [Error](../interfaces/error.md) | null, `callback`: function): *void*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:152

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:154

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

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

###  cork

▸ **cork**(): *void*

Defined in node_modules/@types/node/stream.d.ts:137

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](../interfaces/error.md)): *void*

Defined in node_modules/@types/node/stream.d.ts:139

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/error.md) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:159

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:160

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:161

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:162

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: [Readable](_stream_.internal.readable.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:163

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | [Readable](_stream_.internal.readable.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: [Readable](_stream_.internal.readable.md)): *boolean*

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

Defined in node_modules/@types/node/stream.d.ts:134

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

Defined in node_modules/@types/node/stream.d.ts:135

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding`: string, `cb?`: undefined | function): *void*

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

▸ **on**(`event`: "close", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:167

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:168

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

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

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:170

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:175

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:176

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:178

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:183

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:184

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:186

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:191

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:192

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:194

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

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

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:199

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:200

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:202

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "pipe", `listener`: function): *this*

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

Defined in node_modules/@types/node/stream.d.ts:138

**Returns:** *void*

___

###  write

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

Defined in node_modules/@types/node/stream.d.ts:131

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding`: string, `cb?`: undefined | function): *boolean*

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
