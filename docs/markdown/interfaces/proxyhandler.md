[typescript](../README.md) › [Globals](../globals.md) › [ProxyHandler](proxyhandler.md)

# Interface: ProxyHandler <**T**>

## Type parameters

▪ **T**: *object*

## Hierarchy

* **ProxyHandler**

## Index

### Methods

* [apply](proxyhandler.md#optional-apply)
* [construct](proxyhandler.md#optional-construct)
* [defineProperty](proxyhandler.md#optional-defineproperty)
* [deleteProperty](proxyhandler.md#optional-deleteproperty)
* [enumerate](proxyhandler.md#optional-enumerate)
* [get](proxyhandler.md#optional-get)
* [getOwnPropertyDescriptor](proxyhandler.md#optional-getownpropertydescriptor)
* [getPrototypeOf](proxyhandler.md#optional-getprototypeof)
* [has](proxyhandler.md#optional-has)
* [isExtensible](proxyhandler.md#optional-isextensible)
* [ownKeys](proxyhandler.md#optional-ownkeys)
* [preventExtensions](proxyhandler.md#optional-preventextensions)
* [set](proxyhandler.md#optional-set)
* [setPrototypeOf](proxyhandler.md#optional-setprototypeof)

## Methods

### `Optional` apply

▸ **apply**(`target`: T, `thisArg`: any, `argArray?`: any): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`thisArg` | any |
`argArray?` | any |

**Returns:** *any*

___

### `Optional` construct

▸ **construct**(`target`: T, `argArray`: any, `newTarget?`: any): *object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`argArray` | any |
`newTarget?` | any |

**Returns:** *object*

___

### `Optional` defineProperty

▸ **defineProperty**(`target`: T, `p`: [PropertyKey](../globals.md#propertykey), `attributes`: [PropertyDescriptor](propertydescriptor.md)): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`p` | [PropertyKey](../globals.md#propertykey) |
`attributes` | [PropertyDescriptor](propertydescriptor.md) |

**Returns:** *boolean*

___

### `Optional` deleteProperty

▸ **deleteProperty**(`target`: T, `p`: [PropertyKey](../globals.md#propertykey)): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`p` | [PropertyKey](../globals.md#propertykey) |

**Returns:** *boolean*

___

### `Optional` enumerate

▸ **enumerate**(`target`: T): *[PropertyKey](../globals.md#propertykey)[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *[PropertyKey](../globals.md#propertykey)[]*

___

### `Optional` get

▸ **get**(`target`: T, `p`: [PropertyKey](../globals.md#propertykey), `receiver`: any): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`p` | [PropertyKey](../globals.md#propertykey) |
`receiver` | any |

**Returns:** *any*

___

### `Optional` getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`target`: T, `p`: [PropertyKey](../globals.md#propertykey)): *[PropertyDescriptor](propertydescriptor.md) | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`p` | [PropertyKey](../globals.md#propertykey) |

**Returns:** *[PropertyDescriptor](propertydescriptor.md) | undefined*

___

### `Optional` getPrototypeOf

▸ **getPrototypeOf**(`target`: T): *object | null*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *object | null*

___

### `Optional` has

▸ **has**(`target`: T, `p`: [PropertyKey](../globals.md#propertykey)): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`p` | [PropertyKey](../globals.md#propertykey) |

**Returns:** *boolean*

___

### `Optional` isExtensible

▸ **isExtensible**(`target`: T): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *boolean*

___

### `Optional` ownKeys

▸ **ownKeys**(`target`: T): *[PropertyKey](../globals.md#propertykey)[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *[PropertyKey](../globals.md#propertykey)[]*

___

### `Optional` preventExtensions

▸ **preventExtensions**(`target`: T): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *boolean*

___

### `Optional` set

▸ **set**(`target`: T, `p`: [PropertyKey](../globals.md#propertykey), `value`: any, `receiver`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`p` | [PropertyKey](../globals.md#propertykey) |
`value` | any |
`receiver` | any |

**Returns:** *boolean*

___

### `Optional` setPrototypeOf

▸ **setPrototypeOf**(`target`: T, `v`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`v` | any |

**Returns:** *boolean*
