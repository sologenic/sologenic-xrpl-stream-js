[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [exists](_fs_.exists.md)

# Module: exists

## Callable

▸ **exists**(`path`: [PathLike](_fs_.md#pathlike), `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1539

Asynchronously tests whether or not the given path exists by checking with the file system.

**`deprecated`** 

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.

▪ **callback**: *function*

▸ (`exists`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exists` | boolean |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.exists.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹boolean›*

Defined in node_modules/@types/node/fs.d.ts:1547

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*
