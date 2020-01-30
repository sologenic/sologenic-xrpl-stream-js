[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [fstat](_fs_.fstat.md)

# Module: fstat

## Callable

▸ **fstat**(`fd`: number, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:401

Asynchronous fstat(2) - Get file status.

**Parameters:**

▪ **fd**: *number*

A file descriptor.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `stats`: [Stats](../classes/_fs_.stats.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`stats` | [Stats](../classes/_fs_.stats.md) |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.fstat.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`fd`: number): *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

Defined in node_modules/@types/node/fs.d.ts:409

Asynchronous fstat(2) - Get file status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | A file descriptor.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*
