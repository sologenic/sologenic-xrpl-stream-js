[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md)

# Interface: SecureClientSessionOptions

## Hierarchy

  ↳ [ClientSessionOptions](_http2_.clientsessionoptions.md)

  ↳ [ConnectionOptions](_tls_.connectionoptions.md)

  ↳ **SecureClientSessionOptions**

## Index

### Properties

* [ALPNProtocols](_http2_.secureclientsessionoptions.md#optional-alpnprotocols)
* [SNICallback](_http2_.secureclientsessionoptions.md#optional-snicallback)
* [ca](_http2_.secureclientsessionoptions.md#optional-ca)
* [cert](_http2_.secureclientsessionoptions.md#optional-cert)
* [checkServerIdentity](_http2_.secureclientsessionoptions.md#optional-checkserveridentity)
* [ciphers](_http2_.secureclientsessionoptions.md#optional-ciphers)
* [clientCertEngine](_http2_.secureclientsessionoptions.md#optional-clientcertengine)
* [createConnection](_http2_.secureclientsessionoptions.md#optional-createconnection)
* [crl](_http2_.secureclientsessionoptions.md#optional-crl)
* [dhparam](_http2_.secureclientsessionoptions.md#optional-dhparam)
* [ecdhCurve](_http2_.secureclientsessionoptions.md#optional-ecdhcurve)
* [enableTrace](_http2_.secureclientsessionoptions.md#optional-enabletrace)
* [honorCipherOrder](_http2_.secureclientsessionoptions.md#optional-honorcipherorder)
* [host](_http2_.secureclientsessionoptions.md#optional-host)
* [key](_http2_.secureclientsessionoptions.md#optional-key)
* [lookup](_http2_.secureclientsessionoptions.md#optional-lookup)
* [maxDeflateDynamicTableSize](_http2_.secureclientsessionoptions.md#optional-maxdeflatedynamictablesize)
* [maxHeaderListPairs](_http2_.secureclientsessionoptions.md#optional-maxheaderlistpairs)
* [maxOutstandingPings](_http2_.secureclientsessionoptions.md#optional-maxoutstandingpings)
* [maxReservedRemoteStreams](_http2_.secureclientsessionoptions.md#optional-maxreservedremotestreams)
* [maxSendHeaderBlockLength](_http2_.secureclientsessionoptions.md#optional-maxsendheaderblocklength)
* [maxSessionMemory](_http2_.secureclientsessionoptions.md#optional-maxsessionmemory)
* [maxVersion](_http2_.secureclientsessionoptions.md#optional-maxversion)
* [minDHSize](_http2_.secureclientsessionoptions.md#optional-mindhsize)
* [minVersion](_http2_.secureclientsessionoptions.md#optional-minversion)
* [paddingStrategy](_http2_.secureclientsessionoptions.md#optional-paddingstrategy)
* [passphrase](_http2_.secureclientsessionoptions.md#optional-passphrase)
* [path](_http2_.secureclientsessionoptions.md#optional-path)
* [peerMaxConcurrentStreams](_http2_.secureclientsessionoptions.md#optional-peermaxconcurrentstreams)
* [pfx](_http2_.secureclientsessionoptions.md#optional-pfx)
* [port](_http2_.secureclientsessionoptions.md#optional-port)
* [rejectUnauthorized](_http2_.secureclientsessionoptions.md#optional-rejectunauthorized)
* [requestCert](_http2_.secureclientsessionoptions.md#optional-requestcert)
* [secureContext](_http2_.secureclientsessionoptions.md#optional-securecontext)
* [secureOptions](_http2_.secureclientsessionoptions.md#optional-secureoptions)
* [secureProtocol](_http2_.secureclientsessionoptions.md#optional-secureprotocol)
* [selectPadding](_http2_.secureclientsessionoptions.md#optional-selectpadding)
* [servername](_http2_.secureclientsessionoptions.md#optional-servername)
* [session](_http2_.secureclientsessionoptions.md#optional-session)
* [sessionIdContext](_http2_.secureclientsessionoptions.md#optional-sessionidcontext)
* [settings](_http2_.secureclientsessionoptions.md#optional-settings)
* [socket](_http2_.secureclientsessionoptions.md#optional-socket)
* [timeout](_http2_.secureclientsessionoptions.md#optional-timeout)

## Properties

### `Optional` ALPNProtocols

• **ALPNProtocols**? : *string[] | [Uint8Array](uint8array.md)[] | [Uint8Array](uint8array.md)*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[ALPNProtocols](_http2_.secureclientsessionoptions.md#optional-alpnprotocols)*

Defined in node_modules/@types/node/tls.d.ts:248

An array of strings or a Buffer naming possible ALPN protocols.
(Protocols should be ordered by their priority.)

___

### `Optional` SNICallback

• **SNICallback**? : *undefined | function*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[SNICallback](_http2_.secureclientsessionoptions.md#optional-snicallback)*

Defined in node_modules/@types/node/tls.d.ts:258

SNICallback(servername, cb) <Function> A function that will be
called if the client supports SNI TLS extension. Two arguments
will be passed when called: servername and cb. SNICallback should
invoke cb(null, ctx), where ctx is a SecureContext instance.
(tls.createSecureContext(...) can be used to get a proper
SecureContext.) If SNICallback wasn't provided the default callback
with high-level API will be used (see below).

___

### `Optional` ca

• **ca**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md)›*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[ca](_http2_.secureclientsessionoptions.md#optional-ca)*

Defined in node_modules/@types/node/tls.d.ts:359

___

### `Optional` cert

• **cert**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md)›*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[cert](_http2_.secureclientsessionoptions.md#optional-cert)*

Defined in node_modules/@types/node/tls.d.ts:358

___

### `Optional` checkServerIdentity

• **checkServerIdentity**? : *typeof checkServerIdentity*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[checkServerIdentity](_http2_.secureclientsessionoptions.md#optional-checkserveridentity)*

Defined in node_modules/@types/node/tls.d.ts:279

___

### `Optional` ciphers

• **ciphers**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[ciphers](_http2_.secureclientsessionoptions.md#optional-ciphers)*

Defined in node_modules/@types/node/tls.d.ts:360

___

### `Optional` clientCertEngine

• **clientCertEngine**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[clientCertEngine](_http2_.secureclientsessionoptions.md#optional-clientcertengine)*

Defined in node_modules/@types/node/tls.d.ts:363

___

### `Optional` createConnection

• **createConnection**? : *undefined | function*

*Inherited from [ClientSessionOptions](_http2_.clientsessionoptions.md).[createConnection](_http2_.clientsessionoptions.md#optional-createconnection)*

*Overrides [SessionOptions](_http2_.sessionoptions.md).[createConnection](_http2_.sessionoptions.md#optional-createconnection)*

Defined in node_modules/@types/node/http2.d.ts:451

___

### `Optional` crl

• **crl**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md)›*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[crl](_http2_.secureclientsessionoptions.md#optional-crl)*

Defined in node_modules/@types/node/tls.d.ts:364

___

### `Optional` dhparam

• **dhparam**? : *string | [Buffer](../classes/buffer.md)*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[dhparam](_http2_.secureclientsessionoptions.md#optional-dhparam)*

Defined in node_modules/@types/node/tls.d.ts:365

___

### `Optional` ecdhCurve

• **ecdhCurve**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[ecdhCurve](_http2_.secureclientsessionoptions.md#optional-ecdhcurve)*

Defined in node_modules/@types/node/tls.d.ts:362

___

### `Optional` enableTrace

• **enableTrace**? : *undefined | false | true*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[enableTrace](_http2_.secureclientsessionoptions.md#optional-enabletrace)*

Defined in node_modules/@types/node/tls.d.ts:237

When enabled, TLS packet trace information is written to `stderr`. This can be
used to debug TLS connection problems.

**`default`** false

___

### `Optional` honorCipherOrder

• **honorCipherOrder**? : *undefined | false | true*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[honorCipherOrder](_http2_.secureclientsessionoptions.md#optional-honorcipherorder)*

Defined in node_modules/@types/node/tls.d.ts:361

___

### `Optional` host

• **host**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[host](_http2_.secureclientsessionoptions.md#optional-host)*

Defined in node_modules/@types/node/tls.d.ts:275

___

### `Optional` key

• **key**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹[Buffer](../classes/buffer.md) | [Object](object.md)›*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[key](_http2_.secureclientsessionoptions.md#optional-key)*

Defined in node_modules/@types/node/tls.d.ts:356

___

### `Optional` lookup

• **lookup**? : *net.LookupFunction*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[lookup](_http2_.secureclientsessionoptions.md#optional-lookup)*

Defined in node_modules/@types/node/tls.d.ts:283

___

### `Optional` maxDeflateDynamicTableSize

• **maxDeflateDynamicTableSize**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxDeflateDynamicTableSize](_http2_.sessionoptions.md#optional-maxdeflatedynamictablesize)*

Defined in node_modules/@types/node/http2.d.ts:437

___

### `Optional` maxHeaderListPairs

• **maxHeaderListPairs**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxHeaderListPairs](_http2_.sessionoptions.md#optional-maxheaderlistpairs)*

Defined in node_modules/@types/node/http2.d.ts:439

___

### `Optional` maxOutstandingPings

• **maxOutstandingPings**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxOutstandingPings](_http2_.sessionoptions.md#optional-maxoutstandingpings)*

Defined in node_modules/@types/node/http2.d.ts:440

___

### `Optional` maxReservedRemoteStreams

• **maxReservedRemoteStreams**? : *undefined | number*

*Inherited from [ClientSessionOptions](_http2_.clientsessionoptions.md).[maxReservedRemoteStreams](_http2_.clientsessionoptions.md#optional-maxreservedremotestreams)*

Defined in node_modules/@types/node/http2.d.ts:450

___

### `Optional` maxSendHeaderBlockLength

• **maxSendHeaderBlockLength**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxSendHeaderBlockLength](_http2_.sessionoptions.md#optional-maxsendheaderblocklength)*

Defined in node_modules/@types/node/http2.d.ts:441

___

### `Optional` maxSessionMemory

• **maxSessionMemory**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxSessionMemory](_http2_.sessionoptions.md#optional-maxsessionmemory)*

Defined in node_modules/@types/node/http2.d.ts:438

___

### `Optional` maxVersion

• **maxVersion**? : *[SecureVersion](../modules/_tls_.md#secureversion)*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[maxVersion](_http2_.secureclientsessionoptions.md#optional-maxversion)*

Defined in node_modules/@types/node/tls.d.ts:377

Optionally set the maximum TLS version to allow. One
of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
`secureProtocol` option, use one or the other.
**Default:** `'TLSv1.3'`, unless changed using CLI options. Using
`--tls-max-v1.2` sets the default to `'TLSv1.2'`. Using `--tls-max-v1.3` sets the default to
`'TLSv1.3'`. If multiple of the options are provided, the highest maximum is used.

___

### `Optional` minDHSize

• **minDHSize**? : *undefined | number*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[minDHSize](_http2_.secureclientsessionoptions.md#optional-mindhsize)*

Defined in node_modules/@types/node/tls.d.ts:282

___

### `Optional` minVersion

• **minVersion**? : *[SecureVersion](../modules/_tls_.md#secureversion)*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[minVersion](_http2_.secureclientsessionoptions.md#optional-minversion)*

Defined in node_modules/@types/node/tls.d.ts:388

Optionally set the minimum TLS version to allow. One
of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
`secureProtocol` option, use one or the other.  It is not recommended to use
less than TLSv1.2, but it may be required for interoperability.
**Default:** `'TLSv1.2'`, unless changed using CLI options. Using
`--tls-v1.0` sets the default to `'TLSv1'`. Using `--tls-v1.1` sets the default to
`'TLSv1.1'`. Using `--tls-min-v1.3` sets the default to
'TLSv1.3'. If multiple of the options are provided, the lowest minimum is used.

___

### `Optional` paddingStrategy

• **paddingStrategy**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[paddingStrategy](_http2_.sessionoptions.md#optional-paddingstrategy)*

Defined in node_modules/@types/node/http2.d.ts:442

___

### `Optional` passphrase

• **passphrase**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[passphrase](_http2_.secureclientsessionoptions.md#optional-passphrase)*

Defined in node_modules/@types/node/tls.d.ts:357

___

### `Optional` path

• **path**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[path](_http2_.secureclientsessionoptions.md#optional-path)*

Defined in node_modules/@types/node/tls.d.ts:277

___

### `Optional` peerMaxConcurrentStreams

• **peerMaxConcurrentStreams**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[peerMaxConcurrentStreams](_http2_.sessionoptions.md#optional-peermaxconcurrentstreams)*

Defined in node_modules/@types/node/http2.d.ts:443

___

### `Optional` pfx

• **pfx**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md) | [Object](object.md)›*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[pfx](_http2_.secureclientsessionoptions.md#optional-pfx)*

Defined in node_modules/@types/node/tls.d.ts:355

___

### `Optional` port

• **port**? : *undefined | number*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[port](_http2_.secureclientsessionoptions.md#optional-port)*

Defined in node_modules/@types/node/tls.d.ts:276

___

### `Optional` rejectUnauthorized

• **rejectUnauthorized**? : *undefined | false | true*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[rejectUnauthorized](_http2_.secureclientsessionoptions.md#optional-rejectunauthorized)*

Defined in node_modules/@types/node/tls.d.ts:265

If true the server will reject any connection which is not
authorized with the list of supplied CAs. This option only has an
effect if requestCert is true.

**`default`** true

___

### `Optional` requestCert

• **requestCert**? : *undefined | false | true*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[requestCert](_http2_.secureclientsessionoptions.md#optional-requestcert)*

Defined in node_modules/@types/node/tls.d.ts:243

If true the server will request a certificate from clients that
connect and attempt to verify that certificate. Defaults to
false.

___

### `Optional` secureContext

• **secureContext**? : *[SecureContext](_tls_.securecontext.md)*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[secureContext](_http2_.secureclientsessionoptions.md#optional-securecontext)*

Defined in node_modules/@types/node/tls.d.ts:230

An optional TLS context object from tls.createSecureContext()

___

### `Optional` secureOptions

• **secureOptions**? : *undefined | number*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[secureOptions](_http2_.secureclientsessionoptions.md#optional-secureoptions)*

Defined in node_modules/@types/node/tls.d.ts:366

___

### `Optional` secureProtocol

• **secureProtocol**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[secureProtocol](_http2_.secureclientsessionoptions.md#optional-secureprotocol)*

Defined in node_modules/@types/node/tls.d.ts:367

___

### `Optional` selectPadding

• **selectPadding**? : *undefined | function*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[selectPadding](_http2_.sessionoptions.md#optional-selectpadding)*

Defined in node_modules/@types/node/http2.d.ts:444

___

### `Optional` servername

• **servername**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[servername](_http2_.secureclientsessionoptions.md#optional-servername)*

Defined in node_modules/@types/node/tls.d.ts:280

___

### `Optional` session

• **session**? : *[Buffer](../classes/buffer.md)*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[session](_http2_.secureclientsessionoptions.md#optional-session)*

Defined in node_modules/@types/node/tls.d.ts:281

___

### `Optional` sessionIdContext

• **sessionIdContext**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[sessionIdContext](_http2_.secureclientsessionoptions.md#optional-sessionidcontext)*

Defined in node_modules/@types/node/tls.d.ts:368

___

### `Optional` settings

• **settings**? : *[Settings](_http2_.settings.md)*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[settings](_http2_.sessionoptions.md#optional-settings)*

Defined in node_modules/@types/node/http2.d.ts:445

___

### `Optional` socket

• **socket**? : *net.Socket*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[socket](_http2_.secureclientsessionoptions.md#optional-socket)*

Defined in node_modules/@types/node/tls.d.ts:278

___

### `Optional` timeout

• **timeout**? : *undefined | number*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[timeout](_http2_.secureclientsessionoptions.md#optional-timeout)*

Defined in node_modules/@types/node/tls.d.ts:284
