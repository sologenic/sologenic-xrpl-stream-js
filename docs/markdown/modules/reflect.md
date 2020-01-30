[typescript](../README.md) › [Globals](../globals.md) › [Reflect](reflect.md)

# Module: Reflect

## Index

### Functions

* [apply](reflect.md#apply)
* [construct](reflect.md#construct)
* [defineProperty](reflect.md#defineproperty)
* [deleteProperty](reflect.md#deleteproperty)
* [enumerate](reflect.md#enumerate)
* [get](reflect.md#get)
* [getOwnPropertyDescriptor](reflect.md#getownpropertydescriptor)
* [getPrototypeOf](reflect.md#getprototypeof)
* [has](reflect.md#has)
* [isExtensible](reflect.md#isextensible)
* [ownKeys](reflect.md#ownkeys)
* [preventExtensions](reflect.md#preventextensions)
* [set](reflect.md#set)
* [setPrototypeOf](reflect.md#setprototypeof)

## Functions

###  apply

▸ **apply**(`target`: [Function](../interfaces/function.md), `thisArgument`: any, `argumentsList`: [ArrayLike](../interfaces/arraylike.md)‹any›): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Function](../interfaces/function.md) |
`thisArgument` | any |
`argumentsList` | [ArrayLike](../interfaces/arraylike.md)‹any› |

**Returns:** *any*

___

###  construct

▸ **construct**(`target`: [Function](../interfaces/function.md), `argumentsList`: [ArrayLike](../interfaces/arraylike.md)‹any›, `newTarget?`: any): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Function](../interfaces/function.md) |
`argumentsList` | [ArrayLike](../interfaces/arraylike.md)‹any› |
`newTarget?` | any |

**Returns:** *any*

___

###  defineProperty

▸ **defineProperty**(`target`: object, `propertyKey`: [PropertyKey](../globals.md#propertykey), `attributes`: [PropertyDescriptor](../interfaces/propertydescriptor.md)): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |
`propertyKey` | [PropertyKey](../globals.md#propertykey) |
`attributes` | [PropertyDescriptor](../interfaces/propertydescriptor.md) |

**Returns:** *boolean*

___

###  deleteProperty

▸ **deleteProperty**(`target`: object, `propertyKey`: [PropertyKey](../globals.md#propertykey)): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |
`propertyKey` | [PropertyKey](../globals.md#propertykey) |

**Returns:** *boolean*

___

###  enumerate

▸ **enumerate**(`target`: object): *[IterableIterator](../interfaces/iterableiterator.md)‹any›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:238

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹any›*

___

###  get

▸ **get**(`target`: object, `propertyKey`: [PropertyKey](../globals.md#propertykey), `receiver?`: any): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |
`propertyKey` | [PropertyKey](../globals.md#propertykey) |
`receiver?` | any |

**Returns:** *any*

___

###  getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`target`: object, `propertyKey`: [PropertyKey](../globals.md#propertykey)): *[PropertyDescriptor](../interfaces/propertydescriptor.md) | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |
`propertyKey` | [PropertyKey](../globals.md#propertykey) |

**Returns:** *[PropertyDescriptor](../interfaces/propertydescriptor.md) | undefined*

___

###  getPrototypeOf

▸ **getPrototypeOf**(`target`: object): *object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |

**Returns:** *object*

___

###  has

▸ **has**(`target`: object, `propertyKey`: [PropertyKey](../globals.md#propertykey)): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |
`propertyKey` | [PropertyKey](../globals.md#propertykey) |

**Returns:** *boolean*

___

###  isExtensible

▸ **isExtensible**(`target`: object): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |

**Returns:** *boolean*

___

###  ownKeys

▸ **ownKeys**(`target`: object): *[PropertyKey](../globals.md#propertykey)[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |

**Returns:** *[PropertyKey](../globals.md#propertykey)[]*

___

###  preventExtensions

▸ **preventExtensions**(`target`: object): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |

**Returns:** *boolean*

___

###  set

▸ **set**(`target`: object, `propertyKey`: [PropertyKey](../globals.md#propertykey), `value`: any, `receiver?`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |
`propertyKey` | [PropertyKey](../globals.md#propertykey) |
`value` | any |
`receiver?` | any |

**Returns:** *boolean*

___

###  setPrototypeOf

▸ **setPrototypeOf**(`target`: object, `proto`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.reflect.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`target` | object |
`proto` | any |

**Returns:** *boolean*
