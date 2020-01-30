[typescript](../README.md) › [Globals](../globals.md) › ["tls"](../modules/_tls_.md) › [SecureContextOptions](_tls_.securecontextoptions.md)

# Interface: SecureContextOptions

## Hierarchy

* **SecureContextOptions**

  ↳ [TLSSocketOptions](_tls_.tlssocketoptions.md)

  ↳ [TlsOptions](_tls_.tlsoptions.md)

  ↳ [ConnectionOptions](_tls_.connectionoptions.md)

## Index

### Properties

* [ca](_tls_.securecontextoptions.md#optional-ca)
* [cert](_tls_.securecontextoptions.md#optional-cert)
* [ciphers](_tls_.securecontextoptions.md#optional-ciphers)
* [clientCertEngine](_tls_.securecontextoptions.md#optional-clientcertengine)
* [crl](_tls_.securecontextoptions.md#optional-crl)
* [dhparam](_tls_.securecontextoptions.md#optional-dhparam)
* [ecdhCurve](_tls_.securecontextoptions.md#optional-ecdhcurve)
* [honorCipherOrder](_tls_.securecontextoptions.md#optional-honorcipherorder)
* [key](_tls_.securecontextoptions.md#optional-key)
* [maxVersion](_tls_.securecontextoptions.md#optional-maxversion)
* [minVersion](_tls_.securecontextoptions.md#optional-minversion)
* [passphrase](_tls_.securecontextoptions.md#optional-passphrase)
* [pfx](_tls_.securecontextoptions.md#optional-pfx)
* [secureOptions](_tls_.securecontextoptions.md#optional-secureoptions)
* [secureProtocol](_tls_.securecontextoptions.md#optional-secureprotocol)
* [sessionIdContext](_tls_.securecontextoptions.md#optional-sessionidcontext)

## Properties

### `Optional` ca

• **ca**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/tls.d.ts:359

___

### `Optional` cert

• **cert**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/tls.d.ts:358

___

### `Optional` ciphers

• **ciphers**? : *undefined | string*

Defined in node_modules/@types/node/tls.d.ts:360

___

### `Optional` clientCertEngine

• **clientCertEngine**? : *undefined | string*

Defined in node_modules/@types/node/tls.d.ts:363

___

### `Optional` crl

• **crl**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/tls.d.ts:364

___

### `Optional` dhparam

• **dhparam**? : *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/tls.d.ts:365

___

### `Optional` ecdhCurve

• **ecdhCurve**? : *undefined | string*

Defined in node_modules/@types/node/tls.d.ts:362

___

### `Optional` honorCipherOrder

• **honorCipherOrder**? : *undefined | false | true*

Defined in node_modules/@types/node/tls.d.ts:361

___

### `Optional` key

• **key**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹[Buffer](../classes/buffer.md) | [Object](object.md)›*

Defined in node_modules/@types/node/tls.d.ts:356

___

### `Optional` maxVersion

• **maxVersion**? : *[SecureVersion](../modules/_tls_.md#secureversion)*

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

Defined in node_modules/@types/node/tls.d.ts:357

___

### `Optional` pfx

• **pfx**? : *string | [Buffer](../classes/buffer.md) | [Array](regexpmatcharray.md#array)‹string | [Buffer](../classes/buffer.md) | [Object](object.md)›*

Defined in node_modules/@types/node/tls.d.ts:355

___

### `Optional` secureOptions

• **secureOptions**? : *undefined | number*

Defined in node_modules/@types/node/tls.d.ts:366

___

### `Optional` secureProtocol

• **secureProtocol**? : *undefined | string*

Defined in node_modules/@types/node/tls.d.ts:367

___

### `Optional` sessionIdContext

• **sessionIdContext**? : *undefined | string*

Defined in node_modules/@types/node/tls.d.ts:368
