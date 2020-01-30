[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [ConsoleAPICalledEventDataType](_inspector_.runtime.consoleapicalledeventdatatype.md)

# Interface: ConsoleAPICalledEventDataType

## Hierarchy

* **ConsoleAPICalledEventDataType**

## Index

### Properties

* [args](_inspector_.runtime.consoleapicalledeventdatatype.md#args)
* [context](_inspector_.runtime.consoleapicalledeventdatatype.md#optional-context)
* [executionContextId](_inspector_.runtime.consoleapicalledeventdatatype.md#executioncontextid)
* [stackTrace](_inspector_.runtime.consoleapicalledeventdatatype.md#optional-stacktrace)
* [timestamp](_inspector_.runtime.consoleapicalledeventdatatype.md#timestamp)
* [type](_inspector_.runtime.consoleapicalledeventdatatype.md#type)

## Properties

###  args

• **args**: *[RemoteObject](_inspector_.runtime.remoteobject.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:729

Call arguments.

___

### `Optional` context

• **context**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:746

Console context descriptor for calls on non-default console context (not console.*): 'anonymous#unique-logger-id' for call on unnamed context, 'name#unique-logger-id' for call on named context.

**`experimental`** 

___

###  executionContextId

• **executionContextId**: *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:733

Identifier of the context where the call was made.

___

### `Optional` stackTrace

• **stackTrace**? : *[StackTrace](_inspector_.runtime.stacktrace.md)*

Defined in node_modules/@types/node/inspector.d.ts:741

Stack trace captured when the call was made.

___

###  timestamp

• **timestamp**: *[Timestamp](../modules/_inspector_.runtime.md#timestamp)*

Defined in node_modules/@types/node/inspector.d.ts:737

Call timestamp.

___

###  type

• **type**: *string*

Defined in node_modules/@types/node/inspector.d.ts:725

Type of the call.
