[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [ECKeyPairOptions](_crypto_.eckeypairoptions.md)

# Interface: ECKeyPairOptions <**PubF, PrivF**>

## Type parameters

▪ **PubF**: *[KeyFormat](../modules/_crypto_.md#keyformat)*

▪ **PrivF**: *[KeyFormat](../modules/_crypto_.md#keyformat)*

## Hierarchy

* **ECKeyPairOptions**

## Index

### Properties

* [namedCurve](_crypto_.eckeypairoptions.md#namedcurve)
* [privateKeyEncoding](_crypto_.eckeypairoptions.md#privatekeyencoding)
* [publicKeyEncoding](_crypto_.eckeypairoptions.md#publickeyencoding)

## Properties

###  namedCurve

• **namedCurve**: *string*

Defined in node_modules/@types/node/crypto.d.ts:520

Name of the curve to use.

___

###  privateKeyEncoding

• **privateKeyEncoding**: *[BasePrivateKeyEncodingOptions](_crypto_.baseprivatekeyencodingoptions.md)‹PrivF› & object*

Defined in node_modules/@types/node/crypto.d.ts:526

___

###  publicKeyEncoding

• **publicKeyEncoding**: *object*

Defined in node_modules/@types/node/crypto.d.ts:522

#### Type declaration:

* **format**: *PubF*

* **type**: *"pkcs1" | "spki"*
