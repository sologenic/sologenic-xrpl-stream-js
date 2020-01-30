[typescript](../README.md) › [Globals](../globals.md) › ["readline"](_readline_.md)

# Module: "readline"

## Index

### Classes

* [Interface](../classes/_readline_.interface.md)

### Interfaces

* [Key](../interfaces/_readline_.key.md)
* [ReadLineOptions](../interfaces/_readline_.readlineoptions.md)

### Type aliases

* [AsyncCompleter](_readline_.md#asynccompleter)
* [Completer](_readline_.md#completer)
* [CompleterResult](_readline_.md#completerresult)
* [Direction](_readline_.md#direction)
* [ReadLine](_readline_.md#readline)

### Functions

* [clearLine](_readline_.md#clearline)
* [clearScreenDown](_readline_.md#clearscreendown)
* [createInterface](_readline_.md#createinterface)
* [cursorTo](_readline_.md#cursorto)
* [emitKeypressEvents](_readline_.md#emitkeypressevents)
* [moveCursor](_readline_.md#movecursor)

## Type aliases

###  AsyncCompleter

Ƭ **AsyncCompleter**: *function*

Defined in node_modules/@types/node/readline.d.ts:113

#### Type declaration:

▸ (`line`: string, `callback`: function): *any*

**Parameters:**

▪ **line**: *string*

▪ **callback**: *function*

▸ (`err?`: null | [Error](../interfaces/error.md), `result?`: [CompleterResult](_readline_.md#completerresult)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | null &#124; [Error](../interfaces/error.md) |
`result?` | [CompleterResult](_readline_.md#completerresult) |

___

###  Completer

Ƭ **Completer**: *function*

Defined in node_modules/@types/node/readline.d.ts:112

#### Type declaration:

▸ (`line`: string): *[CompleterResult](_readline_.md#completerresult)*

**Parameters:**

Name | Type |
------ | ------ |
`line` | string |

___

###  CompleterResult

Ƭ **CompleterResult**: *[string[], string]*

Defined in node_modules/@types/node/readline.d.ts:115

___

###  Direction

Ƭ **Direction**: *-1 | 0 | 1*

Defined in node_modules/@types/node/readline.d.ts:132

___

###  ReadLine

Ƭ **ReadLine**: *[Interface](../classes/_readline_.interface.md)*

Defined in node_modules/@types/node/readline.d.ts:110

## Functions

###  clearLine

▸ **clearLine**(`stream`: [WritableStream](../interfaces/nodejs.writablestream.md), `dir`: [Direction](_readline_.md#direction), `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/readline.d.ts:137

Clears the current line of this WriteStream in a direction identified by `dir`.

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [WritableStream](../interfaces/nodejs.writablestream.md) |
`dir` | [Direction](_readline_.md#direction) |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  clearScreenDown

▸ **clearScreenDown**(`stream`: [WritableStream](../interfaces/nodejs.writablestream.md), `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/readline.d.ts:141

Clears this `WriteStream` from the current cursor down.

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [WritableStream](../interfaces/nodejs.writablestream.md) |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  createInterface

▸ **createInterface**(`input`: [ReadableStream](../interfaces/nodejs.readablestream.md), `output?`: [WritableStream](../interfaces/nodejs.writablestream.md), `completer?`: [Completer](_readline_.md#completer) | [AsyncCompleter](_readline_.md#asynccompleter), `terminal?`: undefined | false | true): *[Interface](../classes/_readline_.interface.md)*

Defined in node_modules/@types/node/readline.d.ts:128

**Parameters:**

Name | Type |
------ | ------ |
`input` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`output?` | [WritableStream](../interfaces/nodejs.writablestream.md) |
`completer?` | [Completer](_readline_.md#completer) &#124; [AsyncCompleter](_readline_.md#asynccompleter) |
`terminal?` | undefined &#124; false &#124; true |

**Returns:** *[Interface](../classes/_readline_.interface.md)*

▸ **createInterface**(`options`: [ReadLineOptions](../interfaces/_readline_.readlineoptions.md)): *[Interface](../classes/_readline_.interface.md)*

Defined in node_modules/@types/node/readline.d.ts:129

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ReadLineOptions](../interfaces/_readline_.readlineoptions.md) |

**Returns:** *[Interface](../classes/_readline_.interface.md)*

___

###  cursorTo

▸ **cursorTo**(`stream`: [WritableStream](../interfaces/nodejs.writablestream.md), `x`: number, `y?`: undefined | number, `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/readline.d.ts:145

Moves this WriteStream's cursor to the specified position.

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [WritableStream](../interfaces/nodejs.writablestream.md) |
`x` | number |
`y?` | undefined &#124; number |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  emitKeypressEvents

▸ **emitKeypressEvents**(`stream`: [ReadableStream](../interfaces/nodejs.readablestream.md), `readlineInterface?`: [Interface](../classes/_readline_.interface.md)): *void*

Defined in node_modules/@types/node/readline.d.ts:130

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ReadableStream](../interfaces/nodejs.readablestream.md) |
`readlineInterface?` | [Interface](../classes/_readline_.interface.md) |

**Returns:** *void*

___

###  moveCursor

▸ **moveCursor**(`stream`: [WritableStream](../interfaces/nodejs.writablestream.md), `dx`: number, `dy`: number, `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/readline.d.ts:149

Moves this WriteStream's cursor relative to its current position.

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [WritableStream](../interfaces/nodejs.writablestream.md) |
`dx` | number |
`dy` | number |
`callback?` | undefined &#124; function |

**Returns:** *boolean*
