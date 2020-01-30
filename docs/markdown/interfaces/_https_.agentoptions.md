[typescript](../README.md) › [Globals](../globals.md) › ["https"](../modules/_https_.md) › [AgentOptions](_https_.agentoptions.md)

# Interface: AgentOptions

## Hierarchy

* [AgentOptions](_http_.agentoptions.md)

  ↳ [ConnectionOptions](_tls_.connectionoptions.md)

  ↳ **AgentOptions**

## Index

### Properties

* [ALPNProtocols](_https_.agentoptions.md#optional-alpnprotocols)
* [SNICallback](_https_.agentoptions.md#optional-snicallback)
* [ca](_https_.agentoptions.md#optional-ca)
* [cert](_https_.agentoptions.md#optional-cert)
* [checkServerIdentity](_https_.agentoptions.md#optional-checkserveridentity)
* [ciphers](_https_.agentoptions.md#optional-ciphers)
* [clientCertEngine](_https_.agentoptions.md#optional-clientcertengine)
* [crl](_https_.agentoptions.md#optional-crl)
* [dhparam](_https_.agentoptions.md#optional-dhparam)
* [ecdhCurve](_https_.agentoptions.md#optional-ecdhcurve)
* [enableTrace](_https_.agentoptions.md#optional-enabletrace)
* [honorCipherOrder](_https_.agentoptions.md#optional-honorcipherorder)
* [host](_https_.agentoptions.md#optional-host)
* [keepAlive](_https_.agentoptions.md#optional-keepalive)
* [keepAliveMsecs](_https_.agentoptions.md#optional-keepalivemsecs)
* [key](_https_.agentoptions.md#optional-key)
* [lookup](_https_.agentoptions.md#optional-lookup)
* [maxCachedSessions](_https_.agentoptions.md#optional-maxcachedsessions)
* [maxFreeSockets](_https_.agentoptions.md#optional-maxfreesockets)
* [maxSockets](_https_.agentoptions.md#optional-maxsockets)
* [maxVersion](_https_.agentoptions.md#optional-maxversion)
* [minDHSize](_https_.agentoptions.md#optional-mindhsize)
* [minVersion](_https_.agentoptions.md#optional-minversion)
* [passphrase](_https_.agentoptions.md#optional-passphrase)
* [path](_https_.agentoptions.md#optional-path)
* [pfx](_https_.agentoptions.md#optional-pfx)
* [port](_https_.agentoptions.md#optional-port)
* [rejectUnauthorized](_https_.agentoptions.md#optional-rejectunauthorized)
* [requestCert](_https_.agentoptions.md#optional-requestcert)
* [secureContext](_https_.agentoptions.md#optional-securecontext)
* [secureOptions](_https_.agentoptions.md#optional-secureoptions)
* [secureProtocol](_https_.agentoptions.md#optional-secureprotocol)
* [servername](_https_.agentoptions.md#optional-servername)
* [session](_https_.agentoptions.md#optional-session)
* [sessionIdContext](_https_.agentoptions.md#optional-sessionidcontext)
* [socket](_https_.agentoptions.md#optional-socket)
* [timeout](_https_.agentoptions.md#optional-timeout)

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

### `Optional` keepAlive

• **keepAlive**? : *undefined | false | true*

*Inherited from [AgentOptions](_http_.agentoptions.md).[keepAlive](_http_.agentoptions.md#optional-keepalive)*

Defined in node_modules/@types/node/http.d.ts:305

Keep sockets around in a pool to be used by other requests in the future. Default = false

___

### `Optional` keepAliveMsecs

• **keepAliveMsecs**? : *undefined | number*

*Inherited from [AgentOptions](_http_.agentoptions.md).[keepAliveMsecs](_http_.agentoptions.md#optional-keepalivemsecs)*

Defined in node_modules/@types/node/http.d.ts:310

When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
Only relevant if keepAlive is set to true.

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

### `Optional` maxCachedSessions

• **maxCachedSessions**? : *undefined | number*

Defined in node_modules/@types/node/https.d.ts:16

___

### `Optional` maxFreeSockets

• **maxFreeSockets**? : *undefined | number*

*Inherited from [AgentOptions](_http_.agentoptions.md).[maxFreeSockets](_http_.agentoptions.md#optional-maxfreesockets)*

Defined in node_modules/@types/node/http.d.ts:318

Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.

___

### `Optional` maxSockets

• **maxSockets**? : *undefined | number*

*Inherited from [AgentOptions](_http_.agentoptions.md).[maxSockets](_http_.agentoptions.md#optional-maxsockets)*

Defined in node_modules/@types/node/http.d.ts:314

Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity

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

*Overrides [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[rejectUnauthorized](_http2_.secureclientsessionoptions.md#optional-rejectunauthorized)*

Defined in node_modules/@types/node/https.d.ts:15

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

### `Optional` socket

• **socket**? : *net.Socket*

*Inherited from [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[socket](_http2_.secureclientsessionoptions.md#optional-socket)*

Defined in node_modules/@types/node/tls.d.ts:278

___

### `Optional` timeout

• **timeout**? : *undefined | number*

*Inherited from [AgentOptions](_http_.agentoptions.md).[timeout](_http_.agentoptions.md#optional-timeout)*

*Overrides [SecureClientSessionOptions](_http2_.secureclientsessionoptions.md).[timeout](_http2_.secureclientsessionoptions.md#optional-timeout)*

Defined in node_modules/@types/node/http.d.ts:322

Socket timeout in milliseconds. This will set the timeout after the socket is connected.
