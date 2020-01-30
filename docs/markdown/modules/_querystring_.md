[typescript](../README.md) › [Globals](../globals.md) › ["querystring"](_querystring_.md)

# Module: "querystring"

## Index

### Interfaces

* [ParseOptions](../interfaces/_querystring_.parseoptions.md)
* [ParsedUrlQuery](../interfaces/_querystring_.parsedurlquery.md)
* [ParsedUrlQueryInput](../interfaces/_querystring_.parsedurlqueryinput.md)
* [StringifyOptions](../interfaces/_querystring_.stringifyoptions.md)

### Variables

* [decode](_querystring_.md#const-decode)
* [encode](_querystring_.md#const-encode)

### Functions

* [escape](_querystring_.md#escape)
* [parse](_querystring_.md#parse)
* [stringify](_querystring_.md#stringify)
* [unescape](_querystring_.md#unescape)

## Variables

### `Const` decode

• **decode**: *typeof parse*

Defined in node_modules/@types/node/querystring.d.ts:29

The querystring.decode() function is an alias for querystring.parse().

___

### `Const` encode

• **encode**: *typeof stringify*

Defined in node_modules/@types/node/querystring.d.ts:25

The querystring.encode() function is an alias for querystring.stringify().

## Functions

###  escape

▸ **escape**(`str`: string): *string*

Defined in node_modules/@types/node/querystring.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

###  parse

▸ **parse**(`str`: string, `sep?`: undefined | string, `eq?`: undefined | string, `options?`: [ParseOptions](../interfaces/_querystring_.parseoptions.md)): *[ParsedUrlQuery](../interfaces/_querystring_.parsedurlquery.md)*

Defined in node_modules/@types/node/querystring.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`sep?` | undefined &#124; string |
`eq?` | undefined &#124; string |
`options?` | [ParseOptions](../interfaces/_querystring_.parseoptions.md) |

**Returns:** *[ParsedUrlQuery](../interfaces/_querystring_.parsedurlquery.md)*

___

###  stringify

▸ **stringify**(`obj?`: [ParsedUrlQueryInput](../interfaces/_querystring_.parsedurlqueryinput.md), `sep?`: undefined | string, `eq?`: undefined | string, `options?`: [StringifyOptions](../interfaces/_querystring_.stringifyoptions.md)): *string*

Defined in node_modules/@types/node/querystring.d.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`obj?` | [ParsedUrlQueryInput](../interfaces/_querystring_.parsedurlqueryinput.md) |
`sep?` | undefined &#124; string |
`eq?` | undefined &#124; string |
`options?` | [StringifyOptions](../interfaces/_querystring_.stringifyoptions.md) |

**Returns:** *string*

___

###  unescape

▸ **unescape**(`str`: string): *string*

Defined in node_modules/@types/node/querystring.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*
