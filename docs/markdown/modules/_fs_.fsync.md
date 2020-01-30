[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [fsync](_fs_.fsync.md)

# Module: fsync

## Callable

▸ **fsync**(`fd`: number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1070

Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.fsync.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1078

Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
