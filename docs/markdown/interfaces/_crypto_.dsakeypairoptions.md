[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [DSAKeyPairOptions](_crypto_.dsakeypairoptions.md)

# Interface: DSAKeyPairOptions <**PubF, PrivF**>

## Type parameters

▪ **PubF**: *[KeyFormat](../modules/_crypto_.md#keyformat)*

▪ **PrivF**: *[KeyFormat](../modules/_crypto_.md#keyformat)*

## Hierarchy

* **DSAKeyPairOptions**

## Index

### Properties

* [divisorLength](_crypto_.dsakeypairoptions.md#divisorlength)
* [modulusLength](_crypto_.dsakeypairoptions.md#moduluslength)
* [privateKeyEncoding](_crypto_.dsakeypairoptions.md#privatekeyencoding)
* [publicKeyEncoding](_crypto_.dsakeypairoptions.md#publickeyencoding)

## Properties

###  divisorLength

• **divisorLength**: *number*

Defined in node_modules/@types/node/crypto.d.ts:505

Size of q in bits

___

###  modulusLength

• **modulusLength**: *number*

Defined in node_modules/@types/node/crypto.d.ts:501

Key size in bits

___

###  privateKeyEncoding

• **privateKeyEncoding**: *[BasePrivateKeyEncodingOptions](_crypto_.baseprivatekeyencodingoptions.md)‹PrivF› & object*

Defined in node_modules/@types/node/crypto.d.ts:511

___

###  publicKeyEncoding

• **publicKeyEncoding**: *object*

Defined in node_modules/@types/node/crypto.d.ts:507

#### Type declaration:

* **format**: *PubF*

* **type**: *"spki"*
