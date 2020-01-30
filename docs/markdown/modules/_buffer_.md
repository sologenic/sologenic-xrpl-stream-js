[typescript](../README.md) › [Globals](../globals.md) › ["buffer"](_buffer_.md)

# Module: "buffer"

## Index

### Type aliases

* [TranscodeEncoding](_buffer_.md#transcodeencoding)

### Variables

* [BuffType](_buffer_.md#const-bufftype)
* [INSPECT_MAX_BYTES](_buffer_.md#const-inspect_max_bytes)
* [SlowBuffer](_buffer_.md#const-slowbuffer)
* [constants](_buffer_.md#const-constants)
* [kMaxLength](_buffer_.md#const-kmaxlength)
* [kStringMaxLength](_buffer_.md#const-kstringmaxlength)

### Functions

* [transcode](_buffer_.md#transcode)

## Type aliases

###  TranscodeEncoding

Ƭ **TranscodeEncoding**: *"ascii" | "utf8" | "utf16le" | "ucs2" | "latin1" | "binary"*

Defined in node_modules/@types/node/buffer.d.ts:11

## Variables

### `Const` BuffType

• **BuffType**: *typeof Buffer*

Defined in node_modules/@types/node/buffer.d.ts:9

___

### `Const` INSPECT_MAX_BYTES

• **INSPECT_MAX_BYTES**: *number*

Defined in node_modules/@types/node/buffer.d.ts:2

___

### `Const` SlowBuffer

• **SlowBuffer**: *object*

Defined in node_modules/@types/node/buffer.d.ts:15

#### Type declaration:

* **new __type**(`size`: number): *[Buffer](../classes/buffer.md)*

* **prototype**: *[Buffer](../classes/buffer.md)*

___

### `Const` constants

• **constants**: *object*

Defined in node_modules/@types/node/buffer.d.ts:5

#### Type declaration:

* **MAX_LENGTH**: *number*

* **MAX_STRING_LENGTH**: *number*

___

### `Const` kMaxLength

• **kMaxLength**: *number*

Defined in node_modules/@types/node/buffer.d.ts:3

___

### `Const` kStringMaxLength

• **kStringMaxLength**: *number*

Defined in node_modules/@types/node/buffer.d.ts:4

## Functions

###  transcode

▸ **transcode**(`source`: [Uint8Array](../interfaces/uint8array.md), `fromEnc`: [TranscodeEncoding](_buffer_.md#transcodeencoding), `toEnc`: [TranscodeEncoding](_buffer_.md#transcodeencoding)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/buffer.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`source` | [Uint8Array](../interfaces/uint8array.md) |
`fromEnc` | [TranscodeEncoding](_buffer_.md#transcodeencoding) |
`toEnc` | [TranscodeEncoding](_buffer_.md#transcodeencoding) |

**Returns:** *[Buffer](../classes/buffer.md)*
