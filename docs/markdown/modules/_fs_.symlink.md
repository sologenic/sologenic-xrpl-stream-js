[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [symlink](_fs_.symlink.md)

# Module: symlink

## Callable

▸ **symlink**(`target`: [PathLike](_fs_.md#pathlike), `path`: [PathLike](_fs_.md#pathlike), `type`: [Type](_fs_.symlink.md#type) | undefined | null, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:470

Asynchronous symlink(2) - Create a new symbolic link to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | [PathLike](_fs_.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
`path` | [PathLike](_fs_.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol. |
`type` | [Type](_fs_.symlink.md#type) &#124; undefined &#124; null | May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms). When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **symlink**(`target`: [PathLike](_fs_.md#pathlike), `path`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:477

Asynchronous symlink(2) - Create a new symbolic link to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | [PathLike](_fs_.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
`path` | [PathLike](_fs_.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Type aliases

* [Type](_fs_.symlink.md#type)

### Functions

* [__promisify__](_fs_.symlink.md#__promisify__)

## Type aliases

###  Type

Ƭ **Type**: *"dir" | "file" | "junction"*

Defined in node_modules/@types/node/fs.d.ts:490

## Functions

###  __promisify__

▸ **__promisify__**(`target`: [PathLike](_fs_.md#pathlike), `path`: [PathLike](_fs_.md#pathlike), `type?`: string | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:488

Asynchronous symlink(2) - Create a new symbolic link to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | [PathLike](_fs_.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
`path` | [PathLike](_fs_.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol. |
`type?` | string &#124; null | May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms). When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
