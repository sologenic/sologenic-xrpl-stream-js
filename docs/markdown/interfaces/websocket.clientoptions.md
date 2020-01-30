[typescript](../README.md) › [Globals](../globals.md) › [WebSocket](../classes/websocket.md) › [ClientOptions](websocket.clientoptions.md)

# Interface: ClientOptions

## Hierarchy

* **ClientOptions**

## Index

### Properties

* [agent](websocket.clientoptions.md#optional-agent)
* [ca](websocket.clientoptions.md#optional-ca)
* [cert](websocket.clientoptions.md#optional-cert)
* [ciphers](websocket.clientoptions.md#optional-ciphers)
* [family](websocket.clientoptions.md#optional-family)
* [handshakeTimeout](websocket.clientoptions.md#optional-handshaketimeout)
* [headers](websocket.clientoptions.md#optional-headers)
* [host](websocket.clientoptions.md#optional-host)
* [key](websocket.clientoptions.md#optional-key)
* [localAddress](websocket.clientoptions.md#optional-localaddress)
* [origin](websocket.clientoptions.md#optional-origin)
* [passphrase](websocket.clientoptions.md#optional-passphrase)
* [perMessageDeflate](websocket.clientoptions.md#optional-permessagedeflate)
* [pfx](websocket.clientoptions.md#optional-pfx)
* [protocol](websocket.clientoptions.md#optional-protocol)
* [protocolVersion](websocket.clientoptions.md#optional-protocolversion)
* [rejectUnauthorized](websocket.clientoptions.md#optional-rejectunauthorized)

### Methods

* [checkServerIdentity](websocket.clientoptions.md#optional-checkserveridentity)

## Properties

### `Optional` agent

• **agent**? : *http.Agent*

Defined in node_modules/@types/ws/index.d.ts:137

___

### `Optional` ca

• **ca**? : *[CertMeta](../classes/websocket.md#static-certmeta)*

Defined in node_modules/@types/ws/index.d.ts:147

___

### `Optional` cert

• **cert**? : *[CertMeta](../classes/websocket.md#static-certmeta)*

Defined in node_modules/@types/ws/index.d.ts:144

___

### `Optional` ciphers

• **ciphers**? : *undefined | string*

Defined in node_modules/@types/ws/index.d.ts:143

___

### `Optional` family

• **family**? : *undefined | number*

Defined in node_modules/@types/ws/index.d.ts:139

___

### `Optional` handshakeTimeout

• **handshakeTimeout**? : *undefined | number*

Defined in node_modules/@types/ws/index.d.ts:131

___

### `Optional` headers

• **headers**? : *undefined | object*

Defined in node_modules/@types/ws/index.d.ts:135

___

### `Optional` host

• **host**? : *undefined | string*

Defined in node_modules/@types/ws/index.d.ts:138

___

### `Optional` key

• **key**? : *[CertMeta](../classes/websocket.md#static-certmeta)*

Defined in node_modules/@types/ws/index.d.ts:145

___

### `Optional` localAddress

• **localAddress**? : *undefined | string*

Defined in node_modules/@types/ws/index.d.ts:133

___

### `Optional` origin

• **origin**? : *undefined | string*

Defined in node_modules/@types/ws/index.d.ts:136

___

### `Optional` passphrase

• **passphrase**? : *undefined | string*

Defined in node_modules/@types/ws/index.d.ts:142

___

### `Optional` perMessageDeflate

• **perMessageDeflate**? : *boolean | [PerMessageDeflateOptions](websocket.permessagedeflateoptions.md)*

Defined in node_modules/@types/ws/index.d.ts:132

___

### `Optional` pfx

• **pfx**? : *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/ws/index.d.ts:146

___

### `Optional` protocol

• **protocol**? : *undefined | string*

Defined in node_modules/@types/ws/index.d.ts:130

___

### `Optional` protocolVersion

• **protocolVersion**? : *undefined | number*

Defined in node_modules/@types/ws/index.d.ts:134

___

### `Optional` rejectUnauthorized

• **rejectUnauthorized**? : *undefined | false | true*

Defined in node_modules/@types/ws/index.d.ts:141

## Methods

### `Optional` checkServerIdentity

▸ **checkServerIdentity**(`servername`: string, `cert`: [CertMeta](../classes/websocket.md#static-certmeta)): *boolean*

Defined in node_modules/@types/ws/index.d.ts:140

**Parameters:**

Name | Type |
------ | ------ |
`servername` | string |
`cert` | [CertMeta](../classes/websocket.md#static-certmeta) |

**Returns:** *boolean*
