[typescript](../README.md) › [Globals](../globals.md) › [TXMQƨ](txmq_.md)

# Class: TXMQƨ

## Hierarchy

* **TXMQƨ**

## Index

### Constructors

* [constructor](txmq_.md#constructor)

### Properties

* [queue](txmq_.md#private-queue)

### Methods

* [add](txmq_.md#add)
* [appendEvent](txmq_.md#appendevent)
* [del](txmq_.md#del)
* [delAll](txmq_.md#delall)
* [get](txmq_.md#get)
* [getAll](txmq_.md#getall)
* [pop](txmq_.md#pop)

## Constructors

###  constructor

\+ **new TXMQƨ**(`sologenicOptions`: any): *[TXMQƨ](txmq_.md)*

*Defined in [src/lib/stxmq.ts:12](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`sologenicOptions` | any |

**Returns:** *[TXMQƨ](txmq_.md)*

## Properties

### `Private` queue

• **queue**: *[IQueue](../interfaces/iqueue.md)*

*Defined in [src/lib/stxmq.ts:12](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L12)*

## Methods

###  add

▸ **add**(`queue`: string, `data`: object, `id?`: undefined | string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md)›*

*Defined in [src/lib/stxmq.ts:39](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L39)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string | - |
`data` | object | - |
`id?` | undefined &#124; string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md)›*

___

###  appendEvent

▸ **appendEvent**(`queue`: string, `id`: string, `event_name`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/stxmq.ts:90](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L90)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string | - |
`id` | string | - |
`event_name` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  del

▸ **del**(`queue`: string, `id`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/stxmq.ts:72](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L72)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string | - |
`id` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  delAll

▸ **delAll**(`queue`: string): *[Promise](../interfaces/promise.md)‹boolean›*

*Defined in [src/lib/stxmq.ts:80](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L80)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  get

▸ **get**(`queue`: string, `id`: string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | undefined›*

*Defined in [src/lib/stxmq.ts:48](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L48)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string | - |
`id` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | undefined›*

___

###  getAll

▸ **getAll**(`queue`: string): *[Promise](../interfaces/promise.md)‹[Array](../interfaces/regexpmatcharray.md#array)‹[MQTX](../interfaces/mqtx.md)››*

*Defined in [src/lib/stxmq.ts:56](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L56)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[Array](../interfaces/regexpmatcharray.md#array)‹[MQTX](../interfaces/mqtx.md)››*

___

###  pop

▸ **pop**(`queue`: string): *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | boolean›*

*Defined in [src/lib/stxmq.ts:63](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/lib/stxmq.ts#L63)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queue` | string |   |

**Returns:** *[Promise](../interfaces/promise.md)‹[MQTX](../interfaces/mqtx.md) | boolean›*
