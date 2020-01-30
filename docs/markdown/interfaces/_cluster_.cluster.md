[typescript](../README.md) › [Globals](../globals.md) › ["cluster"](../modules/_cluster_.md) › [Cluster](_cluster_.cluster.md)

# Interface: Cluster

## Hierarchy

  ↳ [EventEmitter](../classes/_events_.internal.eventemitter.md)

  ↳ **Cluster**

## Index

### Properties

* [Worker](_cluster_.cluster.md#worker)
* [isMaster](_cluster_.cluster.md#ismaster)
* [isWorker](_cluster_.cluster.md#isworker)
* [settings](_cluster_.cluster.md#settings)
* [worker](_cluster_.cluster.md#optional-worker)
* [workers](_cluster_.cluster.md#optional-workers)
* [defaultMaxListeners](_cluster_.cluster.md#static-defaultmaxlisteners)

### Methods

* [addListener](_cluster_.cluster.md#addlistener)
* [disconnect](_cluster_.cluster.md#disconnect)
* [emit](_cluster_.cluster.md#emit)
* [eventNames](_cluster_.cluster.md#eventnames)
* [fork](_cluster_.cluster.md#fork)
* [getMaxListeners](_cluster_.cluster.md#getmaxlisteners)
* [listenerCount](_cluster_.cluster.md#listenercount)
* [listeners](_cluster_.cluster.md#listeners)
* [off](_cluster_.cluster.md#off)
* [on](_cluster_.cluster.md#on)
* [once](_cluster_.cluster.md#once)
* [prependListener](_cluster_.cluster.md#prependlistener)
* [prependOnceListener](_cluster_.cluster.md#prependoncelistener)
* [rawListeners](_cluster_.cluster.md#rawlisteners)
* [removeAllListeners](_cluster_.cluster.md#removealllisteners)
* [removeListener](_cluster_.cluster.md#removelistener)
* [setMaxListeners](_cluster_.cluster.md#setmaxlisteners)
* [setupMaster](_cluster_.cluster.md#setupmaster)
* [listenerCount](_cluster_.cluster.md#static-listenercount)

## Properties

###  Worker

• **Worker**: *[Worker](../classes/_cluster_.worker.md)*

Defined in node_modules/@types/node/cluster.d.ts:94

___

###  isMaster

• **isMaster**: *boolean*

Defined in node_modules/@types/node/cluster.d.ts:97

___

###  isWorker

• **isWorker**: *boolean*

Defined in node_modules/@types/node/cluster.d.ts:98

___

###  settings

• **settings**: *[ClusterSettings](_cluster_.clustersettings.md)*

Defined in node_modules/@types/node/cluster.d.ts:100

___

### `Optional` worker

• **worker**? : *[Worker](_cluster_.cluster.md#worker)*

Defined in node_modules/@types/node/cluster.d.ts:102

___

### `Optional` workers

• **workers**? : *undefined | object*

Defined in node_modules/@types/node/cluster.d.ts:103

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[defaultMaxListeners](isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:117

events.EventEmitter
  1. disconnect
  2. exit
  3. fork
  4. listening
  5. message
  6. online
  7. setup

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "disconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:118

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **addListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:119

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **addListener**(`event`: "fork", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:120

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **addListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:121

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](_cluster_.address.md) |

**Returns:** *this*

▸ **addListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:122

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

▸ **addListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:123

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **addListener**(`event`: "setup", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:124

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](_cluster_.clustersettings.md) |

**Returns:** *this*

___

###  disconnect

▸ **disconnect**(`callback?`: undefined | function): *void*

Defined in node_modules/@types/node/cluster.d.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:126

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "disconnect", `worker`: [Worker](../classes/_cluster_.worker.md)): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:127

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "exit", `worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:128

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "fork", `worker`: [Worker](../classes/_cluster_.worker.md)): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:129

**Parameters:**

Name | Type |
------ | ------ |
`event` | "fork" |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "listening", `worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](_cluster_.address.md)): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:130

**Parameters:**

Name | Type |
------ | ------ |
`event` | "listening" |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](_cluster_.address.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:131

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "online", `worker`: [Worker](../classes/_cluster_.worker.md)): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:132

**Parameters:**

Name | Type |
------ | ------ |
`event` | "online" |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "setup", `settings`: [ClusterSettings](_cluster_.clustersettings.md)): *boolean*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:133

**Parameters:**

Name | Type |
------ | ------ |
`event` | "setup" |
`settings` | [ClusterSettings](_cluster_.clustersettings.md) |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[eventNames](isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[eventNames](../classes/nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  fork

▸ **fork**(`env?`: any): *[Worker](../classes/_cluster_.worker.md)*

Defined in node_modules/@types/node/cluster.d.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`env?` | any |

**Returns:** *[Worker](../classes/_cluster_.worker.md)*

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

Defined in node_modules/@types/node/cluster.d.ts:135

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "disconnect", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:136

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **on**(`event`: "exit", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:137

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **on**(`event`: "fork", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:138

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **on**(`event`: "listening", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:139

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](_cluster_.address.md) |

**Returns:** *this*

▸ **on**(`event`: "message", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:140

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

▸ **on**(`event`: "online", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:141

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **on**(`event`: "setup", `listener`: function): *this*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:142

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](_cluster_.clustersettings.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:144

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "disconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:145

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **once**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:146

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **once**(`event`: "fork", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:147

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **once**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:148

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](_cluster_.address.md) |

**Returns:** *this*

▸ **once**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:149

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

▸ **once**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:150

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **once**(`event`: "setup", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:151

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](_cluster_.clustersettings.md) |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:153

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "disconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:154

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:155

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "fork", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:156

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:157

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](_cluster_.address.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:158

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:159

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "setup", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:160

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](_cluster_.clustersettings.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:162

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "disconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:163

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:164

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "fork", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:165

**Parameters:**

▪ **event**: *"fork"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:166

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `address`: [Address](_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`address` | [Address](_cluster_.address.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:168

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md), `message`: any, `handle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |
`message` | any |
`handle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:169

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (`worker`: [Worker](../classes/_cluster_.worker.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`worker` | [Worker](../classes/_cluster_.worker.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "setup", `listener`: function): *this*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:170

**Parameters:**

▪ **event**: *"setup"*

▪ **listener**: *function*

▸ (`settings`: [ClusterSettings](_cluster_.clustersettings.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [ClusterSettings](_cluster_.clustersettings.md) |

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

###  setupMaster

▸ **setupMaster**(`settings?`: [ClusterSettings](_cluster_.clustersettings.md)): *void*

Defined in node_modules/@types/node/cluster.d.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`settings?` | [ClusterSettings](_cluster_.clustersettings.md) |

**Returns:** *void*

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
