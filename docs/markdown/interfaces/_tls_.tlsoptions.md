[typescript](../README.md) › [Globals](../globals.md) › ["tls"](../modules/_tls_.md) › [TlsOptions](_tls_.tlsoptions.md)

# Interface: TlsOptions

## Hierarchy

* [SecureContextOptions](_tls_.securecontextoptions.md)

* [CommonConnectionOptions](_tls_.commonconnectionoptions.md)

  ↳ **TlsOptions**

  ↳ [SecureServerSessionOptions](_http2_.secureserversessionoptions.md)

## Index

### Properties

* [ALPNProtocols](_tls_.tlsoptions.md#optional-alpnprotocols)
* [SNICallback](_tls_.tlsoptions.md#optional-snicallback)
* [ca](_tls_.tlsoptions.md#optional-ca)
* [cert](_tls_.tlsoptions.md#optional-cert)
* [ciphers](_tls_.tlsoptions.md#optional-ciphers)
* [clientCertEngine](_tls_.tlsoptions.md#optional-clientcertengine)
* [crl](_tls_.tlsoptions.md#optional-crl)
* [dhparam](_tls_.tlsoptions.md#optional-dhparam)
* [ecdhCurve](_tls_.tlsoptions.md#optional-ecdhcurve)
* [enableTrace](_tls_.tlsoptions.md#optional-enabletrace)
* [handshakeTimeout](_tls_.tlsoptions.md#optional-handshaketimeout)
* [honorCipherOrder](_tls_.tlsoptions.md#optional-honorcipherorder)
* [key](_tls_.tlsoptions.md#optional-key)
* [maxVersion](_tls_.tlsoptions.md#optional-maxversion)
* [minVersion](_tls_.tlsoptions.md#optional-minversion)
* [passphrase](_tls_.tlsoptions.md#optional-passphrase)
* [pfx](_tls_.tlsoptions.md#optional-pfx)
* [rejectUnauthorized](_tls_.tlsoptions.md#optional-rejectunauthorized)
* [requestCert](_tls_.tlsoptions.md#optional-requestcert)
* [secureContext](_tls_.tlsoptions.md#optional-securecontext)
* [secureOptions](_tls_.tlsoptions.md#optional-secureoptions)
* [secureProtocol](_tls_.tlsoptions.md#optional-secureprotocol)
* [sessionIdContext](_tls_.tlsoptions.md#optional-sessionidcontext)
* [sessionTimeout](_tls_.tlsoptions.md#optional-sessiontimeout)
* [ticketKeys](_tls_.tlsoptions.md#optional-ticketkeys)

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

### `Optional` handshakeTimeout

• **handshakeTimeout**? : *undefined | number*

Defined in node_modules/@types/node/tls.d.ts:269

___

### `Optional` honorCipherOrder

• **honorCipherOrder**? : *undefined | false | true*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[honorCipherOrder](_http2_.secureclientsessionoptions.md#optional-honorcipherorder)*

Defined in node_modules/@types/node/tls.d.ts:361

___

### `Optional` key

• **key**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹[Buffer](../classes/buffer.md) | [Object](object.md)›*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[key](_http2_.secureclientsessionoptions.md#optional-key)*

Defined in node_modules/@types/node/tls.d.ts:356

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

### `Optional` passphrase

• **passphrase**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[passphrase](_http2_.secureclientsessionoptions.md#optional-passphrase)*

Defined in node_modules/@types/node/tls.d.ts:357

___

### `Optional` pfx

• **pfx**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md) | [Object](object.md)›*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[pfx](_http2_.secureclientsessionoptions.md#optional-pfx)*

Defined in node_modules/@types/node/tls.d.ts:355

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

### `Optional` sessionIdContext

• **sessionIdContext**? : *undefined | string*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[sessionIdContext](_http2_.secureclientsessionoptions.md#optional-sessionidcontext)*

Defined in node_modules/@types/node/tls.d.ts:368

___

### `Optional` sessionTimeout

• **sessionTimeout**? : *undefined | number*

Defined in node_modules/@types/node/tls.d.ts:270

___

### `Optional` ticketKeys

• **ticketKeys**? : *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/tls.d.ts:271
