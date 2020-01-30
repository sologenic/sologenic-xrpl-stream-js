[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [CallFunctionOnParameterType](_inspector_.runtime.callfunctiononparametertype.md)

# Interface: CallFunctionOnParameterType

## Hierarchy

* **CallFunctionOnParameterType**

## Index

### Properties

* [arguments](_inspector_.runtime.callfunctiononparametertype.md#optional-arguments)
* [awaitPromise](_inspector_.runtime.callfunctiononparametertype.md#optional-awaitpromise)
* [executionContextId](_inspector_.runtime.callfunctiononparametertype.md#optional-executioncontextid)
* [functionDeclaration](_inspector_.runtime.callfunctiononparametertype.md#functiondeclaration)
* [generatePreview](_inspector_.runtime.callfunctiononparametertype.md#optional-generatepreview)
* [objectGroup](_inspector_.runtime.callfunctiononparametertype.md#optional-objectgroup)
* [objectId](_inspector_.runtime.callfunctiononparametertype.md#optional-objectid)
* [returnByValue](_inspector_.runtime.callfunctiononparametertype.md#optional-returnbyvalue)
* [silent](_inspector_.runtime.callfunctiononparametertype.md#optional-silent)
* [userGesture](_inspector_.runtime.callfunctiononparametertype.md#optional-usergesture)

## Properties

### `Optional` arguments

• **arguments**? : *[CallArgument](_inspector_.runtime.callargument.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:468

Call arguments. All call arguments must belong to the same JavaScript world as the target object.

___

### `Optional` awaitPromise

• **awaitPromise**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:489

Whether execution should <code>await</code> for resulting value and return once awaited promise is resolved.

___

### `Optional` executionContextId

• **executionContextId**? : *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:493

Specifies execution context which global object will be used to call function on. Either executionContextId or objectId should be specified.

___

###  functionDeclaration

• **functionDeclaration**: *string*

Defined in node_modules/@types/node/inspector.d.ts:460

Declaration of the function to call.

___

### `Optional` generatePreview

• **generatePreview**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:481

Whether preview should be generated for the result.

**`experimental`** 

___

### `Optional` objectGroup

• **objectGroup**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:497

Symbolic group name that can be used to release multiple objects. If objectGroup is not specified and objectId is, objectGroup will be inherited from object.

___

### `Optional` objectId

• **objectId**? : *[RemoteObjectId](../modules/_inspector_.runtime.md#remoteobjectid)*

Defined in node_modules/@types/node/inspector.d.ts:464

Identifier of the object to call function on. Either objectId or executionContextId should be specified.

___

### `Optional` returnByValue

• **returnByValue**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:476

Whether the result is expected to be a JSON object which should be sent by value.

___

### `Optional` silent

• **silent**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:472

In silent mode exceptions thrown during evaluation are not reported and do not pause execution. Overrides <code>setPauseOnException</code> state.

___

### `Optional` userGesture

• **userGesture**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:485

Whether execution should be treated as initiated by user in the UI.
