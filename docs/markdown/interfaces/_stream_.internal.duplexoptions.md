[typescript](../README.md) › [Globals](../globals.md) › ["stream"](../modules/_stream_.md) › [internal](../classes/_stream_.internal.md) › [DuplexOptions](_stream_.internal.duplexoptions.md)

# Interface: DuplexOptions

## Hierarchy

* [ReadableOptions](_stream_.internal.readableoptions.md)

* [WritableOptions](_stream_.internal.writableoptions.md)

  ↳ **DuplexOptions**

  ↳ [TransformOptions](_stream_.internal.transformoptions.md)

## Index

### Properties

* [allowHalfOpen](_stream_.internal.duplexoptions.md#optional-allowhalfopen)
* [autoDestroy](_stream_.internal.duplexoptions.md#optional-autodestroy)
* [decodeStrings](_stream_.internal.duplexoptions.md#optional-decodestrings)
* [defaultEncoding](_stream_.internal.duplexoptions.md#optional-defaultencoding)
* [emitClose](_stream_.internal.duplexoptions.md#optional-emitclose)
* [encoding](_stream_.internal.duplexoptions.md#optional-encoding)
* [highWaterMark](_stream_.internal.duplexoptions.md#optional-highwatermark)
* [objectMode](_stream_.internal.duplexoptions.md#optional-objectmode)
* [readableObjectMode](_stream_.internal.duplexoptions.md#optional-readableobjectmode)
* [writableObjectMode](_stream_.internal.duplexoptions.md#optional-writableobjectmode)

### Methods

* [destroy](_stream_.internal.duplexoptions.md#optional-destroy)
* [final](_stream_.internal.duplexoptions.md#optional-final)
* [read](_stream_.internal.duplexoptions.md#optional-read)
* [write](_stream_.internal.duplexoptions.md#optional-write)
* [writev](_stream_.internal.duplexoptions.md#optional-writev)

## Properties

### `Optional` allowHalfOpen

• **allowHalfOpen**? : *undefined | false | true*

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

Defined in node_modules/@types/node/stream.d.ts:210

___

### `Optional` writableObjectMode

• **writableObjectMode**? : *undefined | false | true*

Defined in node_modules/@types/node/stream.d.ts:211

## Methods

### `Optional` destroy

▸ **destroy**(`this`: [Duplex](../classes/_stream_.internal.duplex.md), `error`: [Error](error.md) | null, `callback`: function): *void*

*Overrides [ReadableOptions](_stream_.internal.readableoptions.md).[destroy](_stream_.internal.readableoptions.md#optional-destroy)*

Defined in node_modules/@types/node/stream.d.ts:216

**Parameters:**

▪ **this**: *[Duplex](../classes/_stream_.internal.duplex.md)*

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

▸ **final**(`this`: [Duplex](../classes/_stream_.internal.duplex.md), `callback`: function): *void*

*Overrides [WritableOptions](_stream_.internal.writableoptions.md).[final](_stream_.internal.writableoptions.md#optional-final)*

Defined in node_modules/@types/node/stream.d.ts:215

**Parameters:**

▪ **this**: *[Duplex](../classes/_stream_.internal.duplex.md)*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*

___

### `Optional` read

▸ **read**(`this`: [Duplex](../classes/_stream_.internal.duplex.md), `size`: number): *void*

*Overrides [ReadableOptions](_stream_.internal.readableoptions.md).[read](_stream_.internal.readableoptions.md#optional-read)*

Defined in node_modules/@types/node/stream.d.ts:212

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Duplex](../classes/_stream_.internal.duplex.md) |
`size` | number |

**Returns:** *void*

___

### `Optional` write

▸ **write**(`this`: [Duplex](../classes/_stream_.internal.duplex.md), `chunk`: any, `encoding`: string, `callback`: function): *void*

*Overrides [WritableOptions](_stream_.internal.writableoptions.md).[write](_stream_.internal.writableoptions.md#optional-write)*

Defined in node_modules/@types/node/stream.d.ts:213

**Parameters:**

▪ **this**: *[Duplex](../classes/_stream_.internal.duplex.md)*

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

▸ **writev**(`this`: [Duplex](../classes/_stream_.internal.duplex.md), `chunks`: [Array](regexpmatcharray.md#array)‹object›, `callback`: function): *void*

*Overrides [WritableOptions](_stream_.internal.writableoptions.md).[writev](_stream_.internal.writableoptions.md#optional-writev)*

Defined in node_modules/@types/node/stream.d.ts:214

**Parameters:**

▪ **this**: *[Duplex](../classes/_stream_.internal.duplex.md)*

▪ **chunks**: *[Array](regexpmatcharray.md#array)‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*
