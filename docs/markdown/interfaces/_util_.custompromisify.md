[typescript](../README.md) › [Globals](../globals.md) › ["util"](../modules/_util_.md) › [CustomPromisify](_util_.custompromisify.md)

# Interface: CustomPromisify <**TCustom**>

## Type parameters

▪ **TCustom**: *[Function](function.md)*

## Hierarchy

* [Function](function.md)

  ↳ **CustomPromisify**

## Index

### Properties

* [Function](_util_.custompromisify.md#function)
* [__promisify__](_util_.custompromisify.md#__promisify__)
* [arguments](_util_.custompromisify.md#arguments)
* [caller](_util_.custompromisify.md#caller)
* [length](_util_.custompromisify.md#length)
* [name](_util_.custompromisify.md#name)
* [prototype](_util_.custompromisify.md#prototype)

### Methods

* [[Symbol.hasInstance]](_util_.custompromisify.md#[symbol.hasinstance])
* [apply](_util_.custompromisify.md#apply)
* [bind](_util_.custompromisify.md#bind)
* [call](_util_.custompromisify.md#call)
* [toString](_util_.custompromisify.md#tostring)

## Properties

###  Function

• **Function**: *[FunctionConstructor](functionconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:316

___

###  __promisify__

• **__promisify__**: *TCustom*

Defined in node_modules/@types/node/util.d.ts:58

___

###  arguments

• **arguments**: *any*

*Inherited from [Function](function.md).[arguments](function.md#arguments)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:302

___

###  caller

• **caller**: *[Function](function.md)*

*Inherited from [Function](function.md).[caller](function.md#caller)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:303

___

###  length

• **length**: *number*

*Inherited from [Function](function.md).[length](function.md#length)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:299

___

###  name

• **name**: *string*

*Inherited from [CallableFunction](callablefunction.md).[name](callablefunction.md#name)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:97

Returns the name of the function. Function names are read-only and can not be changed.

___

###  prototype

• **prototype**: *any*

*Inherited from [Function](function.md).[prototype](function.md#prototype)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:298

## Methods

###  [Symbol.hasInstance]

▸ **[Symbol.hasInstance]**(`value`: any): *boolean*

*Inherited from [CallableFunction](callablefunction.md).[[Symbol.hasInstance]](callablefunction.md#[symbol.hasinstance])*

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

*Inherited from [Function](function.md).[apply](function.md#apply)*

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

*Inherited from [Function](function.md).[bind](function.md#bind)*

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

*Inherited from [Function](function.md).[call](function.md#call)*

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

*Inherited from [Function](function.md).[toString](function.md#tostring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:296

Returns a string representation of a function.

**Returns:** *string*
