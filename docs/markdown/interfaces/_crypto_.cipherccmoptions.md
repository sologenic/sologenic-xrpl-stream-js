[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](../modules/_crypto_.md) › [CipherCCMOptions](_crypto_.cipherccmoptions.md)

# Interface: CipherCCMOptions

## Hierarchy

  ↳ [TransformOptions](_stream_.internal.transformoptions.md)

  ↳ **CipherCCMOptions**

## Index

### Properties

* [allowHalfOpen](_crypto_.cipherccmoptions.md#optional-allowhalfopen)
* [authTagLength](_crypto_.cipherccmoptions.md#authtaglength)
* [autoDestroy](_crypto_.cipherccmoptions.md#optional-autodestroy)
* [decodeStrings](_crypto_.cipherccmoptions.md#optional-decodestrings)
* [defaultEncoding](_crypto_.cipherccmoptions.md#optional-defaultencoding)
* [emitClose](_crypto_.cipherccmoptions.md#optional-emitclose)
* [encoding](_crypto_.cipherccmoptions.md#optional-encoding)
* [highWaterMark](_crypto_.cipherccmoptions.md#optional-highwatermark)
* [objectMode](_crypto_.cipherccmoptions.md#optional-objectmode)
* [readableObjectMode](_crypto_.cipherccmoptions.md#optional-readableobjectmode)
* [writableObjectMode](_crypto_.cipherccmoptions.md#optional-writableobjectmode)

### Methods

* [destroy](_crypto_.cipherccmoptions.md#optional-destroy)
* [final](_crypto_.cipherccmoptions.md#optional-final)
* [flush](_crypto_.cipherccmoptions.md#optional-flush)
* [read](_crypto_.cipherccmoptions.md#optional-read)
* [transform](_crypto_.cipherccmoptions.md#optional-transform)
* [write](_crypto_.cipherccmoptions.md#optional-write)
* [writev](_crypto_.cipherccmoptions.md#optional-writev)

## Properties

### `Optional` allowHalfOpen

• **allowHalfOpen**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[allowHalfOpen](_crypto_.hashoptions.md#optional-allowhalfopen)*

Defined in node_modules/@types/node/stream.d.ts:209

___

###  authTagLength

• **authTagLength**: *number*

Defined in node_modules/@types/node/crypto.d.ts:175

___

### `Optional` autoDestroy

• **autoDestroy**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[autoDestroy](_crypto_.hashoptions.md#optional-autodestroy)*

*Overrides [WritableOptions](_stream_.internal.writableoptions.md).[autoDestroy](_stream_.internal.writableoptions.md#optional-autodestroy)*

Defined in node_modules/@types/node/stream.d.ts:17

___

### `Optional` decodeStrings

• **decodeStrings**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[decodeStrings](_crypto_.hashoptions.md#optional-decodestrings)*

Defined in node_modules/@types/node/stream.d.ts:108

___

### `Optional` defaultEncoding

• **defaultEncoding**? : *undefined | string*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[defaultEncoding](_crypto_.hashoptions.md#optional-defaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:109

___

### `Optional` emitClose

• **emitClose**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[emitClose](_crypto_.hashoptions.md#optional-emitclose)*

Defined in node_modules/@types/node/stream.d.ts:111

___

### `Optional` encoding

• **encoding**? : *undefined | string*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[encoding](_crypto_.hashoptions.md#optional-encoding)*

Defined in node_modules/@types/node/stream.d.ts:13

___

### `Optional` highWaterMark

• **highWaterMark**? : *undefined | number*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[highWaterMark](_crypto_.hashoptions.md#optional-highwatermark)*

*Overrides [WritableOptions](_stream_.internal.writableoptions.md).[highWaterMark](_stream_.internal.writableoptions.md#optional-highwatermark)*

Defined in node_modules/@types/node/stream.d.ts:12

___

### `Optional` objectMode

• **objectMode**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[objectMode](_crypto_.hashoptions.md#optional-objectmode)*

*Overrides [WritableOptions](_stream_.internal.writableoptions.md).[objectMode](_stream_.internal.writableoptions.md#optional-objectmode)*

Defined in node_modules/@types/node/stream.d.ts:14

___

### `Optional` readableObjectMode

• **readableObjectMode**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[readableObjectMode](_crypto_.hashoptions.md#optional-readableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:210

___

### `Optional` writableObjectMode

• **writableObjectMode**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[writableObjectMode](_crypto_.hashoptions.md#optional-writableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:211

## Methods

### `Optional` destroy

▸ **destroy**(`this`: [Transform](../classes/_stream_.internal.transform.md), `error`: [Error](error.md) | null, `callback`: function): *void*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[destroy](_crypto_.hashoptions.md#optional-destroy)*

*Overrides [DuplexOptions](_stream_.internal.duplexoptions.md).[destroy](_stream_.internal.duplexoptions.md#optional-destroy)*

Defined in node_modules/@types/node/stream.d.ts:248

**Parameters:**

▪ **this**: *[Transform](../classes/_stream_.internal.transform.md)*

▪ **error**: *[Error](error.md) | null*

▪ **callback**: *function*

▸ (`error`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) &#124; null |

**Returns:** *void*

___

### `Optional` final

▸ **final**(`this`: [Transform](../classes/_stream_.internal.transform.md), `callback`: function): *void*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[final](_crypto_.hashoptions.md#optional-final)*

*Overrides [DuplexOptions](_stream_.internal.duplexoptions.md).[final](_stream_.internal.duplexoptions.md#optional-final)*

Defined in node_modules/@types/node/stream.d.ts:247

**Parameters:**

▪ **this**: *[Transform](../classes/_stream_.internal.transform.md)*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*

___

### `Optional` flush

▸ **flush**(`this`: [Transform](../classes/_stream_.internal.transform.md), `callback`: [TransformCallback](../classes/_stream_.internal.md#static-transformcallback)): *void*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[flush](_crypto_.hashoptions.md#optional-flush)*

Defined in node_modules/@types/node/stream.d.ts:250

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Transform](../classes/_stream_.internal.transform.md) |
`callback` | [TransformCallback](../classes/_stream_.internal.md#static-transformcallback) |

**Returns:** *void*

___

### `Optional` read

▸ **read**(`this`: [Transform](../classes/_stream_.internal.transform.md), `size`: number): *void*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[read](_crypto_.hashoptions.md#optional-read)*

*Overrides [DuplexOptions](_stream_.internal.duplexoptions.md).[read](_stream_.internal.duplexoptions.md#optional-read)*

Defined in node_modules/@types/node/stream.d.ts:244

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Transform](../classes/_stream_.internal.transform.md) |
`size` | number |

**Returns:** *void*

___

### `Optional` transform

▸ **transform**(`this`: [Transform](../classes/_stream_.internal.transform.md), `chunk`: any, `encoding`: string, `callback`: [TransformCallback](../classes/_stream_.internal.md#static-transformcallback)): *void*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[transform](_crypto_.hashoptions.md#optional-transform)*

Defined in node_modules/@types/node/stream.d.ts:249

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Transform](../classes/_stream_.internal.transform.md) |
`chunk` | any |
`encoding` | string |
`callback` | [TransformCallback](../classes/_stream_.internal.md#static-transformcallback) |

**Returns:** *void*

___

### `Optional` write

▸ **write**(`this`: [Transform](../classes/_stream_.internal.transform.md), `chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[write](_crypto_.hashoptions.md#optional-write)*

*Overrides [DuplexOptions](_stream_.internal.duplexoptions.md).[write](_stream_.internal.duplexoptions.md#optional-write)*

Defined in node_modules/@types/node/stream.d.ts:245

**Parameters:**

▪ **this**: *[Transform](../classes/_stream_.internal.transform.md)*

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*

___

### `Optional` writev

▸ **writev**(`this`: [Transform](../classes/_stream_.internal.transform.md), `chunks`: [Array](regexpmatcharray.md#array)‹object›, `callback`: function): *void*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[writev](_crypto_.hashoptions.md#optional-writev)*

*Overrides [DuplexOptions](_stream_.internal.duplexoptions.md).[writev](_stream_.internal.duplexoptions.md#optional-writev)*

Defined in node_modules/@types/node/stream.d.ts:246

**Parameters:**

▪ **this**: *[Transform](../classes/_stream_.internal.transform.md)*

▪ **chunks**: *[Array](regexpmatcharray.md#array)‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*
