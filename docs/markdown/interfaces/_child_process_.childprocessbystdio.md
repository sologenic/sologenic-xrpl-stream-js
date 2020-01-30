[typescript](../README.md) › [Globals](../globals.md) › ["child_process"](../modules/_child_process_.md) › [ChildProcessByStdio](_child_process_.childprocessbystdio.md)

# Interface: ChildProcessByStdio <**I, O, E**>

## Type parameters

▪ **I**: *null | [Writable](../classes/_stream_.internal.writable.md)*

▪ **O**: *null | [Readable](../classes/_stream_.internal.readable.md)*

▪ **E**: *null | [Readable](../classes/_stream_.internal.readable.md)*

## Hierarchy

  ↳ [ChildProcess](_child_process_.childprocess.md)

  ↳ **ChildProcessByStdio**

## Index

### Properties

* [channel](_child_process_.childprocessbystdio.md#optional-channel)
* [connected](_child_process_.childprocessbystdio.md#connected)
* [killed](_child_process_.childprocessbystdio.md#killed)
* [pid](_child_process_.childprocessbystdio.md#pid)
* [stderr](_child_process_.childprocessbystdio.md#stderr)
* [stdin](_child_process_.childprocessbystdio.md#stdin)
* [stdio](_child_process_.childprocessbystdio.md#stdio)
* [stdout](_child_process_.childprocessbystdio.md#stdout)
* [defaultMaxListeners](_child_process_.childprocessbystdio.md#static-defaultmaxlisteners)

### Methods

* [addListener](_child_process_.childprocessbystdio.md#addlistener)
* [disconnect](_child_process_.childprocessbystdio.md#disconnect)
* [emit](_child_process_.childprocessbystdio.md#emit)
* [eventNames](_child_process_.childprocessbystdio.md#eventnames)
* [getMaxListeners](_child_process_.childprocessbystdio.md#getmaxlisteners)
* [kill](_child_process_.childprocessbystdio.md#kill)
* [listenerCount](_child_process_.childprocessbystdio.md#listenercount)
* [listeners](_child_process_.childprocessbystdio.md#listeners)
* [off](_child_process_.childprocessbystdio.md#off)
* [on](_child_process_.childprocessbystdio.md#on)
* [once](_child_process_.childprocessbystdio.md#once)
* [prependListener](_child_process_.childprocessbystdio.md#prependlistener)
* [prependOnceListener](_child_process_.childprocessbystdio.md#prependoncelistener)
* [rawListeners](_child_process_.childprocessbystdio.md#rawlisteners)
* [ref](_child_process_.childprocessbystdio.md#ref)
* [removeAllListeners](_child_process_.childprocessbystdio.md#removealllisteners)
* [removeListener](_child_process_.childprocessbystdio.md#removelistener)
* [send](_child_process_.childprocessbystdio.md#send)
* [setMaxListeners](_child_process_.childprocessbystdio.md#setmaxlisteners)
* [unref](_child_process_.childprocessbystdio.md#unref)
* [listenerCount](_child_process_.childprocessbystdio.md#static-listenercount)

## Properties

### `Optional` channel

• **channel**? : *[Pipe](_stream_.internal.pipe.md) | null*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[channel](_child_process_.childprocess.md#optional-channel)*

Defined in node_modules/@types/node/child_process.d.ts:10

___

###  connected

• **connected**: *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[connected](_child_process_.childprocess.md#connected)*

Defined in node_modules/@types/node/child_process.d.ts:20

___

###  killed

• **killed**: *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[killed](_child_process_.childprocess.md#killed)*

Defined in node_modules/@types/node/child_process.d.ts:18

___

###  pid

• **pid**: *number*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[pid](_child_process_.childprocess.md#pid)*

Defined in node_modules/@types/node/child_process.d.ts:19

___

###  stderr

• **stderr**: *E*

*Overrides [ChildProcess](_child_process_.childprocess.md).[stderr](_child_process_.childprocess.md#stderr)*

Defined in node_modules/@types/node/child_process.d.ts:103

___

###  stdin

• **stdin**: *I*

*Overrides [ChildProcess](_child_process_.childprocess.md).[stdin](_child_process_.childprocess.md#stdin)*

Defined in node_modules/@types/node/child_process.d.ts:101

___

###  stdio

• **stdio**: *[I, O, E, [Readable](../classes/_stream_.internal.readable.md) | [Writable](../classes/_stream_.internal.writable.md) | null | undefined, [Readable](../classes/_stream_.internal.readable.md) | [Writable](../classes/_stream_.internal.writable.md) | null | undefined]*

*Overrides [ChildProcess](_child_process_.childprocess.md).[stdio](_child_process_.childprocess.md#stdio)*

Defined in node_modules/@types/node/child_process.d.ts:104

___

###  stdout

• **stdout**: *O*

*Overrides [ChildProcess](_child_process_.childprocess.md).[stdout](_child_process_.childprocess.md#stdout)*

Defined in node_modules/@types/node/child_process.d.ts:102

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](isologenictxhandler.md).[defaultMaxListeners](isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[addListener](_child_process_.childprocess.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/child_process.d.ts:38

events.EventEmitter
1. close
2. disconnect
3. error
4. exit
5. message

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[addListener](_child_process_.childprocess.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/child_process.d.ts:39

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **addListener**(`event`: "disconnect", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[addListener](_child_process_.childprocess.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/child_process.d.ts:40

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[addListener](_child_process_.childprocess.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/child_process.d.ts:41

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "exit", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[addListener](_child_process_.childprocess.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/child_process.d.ts:42

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number | null, `signal`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number &#124; null |
`signal` | string &#124; null |

**Returns:** *this*

▸ **addListener**(`event`: "message", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[addListener](_child_process_.childprocess.md#addlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[addListener](isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/child_process.d.ts:43

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `sendHandle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[disconnect](_child_process_.childprocess.md#disconnect)*

Defined in node_modules/@types/node/child_process.d.ts:25

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[emit](_child_process_.childprocess.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/child_process.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close", `code`: number, `signal`: string): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[emit](_child_process_.childprocess.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/child_process.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |
`code` | number |
`signal` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "disconnect"): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[emit](_child_process_.childprocess.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/child_process.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](error.md)): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[emit](_child_process_.childprocess.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/child_process.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "exit", `code`: number | null, `signal`: string | null): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[emit](_child_process_.childprocess.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/child_process.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`code` | number &#124; null |
`signal` | string &#124; null |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `message`: any, `sendHandle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[emit](_child_process_.childprocess.md#emit)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[emit](isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/child_process.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`message` | any |
`sendHandle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

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

###  kill

▸ **kill**(`signal?`: undefined | string): *void*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[kill](_child_process_.childprocess.md#kill)*

Defined in node_modules/@types/node/child_process.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`signal?` | undefined &#124; string |

**Returns:** *void*

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

*Inherited from [ChildProcess](_child_process_.childprocess.md).[on](_child_process_.childprocess.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/child_process.d.ts:52

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[on](_child_process_.childprocess.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/child_process.d.ts:53

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **on**(`event`: "disconnect", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[on](_child_process_.childprocess.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/child_process.d.ts:54

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[on](_child_process_.childprocess.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/child_process.d.ts:55

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **on**(`event`: "exit", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[on](_child_process_.childprocess.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/child_process.d.ts:56

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number | null, `signal`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number &#124; null |
`signal` | string &#124; null |

**Returns:** *this*

▸ **on**(`event`: "message", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[on](_child_process_.childprocess.md#on)*

*Overrides [Domain](../classes/_domain_.domain.md).[on](../classes/_domain_.domain.md#on)*

Defined in node_modules/@types/node/child_process.d.ts:57

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `sendHandle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[once](_child_process_.childprocess.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/child_process.d.ts:59

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[once](_child_process_.childprocess.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/child_process.d.ts:60

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **once**(`event`: "disconnect", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[once](_child_process_.childprocess.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/child_process.d.ts:61

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[once](_child_process_.childprocess.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/child_process.d.ts:62

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **once**(`event`: "exit", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[once](_child_process_.childprocess.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/child_process.d.ts:63

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number | null, `signal`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number &#124; null |
`signal` | string &#124; null |

**Returns:** *this*

▸ **once**(`event`: "message", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[once](_child_process_.childprocess.md#once)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[once](isologenictxhandler.md#once)*

Defined in node_modules/@types/node/child_process.d.ts:64

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `sendHandle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependListener](_child_process_.childprocess.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/child_process.d.ts:66

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependListener](_child_process_.childprocess.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/child_process.d.ts:67

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "disconnect", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependListener](_child_process_.childprocess.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/child_process.d.ts:68

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependListener](_child_process_.childprocess.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/child_process.d.ts:69

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "exit", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependListener](_child_process_.childprocess.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/child_process.d.ts:70

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number | null, `signal`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number &#124; null |
`signal` | string &#124; null |

**Returns:** *this*

▸ **prependListener**(`event`: "message", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependListener](_child_process_.childprocess.md#prependlistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependListener](isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/child_process.d.ts:71

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `sendHandle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependOnceListener](_child_process_.childprocess.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/child_process.d.ts:73

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependOnceListener](_child_process_.childprocess.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/child_process.d.ts:74

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (`code`: number, `signal`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`signal` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "disconnect", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependOnceListener](_child_process_.childprocess.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/child_process.d.ts:75

**Parameters:**

▪ **event**: *"disconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependOnceListener](_child_process_.childprocess.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/child_process.d.ts:76

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "exit", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependOnceListener](_child_process_.childprocess.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/child_process.d.ts:77

**Parameters:**

▪ **event**: *"exit"*

▪ **listener**: *function*

▸ (`code`: number | null, `signal`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number &#124; null |
`signal` | string &#124; null |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "message", `listener`: function): *this*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[prependOnceListener](_child_process_.childprocess.md#prependoncelistener)*

*Overrides [ISologenicTxHandler](isologenictxhandler.md).[prependOnceListener](isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/child_process.d.ts:78

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`message`: any, `sendHandle`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |

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

###  ref

▸ **ref**(): *void*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[ref](_child_process_.childprocess.md#ref)*

Defined in node_modules/@types/node/child_process.d.ts:27

**Returns:** *void*

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

###  send

▸ **send**(`message`: any, `callback?`: undefined | function): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[send](_child_process_.childprocess.md#send)*

Defined in node_modules/@types/node/child_process.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

▸ **send**(`message`: any, `sendHandle?`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md), `callback?`: undefined | function): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[send](_child_process_.childprocess.md#send)*

Defined in node_modules/@types/node/child_process.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle?` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

▸ **send**(`message`: any, `sendHandle?`: [Socket](../classes/_net_.socket.md) | [Server](../classes/_net_.server.md), `options?`: [MessageOptions](_child_process_.messageoptions.md), `callback?`: undefined | function): *boolean*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[send](_child_process_.childprocess.md#send)*

Defined in node_modules/@types/node/child_process.d.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle?` | [Socket](../classes/_net_.socket.md) &#124; [Server](../classes/_net_.server.md) |
`options?` | [MessageOptions](_child_process_.messageoptions.md) |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

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

###  unref

▸ **unref**(): *void*

*Inherited from [ChildProcess](_child_process_.childprocess.md).[unref](_child_process_.childprocess.md#unref)*

Defined in node_modules/@types/node/child_process.d.ts:26

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
