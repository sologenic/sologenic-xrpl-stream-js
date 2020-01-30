[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [SetScriptSourceParameterType](_inspector_.debugger.setscriptsourceparametertype.md)

# Interface: SetScriptSourceParameterType

## Hierarchy

* **SetScriptSourceParameterType**

## Index

### Properties

* [dryRun](_inspector_.debugger.setscriptsourceparametertype.md#optional-dryrun)
* [scriptId](_inspector_.debugger.setscriptsourceparametertype.md#scriptid)
* [scriptSource](_inspector_.debugger.setscriptsourceparametertype.md#scriptsource)

## Properties

### `Optional` dryRun

• **dryRun**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1013

 If true the change will not actually be applied. Dry run may be used to get result description without actually modifying the code.

___

###  scriptId

• **scriptId**: *[ScriptId](../modules/_inspector_.runtime.md#scriptid)*

Defined in node_modules/@types/node/inspector.d.ts:1005

Id of the script to edit.

___

###  scriptSource

• **scriptSource**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1009

New content of the script.
