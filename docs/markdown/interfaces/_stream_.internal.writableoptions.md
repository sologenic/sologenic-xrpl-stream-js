[typescript](../README.md) › [Globals](../globals.md) › ["stream"](../modules/_stream_.md) › [internal](../classes/_stream_.internal.md) › [WritableOptions](_stream_.internal.writableoptions.md)

# Interface: WritableOptions

## Hierarchy

* **WritableOptions**

  ↳ [DuplexOptions](_stream_.internal.duplexoptions.md)

## Index

### Properties

* [autoDestroy](_stream_.internal.writableoptions.md#optional-autodestroy)
* [decodeStrings](_stream_.internal.writableoptions.md#optional-decodestrings)
* [defaultEncoding](_stream_.internal.writableoptions.md#optional-defaultencoding)
* [emitClose](_stream_.internal.writableoptions.md#optional-emitclose)
* [highWaterMark](_stream_.internal.writableoptions.md#optional-highwatermark)
* [objectMode](_stream_.internal.writableoptions.md#optional-objectmode)

### Methods

* [destroy](_stream_.internal.writableoptions.md#optional-destroy)
* [final](_stream_.internal.writableoptions.md#optional-final)
* [write](_stream_.internal.writableoptions.md#optional-write)
* [writev](_stream_.internal.writableoptions.md#optional-writev)

## Properties

### `Optional` autoDestroy

• **autoDestroy**? : *undefined | false | true*

Defined in node_modules/@types/node/stream.d.ts:116

___

### `Optional` decodeStrings

• **decodeStrings**? : *undefined | false | true*

Defined in node_modules/@types/node/stream.d.ts:108

___

### `Optional` defaultEncoding

• **defaultEncoding**? : *undefined | string*

Defined in node_modules/@types/node/stream.d.ts:109

___

### `Optional` emitClose

• **emitClose**? : *undefined | false | true*

Defined in node_modules/@types/node/stream.d.ts:111

___

### `Optional` highWaterMark

• **highWaterMark**? : *undefined | number*

Defined in node_modules/@types/node/stream.d.ts:107

___

### `Optional` objectMode

• **objectMode**? : *undefined | false | true*

Defined in node_modules/@types/node/stream.d.ts:110

## Methods

### `Optional` destroy

▸ **destroy**(`this`: [Writable](../classes/_stream_.internal.writable.md), `error`: [Error](error.md) | null, `callback`: function): *void*

Defined in node_modules/@types/node/stream.d.ts:114

**Parameters:**

▪ **this**: *[Writable](../classes/_stream_.internal.writable.md)*

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

▸ **final**(`this`: [Writable](../classes/_stream_.internal.writable.md), `callback`: function): *void*

Defined in node_modules/@types/node/stream.d.ts:115

**Parameters:**

▪ **this**: *[Writable](../classes/_stream_.internal.writable.md)*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*

___

### `Optional` write

▸ **write**(`this`: [Writable](../classes/_stream_.internal.writable.md), `chunk`: any, `encoding`: string, `callback`: function): *void*

Defined in node_modules/@types/node/stream.d.ts:112

**Parameters:**

▪ **this**: *[Writable](../classes/_stream_.internal.writable.md)*

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

▸ **writev**(`this`: [Writable](../classes/_stream_.internal.writable.md), `chunks`: [Array](regexpmatcharray.md#array)‹object›, `callback`: function): *void*

Defined in node_modules/@types/node/stream.d.ts:113

**Parameters:**

▪ **this**: *[Writable](../classes/_stream_.internal.writable.md)*

▪ **chunks**: *[Array](regexpmatcharray.md#array)‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) &#124; null |

**Returns:** *void*
