[typescript](../README.md) › [Globals](../globals.md) › ["path"](_path_.md) › [posix](_path_.posix.md)

# Module: posix

## Index

### Variables

* [delimiter](_path_.posix.md#const-delimiter)
* [sep](_path_.posix.md#const-sep)

### Functions

* [basename](_path_.posix.md#basename)
* [dirname](_path_.posix.md#dirname)
* [extname](_path_.posix.md#extname)
* [format](_path_.posix.md#format)
* [isAbsolute](_path_.posix.md#isabsolute)
* [join](_path_.posix.md#join)
* [normalize](_path_.posix.md#normalize)
* [parse](_path_.posix.md#parse)
* [relative](_path_.posix.md#relative)
* [resolve](_path_.posix.md#resolve)

## Variables

### `Const` delimiter

• **delimiter**: *string*

Defined in node_modules/@types/node/path.d.ts:140

___

### `Const` sep

• **sep**: *string*

Defined in node_modules/@types/node/path.d.ts:139

## Functions

###  basename

▸ **basename**(`p`: string, `ext?`: undefined | string): *string*

Defined in node_modules/@types/node/path.d.ts:137

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |
`ext?` | undefined &#124; string |

**Returns:** *string*

___

###  dirname

▸ **dirname**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:136

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *string*

___

###  extname

▸ **extname**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:138

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *string*

___

###  format

▸ **format**(`pP`: [FormatInputPathObject](../interfaces/_path_.formatinputpathobject.md)): *string*

Defined in node_modules/@types/node/path.d.ts:142

**Parameters:**

Name | Type |
------ | ------ |
`pP` | [FormatInputPathObject](../interfaces/_path_.formatinputpathobject.md) |

**Returns:** *string*

___

###  isAbsolute

▸ **isAbsolute**(`p`: string): *boolean*

Defined in node_modules/@types/node/path.d.ts:134

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *boolean*

___

###  join

▸ **join**(...`paths`: string[]): *string*

Defined in node_modules/@types/node/path.d.ts:132

**Parameters:**

Name | Type |
------ | ------ |
`...paths` | string[] |

**Returns:** *string*

___

###  normalize

▸ **normalize**(`p`: string): *string*

Defined in node_modules/@types/node/path.d.ts:131

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *string*

___

###  parse

▸ **parse**(`p`: string): *[ParsedPath](../interfaces/_path_.parsedpath.md)*

Defined in node_modules/@types/node/path.d.ts:141

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *[ParsedPath](../interfaces/_path_.parsedpath.md)*

___

###  relative

▸ **relative**(`from`: string, `to`: string): *string*

Defined in node_modules/@types/node/path.d.ts:135

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |
`to` | string |

**Returns:** *string*

___

###  resolve

▸ **resolve**(...`pathSegments`: string[]): *string*

Defined in node_modules/@types/node/path.d.ts:133

**Parameters:**

Name | Type |
------ | ------ |
`...pathSegments` | string[] |

**Returns:** *string*
