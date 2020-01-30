[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [Socket](nodejs.socket.md)

# Interface: Socket

## Hierarchy

  ↳ [ReadWriteStream](nodejs.readwritestream.md)

  ↳ **Socket**

## Index

### Properties

* [isTTY](nodejs.socket.md#optional-istty)
* [readable](nodejs.socket.md#readable)
* [writable](nodejs.socket.md#writable)

### Methods

* [[Symbol.asyncIterator]](nodejs.socket.md#[symbol.asynciterator])
* [addListener](nodejs.socket.md#addlistener)
* [emit](nodejs.socket.md#emit)
* [end](nodejs.socket.md#end)
* [eventNames](nodejs.socket.md#eventnames)
* [getMaxListeners](nodejs.socket.md#getmaxlisteners)
* [isPaused](nodejs.socket.md#ispaused)
* [listenerCount](nodejs.socket.md#listenercount)
* [listeners](nodejs.socket.md#listeners)
* [off](nodejs.socket.md#off)
* [on](nodejs.socket.md#on)
* [once](nodejs.socket.md#once)
* [pause](nodejs.socket.md#pause)
* [pipe](nodejs.socket.md#pipe)
* [prependListener](nodejs.socket.md#prependlistener)
* [prependOnceListener](nodejs.socket.md#prependoncelistener)
* [rawListeners](nodejs.socket.md#rawlisteners)
* [read](nodejs.socket.md#read)
* [removeAllListeners](nodejs.socket.md#removealllisteners)
* [removeListener](nodejs.socket.md#removelistener)
* [resume](nodejs.socket.md#resume)
* [setEncoding](nodejs.socket.md#setencoding)
* [setMaxListeners](nodejs.socket.md#setmaxlisteners)
* [unpipe](nodejs.socket.md#unpipe)
* [unshift](nodejs.socket.md#unshift)
* [wrap](nodejs.socket.md#wrap)
* [write](nodejs.socket.md#write)

## Properties

### `Optional` isTTY

• **isTTY**? : *undefined | true*

Defined in node_modules/@types/node/globals.d.ts:729

___

###  readable

• **readable**: *boolean*

*Inherited from [ReadableStream](nodejs.readablestream.md).[readable](nodejs.readablestream.md#readable)*

Defined in node_modules/@types/node/globals.d.ts:627

___

###  writable

• **writable**: *boolean*

*Inherited from [WritableStream](nodejs.writablestream.md).[writable](nodejs.writablestream.md#writable)*

Defined in node_modules/@types/node/globals.d.ts:641

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *[AsyncIterableIterator](asynciterableiterator.md)‹string | [Buffer](../classes/buffer.md)›*

*Inherited from [ReadableStream](nodejs.readablestream.md).[[Symbol.asyncIterator]](nodejs.readablestream.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/globals.d.ts:637

**Returns:** *[AsyncIterableIterator](asynciterableiterator.md)‹string | [Buffer](../classes/buffer.md)›*

___

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

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [WritableStream](nodejs.writablestream.md).[end](nodejs.writablestream.md#end)*

Defined in node_modules/@types/node/globals.d.ts:644

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`data`: string | [Uint8Array](uint8array.md), `cb?`: undefined | function): *void*

*Inherited from [WritableStream](nodejs.writablestream.md).[end](nodejs.writablestream.md#end)*

Defined in node_modules/@types/node/globals.d.ts:645

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; [Uint8Array](uint8array.md) |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`str`: string, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [WritableStream](nodejs.writablestream.md).[end](nodejs.writablestream.md#end)*

Defined in node_modules/@types/node/globals.d.ts:646

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

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

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [ReadableStream](nodejs.readablestream.md).[isPaused](nodejs.readablestream.md#ispaused)*

Defined in node_modules/@types/node/globals.d.ts:632

**Returns:** *boolean*

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

###  pause

▸ **pause**(): *this*

*Inherited from [ReadableStream](nodejs.readablestream.md).[pause](nodejs.readablestream.md#pause)*

Defined in node_modules/@types/node/globals.d.ts:630

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [ReadableStream](nodejs.readablestream.md).[pipe](nodejs.readablestream.md#pipe)*

Defined in node_modules/@types/node/globals.d.ts:633

**Type parameters:**

▪ **T**: *[WritableStream](nodejs.writablestream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined &#124; object |

**Returns:** *T*

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

###  read

▸ **read**(`size?`: undefined | number): *string | [Buffer](../classes/buffer.md)*

*Inherited from [ReadableStream](nodejs.readablestream.md).[read](nodejs.readablestream.md#read)*

Defined in node_modules/@types/node/globals.d.ts:628

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *string | [Buffer](../classes/buffer.md)*

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

###  resume

▸ **resume**(): *this*

*Inherited from [ReadableStream](nodejs.readablestream.md).[resume](nodejs.readablestream.md#resume)*

Defined in node_modules/@types/node/globals.d.ts:631

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [ReadableStream](nodejs.readablestream.md).[setEncoding](nodejs.readablestream.md#setencoding)*

Defined in node_modules/@types/node/globals.d.ts:629

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

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

___

###  unpipe

▸ **unpipe**(`destination?`: [WritableStream](nodejs.writablestream.md)): *this*

*Inherited from [ReadableStream](nodejs.readablestream.md).[unpipe](nodejs.readablestream.md#unpipe)*

Defined in node_modules/@types/node/globals.d.ts:634

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | [WritableStream](nodejs.writablestream.md) |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: string | [Uint8Array](uint8array.md), `encoding?`: [BufferEncoding](../globals.md#bufferencoding)): *void*

*Inherited from [ReadableStream](nodejs.readablestream.md).[unshift](nodejs.readablestream.md#unshift)*

Defined in node_modules/@types/node/globals.d.ts:635

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | string &#124; [Uint8Array](uint8array.md) |
`encoding?` | [BufferEncoding](../globals.md#bufferencoding) |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: [ReadableStream](nodejs.readablestream.md)): *this*

*Inherited from [ReadableStream](nodejs.readablestream.md).[wrap](nodejs.readablestream.md#wrap)*

Defined in node_modules/@types/node/globals.d.ts:636

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | [ReadableStream](nodejs.readablestream.md) |

**Returns:** *this*

___

###  write

▸ **write**(`buffer`: [Uint8Array](uint8array.md) | string, `cb?`: undefined | function): *boolean*

*Inherited from [WritableStream](nodejs.writablestream.md).[write](nodejs.writablestream.md#write)*

Defined in node_modules/@types/node/globals.d.ts:642

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Uint8Array](uint8array.md) &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`str`: string, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [WritableStream](nodejs.writablestream.md).[write](nodejs.writablestream.md#write)*

Defined in node_modules/@types/node/globals.d.ts:643

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*
