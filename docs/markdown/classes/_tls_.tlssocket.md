[typescript](../README.md) › [Globals](../globals.md) › ["tls"](../modules/_tls_.md) › [TLSSocket](_tls_.tlssocket.md)

# Class: TLSSocket

## Hierarchy

  ↳ [Socket](_net_.socket.md)

  ↳ **TLSSocket**

## Implements

* [ReadableStream](../interfaces/nodejs.readablestream.md)
* [Writable](_stream_.internal.writable.md)

## Index

### Constructors

* [constructor](_tls_.tlssocket.md#constructor)

### Properties

* [alpnProtocol](_tls_.tlssocket.md#optional-alpnprotocol)
* [authorizationError](_tls_.tlssocket.md#authorizationerror)
* [authorized](_tls_.tlssocket.md#authorized)
* [bufferSize](_tls_.tlssocket.md#buffersize)
* [bytesRead](_tls_.tlssocket.md#bytesread)
* [bytesWritten](_tls_.tlssocket.md#byteswritten)
* [connecting](_tls_.tlssocket.md#connecting)
* [destroyed](_tls_.tlssocket.md#destroyed)
* [encrypted](_tls_.tlssocket.md#encrypted)
* [localAddress](_tls_.tlssocket.md#localaddress)
* [localPort](_tls_.tlssocket.md#localport)
* [readable](_tls_.tlssocket.md#readable)
* [readableHighWaterMark](_tls_.tlssocket.md#readablehighwatermark)
* [readableLength](_tls_.tlssocket.md#readablelength)
* [readableObjectMode](_tls_.tlssocket.md#readableobjectmode)
* [remoteAddress](_tls_.tlssocket.md#optional-remoteaddress)
* [remoteFamily](_tls_.tlssocket.md#optional-remotefamily)
* [remotePort](_tls_.tlssocket.md#optional-remoteport)
* [writable](_tls_.tlssocket.md#writable)
* [writableFinished](_tls_.tlssocket.md#writablefinished)
* [writableHighWaterMark](_tls_.tlssocket.md#writablehighwatermark)
* [writableLength](_tls_.tlssocket.md#writablelength)
* [writableObjectMode](_tls_.tlssocket.md#writableobjectmode)
* [defaultMaxListeners](_tls_.tlssocket.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_tls_.tlssocket.md#[symbol.asynciterator])
* [_destroy](_tls_.tlssocket.md#_destroy)
* [_final](_tls_.tlssocket.md#_final)
* [_read](_tls_.tlssocket.md#_read)
* [_write](_tls_.tlssocket.md#_write)
* [_writev](_tls_.tlssocket.md#optional-_writev)
* [addListener](_tls_.tlssocket.md#addlistener)
* [address](_tls_.tlssocket.md#address)
* [connect](_tls_.tlssocket.md#connect)
* [cork](_tls_.tlssocket.md#cork)
* [destroy](_tls_.tlssocket.md#destroy)
* [emit](_tls_.tlssocket.md#emit)
* [enableTrace](_tls_.tlssocket.md#enabletrace)
* [end](_tls_.tlssocket.md#end)
* [eventNames](_tls_.tlssocket.md#eventnames)
* [getCipher](_tls_.tlssocket.md#getcipher)
* [getMaxListeners](_tls_.tlssocket.md#getmaxlisteners)
* [getPeerCertificate](_tls_.tlssocket.md#getpeercertificate)
* [getProtocol](_tls_.tlssocket.md#getprotocol)
* [getSession](_tls_.tlssocket.md#getsession)
* [getTLSTicket](_tls_.tlssocket.md#gettlsticket)
* [isPaused](_tls_.tlssocket.md#ispaused)
* [listenerCount](_tls_.tlssocket.md#listenercount)
* [listeners](_tls_.tlssocket.md#listeners)
* [off](_tls_.tlssocket.md#off)
* [on](_tls_.tlssocket.md#on)
* [once](_tls_.tlssocket.md#once)
* [pause](_tls_.tlssocket.md#pause)
* [pipe](_tls_.tlssocket.md#pipe)
* [prependListener](_tls_.tlssocket.md#prependlistener)
* [prependOnceListener](_tls_.tlssocket.md#prependoncelistener)
* [push](_tls_.tlssocket.md#push)
* [rawListeners](_tls_.tlssocket.md#rawlisteners)
* [read](_tls_.tlssocket.md#read)
* [ref](_tls_.tlssocket.md#ref)
* [removeAllListeners](_tls_.tlssocket.md#removealllisteners)
* [removeListener](_tls_.tlssocket.md#removelistener)
* [renegotiate](_tls_.tlssocket.md#renegotiate)
* [resume](_tls_.tlssocket.md#resume)
* [setDefaultEncoding](_tls_.tlssocket.md#setdefaultencoding)
* [setEncoding](_tls_.tlssocket.md#setencoding)
* [setKeepAlive](_tls_.tlssocket.md#setkeepalive)
* [setMaxListeners](_tls_.tlssocket.md#setmaxlisteners)
* [setMaxSendFragment](_tls_.tlssocket.md#setmaxsendfragment)
* [setNoDelay](_tls_.tlssocket.md#setnodelay)
* [setTimeout](_tls_.tlssocket.md#settimeout)
* [uncork](_tls_.tlssocket.md#uncork)
* [unpipe](_tls_.tlssocket.md#unpipe)
* [unref](_tls_.tlssocket.md#unref)
* [unshift](_tls_.tlssocket.md#unshift)
* [wrap](_tls_.tlssocket.md#wrap)
* [write](_tls_.tlssocket.md#write)
* [from](_tls_.tlssocket.md#static-from)
* [listenerCount](_tls_.tlssocket.md#static-listenercount)

## Constructors

###  constructor

\+ **new TLSSocket**(`socket`: [Socket](_net_.socket.md), `options?`: [TLSSocketOptions](../interfaces/_tls_.tlssocketoptions.md)): *[TLSSocket](_tls_.tlssocket.md)*

*Overrides [Socket](_net_.socket.md).[constructor](_net_.socket.md#constructor)*

Defined in node_modules/@types/node/tls.d.ts:90

Construct a new tls.TLSSocket object from an existing TCP socket.

**Parameters:**

Name | Type |
------ | ------ |
`socket` | [Socket](_net_.socket.md) |
`options?` | [TLSSocketOptions](../interfaces/_tls_.tlssocketoptions.md) |

**Returns:** *[TLSSocket](_tls_.tlssocket.md)*

## Properties

### `Optional` alpnProtocol

• **alpnProtocol**? : *undefined | string*

Defined in node_modules/@types/node/tls.d.ts:115

String containing the selected ALPN protocol.
When ALPN has no selected protocol, tlsSocket.alpnProtocol equals false.

___

###  authorizationError

• **authorizationError**: *[Error](../interfaces/error.md)*

Defined in node_modules/@types/node/tls.d.ts:104

The reason why the peer's certificate has not been verified.
This property becomes available only when tlsSocket.authorized === false.

___

###  authorized

• **authorized**: *boolean*

Defined in node_modules/@types/node/tls.d.ts:99

A boolean that is true if the peer certificate was signed by one of the specified CAs, otherwise false.

___

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

###  encrypted

• **encrypted**: *boolean*

Defined in node_modules/@types/node/tls.d.ts:109

Static boolean value, always true.
May be used to distinguish TLS sockets from regular ones.

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

Defined in node_modules/@types/node/tls.d.ts:189

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "OCSPResponse", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[addListener](_net_.socket.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:190

**Parameters:**

▪ **event**: *"OCSPResponse"*

▪ **listener**: *function*

▸ (`response`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "secureConnect", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[addListener](_net_.socket.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:191

**Parameters:**

▪ **event**: *"secureConnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "session", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[addListener](_net_.socket.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:192

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "keylog", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[addListener](_net_.socket.md#addlistener)*

Defined in node_modules/@types/node/tls.d.ts:193

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |

**Returns:** *this*

___

###  address

▸ **address**(): *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

*Inherited from [Socket](_net_.socket.md).[address](_net_.socket.md#address)*

Defined in node_modules/@types/node/net.d.ts:74

**Returns:** *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

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

Defined in node_modules/@types/node/tls.d.ts:195

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "OCSPResponse", `response`: [Buffer](buffer.md)): *boolean*

*Overrides [Socket](_net_.socket.md).[emit](_net_.socket.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:196

**Parameters:**

Name | Type |
------ | ------ |
`event` | "OCSPResponse" |
`response` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "secureConnect"): *boolean*

*Overrides [Socket](_net_.socket.md).[emit](_net_.socket.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:197

**Parameters:**

Name | Type |
------ | ------ |
`event` | "secureConnect" |

**Returns:** *boolean*

▸ **emit**(`event`: "session", `session`: [Buffer](buffer.md)): *boolean*

*Overrides [Socket](_net_.socket.md).[emit](_net_.socket.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:198

**Parameters:**

Name | Type |
------ | ------ |
`event` | "session" |
`session` | [Buffer](buffer.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "keylog", `line`: [Buffer](buffer.md)): *boolean*

*Overrides [Socket](_net_.socket.md).[emit](_net_.socket.md#emit)*

Defined in node_modules/@types/node/tls.d.ts:199

**Parameters:**

Name | Type |
------ | ------ |
`event` | "keylog" |
`line` | [Buffer](buffer.md) |

**Returns:** *boolean*

___

###  enableTrace

▸ **enableTrace**(): *void*

Defined in node_modules/@types/node/tls.d.ts:187

When enabled, TLS packet trace information is written to `stderr`. This can be
used to debug TLS connection problems.

Note: The format of the output is identical to the output of `openssl s_client
-trace` or `openssl s_server -trace`. While it is produced by OpenSSL's
`SSL_trace()` function, the format is undocumented, can change without notice,
and should not be relied on.

**Returns:** *void*

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

###  getCipher

▸ **getCipher**(): *[CipherNameAndProtocol](../interfaces/_tls_.ciphernameandprotocol.md)*

Defined in node_modules/@types/node/tls.d.ts:122

Returns an object representing the cipher name and the SSL/TLS protocol version of the current connection.

**Returns:** *[CipherNameAndProtocol](../interfaces/_tls_.ciphernameandprotocol.md)*

Returns an object representing the cipher name
and the SSL/TLS protocol version of the current connection.

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [ReadableStream](../interfaces/nodejs.readablestream.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  getPeerCertificate

▸ **getPeerCertificate**(`detailed`: true): *[DetailedPeerCertificate](../interfaces/_tls_.detailedpeercertificate.md)*

Defined in node_modules/@types/node/tls.d.ts:132

Returns an object representing the peer's certificate.
The returned object has some properties corresponding to the field of the certificate.
If detailed argument is true the full chain with issuer property will be returned,
if false only the top certificate without issuer property.
If the peer does not provide a certificate, it returns null or an empty object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`detailed` | true | If true; the full chain with issuer property will be returned. |

**Returns:** *[DetailedPeerCertificate](../interfaces/_tls_.detailedpeercertificate.md)*

An object representing the peer's certificate.

▸ **getPeerCertificate**(`detailed?`: undefined | false): *[PeerCertificate](../interfaces/_tls_.peercertificate.md)*

Defined in node_modules/@types/node/tls.d.ts:133

**Parameters:**

Name | Type |
------ | ------ |
`detailed?` | undefined &#124; false |

**Returns:** *[PeerCertificate](../interfaces/_tls_.peercertificate.md)*

▸ **getPeerCertificate**(`detailed?`: undefined | false | true): *[PeerCertificate](../interfaces/_tls_.peercertificate.md) | [DetailedPeerCertificate](../interfaces/_tls_.detailedpeercertificate.md)*

Defined in node_modules/@types/node/tls.d.ts:134

**Parameters:**

Name | Type |
------ | ------ |
`detailed?` | undefined &#124; false &#124; true |

**Returns:** *[PeerCertificate](../interfaces/_tls_.peercertificate.md) | [DetailedPeerCertificate](../interfaces/_tls_.detailedpeercertificate.md)*

___

###  getProtocol

▸ **getProtocol**(): *string | null*

Defined in node_modules/@types/node/tls.d.ts:142

Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
The value `'unknown'` will be returned for connected sockets that have not completed the handshaking process.
The value `null` will be returned for server sockets or disconnected client sockets.
See https://www.openssl.org/docs/man1.0.2/ssl/SSL_get_version.html for more information.

**Returns:** *string | null*

negotiated SSL/TLS protocol version of the current connection

___

###  getSession

▸ **getSession**(): *[Buffer](buffer.md) | undefined*

Defined in node_modules/@types/node/tls.d.ts:147

Could be used to speed up handshake establishment when reconnecting to the server.

**Returns:** *[Buffer](buffer.md) | undefined*

ASN.1 encoded TLS session or undefined if none was negotiated.

___

###  getTLSTicket

▸ **getTLSTicket**(): *[Buffer](buffer.md) | undefined*

Defined in node_modules/@types/node/tls.d.ts:153

NOTE: Works only with client TLS sockets.
Useful only for debugging, for session reuse provide session option to tls.connect().

**Returns:** *[Buffer](buffer.md) | undefined*

TLS session ticket or undefined if none was negotiated.

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

*Overrides [Socket](_net_.socket.md).[on](_net_.socket.md#on)*

Defined in node_modules/@types/node/tls.d.ts:201

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "OCSPResponse", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[on](_net_.socket.md#on)*

Defined in node_modules/@types/node/tls.d.ts:202

**Parameters:**

▪ **event**: *"OCSPResponse"*

▪ **listener**: *function*

▸ (`response`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "secureConnect", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[on](_net_.socket.md#on)*

Defined in node_modules/@types/node/tls.d.ts:203

**Parameters:**

▪ **event**: *"secureConnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "session", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[on](_net_.socket.md#on)*

Defined in node_modules/@types/node/tls.d.ts:204

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "keylog", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[on](_net_.socket.md#on)*

Defined in node_modules/@types/node/tls.d.ts:205

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[once](_net_.socket.md#once)*

Defined in node_modules/@types/node/tls.d.ts:207

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "OCSPResponse", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[once](_net_.socket.md#once)*

Defined in node_modules/@types/node/tls.d.ts:208

**Parameters:**

▪ **event**: *"OCSPResponse"*

▪ **listener**: *function*

▸ (`response`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "secureConnect", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[once](_net_.socket.md#once)*

Defined in node_modules/@types/node/tls.d.ts:209

**Parameters:**

▪ **event**: *"secureConnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "session", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[once](_net_.socket.md#once)*

Defined in node_modules/@types/node/tls.d.ts:210

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "keylog", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[once](_net_.socket.md#once)*

Defined in node_modules/@types/node/tls.d.ts:211

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |

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

Defined in node_modules/@types/node/tls.d.ts:213

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "OCSPResponse", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependListener](_net_.socket.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:214

**Parameters:**

▪ **event**: *"OCSPResponse"*

▪ **listener**: *function*

▸ (`response`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "secureConnect", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependListener](_net_.socket.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:215

**Parameters:**

▪ **event**: *"secureConnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "session", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependListener](_net_.socket.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:216

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "keylog", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependListener](_net_.socket.md#prependlistener)*

Defined in node_modules/@types/node/tls.d.ts:217

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependOnceListener](_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:219

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "OCSPResponse", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependOnceListener](_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:220

**Parameters:**

▪ **event**: *"OCSPResponse"*

▪ **listener**: *function*

▸ (`response`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "secureConnect", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependOnceListener](_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:221

**Parameters:**

▪ **event**: *"secureConnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "session", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependOnceListener](_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:222

**Parameters:**

▪ **event**: *"session"*

▪ **listener**: *function*

▸ (`session`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`session` | [Buffer](buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "keylog", `listener`: function): *this*

*Overrides [Socket](_net_.socket.md).[prependOnceListener](_net_.socket.md#prependoncelistener)*

Defined in node_modules/@types/node/tls.d.ts:223

**Parameters:**

▪ **event**: *"keylog"*

▪ **listener**: *function*

▸ (`line`: [Buffer](buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Buffer](buffer.md) |

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

###  renegotiate

▸ **renegotiate**(`options`: object, `callback`: function): *undefined | boolean*

Defined in node_modules/@types/node/tls.d.ts:165

Initiate TLS renegotiation process.

NOTE: Can be used to request peer's certificate after the secure connection has been established.
ANOTHER NOTE: When running as the server, socket will be destroyed with an error after handshakeTimeout timeout.

**Parameters:**

▪ **options**: *object*

The options may contain the following fields: rejectUnauthorized,
requestCert (See tls.createServer() for details).

Name | Type |
------ | ------ |
`rejectUnauthorized?` | undefined &#124; false &#124; true |
`requestCert?` | undefined &#124; false &#124; true |

▪ **callback**: *function*

callback(err) will be executed with null as err, once the renegotiation
is successfully completed.

▸ (`err`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *undefined | boolean*

`undefined` when socket is destroy, `false` if negotiaion can't be initiated.

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

###  setMaxSendFragment

▸ **setMaxSendFragment**(`size`: number): *boolean*

Defined in node_modules/@types/node/tls.d.ts:176

Set maximum TLS fragment size (default and maximum value is: 16384, minimum is: 512).
Smaller fragment size decreases buffering latency on the client: large fragments are buffered by
the TLS layer until the entire fragment is received and its integrity is verified;
large fragments can span multiple roundtrips, and their processing can be delayed due to packet
loss or reordering. However, smaller fragments add extra TLS framing bytes and CPU overhead,
which may decrease overall server throughput.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | TLS fragment size (default and maximum value is: 16384, minimum is: 512). |

**Returns:** *boolean*

Returns true on success, false otherwise.

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
