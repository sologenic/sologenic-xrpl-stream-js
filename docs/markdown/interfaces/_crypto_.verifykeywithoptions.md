[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [VerifyKeyWithOptions](_crypto_.verifykeywithoptions.md)

# Interface: VerifyKeyWithOptions

## Hierarchy

* [KeyObject](../classes/_crypto_.keyobject.md)

* [SigningOptions](_crypto_.signingoptions.md)

  ↳ **VerifyKeyWithOptions**

## Index

### Properties

* [asymmetricKeySize](_crypto_.verifykeywithoptions.md#optional-asymmetrickeysize)
* [asymmetricKeyType](_crypto_.verifykeywithoptions.md#optional-asymmetrickeytype)
* [padding](_crypto_.verifykeywithoptions.md#optional-padding)
* [saltLength](_crypto_.verifykeywithoptions.md#optional-saltlength)
* [symmetricSize](_crypto_.verifykeywithoptions.md#optional-symmetricsize)
* [type](_crypto_.verifykeywithoptions.md#type)

### Methods

* [export](_crypto_.verifykeywithoptions.md#export)

## Properties

### `Optional` asymmetricKeySize

• **asymmetricKeySize**? : *undefined | number*

*Inherited from [KeyObject](../classes/_crypto_.keyobject.md).[asymmetricKeySize](../classes/_crypto_.keyobject.md#optional-asymmetrickeysize)*

Defined in node_modules/@types/node/crypto.d.ts:160

For asymmetric keys, this property represents the size of the embedded key in
bytes. This property is `undefined` for symmetric keys.

___

### `Optional` asymmetricKeyType

• **asymmetricKeyType**? : *[KeyType](../modules/_crypto_.md#keytype)*

*Inherited from [KeyObject](../classes/_crypto_.keyobject.md).[asymmetricKeyType](../classes/_crypto_.keyobject.md#optional-asymmetrickeytype)*

Defined in node_modules/@types/node/crypto.d.ts:155

___

### `Optional` padding

• **padding**? : *undefined | number*

*Inherited from [SigningOptions](_crypto_.signingoptions.md).[padding](_crypto_.signingoptions.md#optional-padding)*

Defined in node_modules/@types/node/crypto.d.ts:288

**`see`** crypto.constants.RSA_PKCS1_PADDING

___

### `Optional` saltLength

• **saltLength**? : *undefined | number*

*Inherited from [SigningOptions](_crypto_.signingoptions.md).[saltLength](_crypto_.signingoptions.md#optional-saltlength)*

Defined in node_modules/@types/node/crypto.d.ts:289

___

### `Optional` symmetricSize

• **symmetricSize**? : *undefined | number*

*Inherited from [KeyObject](../classes/_crypto_.keyobject.md).[symmetricSize](../classes/_crypto_.keyobject.md#optional-symmetricsize)*

Defined in node_modules/@types/node/crypto.d.ts:163

___

###  type

• **type**: *[KeyObjectType](../modules/_crypto_.md#keyobjecttype)*

*Inherited from [KeyObject](../classes/_crypto_.keyobject.md).[type](../classes/_crypto_.keyobject.md#type)*

Defined in node_modules/@types/node/crypto.d.ts:164

## Methods

###  export

▸ **export**(`options`: [KeyExportOptions](_crypto_.keyexportoptions.md)‹"pem"›): *string | [Buffer](../classes/buffer.md)*

*Inherited from [KeyObject](../classes/_crypto_.keyobject.md).[export](../classes/_crypto_.keyobject.md#export)*

Defined in node_modules/@types/node/crypto.d.ts:161

**Parameters:**

Name | Type |
------ | ------ |
`options` | [KeyExportOptions](_crypto_.keyexportoptions.md)‹"pem"› |

**Returns:** *string | [Buffer](../classes/buffer.md)*

▸ **export**(`options?`: [KeyExportOptions](_crypto_.keyexportoptions.md)‹"der"›): *[Buffer](../classes/buffer.md)*

*Inherited from [KeyObject](../classes/_crypto_.keyobject.md).[export](../classes/_crypto_.keyobject.md#export)*

Defined in node_modules/@types/node/crypto.d.ts:162

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [KeyExportOptions](_crypto_.keyexportoptions.md)‹"der"› |

**Returns:** *[Buffer](../classes/buffer.md)*
