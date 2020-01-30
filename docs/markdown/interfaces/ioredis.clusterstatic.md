[typescript](../README.md) › [Globals](../globals.md) › [IORedis](../modules/ioredis.md) › [ClusterStatic](ioredis.clusterstatic.md)

# Interface: ClusterStatic

## Hierarchy

* [EventEmitter](../classes/nodejs.eventemitter.md)

* [Commander](../classes/commander.md)

  ↳ **ClusterStatic**

## Index

### Constructors

* [constructor](ioredis.clusterstatic.md#constructor)

### Methods

* [addListener](ioredis.clusterstatic.md#addlistener)
* [createBuiltinCommand](ioredis.clusterstatic.md#createbuiltincommand)
* [defineCommand](ioredis.clusterstatic.md#definecommand)
* [emit](ioredis.clusterstatic.md#emit)
* [eventNames](ioredis.clusterstatic.md#eventnames)
* [getBuiltinCommands](ioredis.clusterstatic.md#getbuiltincommands)
* [getMaxListeners](ioredis.clusterstatic.md#getmaxlisteners)
* [listenerCount](ioredis.clusterstatic.md#listenercount)
* [listeners](ioredis.clusterstatic.md#listeners)
* [off](ioredis.clusterstatic.md#off)
* [on](ioredis.clusterstatic.md#on)
* [once](ioredis.clusterstatic.md#once)
* [prependListener](ioredis.clusterstatic.md#prependlistener)
* [prependOnceListener](ioredis.clusterstatic.md#prependoncelistener)
* [rawListeners](ioredis.clusterstatic.md#rawlisteners)
* [removeAllListeners](ioredis.clusterstatic.md#removealllisteners)
* [removeListener](ioredis.clusterstatic.md#removelistener)
* [sendCommand](ioredis.clusterstatic.md#sendcommand)
* [setMaxListeners](ioredis.clusterstatic.md#setmaxlisteners)

## Constructors

###  constructor

\+ **new ClusterStatic**(`nodes`: [ClusterNode](../modules/ioredis.md#clusternode)[], `options?`: [ClusterOptions](ioredis.clusteroptions.md)): *[Cluster](ioredis.cluster.md)*

Defined in node_modules/@types/ioredis/index.d.ts:977

**Parameters:**

Name | Type |
------ | ------ |
`nodes` | [ClusterNode](../modules/ioredis.md#clusternode)[] |
`options?` | [ClusterOptions](ioredis.clusteroptions.md) |

**Returns:** *[Cluster](ioredis.cluster.md)*

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:608

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

###  createBuiltinCommand

▸ **createBuiltinCommand**(`commandName`: string): *object*

*Inherited from [Commander](../classes/commander.md).[createBuiltinCommand](../classes/commander.md#createbuiltincommand)*

Defined in node_modules/@types/ioredis/index.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`commandName` | string |

**Returns:** *object*

___

###  defineCommand

▸ **defineCommand**(`name`: string, `definition`: object): *any*

*Inherited from [Commander](../classes/commander.md).[defineCommand](../classes/commander.md#definecommand)*

Defined in node_modules/@types/ioredis/index.d.ts:44

**Parameters:**

▪ **name**: *string*

▪ **definition**: *object*

Name | Type |
------ | ------ |
`lua?` | undefined &#124; string |
`numberOfKeys?` | undefined &#124; number |

**Returns:** *any*

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

###  getBuiltinCommands

▸ **getBuiltinCommands**(): *string[]*

*Inherited from [Commander](../classes/commander.md).[getBuiltinCommands](../classes/commander.md#getbuiltincommands)*

Defined in node_modules/@types/ioredis/index.d.ts:42

**Returns:** *string[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[getMaxListeners](../classes/nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:615

**Returns:** *number*

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

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:609

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

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:610

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

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeAllListeners](../classes/nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeListener](../classes/nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:611

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

###  sendCommand

▸ **sendCommand**(): *void*

*Inherited from [Commander](../classes/commander.md).[sendCommand](../classes/commander.md#sendcommand)*

Defined in node_modules/@types/ioredis/index.d.ts:48

**Returns:** *void*

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
