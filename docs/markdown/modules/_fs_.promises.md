[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [promises](_fs_.promises.md)

# Module: promises

## Index

### Interfaces

* [FileHandle](../interfaces/_fs_.promises.filehandle.md)

### Functions

* [access](_fs_.promises.md#access)
* [appendFile](_fs_.promises.md#appendfile)
* [chmod](_fs_.promises.md#chmod)
* [chown](_fs_.promises.md#chown)
* [copyFile](_fs_.promises.md#copyfile)
* [fchmod](_fs_.promises.md#fchmod)
* [fchown](_fs_.promises.md#fchown)
* [fdatasync](_fs_.promises.md#fdatasync)
* [fstat](_fs_.promises.md#fstat)
* [fsync](_fs_.promises.md#fsync)
* [ftruncate](_fs_.promises.md#ftruncate)
* [futimes](_fs_.promises.md#futimes)
* [lchmod](_fs_.promises.md#lchmod)
* [lchown](_fs_.promises.md#lchown)
* [link](_fs_.promises.md#link)
* [lstat](_fs_.promises.md#lstat)
* [mkdir](_fs_.promises.md#mkdir)
* [mkdtemp](_fs_.promises.md#mkdtemp)
* [open](_fs_.promises.md#open)
* [read](_fs_.promises.md#read)
* [readFile](_fs_.promises.md#readfile)
* [readdir](_fs_.promises.md#readdir)
* [readlink](_fs_.promises.md#readlink)
* [realpath](_fs_.promises.md#realpath)
* [rename](_fs_.promises.md#rename)
* [rmdir](_fs_.promises.md#rmdir)
* [stat](_fs_.promises.md#stat)
* [symlink](_fs_.promises.md#symlink)
* [truncate](_fs_.promises.md#truncate)
* [unlink](_fs_.promises.md#unlink)
* [utimes](_fs_.promises.md#utimes)
* [write](_fs_.promises.md#write)
* [writeFile](_fs_.promises.md#writefile)

## Functions

###  access

▸ **access**(`path`: [PathLike](_fs_.md#pathlike), `mode?`: undefined | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2033

Asynchronously tests a user's permissions for the file specified by path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`mode?` | undefined &#124; number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  appendFile

▸ **appendFile**(`path`: [PathLike](_fs_.md#pathlike) | [FileHandle](../interfaces/_fs_.promises.filehandle.md), `data`: any, `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2362

Asynchronously append data to a file, creating the file if it does not exist.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; [FileHandle](../interfaces/_fs_.promises.filehandle.md) | - |
`data` | any | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
`options?` | object &#124; string &#124; null | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  chmod

▸ **chmod**(`path`: [PathLike](_fs_.md#pathlike), `mode`: string | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2250

Asynchronous chmod(2) - Change permissions of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  chown

▸ **chown**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2275

Asynchronous chown(2) - Change ownership of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  copyFile

▸ **copyFile**(`src`: [PathLike](_fs_.md#pathlike), `dest`: [PathLike](_fs_.md#pathlike), `flags?`: undefined | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2046

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it already exists.
Node.js makes no guarantees about the atomicity of the copy operation.
If an error occurs after the destination file has been opened for writing, Node.js will attempt
to remove the destination.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [PathLike](_fs_.md#pathlike) | A path to the source file. |
`dest` | [PathLike](_fs_.md#pathlike) | A path to the destination file. |
`flags?` | undefined &#124; number | An optional integer that specifies the behavior of the copy operation. The only supported flag is `fs.constants.COPYFILE_EXCL`, which causes the copy operation to fail if `dest` already exists.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  fchmod

▸ **fchmod**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md), `mode`: string | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2243

Asynchronous fchmod(2) - Change permissions of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  fchown

▸ **fchown**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md), `uid`: number, `gid`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2269

Asynchronous fchown(2) - Change ownership of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  fdatasync

▸ **fdatasync**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2133

Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  fstat

▸ **fstat**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md)): *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

Defined in node_modules/@types/node/fs.d.ts:2211

Asynchronous fstat(2) - Get file status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

___

###  fsync

▸ **fsync**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2139

Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  ftruncate

▸ **ftruncate**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md), `len?`: undefined | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2121

Asynchronous ftruncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`. |
`len?` | undefined &#124; number | If not specified, defaults to `0`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  futimes

▸ **futimes**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md), `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2291

Asynchronously change file timestamps of the file referenced by the supplied `FileHandle`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  lchmod

▸ **lchmod**(`path`: [PathLike](_fs_.md#pathlike), `mode`: string | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2257

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  lchown

▸ **lchown**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2263

Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  link

▸ **link**(`existingPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2230

Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`existingPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  lstat

▸ **lstat**(`path`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

Defined in node_modules/@types/node/fs.d.ts:2217

Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

___

###  mkdir

▸ **mkdir**(`path`: [PathLike](_fs_.md#pathlike), `options?`: number | string | [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2147

Asynchronous mkdir(2) - create a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | number &#124; string &#124; [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) &#124; null | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  mkdtemp

▸ **mkdtemp**(`prefix`: string, `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:2319

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **mkdtemp**(`prefix`: string, `options`: object | "buffer"): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2326

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **mkdtemp**(`prefix`: string, `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2333

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

___

###  open

▸ **open**(`path`: [PathLike](_fs_.md#pathlike), `flags`: string | number, `mode?`: string | number): *[Promise](../interfaces/promise.md)‹[FileHandle](../interfaces/_fs_.promises.filehandle.md)›*

Defined in node_modules/@types/node/fs.d.ts:2054

Asynchronous open(2) - open and possibly create a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`flags` | string &#124; number | - |
`mode?` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[FileHandle](../interfaces/_fs_.promises.filehandle.md)›*

___

###  read

▸ **read**<**TBuffer**>(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md), `buffer`: TBuffer, `offset?`: number | null, `length?`: number | null, `position?`: number | null): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:2065

Asynchronously reads data from the file referenced by the supplied `FileHandle`.

**Type parameters:**

▪ **TBuffer**: *[Uint8Array](../interfaces/uint8array.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`. |
`buffer` | TBuffer | The buffer that the data will be written to. |
`offset?` | number &#124; null | The offset in the buffer at which to start writing. |
`length?` | number &#124; null | The number of bytes to read. |
`position?` | number &#124; null | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.  |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

___

###  readFile

▸ **readFile**(`path`: [PathLike](_fs_.md#pathlike) | [FileHandle](../interfaces/_fs_.promises.filehandle.md), `options?`: object | null): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2371

Asynchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
`options?` | object &#124; null | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **readFile**(`path`: [PathLike](_fs_.md#pathlike) | [FileHandle](../interfaces/_fs_.promises.filehandle.md), `options`: object | [BufferEncoding](../globals.md#bufferencoding)): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:2380

Asynchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
`options` | object &#124; [BufferEncoding](../globals.md#bufferencoding) | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **readFile**(`path`: [PathLike](_fs_.md#pathlike) | [FileHandle](../interfaces/_fs_.promises.filehandle.md), `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2389

Asynchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
`options?` | object &#124; string &#124; null | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

___

###  readdir

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/fs.d.ts:2154

Asynchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)[]›*

Defined in node_modules/@types/node/fs.d.ts:2161

Asynchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)[]›*

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string[] | [Buffer](../classes/buffer.md)[]›*

Defined in node_modules/@types/node/fs.d.ts:2168

Asynchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string[] | [Buffer](../classes/buffer.md)[]›*

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: object): *[Promise](../interfaces/promise.md)‹[Dirent](../classes/_fs_.dirent.md)[]›*

Defined in node_modules/@types/node/fs.d.ts:2175

Asynchronous readdir(3) - read a directory.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object*

If called with `withFileTypes: true` the result data will be an array of Dirent.

Name | Type |
------ | ------ |
`encoding?` | string &#124; null |
`withFileTypes` | true |

**Returns:** *[Promise](../interfaces/promise.md)‹[Dirent](../classes/_fs_.dirent.md)[]›*

___

###  readlink

▸ **readlink**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:2182

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **readlink**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2189

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **readlink**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2196

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

___

###  realpath

▸ **realpath**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:2298

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **realpath**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2305

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **realpath**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:2312

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

___

###  rename

▸ **rename**(`oldPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2107

Asynchronous rename(2) - Change the name or location of a file or directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`oldPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  rmdir

▸ **rmdir**(`path`: [PathLike](_fs_.md#pathlike), `options?`: [RmDirAsyncOptions](../interfaces/_fs_.rmdirasyncoptions.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2127

Asynchronous rmdir(2) - delete a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`options?` | [RmDirAsyncOptions](../interfaces/_fs_.rmdirasyncoptions.md) | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  stat

▸ **stat**(`path`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

Defined in node_modules/@types/node/fs.d.ts:2223

Asynchronous stat(2) - Get file status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

___

###  symlink

▸ **symlink**(`target`: [PathLike](_fs_.md#pathlike), `path`: [PathLike](_fs_.md#pathlike), `type?`: string | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2205

Asynchronous symlink(2) - Create a new symbolic link to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | [PathLike](_fs_.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
`path` | [PathLike](_fs_.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol. |
`type?` | string &#124; null | May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms). When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  truncate

▸ **truncate**(`path`: [PathLike](_fs_.md#pathlike), `len?`: undefined | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2114

Asynchronous truncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`len?` | undefined &#124; number | If not specified, defaults to `0`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  unlink

▸ **unlink**(`path`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2236

Asynchronous unlink(2) - delete a name and possibly the file it refers to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  utimes

▸ **utimes**(`path`: [PathLike](_fs_.md#pathlike), `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2283

Asynchronously change file timestamps of the file referenced by the supplied path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  write

▸ **write**<**TBuffer**>(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md), `buffer`: TBuffer, `offset?`: number | null, `length?`: number | null, `position?`: number | null): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:2083

Asynchronously writes `buffer` to the file referenced by the supplied `FileHandle`.
It is unsafe to call `fsPromises.write()` multiple times on the same file without waiting for the `Promise`
to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.

**Type parameters:**

▪ **TBuffer**: *[Uint8Array](../interfaces/uint8array.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`. |
`buffer` | TBuffer | The buffer that the data will be written to. |
`offset?` | number &#124; null | The part of the buffer to be written. If not supplied, defaults to `0`. |
`length?` | number &#124; null | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.  |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **write**(`handle`: [FileHandle](../interfaces/_fs_.promises.filehandle.md), `string`: any, `position?`: number | null, `encoding?`: string | null): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:2098

Asynchronously writes `string` to the file referenced by the supplied `FileHandle`.
It is unsafe to call `fsPromises.write()` multiple times on the same file without waiting for the `Promise`
to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handle` | [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A `FileHandle`. |
`string` | any | A string to write. If something other than a string is supplied it will be coerced to a string. |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
`encoding?` | string &#124; null | The expected string encoding.  |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

___

###  writeFile

▸ **writeFile**(`path`: [PathLike](_fs_.md#pathlike) | [FileHandle](../interfaces/_fs_.promises.filehandle.md), `data`: any, `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:2348

Asynchronously writes data to a file, replacing the file if it already exists.
It is unsafe to call `fsPromises.writeFile()` multiple times on the same file without waiting for the `Promise` to be resolved (or rejected).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; [FileHandle](../interfaces/_fs_.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
`options?` | object &#124; string &#124; null | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
