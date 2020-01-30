[typescript](../README.md) › [Globals](../globals.md) › ["timers"](_timers_.md) › [setTimeout](_timers_.settimeout.md)

# Module: setTimeout

## Callable

▸ **setTimeout**(`callback`: function, `ms`: number, ...`args`: any[]): *[Timeout](../classes/nodejs.timeout.md)*

Defined in node_modules/@types/node/timers.d.ts:2

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪ **ms**: *number*

▪... **args**: *any[]*

**Returns:** *[Timeout](../classes/nodejs.timeout.md)*

## Index

### Functions

* [__promisify__](_timers_.settimeout.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`ms`: number): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/timers.d.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

▸ **__promisify__**<**T**>(`ms`: number, `value`: T): *[Promise](../interfaces/promise.md)‹T›*

Defined in node_modules/@types/node/timers.d.ts:5

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |
`value` | T |

**Returns:** *[Promise](../interfaces/promise.md)‹T›*
