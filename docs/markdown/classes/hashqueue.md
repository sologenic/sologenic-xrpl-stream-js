[typescript](../README.md) › [Globals](../globals.md) › [HashQueue](hashqueue.md)

# Class: HashQueue

## Hierarchy

* **HashQueue**

## Implements

* [IQueue](../interfaces/iqueue.md)

## Index

### Constructors

* [constructor](hashqueue.md#constructor)

### Properties

* [hash](hashqueue.md#private-hash)

### Methods

* [_exist](hashqueue.md#private-_exist)
* [add](hashqueue.md#add)
* [appendEvent](hashqueue.md#appendevent)
* [del](hashqueue.md#del)
* [delAll](hashqueue.md#delall)
* [get](hashqueue.md#get)
* [getAll](hashqueue.md#getall)
* [pop](hashqueue.md#pop)

## Constructors

###  constructor

\+ **new HashQueue**(`options`: any): *[HashQueue](hashqueue.md)*

*Defined in [src/lib/queues/hash.ts:6](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *[HashQueue](hashqueue.md)*

## Properties

### `Private` hash

• **hash**: *[Map](../interfaces/map.md)‹string, [Array](../interfaces/regexpmatcharray.md#array)‹[MQTX](../interfaces/mqtx.md)››* = new Map<string, Array<MQTX>>()

*Defined in [src/lib/queues/hash.ts:6](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L6)*

## Methods

### `Private` _exist

▸ **_exist**(`queue`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/queues/hash.ts:12](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  add

▸ **add**(`queue`: string, `data`: object, `id?`: undefined | string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md)›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/hash.ts:29](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L29)*

**`description`** add an object to the queue

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`data` | object |
`id?` | undefined &#124; string |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md)›*

___

###  appendEvent

▸ **appendEvent**(`queue`: string, `id`: string, `event_name`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/hash.ts:147](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |
`event_name` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  del

▸ **del**(`queue`: string, `id`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/hash.ts:108](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L108)*

**`description`** delete an object by id from the queue

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  delAll

▸ **delAll**(`queue`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/hash.ts:135](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L135)*

**`description`** delete all elements from the queue

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  get

▸ **get**(`queue`: string, `id`: string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | undefined›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/hash.ts:52](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L52)*

**`description`** returns a specific object within the queue

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | undefined›*

___

###  getAll

▸ **getAll**(`queue`: string): *[Promise](../interfaces/promise.md)‹[Array](../interfaces/regexpmatcharray.md#array)‹[MQTX](../interfaces/mqtx.md)››*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/hash.ts:72](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L72)*

**`description`** returns all elements of the queue

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[Array](../interfaces/regexpmatcharray.md#array)‹[MQTX](../interfaces/mqtx.md)››*

___

###  pop

▸ **pop**(`queue`: string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | boolean›*

*Implementation of [IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/queues/hash.ts:82](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/queues/hash.ts#L82)*

**`description`** pop an element off the end of the queue

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | boolean›*
