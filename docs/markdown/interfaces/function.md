[typescript](../README.md) › [Globals](../globals.md) › [Function](function.md)

# Interface: Function

Creates a new function.

## Hierarchy

* **Function**

  ↳ [CallableFunction](callablefunction.md)

  ↳ [NewableFunction](newablefunction.md)

  ↳ [CustomPromisify](_util_.custompromisify.md)

## Index

### Properties

* [arguments](function.md#arguments)
* [caller](function.md#caller)
* [length](function.md#length)
* [name](function.md#name)
* [prototype](function.md#prototype)

### Methods

* [[Symbol.hasInstance]](function.md#[symbol.hasinstance])
* [apply](function.md#apply)
* [bind](function.md#bind)
* [call](function.md#call)
* [toString](function.md#tostring)

## Properties

###  arguments

• **arguments**: *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:302

___

###  caller

• **caller**: *[Function](function.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:303

___

###  length

• **length**: *number*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:299

___

###  name

• **name**: *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:97

Returns the name of the function. Function names are read-only and can not be changed.

___

###  prototype

• **prototype**: *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:298

## Methods

###  [Symbol.hasInstance]

▸ **[Symbol.hasInstance]**(`value`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:157

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  apply

▸ **apply**(`this`: [Function](function.md), `thisArg`: any, `argArray?`: any): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:278

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [Function](function.md) | - |
`thisArg` | any | The object to be used as the this object. |
`argArray?` | any | A set of arguments to be passed to the function.  |

**Returns:** *any*

___

###  bind

▸ **bind**(`this`: [Function](function.md), `thisArg`: any, ...`argArray`: any[]): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:293

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [Function](function.md) | - |
`thisArg` | any | An object to which the this keyword can refer inside the new function. |
`...argArray` | any[] | A list of arguments to be passed to the new function.  |

**Returns:** *any*

___

###  call

▸ **call**(`this`: [Function](function.md), `thisArg`: any, ...`argArray`: any[]): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:285

Calls a method of an object, substituting another object for the current object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | [Function](function.md) | - |
`thisArg` | any | The object to be used as the current object. |
`...argArray` | any[] | A list of arguments to be passed to the method.  |

**Returns:** *any*

___

###  toString

▸ **toString**(): *string*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:296

Returns a string representation of a function.

**Returns:** *string*
