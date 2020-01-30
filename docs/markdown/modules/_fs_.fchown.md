[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [fchown](_fs_.fchown.md)

# Module: fchown

## Callable

▸ **fchown**(`fd`: number, `uid`: number, `gid`: number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:266

Asynchronous fchown(2) - Change ownership of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |
`uid` | number | - |
`gid` | number | - |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.fchown.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number, `uid`: number, `gid`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:274

Asynchronous fchown(2) - Change ownership of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |
`uid` | number | - |
`gid` | number | - |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
