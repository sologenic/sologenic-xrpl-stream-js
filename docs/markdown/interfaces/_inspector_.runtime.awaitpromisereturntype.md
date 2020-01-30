[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [AwaitPromiseReturnType](_inspector_.runtime.awaitpromisereturntype.md)

# Interface: AwaitPromiseReturnType

## Hierarchy

* **AwaitPromiseReturnType**

## Index

### Properties

* [exceptionDetails](_inspector_.runtime.awaitpromisereturntype.md#optional-exceptiondetails)
* [result](_inspector_.runtime.awaitpromisereturntype.md#result)

## Properties

### `Optional` exceptionDetails

• **exceptionDetails**? : *[ExceptionDetails](_inspector_.runtime.exceptiondetails.md)*

Defined in node_modules/@types/node/inspector.d.ts:626

Exception details if stack strace is available.

___

###  result

• **result**: *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:622

Promise result. Will contain rejected value if promise was rejected.
