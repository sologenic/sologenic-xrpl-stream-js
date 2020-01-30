[typescript](../README.md) › [Globals](../globals.md) › ["../index"](../modules/____index_.md) › [TemplateSettings](____index_.templatesettings.md)

# Interface: TemplateSettings

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby
(ERB). Change the following template settings to use alternative delimiters.

## Hierarchy

* **TemplateSettings**

  ↳ [TemplateOptions](____index_.templateoptions.md)

## Index

### Properties

* [escape](____index_.templatesettings.md#optional-escape)
* [evaluate](____index_.templatesettings.md#optional-evaluate)
* [imports](____index_.templatesettings.md#optional-imports)
* [interpolate](____index_.templatesettings.md#optional-interpolate)
* [variable](____index_.templatesettings.md#optional-variable)

## Properties

### `Optional` escape

• **escape**? : *[RegExp](regexp.md)*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:119

The "escape" delimiter.

___

### `Optional` evaluate

• **evaluate**? : *[RegExp](regexp.md)*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:123

The "evaluate" delimiter.

___

### `Optional` imports

• **imports**? : *[Dictionary](____index_.dictionary.md)‹any›*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:127

An object to import into the template as local variables.

___

### `Optional` interpolate

• **interpolate**? : *[RegExp](regexp.md)*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:131

The "interpolate" delimiter.

___

### `Optional` variable

• **variable**? : *undefined | string*

Defined in node_modules/@types/lodash/ts3.1/common/common.d.ts:135

Used to reference the data object in the template text.
