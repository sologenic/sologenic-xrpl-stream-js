[typescript](../README.md) › [Globals](../globals.md) › [Number](number.md)

# Interface: Number

## Hierarchy

* **Number**

## Index

### Methods

* [toExponential](number.md#toexponential)
* [toFixed](number.md#tofixed)
* [toLocaleString](number.md#tolocalestring)
* [toPrecision](number.md#toprecision)
* [toString](number.md#tostring)
* [valueOf](number.md#valueof)

## Methods

###  toExponential

▸ **toExponential**(`fractionDigits?`: undefined | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:559

Returns a string containing a number represented in exponential notation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fractionDigits?` | undefined &#124; number | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.  |

**Returns:** *string*

___

###  toFixed

▸ **toFixed**(`fractionDigits?`: undefined | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:553

Returns a string representing a number in fixed-point notation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fractionDigits?` | undefined &#124; number | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.  |

**Returns:** *string*

___

###  toLocaleString

▸ **toLocaleString**(`locales?`: string | string[], `options?`: [NumberFormatOptions](intl.numberformatoptions.md)): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4333

Converts a number to a string by using the current or specified locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`locales?` | string &#124; string[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
`options?` | [NumberFormatOptions](intl.numberformatoptions.md) | An object that contains one or more properties that specify comparison options.  |

**Returns:** *string*

___

###  toPrecision

▸ **toPrecision**(`precision?`: undefined | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:565

Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`precision?` | undefined &#124; number | Number of significant digits. Must be in the range 1 - 21, inclusive.  |

**Returns:** *string*

___

###  toString

▸ **toString**(`radix?`: undefined | number): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:547

Returns a string representation of an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`radix?` | undefined &#124; number | Specifies a radix for converting numeric values to strings. This value is only used for numbers.  |

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:568

Returns the primitive value of the specified object.

**Returns:** *number*
