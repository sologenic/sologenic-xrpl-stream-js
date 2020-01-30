[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [write](_fs_.write.md)

# Module: write

## Callable

▸ **write**<**TBuffer**>(`fd`: number, `buffer`: TBuffer, `offset`: number | undefined | null, `length`: number | undefined | null, `position`: number | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1094

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

**Type parameters:**

▪ **TBuffer**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **buffer**: *TBuffer*

▪ **offset**: *number | undefined | null*

The part of the buffer to be written. If not supplied, defaults to `0`.

▪ **length**: *number | undefined | null*

The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.

▪ **position**: *number | undefined | null*

The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `written`: number, `buffer`: TBuffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`written` | number |
`buffer` | TBuffer |

**Returns:** *void*

▸ **write**<**TBuffer**>(`fd`: number, `buffer`: TBuffer, `offset`: number | undefined | null, `length`: number | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1109

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

**Type parameters:**

▪ **TBuffer**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **buffer**: *TBuffer*

▪ **offset**: *number | undefined | null*

The part of the buffer to be written. If not supplied, defaults to `0`.

▪ **length**: *number | undefined | null*

The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `written`: number, `buffer`: TBuffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`written` | number |
`buffer` | TBuffer |

**Returns:** *void*

▸ **write**<**TBuffer**>(`fd`: number, `buffer`: TBuffer, `offset`: number | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1122

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

**Type parameters:**

▪ **TBuffer**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **buffer**: *TBuffer*

▪ **offset**: *number | undefined | null*

The part of the buffer to be written. If not supplied, defaults to `0`.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `written`: number, `buffer`: TBuffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`written` | number |
`buffer` | TBuffer |

**Returns:** *void*

▸ **write**<**TBuffer**>(`fd`: number, `buffer`: TBuffer, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1133

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

**Type parameters:**

▪ **TBuffer**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **buffer**: *TBuffer*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `written`: number, `buffer`: TBuffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`written` | number |
`buffer` | TBuffer |

**Returns:** *void*

▸ **write**(`fd`: number, `string`: any, `position`: number | undefined | null, `encoding`: string | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1142

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **string**: *any*

A string to write. If something other than a string is supplied it will be coerced to a string.

▪ **position**: *number | undefined | null*

The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.

▪ **encoding**: *string | undefined | null*

The expected string encoding.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `written`: number, `str`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`written` | number |
`str` | string |

**Returns:** *void*

▸ **write**(`fd`: number, `string`: any, `position`: number | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1156

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **string**: *any*

A string to write. If something other than a string is supplied it will be coerced to a string.

▪ **position**: *number | undefined | null*

The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `written`: number, `str`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`written` | number |
`str` | string |

**Returns:** *void*

▸ **write**(`fd`: number, `string`: any, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1163

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **string**: *any*

A string to write. If something other than a string is supplied it will be coerced to a string.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `written`: number, `str`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`written` | number |
`str` | string |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.write.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**<**TBuffer**>(`fd`: number, `buffer?`: TBuffer, `offset?`: undefined | number, `length?`: undefined | number, `position?`: number | null): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:1174

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

**Type parameters:**

▪ **TBuffer**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`buffer?` | TBuffer | - |
`offset?` | undefined &#124; number | The part of the buffer to be written. If not supplied, defaults to `0`. |
`length?` | undefined &#124; number | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.  |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`fd`: number, `string`: any, `position?`: number | null, `encoding?`: string | null): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:1189

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`string` | any | A string to write. If something other than a string is supplied it will be coerced to a string. |
`position?` | number &#124; null | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
`encoding?` | string &#124; null | The expected string encoding.  |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*
