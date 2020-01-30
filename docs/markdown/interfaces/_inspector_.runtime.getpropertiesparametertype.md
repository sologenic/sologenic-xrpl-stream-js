[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [GetPropertiesParameterType](_inspector_.runtime.getpropertiesparametertype.md)

# Interface: GetPropertiesParameterType

## Hierarchy

* **GetPropertiesParameterType**

## Index

### Properties

* [accessorPropertiesOnly](_inspector_.runtime.getpropertiesparametertype.md#optional-accessorpropertiesonly)
* [generatePreview](_inspector_.runtime.getpropertiesparametertype.md#optional-generatepreview)
* [objectId](_inspector_.runtime.getpropertiesparametertype.md#objectid)
* [ownProperties](_inspector_.runtime.getpropertiesparametertype.md#optional-ownproperties)

## Properties

### `Optional` accessorPropertiesOnly

• **accessorPropertiesOnly**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:513

If true, returns accessor properties (with getter/setter) only; internal properties are not returned either.

**`experimental`** 

___

### `Optional` generatePreview

• **generatePreview**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:518

Whether preview should be generated for the results.

**`experimental`** 

___

###  objectId

• **objectId**: *[RemoteObjectId](../modules/_inspector_.runtime.md#remoteobjectid)*

Defined in node_modules/@types/node/inspector.d.ts:504

Identifier of the object to return properties for.

___

### `Optional` ownProperties

• **ownProperties**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:508

If true, returns properties belonging only to the element itself, not to its prototype chain.
