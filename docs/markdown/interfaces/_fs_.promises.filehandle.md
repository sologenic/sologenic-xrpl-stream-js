[typescript](../README.md) › [Globals](../globals.md) › ["fs"](../modules/_fs_.md) › [promises](../modules/_fs_.promises.md) › [FileHandle](_fs_.promises.filehandle.md)

# Interface: FileHandle

## Hierarchy

* **FileHandle**

## Index

### Properties

* [fd](_fs_.promises.filehandle.md#fd)

### Methods

* [appendFile](_fs_.promises.filehandle.md#appendfile)
* [chmod](_fs_.promises.filehandle.md#chmod)
* [chown](_fs_.promises.filehandle.md#chown)
* [close](_fs_.promises.filehandle.md#close)
* [datasync](_fs_.promises.filehandle.md#datasync)
* [read](_fs_.promises.filehandle.md#read)
* [readFile](_fs_.promises.filehandle.md#readfile)
* [stat](_fs_.promises.filehandle.md#stat)
* [sync](_fs_.promises.filehandle.md#sync)
* [truncate](_fs_.promises.filehandle.md#truncate)
* [utimes](_fs_.promises.filehandle.md#utimes)
* [write](_fs_.promises.filehandle.md#write)
* [writeFile](_fs_.promises.filehandle.md#writefile)
* [writev](_fs_.promises.filehandle.md#writev)

## Properties

###  fd

• **fd**: *number*

Defined in node_modules/@types/node/fs.d.ts:1896

Gets the file descriptor for this file handle.

## Methods

###  appendFile

▸ **appendFile**(`data`: any, `options?`: object | string | null): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1908

Asynchronously append data to a file, creating the file if it does not exist. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for appending.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
`options?` | object &#124; string &#124; null | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used.  |

**Returns:** *[Promise](promise.md)‹void›*

___

###  chmod

▸ **chmod**(`mode`: string | number): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1919

Asynchronous fchmod(2) - Change permissions of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *[Promise](promise.md)‹void›*

___

###  chown

▸ **chown**(`uid`: number, `gid`: number): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1913

Asynchronous fchown(2) - Change ownership of a file.

**Parameters:**

Name | Type |
------ | ------ |
`uid` | number |
`gid` | number |

**Returns:** *[Promise](promise.md)‹void›*

___

###  close

▸ **close**(): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2025

Asynchronous close(2) - close a `FileHandle`.

**Returns:** *[Promise](promise.md)‹void›*

___

###  datasync

▸ **datasync**(): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1924

Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.

**Returns:** *[Promise](promise.md)‹void›*

___

###  read

▸ **read**<**TBuffer**>(`buffer`: TBuffer, `offset?`: number | null, `length?`: number | null, `position?`: number | null): *[Promise](promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:1939

Asynchronously reads data from the file.
The `FileHandle` must have been opened for reading.

**Type parameters:**

▪ **TBuffer**: *[Uint8Array](uint8array.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | TBuffer | The buffer that the data will be written to. |
`offset?` | number &#124; null | The offset in the buffer at which to start writing. |
`length?` | number &#124; null | The number of bytes to read. |
`position?` | number &#124; null | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.  |

**Returns:** *[Promise](promise.md)‹object›*

___

###  readFile

▸ **readFile**(`options?`: object | null): *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:1947

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | object &#124; null | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **readFile**(`options`: object | [BufferEncoding](../globals.md#bufferencoding)): *[Promise](promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:1955

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | object &#124; [BufferEncoding](../globals.md#bufferencoding) | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](promise.md)‹string›*

▸ **readFile**(`options?`: object | string | null): *[Promise](promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:1963

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | object &#124; string &#124; null | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](promise.md)‹string | [Buffer](../classes/buffer.md)›*

___

###  stat

▸ **stat**(): *[Promise](promise.md)‹[Stats](../classes/_fs_.stats.md)›*

Defined in node_modules/@types/node/fs.d.ts:1968

Asynchronous fstat(2) - Get file status.

**Returns:** *[Promise](promise.md)‹[Stats](../classes/_fs_.stats.md)›*

___

###  sync

▸ **sync**(): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1929

Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

**Returns:** *[Promise](promise.md)‹void›*

___

###  truncate

▸ **truncate**(`len?`: undefined | number): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1974

Asynchronous ftruncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`len?` | undefined &#124; number | If not specified, defaults to `0`.  |

**Returns:** *[Promise](promise.md)‹void›*

___

###  utimes

▸ **utimes**(`atime`: string | number | [Date](date.md), `mtime`: string | number | [Date](date.md)): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1981

Asynchronously change file timestamps of the file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`atime` | string &#124; number &#124; [Date](date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](date.md) | The last modified time. If a string is provided, it will be coerced to number.  |

**Returns:** *[Promise](promise.md)‹void›*

___

###  write

▸ **write**<**TBuffer**>(`buffer`: TBuffer, `offset?`: number | null, `length?`: number | null, `position?`: number | null): *[Promise](promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:1991

Asynchronously writes `buffer` to the file.
The `FileHandle` must have been opened for writing.

**Type parameters:**

▪ **TBuffer**: *[Uint8Array](uint8array.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | TBuffer | The buffer that the data will be written to. |
`offset?` | number &#124; null | The part of the buffer to be written. If not supplied, defaults to `0`. |
`length?` | number &#124; null | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.  |

**Returns:** *[Promise](promise.md)‹object›*

▸ **write**(`data`: any, `position?`: number | null, `encoding?`: string | null): *[Promise](promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:2002

Asynchronously writes `string` to the file.
The `FileHandle` must have been opened for writing.
It is unsafe to call `write()` multiple times on the same file without waiting for the `Promise`
to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | - |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
`encoding?` | string &#124; null | The expected string encoding.  |

**Returns:** *[Promise](promise.md)‹object›*

___

###  writeFile

▸ **writeFile**(`data`: any, `options?`: object | string | null): *[Promise](promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2015

Asynchronously writes data to a file, replacing the file if it already exists. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for writing.
It is unsafe to call `writeFile()` multiple times on the same file without waiting for the `Promise` to be resolved (or rejected).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
`options?` | object &#124; string &#124; null | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used.  |

**Returns:** *[Promise](promise.md)‹void›*

___

###  writev

▸ **writev**(`buffers`: [ArrayBufferView](../modules/nodejs.md#arraybufferview)[], `position?`: undefined | number): *[Promise](promise.md)‹[WriteVResult](_fs_.writevresult.md)›*

Defined in node_modules/@types/node/fs.d.ts:2020

See `fs.writev` promisified version.

**Parameters:**

Name | Type |
------ | ------ |
`buffers` | [ArrayBufferView](../modules/nodejs.md#arraybufferview)[] |
`position?` | undefined &#124; number |

**Returns:** *[Promise](promise.md)‹[WriteVResult](_fs_.writevresult.md)›*
