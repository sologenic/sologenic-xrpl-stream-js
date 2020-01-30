[typescript](../README.md) › [Globals](../globals.md) › ["zlib"](_zlib_.md)

# Module: "zlib"

## Index

### Modules

* [constants](_zlib_.constants.md)

### Interfaces

* [BrotliCompress](../interfaces/_zlib_.brotlicompress.md)
* [BrotliDecompress](../interfaces/_zlib_.brotlidecompress.md)
* [BrotliOptions](../interfaces/_zlib_.brotlioptions.md)
* [Deflate](../interfaces/_zlib_.deflate.md)
* [DeflateRaw](../interfaces/_zlib_.deflateraw.md)
* [Gunzip](../interfaces/_zlib_.gunzip.md)
* [Gzip](../interfaces/_zlib_.gzip.md)
* [Inflate](../interfaces/_zlib_.inflate.md)
* [InflateRaw](../interfaces/_zlib_.inflateraw.md)
* [Unzip](../interfaces/_zlib_.unzip.md)
* [Zlib](../interfaces/_zlib_.zlib.md)
* [ZlibOptions](../interfaces/_zlib_.zliboptions.md)
* [ZlibParams](../interfaces/_zlib_.zlibparams.md)
* [ZlibReset](../interfaces/_zlib_.zlibreset.md)

### Type aliases

* [CompressCallback](_zlib_.md#compresscallback)
* [InputType](_zlib_.md#inputtype)

### Variables

* [Z_ASCII](_zlib_.md#const-z_ascii)
* [Z_BEST_COMPRESSION](_zlib_.md#const-z_best_compression)
* [Z_BEST_SPEED](_zlib_.md#const-z_best_speed)
* [Z_BINARY](_zlib_.md#const-z_binary)
* [Z_BLOCK](_zlib_.md#const-z_block)
* [Z_BUF_ERROR](_zlib_.md#const-z_buf_error)
* [Z_DATA_ERROR](_zlib_.md#const-z_data_error)
* [Z_DEFAULT_COMPRESSION](_zlib_.md#const-z_default_compression)
* [Z_DEFAULT_STRATEGY](_zlib_.md#const-z_default_strategy)
* [Z_DEFLATED](_zlib_.md#const-z_deflated)
* [Z_ERRNO](_zlib_.md#const-z_errno)
* [Z_FILTERED](_zlib_.md#const-z_filtered)
* [Z_FINISH](_zlib_.md#const-z_finish)
* [Z_FIXED](_zlib_.md#const-z_fixed)
* [Z_FULL_FLUSH](_zlib_.md#const-z_full_flush)
* [Z_HUFFMAN_ONLY](_zlib_.md#const-z_huffman_only)
* [Z_MEM_ERROR](_zlib_.md#const-z_mem_error)
* [Z_NEED_DICT](_zlib_.md#const-z_need_dict)
* [Z_NO_COMPRESSION](_zlib_.md#const-z_no_compression)
* [Z_NO_FLUSH](_zlib_.md#const-z_no_flush)
* [Z_OK](_zlib_.md#const-z_ok)
* [Z_PARTIAL_FLUSH](_zlib_.md#const-z_partial_flush)
* [Z_RLE](_zlib_.md#const-z_rle)
* [Z_STREAM_END](_zlib_.md#const-z_stream_end)
* [Z_STREAM_ERROR](_zlib_.md#const-z_stream_error)
* [Z_SYNC_FLUSH](_zlib_.md#const-z_sync_flush)
* [Z_TEXT](_zlib_.md#const-z_text)
* [Z_TREES](_zlib_.md#const-z_trees)
* [Z_UNKNOWN](_zlib_.md#const-z_unknown)
* [Z_VERSION_ERROR](_zlib_.md#const-z_version_error)

### Functions

* [brotliCompress](_zlib_.md#brotlicompress)
* [brotliCompressSync](_zlib_.md#brotlicompresssync)
* [brotliDecompress](_zlib_.md#brotlidecompress)
* [brotliDecompressSync](_zlib_.md#brotlidecompresssync)
* [createBrotliCompress](_zlib_.md#createbrotlicompress)
* [createBrotliDecompress](_zlib_.md#createbrotlidecompress)
* [createDeflate](_zlib_.md#createdeflate)
* [createDeflateRaw](_zlib_.md#createdeflateraw)
* [createGunzip](_zlib_.md#creategunzip)
* [createGzip](_zlib_.md#creategzip)
* [createInflate](_zlib_.md#createinflate)
* [createInflateRaw](_zlib_.md#createinflateraw)
* [createUnzip](_zlib_.md#createunzip)
* [deflate](_zlib_.md#deflate)
* [deflateRaw](_zlib_.md#deflateraw)
* [deflateRawSync](_zlib_.md#deflaterawsync)
* [deflateSync](_zlib_.md#deflatesync)
* [gunzip](_zlib_.md#gunzip)
* [gunzipSync](_zlib_.md#gunzipsync)
* [gzip](_zlib_.md#gzip)
* [gzipSync](_zlib_.md#gzipsync)
* [inflate](_zlib_.md#inflate)
* [inflateRaw](_zlib_.md#inflateraw)
* [inflateRawSync](_zlib_.md#inflaterawsync)
* [inflateSync](_zlib_.md#inflatesync)
* [unzip](_zlib_.md#unzip)
* [unzipSync](_zlib_.md#unzipsync)

## Type aliases

###  CompressCallback

Ƭ **CompressCallback**: *function*

Defined in node_modules/@types/node/zlib.d.ts:84

#### Type declaration:

▸ (`error`: [Error](../interfaces/error.md) | null, `result`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`result` | [Buffer](../classes/buffer.md) |

___

###  InputType

Ƭ **InputType**: *string | [ArrayBuffer](../interfaces/arraybuffer.md) | [ArrayBufferView](nodejs.md#arraybufferview)*

Defined in node_modules/@types/node/zlib.d.ts:82

## Variables

### `Const` Z_ASCII

• **Z_ASCII**: *number*

Defined in node_modules/@types/node/zlib.d.ts:343

**`deprecated`** 

___

### `Const` Z_BEST_COMPRESSION

• **Z_BEST_COMPRESSION**: *number*

Defined in node_modules/@types/node/zlib.d.ts:307

**`deprecated`** 

___

### `Const` Z_BEST_SPEED

• **Z_BEST_SPEED**: *number*

Defined in node_modules/@types/node/zlib.d.ts:303

**`deprecated`** 

___

### `Const` Z_BINARY

• **Z_BINARY**: *number*

Defined in node_modules/@types/node/zlib.d.ts:335

**`deprecated`** 

___

### `Const` Z_BLOCK

• **Z_BLOCK**: *number*

Defined in node_modules/@types/node/zlib.d.ts:255

**`deprecated`** 

___

### `Const` Z_BUF_ERROR

• **Z_BUF_ERROR**: *number*

Defined in node_modules/@types/node/zlib.d.ts:291

**`deprecated`** 

___

### `Const` Z_DATA_ERROR

• **Z_DATA_ERROR**: *number*

Defined in node_modules/@types/node/zlib.d.ts:283

**`deprecated`** 

___

### `Const` Z_DEFAULT_COMPRESSION

• **Z_DEFAULT_COMPRESSION**: *number*

Defined in node_modules/@types/node/zlib.d.ts:311

**`deprecated`** 

___

### `Const` Z_DEFAULT_STRATEGY

• **Z_DEFAULT_STRATEGY**: *number*

Defined in node_modules/@types/node/zlib.d.ts:331

**`deprecated`** 

___

### `Const` Z_DEFLATED

• **Z_DEFLATED**: *number*

Defined in node_modules/@types/node/zlib.d.ts:351

**`deprecated`** 

___

### `Const` Z_ERRNO

• **Z_ERRNO**: *number*

Defined in node_modules/@types/node/zlib.d.ts:275

**`deprecated`** 

___

### `Const` Z_FILTERED

• **Z_FILTERED**: *number*

Defined in node_modules/@types/node/zlib.d.ts:315

**`deprecated`** 

___

### `Const` Z_FINISH

• **Z_FINISH**: *number*

Defined in node_modules/@types/node/zlib.d.ts:251

**`deprecated`** 

___

### `Const` Z_FIXED

• **Z_FIXED**: *number*

Defined in node_modules/@types/node/zlib.d.ts:327

**`deprecated`** 

___

### `Const` Z_FULL_FLUSH

• **Z_FULL_FLUSH**: *number*

Defined in node_modules/@types/node/zlib.d.ts:247

**`deprecated`** 

___

### `Const` Z_HUFFMAN_ONLY

• **Z_HUFFMAN_ONLY**: *number*

Defined in node_modules/@types/node/zlib.d.ts:319

**`deprecated`** 

___

### `Const` Z_MEM_ERROR

• **Z_MEM_ERROR**: *number*

Defined in node_modules/@types/node/zlib.d.ts:287

**`deprecated`** 

___

### `Const` Z_NEED_DICT

• **Z_NEED_DICT**: *number*

Defined in node_modules/@types/node/zlib.d.ts:271

**`deprecated`** 

___

### `Const` Z_NO_COMPRESSION

• **Z_NO_COMPRESSION**: *number*

Defined in node_modules/@types/node/zlib.d.ts:299

**`deprecated`** 

___

### `Const` Z_NO_FLUSH

• **Z_NO_FLUSH**: *number*

Defined in node_modules/@types/node/zlib.d.ts:235

**`deprecated`** 

___

### `Const` Z_OK

• **Z_OK**: *number*

Defined in node_modules/@types/node/zlib.d.ts:263

**`deprecated`** 

___

### `Const` Z_PARTIAL_FLUSH

• **Z_PARTIAL_FLUSH**: *number*

Defined in node_modules/@types/node/zlib.d.ts:239

**`deprecated`** 

___

### `Const` Z_RLE

• **Z_RLE**: *number*

Defined in node_modules/@types/node/zlib.d.ts:323

**`deprecated`** 

___

### `Const` Z_STREAM_END

• **Z_STREAM_END**: *number*

Defined in node_modules/@types/node/zlib.d.ts:267

**`deprecated`** 

___

### `Const` Z_STREAM_ERROR

• **Z_STREAM_ERROR**: *number*

Defined in node_modules/@types/node/zlib.d.ts:279

**`deprecated`** 

___

### `Const` Z_SYNC_FLUSH

• **Z_SYNC_FLUSH**: *number*

Defined in node_modules/@types/node/zlib.d.ts:243

**`deprecated`** 

___

### `Const` Z_TEXT

• **Z_TEXT**: *number*

Defined in node_modules/@types/node/zlib.d.ts:339

**`deprecated`** 

___

### `Const` Z_TREES

• **Z_TREES**: *number*

Defined in node_modules/@types/node/zlib.d.ts:259

**`deprecated`** 

___

### `Const` Z_UNKNOWN

• **Z_UNKNOWN**: *number*

Defined in node_modules/@types/node/zlib.d.ts:347

**`deprecated`** 

___

### `Const` Z_VERSION_ERROR

• **Z_VERSION_ERROR**: *number*

Defined in node_modules/@types/node/zlib.d.ts:295

**`deprecated`** 

## Functions

###  brotliCompress

▸ **brotliCompress**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [BrotliOptions](../interfaces/_zlib_.brotlioptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:86

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [BrotliOptions](../interfaces/_zlib_.brotlioptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **brotliCompress**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:87

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  brotliCompressSync

▸ **brotliCompressSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [BrotliOptions](../interfaces/_zlib_.brotlioptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:88

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [BrotliOptions](../interfaces/_zlib_.brotlioptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  brotliDecompress

▸ **brotliDecompress**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [BrotliOptions](../interfaces/_zlib_.brotlioptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [BrotliOptions](../interfaces/_zlib_.brotlioptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **brotliDecompress**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  brotliDecompressSync

▸ **brotliDecompressSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [BrotliOptions](../interfaces/_zlib_.brotlioptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [BrotliOptions](../interfaces/_zlib_.brotlioptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  createBrotliCompress

▸ **createBrotliCompress**(`options?`: [BrotliOptions](../interfaces/_zlib_.brotlioptions.md)): *[BrotliCompress](../interfaces/_zlib_.brotlicompress.md)*

Defined in node_modules/@types/node/zlib.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [BrotliOptions](../interfaces/_zlib_.brotlioptions.md) |

**Returns:** *[BrotliCompress](../interfaces/_zlib_.brotlicompress.md)*

___

###  createBrotliDecompress

▸ **createBrotliDecompress**(`options?`: [BrotliOptions](../interfaces/_zlib_.brotlioptions.md)): *[BrotliDecompress](../interfaces/_zlib_.brotlidecompress.md)*

Defined in node_modules/@types/node/zlib.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [BrotliOptions](../interfaces/_zlib_.brotlioptions.md) |

**Returns:** *[BrotliDecompress](../interfaces/_zlib_.brotlidecompress.md)*

___

###  createDeflate

▸ **createDeflate**(`options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Deflate](../interfaces/_zlib_.deflate.md)*

Defined in node_modules/@types/node/zlib.d.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Deflate](../interfaces/_zlib_.deflate.md)*

___

###  createDeflateRaw

▸ **createDeflateRaw**(`options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[DeflateRaw](../interfaces/_zlib_.deflateraw.md)*

Defined in node_modules/@types/node/zlib.d.ts:78

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[DeflateRaw](../interfaces/_zlib_.deflateraw.md)*

___

###  createGunzip

▸ **createGunzip**(`options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Gunzip](../interfaces/_zlib_.gunzip.md)*

Defined in node_modules/@types/node/zlib.d.ts:75

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Gunzip](../interfaces/_zlib_.gunzip.md)*

___

###  createGzip

▸ **createGzip**(`options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Gzip](../interfaces/_zlib_.gzip.md)*

Defined in node_modules/@types/node/zlib.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Gzip](../interfaces/_zlib_.gzip.md)*

___

###  createInflate

▸ **createInflate**(`options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Inflate](../interfaces/_zlib_.inflate.md)*

Defined in node_modules/@types/node/zlib.d.ts:77

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Inflate](../interfaces/_zlib_.inflate.md)*

___

###  createInflateRaw

▸ **createInflateRaw**(`options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[InflateRaw](../interfaces/_zlib_.inflateraw.md)*

Defined in node_modules/@types/node/zlib.d.ts:79

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[InflateRaw](../interfaces/_zlib_.inflateraw.md)*

___

###  createUnzip

▸ **createUnzip**(`options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Unzip](../interfaces/_zlib_.unzip.md)*

Defined in node_modules/@types/node/zlib.d.ts:80

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Unzip](../interfaces/_zlib_.unzip.md)*

___

###  deflate

▸ **deflate**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:92

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **deflate**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:93

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  deflateRaw

▸ **deflateRaw**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **deflateRaw**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  deflateRawSync

▸ **deflateRawSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  deflateSync

▸ **deflateSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:94

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  gunzip

▸ **gunzip**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **gunzip**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:102

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  gunzipSync

▸ **gunzipSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:103

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  gzip

▸ **gzip**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:98

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **gzip**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:99

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  gzipSync

▸ **gzipSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:100

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  inflate

▸ **inflate**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:104

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **inflate**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:105

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  inflateRaw

▸ **inflateRaw**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **inflateRaw**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:108

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  inflateRawSync

▸ **inflateRawSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:109

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  inflateSync

▸ **inflateSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:106

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  unzip

▸ **unzip**(`buf`: [InputType](_zlib_.md#inputtype), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:110

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

▸ **unzip**(`buf`: [InputType](_zlib_.md#inputtype), `options`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md), `callback`: [CompressCallback](_zlib_.md#compresscallback)): *void*

Defined in node_modules/@types/node/zlib.d.ts:111

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |
`callback` | [CompressCallback](_zlib_.md#compresscallback) |

**Returns:** *void*

___

###  unzipSync

▸ **unzipSync**(`buf`: [InputType](_zlib_.md#inputtype), `options?`: [ZlibOptions](../interfaces/_zlib_.zliboptions.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/zlib.d.ts:112

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [InputType](_zlib_.md#inputtype) |
`options?` | [ZlibOptions](../interfaces/_zlib_.zliboptions.md) |

**Returns:** *[Buffer](../classes/buffer.md)*
