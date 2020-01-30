[typescript](../README.md) › [Globals](../globals.md) › [Console](console.md)

# Interface: Console

## Hierarchy

* **Console**

## Index

### Properties

* [Console](console.md#console)

### Methods

* [assert](console.md#assert)
* [clear](console.md#clear)
* [count](console.md#count)
* [countReset](console.md#countreset)
* [debug](console.md#debug)
* [dir](console.md#dir)
* [dirxml](console.md#dirxml)
* [error](console.md#error)
* [group](console.md#group)
* [groupCollapsed](console.md#groupcollapsed)
* [groupEnd](console.md#groupend)
* [info](console.md#info)
* [log](console.md#log)
* [markTimeline](console.md#marktimeline)
* [profile](console.md#profile)
* [profileEnd](console.md#profileend)
* [table](console.md#table)
* [time](console.md#time)
* [timeEnd](console.md#timeend)
* [timeLog](console.md#timelog)
* [timeStamp](console.md#timestamp)
* [timeline](console.md#timeline)
* [timelineEnd](console.md#timelineend)
* [trace](console.md#trace)
* [warn](console.md#warn)

## Properties

###  Console

• **Console**: *[ConsoleConstructor](nodejs.consoleconstructor.md)*

Defined in node_modules/@types/node/globals.d.ts:3

## Methods

###  assert

▸ **assert**(`value`: any, `message?`: undefined | string, ...`optionalParams`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:9

A simple assertion test that verifies whether `value` is truthy.
If it is not, an `AssertionError` is thrown.
If provided, the error `message` is formatted using `util.format()` and used as the error message.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`message?` | undefined &#124; string |
`...optionalParams` | any[] |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

Defined in node_modules/@types/node/globals.d.ts:14

When `stdout` is a TTY, calling `console.clear()` will attempt to clear the TTY.
When `stdout` is not a TTY, this method does nothing.

**Returns:** *void*

___

###  count

▸ **count**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:18

Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `console.count()` has been called with the given `label`.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  countReset

▸ **countReset**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:22

Resets the internal counter specific to `label`.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  debug

▸ **debug**(`message?`: any, ...`optionalParams`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:26

The `console.debug()` function is an alias for {@link console.log()}.

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

**Returns:** *void*

___

###  dir

▸ **dir**(`obj`: any, `options?`: [InspectOptions](nodejs.inspectoptions.md)): *void*

Defined in node_modules/@types/node/globals.d.ts:31

Uses {@link util.inspect()} on `obj` and prints the resulting string to `stdout`.
This function bypasses any custom `inspect()` function defined on `obj`.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |
`options?` | [InspectOptions](nodejs.inspectoptions.md) |

**Returns:** *void*

___

###  dirxml

▸ **dirxml**(...`data`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:35

This method calls {@link console.log()} passing it the arguments received. Please note that this method does not produce any XML formatting

**Parameters:**

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** *void*

___

###  error

▸ **error**(`message?`: any, ...`optionalParams`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:39

Prints to `stderr` with newline.

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

**Returns:** *void*

___

###  group

▸ **group**(...`label`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:44

Increases indentation of subsequent lines by two spaces.
If one or more `label`s are provided, those are printed first without the additional indentation.

**Parameters:**

Name | Type |
------ | ------ |
`...label` | any[] |

**Returns:** *void*

___

###  groupCollapsed

▸ **groupCollapsed**(...`label`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:48

The `console.groupCollapsed()` function is an alias for {@link console.group()}.

**Parameters:**

Name | Type |
------ | ------ |
`...label` | any[] |

**Returns:** *void*

___

###  groupEnd

▸ **groupEnd**(): *void*

Defined in node_modules/@types/node/globals.d.ts:52

Decreases indentation of subsequent lines by two spaces.

**Returns:** *void*

___

###  info

▸ **info**(`message?`: any, ...`optionalParams`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:56

The {@link console.info()} function is an alias for {@link console.log()}.

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

**Returns:** *void*

___

###  log

▸ **log**(`message?`: any, ...`optionalParams`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:60

Prints to `stdout` with newline.

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

**Returns:** *void*

___

###  markTimeline

▸ **markTimeline**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:94

This method does not display anything unless used in the inspector.
 The console.markTimeline() method is the deprecated form of console.timeStamp().

**`deprecated`** Use console.timeStamp() instead.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  profile

▸ **profile**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:99

This method does not display anything unless used in the inspector.
 Starts a JavaScript CPU profile with an optional label.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  profileEnd

▸ **profileEnd**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:104

This method does not display anything unless used in the inspector.
 Stops the current JavaScript CPU profiling session if one has been started and prints the report to the Profiles panel of the inspector.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  table

▸ **table**(`tabularData`: any, `properties?`: string[]): *void*

Defined in node_modules/@types/node/globals.d.ts:65

This method does not display anything unless used in the inspector.
 Prints to `stdout` the array `array` formatted as a table.

**Parameters:**

Name | Type |
------ | ------ |
`tabularData` | any |
`properties?` | string[] |

**Returns:** *void*

___

###  time

▸ **time**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:69

Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  timeEnd

▸ **timeEnd**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:73

Stops a timer that was previously started by calling {@link console.time()} and prints the result to `stdout`.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  timeLog

▸ **timeLog**(`label?`: undefined | string, ...`data`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:77

For a timer that was previously started by calling {@link console.time()}, prints the elapsed time and other `data` arguments to `stdout`.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |
`...data` | any[] |

**Returns:** *void*

___

###  timeStamp

▸ **timeStamp**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:109

This method does not display anything unless used in the inspector.
 Adds an event with the label `label` to the Timeline panel of the inspector.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  timeline

▸ **timeline**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:116

This method does not display anything unless used in the inspector.
 The console.timeline() method is the deprecated form of console.time().

**`deprecated`** Use console.time() instead.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  timelineEnd

▸ **timelineEnd**(`label?`: undefined | string): *void*

Defined in node_modules/@types/node/globals.d.ts:123

This method does not display anything unless used in the inspector.
 The console.timelineEnd() method is the deprecated form of console.timeEnd().

**`deprecated`** Use console.timeEnd() instead.

**Parameters:**

Name | Type |
------ | ------ |
`label?` | undefined &#124; string |

**Returns:** *void*

___

###  trace

▸ **trace**(`message?`: any, ...`optionalParams`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:81

Prints to `stderr` the string 'Trace :', followed by the {@link util.format()} formatted message and stack trace to the current position in the code.

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

**Returns:** *void*

___

###  warn

▸ **warn**(`message?`: any, ...`optionalParams`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:85

The {@link console.warn()} function is an alias for {@link console.error()}.

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

**Returns:** *void*
