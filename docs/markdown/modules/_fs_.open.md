[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [open](_fs_.open.md)

# Module: open

## Callable

▸ **open**(`path`: [PathLike](_fs_.md#pathlike), `flags`: string | number, `mode`: string | number | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:987

Asynchronous open(2) - open and possibly create a file.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **flags**: *string | number*

▪ **mode**: *string | number | undefined | null*

A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `fd`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`fd` | number |

**Returns:** *void*

▸ **open**(`path`: [PathLike](_fs_.md#pathlike), `flags`: string | number, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:993

Asynchronous open(2) - open and possibly create a file. If the file is created, its mode will be `0o666`.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **flags**: *string | number*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `fd`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`fd` | number |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.open.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `flags`: string | number, `mode?`: string | number | null): *[Promise](../interfaces/promise.md)‹number›*

Defined in node_modules/@types/node/fs.d.ts:1002

Asynchronous open(2) - open and possibly create a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`flags` | string &#124; number | - |
`mode?` | string &#124; number &#124; null | A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹number›*
