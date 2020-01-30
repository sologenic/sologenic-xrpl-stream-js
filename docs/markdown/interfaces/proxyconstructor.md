[typescript](../README.md) › [Globals](../globals.md) › [ProxyConstructor](proxyconstructor.md)

# Interface: ProxyConstructor

## Hierarchy

* **ProxyConstructor**

## Index

### Constructors

* [constructor](proxyconstructor.md#constructor)

### Methods

* [revocable](proxyconstructor.md#revocable)

## Constructors

###  constructor

\+ **new ProxyConstructor**<**T**>(`target`: T, `handler`: [ProxyHandler](proxyhandler.md)‹T›): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:39

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`handler` | [ProxyHandler](proxyhandler.md)‹T› |

**Returns:** *T*

## Methods

###  revocable

▸ **revocable**<**T**>(`target`: T, `handler`: [ProxyHandler](proxyhandler.md)‹T›): *object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.proxy.d.ts:39

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |
`handler` | [ProxyHandler](proxyhandler.md)‹T› |

**Returns:** *object*

* **proxy**: *T*

* **revoke**(): *function*

  * (): *void*
