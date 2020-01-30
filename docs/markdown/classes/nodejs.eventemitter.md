[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [EventEmitter](nodejs.eventemitter.md)

# Class: EventEmitter

## Hierarchy

* **EventEmitter**

  ↳ [ReadableStream](../interfaces/nodejs.readablestream.md)

  ↳ [WritableStream](../interfaces/nodejs.writablestream.md)

  ↳ [Domain](../interfaces/nodejs.domain.md)

  ↳ [Process](../interfaces/nodejs.process.md)

  ↳ [internal](_events_.internal.md)

  ↳ [Redis](../interfaces/ioredis.redis.md)

  ↳ [Cluster](../interfaces/ioredis.cluster.md)

  ↳ [ClusterStatic](../interfaces/ioredis.clusterstatic.md)

## Index

### Methods

* [addListener](nodejs.eventemitter.md#addlistener)
* [emit](nodejs.eventemitter.md#emit)
* [eventNames](nodejs.eventemitter.md#eventnames)
* [getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)
* [listenerCount](nodejs.eventemitter.md#listenercount)
* [listeners](nodejs.eventemitter.md#listeners)
* [off](nodejs.eventemitter.md#off)
* [on](nodejs.eventemitter.md#on)
* [once](nodejs.eventemitter.md#once)
* [prependListener](nodejs.eventemitter.md#prependlistener)
* [prependOnceListener](nodejs.eventemitter.md#prependoncelistener)
* [rawListeners](nodejs.eventemitter.md#rawlisteners)
* [removeAllListeners](nodejs.eventemitter.md#removealllisteners)
* [removeListener](nodejs.eventemitter.md#removelistener)
* [setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

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

Defined in node_modules/@types/node/globals.d.ts:618

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

Defined in node_modules/@types/node/globals.d.ts:623

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

Defined in node_modules/@types/node/globals.d.ts:615

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

Defined in node_modules/@types/node/globals.d.ts:619

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

Defined in node_modules/@types/node/globals.d.ts:616

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

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

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

Defined in node_modules/@types/node/globals.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

Defined in node_modules/@types/node/globals.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

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

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

Defined in node_modules/@types/node/globals.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*
