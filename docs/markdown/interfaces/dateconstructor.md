[typescript](../README.md) › [Globals](../globals.md) › [DateConstructor](dateconstructor.md)

# Interface: DateConstructor

## Hierarchy

* **DateConstructor**

## Callable

▸ (): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:885

**Returns:** *string*

## Index

### Constructors

* [constructor](dateconstructor.md#constructor)

### Properties

* [prototype](dateconstructor.md#prototype)

### Methods

* [UTC](dateconstructor.md#utc)
* [now](dateconstructor.md#now)
* [parse](dateconstructor.md#parse)

## Constructors

###  constructor

\+ **new DateConstructor**(): *[Date](date.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:882

**Returns:** *[Date](date.md)*

\+ **new DateConstructor**(`value`: number | string): *[Date](date.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:883

**Parameters:**

Name | Type |
------ | ------ |
`value` | number &#124; string |

**Returns:** *[Date](date.md)*

\+ **new DateConstructor**(`year`: number, `month`: number, `date?`: undefined | number, `hours?`: undefined | number, `minutes?`: undefined | number, `seconds?`: undefined | number, `ms?`: undefined | number): *[Date](date.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:884

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |
`month` | number |
`date?` | undefined &#124; number |
`hours?` | undefined &#124; number |
`minutes?` | undefined &#124; number |
`seconds?` | undefined &#124; number |
`ms?` | undefined &#124; number |

**Returns:** *[Date](date.md)*

\+ **new DateConstructor**(`value`: number | string | [Date](date.md)): *[Date](date.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`value` | number &#124; string &#124; [Date](date.md) |

**Returns:** *[Date](date.md)*

## Properties

###  prototype

• **prototype**: *[Date](date.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:887

## Methods

###  UTC

▸ **UTC**(`year`: number, `month`: number, `date?`: undefined | number, `hours?`: undefined | number, `minutes?`: undefined | number, `seconds?`: undefined | number, `ms?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:903

Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`year` | number | The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year. |
`month` | number | The month as a number between 0 and 11 (January to December). |
`date?` | undefined &#124; number | The date as a number between 1 and 31. |
`hours?` | undefined &#124; number | Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour. |
`minutes?` | undefined &#124; number | Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes. |
`seconds?` | undefined &#124; number | Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds. |
`ms?` | undefined &#124; number | A number from 0 to 999 that specifies the milliseconds.  |

**Returns:** *number*

___

###  now

▸ **now**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:904

**Returns:** *number*

___

###  parse

▸ **parse**(`s`: string): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:892

Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`s` | string | A date string  |

**Returns:** *number*
