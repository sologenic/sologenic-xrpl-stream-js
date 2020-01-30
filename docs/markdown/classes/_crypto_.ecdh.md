[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [ECDH](_crypto_.ecdh.md)

# Class: ECDH

## Hierarchy

* **ECDH**

## Index

### Constructors

* [constructor](_crypto_.ecdh.md#private-constructor)

### Methods

* [computeSecret](_crypto_.ecdh.md#computesecret)
* [generateKeys](_crypto_.ecdh.md#generatekeys)
* [getPrivateKey](_crypto_.ecdh.md#getprivatekey)
* [getPublicKey](_crypto_.ecdh.md#getpublickey)
* [setPrivateKey](_crypto_.ecdh.md#setprivatekey)
* [convertKey](_crypto_.ecdh.md#static-convertkey)

## Constructors

### `Private` constructor

\+ **new ECDH**(): *[ECDH](_crypto_.ecdh.md)*

Defined in node_modules/@types/node/crypto.d.ts:406

**Returns:** *[ECDH](_crypto_.ecdh.md)*

## Methods

###  computeSecret

▸ **computeSecret**(`other_public_key`: [ArrayBufferView](../modules/nodejs.md#arraybufferview)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:417

**Parameters:**

Name | Type |
------ | ------ |
`other_public_key` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |

**Returns:** *[Buffer](buffer.md)*

▸ **computeSecret**(`other_public_key`: string, `input_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:418

**Parameters:**

Name | Type |
------ | ------ |
`other_public_key` | string |
`input_encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *[Buffer](buffer.md)*

▸ **computeSecret**(`other_public_key`: [ArrayBufferView](../modules/nodejs.md#arraybufferview), `output_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:419

**Parameters:**

Name | Type |
------ | ------ |
`other_public_key` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |
`output_encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

▸ **computeSecret**(`other_public_key`: string, `input_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding), `output_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:420

**Parameters:**

Name | Type |
------ | ------ |
`other_public_key` | string |
`input_encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |
`output_encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

___

###  generateKeys

▸ **generateKeys**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:415

**Returns:** *[Buffer](buffer.md)*

▸ **generateKeys**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding), `format?`: [ECDHKeyFormat](../modules/_crypto_.md#ecdhkeyformat)): *string*

Defined in node_modules/@types/node/crypto.d.ts:416

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |
`format?` | [ECDHKeyFormat](../modules/_crypto_.md#ecdhkeyformat) |

**Returns:** *string*

___

###  getPrivateKey

▸ **getPrivateKey**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:421

**Returns:** *[Buffer](buffer.md)*

▸ **getPrivateKey**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:422

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

___

###  getPublicKey

▸ **getPublicKey**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:423

**Returns:** *[Buffer](buffer.md)*

▸ **getPublicKey**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding), `format?`: [ECDHKeyFormat](../modules/_crypto_.md#ecdhkeyformat)): *string*

Defined in node_modules/@types/node/crypto.d.ts:424

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |
`format?` | [ECDHKeyFormat](../modules/_crypto_.md#ecdhkeyformat) |

**Returns:** *string*

___

###  setPrivateKey

▸ **setPrivateKey**(`private_key`: [ArrayBufferView](../modules/nodejs.md#arraybufferview)): *void*

Defined in node_modules/@types/node/crypto.d.ts:425

**Parameters:**

Name | Type |
------ | ------ |
`private_key` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |

**Returns:** *void*

▸ **setPrivateKey**(`private_key`: string, `encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *void*

Defined in node_modules/@types/node/crypto.d.ts:426

**Parameters:**

Name | Type |
------ | ------ |
`private_key` | string |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *void*

___

### `Static` convertKey

▸ **convertKey**(`key`: [BinaryLike](../modules/_crypto_.md#binarylike), `curve`: string, `inputEncoding?`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding), `outputEncoding?`: "latin1" | "hex" | "base64", `format?`: "uncompressed" | "compressed" | "hybrid"): *[Buffer](buffer.md) | string*

Defined in node_modules/@types/node/crypto.d.ts:408

**Parameters:**

Name | Type |
------ | ------ |
`key` | [BinaryLike](../modules/_crypto_.md#binarylike) |
`curve` | string |
`inputEncoding?` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |
`outputEncoding?` | "latin1" &#124; "hex" &#124; "base64" |
`format?` | "uncompressed" &#124; "compressed" &#124; "hybrid" |

**Returns:** *[Buffer](buffer.md) | string*
