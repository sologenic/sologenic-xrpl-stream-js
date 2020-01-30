[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [truncate](_fs_.truncate.md)

# Module: truncate

## Callable

▸ **truncate**(`path`: [PathLike](_fs_.md#pathlike), `len`: number | undefined | null, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:185

Asynchronous truncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`len` | number &#124; undefined &#124; null | If not specified, defaults to `0`.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **truncate**(`path`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:192

Asynchronous truncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.truncate.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `len?`: number | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:201

Asynchronous truncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`len?` | number &#124; null | If not specified, defaults to `0`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
