[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [lchown](_fs_.lchown.md)

# Module: lchown

## Callable

▸ **lchown**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:287

Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`uid` | number | - |
`gid` | number | - |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.lchown.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:295

Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
