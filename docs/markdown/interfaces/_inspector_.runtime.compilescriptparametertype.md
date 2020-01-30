[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [CompileScriptParameterType](_inspector_.runtime.compilescriptparametertype.md)

# Interface: CompileScriptParameterType

## Hierarchy

* **CompileScriptParameterType**

## Index

### Properties

* [executionContextId](_inspector_.runtime.compilescriptparametertype.md#optional-executioncontextid)
* [expression](_inspector_.runtime.compilescriptparametertype.md#expression)
* [persistScript](_inspector_.runtime.compilescriptparametertype.md#persistscript)
* [sourceURL](_inspector_.runtime.compilescriptparametertype.md#sourceurl)

## Properties

### `Optional` executionContextId

• **executionContextId**? : *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:555

Specifies in which execution context to perform script run. If the parameter is omitted the evaluation will be performed in the context of the inspected page.

___

###  expression

• **expression**: *string*

Defined in node_modules/@types/node/inspector.d.ts:543

Expression to compile.

___

###  persistScript

• **persistScript**: *boolean*

Defined in node_modules/@types/node/inspector.d.ts:551

Specifies whether the compiled script should be persisted.

___

###  sourceURL

• **sourceURL**: *string*

Defined in node_modules/@types/node/inspector.d.ts:547

Source url to be set for the script.
