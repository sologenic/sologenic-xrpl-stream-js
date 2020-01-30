[typescript](../README.md) › [Globals](../globals.md) › ["../index"](../modules/____index_.md) › [MapCache](____index_.mapcache.md)

# Interface: MapCache

Creates a cache object to store key/value pairs.

## Hierarchy

* **MapCache**

## Index

### Properties

* [clear](____index_.mapcache.md#optional-clear)

### Methods

* [delete](____index_.mapcache.md#delete)
* [get](____index_.mapcache.md#get)
* [has](____index_.mapcache.md#has)
* [set](____index_.mapcache.md#set)

## Properties

### `Optional` clear

• **clear**? : *undefined | function*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:169

Removes all key-value entries from the map.

## Methods

###  delete

▸ **delete**(`key`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:146

Removes `key` and its value from the cache.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | any | The key of the value to remove. |

**Returns:** *boolean*

Returns `true` if the entry was removed successfully, else `false`.

___

###  get

▸ **get**(`key`: any): *any*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:152

Gets the cached value for `key`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | any | The key of the value to get. |

**Returns:** *any*

Returns the cached value.

___

###  has

▸ **has**(`key`: any): *boolean*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:158

Checks if a cached value for `key` exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | any | The key of the entry to check. |

**Returns:** *boolean*

Returns `true` if an entry for `key` exists, else `false`.

___

###  set

▸ **set**(`key`: any, `value`: any): *this*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:165

Sets `value` to `key` of the cache.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | any | The key of the value to cache. |
`value` | any | The value to cache. |

**Returns:** *this*

Returns the cache object.
