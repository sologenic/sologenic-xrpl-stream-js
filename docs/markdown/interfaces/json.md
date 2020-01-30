[typescript](../README.md) › [Globals](../globals.md) › [JSON](json.md)

# Interface: JSON

## Hierarchy

* **JSON**

## Index

### Properties

* [[Symbol.toStringTag]](json.md#[symbol.tostringtag])

### Methods

* [parse](json.md#parse)
* [stringify](json.md#stringify)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:146

## Methods

###  parse

▸ **parse**(`text`: string, `reviver?`: undefined | function): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1059

Converts a JavaScript Object Notation (JSON) string into an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | A valid JSON string. |
`reviver?` | undefined &#124; function | A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.  |

**Returns:** *any*

___

###  stringify

▸ **stringify**(`value`: any, `replacer?`: undefined | function, `space?`: string | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1066

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | A JavaScript value, usually an object or array, to be converted. |
`replacer?` | undefined &#124; function | A function that transforms the results. |
`space?` | string &#124; number | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.  |

**Returns:** *string*

▸ **stringify**(`value`: any, `replacer?`: string | number[] | null, `space?`: string | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1073

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | A JavaScript value, usually an object or array, to be converted. |
`replacer?` | string &#124; number[] &#124; null | An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified. |
`space?` | string &#124; number | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.  |

**Returns:** *string*
