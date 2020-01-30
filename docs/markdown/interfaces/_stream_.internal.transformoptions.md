[typescript](../README.md) › [Globals](../globals.md) › ["stream"](../modules/_stream_.md) › [internal](../classes/_stream_.internal.md) › [TransformOptions](_stream_.internal.transformoptions.md)

# Interface: TransformOptions

## Hierarchy

  ↳ [DuplexOptions](_stream_.internal.duplexoptions.md)

  ↳ **TransformOptions**

  ↳ [HashOptions](_crypto_.hashoptions.md)

  ↳ [CipherCCMOptions](_crypto_.cipherccmoptions.md)

  ↳ [CipherGCMOptions](_crypto_.ciphergcmoptions.md)

## Index

### Properties

* [allowHalfOpen](_stream_.internal.transformoptions.md#optional-allowhalfopen)
* [autoDestroy](_stream_.internal.transformoptions.md#optional-autodestroy)
* [decodeStrings](_stream_.internal.transformoptions.md#optional-decodestrings)
* [defaultEncoding](_stream_.internal.transformoptions.md#optional-defaultencoding)
* [emitClose](_stream_.internal.transformoptions.md#optional-emitclose)
* [encoding](_stream_.internal.transformoptions.md#optional-encoding)
* [highWaterMark](_stream_.internal.transformoptions.md#optional-highwatermark)
* [objectMode](_stream_.internal.transformoptions.md#optional-objectmode)
* [readableObjectMode](_stream_.internal.transformoptions.md#optional-readableobjectmode)
* [writableObjectMode](_stream_.internal.transformoptions.md#optional-writableobjectmode)

### Methods

* [destroy](_stream_.internal.transformoptions.md#optional-destroy)
* [final](_stream_.internal.transformoptions.md#optional-final)
* [flush](_stream_.internal.transformoptions.md#optional-flush)
* [read](_stream_.internal.transformoptions.md#optional-read)
* [transform](_stream_.internal.transformoptions.md#optional-transform)
* [write](_stream_.internal.transformoptions.md#optional-write)
* [writev](_stream_.internal.transformoptions.md#optional-writev)

## Properties

### `Optional` allowHalfOpen

• **allowHalfOpen**? : *undefined | false | true*

*Inherited from [HashOptions](_crypto_.hashoptions.md).[allowHalfOpen](_crypto_.hashoptions.md#optional-allowhalfopen)*

Defined in node_modules/@types/node/stream.d.ts:209

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
