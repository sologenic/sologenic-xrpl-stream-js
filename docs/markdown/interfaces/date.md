[typescript](../README.md) › [Globals](../globals.md) › [Date](date.md)

# Interface: Date

Enables basic storage and retrieval of dates and times.

## Hierarchy

* **Date**

## Index

### Methods

* [[Symbol.toPrimitive]](date.md#[symbol.toprimitive])
* [getDate](date.md#getdate)
* [getDay](date.md#getday)
* [getFullYear](date.md#getfullyear)
* [getHours](date.md#gethours)
* [getMilliseconds](date.md#getmilliseconds)
* [getMinutes](date.md#getminutes)
* [getMonth](date.md#getmonth)
* [getSeconds](date.md#getseconds)
* [getTime](date.md#gettime)
* [getTimezoneOffset](date.md#gettimezoneoffset)
* [getUTCDate](date.md#getutcdate)
* [getUTCDay](date.md#getutcday)
* [getUTCFullYear](date.md#getutcfullyear)
* [getUTCHours](date.md#getutchours)
* [getUTCMilliseconds](date.md#getutcmilliseconds)
* [getUTCMinutes](date.md#getutcminutes)
* [getUTCMonth](date.md#getutcmonth)
* [getUTCSeconds](date.md#getutcseconds)
* [setDate](date.md#setdate)
* [setFullYear](date.md#setfullyear)
* [setHours](date.md#sethours)
* [setMilliseconds](date.md#setmilliseconds)
* [setMinutes](date.md#setminutes)
* [setMonth](date.md#setmonth)
* [setSeconds](date.md#setseconds)
* [setTime](date.md#settime)
* [setUTCDate](date.md#setutcdate)
* [setUTCFullYear](date.md#setutcfullyear)
* [setUTCHours](date.md#setutchours)
* [setUTCMilliseconds](date.md#setutcmilliseconds)
* [setUTCMinutes](date.md#setutcminutes)
* [setUTCMonth](date.md#setutcmonth)
* [setUTCSeconds](date.md#setutcseconds)
* [toDateString](date.md#todatestring)
* [toISOString](date.md#toisostring)
* [toJSON](date.md#tojson)
* [toLocaleDateString](date.md#tolocaledatestring)
* [toLocaleString](date.md#tolocalestring)
* [toLocaleTimeString](date.md#tolocaletimestring)
* [toString](date.md#tostring)
* [toTimeString](date.md#totimestring)
* [toUTCString](date.md#toutcstring)
* [valueOf](date.md#valueof)

## Methods

###  [Symbol.toPrimitive]

▸ **[Symbol.toPrimitive]**(`hint`: "default"): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:109

Converts a Date object to a string.

**Parameters:**

Name | Type |
------ | ------ |
`hint` | "default" |

**Returns:** *string*

▸ **[Symbol.toPrimitive]**(`hint`: "string"): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:113

Converts a Date object to a string.

**Parameters:**

Name | Type |
------ | ------ |
`hint` | "string" |

**Returns:** *string*

▸ **[Symbol.toPrimitive]**(`hint`: "number"): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:117

Converts a Date object to a number.

**Parameters:**

Name | Type |
------ | ------ |
`hint` | "number" |

**Returns:** *number*

▸ **[Symbol.toPrimitive]**(`hint`: string): *string | number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:126

Converts a Date object to a string or number.

**`throws`** {TypeError} If 'hint' was given something other than "number", "string", or "default".

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hint` | string | The strings "number", "string", or "default" to specify what primitive to return.  |

**Returns:** *string | number*

A number if 'hint' was "number", a string if 'hint' was "string" or "default".

___

###  getDate

▸ **getDate**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:755

Gets the day-of-the-month, using local time.

**Returns:** *number*

___

###  getDay

▸ **getDay**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:759

Gets the day of the week, using local time.

**Returns:** *number*

___

###  getFullYear

▸ **getFullYear**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:747

Gets the year, using local time.

**Returns:** *number*

___

###  getHours

▸ **getHours**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:763

Gets the hours in a date, using local time.

**Returns:** *number*

___

###  getMilliseconds

▸ **getMilliseconds**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:775

Gets the milliseconds of a Date, using local time.

**Returns:** *number*

___

###  getMinutes

▸ **getMinutes**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:767

Gets the minutes of a Date object, using local time.

**Returns:** *number*

___

###  getMonth

▸ **getMonth**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:751

Gets the month, using local time.

**Returns:** *number*

___

###  getSeconds

▸ **getSeconds**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:771

Gets the seconds of a Date object, using local time.

**Returns:** *number*

___

###  getTime

▸ **getTime**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:745

Gets the time value in milliseconds.

**Returns:** *number*

___

###  getTimezoneOffset

▸ **getTimezoneOffset**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:779

Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCDate

▸ **getUTCDate**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:757

Gets the day-of-the-month, using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCDay

▸ **getUTCDay**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:761

Gets the day of the week using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCFullYear

▸ **getUTCFullYear**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:749

Gets the year using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCHours

▸ **getUTCHours**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:765

Gets the hours value in a Date object using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCMilliseconds

▸ **getUTCMilliseconds**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:777

Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCMinutes

▸ **getUTCMinutes**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:769

Gets the minutes of a Date object using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCMonth

▸ **getUTCMonth**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:753

Gets the month of a Date object using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  getUTCSeconds

▸ **getUTCSeconds**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:773

Gets the seconds of a Date object using Universal Coordinated Time (UTC).

**Returns:** *number*

___

###  setDate

▸ **setDate**(`date`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:842

Sets the numeric day-of-the-month value of the Date object using local time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | number | A numeric value equal to the day of the month.  |

**Returns:** *number*

___

###  setFullYear

▸ **setFullYear**(`year`: number, `month?`: undefined | number, `date?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:866

Sets the year of the Date object using local time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`year` | number | A numeric value for the year. |
`month?` | undefined &#124; number | A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified. |
`date?` | undefined &#124; number | A numeric value equal for the day of the month.  |

**Returns:** *number*

___

###  setHours

▸ **setHours**(`hours`: number, `min?`: undefined | number, `sec?`: undefined | number, `ms?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:829

Sets the hour value in the Date object using local time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hours` | number | A numeric value equal to the hours value. |
`min?` | undefined &#124; number | A numeric value equal to the minutes value. |
`sec?` | undefined &#124; number | A numeric value equal to the seconds value. |
`ms?` | undefined &#124; number | A numeric value equal to the milliseconds value.  |

**Returns:** *number*

___

###  setMilliseconds

▸ **setMilliseconds**(`ms`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:789

Sets the milliseconds value in the Date object using local time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ms` | number | A numeric value equal to the millisecond value.  |

**Returns:** *number*

___

###  setMinutes

▸ **setMinutes**(`min`: number, `sec?`: undefined | number, `ms?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:814

Sets the minutes value in the Date object using local time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`min` | number | A numeric value equal to the minutes value. |
`sec?` | undefined &#124; number | A numeric value equal to the seconds value. |
`ms?` | undefined &#124; number | A numeric value equal to the milliseconds value.  |

**Returns:** *number*

___

###  setMonth

▸ **setMonth**(`month`: number, `date?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:853

Sets the month value in the Date object using local time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`month` | number | A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
`date?` | undefined &#124; number | A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.  |

**Returns:** *number*

___

###  setSeconds

▸ **setSeconds**(`sec`: number, `ms?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:801

Sets the seconds value in the Date object using local time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sec` | number | A numeric value equal to the seconds value. |
`ms?` | undefined &#124; number | A numeric value equal to the milliseconds value.  |

**Returns:** *number*

___

###  setTime

▸ **setTime**(`time`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:784

Sets the date and time value in the Date object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | number | A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.  |

**Returns:** *number*

___

###  setUTCDate

▸ **setUTCDate**(`date`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:847

Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | number | A numeric value equal to the day of the month.  |

**Returns:** *number*

___

###  setUTCFullYear

▸ **setUTCFullYear**(`year`: number, `month?`: undefined | number, `date?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:873

Sets the year value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`year` | number | A numeric value equal to the year. |
`month?` | undefined &#124; number | A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied. |
`date?` | undefined &#124; number | A numeric value equal to the day of the month.  |

**Returns:** *number*

___

###  setUTCHours

▸ **setUTCHours**(`hours`: number, `min?`: undefined | number, `sec?`: undefined | number, `ms?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:837

Sets the hours value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hours` | number | A numeric value equal to the hours value. |
`min?` | undefined &#124; number | A numeric value equal to the minutes value. |
`sec?` | undefined &#124; number | A numeric value equal to the seconds value. |
`ms?` | undefined &#124; number | A numeric value equal to the milliseconds value.  |

**Returns:** *number*

___

###  setUTCMilliseconds

▸ **setUTCMilliseconds**(`ms`: number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:794

Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ms` | number | A numeric value equal to the millisecond value.  |

**Returns:** *number*

___

###  setUTCMinutes

▸ **setUTCMinutes**(`min`: number, `sec?`: undefined | number, `ms?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:821

Sets the minutes value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`min` | number | A numeric value equal to the minutes value. |
`sec?` | undefined &#124; number | A numeric value equal to the seconds value. |
`ms?` | undefined &#124; number | A numeric value equal to the milliseconds value.  |

**Returns:** *number*

___

###  setUTCMonth

▸ **setUTCMonth**(`month`: number, `date?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:859

Sets the month value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`month` | number | A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. |
`date?` | undefined &#124; number | A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.  |

**Returns:** *number*

___

###  setUTCSeconds

▸ **setUTCSeconds**(`sec`: number, `ms?`: undefined | number): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:807

Sets the seconds value in the Date object using Universal Coordinated Time (UTC).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sec` | number | A numeric value equal to the seconds value. |
`ms?` | undefined &#124; number | A numeric value equal to the milliseconds value.  |

**Returns:** *number*

___

###  toDateString

▸ **toDateString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:733

Returns a date as a string value.

**Returns:** *string*

___

###  toISOString

▸ **toISOString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:877

Returns a date as a string value in ISO format.

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(`key?`: any): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:879

Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.

**Parameters:**

Name | Type |
------ | ------ |
`key?` | any |

**Returns:** *string*

___

###  toLocaleDateString

▸ **toLocaleDateString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:739

Returns a date as a string value appropriate to the host environment's current locale.

**Returns:** *string*

▸ **toLocaleDateString**(`locales?`: string | string[], `options?`: [DateTimeFormatOptions](intl.datetimeformatoptions.md)): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4348

Converts a date to a string by using the current or specified locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`locales?` | string &#124; string[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
`options?` | [DateTimeFormatOptions](intl.datetimeformatoptions.md) | An object that contains one or more properties that specify comparison options.  |

**Returns:** *string*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:737

Returns a value as a string value appropriate to the host environment's current locale.

**Returns:** *string*

▸ **toLocaleString**(`locales?`: string | string[], `options?`: [DateTimeFormatOptions](intl.datetimeformatoptions.md)): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4342

Converts a date and time to a string by using the current or specified locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`locales?` | string &#124; string[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
`options?` | [DateTimeFormatOptions](intl.datetimeformatoptions.md) | An object that contains one or more properties that specify comparison options.  |

**Returns:** *string*

___

###  toLocaleTimeString

▸ **toLocaleTimeString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:741

Returns a time as a string value appropriate to the host environment's current locale.

**Returns:** *string*

▸ **toLocaleTimeString**(`locales?`: string | string[], `options?`: [DateTimeFormatOptions](intl.datetimeformatoptions.md)): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4355

Converts a time to a string by using the current or specified locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`locales?` | string &#124; string[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
`options?` | [DateTimeFormatOptions](intl.datetimeformatoptions.md) | An object that contains one or more properties that specify comparison options.  |

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:731

Returns a string representation of a date. The format of the string depends on the locale.

**Returns:** *string*

___

###  toTimeString

▸ **toTimeString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:735

Returns a time as a string value.

**Returns:** *string*

___

###  toUTCString

▸ **toUTCString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:875

Returns a date converted to a string using Universal Coordinated Time (UTC).

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:743

Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

**Returns:** *number*
