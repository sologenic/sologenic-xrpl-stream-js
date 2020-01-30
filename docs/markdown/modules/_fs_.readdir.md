[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [readdir](_fs_.readdir.md)

# Module: readdir

## Callable

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:865

Asynchronous readdir(3) - read a directory.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `files`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`files` | string[] |

**Returns:** *void*

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer", `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:876

Asynchronous readdir(3) - read a directory.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | "buffer"*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `files`: [Buffer](../classes/buffer.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`files` | [Buffer](../classes/buffer.md)[] |

**Returns:** *void*

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | string | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:883

Asynchronous readdir(3) - read a directory.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | string | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `files`: string[] | [Buffer](../classes/buffer.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`files` | string[] &#124; [Buffer](../classes/buffer.md)[] |

**Returns:** *void*

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:893

Asynchronous readdir(3) - read a directory.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `files`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`files` | string[] |

**Returns:** *void*

▸ **readdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: object, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:900

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

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `files`: [Dirent](../classes/_fs_.dirent.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`files` | [Dirent](../classes/_fs_.dirent.md)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.readdir.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/fs.d.ts:909

Asynchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options`: "buffer" | object): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)[]›*

Defined in node_modules/@types/node/fs.d.ts:916

Asynchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | "buffer" &#124; object | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)[]›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string[] | [Buffer](../classes/buffer.md)[]›*

Defined in node_modules/@types/node/fs.d.ts:923

Asynchronous readdir(3) - read a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string[] | [Buffer](../classes/buffer.md)[]›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options`: object): *[Promise](../interfaces/promise.md)‹[Dirent](../classes/_fs_.dirent.md)[]›*

Defined in node_modules/@types/node/fs.d.ts:930

Asynchronous readdir(3) - read a directory.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object*

If called with `withFileTypes: true` the result data will be an array of Dirent

Name | Type |
------ | ------ |
`encoding?` | string &#124; null |
`withFileTypes` | true |

**Returns:** *[Promise](../interfaces/promise.md)‹[Dirent](../classes/_fs_.dirent.md)[]›*
