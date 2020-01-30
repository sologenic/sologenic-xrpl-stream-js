[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [Domain](nodejs.domain.md)

# Interface: Domain

## Hierarchy

* [EventEmitter](../classes/nodejs.eventemitter.md)

  ↳ **Domain**

## Implemented by

* [Domain](../classes/_domain_.domain.md)

## Index

### Methods

* [add](nodejs.domain.md#add)
* [addListener](nodejs.domain.md#addlistener)
* [bind](nodejs.domain.md#bind)
* [emit](nodejs.domain.md#emit)
* [eventNames](nodejs.domain.md#eventnames)
* [getMaxListeners](nodejs.domain.md#getmaxlisteners)
* [intercept](nodejs.domain.md#intercept)
* [listenerCount](nodejs.domain.md#listenercount)
* [listeners](nodejs.domain.md#listeners)
* [off](nodejs.domain.md#off)
* [on](nodejs.domain.md#on)
* [once](nodejs.domain.md#once)
* [prependListener](nodejs.domain.md#prependlistener)
* [prependOnceListener](nodejs.domain.md#prependoncelistener)
* [rawListeners](nodejs.domain.md#rawlisteners)
* [remove](nodejs.domain.md#remove)
* [removeAllListeners](nodejs.domain.md#removealllisteners)
* [removeListener](nodejs.domain.md#removelistener)
* [run](nodejs.domain.md#run)
* [setMaxListeners](nodejs.domain.md#setmaxlisteners)

## Methods

###  add

▸ **add**(`emitter`: [EventEmitter](../classes/nodejs.eventemitter.md) | [Timer](nodejs.timer.md)): *void*

Defined in node_modules/@types/node/globals.d.ts:653

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](../classes/nodejs.eventemitter.md) &#124; [Timer](nodejs.timer.md) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:658

**Parameters:**

▪ **event**: *string*

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

Defined in node_modules/@types/node/globals.d.ts:655

**Type parameters:**

▪ **T**: *[Function](function.md)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | T |

**Returns:** *T*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:618

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[eventNames](../classes/nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:623

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[getMaxListeners](../classes/nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:615

**Returns:** *number*

___

###  intercept

▸ **intercept**<**T**>(`cb`: T): *T*

Defined in node_modules/@types/node/globals.d.ts:656

**Type parameters:**

▪ **T**: *[Function](function.md)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | T |

**Returns:** *T*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[listenerCount](../classes/nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:619

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:616

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[off](../classes/nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/globals.d.ts:612

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

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:659

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:660

**Parameters:**

▪ **event**: *string*

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:621

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:622

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[rawListeners](../classes/nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  remove

▸ **remove**(`emitter`: [EventEmitter](../classes/nodejs.eventemitter.md) | [Timer](nodejs.timer.md)): *void*

Defined in node_modules/@types/node/globals.d.ts:654

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](../classes/nodejs.eventemitter.md) &#124; [Timer](nodejs.timer.md) |

**Returns:** *void*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: undefined | string): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[removeAllListeners](../classes/nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:662

**Parameters:**

Name | Type |
------ | ------ |
`event?` | undefined &#124; string |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string, `listener`: function): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[removeListener](../classes/nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:661

**Parameters:**

▪ **event**: *string*

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

Defined in node_modules/@types/node/globals.d.ts:652

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[setMaxListeners](../classes/nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*
