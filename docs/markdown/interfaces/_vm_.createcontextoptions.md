[typescript](../README.md) › [Globals](../globals.md) › ["vm"](../modules/_vm_.md) › [CreateContextOptions](_vm_.createcontextoptions.md)

# Interface: CreateContextOptions

## Hierarchy

* **CreateContextOptions**

## Index

### Properties

* [codeGeneration](_vm_.createcontextoptions.md#optional-codegeneration)
* [name](_vm_.createcontextoptions.md#optional-name)
* [origin](_vm_.createcontextoptions.md#optional-origin)

## Properties

### `Optional` codeGeneration

• **codeGeneration**? : *undefined | object*

Defined in node_modules/@types/node/vm.d.ts:82

___

### `Optional` name

• **name**? : *undefined | string*

Defined in node_modules/@types/node/vm.d.ts:73

Human-readable name of the newly created context.

**`default`** 'VM Context i' Where i is an ascending numerical index of the created context.

___

### `Optional` origin

• **origin**? : *undefined | string*

Defined in node_modules/@types/node/vm.d.ts:81

Corresponds to the newly created context for display purposes.
The origin should be formatted like a `URL`, but with only the scheme, host, and port (if necessary),
like the value of the `url.origin` property of a URL object.
Most notably, this string should omit the trailing slash, as that denotes a path.

**`default`** ''
