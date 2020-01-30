[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [Scope](_inspector_.debugger.scope.md)

# Interface: Scope

Scope description.

## Hierarchy

* **Scope**

## Index

### Properties

* [endLocation](_inspector_.debugger.scope.md#optional-endlocation)
* [name](_inspector_.debugger.scope.md#optional-name)
* [object](_inspector_.debugger.scope.md#object)
* [startLocation](_inspector_.debugger.scope.md#optional-startlocation)
* [type](_inspector_.debugger.scope.md#type)

## Properties

### `Optional` endLocation

• **endLocation**? : *[Location](_inspector_.debugger.location.md)*

Defined in node_modules/@types/node/inspector.d.ts:851

Location in the source code where scope ends

___

### `Optional` name

• **name**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:843

___

###  object

• **object**: *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:842

Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties.

___

### `Optional` startLocation

• **startLocation**? : *[Location](_inspector_.debugger.location.md)*

Defined in node_modules/@types/node/inspector.d.ts:847

Location in the source code where scope starts

___

###  type

• **type**: *string*

Defined in node_modules/@types/node/inspector.d.ts:838

Scope type.
