[typescript](../README.md) › [Globals](../globals.md) › ["fs"](../modules/_fs_.md) › [FSWatcher](_fs_.fswatcher.md)

# Interface: FSWatcher

## Hierarchy

  ↳ [EventEmitter](../classes/_events_.internal.eventemitter.md)

  ↳ **FSWatcher**

## Index

### Properties

* [defaultMaxListeners](_fs_.fswatcher.md#static-defaultmaxlisteners)

### Methods

* [addListener](_fs_.fswatcher.md#addlistener)
* [close](_fs_.fswatcher.md#close)
* [emit](_fs_.fswatcher.md#emit)
* [eventNames](_fs_.fswatcher.md#eventnames)
* [getMaxListeners](_fs_.fswatcher.md#getmaxlisteners)
* [listenerCount](_fs_.fswatcher.md#listenercount)
* [listeners](_fs_.fswatcher.md#listeners)
* [off](_fs_.fswatcher.md#off)
* [on](_fs_.fswatcher.md#on)
* [once](_fs_.fswatcher.md#once)
* [prependListener](_fs_.fswatcher.md#prependlistener)
* [prependOnceListener](_fs_.fswatcher.md#prependoncelistener)
* [rawListeners](_fs_.fswatcher.md#rawlisteners)
* [removeAllListeners](_fs_.fswatcher.md#removealllisteners)
* [removeListener](_fs_.fswatcher.md#removelistener)
* [setMaxListeners](_fs_.fswatcher.md#setmaxlisteners)
* [listenerCount](_fs_.fswatcher.md#static-listenercount)

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[defaultMaxListeners](isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:67

events.EventEmitter
  1. change
  2. error

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "change", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:68

**Parameters:**

▪ **event**: *"change"*

▪ **listener**: *function*

▸ (`eventType`: string, `filename`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | string |
`filename` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/fs.d.ts:69

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) |

**Returns:** *this*

___

###  close

▸ **close**(): *void*

Defined in node_modules/@types/node/fs.d.ts:60

**Returns:** *void*

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

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/fs.d.ts:71

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "change", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/fs.d.ts:72

**Parameters:**

▪ **event**: *"change"*

▪ **listener**: *function*

▸ (`eventType`: string, `filename`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | string |
`filename` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/fs.d.ts:73

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/fs.d.ts:75

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "change", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/fs.d.ts:76

**Parameters:**

▪ **event**: *"change"*

▪ **listener**: *function*

▸ (`eventType`: string, `filename`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | string |
`filename` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/fs.d.ts:77

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:79

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "change", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:80

**Parameters:**

▪ **event**: *"change"*

▪ **listener**: *function*

▸ (`eventType`: string, `filename`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | string |
`filename` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/fs.d.ts:81

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:83

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "change", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:84

**Parameters:**

▪ **event**: *"change"*

▪ **listener**: *function*

▸ (`eventType`: string, `filename`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`eventType` | string |
`filename` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/fs.d.ts:85

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](error.md) |

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
