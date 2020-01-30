[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [utimes](_fs_.utimes.md)

# Module: utimes

## Callable

▸ **utimes**(`path`: [PathLike](_fs_.md#pathlike), `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1018

Asynchronously change file timestamps of the file referenced by the supplied path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.utimes.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1028

Asynchronously change file timestamps of the file referenced by the supplied path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
