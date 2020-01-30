[typescript](../README.md) › [Globals](../globals.md) › ["tls"](_tls_.md)

# Module: "tls"

## Index

### Classes

* [Server](../classes/_tls_.server.md)
* [TLSSocket](../classes/_tls_.tlssocket.md)

### Interfaces

* [Certificate](../interfaces/_tls_.certificate.md)
* [CipherNameAndProtocol](../interfaces/_tls_.ciphernameandprotocol.md)
* [CommonConnectionOptions](../interfaces/_tls_.commonconnectionoptions.md)
* [ConnectionOptions](../interfaces/_tls_.connectionoptions.md)
* [DetailedPeerCertificate](../interfaces/_tls_.detailedpeercertificate.md)
* [PeerCertificate](../interfaces/_tls_.peercertificate.md)
* [SecureContext](../interfaces/_tls_.securecontext.md)
* [SecureContextOptions](../interfaces/_tls_.securecontextoptions.md)
* [SecurePair](../interfaces/_tls_.securepair.md)
* [TLSSocketOptions](../interfaces/_tls_.tlssocketoptions.md)
* [TlsOptions](../interfaces/_tls_.tlsoptions.md)

### Type aliases

* [SecureVersion](_tls_.md#secureversion)

### Variables

* [CLIENT_RENEG_LIMIT](_tls_.md#const-client_reneg_limit)
* [CLIENT_RENEG_WINDOW](_tls_.md#const-client_reneg_window)
* [DEFAULT_ECDH_CURVE](_tls_.md#const-default_ecdh_curve)
* [rootCertificates](_tls_.md#const-rootcertificates)

### Functions

* [checkServerIdentity](_tls_.md#checkserveridentity)
* [connect](_tls_.md#connect)
* [createSecureContext](_tls_.md#createsecurecontext)
* [createSecurePair](_tls_.md#createsecurepair)
* [createServer](_tls_.md#createserver)
* [getCiphers](_tls_.md#getciphers)

## Type aliases

###  SecureVersion

Ƭ **SecureVersion**: *"TLSv1.3" | "TLSv1.2" | "TLSv1.1" | "TLSv1"*

Defined in node_modules/@types/node/tls.d.ts:352

## Variables

### `Const` CLIENT_RENEG_LIMIT

• **CLIENT_RENEG_LIMIT**: *number*

Defined in node_modules/@types/node/tls.d.ts:7

___

### `Const` CLIENT_RENEG_WINDOW

• **CLIENT_RENEG_WINDOW**: *number*

Defined in node_modules/@types/node/tls.d.ts:8

___

### `Const` DEFAULT_ECDH_CURVE

• **DEFAULT_ECDH_CURVE**: *string*

Defined in node_modules/@types/node/tls.d.ts:415

___

### `Const` rootCertificates

• **rootCertificates**: *[ReadonlyArray](../interfaces/readonlyarray.md)‹string›*

Defined in node_modules/@types/node/tls.d.ts:417

## Functions

###  checkServerIdentity

▸ **checkServerIdentity**(`host`: string, `cert`: [PeerCertificate](../interfaces/_tls_.peercertificate.md)): *[Error](../interfaces/error.md) | undefined*

Defined in node_modules/@types/node/tls.d.ts:402

**Parameters:**

Name | Type |
------ | ------ |
`host` | string |
`cert` | [PeerCertificate](../interfaces/_tls_.peercertificate.md) |

**Returns:** *[Error](../interfaces/error.md) | undefined*

___

###  connect

▸ **connect**(`options`: [ConnectionOptions](../interfaces/_tls_.connectionoptions.md), `secureConnectListener?`: undefined | function): *[TLSSocket](../classes/_tls_.tlssocket.md)*

Defined in node_modules/@types/node/tls.d.ts:405

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ConnectionOptions](../interfaces/_tls_.connectionoptions.md) |
`secureConnectListener?` | undefined &#124; function |

**Returns:** *[TLSSocket](../classes/_tls_.tlssocket.md)*

▸ **connect**(`port`: number, `host?`: undefined | string, `options?`: [ConnectionOptions](../interfaces/_tls_.connectionoptions.md), `secureConnectListener?`: undefined | function): *[TLSSocket](../classes/_tls_.tlssocket.md)*

Defined in node_modules/@types/node/tls.d.ts:406

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`host?` | undefined &#124; string |
`options?` | [ConnectionOptions](../interfaces/_tls_.connectionoptions.md) |
`secureConnectListener?` | undefined &#124; function |

**Returns:** *[TLSSocket](../classes/_tls_.tlssocket.md)*

▸ **connect**(`port`: number, `options?`: [ConnectionOptions](../interfaces/_tls_.connectionoptions.md), `secureConnectListener?`: undefined | function): *[TLSSocket](../classes/_tls_.tlssocket.md)*

Defined in node_modules/@types/node/tls.d.ts:407

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`options?` | [ConnectionOptions](../interfaces/_tls_.connectionoptions.md) |
`secureConnectListener?` | undefined &#124; function |

**Returns:** *[TLSSocket](../classes/_tls_.tlssocket.md)*

___

###  createSecureContext

▸ **createSecureContext**(`details`: [SecureContextOptions](../interfaces/_tls_.securecontextoptions.md)): *[SecureContext](../interfaces/_tls_.securecontext.md)*

Defined in node_modules/@types/node/tls.d.ts:412

**Parameters:**

Name | Type |
------ | ------ |
`details` | [SecureContextOptions](../interfaces/_tls_.securecontextoptions.md) |

**Returns:** *[SecureContext](../interfaces/_tls_.securecontext.md)*

___

###  createSecurePair

▸ **createSecurePair**(`credentials?`: [SecureContext](../interfaces/_tls_.securecontext.md), `isServer?`: undefined | false | true, `requestCert?`: undefined | false | true, `rejectUnauthorized?`: undefined | false | true): *[SecurePair](../interfaces/_tls_.securepair.md)*

Defined in node_modules/@types/node/tls.d.ts:411

**`deprecated`** 

**Parameters:**

Name | Type |
------ | ------ |
`credentials?` | [SecureContext](../interfaces/_tls_.securecontext.md) |
`isServer?` | undefined &#124; false &#124; true |
`requestCert?` | undefined &#124; false &#124; true |
`rejectUnauthorized?` | undefined &#124; false &#124; true |

**Returns:** *[SecurePair](../interfaces/_tls_.securepair.md)*

___

###  createServer

▸ **createServer**(`secureConnectionListener?`: undefined | function): *[Server](../classes/_tls_.server.md)*

Defined in node_modules/@types/node/tls.d.ts:403

**Parameters:**

Name | Type |
------ | ------ |
`secureConnectionListener?` | undefined &#124; function |

**Returns:** *[Server](../classes/_tls_.server.md)*

▸ **createServer**(`options`: [TlsOptions](../interfaces/_tls_.tlsoptions.md), `secureConnectionListener?`: undefined | function): *[Server](../classes/_tls_.server.md)*

Defined in node_modules/@types/node/tls.d.ts:404

**Parameters:**

Name | Type |
------ | ------ |
`options` | [TlsOptions](../interfaces/_tls_.tlsoptions.md) |
`secureConnectionListener?` | undefined &#124; function |

**Returns:** *[Server](../classes/_tls_.server.md)*

___

###  getCiphers

▸ **getCiphers**(): *string[]*

Defined in node_modules/@types/node/tls.d.ts:413

**Returns:** *string[]*
