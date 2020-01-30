[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [stat](_fs_.stat.md)

# Module: stat

## Callable

▸ **stat**(`path`: [PathLike](_fs_.md#pathlike), `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:380

Asynchronous stat(2) - Get file status.

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

A path to a file. If a URL is provided, it must use the `file:` protocol.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `stats`: [Stats](../classes/_fs_.stats.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`stats` | [Stats](../classes/_fs_.stats.md) |

**Returns:** *void*

▸ **stat**(`path`: [PathLike](_fs_.md#pathlike), `options`: [BigIntOptions](../interfaces/_fs_.bigintoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/ts3.2/fs.d.ts:23

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

▪ **options**: *[BigIntOptions](../interfaces/_fs_.bigintoptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `stats`: [BigIntStats](../classes/_fs_.bigintstats.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`stats` | [BigIntStats](../classes/_fs_.bigintstats.md) |

**Returns:** *void*

▸ **stat**(`path`: [PathLike](_fs_.md#pathlike), `options`: [StatOptions](../interfaces/_fs_.statoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/ts3.2/fs.d.ts:24

**Parameters:**

▪ **path**: *[PathLike](_fs_.md#pathlike)*

▪ **options**: *[StatOptions](../interfaces/_fs_.statoptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `stats`: [Stats](../classes/_fs_.stats.md) | [BigIntStats](../classes/_fs_.bigintstats.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`stats` | [Stats](../classes/_fs_.stats.md) &#124; [BigIntStats](../classes/_fs_.bigintstats.md) |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.stat.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike)): *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

Defined in node_modules/@types/node/fs.d.ts:388

Asynchronous stat(2) - Get file status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md)›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options`: [BigIntOptions](../interfaces/_fs_.bigintoptions.md)): *[Promise](../interfaces/promise.md)‹[BigIntStats](../classes/_fs_.bigintstats.md)›*

Defined in node_modules/@types/node/ts3.2/fs.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options` | [BigIntOptions](../interfaces/_fs_.bigintoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[BigIntStats](../classes/_fs_.bigintstats.md)›*

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike), `options`: [StatOptions](../interfaces/_fs_.statoptions.md)): *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md) | [BigIntStats](../classes/_fs_.bigintstats.md)›*

Defined in node_modules/@types/node/ts3.2/fs.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options` | [StatOptions](../interfaces/_fs_.statoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[Stats](../classes/_fs_.stats.md) | [BigIntStats](../classes/_fs_.bigintstats.md)›*
