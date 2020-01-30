[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [link](_fs_.link.md)

# Module: link

## Callable

▸ **link**(`existingPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:444

Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`existingPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [link](_fs_.link.md#link)

## Functions

###  link

▸ **link**(`existingPath`: [PathLike](_fs_.md#pathlike), `newPath`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:453

Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`existingPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`newPath` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
