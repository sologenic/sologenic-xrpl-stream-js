[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [lstat](_fs_.lstat.md)

# Module: lstat

## Callable

▸ **lstat**(`path`: [PathLike](_fs_.md#pathlike), `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:422

Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `stats`: [Stats](../classes/_fs_.stats.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`stats` | [Stats](../classes/_fs_.stats.md) |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.lstat.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

Defined in node_modules/@types/node/fs.d.ts:430

Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*
