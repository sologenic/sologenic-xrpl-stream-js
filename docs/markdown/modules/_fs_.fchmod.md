[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [fchmod](_fs_.fchmod.md)

# Module: fchmod

## Callable

▸ **fchmod**(`fd`: number, `mode`: string | number, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:333

Asynchronous fchmod(2) - Change permissions of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.fchmod.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number, `mode`: string | number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:342

Asynchronous fchmod(2) - Change permissions of a file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`mode` | string &#124; number | A file mode. If a string is passed, it is parsed as an octal integer.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
