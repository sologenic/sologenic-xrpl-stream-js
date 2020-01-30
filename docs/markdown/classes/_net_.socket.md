[typescript](../README.md) › [Globals](../globals.md) › ["net"](../modules/_net_.md) › [Socket](_net_.socket.md)

# Class: Socket

## Hierarchy

  ↳ [Duplex](_stream_.internal.duplex.md)

  ↳ **Socket**

  ↳ [TLSSocket](_tls_.tlssocket.md)

  ↳ [ReadStream](_tty_.readstream.md)

  ↳ [WriteStream](_tty_.writestream.md)

## Implements

* [ReadableStream](../interfaces/nodejs.readablestream.md)
* [Writable](_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_net_.socket.md#constructor)

### Properties

* [bufferSize](_net_.socket.md#buffersize)
* [bytesRead](_net_.socket.md#bytesread)
* [bytesWritten](_net_.socket.md#byteswritten)
* [connecting](_net_.socket.md#connecting)
* [destroyed](_net_.socket.md#destroyed)
* [localAddress](_net_.socket.md#localaddress)
* [localPort](_net_.socket.md#localport)
* [readable](_net_.socket.md#readable)
* [readableHighWaterMark](_net_.socket.md#readablehighwatermark)
* [readableLength](_net_.socket.md#readablelength)
* [readableObjectMode](_net_.socket.md#readableobjectmode)
* [remoteAddress](_net_.socket.md#optional-remoteaddress)
* [remoteFamily](_net_.socket.md#optional-remotefamily)
* [remotePort](_net_.socket.md#optional-remoteport)
* [writable](_net_.socket.md#writable)
* [writableFinished](_net_.socket.md#writablefinished)
* [writableHighWaterMark](_net_.socket.md#writablehighwatermark)
* [writableLength](_net_.socket.md#writablelength)
* [writableObjectMode](_net_.socket.md#writableobjectmode)
* [defaultMaxListeners](_net_.socket.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_net_.socket.md#[symbol.asynciterator])
* [_destroy](_net_.socket.md#_destroy)
* [_final](_net_.socket.md#_final)
* [_read](_net_.socket.md#_read)
* [_write](_net_.socket.md#_write)
* [_writev](_net_.socket.md#optional-_writev)
* [addListener](_net_.socket.md#addlistener)
* [address](_net_.socket.md#address)
* [connect](_net_.socket.md#connect)
* [cork](_net_.socket.md#cork)
* [destroy](_net_.socket.md#destroy)
* [emit](_net_.socket.md#emit)
* [end](_net_.socket.md#end)
* [eventNames](_net_.socket.md#eventnames)
* [getMaxListeners](_net_.socket.md#getmaxlisteners)
* [isPaused](_net_.socket.md#ispaused)
* [listenerCount](_net_.socket.md#listenercount)
* [listeners](_net_.socket.md#listeners)
* [off](_net_.socket.md#off)
* [on](_net_.socket.md#on)
* [once](_net_.socket.md#once)
* [pause](_net_.socket.md#pause)
* [pipe](_net_.socket.md#pipe)
* [prependListener](_net_.socket.md#prependlistener)
* [prependOnceListener](_net_.socket.md#prependoncelistener)
* [push](_net_.socket.md#push)
* [rawListeners](_net_.socket.md#rawlisteners)
* [read](_net_.socket.md#read)
* [ref](_net_.socket.md#ref)
* [removeAllListeners](_net_.socket.md#removealllisteners)
* [removeListener](_net_.socket.md#removelistener)
* [resume](_net_.socket.md#resume)
* [setDefaultEncoding](_net_.socket.md#setdefaultencoding)
* [setEncoding](_net_.socket.md#setencoding)
* [setKeepAlive](_net_.socket.md#setkeepalive)
* [setMaxListeners](_net_.socket.md#setmaxlisteners)
* [setNoDelay](_net_.socket.md#setnodelay)
* [setTimeout](_net_.socket.md#settimeout)
* [uncork](_net_.socket.md#uncork)
* [unpipe](_net_.socket.md#unpipe)
* [unref](_net_.socket.md#unref)
* [unshift](_net_.socket.md#unshift)
* [wrap](_net_.socket.md#wrap)
* [write](_net_.socket.md#write)
* [from](_net_.socket.md#static-from)
* [listenerCount](_net_.socket.md#static-listenercount)

## Constructors

###  constructor

\+ **new Socket**(`options?`: [SocketConstructorOpts](../interfaces/_net_.socketconstructoropts.md)): *[Socket](_net_.socket.md)*

*Overrides [Duplex](_stream_.internal.duplex.md).[constructor](_stream_.internal.duplex.md#constructor)*

Defined in node_modules/@types/node/net.d.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [SocketConstructorOpts](../interfaces/_net_.socketconstructoropts.md) |

**Returns:** *[Socket](_net_.socket.md)*

## Properties

###  bufferSize

• **bufferSize**: *number*

Defined in node_modules/@types/node/net.d.ts:78

___

###  bytesRead

• **bytesRead**: *number*

Defined in node_modules/@types/node/net.d.ts:79

___

###  bytesWritten

• **bytesWritten**: *number*

Defined in node_modules/@types/node/net.d.ts:80

___

###  connecting

• **connecting**: *boolean*

Defined in node_modules/@types/node/net.d.ts:81

___

###  destroyed

• **destroyed**: *boolean*

*Overrides [Hash](_crypto_.hash.md).[destroyed](_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/net.d.ts:82

___

###  localAddress

• **localAddress**: *string*

Defined in node_modules/@types/node/net.d.ts:83

___

###  localPort

• **localPort**: *number*

Defined in node_modules/@types/node/net.d.ts:84

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

### `Optional` remoteAddress

• **remoteAddress**? : *undefined | string*

Defined in node_modules/@types/node/net.d.ts:85

___

### `Optional` remoteFamily

• **remoteFamily**? : *undefined | string*

Defined in node_modules/@types/node/net.d.ts:86

___

### `Optional` remotePort

• **remotePort**? : *undefined | number*

Defined in node_modules/@types/node/net.d.ts:87

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

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

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

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

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

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:107

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:108

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:109

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:110

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:111

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "lookup", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:112

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **addListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[addListener](_crypto_.hash.md#addlistener)*

Defined in node_modules/@types/node/net.d.ts:113

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  address

▸ **address**(): *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

Defined in node_modules/@types/node/net.d.ts:74

**Returns:** *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

___

###  connect

▸ **connect**(`options`: [SocketConnectOpts](../modules/_net_.md#socketconnectopts), `connectionListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SocketConnectOpts](../modules/_net_.md#socketconnectopts) |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`port`: number, `host`: string, `connectionListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`host` | string |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`port`: number, `connectionListener?`: undefined | function): *this*

Defined in node_modules/@types/node/net.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`path`: string, `connectionListener?`: undefined | function): *this*

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

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:115

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close", `had_error`: boolean): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:116

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |
`had_error` | boolean |

**Returns:** *boolean*

▸ **emit**(`event`: "connect"): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:117

**Parameters:**

Name | Type |
------ | ------ |
`event` | "connect" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `data`: [Buffer](buffer.md)): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:118

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`data` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:119

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:120

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:121

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "lookup", `err`: [Error](../interfaces/error.md), `address`: string, `family`: string | number, `host`: string): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:122

**Parameters:**

Name | Type |
------ | ------ |
`event` | "lookup" |
`err` | [Error](../interfaces/error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "timeout"): *boolean*

*Overrides [Hash](_crypto_.hash.md).[emit](_crypto_.hash.md#emit)*

Defined in node_modules/@types/node/net.d.ts:123

**Parameters:**

Name | Type |
------ | ------ |
`event` | "timeout" |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Overrides [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`buffer`: [Uint8Array](../interfaces/uint8array.md) | string, `cb?`: undefined | function): *void*

*Overrides [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Uint8Array](../interfaces/uint8array.md) &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`str`: [Uint8Array](../interfaces/uint8array.md) | string, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Overrides [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:92

**Parameters:**

Name | Type |
------ | ------ |
`str` | [Uint8Array](../interfaces/uint8array.md) &#124; string |
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

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

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

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

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

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:127

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:128

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:129

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:130

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:131

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "lookup", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:132

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **on**(`event`: "timeout", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[on](_crypto_.hash.md#on)*

Defined in node_modules/@types/node/net.d.ts:133

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

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

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

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

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:137

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:138

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:139

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:140

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:141

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "lookup", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:142

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **once**(`event`: "timeout", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[once](_crypto_.hash.md#once)*

Defined in node_modules/@types/node/net.d.ts:143

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Overrides [Hash](_crypto_.hash.md).[pause](_crypto_.hash.md#pause)*

Defined in node_modules/@types/node/net.d.ts:69

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

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

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

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:147

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:148

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:149

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:150

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:151

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "lookup", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:152

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependListener](_crypto_.hash.md#prependlistener)*

Defined in node_modules/@types/node/net.d.ts:153

**Parameters:**

▪ **event**: *"timeout"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

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

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

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

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:157

**Parameters:**

▪ **event**: *"connect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:158

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`data`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:159

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:160

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:161

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "lookup", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:162

**Parameters:**

▪ **event**: *"lookup"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md), `address`: string, `family`: string | number, `host`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |
`address` | string |
`family` | string &#124; number |
`host` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "timeout", `listener`: function): *this*

*Overrides [Hash](_crypto_.hash.md).[prependOnceListener](_crypto_.hash.md#prependoncelistener)*

Defined in node_modules/@types/node/net.d.ts:163

**Parameters:**

▪ **event**: *"timeout"*

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

###  ref

▸ **ref**(): *void*

Defined in node_modules/@types/node/net.d.ts:76

**Returns:** *void*

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

*Overrides [Hash](_crypto_.hash.md).[resume](_crypto_.hash.md#resume)*

Defined in node_modules/@types/node/net.d.ts:70

**Returns:** *this*

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

▸ **setEncoding**(`encoding?`: undefined | string): *this*

*Overrides [Hash](_crypto_.hash.md).[setEncoding](_crypto_.hash.md#setencoding)*

Defined in node_modules/@types/node/net.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`encoding?` | undefined &#124; string |

**Returns:** *this*

___

###  setKeepAlive

▸ **setKeepAlive**(`enable?`: undefined | false | true, `initialDelay?`: undefined | number): *this*

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

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setNoDelay

▸ **setNoDelay**(`noDelay?`: undefined | false | true): *this*

Defined in node_modules/@types/node/net.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`noDelay?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  setTimeout

▸ **setTimeout**(`timeout`: number, `callback?`: undefined | function): *this*

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

###  unref

▸ **unref**(): *void*

Defined in node_modules/@types/node/net.d.ts:75

**Returns:** *void*

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

▸ **write**(`buffer`: [Uint8Array](../interfaces/uint8array.md) | string, `cb?`: undefined | function): *boolean*

*Overrides [Hash](_crypto_.hash.md).[write](_crypto_.hash.md#write)*

Defined in node_modules/@types/node/net.d.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Uint8Array](../interfaces/uint8array.md) &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`str`: [Uint8Array](../interfaces/uint8array.md) | string, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Overrides [Hash](_crypto_.hash.md).[write](_crypto_.hash.md#write)*

Defined in node_modules/@types/node/net.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`str` | [Uint8Array](../interfaces/uint8array.md) &#124; string |
`encoding?` | undefined &#124; string |
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
