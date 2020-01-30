[typescript](../README.md) › [Globals](../globals.md) › ["tls"](../modules/_tls_.md) › [CommonConnectionOptions](_tls_.commonconnectionoptions.md)

# Interface: CommonConnectionOptions

## Hierarchy

* **CommonConnectionOptions**

  ↳ [TLSSocketOptions](_tls_.tlssocketoptions.md)

  ↳ [TlsOptions](_tls_.tlsoptions.md)

  ↳ [ConnectionOptions](_tls_.connectionoptions.md)

## Index

### Properties

* [ALPNProtocols](_tls_.commonconnectionoptions.md#optional-alpnprotocols)
* [SNICallback](_tls_.commonconnectionoptions.md#optional-snicallback)
* [enableTrace](_tls_.commonconnectionoptions.md#optional-enabletrace)
* [rejectUnauthorized](_tls_.commonconnectionoptions.md#optional-rejectunauthorized)
* [requestCert](_tls_.commonconnectionoptions.md#optional-requestcert)
* [secureContext](_tls_.commonconnectionoptions.md#optional-securecontext)

## Properties

### `Optional` ALPNProtocols

• **ALPNProtocols**? : *string[] | [Uint8Array](uint8array.md)[] | [Uint8Array](uint8array.md)*

Defined in node_modules/@types/node/tls.d.ts:248

An array of strings or a Buffer naming possible ALPN protocols.
(Protocols should be ordered by their priority.)

___

### `Optional` SNICallback

• **SNICallback**? : *undefined | function*

Defined in node_modules/@types/node/tls.d.ts:258

SNICallback(servername, cb) <Function> A function that will be
called if the client supports SNI TLS extension. Two arguments
will be passed when called: servername and cb. SNICallback should
invoke cb(null, ctx), where ctx is a SecureContext instance.
(tls.createSecureContext(...) can be used to get a proper
SecureContext.) If SNICallback wasn't provided the default callback
with high-level API will be used (see below).

___

### `Optional` enableTrace

• **enableTrace**? : *undefined | false | true*

Defined in node_modules/@types/node/tls.d.ts:237

When enabled, TLS packet trace information is written to `stderr`. This can be
used to debug TLS connection problems.

**`default`** false

___

### `Optional` rejectUnauthorized

• **rejectUnauthorized**? : *undefined | false | true*

Defined in node_modules/@types/node/tls.d.ts:265

If true the server will reject any connection which is not
authorized with the list of supplied CAs. This option only has an
effect if requestCert is true.

**`default`** true

___

### `Optional` requestCert

• **requestCert**? : *undefined | false | true*

Defined in node_modules/@types/node/tls.d.ts:243

If true the server will request a certificate from clients that
connect and attempt to verify that certificate. Defaults to
false.

___

### `Optional` secureContext

• **secureContext**? : *[SecureContext](_tls_.securecontext.md)*

Defined in node_modules/@types/node/tls.d.ts:230

An optional TLS context object from tls.createSecureContext()
