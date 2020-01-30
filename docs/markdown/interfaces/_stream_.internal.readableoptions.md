[typescript](../README.md) › [Globals](../globals.md) › ["stream"](../modules/_stream_.md) › [internal](../classes/_stream_.internal.md) › [ReadableOptions](_stream_.internal.readableoptions.md)

# Interface: ReadableOptions

## Hierarchy

* **ReadableOptions**

  ↳ [DuplexOptions](_stream_.internal.duplexoptions.md)

## Index

### Properties

* [autoDestroy](_stream_.internal.readableoptions.md#optional-autodestroy)
* [encoding](_stream_.internal.readableoptions.md#optional-encoding)
* [highWaterMark](_stream_.internal.readableoptions.md#optional-highwatermark)
* [objectMode](_stream_.internal.readableoptions.md#optional-objectmode)

### Methods

* [destroy](_stream_.internal.readableoptions.md#optional-destroy)
* [read](_stream_.internal.readableoptions.md#optional-read)

## Properties

### `Optional` autoDestroy

• **autoDestroy**? : *undefined | false | true*

Defined in node_modules/@types/node/stream.d.ts:17

___

### `Optional` encoding

• **encoding**? : *undefined | string*

Defined in node_modules/@types/node/stream.d.ts:13

___

### `Optional` highWaterMark

• **highWaterMark**? : *undefined | number*

Defined in node_modules/@types/node/stream.d.ts:12

___

### `Optional` objectMode

• **objectMode**? : *undefined | false | true*

Defined in node_modules/@types/node/stream.d.ts:14

## Methods

### `Optional` destroy

▸ **destroy**(`this`: [Readable](../classes/_stream_.internal.readable.md), `error`: [Error](error.md) | null, `callback`: function): *void*

Defined in node_modules/@types/node/stream.d.ts:16

**Parameters:**

▪ **this**: *[Readable](../classes/_stream_.internal.readable.md)*

▪ **error**: *[Error](error.md) | null*

▪ **callback**: *function*

▸ (`error`: [Error](error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) &#124; null |

**Returns:** *void*

___

### `Optional` read

▸ **read**(`this`: [Readable](../classes/_stream_.internal.readable.md), `size`: number): *void*

Defined in node_modules/@types/node/stream.d.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Readable](../classes/_stream_.internal.readable.md) |
`size` | number |

**Returns:** *void*
