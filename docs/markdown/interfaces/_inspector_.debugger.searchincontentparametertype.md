[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [SearchInContentParameterType](_inspector_.debugger.searchincontentparametertype.md)

# Interface: SearchInContentParameterType

## Hierarchy

* **SearchInContentParameterType**

## Index

### Properties

* [caseSensitive](_inspector_.debugger.searchincontentparametertype.md#optional-casesensitive)
* [isRegex](_inspector_.debugger.searchincontentparametertype.md#optional-isregex)
* [query](_inspector_.debugger.searchincontentparametertype.md#query)
* [scriptId](_inspector_.debugger.searchincontentparametertype.md#scriptid)

## Properties

### `Optional` caseSensitive

• **caseSensitive**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:994

If true, search is case sensitive.

___

### `Optional` isRegex

• **isRegex**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:998

If true, treats string parameter as regex.

___

###  query

• **query**: *string*

Defined in node_modules/@types/node/inspector.d.ts:990

String to search for.

___

###  scriptId

• **scriptId**: *[ScriptId](../modules/_inspector_.runtime.md#scriptid)*

Defined in node_modules/@types/node/inspector.d.ts:986

Id of the script to search in.
