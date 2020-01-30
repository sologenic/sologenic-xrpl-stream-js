[typescript](../README.md) › [Globals](../globals.md) › ["zlib"](../modules/_zlib_.md) › [Gunzip](_zlib_.gunzip.md)

# Interface: Gunzip

## Hierarchy

  ↳ [Transform](../classes/_stream_.internal.transform.md)

* [Zlib](_zlib_.zlib.md)

  ↳ **Gunzip**

## Implements

* [ReadableStream](nodejs.readablestream.md)
* [Writable](../classes/_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_zlib_.gunzip.md#constructor)

### Properties

* [bytesRead](_zlib_.gunzip.md#bytesread)
* [bytesWritten](_zlib_.gunzip.md#byteswritten)
* [destroyed](_zlib_.gunzip.md#destroyed)
* [readable](_zlib_.gunzip.md#readable)
* [readableHighWaterMark](_zlib_.gunzip.md#readablehighwatermark)
* [readableLength](_zlib_.gunzip.md#readablelength)
* [readableObjectMode](_zlib_.gunzip.md#readableobjectmode)
* [shell](_zlib_.gunzip.md#optional-shell)
* [writable](_zlib_.gunzip.md#writable)
* [writableFinished](_zlib_.gunzip.md#writablefinished)
* [writableHighWaterMark](_zlib_.gunzip.md#writablehighwatermark)
* [writableLength](_zlib_.gunzip.md#writablelength)
* [writableObjectMode](_zlib_.gunzip.md#writableobjectmode)
* [defaultMaxListeners](_zlib_.gunzip.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_zlib_.gunzip.md#[symbol.asynciterator])
* [_destroy](_zlib_.gunzip.md#_destroy)
* [_final](_zlib_.gunzip.md#_final)
* [_flush](_zlib_.gunzip.md#_flush)
* [_read](_zlib_.gunzip.md#_read)
* [_transform](_zlib_.gunzip.md#_transform)
* [_write](_zlib_.gunzip.md#_write)
* [_writev](_zlib_.gunzip.md#optional-_writev)
* [addListener](_zlib_.gunzip.md#addlistener)
* [close](_zlib_.gunzip.md#close)
* [cork](_zlib_.gunzip.md#cork)
* [destroy](_zlib_.gunzip.md#destroy)
* [emit](_zlib_.gunzip.md#emit)
* [end](_zlib_.gunzip.md#end)
* [eventNames](_zlib_.gunzip.md#eventnames)
* [flush](_zlib_.gunzip.md#flush)
* [getMaxListeners](_zlib_.gunzip.md#getmaxlisteners)
* [isPaused](_zlib_.gunzip.md#ispaused)
* [listenerCount](_zlib_.gunzip.md#listenercount)
* [listeners](_zlib_.gunzip.md#listeners)
* [off](_zlib_.gunzip.md#off)
* [on](_zlib_.gunzip.md#on)
* [once](_zlib_.gunzip.md#once)
* [pause](_zlib_.gunzip.md#pause)
* [pipe](_zlib_.gunzip.md#pipe)
* [prependListener](_zlib_.gunzip.md#prependlistener)
* [prependOnceListener](_zlib_.gunzip.md#prependoncelistener)
* [push](_zlib_.gunzip.md#push)
* [rawListeners](_zlib_.gunzip.md#rawlisteners)
* [read](_zlib_.gunzip.md#read)
* [removeAllListeners](_zlib_.gunzip.md#removealllisteners)
* [removeListener](_zlib_.gunzip.md#removelistener)
* [resume](_zlib_.gunzip.md#resume)
* [setDefaultEncoding](_zlib_.gunzip.md#setdefaultencoding)
* [setEncoding](_zlib_.gunzip.md#setencoding)
* [setMaxListeners](_zlib_.gunzip.md#setmaxlisteners)
* [uncork](_zlib_.gunzip.md#uncork)
* [unpipe](_zlib_.gunzip.md#unpipe)
* [unshift](_zlib_.gunzip.md#unshift)
* [wrap](_zlib_.gunzip.md#wrap)
* [write](_zlib_.gunzip.md#write)
* [from](_zlib_.gunzip.md#static-from)
* [listenerCount](_zlib_.gunzip.md#static-listenercount)

## Constructors

###  constructor

\+ **new Gunzip**(`opts?`: [TransformOptions](_stream_.internal.transformoptions.md)): *[Gunzip](_zlib_.gunzip.md)*

*Inherited from [CipherCCM](_crypto_.cipherccm.md).[constructor](_crypto_.cipherccm.md#constructor)*

*Overrides [Duplex](../classes/_stream_.internal.duplex.md).[constructor](../classes/_stream_.internal.duplex.md#constructor)*

Defined in node_modules/@types/node/stream.d.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [TransformOptions](_stream_.internal.transformoptions.md) |

**Returns:** *[Gunzip](_zlib_.gunzip.md)*

## Properties

###  bytesRead

• **bytesRead**: *number*

*Inherited from [Zlib](_zlib_.zlib.md).[bytesRead](_zlib_.zlib.md#bytesread)*

Defined in node_modules/@types/node/zlib.d.ts:47

**`deprecated`** Use bytesWritten instead.

___

###  bytesWritten

• **bytesWritten**: *number*

*Inherited from [Zlib](_zlib_.zlib.md).[bytesWritten](_zlib_.zlib.md#byteswritten)*

Defined in node_modules/@types/node/zlib.d.ts:48

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[destroyed](../classes/_crypto_.hash.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:30

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

### `Optional` shell

• **shell**? : *boolean | string*

*Inherited from [Zlib](_zlib_.zlib.md).[shell](_zlib_.zlib.md#optional-shell)*

Defined in node_modules/@types/node/zlib.d.ts:49

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

###  _flush

▸ **_flush**(`callback`: [TransformCallback](../classes/_stream_.internal.md#static-transformcallback)): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[_flush](../classes/_crypto_.hash.md#_flush)*

Defined in node_modules/@types/node/stream.d.ts:256

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [TransformCallback](../classes/_stream_.internal.md#static-transformcallback) |

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

###  _transform

▸ **_transform**(`chunk`: any, `encoding`: string, `callback`: [TransformCallback](../classes/_stream_.internal.md#static-transformcallback)): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[_transform](../classes/_crypto_.hash.md#_transform)*

Defined in node_modules/@types/node/stream.d.ts:255

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`callback` | [TransformCallback](../classes/_stream_.internal.md#static-transformcallback) |

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

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:54

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. readable
5. error

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:55

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:56

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:57

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:58

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[addListener](../classes/_crypto_.hash.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:59

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

▸ **close**(`callback?`: undefined | function): *void*

*Inherited from [Zlib](_zlib_.zlib.md).[close](_zlib_.zlib.md#close)*

Defined in node_modules/@types/node/zlib.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

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

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: any): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | any |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](error.md)): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[emit](../classes/_crypto_.hash.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[end](../classes/_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[end](../classes/_crypto_.hash.md#end)*

Defined in node_modules/@types/node/stream.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [Hash](../classes/_crypto_.hash.md).[end](../classes/_crypto_.hash.md#end)*

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

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[eventNames](isologenictxhandler.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  flush

▸ **flush**(`kind?`: number | function, `callback?`: undefined | function): *void*

*Inherited from [Zlib](_zlib_.zlib.md).[flush](_zlib_.zlib.md#flush)*

Defined in node_modules/@types/node/zlib.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`kind?` | number &#124; function |
`callback?` | undefined &#124; function |

**Returns:** *void*

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

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:68

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:69

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:70

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:71

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:72

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[on](../classes/_crypto_.hash.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/stream.d.ts:73

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

*Inherited from [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:75

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:76

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:77

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:78

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:79

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[once](../classes/_crypto_.hash.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/stream.d.ts:80

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

*Inherited from [Hash](../classes/_crypto_.hash.md).[pause](../classes/_crypto_.hash.md#pause)*

Defined in node_modules/@types/node/stream.d.ts:35

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

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:82

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:83

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:84

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:85

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:86

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependListener](../classes/_crypto_.hash.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:87

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

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:89

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:90

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:91

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:92

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:93

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[prependOnceListener](../classes/_crypto_.hash.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:94

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

*Inherited from [Hash](../classes/_crypto_.hash.md).[resume](../classes/_crypto_.hash.md#resume)*

Defined in node_modules/@types/node/stream.d.ts:36

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

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [Hash](../classes/_crypto_.hash.md).[setEncoding](../classes/_crypto_.hash.md#setencoding)*

Defined in node_modules/@types/node/stream.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

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

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[write](../classes/_crypto_.hash.md#write)*

Defined in node_modules/@types/node/stream.d.ts:231

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

*Inherited from [Hash](../classes/_crypto_.hash.md).[write](../classes/_crypto_.hash.md#write)*

Defined in node_modules/@types/node/stream.d.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
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
