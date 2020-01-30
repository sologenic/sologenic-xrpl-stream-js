[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [ReadableStream](nodejs.readablestream.md)

# Interface: ReadableStream

## Hierarchy

* [EventEmitter](../classes/nodejs.eventemitter.md)

  ↳ **ReadableStream**

  ↳ [ReadWriteStream](nodejs.readwritestream.md)

## Implemented by

* [BrotliCompress](_zlib_.brotlicompress.md)
* [BrotliDecompress](_zlib_.brotlidecompress.md)
* [Cipher](../classes/_crypto_.cipher.md)
* [CipherCCM](_crypto_.cipherccm.md)
* [CipherGCM](_crypto_.ciphergcm.md)
* [ClientHttp2Stream](../classes/_http2_.clienthttp2stream.md)
* [Decipher](../classes/_crypto_.decipher.md)
* [DecipherCCM](_crypto_.decipherccm.md)
* [DecipherGCM](_crypto_.deciphergcm.md)
* [Deflate](_zlib_.deflate.md)
* [DeflateRaw](_zlib_.deflateraw.md)
* [Duplex](../classes/_stream_.internal.duplex.md)
* [Gunzip](_zlib_.gunzip.md)
* [Gzip](_zlib_.gzip.md)
* [Hash](../classes/_crypto_.hash.md)
* [Hmac](../classes/_crypto_.hmac.md)
* [Http2ServerRequest](../classes/_http2_.http2serverrequest.md)
* [Http2Stream](../classes/_http2_.http2stream.md)
* [IncomingMessage](../classes/_http_.incomingmessage.md)
* [Inflate](_zlib_.inflate.md)
* [InflateRaw](_zlib_.inflateraw.md)
* [PassThrough](../classes/_stream_.internal.passthrough.md)
* [ReadStream](../classes/_fs_.readstream.md)
* [ReadStream](_process_.__global.nodejs.readstream.md)
* [ReadStream](../classes/_tty_.readstream.md)
* [Readable](../classes/_stream_.internal.readable.md)
* [ServerHttp2Stream](../classes/_http2_.serverhttp2stream.md)
* [Socket](../classes/_net_.socket.md)
* [TLSSocket](../classes/_tls_.tlssocket.md)
* [Transform](../classes/_stream_.internal.transform.md)
* [Unzip](_zlib_.unzip.md)
* [WriteStream](_process_.__global.nodejs.writestream.md)
* [WriteStream](../classes/_tty_.writestream.md)

## Index

### Properties

* [readable](nodejs.readablestream.md#readable)

### Methods

* [[Symbol.asyncIterator]](nodejs.readablestream.md#[symbol.asynciterator])
* [addListener](nodejs.readablestream.md#addlistener)
* [emit](nodejs.readablestream.md#emit)
* [eventNames](nodejs.readablestream.md#eventnames)
* [getMaxListeners](nodejs.readablestream.md#getmaxlisteners)
* [isPaused](nodejs.readablestream.md#ispaused)
* [listenerCount](nodejs.readablestream.md#listenercount)
* [listeners](nodejs.readablestream.md#listeners)
* [off](nodejs.readablestream.md#off)
* [on](nodejs.readablestream.md#on)
* [once](nodejs.readablestream.md#once)
* [pause](nodejs.readablestream.md#pause)
* [pipe](nodejs.readablestream.md#pipe)
* [prependListener](nodejs.readablestream.md#prependlistener)
* [prependOnceListener](nodejs.readablestream.md#prependoncelistener)
* [rawListeners](nodejs.readablestream.md#rawlisteners)
* [read](nodejs.readablestream.md#read)
* [removeAllListeners](nodejs.readablestream.md#removealllisteners)
* [removeListener](nodejs.readablestream.md#removelistener)
* [resume](nodejs.readablestream.md#resume)
* [setEncoding](nodejs.readablestream.md#setencoding)
* [setMaxListeners](nodejs.readablestream.md#setmaxlisteners)
* [unpipe](nodejs.readablestream.md#unpipe)
* [unshift](nodejs.readablestream.md#unshift)
* [wrap](nodejs.readablestream.md#wrap)

## Properties

###  readable

• **readable**: *boolean*

Defined in node_modules/@types/node/globals.d.ts:627

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](asynciterableiterator.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/globals.d.ts:637

**Returns:** *[AsyncIterableIterator](asynciterableiterator.md)‹string | [Buffer](../classes/buffer.md)›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:608

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:618

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[eventNames](../classes/nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:623

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[getMaxListeners](../classes/nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:615

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

Defined in node_modules/@types/node/globals.d.ts:632

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[listenerCount](../classes/nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:619

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:616

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[off](../classes/nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/globals.d.ts:612

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:609

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:610

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

Defined in node_modules/@types/node/globals.d.ts:630

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

Defined in node_modules/@types/node/globals.d.ts:633

**Type parameters:**

▪ **T**: *[WritableStream](nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined &#124; object |

**Returns:** *T*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:621

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:622

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

▸ **rawListeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[rawListeners](../classes/nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  read

▸ **read**(`size?`: undefined | number): *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/globals.d.ts:628

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *string | [Buffer](../classes/buffer.md)*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeAllListeners](../classes/nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeListener](../classes/nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:611

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

Defined in node_modules/@types/node/globals.d.ts:631

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

Defined in node_modules/@types/node/globals.d.ts:629

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[setMaxListeners](../classes/nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  unpipe

▸ **unpipe**(`destination?`: [WritableStream](nodejs.writablestream.md)): *this*

Defined in node_modules/@types/node/globals.d.ts:634

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | [WritableStream](nodejs.writablestream.md) |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: string | [Uint8Array](uint8array.md), `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *void*

Defined in node_modules/@types/node/globals.d.ts:635

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | string &#124; [Uint8Array](uint8array.md) |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: [ReadableStream](nodejs.readablestream.md)): *this*

Defined in node_modules/@types/node/globals.d.ts:636

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | [ReadableStream](nodejs.readablestream.md) |

**Returns:** *this*
