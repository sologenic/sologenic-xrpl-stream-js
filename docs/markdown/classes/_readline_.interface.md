[typescript](../README.md) › [Globals](../globals.md) › ["readline"](../modules/_readline_.md) › [Interface](_readline_.interface.md)

# Class: Interface

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Interface**

  ↳ [REPLServer](_repl_.replserver.md)

## Index

### Constructors

* [constructor](_readline_.interface.md#protected-constructor)

### Properties

* [terminal](_readline_.interface.md#terminal)
* [defaultMaxListeners](_readline_.interface.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_readline_.interface.md#[symbol.asynciterator])
* [addListener](_readline_.interface.md#addlistener)
* [close](_readline_.interface.md#close)
* [emit](_readline_.interface.md#emit)
* [eventNames](_readline_.interface.md#eventnames)
* [getMaxListeners](_readline_.interface.md#getmaxlisteners)
* [listenerCount](_readline_.interface.md#listenercount)
* [listeners](_readline_.interface.md#listeners)
* [off](_readline_.interface.md#off)
* [on](_readline_.interface.md#on)
* [once](_readline_.interface.md#once)
* [pause](_readline_.interface.md#pause)
* [prependListener](_readline_.interface.md#prependlistener)
* [prependOnceListener](_readline_.interface.md#prependoncelistener)
* [prompt](_readline_.interface.md#prompt)
* [question](_readline_.interface.md#question)
* [rawListeners](_readline_.interface.md#rawlisteners)
* [removeAllListeners](_readline_.interface.md#removealllisteners)
* [removeListener](_readline_.interface.md#removelistener)
* [resume](_readline_.interface.md#resume)
* [setMaxListeners](_readline_.interface.md#setmaxlisteners)
* [setPrompt](_readline_.interface.md#setprompt)
* [write](_readline_.interface.md#write)
* [listenerCount](_readline_.interface.md#static-listenercount)

## Constructors

### `Protected` constructor

\+ **new Interface**(`input`: [ReadableStream](../interfaces/nodejs.readablestream.md), `output?`: [WritableStream](../interfaces/nodejs.writablestream.md), `completer?`: [Completer](../modules/_readline_.md#completer) | [AsyncCompleter](../modules/_readline_.md#asynccompleter), `terminal?`: undefined | false | true): *[Interface](_readline_.interface.md)*

Defined in node_modules/@types/node/readline.d.ts:14

NOTE: According to the documentation:

> Instances of the `readline.Interface` class are constructed using the
> `readline.createInterface()` method.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface

**Parameters:**

Name | Type |
------ | ------ |
`input` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`output?` | [WritableStream](../interfaces/nodejs.writablestream.md) |
`completer?` | [Completer](../modules/_readline_.md#completer) &#124; [AsyncCompleter](../modules/_readline_.md#asynccompleter) |
`terminal?` | undefined &#124; false &#124; true |

**Returns:** *[Interface](_readline_.interface.md)*

\+ **new Interface**(`options`: [ReadLineOptions](../interfaces/_readline_.readlineoptions.md)): *[Interface](_readline_.interface.md)*

Defined in node_modules/@types/node/readline.d.ts:24

NOTE: According to the documentation:

> Instances of the `readline.Interface` class are constructed using the
> `readline.createInterface()` method.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ReadLineOptions](../interfaces/_readline_.readlineoptions.md) |

**Returns:** *[Interface](_readline_.interface.md)*

## Properties

###  terminal

• **terminal**: *boolean*

Defined in node_modules/@types/node/readline.d.ts:14

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹string›*

Defined in node_modules/@types/node/readline.d.ts:107

**Returns:** *[AsyncIterableIterator](../interfaces/asynciterableiterator.md)‹string›*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:54

events.EventEmitter
1. close
2. line
3. pause
4. resume
5. SIGCONT
6. SIGINT
7. SIGTSTP

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

Defined in node_modules/@types/node/readline.d.ts:55

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "line", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:56

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **addListener**(`event`: "pause", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:57

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "resume", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:58

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:59

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:60

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:61

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  close

▸ **close**(): *void*

Defined in node_modules/@types/node/readline.d.ts:40

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "line", `input`: string): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`event` | "line" |
`input` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "pause"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pause" |

**Returns:** *boolean*

▸ **emit**(`event`: "resume"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`event` | "resume" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGCONT"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGCONT" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGINT"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGINT" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGTSTP"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGTSTP" |

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

Defined in node_modules/@types/node/readline.d.ts:72

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

Defined in node_modules/@types/node/readline.d.ts:73

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "line", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/readline.d.ts:74

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **on**(`event`: "pause", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/readline.d.ts:75

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "resume", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/readline.d.ts:76

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/readline.d.ts:77

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/readline.d.ts:78

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/readline.d.ts:79

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/readline.d.ts:81

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

Defined in node_modules/@types/node/readline.d.ts:82

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "line", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/readline.d.ts:83

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **once**(`event`: "pause", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/readline.d.ts:84

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "resume", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/readline.d.ts:85

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/readline.d.ts:86

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/readline.d.ts:87

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/readline.d.ts:88

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

Defined in node_modules/@types/node/readline.d.ts:38

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:90

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

Defined in node_modules/@types/node/readline.d.ts:91

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "line", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:92

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "pause", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:93

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "resume", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:94

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:95

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:96

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:97

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:99

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

Defined in node_modules/@types/node/readline.d.ts:100

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "line", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:101

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pause", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:102

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "resume", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:103

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGCONT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:104

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGINT", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:105

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:106

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prompt

▸ **prompt**(`preserveCursor?`: undefined | false | true): *void*

Defined in node_modules/@types/node/readline.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`preserveCursor?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  question

▸ **question**(`query`: string, `callback`: function): *void*

Defined in node_modules/@types/node/readline.d.ts:37

**Parameters:**

▪ **query**: *string*

▪ **callback**: *function*

▸ (`answer`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`answer` | string |

**Returns:** *void*

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

###  resume

▸ **resume**(): *this*

Defined in node_modules/@types/node/readline.d.ts:39

**Returns:** *this*

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

###  setPrompt

▸ **setPrompt**(`prompt`: string): *void*

Defined in node_modules/@types/node/readline.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`prompt` | string |

**Returns:** *void*

___

###  write

▸ **write**(`data`: string | [Buffer](buffer.md), `key?`: [Key](../interfaces/_readline_.key.md)): *void*

Defined in node_modules/@types/node/readline.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; [Buffer](buffer.md) |
`key?` | [Key](../interfaces/_readline_.key.md) |

**Returns:** *void*

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
