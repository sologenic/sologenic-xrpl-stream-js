[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [RSAKeyPairOptions](_crypto_.rsakeypairoptions.md)

# Interface: RSAKeyPairOptions <**PubF, PrivF**>

## Type parameters

▪ **PubF**: *[KeyFormat](../modules/_crypto_.md#keyformat)*

▪ **PrivF**: *[KeyFormat](../modules/_crypto_.md#keyformat)*

## Hierarchy

* **RSAKeyPairOptions**

## Index

### Properties

* [modulusLength](_crypto_.rsakeypairoptions.md#moduluslength)
* [privateKeyEncoding](_crypto_.rsakeypairoptions.md#privatekeyencoding)
* [publicExponent](_crypto_.rsakeypairoptions.md#optional-publicexponent)
* [publicKeyEncoding](_crypto_.rsakeypairoptions.md#publickeyencoding)

## Properties

###  modulusLength

• **modulusLength**: *number*

Defined in node_modules/@types/node/crypto.d.ts:482

Key size in bits

___

###  privateKeyEncoding

• **privateKeyEncoding**: *[BasePrivateKeyEncodingOptions](_crypto_.baseprivatekeyencodingoptions.md)‹PrivF› & object*

Defined in node_modules/@types/node/crypto.d.ts:492

___

### `Optional` publicExponent

• **publicExponent**? : *undefined | number*

Defined in node_modules/@types/node/crypto.d.ts:486

**`default`** 0x10001

___

###  publicKeyEncoding

• **publicKeyEncoding**: *object*

Defined in node_modules/@types/node/crypto.d.ts:488

#### Type declaration:

* **format**: *PubF*

* **type**: *"pkcs1" | "spki"*
