[typescript](../README.md) › [Globals](../globals.md) › ["url"](_url_.md)

# Module: "url"

## Index

### Classes

* [URL](../classes/_url_.url.md)
* [URLSearchParams](../classes/_url_.urlsearchparams.md)

### Interfaces

* [URLFormatOptions](../interfaces/_url_.urlformatoptions.md)
* [Url](../interfaces/_url_.url-1.md)
* [UrlObject](../interfaces/_url_.urlobject.md)
* [UrlObjectCommon](../interfaces/_url_.urlobjectcommon.md)
* [UrlWithParsedQuery](../interfaces/_url_.urlwithparsedquery.md)
* [UrlWithStringQuery](../interfaces/_url_.urlwithstringquery.md)

### Functions

* [domainToASCII](_url_.md#domaintoascii)
* [domainToUnicode](_url_.md#domaintounicode)
* [fileURLToPath](_url_.md#fileurltopath)
* [format](_url_.md#format)
* [parse](_url_.md#parse)
* [pathToFileURL](_url_.md#pathtofileurl)
* [resolve](_url_.md#resolve)

## Functions

###  domainToASCII

▸ **domainToASCII**(`domain`: string): *string*

Defined in node_modules/@types/node/url.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`domain` | string |

**Returns:** *string*

___

###  domainToUnicode

▸ **domainToUnicode**(`domain`: string): *string*

Defined in node_modules/@types/node/url.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`domain` | string |

**Returns:** *string*

___

###  fileURLToPath

▸ **fileURLToPath**(`url`: string | [URL](../classes/_url_.url.md)): *string*

Defined in node_modules/@types/node/url.d.ts:54

This function ensures the correct decodings of percent-encoded characters as
well as ensuring a cross-platform valid absolute path string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string &#124; [URL](../classes/_url_.url.md) | The file URL string or URL object to convert to a path.  |

**Returns:** *string*

___

###  format

▸ **format**(`URL`: [URL](../classes/_url_.url.md), `options?`: [URLFormatOptions](../interfaces/_url_.urlformatoptions.md)): *string*

Defined in node_modules/@types/node/url.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`URL` | [URL](../classes/_url_.url.md) |
`options?` | [URLFormatOptions](../interfaces/_url_.urlformatoptions.md) |

**Returns:** *string*

▸ **format**(`urlObject`: [UrlObject](../interfaces/_url_.urlobject.md) | string): *string*

Defined in node_modules/@types/node/url.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`urlObject` | [UrlObject](../interfaces/_url_.urlobject.md) &#124; string |

**Returns:** *string*

___

###  parse

▸ **parse**(`urlStr`: string): *[UrlWithStringQuery](../interfaces/_url_.urlwithstringquery.md)*

Defined in node_modules/@types/node/url.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`urlStr` | string |

**Returns:** *[UrlWithStringQuery](../interfaces/_url_.urlwithstringquery.md)*

▸ **parse**(`urlStr`: string, `parseQueryString`: false | undefined, `slashesDenoteHost?`: undefined | false | true): *[UrlWithStringQuery](../interfaces/_url_.urlwithstringquery.md)*

Defined in node_modules/@types/node/url.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`urlStr` | string |
`parseQueryString` | false &#124; undefined |
`slashesDenoteHost?` | undefined &#124; false &#124; true |

**Returns:** *[UrlWithStringQuery](../interfaces/_url_.urlwithstringquery.md)*

▸ **parse**(`urlStr`: string, `parseQueryString`: true, `slashesDenoteHost?`: undefined | false | true): *[UrlWithParsedQuery](../interfaces/_url_.urlwithparsedquery.md)*

Defined in node_modules/@types/node/url.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`urlStr` | string |
`parseQueryString` | true |
`slashesDenoteHost?` | undefined &#124; false &#124; true |

**Returns:** *[UrlWithParsedQuery](../interfaces/_url_.urlwithparsedquery.md)*

▸ **parse**(`urlStr`: string, `parseQueryString`: boolean, `slashesDenoteHost?`: undefined | false | true): *[Url](../interfaces/_url_.url-1.md)*

Defined in node_modules/@types/node/url.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`urlStr` | string |
`parseQueryString` | boolean |
`slashesDenoteHost?` | undefined &#124; false &#124; true |

**Returns:** *[Url](../interfaces/_url_.url-1.md)*

___

###  pathToFileURL

▸ **pathToFileURL**(`url`: string): *[URL](../classes/_url_.url.md)*

Defined in node_modules/@types/node/url.d.ts:61

This function ensures that path is resolved absolutely, and that the URL
control characters are correctly encoded when converting into a File URL.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | The path to convert to a File URL.  |

**Returns:** *[URL](../classes/_url_.url.md)*

___

###  resolve

▸ **resolve**(`from`: string, `to`: string): *string*

Defined in node_modules/@types/node/url.d.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |
`to` | string |

**Returns:** *string*
