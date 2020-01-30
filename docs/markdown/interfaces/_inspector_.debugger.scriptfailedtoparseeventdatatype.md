[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [ScriptFailedToParseEventDataType](_inspector_.debugger.scriptfailedtoparseeventdatatype.md)

# Interface: ScriptFailedToParseEventDataType

## Hierarchy

* **ScriptFailedToParseEventDataType**

## Index

### Properties

* [endColumn](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#endcolumn)
* [endLine](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#endline)
* [executionContextAuxData](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#optional-executioncontextauxdata)
* [executionContextId](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#executioncontextid)
* [hasSourceURL](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#optional-hassourceurl)
* [hash](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#hash)
* [isModule](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#optional-ismodule)
* [length](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#optional-length)
* [scriptId](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#scriptid)
* [sourceMapURL](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#optional-sourcemapurl)
* [stackTrace](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#optional-stacktrace)
* [startColumn](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#startcolumn)
* [startLine](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#startline)
* [url](_inspector_.debugger.scriptfailedtoparseeventdatatype.md#url)

## Properties

###  endColumn

• **endColumn**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1316

Length of the last line of the script.

___

###  endLine

• **endLine**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1312

Last line of the script.

___

### `Optional` executionContextAuxData

• **executionContextAuxData**? : *undefined | object*

Defined in node_modules/@types/node/inspector.d.ts:1328

Embedder-specific auxiliary data.

___

###  executionContextId

• **executionContextId**: *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:1320

Specifies script creation context.

___

### `Optional` hasSourceURL

• **hasSourceURL**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1336

True, if this script has sourceURL.

___

###  hash

• **hash**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1324

Content hash of the script.

___

### `Optional` isModule

• **isModule**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1340

True, if this script is ES6 module.

___

### `Optional` length

• **length**? : *undefined | number*

Defined in node_modules/@types/node/inspector.d.ts:1344

This script length.

___

###  scriptId

• **scriptId**: *[ScriptId](../modules/_inspector_.runtime.md#scriptid)*

Defined in node_modules/@types/node/inspector.d.ts:1296

Identifier of the script parsed.

___

### `Optional` sourceMapURL

• **sourceMapURL**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:1332

URL of source map associated with script (if any).

___

### `Optional` stackTrace

• **stackTrace**? : *[StackTrace](_inspector_.runtime.stacktrace.md)*

Defined in node_modules/@types/node/inspector.d.ts:1349

JavaScript top stack frame of where the script parsed event was triggered if available.

**`experimental`** 

___

###  startColumn

• **startColumn**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1308

Column offset of the script within the resource with given URL.

___

###  startLine

• **startLine**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1304

Line offset of the script within the resource with given URL (for script tags).

___

###  url

• **url**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1300

URL or name of the script parsed (if any).
