[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Runtime](../modules/_inspector_.runtime.md) › [PropertyDescriptor](_inspector_.runtime.propertydescriptor.md)

# Interface: PropertyDescriptor

Object property descriptor.

## Hierarchy

* **PropertyDescriptor**

## Index

### Properties

* [configurable](_inspector_.runtime.propertydescriptor.md#configurable)
* [enumerable](_inspector_.runtime.propertydescriptor.md#enumerable)
* [get](_inspector_.runtime.propertydescriptor.md#optional-get)
* [isOwn](_inspector_.runtime.propertydescriptor.md#optional-isown)
* [name](_inspector_.runtime.propertydescriptor.md#name)
* [set](_inspector_.runtime.propertydescriptor.md#optional-set)
* [symbol](_inspector_.runtime.propertydescriptor.md#optional-symbol)
* [value](_inspector_.runtime.propertydescriptor.md#optional-value)
* [wasThrown](_inspector_.runtime.propertydescriptor.md#optional-wasthrown)
* [writable](_inspector_.runtime.propertydescriptor.md#optional-writable)

## Properties

###  configurable

• **configurable**: *boolean*

Defined in node_modules/@types/node/inspector.d.ts:212

True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

___

###  enumerable

• **enumerable**: *boolean*

Defined in node_modules/@types/node/inspector.d.ts:216

True if this property shows up during enumeration of the properties on the corresponding object.

___

### `Optional` get

• **get**? : *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:204

A function which serves as a getter for the property, or <code>undefined</code> if there is no getter (accessor descriptors only).

___

### `Optional` isOwn

• **isOwn**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:224

True if the property is owned for the object.

___

###  name

• **name**: *string*

Defined in node_modules/@types/node/inspector.d.ts:192

Property name or symbol description.

___

### `Optional` set

• **set**? : *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:208

A function which serves as a setter for the property, or <code>undefined</code> if there is no setter (accessor descriptors only).

___

### `Optional` symbol

• **symbol**? : *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:228

Property symbol object, if the property is of the <code>symbol</code> type.

___

### `Optional` value

• **value**? : *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:196

The value associated with the property.

___

### `Optional` wasThrown

• **wasThrown**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:220

True if the result was thrown during the evaluation.

___

### `Optional` writable

• **writable**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:200

True if the value associated with the property may be changed (data descriptors only).
