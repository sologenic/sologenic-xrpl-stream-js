[typescript](../README.md) › [Globals](../globals.md) › ["vm"](../modules/_vm_.md) › [CompileFunctionOptions](_vm_.compilefunctionoptions.md)

# Interface: CompileFunctionOptions

## Hierarchy

* [BaseOptions](_vm_.baseoptions.md)

  ↳ **CompileFunctionOptions**

## Index

### Properties

* [cachedData](_vm_.compilefunctionoptions.md#optional-cacheddata)
* [columnOffset](_vm_.compilefunctionoptions.md#optional-columnoffset)
* [contextExtensions](_vm_.compilefunctionoptions.md#optional-contextextensions)
* [filename](_vm_.compilefunctionoptions.md#optional-filename)
* [lineOffset](_vm_.compilefunctionoptions.md#optional-lineoffset)
* [parsingContext](_vm_.compilefunctionoptions.md#optional-parsingcontext)
* [produceCachedData](_vm_.compilefunctionoptions.md#optional-producecacheddata)

## Properties

### `Optional` cachedData

• **cachedData**? : *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/vm.d.ts:51

Provides an optional data with V8's code cache data for the supplied source.

___

### `Optional` columnOffset

• **columnOffset**? : *undefined | number*

*Inherited from [BaseOptions](_vm_.baseoptions.md).[columnOffset](_vm_.baseoptions.md#optional-columnoffset)*

Defined in node_modules/@types/node/vm.d.ts:20

Specifies the column number offset that is displayed in stack traces produced by this script.
Default: `0`

___

### `Optional` contextExtensions

• **contextExtensions**? : *[Object](object.md)[]*

Defined in node_modules/@types/node/vm.d.ts:65

An array containing a collection of context extensions (objects wrapping the current scope) to be applied while compiling

___

### `Optional` filename

• **filename**? : *undefined | string*

*Inherited from [BaseOptions](_vm_.baseoptions.md).[filename](_vm_.baseoptions.md#optional-filename)*

Defined in node_modules/@types/node/vm.d.ts:10

Specifies the filename used in stack traces produced by this script.
Default: `''`.

___

### `Optional` lineOffset

• **lineOffset**? : *undefined | number*

*Inherited from [BaseOptions](_vm_.baseoptions.md).[lineOffset](_vm_.baseoptions.md#optional-lineoffset)*

Defined in node_modules/@types/node/vm.d.ts:15

Specifies the line number offset that is displayed in stack traces produced by this script.
Default: `0`.

___

### `Optional` parsingContext

• **parsingContext**? : *[Context](_vm_.context.md)*

Defined in node_modules/@types/node/vm.d.ts:60

The sandbox/context in which the said function should be compiled in.

___

### `Optional` produceCachedData

• **produceCachedData**? : *undefined | false | true*

Defined in node_modules/@types/node/vm.d.ts:56

Specifies whether to produce new cache data.
Default: `false`,
