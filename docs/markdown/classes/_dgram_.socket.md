[typescript](../README.md) › [Globals](../globals.md) › ["dgram"](../modules/_dgram_.md) › [Socket](_dgram_.socket.md)

# Class: Socket

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Socket**

## Index

### Properties

* [defaultMaxListeners](_dgram_.socket.md#static-defaultmaxlisteners)

### Methods

* [addListener](_dgram_.socket.md#addlistener)
* [addMembership](_dgram_.socket.md#addmembership)
* [address](_dgram_.socket.md#address)
* [bind](_dgram_.socket.md#bind)
* [close](_dgram_.socket.md#close)
* [dropMembership](_dgram_.socket.md#dropmembership)
* [emit](_dgram_.socket.md#emit)
* [eventNames](_dgram_.socket.md#eventnames)
* [getMaxListeners](_dgram_.socket.md#getmaxlisteners)
* [getRecvBufferSize](_dgram_.socket.md#getrecvbuffersize)
* [getSendBufferSize](_dgram_.socket.md#getsendbuffersize)
* [listenerCount](_dgram_.socket.md#listenercount)
* [listeners](_dgram_.socket.md#listeners)
* [off](_dgram_.socket.md#off)
* [on](_dgram_.socket.md#on)
* [once](_dgram_.socket.md#once)
* [prependListener](_dgram_.socket.md#prependlistener)
* [prependOnceListener](_dgram_.socket.md#prependoncelistener)
* [rawListeners](_dgram_.socket.md#rawlisteners)
* [ref](_dgram_.socket.md#ref)
* [removeAllListeners](_dgram_.socket.md#removealllisteners)
* [removeListener](_dgram_.socket.md#removelistener)
* [send](_dgram_.socket.md#send)
* [setBroadcast](_dgram_.socket.md#setbroadcast)
* [setMaxListeners](_dgram_.socket.md#setmaxlisteners)
* [setMulticastInterface](_dgram_.socket.md#setmulticastinterface)
* [setMulticastLoopback](_dgram_.socket.md#setmulticastloopback)
* [setMulticastTTL](_dgram_.socket.md#setmulticastttl)
* [setRecvBufferSize](_dgram_.socket.md#setrecvbuffersize)
* [setSendBufferSize](_dgram_.socket.md#setsendbuffersize)
* [setTTL](_dgram_.socket.md#setttl)
* [unref](_dgram_.socket.md#unref)
* [listenerCount](_dgram_.socket.md#static-listenercount)

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/dgram.d.ts:66

events.EventEmitter
1. close
2. error
3. listening
4. message

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/dgram.d.ts:67

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/dgram.d.ts:68

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **addListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/dgram.d.ts:69

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/dgram.d.ts:70

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`msg`: [Buffer](buffer.md), `rinfo`: [RemoteInfo](../interfaces/_dgram_.remoteinfo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [Buffer](buffer.md) |
`rinfo` | [RemoteInfo](../interfaces/_dgram_.remoteinfo.md) |

**Returns:** *this*

___

###  addMembership

▸ **addMembership**(`multicastAddress`: string, `multicastInterface?`: undefined | string): *void*

Defined in node_modules/@types/node/dgram.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`multicastAddress` | string |
`multicastInterface?` | undefined &#124; string |

**Returns:** *void*

___

###  address

▸ **address**(): *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

Defined in node_modules/@types/node/dgram.d.ts:44

**Returns:** *[AddressInfo](../interfaces/_net_.addressinfo.md) | string*

___

###  bind

▸ **bind**(`port?`: undefined | number, `address?`: undefined | string, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/dgram.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`address?` | undefined &#124; string |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **bind**(`port?`: undefined | number, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/dgram.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`port?` | undefined &#124; number |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **bind**(`callback?`: undefined | function): *void*

Defined in node_modules/@types/node/dgram.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **bind**(`options`: [BindOptions](../interfaces/_dgram_.bindoptions.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/dgram.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BindOptions](../interfaces/_dgram_.bindoptions.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  close

▸ **close**(`callback?`: undefined | function): *void*

Defined in node_modules/@types/node/dgram.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  dropMembership

▸ **dropMembership**(`multicastAddress`: string, `multicastInterface?`: undefined | string): *void*

Defined in node_modules/@types/node/dgram.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`multicastAddress` | string |
`multicastInterface?` | undefined &#124; string |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/dgram.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/dgram.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../interfaces/error.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/dgram.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../interfaces/error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "listening"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/dgram.d.ts:75

**Parameters:**

Name | Type |
------ | ------ |
`event` | "listening" |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `msg`: [Buffer](buffer.md), `rinfo`: [RemoteInfo](../interfaces/_dgram_.remoteinfo.md)): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/dgram.d.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`msg` | [Buffer](buffer.md) |
`rinfo` | [RemoteInfo](../interfaces/_dgram_.remoteinfo.md) |

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

###  getRecvBufferSize

▸ **getRecvBufferSize**(): *number*

Defined in node_modules/@types/node/dgram.d.ts:56

**Returns:** *number*

___

###  getSendBufferSize

▸ **getSendBufferSize**(): *number*

Defined in node_modules/@types/node/dgram.d.ts:57

**Returns:** *number*

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

Defined in node_modules/@types/node/dgram.d.ts:78

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

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/dgram.d.ts:79

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/dgram.d.ts:80

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **on**(`event`: "listening", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/dgram.d.ts:81

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "message", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/dgram.d.ts:82

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`msg`: [Buffer](buffer.md), `rinfo`: [RemoteInfo](../interfaces/_dgram_.remoteinfo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [Buffer](buffer.md) |
`rinfo` | [RemoteInfo](../interfaces/_dgram_.remoteinfo.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/dgram.d.ts:84

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/dgram.d.ts:85

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/dgram.d.ts:86

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **once**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/dgram.d.ts:87

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/dgram.d.ts:88

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`msg`: [Buffer](buffer.md), `rinfo`: [RemoteInfo](../interfaces/_dgram_.remoteinfo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [Buffer](buffer.md) |
`rinfo` | [RemoteInfo](../interfaces/_dgram_.remoteinfo.md) |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/dgram.d.ts:90

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/dgram.d.ts:91

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/dgram.d.ts:92

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/dgram.d.ts:93

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/dgram.d.ts:94

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`msg`: [Buffer](buffer.md), `rinfo`: [RemoteInfo](../interfaces/_dgram_.remoteinfo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [Buffer](buffer.md) |
`rinfo` | [RemoteInfo](../interfaces/_dgram_.remoteinfo.md) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/dgram.d.ts:96

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

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/dgram.d.ts:97

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/dgram.d.ts:98

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "listening", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/dgram.d.ts:99

**Parameters:**

▪ **event**: *"listening"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "message", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/dgram.d.ts:100

**Parameters:**

▪ **event**: *"message"*

▪ **listener**: *function*

▸ (`msg`: [Buffer](buffer.md), `rinfo`: [RemoteInfo](../interfaces/_dgram_.remoteinfo.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [Buffer](buffer.md) |
`rinfo` | [RemoteInfo](../interfaces/_dgram_.remoteinfo.md) |

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

###  ref

▸ **ref**(): *this*

Defined in node_modules/@types/node/dgram.d.ts:52

**Returns:** *this*

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

▸ **send**(`msg`: string | [Uint8Array](../interfaces/uint8array.md) | any[], `port`: number, `address?`: undefined | string, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/dgram.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string &#124; [Uint8Array](../interfaces/uint8array.md) &#124; any[] |
`port` | number |
`address?` | undefined &#124; string |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **send**(`msg`: string | [Uint8Array](../interfaces/uint8array.md), `offset`: number, `length`: number, `port`: number, `address?`: undefined | string, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/dgram.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string &#124; [Uint8Array](../interfaces/uint8array.md) |
`offset` | number |
`length` | number |
`port` | number |
`address?` | undefined &#124; string |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  setBroadcast

▸ **setBroadcast**(`flag`: boolean): *void*

Defined in node_modules/@types/node/dgram.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`flag` | boolean |

**Returns:** *void*

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

###  setMulticastInterface

▸ **setMulticastInterface**(`multicastInterface`: string): *void*

Defined in node_modules/@types/node/dgram.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`multicastInterface` | string |

**Returns:** *void*

___

###  setMulticastLoopback

▸ **setMulticastLoopback**(`flag`: boolean): *void*

Defined in node_modules/@types/node/dgram.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`flag` | boolean |

**Returns:** *void*

___

###  setMulticastTTL

▸ **setMulticastTTL**(`ttl`: number): *void*

Defined in node_modules/@types/node/dgram.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`ttl` | number |

**Returns:** *void*

___

###  setRecvBufferSize

▸ **setRecvBufferSize**(`size`: number): *void*

Defined in node_modules/@types/node/dgram.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  setSendBufferSize

▸ **setSendBufferSize**(`size`: number): *void*

Defined in node_modules/@types/node/dgram.d.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  setTTL

▸ **setTTL**(`ttl`: number): *void*

Defined in node_modules/@types/node/dgram.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`ttl` | number |

**Returns:** *void*

___

###  unref

▸ **unref**(): *this*

Defined in node_modules/@types/node/dgram.d.ts:53

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
