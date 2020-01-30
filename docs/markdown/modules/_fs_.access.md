[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [access](_fs_.access.md)

# Module: access

## Callable

▸ **access**(`path`: [PathLike](_fs_.md#pathlike), `mode`: number | undefined, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1725

Asynchronously tests a user's permissions for the file specified by path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`mode` | number &#124; undefined | - |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **access**(`path`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1732

Asynchronously tests a user's permissions for the file specified by path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.access.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `mode?`: undefined | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1741

Asynchronously tests a user's permissions for the file specified by path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`mode?` | undefined &#124; number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
