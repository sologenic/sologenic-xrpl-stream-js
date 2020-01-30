[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [ScriptParsedEventDataType](_inspector_.debugger.scriptparsedeventdatatype.md)

# Interface: ScriptParsedEventDataType

## Hierarchy

* **ScriptParsedEventDataType**

## Index

### Properties

* [endColumn](_inspector_.debugger.scriptparsedeventdatatype.md#endcolumn)
* [endLine](_inspector_.debugger.scriptparsedeventdatatype.md#endline)
* [executionContextAuxData](_inspector_.debugger.scriptparsedeventdatatype.md#optional-executioncontextauxdata)
* [executionContextId](_inspector_.debugger.scriptparsedeventdatatype.md#executioncontextid)
* [hasSourceURL](_inspector_.debugger.scriptparsedeventdatatype.md#optional-hassourceurl)
* [hash](_inspector_.debugger.scriptparsedeventdatatype.md#hash)
* [isLiveEdit](_inspector_.debugger.scriptparsedeventdatatype.md#optional-isliveedit)
* [isModule](_inspector_.debugger.scriptparsedeventdatatype.md#optional-ismodule)
* [length](_inspector_.debugger.scriptparsedeventdatatype.md#optional-length)
* [scriptId](_inspector_.debugger.scriptparsedeventdatatype.md#scriptid)
* [sourceMapURL](_inspector_.debugger.scriptparsedeventdatatype.md#optional-sourcemapurl)
* [stackTrace](_inspector_.debugger.scriptparsedeventdatatype.md#optional-stacktrace)
* [startColumn](_inspector_.debugger.scriptparsedeventdatatype.md#startcolumn)
* [startLine](_inspector_.debugger.scriptparsedeventdatatype.md#startline)
* [url](_inspector_.debugger.scriptparsedeventdatatype.md#url)

## Properties

###  endColumn

• **endColumn**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1251

Length of the last line of the script.

___

###  endLine

• **endLine**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1247

Last line of the script.

___

### `Optional` executionContextAuxData

• **executionContextAuxData**? : *undefined | object*

Defined in node_modules/@types/node/inspector.d.ts:1263

Embedder-specific auxiliary data.

___

###  executionContextId

• **executionContextId**: *[ExecutionContextId](../modules/_inspector_.runtime.md#executioncontextid)*

Defined in node_modules/@types/node/inspector.d.ts:1255

Specifies script creation context.

___

### `Optional` hasSourceURL

• **hasSourceURL**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1276

True, if this script has sourceURL.

___

###  hash

• **hash**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1259

Content hash of the script.

___

### `Optional` isLiveEdit

• **isLiveEdit**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1268

True, if this script is generated as a result of the live edit operation.

**`experimental`** 

___

### `Optional` isModule

• **isModule**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:1280

True, if this script is ES6 module.

___

### `Optional` length

• **length**? : *undefined | number*

Defined in node_modules/@types/node/inspector.d.ts:1284

This script length.

___

###  scriptId

• **scriptId**: *[ScriptId](../modules/_inspector_.runtime.md#scriptid)*

Defined in node_modules/@types/node/inspector.d.ts:1231

Identifier of the script parsed.

___

### `Optional` sourceMapURL

• **sourceMapURL**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:1272

URL of source map associated with script (if any).

___

### `Optional` stackTrace

• **stackTrace**? : *[StackTrace](_inspector_.runtime.stacktrace.md)*

Defined in node_modules/@types/node/inspector.d.ts:1289

JavaScript top stack frame of where the script parsed event was triggered if available.

**`experimental`** 

___

###  startColumn

• **startColumn**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1243

Column offset of the script within the resource with given URL.

___

###  startLine

• **startLine**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1239

Line offset of the script within the resource with given URL (for script tags).

___

###  url

• **url**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1235

URL or name of the script parsed (if any).
