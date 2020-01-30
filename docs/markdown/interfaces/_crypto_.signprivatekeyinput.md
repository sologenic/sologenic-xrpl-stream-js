[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [SignPrivateKeyInput](_crypto_.signprivatekeyinput.md)

# Interface: SignPrivateKeyInput

## Hierarchy

* [PrivateKeyInput](_crypto_.privatekeyinput.md)

* [SigningOptions](_crypto_.signingoptions.md)

  ↳ **SignPrivateKeyInput**

## Index

### Properties

* [format](_crypto_.signprivatekeyinput.md#optional-format)
* [key](_crypto_.signprivatekeyinput.md#key)
* [padding](_crypto_.signprivatekeyinput.md#optional-padding)
* [passphrase](_crypto_.signprivatekeyinput.md#optional-passphrase)
* [saltLength](_crypto_.signprivatekeyinput.md#optional-saltlength)
* [type](_crypto_.signprivatekeyinput.md#optional-type)

## Properties

### `Optional` format

• **format**? : *[KeyFormat](../modules/_crypto_.md#keyformat)*

*Inherited from [PrivateKeyInput](_crypto_.privatekeyinput.md).[format](_crypto_.privatekeyinput.md#optional-format)*

Defined in node_modules/@types/node/crypto.d.ts:267

___

###  key

• **key**: *string | [Buffer](../classes/buffer.md)*

*Inherited from [PrivateKeyInput](_crypto_.privatekeyinput.md).[key](_crypto_.privatekeyinput.md#key)*

Defined in node_modules/@types/node/crypto.d.ts:266

___

### `Optional` padding

• **padding**? : *undefined | number*

*Inherited from [SigningOptions](_crypto_.signingoptions.md).[padding](_crypto_.signingoptions.md#optional-padding)*

Defined in node_modules/@types/node/crypto.d.ts:288

**`see`** crypto.constants.RSA_PKCS1_PADDING

___

### `Optional` passphrase

• **passphrase**? : *string | [Buffer](../classes/buffer.md)*

*Inherited from [PrivateKeyInput](_crypto_.privatekeyinput.md).[passphrase](_crypto_.privatekeyinput.md#optional-passphrase)*

Defined in node_modules/@types/node/crypto.d.ts:269

___

### `Optional` saltLength

• **saltLength**? : *undefined | number*

*Inherited from [SigningOptions](_crypto_.signingoptions.md).[saltLength](_crypto_.signingoptions.md#optional-saltlength)*

Defined in node_modules/@types/node/crypto.d.ts:289

___

### `Optional` type

• **type**? : *"pkcs1" | "pkcs8" | "sec1"*

*Inherited from [PrivateKeyInput](_crypto_.privatekeyinput.md).[type](_crypto_.privatekeyinput.md#optional-type)*

Defined in node_modules/@types/node/crypto.d.ts:268
