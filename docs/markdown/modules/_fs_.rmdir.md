[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [rmdir](_fs_.rmdir.md)

# Module: rmdir

## Callable

▸ **rmdir**(`path`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:724

Asynchronous rmdir(2) - delete a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **rmdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: [RmDirAsyncOptions](../interfaces/_fs_.rmdirasyncoptions.md), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:725

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options` | [RmDirAsyncOptions](../interfaces/_fs_.rmdirasyncoptions.md) |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.rmdir.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: [RmDirAsyncOptions](../interfaces/_fs_.rmdirasyncoptions.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:733

Asynchronous rmdir(2) - delete a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`options?` | [RmDirAsyncOptions](../interfaces/_fs_.rmdirasyncoptions.md) | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
