[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [readlink](_fs_.readlink.md)

# Module: readlink

## Callable

▸ **readlink**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:507

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `linkString`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`linkString` | string |

**Returns:** *void*

▸ **readlink**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer", `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:518

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | "buffer"*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `linkString`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`linkString` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **readlink**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | string | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:525

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | string | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `linkString`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`linkString` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **readlink**(`path`: [PathLike](_fs_.md#pathlike), `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:531

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `linkString`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`linkString` | string |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.readlink.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:540

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:547

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:554

Asynchronous readlink(2) - read value of a symbolic link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*
