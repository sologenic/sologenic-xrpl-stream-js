[typescript](../README.md) › [Globals](../globals.md) › ["util"](_util_.md) › [inspect](_util_.inspect.md)

# Module: inspect

## Callable

▸ **inspect**(`object`: any, `showHidden?`: undefined | false | true, `depth?`: number | null, `color?`: undefined | false | true): *string*

Defined in node_modules/@types/node/util.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`showHidden?` | undefined &#124; false &#124; true |
`depth?` | number &#124; null |
`color?` | undefined &#124; false &#124; true |

**Returns:** *string*

▸ **inspect**(`object`: any, `options`: [InspectOptions](../interfaces/_util_.inspectoptions.md)): *string*

Defined in node_modules/@types/node/util.d.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`options` | [InspectOptions](../interfaces/_util_.inspectoptions.md) |

**Returns:** *string*

## Index

### Variables

* [colors](_util_.inspect.md#let-colors)
* [custom](_util_.inspect.md#const-custom)
* [defaultOptions](_util_.inspect.md#let-defaultoptions)
* [replDefaults](_util_.inspect.md#let-repldefaults)
* [styles](_util_.inspect.md#let-styles)

## Variables

### `Let` colors

• **colors**: *object*

Defined in node_modules/@types/node/util.d.ts:10

#### Type declaration:

* \[ **color**: *string*\]: [number, number] | undefined

___

### `Const` custom

• **custom**: *keyof symbol*

Defined in node_modules/@types/node/ts3.2/util.d.ts:6

___

### `Let` defaultOptions

• **defaultOptions**: *[InspectOptions](../interfaces/_util_.inspectoptions.md)*

Defined in node_modules/@types/node/util.d.ts:16

___

### `Let` replDefaults

• **replDefaults**: *[InspectOptions](../interfaces/_util_.inspectoptions.md)*

Defined in node_modules/@types/node/util.d.ts:20

Allows changing inspect settings from the repl.

___

### `Let` styles

• **styles**: *object*

Defined in node_modules/@types/node/util.d.ts:13

#### Type declaration:

* \[ **style**: *string*\]: string | undefined
