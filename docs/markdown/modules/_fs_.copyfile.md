[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [copyFile](_fs_.copyfile.md)

# Module: copyFile

## Callable

▸ **copyFile**(`src`: [PathLike](_fs_.md#pathlike), `dest`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1816

Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
No arguments other than a possible exception are given to the callback function.
Node.js makes no guarantees about the atomicity of the copy operation.
If an error occurs after the destination file has been opened for writing, Node.js will attempt
to remove the destination.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [PathLike](_fs_.md#pathlike) | A path to the source file. |
`dest` | [PathLike](_fs_.md#pathlike) | A path to the destination file.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **copyFile**(`src`: [PathLike](_fs_.md#pathlike), `dest`: [PathLike](_fs_.md#pathlike), `flags`: number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1827

Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
No arguments other than a possible exception are given to the callback function.
Node.js makes no guarantees about the atomicity of the copy operation.
If an error occurs after the destination file has been opened for writing, Node.js will attempt
to remove the destination.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [PathLike](_fs_.md#pathlike) | A path to the source file. |
`dest` | [PathLike](_fs_.md#pathlike) | A path to the destination file. |
`flags` | number | An integer that specifies the behavior of the copy operation. The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.copyfile.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`src`: [PathLike](_fs_.md#pathlike), `dst`: [PathLike](_fs_.md#pathlike), `flags?`: undefined | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1843

Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
No arguments other than a possible exception are given to the callback function.
Node.js makes no guarantees about the atomicity of the copy operation.
If an error occurs after the destination file has been opened for writing, Node.js will attempt
to remove the destination.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [PathLike](_fs_.md#pathlike) | A path to the source file. |
`dst` | [PathLike](_fs_.md#pathlike) | - |
`flags?` | undefined &#124; number | An optional integer that specifies the behavior of the copy operation. The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
