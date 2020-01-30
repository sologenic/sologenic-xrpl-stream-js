[typescript](../README.md) › [Globals](../globals.md) › ["process"](../modules/_process_.md) › [__global](../modules/_process_.__global.md) › [NodeJS](../modules/_process_.__global.nodejs.md) › [WriteStream](_process_.__global.nodejs.writestream.md)

# Interface: WriteStream

## Hierarchy

  ↳ [WriteStream](../classes/_tty_.writestream.md)

  ↳ **WriteStream**

## Implements

* [ReadableStream](nodejs.readablestream.md)
* [Writable](../classes/_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_process_.__global.nodejs.writestream.md#constructor)

### Properties

* [bufferSize](_process_.__global.nodejs.writestream.md#buffersize)
* [bytesRead](_process_.__global.nodejs.writestream.md#bytesread)
* [bytesWritten](_process_.__global.nodejs.writestream.md#byteswritten)
* [columns](_process_.__global.nodejs.writestream.md#columns)
* [connecting](_process_.__global.nodejs.writestream.md#connecting)
* [destroyed](_process_.__global.nodejs.writestream.md#destroyed)
* [isTTY](_process_.__global.nodejs.writestream.md#istty)
* [localAddress](_process_.__global.nodejs.writestream.md#localaddress)
* [localPort](_process_.__global.nodejs.writestream.md#localport)
* [readable](_process_.__global.nodejs.writestream.md#readable)
* [readableHighWaterMark](_process_.__global.nodejs.writestream.md#readablehighwatermark)
* [readableLength](_process_.__global.nodejs.writestream.md#readablelength)
* [readableObjectMode](_process_.__global.nodejs.writestream.md#readableobjectmode)
* [remoteAddress](_process_.__global.nodejs.writestream.md#optional-remoteaddress)
* [remoteFamily](_process_.__global.nodejs.writestream.md#optional-remotefamily)
* [remotePort](_process_.__global.nodejs.writestream.md#optional-remoteport)
* [rows](_process_.__global.nodejs.writestream.md#rows)
* [writable](_process_.__global.nodejs.writestream.md#writable)
* [writableFinished](_process_.__global.nodejs.writestream.md#writablefinished)
* [writableHighWaterMark](_process_.__global.nodejs.writestream.md#writablehighwatermark)
* [writableLength](_process_.__global.nodejs.writestream.md#writablelength)
* [writableObjectMode](_process_.__global.nodejs.writestream.md#writableobjectmode)
* [defaultMaxListeners](_process_.__global.nodejs.writestream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_process_.__global.nodejs.writestream.md#[symbol.asynciterator])
* [_destroy](_process_.__global.nodejs.writestream.md#_destroy)
* [_final](_process_.__global.nodejs.writestream.md#_final)
* [_read](_process_.__global.nodejs.writestream.md#_read)
* [_write](_process_.__global.nodejs.writestream.md#_write)
* [_writev](_process_.__global.nodejs.writestream.md#optional-_writev)
* [addListener](_process_.__global.nodejs.writestream.md#addlistener)
* [address](_process_.__global.nodejs.writestream.md#address)
* [clearLine](_process_.__global.nodejs.writestream.md#clearline)
* [clearScreenDown](_process_.__global.nodejs.writestream.md#clearscreendown)
* [connect](_process_.__global.nodejs.writestream.md#connect)
* [cork](_process_.__global.nodejs.writestream.md#cork)
* [cursorTo](_process_.__global.nodejs.writestream.md#cursorto)
* [destroy](_process_.__global.nodejs.writestream.md#destroy)
* [emit](_process_.__global.nodejs.writestream.md#emit)
* [end](_process_.__global.nodejs.writestream.md#end)
* [eventNames](_process_.__global.nodejs.writestream.md#eventnames)
* [getColorDepth](_process_.__global.nodejs.writestream.md#getcolordepth)
* [getMaxListeners](_process_.__global.nodejs.writestream.md#getmaxlisteners)
* [getWindowSize](_process_.__global.nodejs.writestream.md#getwindowsize)
* [hasColors](_process_.__global.nodejs.writestream.md#hascolors)
* [isPaused](_process_.__global.nodejs.writestream.md#ispaused)
* [listenerCount](_process_.__global.nodejs.writestream.md#listenercount)
* [listeners](_process_.__global.nodejs.writestream.md#listeners)
* [moveCursor](_process_.__global.nodejs.writestream.md#movecursor)
* [off](_process_.__global.nodejs.writestream.md#off)
* [on](_process_.__global.nodejs.writestream.md#on)
* [once](_process_.__global.nodejs.writestream.md#once)
* [pause](_process_.__global.nodejs.writestream.md#pause)
* [pipe](_process_.__global.nodejs.writestream.md#pipe)
* [prependListener](_process_.__global.nodejs.writestream.md#prependlistener)
* [prependOnceListener](_process_.__global.nodejs.writestream.md#prependoncelistener)
* [push](_process_.__global.nodejs.writestream.md#push)
* [rawListeners](_process_.__global.nodejs.writestream.md#rawlisteners)
* [read](_process_.__global.nodejs.writestream.md#read)
* [ref](_process_.__global.nodejs.writestream.md#ref)
* [removeAllListeners](_process_.__global.nodejs.writestream.md#removealllisteners)
* [removeListener](_process_.__global.nodejs.writestream.md#removelistener)
* [resume](_process_.__global.nodejs.writestream.md#resume)
* [setDefaultEncoding](_process_.__global.nodejs.writestream.md#setdefaultencoding)
* [setEncoding](_process_.__global.nodejs.writestream.md#setencoding)
* [setKeepAlive](_process_.__global.nodejs.writestream.md#setkeepalive)
* [setMaxListeners](_process_.__global.nodejs.writestream.md#setmaxlisteners)
* [setNoDelay](_process_.__global.nodejs.writestream.md#setnodelay)
* [setTimeout](_process_.__global.nodejs.writestream.md#settimeout)
* [uncork](_process_.__global.nodejs.writestream.md#uncork)
* [unpipe](_process_.__global.nodejs.writestream.md#unpipe)
* [unref](_process_.__global.nodejs.writestream.md#unref)
* [unshift](_process_.__global.nodejs.writestream.md#unshift)
* [wrap](_process_.__global.nodejs.writestream.md#wrap)
* [write](_process_.__global.nodejs.writestream.md#write)
* [from](_process_.__global.nodejs.writestream.md#static-from)
* [listenerCount](_process_.__global.nodejs.writestream.md#static-listenercount)

## Constructors

###  constructor

\+ **new WriteStream**(`fd`: number): *[WriteStream](_process_.__global.nodejs.writestream.md)*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[constructor](_process_.__global.nodejs.writestream.md#constructor)*

*Overrides [Socket](../classes/_net_.socket.md).[constructor](../classes/_net_.socket.md#constructor)*

Defined in node_modules/@types/node/tty.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |

**Returns:** *[WriteStream](_process_.__global.nodejs.writestream.md)*

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

###  columns

• **columns**: *number*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[columns](_process_.__global.nodejs.writestream.md#columns)*

Defined in node_modules/@types/node/tty.d.ts:61

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

###  isTTY

• **isTTY**: *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[isTTY](_process_.__global.nodejs.writestream.md#istty)*

Defined in node_modules/@types/node/tty.d.ts:63

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

###  rows

• **rows**: *number*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[rows](_process_.__global.nodejs.writestream.md#rows)*

Defined in node_modules/@types/node/tty.d.ts:62

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[addListener](_process_.__global.nodejs.writestream.md#addlistener)*

*Overrides [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[addListener](_process_.__global.nodejs.writestream.md#addlistener)*

*Overrides [Socket](../classes/_net_.socket.md).[addListener](../classes/_net_.socket.md#addlistener)*

Defined in node_modules/@types/node/tty.d.ts:20

**Parameters:**

▪ **event**: *"resize"*

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

###  clearLine

▸ **clearLine**(`dir`: [Direction](../modules/_readline_.md#direction), `callback?`: undefined | function): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[clearLine](_process_.__global.nodejs.writestream.md#clearline)*

Defined in node_modules/@types/node/tty.d.ts:40

Clears the current line of this WriteStream in a direction identified by `dir`.

**Parameters:**

Name | Type |
------ | ------ |
`dir` | [Direction](../modules/_readline_.md#direction) |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  clearScreenDown

▸ **clearScreenDown**(`callback?`: undefined | function): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[clearScreenDown](_process_.__global.nodejs.writestream.md#clearscreendown)*

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

###  cursorTo

▸ **cursorTo**(`x`: number, `y`: number, `callback?`: undefined | function): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[cursorTo](_process_.__global.nodejs.writestream.md#cursorto)*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[emit](_process_.__global.nodejs.writestream.md#emit)*

*Overrides [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

Defined in node_modules/@types/node/tty.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "resize"): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[emit](_process_.__global.nodejs.writestream.md#emit)*

*Overrides [Socket](../classes/_net_.socket.md).[emit](../classes/_net_.socket.md#emit)*

Defined in node_modules/@types/node/tty.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`event` | "resize" |

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

###  getColorDepth

▸ **getColorDepth**(`env?`: undefined | object): *number*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[getColorDepth](_process_.__global.nodejs.writestream.md#getcolordepth)*

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

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[getMaxListeners](isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  getWindowSize

▸ **getWindowSize**(): *[number, number]*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[getWindowSize](_process_.__global.nodejs.writestream.md#getwindowsize)*

Defined in node_modules/@types/node/tty.d.ts:60

**Returns:** *[number, number]*

___

###  hasColors

▸ **hasColors**(`depth?`: undefined | number): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[hasColors](_process_.__global.nodejs.writestream.md#hascolors)*

Defined in node_modules/@types/node/tty.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`depth?` | undefined &#124; number |

**Returns:** *boolean*

▸ **hasColors**(`env?`: undefined | object): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[hasColors](_process_.__global.nodejs.writestream.md#hascolors)*

Defined in node_modules/@types/node/tty.d.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`env?` | undefined &#124; object |

**Returns:** *boolean*

▸ **hasColors**(`depth`: number, `env?`: undefined | object): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[hasColors](_process_.__global.nodejs.writestream.md#hascolors)*

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

###  moveCursor

▸ **moveCursor**(`dx`: number, `dy`: number, `callback?`: undefined | function): *boolean*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[moveCursor](_process_.__global.nodejs.writestream.md#movecursor)*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[on](_process_.__global.nodejs.writestream.md#on)*

*Overrides [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[on](_process_.__global.nodejs.writestream.md#on)*

*Overrides [Socket](../classes/_net_.socket.md).[on](../classes/_net_.socket.md#on)*

Defined in node_modules/@types/node/tty.d.ts:26

**Parameters:**

▪ **event**: *"resize"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[once](_process_.__global.nodejs.writestream.md#once)*

*Overrides [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[once](_process_.__global.nodejs.writestream.md#once)*

*Overrides [Socket](../classes/_net_.socket.md).[once](../classes/_net_.socket.md#once)*

Defined in node_modules/@types/node/tty.d.ts:29

**Parameters:**

▪ **event**: *"resize"*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[prependListener](_process_.__global.nodejs.writestream.md#prependlistener)*

*Overrides [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[prependListener](_process_.__global.nodejs.writestream.md#prependlistener)*

*Overrides [Socket](../classes/_net_.socket.md).[prependListener](../classes/_net_.socket.md#prependlistener)*

Defined in node_modules/@types/node/tty.d.ts:32

**Parameters:**

▪ **event**: *"resize"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[prependOnceListener](_process_.__global.nodejs.writestream.md#prependoncelistener)*

*Overrides [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

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

*Inherited from [WriteStream](_process_.__global.nodejs.writestream.md).[prependOnceListener](_process_.__global.nodejs.writestream.md#prependoncelistener)*

*Overrides [Socket](../classes/_net_.socket.md).[prependOnceListener](../classes/_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tty.d.ts:35

**Parameters:**

▪ **event**: *"resize"*

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
