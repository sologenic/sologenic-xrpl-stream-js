[typescript](../README.md) › [Globals](../globals.md) › [SymbolConstructor](symbolconstructor.md)

# Interface: SymbolConstructor

## Hierarchy

* **SymbolConstructor**

## Callable

▸ (`description?`: string | number): *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.d.ts:25

Returns a new unique Symbol value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`description?` | string &#124; number | Description of the new Symbol object.  |

**Returns:** *symbol*

## Index

### Properties

* [asyncIterator](symbolconstructor.md#asynciterator)
* [hasInstance](symbolconstructor.md#hasinstance)
* [isConcatSpreadable](symbolconstructor.md#isconcatspreadable)
* [iterator](symbolconstructor.md#iterator)
* [match](symbolconstructor.md#match)
* [observable](symbolconstructor.md#observable)
* [prototype](symbolconstructor.md#prototype)
* [replace](symbolconstructor.md#replace)
* [search](symbolconstructor.md#search)
* [species](symbolconstructor.md#species)
* [split](symbolconstructor.md#split)
* [toPrimitive](symbolconstructor.md#toprimitive)
* [toStringTag](symbolconstructor.md#tostringtag)
* [unscopables](symbolconstructor.md#unscopables)

### Methods

* [for](symbolconstructor.md#for)
* [keyFor](symbolconstructor.md#keyfor)

## Properties

###  asyncIterator

• **asyncIterator**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:29

A method that returns the default async iterator for an object. Called by the semantics of
the for-await-of statement.

___

###  hasInstance

• **hasInstance**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:28

A method that determines if a constructor object recognizes an object as one of the
constructor’s instances. Called by the semantics of the instanceof operator.

___

###  isConcatSpreadable

• **isConcatSpreadable**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:34

A Boolean value that if true indicates that an object should flatten to its array elements
by Array.prototype.concat.

___

###  iterator

• **iterator**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:28

A method that returns the default iterator for an object. Called by the semantics of the
for-of statement.

___

###  match

• **match**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:40

A regular expression method that matches the regular expression against a string. Called
by the String.prototype.match method.

___

###  observable

• **observable**: *symbol*

Defined in node_modules/@types/node/globals.d.ts:146

___

###  prototype

• **prototype**: *[Symbol](symbol.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.d.ts:25

A reference to the prototype.

___

###  replace

• **replace**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:46

A regular expression method that replaces matched substrings of a string. Called by the
String.prototype.replace method.

___

###  search

• **search**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:52

A regular expression method that returns the index within a string that matches the
regular expression. Called by the String.prototype.search method.

___

###  species

• **species**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:58

A function valued property that is the constructor function that is used to create
derived objects.

___

###  split

• **split**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:64

A regular expression method that splits a string at the indices that match the regular
expression. Called by the String.prototype.split method.

___

###  toPrimitive

• **toPrimitive**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:70

A method that converts an object to a corresponding primitive value.
Called by the ToPrimitive abstract operation.

___

###  toStringTag

• **toStringTag**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:76

A String value that is used in the creation of the default string description of an object.
Called by the built-in method Object.prototype.toString.

___

###  unscopables

• **unscopables**: *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:82

An Object whose own property names are property names that are excluded from the 'with'
environment bindings of the associated objects.

## Methods

###  for

▸ **for**(`key`: string): *symbol*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.d.ts:38

Returns a Symbol object from the global symbol registry matching the given key if found.
Otherwise, returns a new symbol with this key.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | key to search for.  |

**Returns:** *symbol*

___

###  keyFor

▸ **keyFor**(`sym`: symbol): *string | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.d.ts:45

Returns a key from the global symbol registry matching the given Symbol if found.
Otherwise, returns a undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sym` | symbol | Symbol to find the key for.  |

**Returns:** *string | undefined*
