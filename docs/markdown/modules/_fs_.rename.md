[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [rename](_fs_.rename.md)

# Module: rename

## Callable

▸ **rename**(`oldPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:157

Asynchronous rename(2) - Change the name or location of a file or directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`oldPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.rename.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`oldPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:168

Asynchronous rename(2) - Change the name or location of a file or directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`oldPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
