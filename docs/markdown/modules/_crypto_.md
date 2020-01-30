[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](_crypto_.md)

# Module: "crypto"

## Index

### Modules

* [constants](_crypto_.constants.md)
* [generateKeyPair](_crypto_.generatekeypair.md)

### Classes

* [Cipher](../classes/_crypto_.cipher.md)
* [Decipher](../classes/_crypto_.decipher.md)
* [DiffieHellman](../classes/_crypto_.diffiehellman.md)
* [ECDH](../classes/_crypto_.ecdh.md)
* [Hash](../classes/_crypto_.hash.md)
* [Hmac](../classes/_crypto_.hmac.md)
* [KeyObject](../classes/_crypto_.keyobject.md)
* [Signer](../classes/_crypto_.signer.md)
* [Verify](../classes/_crypto_.verify.md)

### Interfaces

* [BasePrivateKeyEncodingOptions](../interfaces/_crypto_.baseprivatekeyencodingoptions.md)
* [Certificate](../interfaces/_crypto_.certificate.md)
* [CipherCCM](../interfaces/_crypto_.cipherccm.md)
* [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md)
* [CipherGCM](../interfaces/_crypto_.ciphergcm.md)
* [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md)
* [DSAKeyPairKeyObjectOptions](../interfaces/_crypto_.dsakeypairkeyobjectoptions.md)
* [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)
* [DecipherCCM](../interfaces/_crypto_.decipherccm.md)
* [DecipherGCM](../interfaces/_crypto_.deciphergcm.md)
* [ECKeyPairKeyObjectOptions](../interfaces/_crypto_.eckeypairkeyobjectoptions.md)
* [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)
* [HashOptions](../interfaces/_crypto_.hashoptions.md)
* [KeyExportOptions](../interfaces/_crypto_.keyexportoptions.md)
* [KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)
* [KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)
* [PrivateKeyInput](../interfaces/_crypto_.privatekeyinput.md)
* [PublicKeyInput](../interfaces/_crypto_.publickeyinput.md)
* [RSAKeyPairKeyObjectOptions](../interfaces/_crypto_.rsakeypairkeyobjectoptions.md)
* [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)
* [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md)
* [RsaPublicKey](../interfaces/_crypto_.rsapublickey.md)
* [ScryptOptions](../interfaces/_crypto_.scryptoptions.md)
* [SignPrivateKeyInput](../interfaces/_crypto_.signprivatekeyinput.md)
* [SigningOptions](../interfaces/_crypto_.signingoptions.md)
* [VerifyKeyWithOptions](../interfaces/_crypto_.verifykeywithoptions.md)

### Type aliases

* [BinaryLike](_crypto_.md#binarylike)
* [CipherCCMTypes](_crypto_.md#cipherccmtypes)
* [CipherGCMTypes](_crypto_.md#ciphergcmtypes)
* [CipherKey](_crypto_.md#cipherkey)
* [ECDHKeyFormat](_crypto_.md#ecdhkeyformat)
* [HexBase64BinaryEncoding](_crypto_.md#hexbase64binaryencoding)
* [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding)
* [KeyFormat](_crypto_.md#keyformat)
* [KeyLike](_crypto_.md#keylike)
* [KeyObjectType](_crypto_.md#keyobjecttype)
* [KeyType](_crypto_.md#keytype)
* [Utf8AsciiBinaryEncoding](_crypto_.md#utf8asciibinaryencoding)
* [Utf8AsciiLatin1Encoding](_crypto_.md#utf8asciilatin1encoding)

### Variables

* [Certificate](_crypto_.md#const-certificate)
* [DEFAULT_ENCODING](_crypto_.md#const-default_encoding)
* [fips](_crypto_.md#const-fips)

### Functions

* [createCipher](_crypto_.md#createcipher)
* [createCipheriv](_crypto_.md#createcipheriv)
* [createDecipher](_crypto_.md#createdecipher)
* [createDecipheriv](_crypto_.md#createdecipheriv)
* [createDiffieHellman](_crypto_.md#creatediffiehellman)
* [createECDH](_crypto_.md#createecdh)
* [createHash](_crypto_.md#createhash)
* [createHmac](_crypto_.md#createhmac)
* [createPrivateKey](_crypto_.md#createprivatekey)
* [createPublicKey](_crypto_.md#createpublickey)
* [createSecretKey](_crypto_.md#createsecretkey)
* [createSign](_crypto_.md#createsign)
* [createVerify](_crypto_.md#createverify)
* [generateKeyPairSync](_crypto_.md#generatekeypairsync)
* [getCiphers](_crypto_.md#getciphers)
* [getCurves](_crypto_.md#getcurves)
* [getDiffieHellman](_crypto_.md#getdiffiehellman)
* [getHashes](_crypto_.md#gethashes)
* [pbkdf2](_crypto_.md#pbkdf2)
* [pbkdf2Sync](_crypto_.md#pbkdf2sync)
* [privateDecrypt](_crypto_.md#privatedecrypt)
* [privateEncrypt](_crypto_.md#privateencrypt)
* [pseudoRandomBytes](_crypto_.md#pseudorandombytes)
* [publicDecrypt](_crypto_.md#publicdecrypt)
* [publicEncrypt](_crypto_.md#publicencrypt)
* [randomBytes](_crypto_.md#randombytes)
* [randomFill](_crypto_.md#randomfill)
* [randomFillSync](_crypto_.md#randomfillsync)
* [scrypt](_crypto_.md#scrypt)
* [scryptSync](_crypto_.md#scryptsync)
* [sign](_crypto_.md#sign)
* [timingSafeEqual](_crypto_.md#timingsafeequal)
* [verify](_crypto_.md#verify)

## Type aliases

###  BinaryLike

Ƭ **BinaryLike**: *string | [ArrayBufferView](nodejs.md#arraybufferview)*

Defined in node_modules/@types/node/crypto.d.ts:170

___

###  CipherCCMTypes

Ƭ **CipherCCMTypes**: *"aes-128-ccm" | "aes-192-ccm" | "aes-256-ccm"*

Defined in node_modules/@types/node/crypto.d.ts:167

___

###  CipherGCMTypes

Ƭ **CipherGCMTypes**: *"aes-128-gcm" | "aes-192-gcm" | "aes-256-gcm"*

Defined in node_modules/@types/node/crypto.d.ts:168

___

###  CipherKey

Ƭ **CipherKey**: *[BinaryLike](_crypto_.md#binarylike) | [KeyObject](../classes/_crypto_.keyobject.md)*

Defined in node_modules/@types/node/crypto.d.ts:172

___

###  ECDHKeyFormat

Ƭ **ECDHKeyFormat**: *"compressed" | "uncompressed" | "hybrid"*

Defined in node_modules/@types/node/crypto.d.ts:127

___

###  HexBase64BinaryEncoding

Ƭ **HexBase64BinaryEncoding**: *"binary" | "base64" | "hex"*

Defined in node_modules/@types/node/crypto.d.ts:126

___

###  HexBase64Latin1Encoding

Ƭ **HexBase64Latin1Encoding**: *"latin1" | "hex" | "base64"*

Defined in node_modules/@types/node/crypto.d.ts:124

___

###  KeyFormat

Ƭ **KeyFormat**: *"pem" | "der"*

Defined in node_modules/@types/node/crypto.d.ts:434

___

###  KeyLike

Ƭ **KeyLike**: *string | [Buffer](../classes/buffer.md) | [KeyObject](../classes/_crypto_.keyobject.md)*

Defined in node_modules/@types/node/crypto.d.ts:295

___

###  KeyObjectType

Ƭ **KeyObjectType**: *"secret" | "public" | "private"*

Defined in node_modules/@types/node/crypto.d.ts:144

___

###  KeyType

Ƭ **KeyType**: *"rsa" | "dsa" | "ec"*

Defined in node_modules/@types/node/crypto.d.ts:433

___

###  Utf8AsciiBinaryEncoding

Ƭ **Utf8AsciiBinaryEncoding**: *"utf8" | "ascii" | "binary"*

Defined in node_modules/@types/node/crypto.d.ts:125

___

###  Utf8AsciiLatin1Encoding

Ƭ **Utf8AsciiLatin1Encoding**: *"utf8" | "ascii" | "latin1"*

Defined in node_modules/@types/node/crypto.d.ts:123

## Variables

### `Const` Certificate

• **Certificate**: *object*

Defined in node_modules/@types/node/crypto.d.ts:9

#### Type declaration:

▸ (): *[Certificate](../interfaces/_crypto_.certificate.md)*

* **new __type**(): *[Certificate](../interfaces/_crypto_.certificate.md)*

___

### `Const` DEFAULT_ENCODING

• **DEFAULT_ENCODING**: *string*

Defined in node_modules/@types/node/crypto.d.ts:431

**`deprecated`** since v10.0.0

___

### `Const` fips

• **fips**: *boolean*

Defined in node_modules/@types/node/crypto.d.ts:118

**`deprecated`** since v10.0.0

## Functions

###  createCipher

▸ **createCipher**(`algorithm`: [CipherCCMTypes](_crypto_.md#cipherccmtypes), `password`: [BinaryLike](_crypto_.md#binarylike), `options`: [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md)): *[CipherCCM](../interfaces/_crypto_.cipherccm.md)*

Defined in node_modules/@types/node/crypto.d.ts:181

**`deprecated`** since v10.0.0 use createCipheriv()

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherCCMTypes](_crypto_.md#cipherccmtypes) |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`options` | [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md) |

**Returns:** *[CipherCCM](../interfaces/_crypto_.cipherccm.md)*

▸ **createCipher**(`algorithm`: [CipherGCMTypes](_crypto_.md#ciphergcmtypes), `password`: [BinaryLike](_crypto_.md#binarylike), `options?`: [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md)): *[CipherGCM](../interfaces/_crypto_.ciphergcm.md)*

Defined in node_modules/@types/node/crypto.d.ts:183

**`deprecated`** since v10.0.0 use createCipheriv()

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherGCMTypes](_crypto_.md#ciphergcmtypes) |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`options?` | [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md) |

**Returns:** *[CipherGCM](../interfaces/_crypto_.ciphergcm.md)*

▸ **createCipher**(`algorithm`: string, `password`: [BinaryLike](_crypto_.md#binarylike), `options?`: stream.TransformOptions): *[Cipher](../classes/_crypto_.cipher.md)*

Defined in node_modules/@types/node/crypto.d.ts:185

**`deprecated`** since v10.0.0 use createCipheriv()

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`options?` | stream.TransformOptions |

**Returns:** *[Cipher](../classes/_crypto_.cipher.md)*

___

###  createCipheriv

▸ **createCipheriv**(`algorithm`: [CipherCCMTypes](_crypto_.md#cipherccmtypes), `key`: [CipherKey](_crypto_.md#cipherkey), `iv`: [BinaryLike](_crypto_.md#binarylike) | null, `options`: [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md)): *[CipherCCM](../interfaces/_crypto_.cipherccm.md)*

Defined in node_modules/@types/node/crypto.d.ts:187

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherCCMTypes](_crypto_.md#cipherccmtypes) |
`key` | [CipherKey](_crypto_.md#cipherkey) |
`iv` | [BinaryLike](_crypto_.md#binarylike) &#124; null |
`options` | [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md) |

**Returns:** *[CipherCCM](../interfaces/_crypto_.cipherccm.md)*

▸ **createCipheriv**(`algorithm`: [CipherGCMTypes](_crypto_.md#ciphergcmtypes), `key`: [CipherKey](_crypto_.md#cipherkey), `iv`: [BinaryLike](_crypto_.md#binarylike) | null, `options?`: [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md)): *[CipherGCM](../interfaces/_crypto_.ciphergcm.md)*

Defined in node_modules/@types/node/crypto.d.ts:193

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherGCMTypes](_crypto_.md#ciphergcmtypes) |
`key` | [CipherKey](_crypto_.md#cipherkey) |
`iv` | [BinaryLike](_crypto_.md#binarylike) &#124; null |
`options?` | [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md) |

**Returns:** *[CipherGCM](../interfaces/_crypto_.ciphergcm.md)*

▸ **createCipheriv**(`algorithm`: string, `key`: [CipherKey](_crypto_.md#cipherkey), `iv`: [BinaryLike](_crypto_.md#binarylike) | null, `options?`: stream.TransformOptions): *[Cipher](../classes/_crypto_.cipher.md)*

Defined in node_modules/@types/node/crypto.d.ts:199

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`key` | [CipherKey](_crypto_.md#cipherkey) |
`iv` | [BinaryLike](_crypto_.md#binarylike) &#124; null |
`options?` | stream.TransformOptions |

**Returns:** *[Cipher](../classes/_crypto_.cipher.md)*

___

###  createDecipher

▸ **createDecipher**(`algorithm`: [CipherCCMTypes](_crypto_.md#cipherccmtypes), `password`: [BinaryLike](_crypto_.md#binarylike), `options`: [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md)): *[DecipherCCM](../interfaces/_crypto_.decipherccm.md)*

Defined in node_modules/@types/node/crypto.d.ts:224

**`deprecated`** since v10.0.0 use createCipheriv()

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherCCMTypes](_crypto_.md#cipherccmtypes) |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`options` | [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md) |

**Returns:** *[DecipherCCM](../interfaces/_crypto_.decipherccm.md)*

▸ **createDecipher**(`algorithm`: [CipherGCMTypes](_crypto_.md#ciphergcmtypes), `password`: [BinaryLike](_crypto_.md#binarylike), `options?`: [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md)): *[DecipherGCM](../interfaces/_crypto_.deciphergcm.md)*

Defined in node_modules/@types/node/crypto.d.ts:226

**`deprecated`** since v10.0.0 use createCipheriv()

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherGCMTypes](_crypto_.md#ciphergcmtypes) |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`options?` | [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md) |

**Returns:** *[DecipherGCM](../interfaces/_crypto_.deciphergcm.md)*

▸ **createDecipher**(`algorithm`: string, `password`: [BinaryLike](_crypto_.md#binarylike), `options?`: stream.TransformOptions): *[Decipher](../classes/_crypto_.decipher.md)*

Defined in node_modules/@types/node/crypto.d.ts:228

**`deprecated`** since v10.0.0 use createCipheriv()

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`options?` | stream.TransformOptions |

**Returns:** *[Decipher](../classes/_crypto_.decipher.md)*

___

###  createDecipheriv

▸ **createDecipheriv**(`algorithm`: [CipherCCMTypes](_crypto_.md#cipherccmtypes), `key`: [BinaryLike](_crypto_.md#binarylike), `iv`: [BinaryLike](_crypto_.md#binarylike) | null, `options`: [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md)): *[DecipherCCM](../interfaces/_crypto_.decipherccm.md)*

Defined in node_modules/@types/node/crypto.d.ts:230

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherCCMTypes](_crypto_.md#cipherccmtypes) |
`key` | [BinaryLike](_crypto_.md#binarylike) |
`iv` | [BinaryLike](_crypto_.md#binarylike) &#124; null |
`options` | [CipherCCMOptions](../interfaces/_crypto_.cipherccmoptions.md) |

**Returns:** *[DecipherCCM](../interfaces/_crypto_.decipherccm.md)*

▸ **createDecipheriv**(`algorithm`: [CipherGCMTypes](_crypto_.md#ciphergcmtypes), `key`: [BinaryLike](_crypto_.md#binarylike), `iv`: [BinaryLike](_crypto_.md#binarylike) | null, `options?`: [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md)): *[DecipherGCM](../interfaces/_crypto_.deciphergcm.md)*

Defined in node_modules/@types/node/crypto.d.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | [CipherGCMTypes](_crypto_.md#ciphergcmtypes) |
`key` | [BinaryLike](_crypto_.md#binarylike) |
`iv` | [BinaryLike](_crypto_.md#binarylike) &#124; null |
`options?` | [CipherGCMOptions](../interfaces/_crypto_.ciphergcmoptions.md) |

**Returns:** *[DecipherGCM](../interfaces/_crypto_.deciphergcm.md)*

▸ **createDecipheriv**(`algorithm`: string, `key`: [BinaryLike](_crypto_.md#binarylike), `iv`: [BinaryLike](_crypto_.md#binarylike) | null, `options?`: stream.TransformOptions): *[Decipher](../classes/_crypto_.decipher.md)*

Defined in node_modules/@types/node/crypto.d.ts:242

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`key` | [BinaryLike](_crypto_.md#binarylike) |
`iv` | [BinaryLike](_crypto_.md#binarylike) &#124; null |
`options?` | stream.TransformOptions |

**Returns:** *[Decipher](../classes/_crypto_.decipher.md)*

___

###  createDiffieHellman

▸ **createDiffieHellman**(`prime_length`: number, `generator?`: number | [ArrayBufferView](nodejs.md#arraybufferview)): *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

Defined in node_modules/@types/node/crypto.d.ts:317

**Parameters:**

Name | Type |
------ | ------ |
`prime_length` | number |
`generator?` | number &#124; [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

▸ **createDiffieHellman**(`prime`: [ArrayBufferView](nodejs.md#arraybufferview)): *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

Defined in node_modules/@types/node/crypto.d.ts:318

**Parameters:**

Name | Type |
------ | ------ |
`prime` | [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

▸ **createDiffieHellman**(`prime`: string, `prime_encoding`: [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding)): *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

Defined in node_modules/@types/node/crypto.d.ts:319

**Parameters:**

Name | Type |
------ | ------ |
`prime` | string |
`prime_encoding` | [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding) |

**Returns:** *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

▸ **createDiffieHellman**(`prime`: string, `prime_encoding`: [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding), `generator`: number | [ArrayBufferView](nodejs.md#arraybufferview)): *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

Defined in node_modules/@types/node/crypto.d.ts:320

**Parameters:**

Name | Type |
------ | ------ |
`prime` | string |
`prime_encoding` | [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding) |
`generator` | number &#124; [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

▸ **createDiffieHellman**(`prime`: string, `prime_encoding`: [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding), `generator`: string, `generator_encoding`: [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding)): *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

Defined in node_modules/@types/node/crypto.d.ts:321

**Parameters:**

Name | Type |
------ | ------ |
`prime` | string |
`prime_encoding` | [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding) |
`generator` | string |
`generator_encoding` | [HexBase64Latin1Encoding](_crypto_.md#hexbase64latin1encoding) |

**Returns:** *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

___

###  createECDH

▸ **createECDH**(`curve_name`: string): *[ECDH](../classes/_crypto_.ecdh.md)*

Defined in node_modules/@types/node/crypto.d.ts:428

**Parameters:**

Name | Type |
------ | ------ |
`curve_name` | string |

**Returns:** *[ECDH](../classes/_crypto_.ecdh.md)*

___

###  createHash

▸ **createHash**(`algorithm`: string, `options?`: [HashOptions](../interfaces/_crypto_.hashoptions.md)): *[Hash](../classes/_crypto_.hash.md)*

Defined in node_modules/@types/node/crypto.d.ts:120

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`options?` | [HashOptions](../interfaces/_crypto_.hashoptions.md) |

**Returns:** *[Hash](../classes/_crypto_.hash.md)*

___

###  createHmac

▸ **createHmac**(`algorithm`: string, `key`: [BinaryLike](_crypto_.md#binarylike), `options?`: stream.TransformOptions): *[Hmac](../classes/_crypto_.hmac.md)*

Defined in node_modules/@types/node/crypto.d.ts:121

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`key` | [BinaryLike](_crypto_.md#binarylike) |
`options?` | stream.TransformOptions |

**Returns:** *[Hmac](../classes/_crypto_.hmac.md)*

___

###  createPrivateKey

▸ **createPrivateKey**(`key`: [PrivateKeyInput](../interfaces/_crypto_.privatekeyinput.md) | string | [Buffer](../classes/buffer.md)): *[KeyObject](../classes/_crypto_.keyobject.md)*

Defined in node_modules/@types/node/crypto.d.ts:278

**Parameters:**

Name | Type |
------ | ------ |
`key` | [PrivateKeyInput](../interfaces/_crypto_.privatekeyinput.md) &#124; string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *[KeyObject](../classes/_crypto_.keyobject.md)*

___

###  createPublicKey

▸ **createPublicKey**(`key`: [PublicKeyInput](../interfaces/_crypto_.publickeyinput.md) | string | [Buffer](../classes/buffer.md) | [KeyObject](../classes/_crypto_.keyobject.md)): *[KeyObject](../classes/_crypto_.keyobject.md)*

Defined in node_modules/@types/node/crypto.d.ts:279

**Parameters:**

Name | Type |
------ | ------ |
`key` | [PublicKeyInput](../interfaces/_crypto_.publickeyinput.md) &#124; string &#124; [Buffer](../classes/buffer.md) &#124; [KeyObject](../classes/_crypto_.keyobject.md) |

**Returns:** *[KeyObject](../classes/_crypto_.keyobject.md)*

___

###  createSecretKey

▸ **createSecretKey**(`key`: [Buffer](../classes/buffer.md)): *[KeyObject](../classes/_crypto_.keyobject.md)*

Defined in node_modules/@types/node/crypto.d.ts:280

**Parameters:**

Name | Type |
------ | ------ |
`key` | [Buffer](../classes/buffer.md) |

**Returns:** *[KeyObject](../classes/_crypto_.keyobject.md)*

___

###  createSign

▸ **createSign**(`algorithm`: string, `options?`: stream.WritableOptions): *[Signer](../classes/_crypto_.signer.md)*

Defined in node_modules/@types/node/crypto.d.ts:282

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`options?` | stream.WritableOptions |

**Returns:** *[Signer](../classes/_crypto_.signer.md)*

___

###  createVerify

▸ **createVerify**(`algorithm`: string, `options?`: stream.WritableOptions): *[Verify](../classes/_crypto_.verify.md)*

Defined in node_modules/@types/node/crypto.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`options?` | stream.WritableOptions |

**Returns:** *[Verify](../classes/_crypto_.verify.md)*

___

###  generateKeyPairSync

▸ **generateKeyPairSync**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "pem"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, string›*

Defined in node_modules/@types/node/crypto.d.ts:536

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "pem"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, string›*

▸ **generateKeyPairSync**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "der"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/crypto.d.ts:537

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "der"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, [Buffer](../classes/buffer.md)›*

▸ **generateKeyPairSync**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "pem"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), string›*

Defined in node_modules/@types/node/crypto.d.ts:538

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "pem"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), string›*

▸ **generateKeyPairSync**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "der"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/crypto.d.ts:539

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "der"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), [Buffer](../classes/buffer.md)›*

▸ **generateKeyPairSync**(`type`: "rsa", `options`: [RSAKeyPairKeyObjectOptions](../interfaces/_crypto_.rsakeypairkeyobjectoptions.md)): *[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)*

Defined in node_modules/@types/node/crypto.d.ts:540

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairKeyObjectOptions](../interfaces/_crypto_.rsakeypairkeyobjectoptions.md) |

**Returns:** *[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)*

▸ **generateKeyPairSync**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "pem"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, string›*

Defined in node_modules/@types/node/crypto.d.ts:542

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "pem"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, string›*

▸ **generateKeyPairSync**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "der"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/crypto.d.ts:543

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "der"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, [Buffer](../classes/buffer.md)›*

▸ **generateKeyPairSync**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "pem"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), string›*

Defined in node_modules/@types/node/crypto.d.ts:544

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "pem"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), string›*

▸ **generateKeyPairSync**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "der"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/crypto.d.ts:545

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "der"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), [Buffer](../classes/buffer.md)›*

▸ **generateKeyPairSync**(`type`: "dsa", `options`: [DSAKeyPairKeyObjectOptions](../interfaces/_crypto_.dsakeypairkeyobjectoptions.md)): *[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)*

Defined in node_modules/@types/node/crypto.d.ts:546

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairKeyObjectOptions](../interfaces/_crypto_.dsakeypairkeyobjectoptions.md) |

**Returns:** *[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)*

▸ **generateKeyPairSync**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "pem"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, string›*

Defined in node_modules/@types/node/crypto.d.ts:548

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "pem"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, string›*

▸ **generateKeyPairSync**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "der"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/crypto.d.ts:549

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "der"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹string, [Buffer](../classes/buffer.md)›*

▸ **generateKeyPairSync**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "pem"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), string›*

Defined in node_modules/@types/node/crypto.d.ts:550

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "pem"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), string›*

▸ **generateKeyPairSync**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "der"›): *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/crypto.d.ts:551

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "der"› |

**Returns:** *[KeyPairSyncResult](../interfaces/_crypto_.keypairsyncresult.md)‹[Buffer](../classes/buffer.md), [Buffer](../classes/buffer.md)›*

▸ **generateKeyPairSync**(`type`: "ec", `options`: [ECKeyPairKeyObjectOptions](../interfaces/_crypto_.eckeypairkeyobjectoptions.md)): *[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)*

Defined in node_modules/@types/node/crypto.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairKeyObjectOptions](../interfaces/_crypto_.eckeypairkeyobjectoptions.md) |

**Returns:** *[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)*

___

###  getCiphers

▸ **getCiphers**(): *string[]*

Defined in node_modules/@types/node/crypto.d.ts:403

**Returns:** *string[]*

___

###  getCurves

▸ **getCurves**(): *string[]*

Defined in node_modules/@types/node/crypto.d.ts:404

**Returns:** *string[]*

___

###  getDiffieHellman

▸ **getDiffieHellman**(`group_name`: string): *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

Defined in node_modules/@types/node/crypto.d.ts:344

**Parameters:**

Name | Type |
------ | ------ |
`group_name` | string |

**Returns:** *[DiffieHellman](../classes/_crypto_.diffiehellman.md)*

___

###  getHashes

▸ **getHashes**(): *string[]*

Defined in node_modules/@types/node/crypto.d.ts:405

**Returns:** *string[]*

___

###  pbkdf2

▸ **pbkdf2**(`password`: [BinaryLike](_crypto_.md#binarylike), `salt`: [BinaryLike](_crypto_.md#binarylike), `iterations`: number, `keylen`: number, `digest`: string, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:345

**Parameters:**

▪ **password**: *[BinaryLike](_crypto_.md#binarylike)*

▪ **salt**: *[BinaryLike](_crypto_.md#binarylike)*

▪ **iterations**: *number*

▪ **keylen**: *number*

▪ **digest**: *string*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `derivedKey`: [Buffer](../classes/buffer.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`derivedKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

___

###  pbkdf2Sync

▸ **pbkdf2Sync**(`password`: [BinaryLike](_crypto_.md#binarylike), `salt`: [BinaryLike](_crypto_.md#binarylike), `iterations`: number, `keylen`: number, `digest`: string): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:353

**Parameters:**

Name | Type |
------ | ------ |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`salt` | [BinaryLike](_crypto_.md#binarylike) |
`iterations` | number |
`keylen` | number |
`digest` | string |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  privateDecrypt

▸ **privateDecrypt**(`private_key`: [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) | [KeyLike](_crypto_.md#keylike), `buffer`: [ArrayBufferView](nodejs.md#arraybufferview)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:401

**Parameters:**

Name | Type |
------ | ------ |
`private_key` | [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) &#124; [KeyLike](_crypto_.md#keylike) |
`buffer` | [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  privateEncrypt

▸ **privateEncrypt**(`private_key`: [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) | [KeyLike](_crypto_.md#keylike), `buffer`: [ArrayBufferView](nodejs.md#arraybufferview)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:402

**Parameters:**

Name | Type |
------ | ------ |
`private_key` | [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) &#124; [KeyLike](_crypto_.md#keylike) |
`buffer` | [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  pseudoRandomBytes

▸ **pseudoRandomBytes**(`size`: number): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:357

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **pseudoRandomBytes**(`size`: number, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:358

**Parameters:**

▪ **size**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `buf`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`buf` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

___

###  publicDecrypt

▸ **publicDecrypt**(`key`: [RsaPublicKey](../interfaces/_crypto_.rsapublickey.md) | [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) | [KeyLike](_crypto_.md#keylike), `buffer`: [ArrayBufferView](nodejs.md#arraybufferview)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:400

**Parameters:**

Name | Type |
------ | ------ |
`key` | [RsaPublicKey](../interfaces/_crypto_.rsapublickey.md) &#124; [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) &#124; [KeyLike](_crypto_.md#keylike) |
`buffer` | [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  publicEncrypt

▸ **publicEncrypt**(`key`: [RsaPublicKey](../interfaces/_crypto_.rsapublickey.md) | [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) | [KeyLike](_crypto_.md#keylike), `buffer`: [ArrayBufferView](nodejs.md#arraybufferview)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:399

**Parameters:**

Name | Type |
------ | ------ |
`key` | [RsaPublicKey](../interfaces/_crypto_.rsapublickey.md) &#124; [RsaPrivateKey](../interfaces/_crypto_.rsaprivatekey.md) &#124; [KeyLike](_crypto_.md#keylike) |
`buffer` | [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  randomBytes

▸ **randomBytes**(`size`: number): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:355

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **randomBytes**(`size`: number, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:356

**Parameters:**

▪ **size**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `buf`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`buf` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

___

###  randomFill

▸ **randomFill**<**T**>(`buffer`: T, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:361

**Type parameters:**

▪ **T**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **buffer**: *T*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `buf`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`buf` | T |

**Returns:** *void*

▸ **randomFill**<**T**>(`buffer`: T, `offset`: number, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:362

**Type parameters:**

▪ **T**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **buffer**: *T*

▪ **offset**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `buf`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`buf` | T |

**Returns:** *void*

▸ **randomFill**<**T**>(`buffer`: T, `offset`: number, `size`: number, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:363

**Type parameters:**

▪ **T**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **buffer**: *T*

▪ **offset**: *number*

▪ **size**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `buf`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`buf` | T |

**Returns:** *void*

___

###  randomFillSync

▸ **randomFillSync**<**T**>(`buffer`: T, `offset?`: undefined | number, `size?`: undefined | number): *T*

Defined in node_modules/@types/node/crypto.d.ts:360

**Type parameters:**

▪ **T**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | T |
`offset?` | undefined &#124; number |
`size?` | undefined &#124; number |

**Returns:** *T*

___

###  scrypt

▸ **scrypt**(`password`: [BinaryLike](_crypto_.md#binarylike), `salt`: [BinaryLike](_crypto_.md#binarylike), `keylen`: number, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:371

**Parameters:**

▪ **password**: *[BinaryLike](_crypto_.md#binarylike)*

▪ **salt**: *[BinaryLike](_crypto_.md#binarylike)*

▪ **keylen**: *number*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `derivedKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`derivedKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **scrypt**(`password`: [BinaryLike](_crypto_.md#binarylike), `salt`: [BinaryLike](_crypto_.md#binarylike), `keylen`: number, `options`: [ScryptOptions](../interfaces/_crypto_.scryptoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:376

**Parameters:**

▪ **password**: *[BinaryLike](_crypto_.md#binarylike)*

▪ **salt**: *[BinaryLike](_crypto_.md#binarylike)*

▪ **keylen**: *number*

▪ **options**: *[ScryptOptions](../interfaces/_crypto_.scryptoptions.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `derivedKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`derivedKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

___

###  scryptSync

▸ **scryptSync**(`password`: [BinaryLike](_crypto_.md#binarylike), `salt`: [BinaryLike](_crypto_.md#binarylike), `keylen`: number, `options?`: [ScryptOptions](../interfaces/_crypto_.scryptoptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:383

**Parameters:**

Name | Type |
------ | ------ |
`password` | [BinaryLike](_crypto_.md#binarylike) |
`salt` | [BinaryLike](_crypto_.md#binarylike) |
`keylen` | number |
`options?` | [ScryptOptions](../interfaces/_crypto_.scryptoptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  sign

▸ **sign**(`algorithm`: string | null | undefined, `data`: [ArrayBufferView](nodejs.md#arraybufferview), `key`: [KeyLike](_crypto_.md#keylike) | [SignPrivateKeyInput](../interfaces/_crypto_.signprivatekeyinput.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:600

Calculates and returns the signature for `data` using the given private key and
algorithm. If `algorithm` is `null` or `undefined`, then the algorithm is
dependent upon the key type (especially Ed25519 and Ed448).

If `key` is not a [`KeyObject`][], this function behaves as if `key` had been
passed to [`crypto.createPrivateKey()`][].

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string &#124; null &#124; undefined |
`data` | [ArrayBufferView](nodejs.md#arraybufferview) |
`key` | [KeyLike](_crypto_.md#keylike) &#124; [SignPrivateKeyInput](../interfaces/_crypto_.signprivatekeyinput.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  timingSafeEqual

▸ **timingSafeEqual**(`a`: [ArrayBufferView](nodejs.md#arraybufferview), `b`: [ArrayBufferView](nodejs.md#arraybufferview)): *boolean*

Defined in node_modules/@types/node/crypto.d.ts:429

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ArrayBufferView](nodejs.md#arraybufferview) |
`b` | [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *boolean*

___

###  verify

▸ **verify**(`algorithm`: string | null | undefined, `data`: [ArrayBufferView](nodejs.md#arraybufferview), `key`: [KeyLike](_crypto_.md#keylike) | [VerifyKeyWithOptions](../interfaces/_crypto_.verifykeywithoptions.md), `signature`: [ArrayBufferView](nodejs.md#arraybufferview)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:613

Calculates and returns the signature for `data` using the given private key and
algorithm. If `algorithm` is `null` or `undefined`, then the algorithm is
dependent upon the key type (especially Ed25519 and Ed448).

If `key` is not a [`KeyObject`][], this function behaves as if `key` had been
passed to [`crypto.createPublicKey()`][].

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string &#124; null &#124; undefined |
`data` | [ArrayBufferView](nodejs.md#arraybufferview) |
`key` | [KeyLike](_crypto_.md#keylike) &#124; [VerifyKeyWithOptions](../interfaces/_crypto_.verifykeywithoptions.md) |
`signature` | [ArrayBufferView](nodejs.md#arraybufferview) |

**Returns:** *[Buffer](../classes/buffer.md)*
