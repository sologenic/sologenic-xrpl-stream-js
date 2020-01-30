[typescript](../README.md) › [Globals](../globals.md) › ["repl"](_repl_.md)

# Module: "repl"

## Index

### Classes

* [REPLServer](../classes/_repl_.replserver.md)
* [Recoverable](../classes/_repl_.recoverable.md)

### Interfaces

* [REPLCommand](../interfaces/_repl_.replcommand.md)
* [ReplOptions](../interfaces/_repl_.reploptions.md)

### Type aliases

* [REPLCommandAction](_repl_.md#replcommandaction)
* [REPLEval](_repl_.md#repleval)
* [REPLWriter](_repl_.md#replwriter)

### Variables

* [REPL_MODE_SLOPPY](_repl_.md#const-repl_mode_sloppy)
* [REPL_MODE_STRICT](_repl_.md#const-repl_mode_strict)
* [writer](_repl_.md#const-writer)

### Functions

* [start](_repl_.md#start)

## Type aliases

###  REPLCommandAction

Ƭ **REPLCommandAction**: *function*

Defined in node_modules/@types/node/repl.d.ts:98

#### Type declaration:

▸ (`this`: [REPLServer](../classes/_repl_.replserver.md), `text`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [REPLServer](../classes/_repl_.replserver.md) |
`text` | string |

___

###  REPLEval

Ƭ **REPLEval**: *function*

Defined in node_modules/@types/node/repl.d.ts:89

#### Type declaration:

▸ (`this`: [REPLServer](../classes/_repl_.replserver.md), `evalCmd`: string, `context`: [Context](../interfaces/_vm_.context.md), `file`: string, `cb`: function): *void*

**Parameters:**

▪ **this**: *[REPLServer](../classes/_repl_.replserver.md)*

▪ **evalCmd**: *string*

▪ **context**: *[Context](../interfaces/_vm_.context.md)*

▪ **file**: *string*

▪ **cb**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `result`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`result` | any |

___

###  REPLWriter

Ƭ **REPLWriter**: *function*

Defined in node_modules/@types/node/repl.d.ts:90

#### Type declaration:

▸ (`this`: [REPLServer](../classes/_repl_.replserver.md), `obj`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [REPLServer](../classes/_repl_.replserver.md) |
`obj` | any |

## Variables

### `Const` REPL_MODE_SLOPPY

• **REPL_MODE_SLOPPY**: *symbol*

Defined in node_modules/@types/node/repl.d.ts:356

A flag passed in the REPL options. Evaluates expressions in sloppy mode.

___

### `Const` REPL_MODE_STRICT

• **REPL_MODE_STRICT**: *symbol*

Defined in node_modules/@types/node/repl.d.ts:362

A flag passed in the REPL options. Evaluates expressions in strict mode.
This is equivalent to prefacing every repl statement with `'use strict'`.

___

### `Const` writer

• **writer**: *[REPLWriter](_repl_.md#replwriter) & object*

Defined in node_modules/@types/node/repl.d.ts:96

This is the default "writer" value, if none is passed in the REPL options,
and it can be overridden by custom print functions.

## Functions

###  start

▸ **start**(`options?`: string | [ReplOptions](../interfaces/_repl_.reploptions.md)): *[REPLServer](../classes/_repl_.replserver.md)*

Defined in node_modules/@types/node/repl.d.ts:370

Creates and starts a `repl.REPLServer` instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | string &#124; [ReplOptions](../interfaces/_repl_.reploptions.md) | The options for the `REPLServer`. If `options` is a string, then it specifies the input prompt.  |

**Returns:** *[REPLServer](../classes/_repl_.replserver.md)*
