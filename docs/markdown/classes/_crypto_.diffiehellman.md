[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [DiffieHellman](_crypto_.diffiehellman.md)

# Class: DiffieHellman

## Hierarchy

* **DiffieHellman**

## Index

### Constructors

* [constructor](_crypto_.diffiehellman.md#private-constructor)

### Properties

* [verifyError](_crypto_.diffiehellman.md#verifyerror)

### Methods

* [computeSecret](_crypto_.diffiehellman.md#computesecret)
* [generateKeys](_crypto_.diffiehellman.md#generatekeys)
* [getGenerator](_crypto_.diffiehellman.md#getgenerator)
* [getPrime](_crypto_.diffiehellman.md#getprime)
* [getPrivateKey](_crypto_.diffiehellman.md#getprivatekey)
* [getPublicKey](_crypto_.diffiehellman.md#getpublickey)
* [setPrivateKey](_crypto_.diffiehellman.md#setprivatekey)
* [setPublicKey](_crypto_.diffiehellman.md#setpublickey)

## Constructors

### `Private` constructor

\+ **new DiffieHellman**(): *[DiffieHellman](_crypto_.diffiehellman.md)*

Defined in node_modules/@types/node/crypto.d.ts:322

**Returns:** *[DiffieHellman](_crypto_.diffiehellman.md)*

## Properties

###  verifyError

• **verifyError**: *number*

Defined in node_modules/@types/node/crypto.d.ts:342

## Methods

###  computeSecret

▸ **computeSecret**(`other_public_key`: [ArrayBufferView](../modules/nodejs.md#arraybufferview)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:326

**Parameters:**

Name | Type |
------ | ------ |
`other_public_key` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |

**Returns:** *[Buffer](buffer.md)*

▸ **computeSecret**(`other_public_key`: string, `input_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:327

**Parameters:**

Name | Type |
------ | ------ |
`other_public_key` | string |
`input_encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *[Buffer](buffer.md)*

▸ **computeSecret**(`other_public_key`: [ArrayBufferView](../modules/nodejs.md#arraybufferview), `output_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:328

**Parameters:**

Name | Type |
------ | ------ |
`other_public_key` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |
`output_encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

▸ **computeSecret**(`other_public_key`: string, `input_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding), `output_encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:329

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

Defined in node_modules/@types/node/crypto.d.ts:324

**Returns:** *[Buffer](buffer.md)*

▸ **generateKeys**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:325

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

___

###  getGenerator

▸ **getGenerator**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:332

**Returns:** *[Buffer](buffer.md)*

▸ **getGenerator**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:333

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

___

###  getPrime

▸ **getPrime**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:330

**Returns:** *[Buffer](buffer.md)*

▸ **getPrime**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:331

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

___

###  getPrivateKey

▸ **getPrivateKey**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:336

**Returns:** *[Buffer](buffer.md)*

▸ **getPrivateKey**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:337

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

___

###  getPublicKey

▸ **getPublicKey**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:334

**Returns:** *[Buffer](buffer.md)*

▸ **getPublicKey**(`encoding`: [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding)): *string*

Defined in node_modules/@types/node/crypto.d.ts:335

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HexBase64Latin1Encoding](../modules/_crypto_.md#hexbase64latin1encoding) |

**Returns:** *string*

___

###  setPrivateKey

▸ **setPrivateKey**(`private_key`: [ArrayBufferView](../modules/nodejs.md#arraybufferview)): *void*

Defined in node_modules/@types/node/crypto.d.ts:340

**Parameters:**

Name | Type |
------ | ------ |
`private_key` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |

**Returns:** *void*

▸ **setPrivateKey**(`private_key`: string, `encoding`: string): *void*

Defined in node_modules/@types/node/crypto.d.ts:341

**Parameters:**

Name | Type |
------ | ------ |
`private_key` | string |
`encoding` | string |

**Returns:** *void*

___

###  setPublicKey

▸ **setPublicKey**(`public_key`: [ArrayBufferView](../modules/nodejs.md#arraybufferview)): *void*

Defined in node_modules/@types/node/crypto.d.ts:338

**Parameters:**

Name | Type |
------ | ------ |
`public_key` | [ArrayBufferView](../modules/nodejs.md#arraybufferview) |

**Returns:** *void*

▸ **setPublicKey**(`public_key`: string, `encoding`: string): *void*

Defined in node_modules/@types/node/crypto.d.ts:339

**Parameters:**

Name | Type |
------ | ------ |
`public_key` | string |
`encoding` | string |

**Returns:** *void*
