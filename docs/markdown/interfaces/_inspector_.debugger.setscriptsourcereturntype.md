[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [SetScriptSourceReturnType](_inspector_.debugger.setscriptsourcereturntype.md)

# Interface: SetScriptSourceReturnType

## Hierarchy

* **SetScriptSourceReturnType**

## Index

### Properties

* [asyncStackTrace](_inspector_.debugger.setscriptsourcereturntype.md#optional-asyncstacktrace)
* [asyncStackTraceId](_inspector_.debugger.setscriptsourcereturntype.md#optional-asyncstacktraceid)
* [callFrames](_inspector_.debugger.setscriptsourcereturntype.md#optional-callframes)
* [exceptionDetails](_inspector_.debugger.setscriptsourcereturntype.md#optional-exceptiondetails)
* [stackChanged](_inspector_.debugger.setscriptsourcereturntype.md#optional-stackchanged)

## Properties

### `Optional` asyncStackTrace

• **asyncStackTrace**? : *[StackTrace](_inspector_.runtime.stacktrace.md)*

Defined in node_modules/@types/node/inspector.d.ts:1181

Async stack trace, if any.

___

### `Optional` asyncStackTraceId

• **asyncStackTraceId**? : *[StackTraceId](_inspector_.runtime.stacktraceid.md)*

Defined in node_modules/@types/node/inspector.d.ts:1186

Async stack trace, if any.

**`experimental`** 

___

### `Optional` callFrames

• **callFrames**? : *[CallFrame](_inspector_.debugger.callframe.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:1173

New stack trace in case editing has happened while VM was stopped.

___

### `Optional` exceptionDetails

• **exceptionDetails**? : *[ExceptionDetails](_inspector_.runtime.exceptiondetails.md)*

Defined in node_modules/@types/node/inspector.d.ts:1190

Exception details if any.

___

### `Optional` stackChanged

• **stackChanged**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1177

Whether current call stack  was modified after applying the changes.
