[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [CallArgument](_inspector_.runtime.callargument.md)

# Interface: CallArgument

Represents function call argument. Either remote object id <code>objectId</code>, primitive <code>value</code>, unserializable primitive value or neither of (for undefined) them should be specified.

## Hierarchy

* **CallArgument**

## Index

### Properties

* [objectId](_inspector_.runtime.callargument.md#optional-objectid)
* [unserializableValue](_inspector_.runtime.callargument.md#optional-unserializablevalue)
* [value](_inspector_.runtime.callargument.md#optional-value)

## Properties

### `Optional` objectId

• **objectId**? : *[RemoteObjectId](../modules/_inspector_.runtime.md#remoteobjectid)*

Defined in node_modules/@types/node/inspector.d.ts:260

Remote object handle.

___

### `Optional` unserializableValue

• **unserializableValue**? : *[UnserializableValue](../modules/_inspector_.runtime.md#unserializablevalue)*

Defined in node_modules/@types/node/inspector.d.ts:256

Primitive value which can not be JSON-stringified.

___

### `Optional` value

• **value**? : *any*

Defined in node_modules/@types/node/inspector.d.ts:252

Primitive value or serializable javascript object.
