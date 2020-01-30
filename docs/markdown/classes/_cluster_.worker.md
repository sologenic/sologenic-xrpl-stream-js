[typescript](../README.md) › [Globals](../globals.md) › ["cluster"](../modules/_cluster_.md) › [Worker](_cluster_.worker.md)

# Class: Worker

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Worker**

## Index

### Properties

* [exitedAfterDisconnect](_cluster_.worker.md#exitedafterdisconnect)
* [id](_cluster_.worker.md#id)
* [process](_cluster_.worker.md#process)
* [defaultMaxListeners](_cluster_.worker.md#static-defaultmaxlisteners)

### Methods

* [addListener](_cluster_.worker.md#addlistener)
* [destroy](_cluster_.worker.md#destroy)
* [disconnect](_cluster_.worker.md#disconnect)
* [emit](_cluster_.worker.md#emit)
* [eventNames](_cluster_.worker.md#eventnames)
* [getMaxListeners](_cluster_.worker.md#getmaxlisteners)
* [isConnected](_cluster_.worker.md#isconnected)
* [isDead](_cluster_.worker.md#isdead)
* [kill](_cluster_.worker.md#kill)
* [listenerCount](_cluster_.worker.md#listenercount)
* [listeners](_cluster_.worker.md#listeners)
* [off](_cluster_.worker.md#off)
* [on](_cluster_.worker.md#on)
* [once](_cluster_.worker.md#once)
* [prependListener](_cluster_.worker.md#prependlistener)
* [prependOnceListener](_cluster_.worker.md#prependoncelistener)
* [rawListeners](_cluster_.worker.md#rawlisteners)
* [removeAllListeners](_cluster_.worker.md#removealllisteners)
* [removeListener](_cluster_.worker.md#removelistener)
* [send](_cluster_.worker.md#send)
* [setMaxListeners](_cluster_.worker.md#setmaxlisteners)
* [listenerCount](_cluster_.worker.md#static-listenercount)

## Properties

###  exitedAfterDisconnect

• **exitedAfterDisconnect**: *boolean*

Defined in node_modules/@types/node/cluster.d.ts:33

___

###  id

• **id**: *number*

Defined in node_modules/@types/node/cluster.d.ts:25

___

###  process

• **process**: *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/cluster.d.ts:26

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:44

events.EventEmitter
  1. disconnect
  2. error
  3. exit
  4. listening
  5. message
  6. online

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:45

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:46

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:47

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **addListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:48

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *this*

▸ **addListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:49

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `handle`: [Socket](_net_.socket.md) | [Server](_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`handle` | [Socket](_net_.socket.md) &#124; [Server](_net_.server.md) |

**Returns:** *this*

▸ **addListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/cluster.d.ts:50

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  destroy

▸ **destroy**(`signal?`: undefined | string): *void*

Defined in node_modules/@types/node/cluster.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`signal?` | undefined &#124; string |

**Returns:** *void*

___

###  disconnect

▸ **disconnect**(): *void*

Defined in node_modules/@types/node/cluster.d.ts:30

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "disconnect"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `error`: [Error](../interfaces/error.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`error` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "exit", `code`: number, `signal`: string): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`code` | number |
`signal` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "listening", `address`: [Address](../interfaces/_cluster_.address.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`event` | "listening" |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `message`: any, `handle`: [Socket](_net_.socket.md) | [Server](_net_.server.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`message` | any |
`handle` | [Socket](_net_.socket.md) &#124; [Server](_net_.server.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "online"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/cluster.d.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`event` | "online" |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[eventNames](nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  isConnected

▸ **isConnected**(): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:31

**Returns:** *boolean*

___

###  isDead

▸ **isDead**(): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:32

**Returns:** *boolean*

___

###  kill

▸ **kill**(`signal?`: undefined | string): *void*

Defined in node_modules/@types/node/cluster.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`signal?` | undefined &#124; string |

**Returns:** *void*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

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

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:60

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

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:61

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:62

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "exit", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:63

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **on**(`event`: "listening", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:64

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *this*

▸ **on**(`event`: "message", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:65

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `handle`: [Socket](_net_.socket.md) | [Server](_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`handle` | [Socket](_net_.socket.md) &#124; [Server](_net_.server.md) |

**Returns:** *this*

▸ **on**(`event`: "online", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/cluster.d.ts:66

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:68

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:69

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:70

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:71

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **once**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:72

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *this*

▸ **once**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:73

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `handle`: [Socket](_net_.socket.md) | [Server](_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`handle` | [Socket](_net_.socket.md) &#124; [Server](_net_.server.md) |

**Returns:** *this*

▸ **once**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/cluster.d.ts:74

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:76

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:77

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:78

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:79

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:80

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:81

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `handle`: [Socket](_net_.socket.md) | [Server](_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`handle` | [Socket](_net_.socket.md) &#124; [Server](_net_.server.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/cluster.d.ts:82

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:84

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:85

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:86

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "exit", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:87

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:88

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (`address`: [Address](../interfaces/_cluster_.address.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../interfaces/_cluster_.address.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:89

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `handle`: [Socket](_net_.socket.md) | [Server](_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`handle` | [Socket](_net_.socket.md) &#124; [Server](_net_.server.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "online", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/cluster.d.ts:90

**Parameters:**

▪ **event**: *"online"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[rawListeners](nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

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

###  send

▸ **send**(`message`: any, `sendHandle?`: any, `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/cluster.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle?` | any |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

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
