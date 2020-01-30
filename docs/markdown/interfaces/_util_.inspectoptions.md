[typescript](../README.md) › [Globals](../globals.md) › ["util"](../modules/_util_.md) › [InspectOptions](_util_.inspectoptions.md)

# Interface: InspectOptions

## Hierarchy

* [InspectOptions](nodejs.inspectoptions.md)

  ↳ **InspectOptions**

## Index

### Properties

* [breakLength](_util_.inspectoptions.md#optional-breaklength)
* [colors](_util_.inspectoptions.md#optional-colors)
* [compact](_util_.inspectoptions.md#optional-compact)
* [customInspect](_util_.inspectoptions.md#optional-custominspect)
* [depth](_util_.inspectoptions.md#optional-depth)
* [getters](_util_.inspectoptions.md#optional-getters)
* [maxArrayLength](_util_.inspectoptions.md#optional-maxarraylength)
* [showHidden](_util_.inspectoptions.md#optional-showhidden)
* [showProxy](_util_.inspectoptions.md#optional-showproxy)
* [sorted](_util_.inspectoptions.md#optional-sorted)

## Properties

### `Optional` breakLength

• **breakLength**? : *undefined | number*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[breakLength](nodejs.inspectoptions.md#optional-breaklength)*

Defined in node_modules/@types/node/globals.d.ts:496

___

### `Optional` colors

• **colors**? : *undefined | false | true*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[colors](nodejs.inspectoptions.md#optional-colors)*

Defined in node_modules/@types/node/globals.d.ts:492

___

### `Optional` compact

• **compact**? : *boolean | number*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[compact](nodejs.inspectoptions.md#optional-compact)*

Defined in node_modules/@types/node/globals.d.ts:507

Setting this to `false` causes each object key
to be displayed on a new line. It will also add new lines to text that is
longer than `breakLength`. If set to a number, the most `n` inner elements
are united on a single line as long as all properties fit into
`breakLength`. Short array elements are also grouped together. Note that no
text will be reduced below 16 characters, no matter the `breakLength` size.
For more information, see the example below.

**`default`** `true`

___

### `Optional` customInspect

• **customInspect**? : *undefined | false | true*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[customInspect](nodejs.inspectoptions.md#optional-custominspect)*

Defined in node_modules/@types/node/globals.d.ts:493

___

### `Optional` depth

• **depth**? : *number | null*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[depth](nodejs.inspectoptions.md#optional-depth)*

Defined in node_modules/@types/node/globals.d.ts:491

**`default`** 2

___

### `Optional` getters

• **getters**? : *"get" | "set" | boolean*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[getters](nodejs.inspectoptions.md#optional-getters)*

Defined in node_modules/@types/node/globals.d.ts:486

If set to `true`, getters are going to be
inspected as well. If set to `'get'` only getters without setter are going
to be inspected. If set to `'set'` only getters having a corresponding
setter are going to be inspected. This might cause side effects depending on
the getter function.

**`default`** `false`

___

### `Optional` maxArrayLength

• **maxArrayLength**? : *number | null*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[maxArrayLength](nodejs.inspectoptions.md#optional-maxarraylength)*

Defined in node_modules/@types/node/globals.d.ts:495

___

### `Optional` showHidden

• **showHidden**? : *undefined | false | true*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[showHidden](nodejs.inspectoptions.md#optional-showhidden)*

Defined in node_modules/@types/node/globals.d.ts:487

___

### `Optional` showProxy

• **showProxy**? : *undefined | false | true*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[showProxy](nodejs.inspectoptions.md#optional-showproxy)*

Defined in node_modules/@types/node/globals.d.ts:494

___

### `Optional` sorted

• **sorted**? : *boolean | function*

*Inherited from [InspectOptions](nodejs.inspectoptions.md).[sorted](nodejs.inspectoptions.md#optional-sorted)*

Defined in node_modules/@types/node/globals.d.ts:508
