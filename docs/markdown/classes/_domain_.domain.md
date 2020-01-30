[typescript](../README.md) › [Globals](../globals.md) › ["domain"](../modules/_domain_.md) › [Domain](_domain_.domain.md)

# Class: Domain

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Domain**

## Implements

* [Domain](../interfaces/nodejs.domain.md)

## Index

### Properties

* [members](_domain_.domain.md#members)
* [defaultMaxListeners](_domain_.domain.md#static-defaultmaxlisteners)

### Methods

* [add](_domain_.domain.md#add)
* [addListener](_domain_.domain.md#addlistener)
* [bind](_domain_.domain.md#bind)
* [emit](_domain_.domain.md#emit)
* [enter](_domain_.domain.md#enter)
* [eventNames](_domain_.domain.md#eventnames)
* [exit](_domain_.domain.md#exit)
* [getMaxListeners](_domain_.domain.md#getmaxlisteners)
* [intercept](_domain_.domain.md#intercept)
* [listenerCount](_domain_.domain.md#listenercount)
* [listeners](_domain_.domain.md#listeners)
* [off](_domain_.domain.md#off)
* [on](_domain_.domain.md#on)
* [once](_domain_.domain.md#once)
* [prependListener](_domain_.domain.md#prependlistener)
* [prependOnceListener](_domain_.domain.md#prependoncelistener)
* [rawListeners](_domain_.domain.md#rawlisteners)
* [remove](_domain_.domain.md#remove)
* [removeAllListeners](_domain_.domain.md#removealllisteners)
* [removeListener](_domain_.domain.md#removelistener)
* [run](_domain_.domain.md#run)
* [setMaxListeners](_domain_.domain.md#setmaxlisteners)
* [listenerCount](_domain_.domain.md#static-listenercount)

## Properties

###  members

• **members**: *[Array](../interfaces/regexpmatcharray.md#array)‹events.EventEmitter | [Timer](../interfaces/nodejs.timer.md)›*

Defined in node_modules/@types/node/domain.d.ts:10

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  add

▸ **add**(`emitter`: events.EventEmitter | [Timer](../interfaces/nodejs.timer.md)): *void*

Defined in node_modules/@types/node/domain.d.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | events.EventEmitter &#124; [Timer](../interfaces/nodejs.timer.md) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)*

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

###  bind

▸ **bind**<**T**>(`cb`: T): *T*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

Defined in node_modules/@types/node/domain.d.ts:8

**Type parameters:**

▪ **T**: *[Function](../interfaces/function.md)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | T |

**Returns:** *T*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  enter

▸ **enter**(): *void*

Defined in node_modules/@types/node/domain.d.ts:11

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[eventNames](nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  exit

▸ **exit**(): *void*

Defined in node_modules/@types/node/domain.d.ts:12

**Returns:** *void*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  intercept

▸ **intercept**<**T**>(`cb`: T): *T*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

Defined in node_modules/@types/node/domain.d.ts:9

**Type parameters:**

▪ **T**: *[Function](../interfaces/function.md)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | T |

**Returns:** *T*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listenerCount](nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[off](nodejs.eventemitter.md#off)*

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

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[on](nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/events.d.ts:21

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

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[once](nodejs.eventemitter.md#once)*

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

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependListener](nodejs.eventemitter.md#prependlistener)*

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

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependOnceListener](nodejs.eventemitter.md#prependoncelistener)*

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

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[rawListeners](nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  remove

▸ **remove**(`emitter`: events.EventEmitter | [Timer](../interfaces/nodejs.timer.md)): *void*

Defined in node_modules/@types/node/domain.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | events.EventEmitter &#124; [Timer](../interfaces/nodejs.timer.md) |

**Returns:** *void*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)*

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

###  run

▸ **run**<**T**>(`fn`: function, ...`args`: any[]): *T*

Defined in node_modules/@types/node/domain.d.ts:5

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (...`args`: any[]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪... **args**: *any[]*

**Returns:** *T*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [Domain](../interfaces/nodejs.domain.md)*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
