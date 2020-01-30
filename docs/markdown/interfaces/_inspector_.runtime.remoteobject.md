[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [RemoteObject](_inspector_.runtime.remoteobject.md)

# Interface: RemoteObject

Mirror object referencing original JavaScript object.

## Hierarchy

* **RemoteObject**

## Index

### Properties

* [className](_inspector_.runtime.remoteobject.md#optional-classname)
* [customPreview](_inspector_.runtime.remoteobject.md#optional-custompreview)
* [description](_inspector_.runtime.remoteobject.md#optional-description)
* [objectId](_inspector_.runtime.remoteobject.md#optional-objectid)
* [preview](_inspector_.runtime.remoteobject.md#optional-preview)
* [subtype](_inspector_.runtime.remoteobject.md#optional-subtype)
* [type](_inspector_.runtime.remoteobject.md#type)
* [unserializableValue](_inspector_.runtime.remoteobject.md#optional-unserializablevalue)
* [value](_inspector_.runtime.remoteobject.md#optional-value)

## Properties

### `Optional` className

• **className**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:75

Object class (constructor) name. Specified for <code>object</code> type values only.

___

### `Optional` customPreview

• **customPreview**? : *[CustomPreview](_inspector_.runtime.custompreview.md)*

Defined in node_modules/@types/node/inspector.d.ts:100

**`experimental`** 

___

### `Optional` description

• **description**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:87

String representation of the object.

___

### `Optional` objectId

• **objectId**? : *[RemoteObjectId](../modules/_inspector_.runtime.md#remoteobjectid)*

Defined in node_modules/@types/node/inspector.d.ts:91

Unique object identifier (for non-primitive values).

___

### `Optional` preview

• **preview**? : *[ObjectPreview](_inspector_.runtime.objectpreview.md)*

Defined in node_modules/@types/node/inspector.d.ts:96

Preview containing abbreviated property values. Specified for <code>object</code> type values only.

**`experimental`** 

___

### `Optional` subtype

• **subtype**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:71

Object subtype hint. Specified for <code>object</code> type values only.

___

###  type

• **type**: *string*

Defined in node_modules/@types/node/inspector.d.ts:67

Object type.

___

### `Optional` unserializableValue

• **unserializableValue**? : *[UnserializableValue](../modules/_inspector_.runtime.md#unserializablevalue)*

Defined in node_modules/@types/node/inspector.d.ts:83

Primitive value which can not be JSON-stringified does not have <code>value</code>, but gets this property.

___

### `Optional` value

• **value**? : *any*

Defined in node_modules/@types/node/inspector.d.ts:79

Remote object value in case of primitive values or JSON values (if it was requested).
