[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [unlink](_fs_.unlink.md)

# Module: unlink

## Callable

▸ **unlink**(`path`: [PathLike](_fs_.md#pathlike), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:673

Asynchronous unlink(2) - delete a name and possibly the file it refers to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.unlink.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:681

Asynchronous unlink(2) - delete a name and possibly the file it refers to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
