[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [SetBreakpointByUrlParameterType](_inspector_.debugger.setbreakpointbyurlparametertype.md)

# Interface: SetBreakpointByUrlParameterType

## Hierarchy

* **SetBreakpointByUrlParameterType**

## Index

### Properties

* [columnNumber](_inspector_.debugger.setbreakpointbyurlparametertype.md#optional-columnnumber)
* [condition](_inspector_.debugger.setbreakpointbyurlparametertype.md#optional-condition)
* [lineNumber](_inspector_.debugger.setbreakpointbyurlparametertype.md#linenumber)
* [scriptHash](_inspector_.debugger.setbreakpointbyurlparametertype.md#optional-scripthash)
* [url](_inspector_.debugger.setbreakpointbyurlparametertype.md#optional-url)
* [urlRegex](_inspector_.debugger.setbreakpointbyurlparametertype.md#optional-urlregex)

## Properties

### `Optional` columnNumber

• **columnNumber**? : *undefined | number*

Defined in node_modules/@types/node/inspector.d.ts:918

Offset in the line to set breakpoint at.

___

### `Optional` condition

• **condition**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:922

Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.

___

###  lineNumber

• **lineNumber**: *number*

Defined in node_modules/@types/node/inspector.d.ts:902

Line number to set breakpoint at.

___

### `Optional` scriptHash

• **scriptHash**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:914

Script hash of the resources to set breakpoint on.

___

### `Optional` url

• **url**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:906

URL of the resources to set breakpoint on.

___

### `Optional` urlRegex

• **urlRegex**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:910

Regex pattern for the URLs of the resources to set breakpoints on. Either <code>url</code> or <code>urlRegex</code> must be specified.
