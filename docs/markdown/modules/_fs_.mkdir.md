[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [mkdir](_fs_.mkdir.md)

# Module: mkdir

## Callable

▸ **mkdir**(`path`: [PathLike](_fs_.md#pathlike), `options`: number | string | [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) | undefined | null, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:761

Asynchronous mkdir(2) - create a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | number &#124; string &#124; [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) &#124; undefined &#124; null | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **mkdir**(`path`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:767

Asynchronous mkdir(2) - create a directory with a mode of `0o777`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.mkdir.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options?`: number | string | [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:777

Asynchronous mkdir(2) - create a directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | number &#124; string &#124; [MakeDirectoryOptions](../interfaces/_fs_.makedirectoryoptions.md) &#124; null | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
