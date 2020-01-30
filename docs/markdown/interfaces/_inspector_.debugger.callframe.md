[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [CallFrame](_inspector_.debugger.callframe.md)

# Interface: CallFrame

JavaScript call frame. Array of call frames form the call stack.

## Hierarchy

* **CallFrame**

## Index

### Properties

* [callFrameId](_inspector_.debugger.callframe.md#callframeid)
* [functionLocation](_inspector_.debugger.callframe.md#optional-functionlocation)
* [functionName](_inspector_.debugger.callframe.md#functionname)
* [location](_inspector_.debugger.callframe.md#location)
* [returnValue](_inspector_.debugger.callframe.md#optional-returnvalue)
* [scopeChain](_inspector_.debugger.callframe.md#scopechain)
* [this](_inspector_.debugger.callframe.md#this)
* [url](_inspector_.debugger.callframe.md#url)

## Properties

###  callFrameId

• **callFrameId**: *[CallFrameId](../modules/_inspector_.debugger.md#callframeid)*

Defined in node_modules/@types/node/inspector.d.ts:800

Call frame identifier. This identifier is only valid while the virtual machine is paused.

___

### `Optional` functionLocation

• **functionLocation**? : *[Location](_inspector_.debugger.location.md)*

Defined in node_modules/@types/node/inspector.d.ts:808

Location in the source code.

___

###  functionName

• **functionName**: *string*

Defined in node_modules/@types/node/inspector.d.ts:804

Name of the JavaScript function called on this call frame.

___

###  location

• **location**: *[Location](_inspector_.debugger.location.md)*

Defined in node_modules/@types/node/inspector.d.ts:812

Location in the source code.

___

### `Optional` returnValue

• **returnValue**? : *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:828

The value being returned, if the function is at return point.

___

###  scopeChain

• **scopeChain**: *[Scope](_inspector_.debugger.scope.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:820

Scope chain for this call frame.

___

###  this

• **this**: *[RemoteObject](_inspector_.runtime.remoteobject.md)*

Defined in node_modules/@types/node/inspector.d.ts:824

<code>this</code> object for this call frame.

___

###  url

• **url**: *string*

Defined in node_modules/@types/node/inspector.d.ts:816

JavaScript script name or url.
