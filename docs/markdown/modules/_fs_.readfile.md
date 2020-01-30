[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [readFile](_fs_.readfile.md)

# Module: readFile

## Callable

▸ **readFile**(`path`: [PathLike](_fs_.md#pathlike) | number, `options`: object | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1262

Asynchronously reads the entire contents of a file.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike) | number*

A path to a file. If a URL is provided, it must use the `file:` protocol.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.

▪ **options**: *object | undefined | null*

An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `data`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **readFile**(`path`: [PathLike](_fs_.md#pathlike) | number, `options`: object | string, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1272

Asynchronously reads the entire contents of a file.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike) | number*

A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.

▪ **options**: *object | string*

Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `data`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`data` | string |

**Returns:** *void*

▸ **readFile**(`path`: [PathLike](_fs_.md#pathlike) | number, `options`: object | string | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1282

Asynchronously reads the entire contents of a file.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike) | number*

A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.

▪ **options**: *object | string | undefined | null*

Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `data`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`data` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **readFile**(`path`: [PathLike](_fs_.md#pathlike) | number, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1293

Asynchronously reads the entire contents of a file.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike) | number*

A path to a file. If a URL is provided, it must use the `file:` protocol.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `data`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`data` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.readfile.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike) | number, `options?`: object | null): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:1304

Asynchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`options?` | object &#124; null | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike) | number, `options`: object | string): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:1314

Asynchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`options` | object &#124; string | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike) | number, `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:1324

Asynchronously reads the entire contents of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`options?` | object &#124; string &#124; null | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*
