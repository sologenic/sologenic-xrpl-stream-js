[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [StackTrace](_inspector_.runtime.stacktrace.md)

# Interface: StackTrace

Call frames for assertions or error messages.

## Hierarchy

* **StackTrace**

## Index

### Properties

* [callFrames](_inspector_.runtime.stacktrace.md#callframes)
* [description](_inspector_.runtime.stacktrace.md#optional-description)
* [parent](_inspector_.runtime.stacktrace.md#optional-parent)
* [parentId](_inspector_.runtime.stacktrace.md#optional-parentid)

## Properties

###  callFrames

• **callFrames**: *[CallFrame](_inspector_.runtime.callframe.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:374

JavaScript function name.

___

### `Optional` description

• **description**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:370

String label of this stack trace. For async traces this may be a name of the function that initiated the async call.

___

### `Optional` parent

• **parent**? : *[StackTrace](_inspector_.runtime.stacktrace.md)*

Defined in node_modules/@types/node/inspector.d.ts:378

Asynchronous JavaScript stack trace that preceded this stack, if available.

___

### `Optional` parentId

• **parentId**? : *[StackTraceId](_inspector_.runtime.stacktraceid.md)*

Defined in node_modules/@types/node/inspector.d.ts:383

Asynchronous JavaScript stack trace that preceded this stack, if available.

**`experimental`**
