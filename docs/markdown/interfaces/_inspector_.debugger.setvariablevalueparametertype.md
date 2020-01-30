[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [SetVariableValueParameterType](_inspector_.debugger.setvariablevalueparametertype.md)

# Interface: SetVariableValueParameterType

## Hierarchy

* **SetVariableValueParameterType**

## Index

### Properties

* [callFrameId](_inspector_.debugger.setvariablevalueparametertype.md#callframeid)
* [newValue](_inspector_.debugger.setvariablevalueparametertype.md#newvalue)
* [scopeNumber](_inspector_.debugger.setvariablevalueparametertype.md#scopenumber)
* [variableName](_inspector_.debugger.setvariablevalueparametertype.md#variablename)

## Properties

###  callFrameId

• **callFrameId**: *[CallFrameId](../modules/_inspector_.debugger.md#callframeid)*

Defined in node_modules/@types/node/inspector.d.ts:1089

Id of callframe that holds variable.

___

###  newValue

• **newValue**: *[CallArgument](_inspector_.runtime.callargument.md)*

Defined in node_modules/@types/node/inspector.d.ts:1085

New variable value.

___

###  scopeNumber

• **scopeNumber**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1077

0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch' scope types are allowed. Other scopes could be manipulated manually.

___

###  variableName

• **variableName**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1081

Variable name.
