[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [Http2ServerResponse](_http2_.http2serverresponse.md)

# Class: Http2ServerResponse

## Hierarchy

  ↳ [Stream](_stream_.internal.stream.md)

  ↳ **Http2ServerResponse**

## Index

### Constructors

* [constructor](_http2_.http2serverresponse.md#constructor)

### Properties

* [connection](_http2_.http2serverresponse.md#connection)
* [finished](_http2_.http2serverresponse.md#finished)
* [headersSent](_http2_.http2serverresponse.md#headerssent)
* [sendDate](_http2_.http2serverresponse.md#senddate)
* [socket](_http2_.http2serverresponse.md#socket)
* [statusCode](_http2_.http2serverresponse.md#statuscode)
* [statusMessage](_http2_.http2serverresponse.md#statusmessage)
* [stream](_http2_.http2serverresponse.md#stream)
* [defaultMaxListeners](_http2_.http2serverresponse.md#static-defaultmaxlisteners)

### Methods

* [addListener](_http2_.http2serverresponse.md#addlistener)
* [addTrailers](_http2_.http2serverresponse.md#addtrailers)
* [createPushResponse](_http2_.http2serverresponse.md#createpushresponse)
* [emit](_http2_.http2serverresponse.md#emit)
* [end](_http2_.http2serverresponse.md#end)
* [eventNames](_http2_.http2serverresponse.md#eventnames)
* [getHeader](_http2_.http2serverresponse.md#getheader)
* [getHeaderNames](_http2_.http2serverresponse.md#getheadernames)
* [getHeaders](_http2_.http2serverresponse.md#getheaders)
* [getMaxListeners](_http2_.http2serverresponse.md#getmaxlisteners)
* [hasHeader](_http2_.http2serverresponse.md#hasheader)
* [listenerCount](_http2_.http2serverresponse.md#listenercount)
* [listeners](_http2_.http2serverresponse.md#listeners)
* [off](_http2_.http2serverresponse.md#off)
* [on](_http2_.http2serverresponse.md#on)
* [once](_http2_.http2serverresponse.md#once)
* [pipe](_http2_.http2serverresponse.md#pipe)
* [prependListener](_http2_.http2serverresponse.md#prependlistener)
* [prependOnceListener](_http2_.http2serverresponse.md#prependoncelistener)
* [rawListeners](_http2_.http2serverresponse.md#rawlisteners)
* [removeAllListeners](_http2_.http2serverresponse.md#removealllisteners)
* [removeHeader](_http2_.http2serverresponse.md#removeheader)
* [removeListener](_http2_.http2serverresponse.md#removelistener)
* [setHeader](_http2_.http2serverresponse.md#setheader)
* [setMaxListeners](_http2_.http2serverresponse.md#setmaxlisteners)
* [setTimeout](_http2_.http2serverresponse.md#settimeout)
* [write](_http2_.http2serverresponse.md#write)
* [writeContinue](_http2_.http2serverresponse.md#writecontinue)
* [writeHead](_http2_.http2serverresponse.md#writehead)
* [listenerCount](_http2_.http2serverresponse.md#static-listenercount)

## Constructors

###  constructor

\+ **new Http2ServerResponse**(`stream`: [ServerHttp2Stream](_http2_.serverhttp2stream.md)): *[Http2ServerResponse](_http2_.http2serverresponse.md)*

Defined in node_modules/@types/node/http2.d.ts:653

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ServerHttp2Stream](_http2_.serverhttp2stream.md) |

**Returns:** *[Http2ServerResponse](_http2_.http2serverresponse.md)*

## Properties

###  connection

• **connection**: *[Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)*

Defined in node_modules/@types/node/http2.d.ts:657

___

###  finished

• **finished**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:661

___

###  headersSent

• **headersSent**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:666

___

###  sendDate

• **sendDate**: *boolean*

Defined in node_modules/@types/node/http2.d.ts:668

___

###  socket

• **socket**: *[Socket](_net_.socket.md) | [TLSSocket](_tls_.tlssocket.md)*

Defined in node_modules/@types/node/http2.d.ts:671

___

###  statusCode

• **statusCode**: *number*

Defined in node_modules/@types/node/http2.d.ts:672

___

###  statusMessage

• **statusMessage**: *""*

Defined in node_modules/@types/node/http2.d.ts:673

___

###  stream

• **stream**: *[ServerHttp2Stream](_http2_.serverhttp2stream.md)*

Defined in node_modules/@types/node/http2.d.ts:674

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:682

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:683

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:684

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "finish", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:685

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:686

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:687

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/http2.d.ts:688

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

▸ **addTrailers**(`trailers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)): *void*

Defined in node_modules/@types/node/http2.d.ts:656

**Parameters:**

Name | Type |
------ | ------ |
`trailers` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |

**Returns:** *void*

___

###  createPushResponse

▸ **createPushResponse**(`headers`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md), `callback`: function): *void*

Defined in node_modules/@types/node/http2.d.ts:680

**Parameters:**

▪ **headers**: *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `res`: [Http2ServerResponse](_http2_.http2serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`res` | [Http2ServerResponse](_http2_.http2serverresponse.md) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:691

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `error`: [Error](../interfaces/error.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`error` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:693

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: stream.Readable): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:694

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | stream.Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: stream.Readable): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:695

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unpipe" |
`src` | stream.Readable |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/http2.d.ts:696

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`callback?`: undefined | function): *void*

Defined in node_modules/@types/node/http2.d.ts:658

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`data`: string | [Uint8Array](../interfaces/uint8array.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/http2.d.ts:659

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; [Uint8Array](../interfaces/uint8array.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`data`: string | [Uint8Array](../interfaces/uint8array.md), `encoding`: string, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/http2.d.ts:660

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; [Uint8Array](../interfaces/uint8array.md) |
`encoding` | string |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getHeader

▸ **getHeader**(`name`: string): *string*

Defined in node_modules/@types/node/http2.d.ts:662

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string*

___

###  getHeaderNames

▸ **getHeaderNames**(): *string[]*

Defined in node_modules/@types/node/http2.d.ts:663

**Returns:** *string[]*

___

###  getHeaders

▸ **getHeaders**(): *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

Defined in node_modules/@types/node/http2.d.ts:664

**Returns:** *[OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  hasHeader

▸ **hasHeader**(`name`: string): *boolean*

Defined in node_modules/@types/node/http2.d.ts:665

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

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

Defined in node_modules/@types/node/http2.d.ts:698

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:699

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:700

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "finish", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:701

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:702

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

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:703

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

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/http2.d.ts:704

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

Defined in node_modules/@types/node/http2.d.ts:706

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:707

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:708

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "finish", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:709

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:710

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:711

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/http2.d.ts:712

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

Defined in node_modules/@types/node/http2.d.ts:714

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:715

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:716

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "finish", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:717

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:718

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:719

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/http2.d.ts:720

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

Defined in node_modules/@types/node/http2.d.ts:722

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:723

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:724

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "finish", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:725

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:726

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:727

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/http2.d.ts:728

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

Defined in node_modules/@types/node/http2.d.ts:667

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

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

###  setHeader

▸ **setHeader**(`name`: string, `value`: number | string | string[]): *void*

Defined in node_modules/@types/node/http2.d.ts:669

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | number &#124; string &#124; string[] |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

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

Defined in node_modules/@types/node/http2.d.ts:670

**Parameters:**

Name | Type |
------ | ------ |
`msecs` | number |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  write

▸ **write**(`chunk`: string | [Uint8Array](../interfaces/uint8array.md), `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/http2.d.ts:675

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | string &#124; [Uint8Array](../interfaces/uint8array.md) |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: string | [Uint8Array](../interfaces/uint8array.md), `encoding`: string, `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/http2.d.ts:676

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | string &#124; [Uint8Array](../interfaces/uint8array.md) |
`encoding` | string |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  writeContinue

▸ **writeContinue**(): *void*

Defined in node_modules/@types/node/http2.d.ts:677

**Returns:** *void*

___

###  writeHead

▸ **writeHead**(`statusCode`: number, `headers?`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)): *this*

Defined in node_modules/@types/node/http2.d.ts:678

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |
`headers?` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |

**Returns:** *this*

▸ **writeHead**(`statusCode`: number, `statusMessage`: string, `headers?`: [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)): *this*

Defined in node_modules/@types/node/http2.d.ts:679

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |
`statusMessage` | string |
`headers?` | [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md) |

**Returns:** *this*

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
