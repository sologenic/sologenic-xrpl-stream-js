[typescript](../README.md) › [Globals](../globals.md) › ["timers"](_timers_.md)

# Module: "timers"

## Index

### Modules

* [setImmediate](_timers_.setimmediate.md)
* [setTimeout](_timers_.settimeout.md)

### Functions

* [clearImmediate](_timers_.md#clearimmediate)
* [clearInterval](_timers_.md#clearinterval)
* [clearTimeout](_timers_.md#cleartimeout)
* [setInterval](_timers_.md#setinterval)

## Functions

###  clearImmediate

▸ **clearImmediate**(`immediateId`: [Immediate](../classes/nodejs.immediate.md)): *void*

Defined in node_modules/@types/node/timers.d.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`immediateId` | [Immediate](../classes/nodejs.immediate.md) |

**Returns:** *void*

___

###  clearInterval

▸ **clearInterval**(`intervalId`: [Timeout](../classes/nodejs.timeout.md)): *void*

Defined in node_modules/@types/node/timers.d.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`intervalId` | [Timeout](../classes/nodejs.timeout.md) |

**Returns:** *void*

___

###  clearTimeout

▸ **clearTimeout**(`timeoutId`: [Timeout](../classes/nodejs.timeout.md)): *void*

Defined in node_modules/@types/node/timers.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`timeoutId` | [Timeout](../classes/nodejs.timeout.md) |

**Returns:** *void*

___

###  setInterval

▸ **setInterval**(`callback`: function, `ms`: number, ...`args`: any[]): *[Timeout](../classes/nodejs.timeout.md)*

Defined in node_modules/@types/node/timers.d.ts:8

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
