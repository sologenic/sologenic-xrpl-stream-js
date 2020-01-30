[typescript](../README.md) › [Globals](../globals.md) › ["tty"](../modules/_tty_.md) › [WriteStream](_tty_.writestream.md)

# Class: WriteStream

## Hierarchy

  ↳ [Socket](_net_.socket.md)

  ↳ **WriteStream**

  ↳ [WriteStream](../interfaces/_process_.__global.nodejs.writestream.md)

## Implements

* [ReadableStream](../interfaces/nodejs.readablestream.md)
* [Writable](_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_tty_.writestream.md#constructor)

### Properties

* [bufferSize](_tty_.writestream.md#buffersize)
* [bytesRead](_tty_.writestream.md#bytesread)
* [bytesWritten](_tty_.writestream.md#byteswritten)
* [columns](_tty_.writestream.md#columns)
* [connecting](_tty_.writestream.md#connecting)
* [destroyed](_tty_.writestream.md#destroyed)
* [isTTY](_tty_.writestream.md#istty)
* [localAddress](_tty_.writestream.md#localaddress)
* [localPort](_tty_.writestream.md#localport)
* [readable](_tty_.writestream.md#readable)
* [readableHighWaterMark](_tty_.writestream.md#readablehighwatermark)
* [readableLength](_tty_.writestream.md#readablelength)
* [readableObjectMode](_tty_.writestream.md#readableobjectmode)
* [remoteAddress](_tty_.writestream.md#optional-remoteaddress)
* [remoteFamily](_tty_.writestream.md#optional-remotefamily)
* [remotePort](_tty_.writestream.md#optional-remoteport)
* [rows](_tty_.writestream.md#rows)
* [writable](_tty_.writestream.md#writable)
* [writableFinished](_tty_.writestream.md#writablefinished)
* [writableHighWaterMark](_tty_.writestream.md#writablehighwatermark)
* [writableLength](_tty_.writestream.md#writablelength)
* [writableObjectMode](_tty_.writestream.md#writableobjectmode)
* [defaultMaxListeners](_tty_.writestream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_tty_.writestream.md#[symbol.asynciterator])
* [_destroy](_tty_.writestream.md#_destroy)
* [_final](_tty_.writestream.md#_final)
* [_read](_tty_.writestream.md#_read)
* [_write](_tty_.writestream.md#_write)
* [_writev](_tty_.writestream.md#optional-_writev)
* [addListener](_tty_.writestream.md#addlistener)
* [address](_tty_.writestream.md#address)
* [clearLine](_tty_.writestream.md#clearline)
* [clearScreenDown](_tty_.writestream.md#clearscreendown)
* [connect](_tty_.writestream.md#connect)
* [cork](_tty_.writestream.md#cork)
* [cursorTo](_tty_.writestream.md#cursorto)
* [destroy](_tty_.writestream.md#destroy)
* [emit](_tty_.writestream.md#emit)
* [end](_tty_.writestream.md#end)
* [eventNames](_tty_.writestream.md#eventnames)
* [getColorDepth](_tty_.writestream.md#getcolordepth)
* [getMaxListeners](_tty_.writestream.md#getmaxlisteners)
* [getWindowSize](_tty_.writestream.md#getwindowsize)
* [hasColors](_tty_.writestream.md#hascolors)
* [isPaused](_tty_.writestream.md#ispaused)
* [listenerCount](_tty_.writestream.md#listenercount)
* [listeners](_tty_.writestream.md#listeners)
* [moveCursor](_tty_.writestream.md#movecursor)
* [off](_tty_.writestream.md#off)
* [on](_tty_.writestream.md#on)
* [once](_tty_.writestream.md#once)
* [pause](_tty_.writestream.md#pause)
* [pipe](_tty_.writestream.md#pipe)
* [prependListener](_tty_.writestream.md#prependlistener)
* [prependOnceListener](_tty_.writestream.md#prependoncelistener)
* [push](_tty_.writestream.md#push)
* [rawListeners](_tty_.writestream.md#rawlisteners)
* [read](_tty_.writestream.md#read)
* [ref](_tty_.writestream.md#ref)
* [removeAllListeners](_tty_.writestream.md#removealllisteners)
* [removeListener](_tty_.writestream.md#removelistener)
* [resume](_tty_.writestream.md#resume)
* [setDefaultEncoding](_tty_.writestream.md#setdefaultencoding)
* [setEncoding](_tty_.writestream.md#setencoding)
* [setKeepAlive](_tty_.writestream.md#setkeepalive)
* [setMaxListeners](_tty_.writestream.md#setmaxlisteners)
* [setNoDelay](_tty_.writestream.md#setnodelay)
* [setTimeout](_tty_.writestream.md#settimeout)
* [uncork](_tty_.writestream.md#uncork)
* [unpipe](_tty_.writestream.md#unpipe)
* [unref](_tty_.writestream.md#unref)
* [unshift](_tty_.writestream.md#unshift)
* [wrap](_tty_.writestream.md#wrap)
* [write](_tty_.writestream.md#write)
* [from](_tty_.writestream.md#static-from)
* [listenerCount](_tty_.writestream.md#static-listenercount)

## Constructors

###  constructor

\+ **new WriteStream**(`fd`: number): *[WriteStream](_tty_.writestream.md)*

*Overrides [Socket](_net_.socket.md).[constructor](_net_.socket.md#constructor)*

Defined in node_modules/@types/node/tty.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |

**Returns:** *[WriteStream](_tty_.writestream.md)*

## Properties

###  bufferSize

• **bufferSize**: *number*

*Inherited from [Socket](_net_.socket.md).[bufferSize](_net_.socket.md#buffersize)*

Defined in node_modules/@types/node/net.d.ts:78

___

###  bytesRead

• **bytesRead**: *number*

*Inherited from [Socket](_net_.socket.md).[bytesRead](_net_.socket.md#bytesread)*

Defined in node_modules/@types/node/net.d.ts:79

___

###  bytesWritten

• **bytesWritten**: *number*

*Inherited from [Socket](_net_.socket.md).[bytesWritten](_net_.socket.md#byteswritten)*

Defined in node_modules/@types/node/net.d.ts:80

___

###  columns

• **columns**: *number*

Defined in node_modules/@types/node/tty.d.ts:61

___

###  connecting

• **connecting**: *boolean*

*Inherited from [Socket](_net_.socket.md).[connecting](_net_.socket.md#connecting)*

Defined in node_modules/@types/node/net.d.ts:81

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Socket](_net_.socket.md).[destroyed](_net_.socket.md#destroyed)*

*Overrides [Hash](_crypto_.hash.md).[destroyed](_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/net.d.ts:82

___

###  isTTY

• **isTTY**: *boolean*

Defined in node_modules/@types/node/tty.d.ts:63

___

###  localAddress

• **localAddress**: *string*

*Inherited from [Socket](_net_.socket.md).[localAddress](_net_.socket.md#localaddress)*

Defined in node_modules/@types/node/net.d.ts:83

___

###  localPort

• **localPort**: *number*

*Inherited from [Socket](_net_.socket.md).[localPort](_net_.socket.md#localport)*

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

*Inherited from [Socket](_net_.socket.md).[remoteAddress](_net_.socket.md#optional-remoteaddress)*

Defined in node_modules/@types/node/net.d.ts:85

___

### `Optional` remoteFamily

• **remoteFamily**? : *undefined | string*

*Inherited from [Socket](_net_.socket.md).[remoteFamily](_net_.socket.md#optional-remotefamily)*

Defined in node_modules/@types/node/net.d.ts:86

___

### `Optional` remotePort

• **remotePort**? : *undefined | number*

*Inherited from [Socket](_net_.socket.md).[remotePort](_net_.socket.md#optional-remoteport)*

Defined in node_modules/@types/node/net.d.ts:87

___

###  rows

• **rows**: *number*

Defined in node_modules/@types/node/tty.d.ts:62

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

*Overrides [Socket](_net_.socket.md).[addListener](_net_.socket.md#addlistener)*

Defined in node_modules/@types/node/tty.d.ts:19

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "resize", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[addListener](_net_.socket.md#addlistener)*

Defined in node_modules/@types/node/tty.d.ts:20

**Parameters:**

▪ **event**: *"resize"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  address

▸ **address**(): *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

*Inherited from [Socket](_net_.socket.md).[address](_net_.socket.md#address)*

Defined in node_modules/@types/node/net.d.ts:74

**Returns:** *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

___

###  clearLine

▸ **clearLine**(`dir`: [Direction](../modules/_tty_.md#direction), `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/tty.d.ts:40

Clears the current line of this WriteStream in a direction identified by `dir`.

**Parameters:**

Name | Type |
------ | ------ |
`dir` | [Direction](../modules/_tty_.md#direction) |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  clearScreenDown

▸ **clearScreenDown**(`callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/tty.d.ts:44

Clears this `WriteStream` from the current cursor down.

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  connect

▸ **connect**(`options`: [SocketConnectOpts](../modules/_net_.md#socketconnectopts), `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](_net_.socket.md).[connect](_net_.socket.md#connect)*

Defined in node_modules/@types/node/net.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SocketConnectOpts](../modules/_net_.md#socketconnectopts) |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`port`: number, `host`: string, `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](_net_.socket.md).[connect](_net_.socket.md#connect)*

Defined in node_modules/@types/node/net.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`host` | string |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`port`: number, `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](_net_.socket.md).[connect](_net_.socket.md#connect)*

Defined in node_modules/@types/node/net.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`connectionListener?` | undefined &#124; function |

**Returns:** *this*

▸ **connect**(`path`: string, `connectionListener?`: undefined | function): *this*

*Inherited from [Socket](_net_.socket.md).[connect](_net_.socket.md#connect)*

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

###  cursorTo

▸ **cursorTo**(`x`: number, `y`: number, `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/tty.d.ts:48

Moves this WriteStream's cursor to the specified position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

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

*Overrides [Socket](_net_.socket.md).[emit](_net_.socket.md#emit)*

Defined in node_modules/@types/node/tty.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "resize"): *boolean*

*Overrides [Socket](_net_.socket.md).[emit](_net_.socket.md#emit)*

Defined in node_modules/@types/node/tty.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`event` | "resize" |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [Socket](_net_.socket.md).[end](_net_.socket.md#end)*

*Overrides [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`buffer`: [Uint8Array](../interfaces/uint8array.md) | string, `cb?`: undefined | function): *void*

*Inherited from [Socket](_net_.socket.md).[end](_net_.socket.md#end)*

*Overrides [Hash](_crypto_.hash.md).[end](_crypto_.hash.md#end)*

Defined in node_modules/@types/node/net.d.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Uint8Array](../interfaces/uint8array.md) &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`str`: [Uint8Array](../interfaces/uint8array.md) | string, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [Socket](_net_.socket.md).[end](_net_.socket.md#end)*

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

###  getColorDepth

▸ **getColorDepth**(`env?`: undefined | object): *number*

Defined in node_modules/@types/node/tty.d.ts:56

**`default`** `process.env`

**Parameters:**

Name | Type |
------ | ------ |
`env?` | undefined &#124; object |

**Returns:** *number*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  getWindowSize

▸ **getWindowSize**(): *[number, number]*

Defined in node_modules/@types/node/tty.d.ts:60

**Returns:** *[number, number]*

___

###  hasColors

▸ **hasColors**(`depth?`: undefined | number): *boolean*

Defined in node_modules/@types/node/tty.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`depth?` | undefined &#124; number |

**Returns:** *boolean*

▸ **hasColors**(`env?`: undefined | object): *boolean*

Defined in node_modules/@types/node/tty.d.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`env?` | undefined &#124; object |

**Returns:** *boolean*

▸ **hasColors**(`depth`: number, `env?`: undefined | object): *boolean*

Defined in node_modules/@types/node/tty.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`depth` | number |
`env?` | undefined &#124; object |

**Returns:** *boolean*

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

###  moveCursor

▸ **moveCursor**(`dx`: number, `dy`: number, `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/tty.d.ts:52

Moves this WriteStream's cursor relative to its current position.

**Parameters:**

Name | Type |
------ | ------ |
`dx` | number |
`dy` | number |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

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

*Overrides [Socket](_net_.socket.md).[on](_net_.socket.md#on)*

Defined in node_modules/@types/node/tty.d.ts:25

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "resize", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[on](_net_.socket.md#on)*

Defined in node_modules/@types/node/tty.d.ts:26

**Parameters:**

▪ **event**: *"resize"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[once](_net_.socket.md#once)*

Defined in node_modules/@types/node/tty.d.ts:28

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "resize", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[once](_net_.socket.md#once)*

Defined in node_modules/@types/node/tty.d.ts:29

**Parameters:**

▪ **event**: *"resize"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [Socket](_net_.socket.md).[pause](_net_.socket.md#pause)*

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

*Overrides [Socket](_net_.socket.md).[prependListener](_net_.socket.md#prependlistener)*

Defined in node_modules/@types/node/tty.d.ts:31

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "resize", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependListener](_net_.socket.md#prependlistener)*

Defined in node_modules/@types/node/tty.d.ts:32

**Parameters:**

▪ **event**: *"resize"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependOnceListener](_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tty.d.ts:34

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "resize", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependOnceListener](_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tty.d.ts:35

**Parameters:**

▪ **event**: *"resize"*

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

*Inherited from [Socket](_net_.socket.md).[ref](_net_.socket.md#ref)*

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

*Inherited from [Socket](_net_.socket.md).[resume](_net_.socket.md#resume)*

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

*Inherited from [Socket](_net_.socket.md).[setEncoding](_net_.socket.md#setencoding)*

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

*Inherited from [Socket](_net_.socket.md).[setKeepAlive](_net_.socket.md#setkeepalive)*

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

*Inherited from [Socket](_net_.socket.md).[setNoDelay](_net_.socket.md#setnodelay)*

Defined in node_modules/@types/node/net.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`noDelay?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  setTimeout

▸ **setTimeout**(`timeout`: number, `callback?`: undefined | function): *this*

*Inherited from [Socket](_net_.socket.md).[setTimeout](_net_.socket.md#settimeout)*

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

*Inherited from [Socket](_net_.socket.md).[unref](_net_.socket.md#unref)*

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

*Inherited from [Socket](_net_.socket.md).[write](_net_.socket.md#write)*

*Overrides [Hash](_crypto_.hash.md).[write](_crypto_.hash.md#write)*

Defined in node_modules/@types/node/net.d.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Uint8Array](../interfaces/uint8array.md) &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`str`: [Uint8Array](../interfaces/uint8array.md) | string, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [Socket](_net_.socket.md).[write](_net_.socket.md#write)*

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
