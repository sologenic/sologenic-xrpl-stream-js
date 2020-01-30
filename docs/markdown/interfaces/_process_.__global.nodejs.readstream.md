[typescript](../README.md) › [Globals](../globals.md) › ["process"](../modules/_process_.md) › [__global](../modules/_process_.__global.md) › [NodeJS](../modules/_process_.__global.nodejs.md) › [ReadStream](_process_.__global.nodejs.readstream.md)

# Interface: ReadStream

## Hierarchy

  ↳ [ReadStream](../classes/_tty_.readstream.md)

  ↳ **ReadStream**

## Implements

* [ReadableStream](nodejs.readablestream.md)
* [Writable](../classes/_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_process_.__global.nodejs.readstream.md#constructor)

### Properties

* [bufferSize](_process_.__global.nodejs.readstream.md#buffersize)
* [bytesRead](_process_.__global.nodejs.readstream.md#bytesread)
* [bytesWritten](_process_.__global.nodejs.readstream.md#byteswritten)
* [connecting](_process_.__global.nodejs.readstream.md#connecting)
* [destroyed](_process_.__global.nodejs.readstream.md#destroyed)
* [isRaw](_process_.__global.nodejs.readstream.md#israw)
* [isTTY](_process_.__global.nodejs.readstream.md#istty)
* [localAddress](_process_.__global.nodejs.readstream.md#localaddress)
* [localPort](_process_.__global.nodejs.readstream.md#localport)
* [readable](_process_.__global.nodejs.readstream.md#readable)
* [readableHighWaterMark](_process_.__global.nodejs.readstream.md#readablehighwatermark)
* [readableLength](_process_.__global.nodejs.readstream.md#readablelength)
* [readableObjectMode](_process_.__global.nodejs.readstream.md#readableobjectmode)
* [remoteAddress](_process_.__global.nodejs.readstream.md#optional-remoteaddress)
* [remoteFamily](_process_.__global.nodejs.readstream.md#optional-remotefamily)
* [remotePort](_process_.__global.nodejs.readstream.md#optional-remoteport)
* [writable](_process_.__global.nodejs.readstream.md#writable)
* [writableFinished](_process_.__global.nodejs.readstream.md#writablefinished)
* [writableHighWaterMark](_process_.__global.nodejs.readstream.md#writablehighwatermark)
* [writableLength](_process_.__global.nodejs.readstream.md#writablelength)
* [writableObjectMode](_process_.__global.nodejs.readstream.md#writableobjectmode)
* [defaultMaxListeners](_process_.__global.nodejs.readstream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_process_.__global.nodejs.readstream.md#[symbol.asynciterator])
* [_destroy](_process_.__global.nodejs.readstream.md#_destroy)
* [_final](_process_.__global.nodejs.readstream.md#_final)
* [_read](_process_.__global.nodejs.readstream.md#_read)
* [_write](_process_.__global.nodejs.readstream.md#_write)
* [_writev](_process_.__global.nodejs.readstream.md#optional-_writev)
* [addListener](_process_.__global.nodejs.readstream.md#addlistener)
* [address](_process_.__global.nodejs.readstream.md#address)
* [connect](_process_.__global.nodejs.readstream.md#connect)
* [cork](_process_.__global.nodejs.readstream.md#cork)
* [destroy](_process_.__global.nodejs.readstream.md#destroy)
* [emit](_process_.__global.nodejs.readstream.md#emit)
* [end](_process_.__global.nodejs.readstream.md#end)
* [eventNames](_process_.__global.nodejs.readstream.md#eventnames)
* [getMaxListeners](_process_.__global.nodejs.readstream.md#getmaxlisteners)
* [isPaused](_process_.__global.nodejs.readstream.md#ispaused)
* [listenerCount](_process_.__global.nodejs.readstream.md#listenercount)
* [listeners](_process_.__global.nodejs.readstream.md#listeners)
* [off](_process_.__global.nodejs.readstream.md#off)
* [on](_process_.__global.nodejs.readstream.md#on)
* [once](_process_.__global.nodejs.readstream.md#once)
* [pause](_process_.__global.nodejs.readstream.md#pause)
* [pipe](_process_.__global.nodejs.readstream.md#pipe)
* [prependListener](_process_.__global.nodejs.readstream.md#prependlistener)
* [prependOnceListener](_process_.__global.nodejs.readstream.md#prependoncelistener)
* [push](_process_.__global.nodejs.readstream.md#push)
* [rawListeners](_process_.__global.nodejs.readstream.md#rawlisteners)
* [read](_process_.__global.nodejs.readstream.md#read)
* [ref](_process_.__global.nodejs.readstream.md#ref)
* [removeAllListeners](_process_.__global.nodejs.readstream.md#removealllisteners)
* [removeListener](_process_.__global.nodejs.readstream.md#removelistener)
* [resume](_process_.__global.nodejs.readstream.md#resume)
* [setDefaultEncoding](_process_.__global.nodejs.readstream.md#setdefaultencoding)
* [setEncoding](_process_.__global.nodejs.readstream.md#setencoding)
* [setKeepAlive](_process_.__global.nodejs.readstream.md#setkeepalive)
* [setMaxListeners](_process_.__global.nodejs.readstream.md#setmaxlisteners)
* [setNoDelay](_process_.__global.nodejs.readstream.md#setnodelay)
* [setRawMode](_process_.__global.nodejs.readstream.md#setrawmode)
* [setTimeout](_process_.__global.nodejs.readstream.md#settimeout)
* [uncork](_process_.__global.nodejs.readstream.md#uncork)
* [unpipe](_process_.__global.nodejs.readstream.md#unpipe)
* [unref](_process_.__global.nodejs.readstream.md#unref)
* [unshift](_process_.__global.nodejs.readstream.md#unshift)
* [wrap](_process_.__global.nodejs.readstream.md#wrap)
* [write](_process_.__global.nodejs.readstream.md#write)
* [from](_process_.__global.nodejs.readstream.md#static-from)
* [listenerCount](_process_.__global.nodejs.readstream.md#static-listenercount)

## Constructors

###  constructor

\+ **new ReadStream**(`fd`: number, `options?`: net.SocketConstructorOpts): *[ReadStream](_process_.__global.nodejs.readstream.md)*

*Inherited from [ReadStream](_process_.__global.nodejs.readstream.md).[constructor](_process_.__global.nodejs.readstream.md#constructor)*

*Overrides [Socket](../classes/_net_.socket.md).[constructor](../classes/_net_.socket.md#constructor)*

Defined in node_modules/@types/node/tty.d.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |
`options?` | net.SocketConstructorOpts |

**Returns:** *[ReadStream](_process_.__global.nodejs.readstream.md)*

## Properties

###  bufferSize

• **bufferSize**: *number*

*Inherited from [Socket](../classes/_net_.socket.md).[bufferSize](../classes/_net_.socket.md#buffersize)*

Defined in node_modules/@types/node/net.d.ts:78

___

###  bytesRead

• **bytesRead**: *number*

*Inherited from [Socket](../classes/_net_.socket.md).[bytesRead](../classes/_net_.socket.md#bytesread)*

Defined in node_modules/@types/node/net.d.ts:79

___

###  bytesWritten

• **bytesWritten**: *number*

*Inherited from [Socket](../classes/_net_.socket.md).[bytesWritten](../classes/_net_.socket.md#byteswritten)*

Defined in node_modules/@types/node/net.d.ts:80

___

###  connecting

• **connecting**: *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[connecting](../classes/_net_.socket.md#connecting)*

Defined in node_modules/@types/node/net.d.ts:81

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[destroyed](../classes/_net_.socket.md#destroyed)*

*Overrides [Hash](../classes/_crypto_.hash.md).[destroyed](../classes/_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/net.d.ts:82

___

###  isRaw

• **isRaw**: *boolean*

*Inherited from [ReadStream](_process_.__global.nodejs.readstream.md).[isRaw](_process_.__global.nodejs.readstream.md#israw)*

Defined in node_modules/@types/node/tty.d.ts:7

___

###  isTTY

• **isTTY**: *boolean*

*Inherited from [ReadStream](_process_.__global.nodejs.readstream.md).[isTTY](_process_.__global.nodejs.readstream.md#istty)*

Defined in node_modules/@types/node/tty.d.ts:9

___

###  localAddress

• **localAddress**: *string*

*Inherited from [Socket](../classes/_net_.socket.md).[localAddress](../classes/_net_.socket.md#localaddress)*

Defined in node_modules/@types/node/net.d.ts:83

___

###  localPort

• **localPort**: *number*

*Inherited from [Socket](../classes/_net_.socket.md).[localPort](../classes/_net_.socket.md#localport)*

Defined in node_modules/@types/node/net.d.ts:84

___

###  readable

• **readable**: *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[readable](../classes/_crypto_.hash.md#readable)*

Defined in node_modules/@types/node/stream.d.ts:26

___

###  readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [Hash](../classes/_crypto_.hash.md).[readableHighWaterMark](../classes/_crypto_.hash.md#readablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:27

___

###  readableLength

• **readableLength**: *number*

*Inherited from [Hash](../classes/_crypto_.hash.md).[readableLength](../classes/_crypto_.hash.md#readablelength)*

Defined in node_modules/@types/node/stream.d.ts:28

___

###  readableObjectMode

• **readableObjectMode**: *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[readableObjectMode](../classes/_crypto_.hash.md#readableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:29

___

### `Optional` remoteAddress

• **remoteAddress**? : *undefined | string*

*Inherited from [Socket](../classes/_net_.socket.md).[remoteAddress](../classes/_net_.socket.md#optional-remoteaddress)*

Defined in node_modules/@types/node/net.d.ts:85

___

### `Optional` remoteFamily

• **remoteFamily**? : *undefined | string*

*Inherited from [Socket](../classes/_net_.socket.md).[remoteFamily](../classes/_net_.socket.md#optional-remotefamily)*

Defined in node_modules/@types/node/net.d.ts:86

___

### `Optional` remotePort

• **remotePort**? : *undefined | number*

*Inherited from [Socket](../classes/_net_.socket.md).[remotePort](../classes/_net_.socket.md#optional-remoteport)*

Defined in node_modules/@types/node/net.d.ts:87

___

###  writable

• **writable**: *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[writable](../classes/_crypto_.hash.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:221

___

###  writableFinished

• **writableFinished**: *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[writableFinished](../classes/_crypto_.hash.md#writablefinished)*

Defined in node_modules/@types/node/stream.d.ts:222

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [Hash](../classes/_crypto_.hash.md).[writableHighWaterMark](../classes/_crypto_.hash.md#writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:223

___

###  writableLength

• **writableLength**: *number*

*Inherited from [Hash](../classes/_crypto_.hash.md).[writableLength](../classes/_crypto_.hash.md#writablelength)*

Defined in node_modules/@types/node/stream.d.ts:224

___

###  writableObjectMode

• **writableObjectMode**: *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[writableObjectMode](../classes/_crypto_.hash.md#writableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:225

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[defaultMaxListeners](isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](asynciterableiterator.md)‹any›*

*Inherited from [Hash](../classes/_crypto_.hash.md).[[Symbol.asyncIterator]](../classes/_crypto_.hash.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/stream.d.ts:103

**Returns:** *[AsyncIterableIterator](asynciterableiterator.md)‹any›*

___

###  _destroy

▸ **_destroy**(`error`: [Error](error.md) | null, `callback`: function): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[_destroy](../classes/_crypto_.hash.md#_destroy)*

*Overrides [ReadStream](../classes/_fs_.readstream.md).[_destroy](../classes/_fs_.readstream.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:229

**Parameters:**

▪ **error**: *[Error](error.md) | null*

▪ **callback**: *function*

▸ (`error`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[_final](../classes/_crypto_.hash.md#_final)*

Defined in node_modules/@types/node/stream.d.ts:230

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*

___

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[_read](../classes/_crypto_.hash.md#_read)*

Defined in node_modules/@types/node/stream.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[_write](../classes/_crypto_.hash.md#_write)*

Defined in node_modules/@types/node/stream.d.ts:227

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: [Array](regexpmatcharray.md#array)‹object›, `callback`: function): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[_writev](../classes/_crypto_.hash.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:228

**Parameters:**

▪ **chunks**: *[Array](regexpmatcharray.md#array)‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:105

events.EventEmitter
  1. close
  2. connect
  3. data
  4. drain
  5. end
  6. error
  7. lookup
  8. timeout

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:106

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`had_error`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`had_error` | boolean |

**Returns:** *this*

▸ **addListener**(`event`: "connect", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:107

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:108

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:109

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:110

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:111

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "lookup", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:112

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **addListener**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:113

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  address

▸ **address**(): *[AddressInfo](_net_.addressinfo.md) | string*

*Inherited from [Socket](../classes/_net_.socket.md).[address](../classes/_net_.socket.md#address)*

Defined in node_modules/@types/node/net.d.ts:74

**Returns:** *[AddressInfo](_net_.addressinfo.md) | string*

___

###  connect

▸ **connect**(`options`: [SocketConnectOpts](../modules/_net_.md#socketconnectopts), `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[connect](../classes/_net_.socket.md#connect)*

Defined in node_modules/@types/node/net.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SocketConnectOpts](../modules/_net_.md#socketconnectopts) |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`port`: number, `host`: string, `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[connect](../classes/_net_.socket.md#connect)*

Defined in node_modules/@types/node/net.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`host` | string |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`port`: number, `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[connect](../classes/_net_.socket.md#connect)*

Defined in node_modules/@types/node/net.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`path`: string, `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[connect](../classes/_net_.socket.md#connect)*

Defined in node_modules/@types/node/net.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

___

###  cork

▸ **cork**(): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[cork](../classes/_crypto_.hash.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:237

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](error.md)): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[destroy](../classes/_crypto_.hash.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:115

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close", `had_error`: boolean): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:116

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |
`had_error` | boolean |

**Returns:** *boolean*

▸ **emit**(`event`: "connect"): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:117

**Parameters:**

Name | Type |
------ | ------ |
`event` | "connect" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `data`: [Buffer](../classes/buffer.md)): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:118

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:119

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:120

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](error.md)): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:121

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "lookup", `err`: [Error](error.md), `address`: string, `family`: string | number, `host`: string): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:122

**Parameters:**

Name | Type |
------ | ------ |
`event` | "lookup" |
`err` | [Error](error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "timeout"): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

*Overrides [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:123

**Parameters:**

Name | Type |
------ | ------ |
`event` | "timeout" |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [Socket](../classes/_net_.socket.md).[end](../classes/_net_.socket.md#end)*

*Overrides [Hash](../classes/_crypto_.hash.md).[end](../classes/_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`buffer`: [Uint8Array](uint8array.md) | string, `cb?`: undefined | function): *void*

*Inherited from [Socket](../classes/_net_.socket.md).[end](../classes/_net_.socket.md#end)*

*Overrides [Hash](../classes/_crypto_.hash.md).[end](../classes/_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Uint8Array](uint8array.md) &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`str`: [Uint8Array](uint8array.md) | string, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [Socket](../classes/_net_.socket.md).[end](../classes/_net_.socket.md#end)*

*Overrides [Hash](../classes/_crypto_.hash.md).[end](../classes/_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:92

**Parameters:**

Name | Type |
------ | ------ |
`str` | [Uint8Array](uint8array.md) &#124; string |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[eventNames](isologenictxhandler.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[getMaxListeners](isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[isPaused](../classes/_crypto_.hash.md#ispaused)*

Defined in node_modules/@types/node/stream.d.ts:37

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[listenerCount](isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[listeners](isologenictxhandler.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[off](isologenictxhandler.md#off)*

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

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:125

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:126

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`had_error`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`had_error` | boolean |

**Returns:** *this*

▸ **on**(`event`: "connect", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:127

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:128

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:129

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:130

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:131

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **on**(`event`: "lookup", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:132

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **on**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

*Overrides [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:133

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:135

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:136

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`had_error`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`had_error` | boolean |

**Returns:** *this*

▸ **once**(`event`: "connect", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:137

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:138

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:139

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:140

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:141

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **once**(`event`: "lookup", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:142

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **once**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

*Overrides [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:143

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[pause](../classes/_net_.socket.md#pause)*

*Overrides [Hash](../classes/_crypto_.hash.md).[pause](../classes/_crypto_.hash.md#pause)*

Defined in node_modules/@types/node/net.d.ts:69

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [Hash](../classes/_crypto_.hash.md).[pipe](../classes/_crypto_.hash.md#pipe)*

Defined in node_modules/@types/node/stream.d.ts:5

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

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:145

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:146

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`had_error`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`had_error` | boolean |

**Returns:** *this*

▸ **prependListener**(`event`: "connect", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:147

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:148

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:149

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:150

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:151

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "lookup", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:152

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:153

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:155

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:156

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`had_error`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`had_error` | boolean |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "connect", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:157

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:158

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:159

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:160

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:161

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "lookup", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:162

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "timeout", `listener`: function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

*Overrides [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:163

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[push](../classes/_crypto_.hash.md#push)*

Defined in node_modules/@types/node/stream.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[rawListeners](isologenictxhandler.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  read

▸ **read**(`size?`: undefined | number): *any*

*Inherited from [Hash](../classes/_crypto_.hash.md).[read](../classes/_crypto_.hash.md#read)*

Defined in node_modules/@types/node/stream.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

___

###  ref

▸ **ref**(): *void*

*Inherited from [Socket](../classes/_net_.socket.md).[ref](../classes/_net_.socket.md#ref)*

Defined in node_modules/@types/node/net.d.ts:76

**Returns:** *void*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[removeAllListeners](isologenictxhandler.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[removeListener](../classes/_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[removeListener](isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:96

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[removeListener](../classes/_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[removeListener](isologenictxhandler.md#removelistener)*

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

*Inherited from [Hash](../classes/_crypto_.hash.md).[removeListener](../classes/_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[removeListener](isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:98

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[removeListener](../classes/_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[removeListener](isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:99

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[removeListener](../classes/_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[removeListener](isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:100

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[removeListener](../classes/_crypto_.hash.md#removelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[removeListener](isologenictxhandler.md#removelistener)*

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

*Inherited from [Socket](../classes/_net_.socket.md).[resume](../classes/_net_.socket.md#resume)*

*Overrides [Hash](../classes/_crypto_.hash.md).[resume](../classes/_crypto_.hash.md#resume)*

Defined in node_modules/@types/node/net.d.ts:70

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[setDefaultEncoding](../classes/_crypto_.hash.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:233

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding?`: undefined | string): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[setEncoding](../classes/_net_.socket.md#setencoding)*

*Overrides [Hash](../classes/_crypto_.hash.md).[setEncoding](../classes/_crypto_.hash.md#setencoding)*

Defined in node_modules/@types/node/net.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`encoding?` | undefined &#124; string |

**Returns:** *this*

___

###  setKeepAlive

▸ **setKeepAlive**(`enable?`: undefined | false | true, `initialDelay?`: undefined | number): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[setKeepAlive](../classes/_net_.socket.md#setkeepalive)*

Defined in node_modules/@types/node/net.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`enable?` | undefined &#124; false &#124; true |
`initialDelay?` | undefined &#124; number |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[setMaxListeners](isologenictxhandler.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setNoDelay

▸ **setNoDelay**(`noDelay?`: undefined | false | true): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[setNoDelay](../classes/_net_.socket.md#setnodelay)*

Defined in node_modules/@types/node/net.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`noDelay?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  setRawMode

▸ **setRawMode**(`mode`: boolean): *void*

*Inherited from [ReadStream](_process_.__global.nodejs.readstream.md).[setRawMode](_process_.__global.nodejs.readstream.md#setrawmode)*

Defined in node_modules/@types/node/tty.d.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`mode` | boolean |

**Returns:** *void*

___

###  setTimeout

▸ **setTimeout**(`timeout`: number, `callback?`: undefined | function): *this*

*Inherited from [Socket](../classes/_net_.socket.md).[setTimeout](../classes/_net_.socket.md#settimeout)*

Defined in node_modules/@types/node/net.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`timeout` | number |
`callback?` | undefined &#124; function |

**Returns:** *this*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[uncork](../classes/_crypto_.hash.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:238

**Returns:** *void*

___

###  unpipe

▸ **unpipe**(`destination?`: [WritableStream](nodejs.writablestream.md)): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[unpipe](../classes/_crypto_.hash.md#unpipe)*

Defined in node_modules/@types/node/stream.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | [WritableStream](nodejs.writablestream.md) |

**Returns:** *this*

___

###  unref

▸ **unref**(): *void*

*Inherited from [Socket](../classes/_net_.socket.md).[unref](../classes/_net_.socket.md#unref)*

Defined in node_modules/@types/node/net.d.ts:75

**Returns:** *void*

___

###  unshift

▸ **unshift**(`chunk`: any, `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[unshift](../classes/_crypto_.hash.md#unshift)*

Defined in node_modules/@types/node/stream.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: [ReadableStream](nodejs.readablestream.md)): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[wrap](../classes/_crypto_.hash.md#wrap)*

Defined in node_modules/@types/node/stream.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | [ReadableStream](nodejs.readablestream.md) |

**Returns:** *this*

___

###  write

▸ **write**(`buffer`: [Uint8Array](uint8array.md) | string, `cb?`: undefined | function): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[write](../classes/_net_.socket.md#write)*

*Overrides [Hash](../classes/_crypto_.hash.md).[write](../classes/_crypto_.hash.md#write)*

Defined in node_modules/@types/node/net.d.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Uint8Array](uint8array.md) &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`str`: [Uint8Array](uint8array.md) | string, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [Socket](../classes/_net_.socket.md).[write](../classes/_net_.socket.md#write)*

*Overrides [Hash](../classes/_crypto_.hash.md).[write](../classes/_crypto_.hash.md#write)*

Defined in node_modules/@types/node/net.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`str` | [Uint8Array](uint8array.md) &#124; string |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

___

### `Static` from

▸ **from**(`iterable`: [Iterable](iterable.md)‹any› | [AsyncIterable](asynciterable.md)‹any›, `options?`: [ReadableOptions](_stream_.internal.readableoptions.md)): *[Readable](../classes/_stream_.internal.readable.md)*

*Inherited from [Hash](../classes/_crypto_.hash.md).[from](../classes/_crypto_.hash.md#static-from)*

Defined in node_modules/@types/node/stream.d.ts:24

A utility method for creating Readable Streams out of iterators.

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | [Iterable](iterable.md)‹any› &#124; [AsyncIterable](asynciterable.md)‹any› |
`options?` | [ReadableOptions](_stream_.internal.readableoptions.md) |

**Returns:** *[Readable](../classes/_stream_.internal.readable.md)*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](../classes/_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[listenerCount](isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](../classes/_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
