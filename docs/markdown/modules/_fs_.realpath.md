[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [realpath](_fs_.realpath.md)

# Module: realpath

## Callable

▸ **realpath**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:583

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | string |

**Returns:** *void*

▸ **realpath**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer", `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:594

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | "buffer"*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **realpath**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | string | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:601

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **options**: *object | string | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **realpath**(`path`: [PathLike](_fs_.md#pathlike), `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:607

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | string |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.realpath.md#__promisify__)
* [native](_fs_.realpath.md#native)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:616

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:623

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:630

Asynchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

___

###  native

▸ **native**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:632

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

▪ **options**: *object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | string |

**Returns:** *void*

▸ **native**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer", `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:637

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

▪ **options**: *object | "buffer"*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **native**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | string | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:638

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

▪ **options**: *object | string | undefined | null*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **native**(`path`: [PathLike](_fs_.md#pathlike), `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:639

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `resolvedPath`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`resolvedPath` | string |

**Returns:** *void*
