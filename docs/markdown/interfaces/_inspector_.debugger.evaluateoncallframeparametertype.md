[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [EvaluateOnCallFrameParameterType](_inspector_.debugger.evaluateoncallframeparametertype.md)

# Interface: EvaluateOnCallFrameParameterType

## Hierarchy

* **EvaluateOnCallFrameParameterType**

## Index

### Properties

* [callFrameId](_inspector_.debugger.evaluateoncallframeparametertype.md#callframeid)
* [expression](_inspector_.debugger.evaluateoncallframeparametertype.md#expression)
* [generatePreview](_inspector_.debugger.evaluateoncallframeparametertype.md#optional-generatepreview)
* [includeCommandLineAPI](_inspector_.debugger.evaluateoncallframeparametertype.md#optional-includecommandlineapi)
* [objectGroup](_inspector_.debugger.evaluateoncallframeparametertype.md#optional-objectgroup)
* [returnByValue](_inspector_.debugger.evaluateoncallframeparametertype.md#optional-returnbyvalue)
* [silent](_inspector_.debugger.evaluateoncallframeparametertype.md#optional-silent)
* [throwOnSideEffect](_inspector_.debugger.evaluateoncallframeparametertype.md#optional-throwonsideeffect)

## Properties

###  callFrameId

• **callFrameId**: *[CallFrameId](../modules/_inspector_.debugger.md#callframeid)*

Defined in node_modules/@types/node/inspector.d.ts:1041

Call frame identifier to evaluate on.

___

###  expression

• **expression**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1045

Expression to evaluate.

___

### `Optional` generatePreview

• **generatePreview**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1066

Whether preview should be generated for the result.

**`experimental`** 

___

### `Optional` includeCommandLineAPI

• **includeCommandLineAPI**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1053

Specifies whether command line API should be available to the evaluated expression, defaults to false.

___

### `Optional` objectGroup

• **objectGroup**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:1049

String object group name to put result into (allows rapid releasing resulting object handles using <code>releaseObjectGroup</code>).

___

### `Optional` returnByValue

• **returnByValue**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1061

Whether the result is expected to be a JSON object that should be sent by value.

___

### `Optional` silent

• **silent**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1057

In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state.

___

### `Optional` throwOnSideEffect

• **throwOnSideEffect**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1070

Whether to throw an exception if side effect cannot be ruled out during evaluation.
