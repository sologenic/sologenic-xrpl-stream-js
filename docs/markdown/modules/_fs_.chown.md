[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [chown](_fs_.chown.md)

# Module: chown

## Callable

▸ **chown**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:245

Asynchronous chown(2) - Change ownership of a file.

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

* [__promisify__](_fs_.chown.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `uid`: number, `gid`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:253

Asynchronous chown(2) - Change ownership of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
