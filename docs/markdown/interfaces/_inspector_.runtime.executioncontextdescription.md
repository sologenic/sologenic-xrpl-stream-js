[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [ExecutionContextDescription](_inspector_.runtime.executioncontextdescription.md)

# Interface: ExecutionContextDescription

Description of an isolated world.

## Hierarchy

* **ExecutionContextDescription**

## Index

### Properties

* [auxData](_inspector_.runtime.executioncontextdescription.md#optional-auxdata)
* [id](_inspector_.runtime.executioncontextdescription.md#id)
* [name](_inspector_.runtime.executioncontextdescription.md#name)
* [origin](_inspector_.runtime.executioncontextdescription.md#origin)

## Properties

### `Optional` auxData

• **auxData**? : *undefined | object*

Defined in node_modules/@types/node/inspector.d.ts:287

Embedder-specific auxiliary data.

___

###  id

• **id**: *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:275

Unique id of the execution context. It can be used to specify in which execution context script evaluation should be performed.

___

###  name

• **name**: *string*

Defined in node_modules/@types/node/inspector.d.ts:283

Human readable name describing given context.

___

###  origin

• **origin**: *string*

Defined in node_modules/@types/node/inspector.d.ts:279

Execution context origin.
