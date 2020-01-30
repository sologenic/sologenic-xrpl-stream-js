[typescript](../README.md) › [Globals](../globals.md) › ["url"](../modules/_url_.md) › [URLSearchParams](_url_.urlsearchparams.md)

# Class: URLSearchParams

## Hierarchy

* **URLSearchParams**

## Implements

* [Iterable](../interfaces/iterable.md)‹[string, string]›

## Index

### Constructors

* [constructor](_url_.urlsearchparams.md#constructor)

### Methods

* [[Symbol.iterator]](_url_.urlsearchparams.md#[symbol.iterator])
* [append](_url_.urlsearchparams.md#append)
* [delete](_url_.urlsearchparams.md#delete)
* [entries](_url_.urlsearchparams.md#entries)
* [forEach](_url_.urlsearchparams.md#foreach)
* [get](_url_.urlsearchparams.md#get)
* [getAll](_url_.urlsearchparams.md#getall)
* [has](_url_.urlsearchparams.md#has)
* [keys](_url_.urlsearchparams.md#keys)
* [set](_url_.urlsearchparams.md#set)
* [sort](_url_.urlsearchparams.md#sort)
* [toString](_url_.urlsearchparams.md#tostring)
* [values](_url_.urlsearchparams.md#values)

## Constructors

###  constructor

\+ **new URLSearchParams**(`init?`: [URLSearchParams](_url_.urlsearchparams.md) | string | object | [Iterable](../interfaces/iterable.md)‹[string, string]› | [Array](../interfaces/regexpmatcharray.md#array)‹[string, string]›): *[URLSearchParams](_url_.urlsearchparams.md)*

Defined in node_modules/@types/node/url.d.ts:88

**Parameters:**

Name | Type |
------ | ------ |
`init?` | [URLSearchParams](_url_.urlsearchparams.md) &#124; string &#124; object &#124; [Iterable](../interfaces/iterable.md)‹[string, string]› &#124; [Array](../interfaces/regexpmatcharray.md#array)‹[string, string]› |

**Returns:** *[URLSearchParams](_url_.urlsearchparams.md)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](../interfaces/iterableiterator.md)‹[string, string]›*

*Implementation of [Iterable](../interfaces/iterable.md)*

Defined in node_modules/@types/node/url.d.ts:102

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹[string, string]›*

___

###  append

▸ **append**(`name`: string, `value`: string): *void*

Defined in node_modules/@types/node/url.d.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string |

**Returns:** *void*

___

###  delete

▸ **delete**(`name`: string): *void*

Defined in node_modules/@types/node/url.d.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

###  entries

▸ **entries**(): *[IterableIterator](../interfaces/iterableiterator.md)‹[string, string]›*

Defined in node_modules/@types/node/url.d.ts:92

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹[string, string]›*

___

###  forEach

▸ **forEach**(`callback`: function): *void*

Defined in node_modules/@types/node/url.d.ts:93

**Parameters:**

▪ **callback**: *function*

▸ (`value`: string, `name`: string, `searchParams`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`name` | string |
`searchParams` | this |

**Returns:** *void*

___

###  get

▸ **get**(`name`: string): *string | null*

Defined in node_modules/@types/node/url.d.ts:94

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | null*

___

###  getAll

▸ **getAll**(`name`: string): *string[]*

Defined in node_modules/@types/node/url.d.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string[]*

___

###  has

▸ **has**(`name`: string): *boolean*

Defined in node_modules/@types/node/url.d.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *[IterableIterator](../interfaces/iterableiterator.md)‹string›*

Defined in node_modules/@types/node/url.d.ts:97

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹string›*

___

###  set

▸ **set**(`name`: string, `value`: string): *void*

Defined in node_modules/@types/node/url.d.ts:98

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string |

**Returns:** *void*

___

###  sort

▸ **sort**(): *void*

Defined in node_modules/@types/node/url.d.ts:99

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/@types/node/url.d.ts:100

**Returns:** *string*

___

###  values

▸ **values**(): *[IterableIterator](../interfaces/iterableiterator.md)‹string›*

Defined in node_modules/@types/node/url.d.ts:101

**Returns:** *[IterableIterator](../interfaces/iterableiterator.md)‹string›*
