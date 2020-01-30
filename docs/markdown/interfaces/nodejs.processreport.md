[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [ProcessReport](nodejs.processreport.md)

# Interface: ProcessReport

## Hierarchy

* **ProcessReport**

## Index

### Properties

* [directory](nodejs.processreport.md#directory)
* [filename](nodejs.processreport.md#filename)
* [reportOnFatalError](nodejs.processreport.md#reportonfatalerror)
* [reportOnSignal](nodejs.processreport.md#reportonsignal)
* [reportOnUncaughtException](nodejs.processreport.md#reportonuncaughtexception)
* [signal](nodejs.processreport.md#signal)

### Methods

* [getReport](nodejs.processreport.md#getreport)
* [writeReport](nodejs.processreport.md#writereport)

## Properties

###  directory

• **directory**: *string*

Defined in node_modules/@types/node/globals.d.ts:746

Directory where the report is written.
working directory of the Node.js process.

**`default`** '' indicating that reports are written to the current

___

###  filename

• **filename**: *string*

Defined in node_modules/@types/node/globals.d.ts:754

Filename where the report is written.
The default value is the empty string.

**`default`** '' the output filename will be comprised of a timestamp,
PID, and sequence number.

___

###  reportOnFatalError

• **reportOnFatalError**: *boolean*

Defined in node_modules/@types/node/globals.d.ts:767

If true, a diagnostic report is generated on fatal errors,
such as out of memory errors or failed C++ assertions.

**`default`** false

___

###  reportOnSignal

• **reportOnSignal**: *boolean*

Defined in node_modules/@types/node/globals.d.ts:774

If true, a diagnostic report is generated when the process
receives the signal specified by process.report.signal.

**`defaul`** false

___

###  reportOnUncaughtException

• **reportOnUncaughtException**: *boolean*

Defined in node_modules/@types/node/globals.d.ts:780

If true, a diagnostic report is generated on uncaught exception.

**`default`** false

___

###  signal

• **signal**: *[Signals](../modules/nodejs.md#signals)*

Defined in node_modules/@types/node/globals.d.ts:786

The signal used to trigger the creation of a diagnostic report.

**`default`** 'SIGUSR2'

## Methods

###  getReport

▸ **getReport**(`err?`: [Error](error.md)): *string*

Defined in node_modules/@types/node/globals.d.ts:760

Returns a JSON-formatted diagnostic report for the running process.
The report's JavaScript stack trace is taken from err, if present.

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](error.md) |

**Returns:** *string*

___

###  writeReport

▸ **writeReport**(`fileName?`: undefined | string): *string*

Defined in node_modules/@types/node/globals.d.ts:800

Writes a diagnostic report to a file. If filename is not provided, the default filename
includes the date, time, PID, and a sequence number.
The report's JavaScript stack trace is taken from err, if present.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileName?` | undefined &#124; string | Name of the file where the report is written. This should be a relative path, that will be appended to the directory specified in `process.report.directory`, or the current working directory of the Node.js process, if unspecified. |

**Returns:** *string*

Filename of the generated report.

▸ **writeReport**(`error?`: [Error](error.md)): *string*

Defined in node_modules/@types/node/globals.d.ts:801

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](error.md) |

**Returns:** *string*

▸ **writeReport**(`fileName?`: undefined | string, `err?`: [Error](error.md)): *string*

Defined in node_modules/@types/node/globals.d.ts:802

**Parameters:**

Name | Type |
------ | ------ |
`fileName?` | undefined &#124; string |
`err?` | [Error](error.md) |

**Returns:** *string*
