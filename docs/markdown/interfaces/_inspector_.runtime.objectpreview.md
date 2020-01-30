[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [ObjectPreview](_inspector_.runtime.objectpreview.md)

# Interface: ObjectPreview

Object containing abbreviated remote object value.

**`experimental`** 

## Hierarchy

* **ObjectPreview**

## Index

### Properties

* [description](_inspector_.runtime.objectpreview.md#optional-description)
* [entries](_inspector_.runtime.objectpreview.md#optional-entries)
* [overflow](_inspector_.runtime.objectpreview.md#overflow)
* [properties](_inspector_.runtime.objectpreview.md#properties)
* [subtype](_inspector_.runtime.objectpreview.md#optional-subtype)
* [type](_inspector_.runtime.objectpreview.md#type)

## Properties

### `Optional` description

• **description**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:130

String representation of the object.

___

### `Optional` entries

• **entries**? : *[EntryPreview](_inspector_.runtime.entrypreview.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:142

List of the entries. Specified for <code>map</code> and <code>set</code> subtype values only.

___

###  overflow

• **overflow**: *boolean*

Defined in node_modules/@types/node/inspector.d.ts:134

True iff some of the properties or entries of the original object did not fit.

___

###  properties

• **properties**: *[PropertyPreview](_inspector_.runtime.propertypreview.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:138

List of the properties.

___

### `Optional` subtype

• **subtype**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:126

Object subtype hint. Specified for <code>object</code> type values only.

___

###  type

• **type**: *string*

Defined in node_modules/@types/node/inspector.d.ts:122

Object type.
