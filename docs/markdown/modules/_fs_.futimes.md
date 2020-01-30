[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [futimes](_fs_.futimes.md)

# Module: futimes

## Callable

▸ **futimes**(`fd`: number, `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1045

Asynchronously change file timestamps of the file referenced by the supplied file descriptor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.futimes.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number, `atime`: string | number | [Date](../interfaces/date.md), `mtime`: string | number | [Date](../interfaces/date.md)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1055

Asynchronously change file timestamps of the file referenced by the supplied file descriptor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`atime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last access time. If a string is provided, it will be coerced to number. |
`mtime` | string &#124; number &#124; [Date](../interfaces/date.md) | The last modified time. If a string is provided, it will be coerced to number.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
