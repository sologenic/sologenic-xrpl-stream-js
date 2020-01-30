[typescript](../README.md) › [Globals](../globals.md) › [ArrayBuffer](arraybuffer.md)

# Interface: ArrayBuffer

Represents a raw buffer of binary data, which is used to store data for the
different typed arrays. ArrayBuffers cannot be read from or written to directly,
but can be passed to a typed array or DataView Object to interpret the raw
buffer as needed.

## Hierarchy

* **ArrayBuffer**

## Index

### Properties

* [[Symbol.toStringTag]](arraybuffer.md#[symbol.tostringtag])
* [byteLength](arraybuffer.md#bytelength)

### Methods

* [slice](arraybuffer.md#slice)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:264

___

###  byteLength

• **byteLength**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1528

Read-only. The length of the ArrayBuffer (in bytes).

## Methods

###  slice

▸ **slice**(`begin`: number, `end?`: undefined | number): *[ArrayBuffer](arraybuffer.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1533

Returns a section of an ArrayBuffer.

**Parameters:**

Name | Type |
------ | ------ |
`begin` | number |
`end?` | undefined &#124; number |

**Returns:** *[ArrayBuffer](arraybuffer.md)*
