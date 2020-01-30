[typescript](../README.md) › [Globals](../globals.md) › [IQueue](iqueue.md)

# Interface: IQueue

## Hierarchy

* **IQueue**

## Implemented by

* [HashQueue](../classes/hashqueue.md)
* [RedisQueue](../classes/redisqueue.md)

## Index

### Methods

* [add](iqueue.md#add)
* [appendEvent](iqueue.md#appendevent)
* [del](iqueue.md#del)
* [delAll](iqueue.md#delall)
* [get](iqueue.md#get)
* [getAll](iqueue.md#getall)
* [pop](iqueue.md#pop)

## Methods

###  add

▸ **add**(`queue`: string, `data`: object, `id?`: undefined | string): *[Promise](promise.md)‹[MQTX](mqtx.md)›*

*Defined in [src/types/sologenicoptions.d.ts:6](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`data` | object |
`id?` | undefined &#124; string |

**Returns:** *[Promise](promise.md)‹[MQTX](mqtx.md)›*

___

###  appendEvent

▸ **appendEvent**(`queue`: string, `id`: string, `event_name`: string): *[Promise](promise.md)‹boolean›*

*Defined in [src/types/sologenicoptions.d.ts:12](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |
`event_name` | string |

**Returns:** *[Promise](promise.md)‹boolean›*

___

###  del

▸ **del**(`queue`: string, `id`: string): *[Promise](promise.md)‹boolean›*

*Defined in [src/types/sologenicoptions.d.ts:10](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |

**Returns:** *[Promise](promise.md)‹boolean›*

___

###  delAll

▸ **delAll**(`queue`: string): *[Promise](promise.md)‹boolean›*

*Defined in [src/types/sologenicoptions.d.ts:11](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |

**Returns:** *[Promise](promise.md)‹boolean›*

___

###  get

▸ **get**(`queue`: string, `id`: string): *[Promise](promise.md)‹[MQTX](mqtx.md) | undefined›*

*Defined in [src/types/sologenicoptions.d.ts:7](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |
`id` | string |

**Returns:** *[Promise](promise.md)‹[MQTX](mqtx.md) | undefined›*

___

###  getAll

▸ **getAll**(`queue`: string): *[Promise](promise.md)‹[Array](regexpmatcharray.md#array)‹[MQTX](mqtx.md)››*

*Defined in [src/types/sologenicoptions.d.ts:8](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |

**Returns:** *[Promise](promise.md)‹[Array](regexpmatcharray.md#array)‹[MQTX](mqtx.md)››*

___

###  pop

▸ **pop**(`queue`: string): *[Promise](promise.md)‹[MQTX](mqtx.md) | boolean›*

*Defined in [src/types/sologenicoptions.d.ts:9](https://github.com/sologenic/sologenic-xrpl-stream-js/blob/2cf7f25/src/types/sologenicoptions.d.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`queue` | string |

**Returns:** *[Promise](promise.md)‹[MQTX](mqtx.md) | boolean›*
