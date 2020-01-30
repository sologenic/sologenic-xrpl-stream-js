[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [ftruncate](_fs_.ftruncate.md)

# Module: ftruncate

## Callable

▸ **ftruncate**(`fd`: number, `len`: number | undefined | null, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:216

Asynchronous ftruncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`len` | number &#124; undefined &#124; null | If not specified, defaults to `0`.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **ftruncate**(`fd`: number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:222

Asynchronous ftruncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.ftruncate.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number, `len?`: number | null): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:231

Asynchronous ftruncate(2) - Truncate a file to a specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`len?` | number &#124; null | If not specified, defaults to `0`.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
