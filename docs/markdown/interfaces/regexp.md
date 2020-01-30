[typescript](../README.md) › [Globals](../globals.md) › [RegExp](regexp.md)

# Interface: RegExp

## Hierarchy

* **RegExp**

## Index

### Properties

* [dotAll](regexp.md#dotall)
* [flags](regexp.md#flags)
* [global](regexp.md#global)
* [ignoreCase](regexp.md#ignorecase)
* [lastIndex](regexp.md#lastindex)
* [multiline](regexp.md#multiline)
* [source](regexp.md#source)
* [sticky](regexp.md#sticky)
* [unicode](regexp.md#unicode)

### Methods

* [[Symbol.match]](regexp.md#[symbol.match])
* [[Symbol.replace]](regexp.md#[symbol.replace])
* [[Symbol.search]](regexp.md#[symbol.search])
* [[Symbol.split]](regexp.md#[symbol.split])
* [compile](regexp.md#compile)
* [exec](regexp.md#exec)
* [test](regexp.md#test)

## Properties

###  dotAll

• **dotAll**: *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.regexp.d.ts:38

Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.
Default is false. Read-only.

___

###  flags

• **flags**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:380

Returns a string indicating the flags of the regular expression in question. This field is read-only.
The characters in this string are sequenced and concatenated in the following order:

   - "g" for global
   - "i" for ignoreCase
   - "m" for multiline
   - "u" for unicode
   - "y" for sticky

If no flags are set, the value is the empty string.

___

###  global

• **global**: *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:936

Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.

___

###  ignoreCase

• **ignoreCase**: *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:939

Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.

___

###  lastIndex

• **lastIndex**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:944

___

###  multiline

• **multiline**: *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:942

Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.

___

###  source

• **source**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:933

Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.

___

###  sticky

• **sticky**: *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:386

Returns a Boolean value indicating the state of the sticky flag (y) used with a regular
expression. Default is false. Read-only.

___

###  unicode

• **unicode**: *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:392

Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular
expression. Default is false. Read-only.

## Methods

###  [Symbol.match]

▸ **[Symbol.match]**(`string`: string): *[RegExpMatchArray](regexpmatcharray.md) | null*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:182

Matches a string with this regular expression, and returns an array containing the results of
that search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | A string to search within.  |

**Returns:** *[RegExpMatchArray](regexpmatcharray.md) | null*

___

###  [Symbol.replace]

▸ **[Symbol.replace]**(`string`: string, `replaceValue`: string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:191

Replaces text in a string, using this regular expression.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | A String object or string literal whose contents matching against               this regular expression will be replaced |
`replaceValue` | string | A String object or string literal containing the text to replace for every                     successful match of this regular expression.  |

**Returns:** *string*

▸ **[Symbol.replace]**(`string`: string, `replacer`: function): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:199

Replaces text in a string, using this regular expression.

**Parameters:**

▪ **string**: *string*

A String object or string literal whose contents matching against
              this regular expression will be replaced

▪ **replacer**: *function*

A function that returns the replacement text.

▸ (`substring`: string, ...`args`: any[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`substring` | string |
`...args` | any[] |

**Returns:** *string*

___

###  [Symbol.search]

▸ **[Symbol.search]**(`string`: string): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:207

Finds the position beginning first substring match in a regular expression search
using this regular expression.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The string to search within.  |

**Returns:** *number*

___

###  [Symbol.split]

▸ **[Symbol.split]**(`string`: string, `limit?`: undefined | number): *string[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:221

Returns an array of substrings that were delimited by strings in the original input that
match against this regular expression.

If the regular expression contains capturing parentheses, then each time this
regular expression matches, the results (including any undefined results) of the
capturing parentheses are spliced.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | string value to split |
`limit?` | undefined &#124; number | if not undefined, the output array is truncated so that it contains no more than 'limit' elements.  |

**Returns:** *string[]*

___

###  compile

▸ **compile**(): *this*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:947

**Returns:** *this*

___

###  exec

▸ **exec**(`string`: string): *[RegExpExecArray](regexpexecarray.md) | null*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:924

Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The String object or string literal on which to perform the search.  |

**Returns:** *[RegExpExecArray](regexpexecarray.md) | null*

___

###  test

▸ **test**(`string`: string): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:930

Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string` | string | String on which to perform the search.  |

**Returns:** *boolean*
