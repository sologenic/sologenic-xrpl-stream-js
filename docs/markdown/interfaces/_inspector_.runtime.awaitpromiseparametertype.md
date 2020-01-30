[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [AwaitPromiseParameterType](_inspector_.runtime.awaitpromiseparametertype.md)

# Interface: AwaitPromiseParameterType

## Hierarchy

* **AwaitPromiseParameterType**

## Index

### Properties

* [generatePreview](_inspector_.runtime.awaitpromiseparametertype.md#optional-generatepreview)
* [promiseObjectId](_inspector_.runtime.awaitpromiseparametertype.md#promiseobjectid)
* [returnByValue](_inspector_.runtime.awaitpromiseparametertype.md#optional-returnbyvalue)

## Properties

### `Optional` generatePreview

• **generatePreview**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:453

Whether preview should be generated for the result.

___

###  promiseObjectId

• **promiseObjectId**: *[RemoteObjectId](../modules/_inspector_.runtime.md#remoteobjectid)*

Defined in node_modules/@types/node/inspector.d.ts:445

Identifier of the promise.

___

### `Optional` returnByValue

• **returnByValue**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:449

Whether the result is expected to be a JSON object that should be sent by value.
