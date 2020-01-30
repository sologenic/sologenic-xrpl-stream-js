[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [KeyObject](_crypto_.keyobject.md)

# Class: KeyObject

## Hierarchy

* **KeyObject**

  ↳ [VerifyKeyWithOptions](../interfaces/_crypto_.verifykeywithoptions.md)

## Index

### Constructors

* [constructor](_crypto_.keyobject.md#private-constructor)

### Properties

* [asymmetricKeySize](_crypto_.keyobject.md#optional-asymmetrickeysize)
* [asymmetricKeyType](_crypto_.keyobject.md#optional-asymmetrickeytype)
* [symmetricSize](_crypto_.keyobject.md#optional-symmetricsize)
* [type](_crypto_.keyobject.md#type)

### Methods

* [export](_crypto_.keyobject.md#export)

## Constructors

### `Private` constructor

\+ **new KeyObject**(): *[KeyObject](_crypto_.keyobject.md)*

Defined in node_modules/@types/node/crypto.d.ts:153

**Returns:** *[KeyObject](_crypto_.keyobject.md)*

## Properties

### `Optional` asymmetricKeySize

• **asymmetricKeySize**? : *undefined | number*

Defined in node_modules/@types/node/crypto.d.ts:160

For asymmetric keys, this property represents the size of the embedded key in
bytes. This property is `undefined` for symmetric keys.

___

### `Optional` asymmetricKeyType

• **asymmetricKeyType**? : *[KeyType](../modules/_crypto_.md#keytype)*

Defined in node_modules/@types/node/crypto.d.ts:155

___

### `Optional` symmetricSize

• **symmetricSize**? : *undefined | number*

Defined in node_modules/@types/node/crypto.d.ts:163

___

###  type

• **type**: *[KeyObjectType](../modules/_crypto_.md#keyobjecttype)*

Defined in node_modules/@types/node/crypto.d.ts:164

## Methods

###  export

▸ **export**(`options`: [KeyExportOptions](../interfaces/_crypto_.keyexportoptions.md)‹"pem"›): *string | [Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:161

**Parameters:**

Name | Type |
------ | ------ |
`options` | [KeyExportOptions](../interfaces/_crypto_.keyexportoptions.md)‹"pem"› |

**Returns:** *string | [Buffer](buffer.md)*

▸ **export**(`options?`: [KeyExportOptions](../interfaces/_crypto_.keyexportoptions.md)‹"der"›): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/crypto.d.ts:162

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [KeyExportOptions](../interfaces/_crypto_.keyexportoptions.md)‹"der"› |

**Returns:** *[Buffer](buffer.md)*
