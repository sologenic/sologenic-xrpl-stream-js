[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md)

# Module: "fs"

## Index

### Modules

* [access](_fs_.access.md)
* [appendFile](_fs_.appendfile.md)
* [chmod](_fs_.chmod.md)
* [chown](_fs_.chown.md)
* [close](_fs_.close.md)
* [constants](_fs_.constants.md)
* [copyFile](_fs_.copyfile.md)
* [exists](_fs_.exists.md)
* [fchmod](_fs_.fchmod.md)
* [fchown](_fs_.fchown.md)
* [fdatasync](_fs_.fdatasync.md)
* [fstat](_fs_.fstat.md)
* [fsync](_fs_.fsync.md)
* [ftruncate](_fs_.ftruncate.md)
* [futimes](_fs_.futimes.md)
* [lchmod](_fs_.lchmod.md)
* [lchown](_fs_.lchown.md)
* [link](_fs_.link.md)
* [lstat](_fs_.lstat.md)
* [mkdir](_fs_.mkdir.md)
* [mkdtemp](_fs_.mkdtemp.md)
* [open](_fs_.open.md)
* [promises](_fs_.promises.md)
* [read](_fs_.read.md)
* [readFile](_fs_.readfile.md)
* [readdir](_fs_.readdir.md)
* [readlink](_fs_.readlink.md)
* [realpath](_fs_.realpath.md)
* [realpathSync](_fs_.realpathsync.md)
* [rename](_fs_.rename.md)
* [rmdir](_fs_.rmdir.md)
* [stat](_fs_.stat.md)
* [symlink](_fs_.symlink.md)
* [truncate](_fs_.truncate.md)
* [unlink](_fs_.unlink.md)
* [utimes](_fs_.utimes.md)
* [write](_fs_.write.md)
* [writeFile](_fs_.writefile.md)
* [writev](_fs_.writev.md)

### Classes

* [BigIntStats](../classes/_fs_.bigintstats.md)
* [Dirent](../classes/_fs_.dirent.md)
* [ReadStream](../classes/_fs_.readstream.md)
* [Stats](../classes/_fs_.stats.md)
* [WriteStream](../classes/_fs_.writestream.md)

### Interfaces

* [BigIntOptions](../interfaces/_fs_.bigintoptions.md)
* [FSWatcher](../interfaces/_fs_.fswatcher.md)
* [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md)
* [RmDirAsyncOptions](../interfaces/_fs_.rmdirasyncoptions.md)
* [RmDirOptions](../interfaces/_fs_.rmdiroptions.md)
* [StatOptions](../interfaces/_fs_.statoptions.md)
* [StatsBase](../interfaces/_fs_.statsbase.md)
* [WriteVResult](../interfaces/_fs_.writevresult.md)

### Type aliases

* [NoParamCallback](_fs_.md#noparamcallback)
* [PathLike](_fs_.md#pathlike)
* [WriteFileOptions](_fs_.md#writefileoptions)

### Functions

* [accessSync](_fs_.md#accesssync)
* [appendFileSync](_fs_.md#appendfilesync)
* [chmodSync](_fs_.md#chmodsync)
* [chownSync](_fs_.md#chownsync)
* [closeSync](_fs_.md#closesync)
* [copyFileSync](_fs_.md#copyfilesync)
* [createReadStream](_fs_.md#createreadstream)
* [createWriteStream](_fs_.md#createwritestream)
* [existsSync](_fs_.md#existssync)
* [fchmodSync](_fs_.md#fchmodsync)
* [fchownSync](_fs_.md#fchownsync)
* [fdatasyncSync](_fs_.md#fdatasyncsync)
* [fstatSync](_fs_.md#fstatsync)
* [fsyncSync](_fs_.md#fsyncsync)
* [ftruncateSync](_fs_.md#ftruncatesync)
* [futimesSync](_fs_.md#futimessync)
* [lchmodSync](_fs_.md#lchmodsync)
* [lchownSync](_fs_.md#lchownsync)
* [linkSync](_fs_.md#linksync)
* [lstatSync](_fs_.md#lstatsync)
* [mkdirSync](_fs_.md#mkdirsync)
* [mkdtempSync](_fs_.md#mkdtempsync)
* [openSync](_fs_.md#opensync)
* [readFileSync](_fs_.md#readfilesync)
* [readSync](_fs_.md#readsync)
* [readdirSync](_fs_.md#readdirsync)
* [readlinkSync](_fs_.md#readlinksync)
* [renameSync](_fs_.md#renamesync)
* [rmdirSync](_fs_.md#rmdirsync)
* [statSync](_fs_.md#statsync)
* [symlinkSync](_fs_.md#symlinksync)
* [truncateSync](_fs_.md#truncatesync)
* [unlinkSync](_fs_.md#unlinksync)
* [unwatchFile](_fs_.md#unwatchfile)
* [utimesSync](_fs_.md#utimessync)
* [watch](_fs_.md#watch)
* [watchFile](_fs_.md#watchfile)
* [writeFileSync](_fs_.md#writefilesync)
* [writeSync](_fs_.md#writesync)
* [writevSync](_fs_.md#writevsync)

## Type aliases

###  NoParamCallback

Ƭ **NoParamCallback**: *function*

Defined in node_modules/@types/node/fs.d.ts:11

#### Type declaration:

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |

___

###  PathLike

Ƭ **PathLike**: *string | [Buffer](../classes/buffer.md) | [URL](../classes/_url_.url.md)*

Defined in node_modules/@types/node/fs.d.ts:9

Valid types for path values in "fs".

___

###  WriteFileOptions

Ƭ **WriteFileOptions**: *object | string | null*

Defined in node_modules/@types/node/fs.d.ts:1356

## Functions

###  accessSync

▸ **accessSync**(`path`: [PathLike](_fs_.md#pathlike), `mode?`: undefined | number): *void*

Defined in node_modules/@types/node/fs.d.ts:1749

Synchronously tests a user's permissions for the file specified by path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`mode?` | undefined &#124; number | - |

**Returns:** *void*

___

###  appendFileSync

▸ **appendFileSync**(`file`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `options?`: [WriteFileOptions](_fs_.md#writefileoptions)): *void*

Defined in node_modules/@types/node/fs.d.ts:1464

Synchronously append data to a file, creating the file if it does not exist.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
`options?` | [WriteFileOptions](_fs_.md#writefileoptions) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used.  |

**Returns:** *void*

___

###  chmodSync

▸ **chmodSync**(`path`: [PathLike](_fs_.md#pathlike), `mode`: string | number): *void*

Defined in node_modules/@types/node/fs.d.ts:326

Synchronous chmod(2) - Change permissions of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *void*

___

###  chownSync

▸ **chownSync**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number): *void*

Defined in node_modules/@types/node/fs.d.ts:260

Synchronous chown(2) - Change ownership of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *void*

___

###  closeSync

▸ **closeSync**(`fd`: number): *void*

Defined in node_modules/@types/node/fs.d.ts:980

Synchronous close(2) - close a file descriptor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |

**Returns:** *void*

___

###  copyFileSync

▸ **copyFileSync**(`src`: [PathLike](_fs_.md#pathlike), `dest`: [PathLike](_fs_.md#pathlike), `flags?`: undefined | number): *void*

Defined in node_modules/@types/node/fs.d.ts:1856

Synchronously copies src to dest. By default, dest is overwritten if it already exists.
Node.js makes no guarantees about the atomicity of the copy operation.
If an error occurs after the destination file has been opened for writing, Node.js will attempt
to remove the destination.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [PathLike](_fs_.md#pathlike) | A path to the source file. |
`dest` | [PathLike](_fs_.md#pathlike) | A path to the destination file. |
`flags?` | undefined &#124; number | An optional integer that specifies the behavior of the copy operation. The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists.  |

**Returns:** *void*

___

###  createReadStream

▸ **createReadStream**(`path`: [PathLike](_fs_.md#pathlike), `options?`: string | object): *[ReadStream](../classes/_fs_.readstream.md)*

Defined in node_modules/@types/node/fs.d.ts:1756

Returns a new `ReadStream` object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`options?` | string &#124; object | - |

**Returns:** *[ReadStream](../classes/_fs_.readstream.md)*

___

###  createWriteStream

▸ **createWriteStream**(`path`: [PathLike](_fs_.md#pathlike), `options?`: string | object): *[WriteStream](../classes/_fs_.writestream.md)*

Defined in node_modules/@types/node/fs.d.ts:1776

Returns a new `WriteStream` object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`options?` | string &#124; object | - |

**Returns:** *[WriteStream](../classes/_fs_.writestream.md)*

___

###  existsSync

▸ **existsSync**(`path`: [PathLike](_fs_.md#pathlike)): *boolean*

Defined in node_modules/@types/node/fs.d.ts:1555

Synchronously tests whether or not the given path exists by checking with the file system.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |

**Returns:** *boolean*

___

###  fchmodSync

▸ **fchmodSync**(`fd`: number, `mode`: string | number): *void*

Defined in node_modules/@types/node/fs.d.ts:350

Synchronous fchmod(2) - Change permissions of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *void*

___

###  fchownSync

▸ **fchownSync**(`fd`: number, `uid`: number, `gid`: number): *void*

Defined in node_modules/@types/node/fs.d.ts:281

Synchronous fchown(2) - Change ownership of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *void*

___

###  fdatasyncSync

▸ **fdatasyncSync**(`fd`: number): *void*

Defined in node_modules/@types/node/fs.d.ts:1805

Synchronous fdatasync(2) - synchronize a file's in-core state with storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |

**Returns:** *void*

___

###  fstatSync

▸ **fstatSync**(`fd`: number): *[Stats](../classes/_fs_.stats.md)*

Defined in node_modules/@types/node/fs.d.ts:416

Synchronous fstat(2) - Get file status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |

**Returns:** *[Stats](../classes/_fs_.stats.md)*

___

###  fsyncSync

▸ **fsyncSync**(`fd`: number): *void*

Defined in node_modules/@types/node/fs.d.ts:1085

Synchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |

**Returns:** *void*

___

###  ftruncateSync

▸ **ftruncateSync**(`fd`: number, `len?`: number | null): *void*

Defined in node_modules/@types/node/fs.d.ts:239

Synchronous ftruncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`len?` | number &#124; null | If not specified, defaults to `0`.  |

**Returns:** *void*

___

###  futimesSync

▸ **futimesSync**(`fd`: number, `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md)): *void*

Defined in node_modules/@types/node/fs.d.ts:1064

Synchronously change file timestamps of the file referenced by the supplied file descriptor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |

**Returns:** *void*

___

###  lchmodSync

▸ **lchmodSync**(`path`: [PathLike](_fs_.md#pathlike), `mode`: string | number): *void*

Defined in node_modules/@types/node/fs.d.ts:374

Synchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *void*

___

###  lchownSync

▸ **lchownSync**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number): *void*

Defined in node_modules/@types/node/fs.d.ts:302

Synchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *void*

___

###  linkSync

▸ **linkSync**(`existingPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike)): *void*

Defined in node_modules/@types/node/fs.d.ts:461

Synchronous link(2) - Create a new link (also known as a hard link) to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`existingPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *void*

___

###  lstatSync

▸ **lstatSync**(`path`: [PathLike](_fs_.md#pathlike)): *[Stats](../classes/_fs_.stats.md)*

Defined in node_modules/@types/node/fs.d.ts:437

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Stats](../classes/_fs_.stats.md)*

___

###  mkdirSync

▸ **mkdirSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: number | string | [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) | null): *void*

Defined in node_modules/@types/node/fs.d.ts:786

Synchronous mkdir(2) - create a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | number &#124; string &#124; [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) &#124; null | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.  |

**Returns:** *void*

___

###  mkdtempSync

▸ **mkdtempSync**(`prefix`: string, `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *string*

Defined in node_modules/@types/node/fs.d.ts:844

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string*

▸ **mkdtempSync**(`prefix`: string, `options`: object | "buffer"): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:851

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **mkdtempSync**(`prefix`: string, `options?`: object | string | null): *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:858

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string | [Buffer](../classes/buffer.md)*

___

###  openSync

▸ **openSync**(`path`: [PathLike](_fs_.md#pathlike), `flags`: string | number, `mode?`: string | number | null): *number*

Defined in node_modules/@types/node/fs.d.ts:1010

Synchronous open(2) - open and possibly create a file, returning a file descriptor..

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`flags` | string &#124; number | - |
`mode?` | string &#124; number &#124; null | A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.  |

**Returns:** *number*

___

###  readFileSync

▸ **readFileSync**(`path`: [PathLike](_fs_.md#pathlike) | number, `options?`: object | null): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:1334

Synchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`options?` | object &#124; null | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **readFileSync**(`path`: [PathLike](_fs_.md#pathlike) | number, `options`: object | string): *string*

Defined in node_modules/@types/node/fs.d.ts:1344

Synchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`options` | object &#124; string | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *string*

▸ **readFileSync**(`path`: [PathLike](_fs_.md#pathlike) | number, `options?`: object | string | null): *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:1354

Synchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`options?` | object &#124; string &#124; null | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *string | [Buffer](../classes/buffer.md)*

___

###  readSync

▸ **readSync**(`fd`: number, `buffer`: [ArrayBufferView](nodejs.md#arraybufferview), `offset`: number, `length`: number, `position`: number | null): *number*

Defined in node_modules/@types/node/fs.d.ts:1253

Synchronously reads data from the file referenced by the supplied file descriptor, returning the number of bytes read.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`buffer` | [ArrayBufferView](nodejs.md#arraybufferview) | The buffer that the data will be written to. |
`offset` | number | The offset in the buffer at which to start writing. |
`length` | number | The number of bytes to read. |
`position` | number &#124; null | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.  |

**Returns:** *number*

___

###  readdirSync

▸ **readdirSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *string[]*

Defined in node_modules/@types/node/fs.d.ts:938

Synchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string[]*

▸ **readdirSync**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Buffer](../classes/buffer.md)[]*

Defined in node_modules/@types/node/fs.d.ts:945

Synchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Buffer](../classes/buffer.md)[]*

▸ **readdirSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *string[] | [Buffer](../classes/buffer.md)[]*

Defined in node_modules/@types/node/fs.d.ts:952

Synchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string[] | [Buffer](../classes/buffer.md)[]*

▸ **readdirSync**(`path`: [PathLike](_fs_.md#pathlike), `options`: object): *[Dirent](../classes/_fs_.dirent.md)[]*

Defined in node_modules/@types/node/fs.d.ts:959

Synchronous readdir(3) - read a directory.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object*

If called with `withFileTypes: true` the result data will be an array of Dirent.

Name | Type |
------ | ------ |
`encoding?` | string &#124; null |
`withFileTypes` | true |

**Returns:** *[Dirent](../classes/_fs_.dirent.md)[]*

___

###  readlinkSync

▸ **readlinkSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *string*

Defined in node_modules/@types/node/fs.d.ts:562

Synchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string*

▸ **readlinkSync**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:569

Synchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **readlinkSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:576

Synchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string | [Buffer](../classes/buffer.md)*

___

###  renameSync

▸ **renameSync**(`oldPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike)): *void*

Defined in node_modules/@types/node/fs.d.ts:178

Synchronous rename(2) - Change the name or location of a file or directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`oldPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |

**Returns:** *void*

___

###  rmdirSync

▸ **rmdirSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: [RmDirOptions](../interfaces/_fs_.rmdiroptions.md)): *void*

Defined in node_modules/@types/node/fs.d.ts:740

Synchronous rmdir(2) - delete a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`options?` | [RmDirOptions](../interfaces/_fs_.rmdiroptions.md) | - |

**Returns:** *void*

___

###  statSync

▸ **statSync**(`path`: [PathLike](_fs_.md#pathlike)): *[Stats](../classes/_fs_.stats.md)*

Defined in node_modules/@types/node/fs.d.ts:395

Synchronous stat(2) - Get file status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Stats](../classes/_fs_.stats.md)*

▸ **statSync**(`path`: [PathLike](_fs_.md#pathlike), `options`: [BigIntOptions](../interfaces/_fs_.bigintoptions.md)): *[BigIntStats](../classes/_fs_.bigintstats.md)*

Defined in node_modules/@types/node/ts3.2/fs.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options` | [BigIntOptions](../interfaces/_fs_.bigintoptions.md) |

**Returns:** *[BigIntStats](../classes/_fs_.bigintstats.md)*

▸ **statSync**(`path`: [PathLike](_fs_.md#pathlike), `options`: [StatOptions](../interfaces/_fs_.statoptions.md)): *[Stats](../classes/_fs_.stats.md) | [BigIntStats](../classes/_fs_.bigintstats.md)*

Defined in node_modules/@types/node/ts3.2/fs.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options` | [StatOptions](../interfaces/_fs_.statoptions.md) |

**Returns:** *[Stats](../classes/_fs_.stats.md) | [BigIntStats](../classes/_fs_.bigintstats.md)*

___

###  symlinkSync

▸ **symlinkSync**(`target`: [PathLike](_fs_.md#pathlike), `path`: [PathLike](_fs_.md#pathlike), `type?`: [Type](_fs_.symlink.md#type) | null): *void*

Defined in node_modules/@types/node/fs.d.ts:500

Synchronous symlink(2) - Create a new symbolic link to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | [PathLike](_fs_.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
`path` | [PathLike](_fs_.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol. |
`type?` | [Type](_fs_.symlink.md#type) &#124; null | May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms). When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.  |

**Returns:** *void*

___

###  truncateSync

▸ **truncateSync**(`path`: [PathLike](_fs_.md#pathlike), `len?`: number | null): *void*

Defined in node_modules/@types/node/fs.d.ts:209

Synchronous truncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`len?` | number &#124; null | If not specified, defaults to `0`.  |

**Returns:** *void*

___

###  unlinkSync

▸ **unlinkSync**(`path`: [PathLike](_fs_.md#pathlike)): *void*

Defined in node_modules/@types/node/fs.d.ts:688

Synchronous unlink(2) - delete a name and possibly the file it refers to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *void*

___

###  unwatchFile

▸ **unwatchFile**(`filename`: [PathLike](_fs_.md#pathlike), `listener?`: undefined | function): *void*

Defined in node_modules/@types/node/fs.d.ts:1483

Stop watching for changes on `filename`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`listener?` | undefined &#124; function | - |

**Returns:** *void*

___

###  utimesSync

▸ **utimesSync**(`path`: [PathLike](_fs_.md#pathlike), `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md)): *void*

Defined in node_modules/@types/node/fs.d.ts:1037

Synchronously change file timestamps of the file referenced by the supplied path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |

**Returns:** *void*

___

###  watch

▸ **watch**(`filename`: [PathLike](_fs_.md#pathlike), `options`: object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null, `listener?`: undefined | function): *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

Defined in node_modules/@types/node/fs.d.ts:1494

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
`options` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; undefined &#124; null | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used.  |
`listener?` | undefined &#124; function | - |

**Returns:** *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

▸ **watch**(`filename`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer", `listener?`: undefined | function): *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

Defined in node_modules/@types/node/fs.d.ts:1509

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
`options` | object &#124; "buffer" | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used.  |
`listener?` | undefined &#124; function | - |

**Returns:** *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

▸ **watch**(`filename`: [PathLike](_fs_.md#pathlike), `options`: object | string | null, `listener?`: undefined | function): *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

Defined in node_modules/@types/node/fs.d.ts:1520

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
`options` | object &#124; string &#124; null | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used.  |
`listener?` | undefined &#124; function | - |

**Returns:** *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

▸ **watch**(`filename`: [PathLike](_fs_.md#pathlike), `listener?`: undefined | function): *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

Defined in node_modules/@types/node/fs.d.ts:1531

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`listener?` | undefined &#124; function | - |

**Returns:** *[FSWatcher](../interfaces/_fs_.fswatcher.md)*

___

###  watchFile

▸ **watchFile**(`filename`: [PathLike](_fs_.md#pathlike), `options`: object | undefined, `listener`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1469

Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.

**Parameters:**

▪ **filename**: *[PathLike](_fs_.md#pathlike)*

▪ **options**: *object | undefined*

▪ **listener**: *function*

▸ (`curr`: [Stats](../classes/_fs_.stats.md), `prev`: [Stats](../classes/_fs_.stats.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`curr` | [Stats](../classes/_fs_.stats.md) |
`prev` | [Stats](../classes/_fs_.stats.md) |

**Returns:** *void*

▸ **watchFile**(`filename`: [PathLike](_fs_.md#pathlike), `listener`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1476

Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.

**Parameters:**

▪ **filename**: *[PathLike](_fs_.md#pathlike)*

A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.

▪ **listener**: *function*

▸ (`curr`: [Stats](../classes/_fs_.stats.md), `prev`: [Stats](../classes/_fs_.stats.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`curr` | [Stats](../classes/_fs_.stats.md) |
`prev` | [Stats](../classes/_fs_.stats.md) |

**Returns:** *void*

___

###  writeFileSync

▸ **writeFileSync**(`path`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `options?`: [WriteFileOptions](_fs_.md#writefileoptions)): *void*

Defined in node_modules/@types/node/fs.d.ts:1410

Synchronously writes data to a file, replacing the file if it already exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
`options?` | [WriteFileOptions](_fs_.md#writefileoptions) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used.  |

**Returns:** *void*

___

###  writeSync

▸ **writeSync**(`fd`: number, `buffer`: [ArrayBufferView](nodejs.md#arraybufferview), `offset?`: number | null, `length?`: number | null, `position?`: number | null): *number*

Defined in node_modules/@types/node/fs.d.ts:1199

Synchronously writes `buffer` to the file referenced by the supplied file descriptor, returning the number of bytes written.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`buffer` | [ArrayBufferView](nodejs.md#arraybufferview) | - |
`offset?` | number &#124; null | The part of the buffer to be written. If not supplied, defaults to `0`. |
`length?` | number &#124; null | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.  |

**Returns:** *number*

▸ **writeSync**(`fd`: number, `string`: any, `position?`: number | null, `encoding?`: string | null): *number*

Defined in node_modules/@types/node/fs.d.ts:1208

Synchronously writes `string` to the file referenced by the supplied file descriptor, returning the number of bytes written.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`string` | any | A string to write. If something other than a string is supplied it will be coerced to a string. |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
`encoding?` | string &#124; null | The expected string encoding.  |

**Returns:** *number*

___

###  writevSync

▸ **writevSync**(`fd`: number, `buffers`: [ArrayBufferView](nodejs.md#arraybufferview)[], `position?`: undefined | number): *number*

Defined in node_modules/@types/node/fs.d.ts:1889

See `writev`.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |
`buffers` | [ArrayBufferView](nodejs.md#arraybufferview)[] |
`position?` | undefined &#124; number |

**Returns:** *number*
