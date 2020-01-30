[typescript](../README.md) › [Globals](../globals.md) › ["vm"](../modules/_vm_.md) › [Script](_vm_.script.md)

# Class: Script

## Hierarchy

* **Script**

## Index

### Constructors

* [constructor](_vm_.script.md#constructor)

### Methods

* [createCachedData](_vm_.script.md#createcacheddata)
* [runInContext](_vm_.script.md#runincontext)
* [runInNewContext](_vm_.script.md#runinnewcontext)
* [runInThisContext](_vm_.script.md#runinthiscontext)

## Constructors

###  constructor

\+ **new Script**(`code`: string, `options?`: [ScriptOptions](../interfaces/_vm_.scriptoptions.md)): *[Script](_vm_.script.md)*

Defined in node_modules/@types/node/vm.d.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`options?` | [ScriptOptions](../interfaces/_vm_.scriptoptions.md) |

**Returns:** *[Script](_vm_.script.md)*

## Methods

###  createCachedData

▸ **createCachedData**(): *[Buffer](buffer.md)*

Defined in node_modules/@types/node/vm.d.ts:102

**Returns:** *[Buffer](buffer.md)*

___

###  runInContext

▸ **runInContext**(`contextifiedSandbox`: [Context](../interfaces/_vm_.context.md), `options?`: [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md)): *any*

Defined in node_modules/@types/node/vm.d.ts:99

**Parameters:**

Name | Type |
------ | ------ |
`contextifiedSandbox` | [Context](../interfaces/_vm_.context.md) |
`options?` | [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) |

**Returns:** *any*

___

###  runInNewContext

▸ **runInNewContext**(`sandbox?`: [Context](../interfaces/_vm_.context.md), `options?`: [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md)): *any*

Defined in node_modules/@types/node/vm.d.ts:100

**Parameters:**

Name | Type |
------ | ------ |
`sandbox?` | [Context](../interfaces/_vm_.context.md) |
`options?` | [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) |

**Returns:** *any*

___

###  runInThisContext

▸ **runInThisContext**(`options?`: [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md)): *any*

Defined in node_modules/@types/node/vm.d.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [RunningScriptOptions](../interfaces/_vm_.runningscriptoptions.md) |

**Returns:** *any*
