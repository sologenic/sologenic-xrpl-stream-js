[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [fdatasync](_fs_.fdatasync.md)

# Module: fdatasync

## Callable

▸ **fdatasync**(`fd`: number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1790

Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.fdatasync.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1798

Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
