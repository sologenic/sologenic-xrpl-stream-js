[typescript](../README.md) › [Globals](../globals.md) › [EventEmitter](eventemitter.md)

# Class: EventEmitter

## Hierarchy

* **EventEmitter**

## Index

### Properties

* [defaultMaxListeners](eventemitter.md#static-defaultmaxlisteners)

### Methods

* [addListener](eventemitter.md#addlistener)
* [emit](eventemitter.md#emit)
* [eventNames](eventemitter.md#eventnames)
* [getMaxListeners](eventemitter.md#getmaxlisteners)
* [listenerCount](eventemitter.md#listenercount)
* [listeners](eventemitter.md#listeners)
* [off](eventemitter.md#off)
* [on](eventemitter.md#on)
* [once](eventemitter.md#once)
* [prependListener](eventemitter.md#prependlistener)
* [prependOnceListener](eventemitter.md#prependoncelistener)
* [rawListeners](eventemitter.md#rawlisteners)
* [removeAllListeners](eventemitter.md#removealllisteners)
* [removeListener](eventemitter.md#removelistener)
* [setMaxListeners](eventemitter.md#setmaxlisteners)
* [listenerCount](eventemitter.md#static-listenercount)

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

Defined in node_modules/@types/events/index.d.ts:11

## Methods

###  addListener

▸ **addListener**(`type`: string | number, `listener`: [Listener](../globals.md#listener)): *this*

Defined in node_modules/@types/events/index.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`listener` | [Listener](../globals.md#listener) |

**Returns:** *this*

___

###  emit

▸ **emit**(`type`: string | number, ...`args`: any[]): *boolean*

Defined in node_modules/@types/events/index.d.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | number›*

Defined in node_modules/@types/events/index.d.ts:13

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | number›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

Defined in node_modules/@types/events/index.d.ts:15

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | number): *number*

Defined in node_modules/@types/events/index.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`type`: string | number): *[Listener](../globals.md#listener)[]*

Defined in node_modules/@types/events/index.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |

**Returns:** *[Listener](../globals.md#listener)[]*

___

###  off

▸ **off**(`type`: string | number, `listener`: [Listener](../globals.md#listener)): *this*

Defined in node_modules/@types/events/index.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`listener` | [Listener](../globals.md#listener) |

**Returns:** *this*

___

###  on

▸ **on**(`type`: string | number, `listener`: [Listener](../globals.md#listener)): *this*

Defined in node_modules/@types/events/index.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`listener` | [Listener](../globals.md#listener) |

**Returns:** *this*

___

###  once

▸ **once**(`type`: string | number, `listener`: [Listener](../globals.md#listener)): *this*

Defined in node_modules/@types/events/index.d.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`listener` | [Listener](../globals.md#listener) |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`type`: string | number, `listener`: [Listener](../globals.md#listener)): *this*

Defined in node_modules/@types/events/index.d.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`listener` | [Listener](../globals.md#listener) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`type`: string | number, `listener`: [Listener](../globals.md#listener)): *this*

Defined in node_modules/@types/events/index.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`listener` | [Listener](../globals.md#listener) |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`type`: string | number): *[Listener](../globals.md#listener)[]*

Defined in node_modules/@types/events/index.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |

**Returns:** *[Listener](../globals.md#listener)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`type?`: string | number): *this*

Defined in node_modules/@types/events/index.d.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`type?` | string &#124; number |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`type`: string | number, `listener`: [Listener](../globals.md#listener)): *this*

Defined in node_modules/@types/events/index.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; number |
`listener` | [Listener](../globals.md#listener) |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

Defined in node_modules/@types/events/index.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](eventemitter.md), `type`: string | number): *number*

Defined in node_modules/@types/events/index.d.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](eventemitter.md) |
`type` | string &#124; number |

**Returns:** *number*
