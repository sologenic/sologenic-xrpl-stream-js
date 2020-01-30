[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [lchmod](_fs_.lchmod.md)

# Module: lchmod

## Callable

▸ **lchmod**(`path`: [PathLike](_fs_.md#pathlike), `mode`: string | number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:357

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.lchmod.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `mode`: string | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:366

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
