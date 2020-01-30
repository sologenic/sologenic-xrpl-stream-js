[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [read](_fs_.read.md)

# Module: read

## Callable

▸ **read**<**TBuffer**>(`fd`: number, `buffer`: TBuffer, `offset`: number, `length`: number, `position`: number | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1218

Asynchronously reads data from the file referenced by the supplied file descriptor.

**Type parameters:**

▪ **TBuffer**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **buffer**: *TBuffer*

The buffer that the data will be written to.

▪ **offset**: *number*

The offset in the buffer at which to start writing.

▪ **length**: *number*

The number of bytes to read.

▪ **position**: *number | null*

The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `bytesRead`: number, `buffer`: TBuffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`bytesRead` | number |
`buffer` | TBuffer |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.read.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**<**TBuffer**>(`fd`: number, `buffer`: TBuffer, `offset`: number, `length`: number, `position`: number | null): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/fs.d.ts:1236

**Type parameters:**

▪ **TBuffer**: *[ArrayBufferView](nodejs.md#arraybufferview)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor. |
`buffer` | TBuffer | The buffer that the data will be written to. |
`offset` | number | The offset in the buffer at which to start writing. |
`length` | number | The number of bytes to read. |
`position` | number &#124; null | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.  |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*
