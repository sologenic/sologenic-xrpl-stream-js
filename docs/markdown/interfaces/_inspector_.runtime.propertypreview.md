[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [PropertyPreview](_inspector_.runtime.propertypreview.md)

# Interface: PropertyPreview

**`experimental`** 

## Hierarchy

* **PropertyPreview**

## Index

### Properties

* [name](_inspector_.runtime.propertypreview.md#name)
* [subtype](_inspector_.runtime.propertypreview.md#optional-subtype)
* [type](_inspector_.runtime.propertypreview.md#type)
* [value](_inspector_.runtime.propertypreview.md#optional-value)
* [valuePreview](_inspector_.runtime.propertypreview.md#optional-valuepreview)

## Properties

###  name

• **name**: *string*

Defined in node_modules/@types/node/inspector.d.ts:152

Property name.

___

### `Optional` subtype

• **subtype**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:168

Object subtype hint. Specified for <code>object</code> type values only.

___

###  type

• **type**: *string*

Defined in node_modules/@types/node/inspector.d.ts:156

Object type. Accessor means that the property itself is an accessor property.

___

### `Optional` value

• **value**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:160

User-friendly property value string.

___

### `Optional` valuePreview

• **valuePreview**? : *[ObjectPreview](_inspector_.runtime.objectpreview.md)*

Defined in node_modules/@types/node/inspector.d.ts:164

Nested value preview.
