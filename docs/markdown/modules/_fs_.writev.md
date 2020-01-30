[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [writev](_fs_.writev.md)

# Module: writev

## Callable

▸ **writev**(`fd`: number, `buffers`: [ArrayBufferView](nodejs.md#arraybufferview)[], `cb`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1865

Write an array of ArrayBufferViews to the file specified by fd using writev().
position is the offset from the beginning of the file where this data should be written.
It is unsafe to use fs.writev() multiple times on the same file without waiting for the callback. For this scenario, use fs.createWriteStream().
On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to the end of the file.

**Parameters:**

▪ **fd**: *number*

▪ **buffers**: *[ArrayBufferView](nodejs.md#arraybufferview)[]*

▪ **cb**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `bytesWritten`: number, `buffers`: [ArrayBufferView](nodejs.md#arraybufferview)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`bytesWritten` | number |
`buffers` | [ArrayBufferView](nodejs.md#arraybufferview)[] |

**Returns:** *void*

▸ **writev**(`fd`: number, `buffers`: [ArrayBufferView](nodejs.md#arraybufferview)[], `position`: number, `cb`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:1870

**Parameters:**

▪ **fd**: *number*

▪ **buffers**: *[ArrayBufferView](nodejs.md#arraybufferview)[]*

▪ **position**: *number*

▪ **cb**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `bytesWritten`: number, `buffers`: [ArrayBufferView](nodejs.md#arraybufferview)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`bytesWritten` | number |
`buffers` | [ArrayBufferView](nodejs.md#arraybufferview)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.writev.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number, `buffers`: [ArrayBufferView](nodejs.md#arraybufferview)[], `position?`: undefined | number): *[Promise](../interfaces/promise.md)‹[WriteVResult](../interfaces/_fs_.writevresult.md)›*

Defined in node_modules/@types/node/fs.d.ts:1883

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |
`buffers` | [ArrayBufferView](nodejs.md#arraybufferview)[] |
`position?` | undefined &#124; number |

**Returns:** *[Promise](../interfaces/promise.md)‹[WriteVResult](../interfaces/_fs_.writevresult.md)›*
