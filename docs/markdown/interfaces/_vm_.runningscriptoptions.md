[typescript](../README.md) › [Globals](../globals.md) › ["vm"](../modules/_vm_.md) › [RunningScriptOptions](_vm_.runningscriptoptions.md)

# Interface: RunningScriptOptions

## Hierarchy

* [BaseOptions](_vm_.baseoptions.md)

  ↳ **RunningScriptOptions**

## Index

### Properties

* [breakOnSigint](_vm_.runningscriptoptions.md#optional-breakonsigint)
* [columnOffset](_vm_.runningscriptoptions.md#optional-columnoffset)
* [displayErrors](_vm_.runningscriptoptions.md#optional-displayerrors)
* [filename](_vm_.runningscriptoptions.md#optional-filename)
* [lineOffset](_vm_.runningscriptoptions.md#optional-lineoffset)
* [timeout](_vm_.runningscriptoptions.md#optional-timeout)

## Properties

### `Optional` breakOnSigint

• **breakOnSigint**? : *undefined | false | true*

Defined in node_modules/@types/node/vm.d.ts:45

If `true`, the execution will be terminated when `SIGINT` (Ctrl+C) is received.
Existing handlers for the event that have been attached via `process.on('SIGINT')` will be disabled during script execution, but will continue to work after that.
If execution is terminated, an `Error` will be thrown.
Default: `false`.

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

Defined in node_modules/@types/node/vm.d.ts:33

When `true`, if an `Error` occurs while compiling the `code`, the line of code causing the error is attached to the stack trace.
Default: `true`.

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

### `Optional` timeout

• **timeout**? : *undefined | number*

Defined in node_modules/@types/node/vm.d.ts:38

Specifies the number of milliseconds to execute code before terminating execution.
If execution is terminated, an `Error` will be thrown. This value must be a strictly positive integer.
