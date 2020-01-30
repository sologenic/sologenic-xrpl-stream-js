[typescript](../README.md) › [Globals](../globals.md) › [ISologenicTxHandler](isologenictxhandler.md)

# Interface: ISologenicTxHandler

## Hierarchy

  ↳ [EventEmitter](../classes/_events_.internal.eventemitter.md)

  ↳ **ISologenicTxHandler**

## Index

### Properties

* [defaultMaxListeners](isologenictxhandler.md#static-defaultmaxlisteners)

### Methods

* [addListener](isologenictxhandler.md#addlistener)
* [emit](isologenictxhandler.md#emit)
* [eventNames](isologenictxhandler.md#eventnames)
* [getMaxListeners](isologenictxhandler.md#getmaxlisteners)
* [listenerCount](isologenictxhandler.md#listenercount)
* [listeners](isologenictxhandler.md#listeners)
* [off](isologenictxhandler.md#off)
* [on](isologenictxhandler.md#on)
* [once](isologenictxhandler.md#once)
* [prependListener](isologenictxhandler.md#prependlistener)
* [prependOnceListener](isologenictxhandler.md#prependoncelistener)
* [rawListeners](isologenictxhandler.md#rawlisteners)
* [removeAllListeners](isologenictxhandler.md#removealllisteners)
* [removeListener](isologenictxhandler.md#removelistener)
* [setMaxListeners](isologenictxhandler.md#setmaxlisteners)
* [listenerCount](isologenictxhandler.md#static-listenercount)

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[defaultMaxListeners](isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[eventNames](isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[eventNames](../classes/nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[getMaxListeners](isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[getMaxListeners](../classes/nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[listenerCount](isologenictxhandler.md#static-listenercount)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listenerCount](../classes/nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[listeners](isologenictxhandler.md#listeners)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[off](isologenictxhandler.md#off)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[off](../classes/nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string, `listener`: [Function](function.md)): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

*Defined in [src/types/sologenicoptions.d.ts:30](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | [Function](function.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[rawListeners](isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[rawListeners](../classes/nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[removeAllListeners](isologenictxhandler.md#removealllisteners)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[removeAllListeners](../classes/nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[removeListener](isologenictxhandler.md#removelistener)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[removeListener](../classes/nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[setMaxListeners](isologenictxhandler.md#setmaxlisteners)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[setMaxListeners](../classes/nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](../classes/_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[listenerCount](isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](../classes/_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
