[typescript](../README.md) › [Globals](../globals.md) › ["vm"](_vm_.md)

# Module: "vm"

## Index

### Classes

* [Script](../classes/_vm_.script.md)

### Interfaces

* [BaseOptions](../interfaces/_vm_.baseoptions.md)
* [CompileFunctionOptions](../interfaces/_vm_.compilefunctionoptions.md)
* [Context](../interfaces/_vm_.context.md)
* [CreateContextOptions](../interfaces/_vm_.createcontextoptions.md)
* [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md)
* [ScriptOptions](../interfaces/_vm_.scriptoptions.md)

### Functions

* [compileFunction](_vm_.md#compilefunction)
* [createContext](_vm_.md#createcontext)
* [isContext](_vm_.md#iscontext)
* [runInContext](_vm_.md#runincontext)
* [runInNewContext](_vm_.md#runinnewcontext)
* [runInThisContext](_vm_.md#runinthiscontext)

## Functions

###  compileFunction

▸ **compileFunction**(`code`: string, `params`: string[], `options`: [CompileFunctionOptions](../interfaces/_vm_.compilefunctionoptions.md)): *[Function](../interfaces/function.md)*

Defined in node_modules/@types/node/vm.d.ts:109

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`params` | string[] |
`options` | [CompileFunctionOptions](../interfaces/_vm_.compilefunctionoptions.md) |

**Returns:** *[Function](../interfaces/function.md)*

___

###  createContext

▸ **createContext**(`sandbox?`: [Context](../interfaces/_vm_.context.md), `options?`: [CreateContextOptions](../interfaces/_vm_.createcontextoptions.md)): *[Context](../interfaces/_vm_.context.md)*

Defined in node_modules/@types/node/vm.d.ts:104

**Parameters:**

Name | Type |
------ | ------ |
`sandbox?` | [Context](../interfaces/_vm_.context.md) |
`options?` | [CreateContextOptions](../interfaces/_vm_.createcontextoptions.md) |

**Returns:** *[Context](../interfaces/_vm_.context.md)*

___

###  isContext

▸ **isContext**(`sandbox`: [Context](../interfaces/_vm_.context.md)): *boolean*

Defined in node_modules/@types/node/vm.d.ts:105

**Parameters:**

Name | Type |
------ | ------ |
`sandbox` | [Context](../interfaces/_vm_.context.md) |

**Returns:** *boolean*

___

###  runInContext

▸ **runInContext**(`code`: string, `contextifiedSandbox`: [Context](../interfaces/_vm_.context.md), `options?`: [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) | string): *any*

Defined in node_modules/@types/node/vm.d.ts:106

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`contextifiedSandbox` | [Context](../interfaces/_vm_.context.md) |
`options?` | [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) &#124; string |

**Returns:** *any*

___

###  runInNewContext

▸ **runInNewContext**(`code`: string, `sandbox?`: [Context](../interfaces/_vm_.context.md), `options?`: [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) | string): *any*

Defined in node_modules/@types/node/vm.d.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`sandbox?` | [Context](../interfaces/_vm_.context.md) |
`options?` | [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) &#124; string |

**Returns:** *any*

___

###  runInThisContext

▸ **runInThisContext**(`code`: string, `options?`: [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) | string): *any*

Defined in node_modules/@types/node/vm.d.ts:108

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`options?` | [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) &#124; string |

**Returns:** *any*
