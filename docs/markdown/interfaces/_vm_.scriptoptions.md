[typescript](../README.md) › [Globals](../globals.md) › ["vm"](../modules/_vm_.md) › [ScriptOptions](_vm_.scriptoptions.md)

# Interface: ScriptOptions

## Hierarchy

* [BaseOptions](_vm_.baseoptions.md)

  ↳ **ScriptOptions**

## Index

### Properties

* [cachedData](_vm_.scriptoptions.md#optional-cacheddata)
* [columnOffset](_vm_.scriptoptions.md#optional-columnoffset)
* [displayErrors](_vm_.scriptoptions.md#optional-displayerrors)
* [filename](_vm_.scriptoptions.md#optional-filename)
* [lineOffset](_vm_.scriptoptions.md#optional-lineoffset)
* [produceCachedData](_vm_.scriptoptions.md#optional-producecacheddata)
* [timeout](_vm_.scriptoptions.md#optional-timeout)

## Properties

### `Optional` cachedData

• **cachedData**? : *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/vm.d.ts:25

___

### `Optional` columnOffset

• **columnOffset**? : *undefined | number*

*Inherited from [BaseOptions](_vm_.baseoptions.md).[columnOffset](_vm_.baseoptions.md#optional-columnoffset)*

Defined in node_modules/@types/node/vm.d.ts:20

Specifies the column number offset that is displayed in stack traces produced by this script.
Default: `0`

___

### `Optional` displayErrors

• **displayErrors**? : *undefined | false | true*

Defined in node_modules/@types/node/vm.d.ts:23

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

### `Optional` produceCachedData

• **produceCachedData**? : *undefined | false | true*

Defined in node_modules/@types/node/vm.d.ts:26

___

### `Optional` timeout

• **timeout**? : *undefined | number*

Defined in node_modules/@types/node/vm.d.ts:24
