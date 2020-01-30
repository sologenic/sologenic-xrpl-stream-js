[typescript](../README.md) › [Globals](../globals.md) › [String](string.md)

# Interface: String

## Hierarchy

* **String**

## Indexable

* \[ **index**: *number*\]: string

## Index

### Properties

* [length](string.md#length)

### Methods

* [[Symbol.iterator]](string.md#[symbol.iterator])
* [anchor](string.md#anchor)
* [big](string.md#big)
* [blink](string.md#blink)
* [bold](string.md#bold)
* [charAt](string.md#charat)
* [charCodeAt](string.md#charcodeat)
* [codePointAt](string.md#codepointat)
* [concat](string.md#concat)
* [endsWith](string.md#endswith)
* [fixed](string.md#fixed)
* [fontcolor](string.md#fontcolor)
* [fontsize](string.md#fontsize)
* [includes](string.md#includes)
* [indexOf](string.md#indexof)
* [italics](string.md#italics)
* [lastIndexOf](string.md#lastindexof)
* [link](string.md#link)
* [localeCompare](string.md#localecompare)
* [match](string.md#match)
* [normalize](string.md#normalize)
* [padEnd](string.md#padend)
* [padStart](string.md#padstart)
* [repeat](string.md#repeat)
* [replace](string.md#replace)
* [search](string.md#search)
* [slice](string.md#slice)
* [small](string.md#small)
* [split](string.md#split)
* [startsWith](string.md#startswith)
* [strike](string.md#strike)
* [sub](string.md#sub)
* [substr](string.md#substr)
* [substring](string.md#substring)
* [sup](string.md#sup)
* [toLocaleLowerCase](string.md#tolocalelowercase)
* [toLocaleUpperCase](string.md#tolocaleuppercase)
* [toLowerCase](string.md#tolowercase)
* [toString](string.md#tostring)
* [toUpperCase](string.md#touppercase)
* [trim](string.md#trim)
* [trimLeft](string.md#trimleft)
* [trimRight](string.md#trimright)
* [valueOf](string.md#valueof)

## Properties

###  length

• **length**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:501

Returns the length of a String object.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *[IterableIterator](iterableiterator.md)‹string›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:243

Iterator

**Returns:** *[IterableIterator](iterableiterator.md)‹string›*

___

###  anchor

▸ **anchor**(`name`: string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:460

Returns an <a> HTML anchor element and sets the name attribute to the text value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string |   |

**Returns:** *string*

___

###  big

▸ **big**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:463

Returns a <big> HTML element

**Returns:** *string*

___

###  blink

▸ **blink**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:466

Returns a <blink> HTML element

**Returns:** *string*

___

###  bold

▸ **bold**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:469

Returns a <b> HTML element

**Returns:** *string*

___

###  charAt

▸ **charAt**(`pos`: number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:402

Returns the character at the specified index.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos` | number | The zero-based index of the desired character.  |

**Returns:** *string*

___

###  charCodeAt

▸ **charCodeAt**(`index`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:408

Returns the Unicode value of the character at the specified location.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.  |

**Returns:** *number*

___

###  codePointAt

▸ **codePointAt**(`pos`: number): *number | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:408

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

**Parameters:**

Name | Type |
------ | ------ |
`pos` | number |

**Returns:** *number | undefined*

___

###  concat

▸ **concat**(...`strings`: string[]): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:414

Returns a string that contains the concatenation of two or more strings.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...strings` | string[] | The strings to append to the end of the string.  |

**Returns:** *string*

___

###  endsWith

▸ **endsWith**(`searchString`: string, `endPosition?`: undefined | number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:424

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

**Parameters:**

Name | Type |
------ | ------ |
`searchString` | string |
`endPosition?` | undefined &#124; number |

**Returns:** *boolean*

___

###  fixed

▸ **fixed**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:472

Returns a <tt> HTML element

**Returns:** *string*

___

###  fontcolor

▸ **fontcolor**(`color`: string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:475

Returns a <font> HTML element and sets the color attribute value

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *string*

___

###  fontsize

▸ **fontsize**(`size`: number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:478

Returns a <font> HTML element and sets the size attribute value

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *string*

▸ **fontsize**(`size`: string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:481

Returns a <font> HTML element and sets the size attribute value

**Parameters:**

Name | Type |
------ | ------ |
`size` | string |

**Returns:** *string*

___

###  includes

▸ **includes**(`searchString`: string, `position?`: undefined | number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:417

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | search string |
`position?` | undefined &#124; number | If position is undefined, 0 is assumed, so as to search all of the String.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchString`: string, `position?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:421

Returns the position of the first occurrence of a substring.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | The substring to search for in the string |
`position?` | undefined &#124; number | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.  |

**Returns:** *number*

___

###  italics

▸ **italics**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:484

Returns an <i> HTML element

**Returns:** *string*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchString`: string, `position?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:428

Returns the last occurrence of a substring in the string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | The substring to search for. |
`position?` | undefined &#124; number | The index at which to begin searching. If omitted, the search begins at the end of the string.  |

**Returns:** *number*

___

###  link

▸ **link**(`url`: string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:487

Returns an <a> HTML element and sets the href attribute value

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

###  localeCompare

▸ **localeCompare**(`that`: string): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:434

Determines whether two strings are equivalent in the current locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`that` | string | String to compare to target string  |

**Returns:** *number*

▸ **localeCompare**(`that`: string, `locales?`: string | string[], `options?`: [CollatorOptions](intl.collatoroptions.md)): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4324

Determines whether two strings are equivalent in the current or specified locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`that` | string | String to compare to target string |
`locales?` | string &#124; string[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details. |
`options?` | [CollatorOptions](intl.collatoroptions.md) | An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.  |

**Returns:** *number*

___

###  match

▸ **match**(`regexp`: string | [RegExp](regexp.md)): *[RegExpMatchArray](regexpmatcharray.md) | null*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:440

Matches a string with a regular expression, and returns an array containing the results of that search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`regexp` | string &#124; [RegExp](regexp.md) | A variable name or string literal containing the regular expression pattern and flags.  |

**Returns:** *[RegExpMatchArray](regexpmatcharray.md) | null*

▸ **match**(`matcher`: object): *[RegExpMatchArray](regexpmatcharray.md) | null*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:233

Matches a string an object that supports being matched against, and returns an array containing the results of that search.

**Parameters:**

▪ **matcher**: *object*

An object that supports being matched against.

Name | Type |
------ | ------ |
`[Symbol.match]` |  |

**Returns:** *[RegExpMatchArray](regexpmatcharray.md) | null*

___

###  normalize

▸ **normalize**(`form`: "NFC" | "NFD" | "NFKC" | "NFKD"): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:432

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`form` | "NFC" &#124; "NFD" &#124; "NFKC" &#124; "NFKD" | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC"  |

**Returns:** *string*

▸ **normalize**(`form?`: undefined | string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:440

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`form?` | undefined &#124; string | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC"  |

**Returns:** *string*

___

###  padEnd

▸ **padEnd**(`maxLength`: number, `fillString?`: undefined | string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:46

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maxLength` | number | The length of the resulting string once the current string has been padded.        If this parameter is smaller than the current string's length, the current string will be returned as it is.  |
`fillString?` | undefined &#124; string | The string to pad the current string with.        If this string is too long, it will be truncated and the left-most part will be applied.        The default value for this parameter is " " (U+0020).  |

**Returns:** *string*

___

###  padStart

▸ **padStart**(`maxLength`: number, `fillString?`: undefined | string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:33

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maxLength` | number | The length of the resulting string once the current string has been padded.        If this parameter is smaller than the current string's length, the current string will be returned as it is.  |
`fillString?` | undefined &#124; string | The string to pad the current string with.        If this string is too long, it will be truncated and the left-most part will be applied.        The default value for this parameter is " " (U+0020).  |

**Returns:** *string*

___

###  repeat

▸ **repeat**(`count`: number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:447

Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number | number of copies to append  |

**Returns:** *string*

___

###  replace

▸ **replace**(`searchValue`: string | [RegExp](regexp.md), `replaceValue`: string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:447

Replaces text in a string, using a regular expression or search string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchValue` | string &#124; [RegExp](regexp.md) | A string to search for. |
`replaceValue` | string | A string containing the text to replace for every successful match of searchValue in this string.  |

**Returns:** *string*

▸ **replace**(`searchValue`: string | [RegExp](regexp.md), `replacer`: function): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:454

Replaces text in a string, using a regular expression or search string.

**Parameters:**

▪ **searchValue**: *string | [RegExp](regexp.md)*

A string to search for.

▪ **replacer**: *function*

A function that returns the replacement text.

▸ (`substring`: string, ...`args`: any[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`substring` | string |
`...args` | any[] |

**Returns:** *string*

▸ **replace**(`searchValue`: object, `replaceValue`: string): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:240

Replaces text in a string, using an object that supports replacement within a string.

**Parameters:**

▪ **searchValue**: *object*

A object can search for and replace matches within a string.

Name | Type |
------ | ------ |
`[Symbol.replace]` |  |

▪ **replaceValue**: *string*

A string containing the text to replace for every successful match of searchValue in this string.

**Returns:** *string*

▸ **replace**(`searchValue`: object, `replacer`: function): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:247

Replaces text in a string, using an object that supports replacement within a string.

**Parameters:**

▪ **searchValue**: *object*

A object can search for and replace matches within a string.

Name | Type |
------ | ------ |
`[Symbol.replace]` |  |

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

###  search

▸ **search**(`regexp`: string | [RegExp](regexp.md)): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:460

Finds the first substring match in a regular expression search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`regexp` | string &#124; [RegExp](regexp.md) | The regular expression pattern and applicable flags.  |

**Returns:** *number*

▸ **search**(`searcher`: object): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:253

Finds the first substring match in a regular expression search.

**Parameters:**

▪ **searcher**: *object*

An object which supports searching within a string.

Name | Type |
------ | ------ |
`[Symbol.search]` |  |

**Returns:** *number*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:468

Returns a section of a string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The index to the beginning of the specified portion of stringObj. |
`end?` | undefined &#124; number | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.  |

**Returns:** *string*

___

###  small

▸ **small**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:490

Returns a <small> HTML element

**Returns:** *string*

___

###  split

▸ **split**(`separator`: string | [RegExp](regexp.md), `limit?`: undefined | number): *string[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:475

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator` | string &#124; [RegExp](regexp.md) | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
`limit?` | undefined &#124; number | A value used to limit the number of elements returned in the array.  |

**Returns:** *string[]*

▸ **split**(`splitter`: object, `limit?`: undefined | number): *string[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:260

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

▪ **splitter**: *object*

An object that can split a string.

Name | Type |
------ | ------ |
`[Symbol.split]` |  |

▪`Optional`  **limit**: *undefined | number*

A value used to limit the number of elements returned in the array.

**Returns:** *string[]*

___

###  startsWith

▸ **startsWith**(`searchString`: string, `position?`: undefined | number): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:454

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

**Parameters:**

Name | Type |
------ | ------ |
`searchString` | string |
`position?` | undefined &#124; number |

**Returns:** *boolean*

___

###  strike

▸ **strike**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:493

Returns a <strike> HTML element

**Returns:** *string*

___

###  sub

▸ **sub**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:496

Returns a <sub> HTML element

**Returns:** *string*

___

###  substr

▸ **substr**(`from`: number, `length?`: undefined | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:509

Gets a substring beginning at the specified location and having the specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`from` | number | The starting position of the desired substring. The index of the first character in the string is zero. |
`length?` | undefined &#124; number | The number of characters to include in the returned substring.  |

**Returns:** *string*

___

###  substring

▸ **substring**(`start`: number, `end?`: undefined | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:483

Returns the substring at the specified location within a String object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based index number indicating the beginning of the substring. |
`end?` | undefined &#124; number | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.  |

**Returns:** *string*

___

###  sup

▸ **sup**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:499

Returns a <sup> HTML element

**Returns:** *string*

___

###  toLocaleLowerCase

▸ **toLocaleLowerCase**(`locales?`: string | string[]): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:489

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |

**Returns:** *string*

___

###  toLocaleUpperCase

▸ **toLocaleUpperCase**(`locales?`: string | string[]): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:495

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |

**Returns:** *string*

___

###  toLowerCase

▸ **toLowerCase**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:486

Converts all the alphabetic characters in a string to lowercase.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:396

Returns a string representation of a string.

**Returns:** *string*

___

###  toUpperCase

▸ **toUpperCase**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:492

Converts all the alphabetic characters in a string to uppercase.

**Returns:** *string*

___

###  trim

▸ **trim**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:498

Removes the leading and trailing white space and line terminator characters from a string.

**Returns:** *string*

___

###  trimLeft

▸ **trimLeft**(): *string*

Defined in node_modules/@types/node/globals.d.ts:152

Removes whitespace from the left end of a string.

**Returns:** *string*

___

###  trimRight

▸ **trimRight**(): *string*

Defined in node_modules/@types/node/globals.d.ts:154

Removes whitespace from the right end of a string.

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:512

Returns the primitive value of the specified object.

**Returns:** *string*
