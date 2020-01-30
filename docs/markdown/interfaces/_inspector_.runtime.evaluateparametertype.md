[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [EvaluateParameterType](_inspector_.runtime.evaluateparametertype.md)

# Interface: EvaluateParameterType

## Hierarchy

* **EvaluateParameterType**

## Index

### Properties

* [awaitPromise](_inspector_.runtime.evaluateparametertype.md#optional-awaitpromise)
* [contextId](_inspector_.runtime.evaluateparametertype.md#optional-contextid)
* [expression](_inspector_.runtime.evaluateparametertype.md#expression)
* [generatePreview](_inspector_.runtime.evaluateparametertype.md#optional-generatepreview)
* [includeCommandLineAPI](_inspector_.runtime.evaluateparametertype.md#optional-includecommandlineapi)
* [objectGroup](_inspector_.runtime.evaluateparametertype.md#optional-objectgroup)
* [returnByValue](_inspector_.runtime.evaluateparametertype.md#optional-returnbyvalue)
* [silent](_inspector_.runtime.evaluateparametertype.md#optional-silent)
* [userGesture](_inspector_.runtime.evaluateparametertype.md#optional-usergesture)

## Properties

### `Optional` awaitPromise

• **awaitPromise**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:438

Whether execution should <code>await</code> for resulting value and return once awaited promise is resolved.

___

### `Optional` contextId

• **contextId**? : *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:421

Specifies in which execution context to perform evaluation. If the parameter is omitted the evaluation will be performed in the context of the inspected page.

___

###  expression

• **expression**: *string*

Defined in node_modules/@types/node/inspector.d.ts:405

Expression to evaluate.

___

### `Optional` generatePreview

• **generatePreview**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:430

Whether preview should be generated for the result.

**`experimental`** 

___

### `Optional` includeCommandLineAPI

• **includeCommandLineAPI**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:413

Determines whether Command Line API should be available during the evaluation.

___

### `Optional` objectGroup

• **objectGroup**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:409

Symbolic group name that can be used to release multiple objects.

___

### `Optional` returnByValue

• **returnByValue**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:425

Whether the result is expected to be a JSON object that should be sent by value.

___

### `Optional` silent

• **silent**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:417

In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state.

___

### `Optional` userGesture

• **userGesture**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:434

Whether execution should be treated as initiated by user in the UI.
