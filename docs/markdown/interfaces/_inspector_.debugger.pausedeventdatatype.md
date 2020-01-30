[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [PausedEventDataType](_inspector_.debugger.pausedeventdatatype.md)

# Interface: PausedEventDataType

## Hierarchy

* **PausedEventDataType**

## Index

### Properties

* [asyncCallStackTraceId](_inspector_.debugger.pausedeventdatatype.md#optional-asynccallstacktraceid)
* [asyncStackTrace](_inspector_.debugger.pausedeventdatatype.md#optional-asyncstacktrace)
* [asyncStackTraceId](_inspector_.debugger.pausedeventdatatype.md#optional-asyncstacktraceid)
* [callFrames](_inspector_.debugger.pausedeventdatatype.md#callframes)
* [data](_inspector_.debugger.pausedeventdatatype.md#optional-data)
* [hitBreakpoints](_inspector_.debugger.pausedeventdatatype.md#optional-hitbreakpoints)
* [reason](_inspector_.debugger.pausedeventdatatype.md#reason)

## Properties

### `Optional` asyncCallStackTraceId

• **asyncCallStackTraceId**? : *[StackTraceId](_inspector_.runtime.stacktraceid.md)*

Defined in node_modules/@types/node/inspector.d.ts:1393

Just scheduled async call will have this stack trace as parent stack during async execution. This field is available only after <code>Debugger.stepInto</code> call with <code>breakOnAsynCall</code> flag.

**`experimental`** 

___

### `Optional` asyncStackTrace

• **asyncStackTrace**? : *[StackTrace](_inspector_.runtime.stacktrace.md)*

Defined in node_modules/@types/node/inspector.d.ts:1383

Async stack trace, if any.

___

### `Optional` asyncStackTraceId

• **asyncStackTraceId**? : *[StackTraceId](_inspector_.runtime.stacktraceid.md)*

Defined in node_modules/@types/node/inspector.d.ts:1388

Async stack trace, if any.

**`experimental`** 

___

###  callFrames

• **callFrames**: *[CallFrame](_inspector_.debugger.callframe.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:1367

Call stack the virtual machine stopped on.

___

### `Optional` data

• **data**? : *undefined | object*

Defined in node_modules/@types/node/inspector.d.ts:1375

Object containing break-specific auxiliary properties.

___

### `Optional` hitBreakpoints

• **hitBreakpoints**? : *string[]*

Defined in node_modules/@types/node/inspector.d.ts:1379

Hit breakpoints IDs

___

###  reason

• **reason**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1371

Pause reason.
