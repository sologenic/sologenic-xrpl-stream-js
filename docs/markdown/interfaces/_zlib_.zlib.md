[typescript](../README.md) › [Globals](../globals.md) › ["zlib"](../modules/_zlib_.md) › [Zlib](_zlib_.zlib.md)

# Interface: Zlib

## Hierarchy

* **Zlib**

  ↳ [BrotliCompress](_zlib_.brotlicompress.md)

  ↳ [BrotliDecompress](_zlib_.brotlidecompress.md)

  ↳ [Gzip](_zlib_.gzip.md)

  ↳ [Gunzip](_zlib_.gunzip.md)

  ↳ [Deflate](_zlib_.deflate.md)

  ↳ [Inflate](_zlib_.inflate.md)

  ↳ [DeflateRaw](_zlib_.deflateraw.md)

  ↳ [InflateRaw](_zlib_.inflateraw.md)

  ↳ [Unzip](_zlib_.unzip.md)

## Index

### Properties

* [bytesRead](_zlib_.zlib.md#bytesread)
* [bytesWritten](_zlib_.zlib.md#byteswritten)
* [shell](_zlib_.zlib.md#optional-shell)

### Methods

* [close](_zlib_.zlib.md#close)
* [flush](_zlib_.zlib.md#flush)

## Properties

###  bytesRead

• **bytesRead**: *number*

Defined in node_modules/@types/node/zlib.d.ts:47

**`deprecated`** Use bytesWritten instead.

___

###  bytesWritten

• **bytesWritten**: *number*

Defined in node_modules/@types/node/zlib.d.ts:48

___

### `Optional` shell

• **shell**? : *boolean | string*

Defined in node_modules/@types/node/zlib.d.ts:49

## Methods

###  close

▸ **close**(`callback?`: undefined | function): *void*

Defined in node_modules/@types/node/zlib.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  flush

▸ **flush**(`kind?`: number | function, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/zlib.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`kind?` | number &#124; function |
`callback?` | undefined &#124; function |

**Returns:** *void*
