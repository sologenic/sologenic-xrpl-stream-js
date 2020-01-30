[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [Location](_inspector_.debugger.location.md)

# Interface: Location

Location in the source code.

## Hierarchy

* **Location**

## Index

### Properties

* [columnNumber](_inspector_.debugger.location.md#optional-columnnumber)
* [lineNumber](_inspector_.debugger.location.md#linenumber)
* [scriptId](_inspector_.debugger.location.md#scriptid)

## Properties

### `Optional` columnNumber

• **columnNumber**? : *undefined | number*

Defined in node_modules/@types/node/inspector.d.ts:781

Column number in the script (0-based).

___

###  lineNumber

• **lineNumber**: *number*

Defined in node_modules/@types/node/inspector.d.ts:777

Line number in the script (0-based).

___

###  scriptId

• **scriptId**: *[ScriptId](../modules/_inspector_.runtime.md#scriptid)*

Defined in node_modules/@types/node/inspector.d.ts:773

Script identifier as reported in the <code>Debugger.scriptParsed</code>.
