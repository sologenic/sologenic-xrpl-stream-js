[typescript](../README.md) › [Globals](../globals.md) › [NewableFunction](newablefunction.md)

# Interface: NewableFunction

## Hierarchy

* [Function](function.md)

  ↳ **NewableFunction**

## Index

### Properties

* [Function](newablefunction.md#function)
* [arguments](newablefunction.md#arguments)
* [caller](newablefunction.md#caller)
* [length](newablefunction.md#length)
* [name](newablefunction.md#name)
* [prototype](newablefunction.md#prototype)

### Methods

* [[Symbol.hasInstance]](newablefunction.md#[symbol.hasinstance])
* [apply](newablefunction.md#apply)
* [bind](newablefunction.md#bind)
* [call](newablefunction.md#call)
* [toString](newablefunction.md#tostring)

## Properties

###  Function

• **Function**: *[FunctionConstructor](functionconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:316

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

▸ **apply**<**T**>(`this`: object, `thisArg`: T): *void*

*Overrides [Function](function.md).[apply](function.md#apply)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:364

Calls the function with the specified object as the this value and the elements of specified array as the arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | object | - |
`thisArg` | T | The object to be used as the this object. |

**Returns:** *void*

▸ **apply**<**T**, **A**>(`this`: object, `thisArg`: T, `args`: A): *void*

*Overrides [Function](function.md).[apply](function.md#apply)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:365

**Type parameters:**

▪ **T**

▪ **A**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`thisArg` | T |
`args` | A |

**Returns:** *void*

___

###  bind

▸ **bind**<**T**>(`this`: T, `thisArg`: any): *T*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:380

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | T | - |
`thisArg` | any | The object to be used as the this object. |

**Returns:** *T*

▸ **bind**<**A0**, **A**, **R**>(`this`: object, `thisArg`: any, `arg0`: A0): *object*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:381

**Type parameters:**

▪ **A0**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`thisArg` | any |
`arg0` | A0 |

**Returns:** *object*

▸ **bind**<**A0**, **A1**, **A**, **R**>(`this`: object, `thisArg`: any, `arg0`: A0, `arg1`: A1): *object*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:382

**Type parameters:**

▪ **A0**

▪ **A1**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`thisArg` | any |
`arg0` | A0 |
`arg1` | A1 |

**Returns:** *object*

▸ **bind**<**A0**, **A1**, **A2**, **A**, **R**>(`this`: object, `thisArg`: any, `arg0`: A0, `arg1`: A1, `arg2`: A2): *object*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:383

**Type parameters:**

▪ **A0**

▪ **A1**

▪ **A2**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`thisArg` | any |
`arg0` | A0 |
`arg1` | A1 |
`arg2` | A2 |

**Returns:** *object*

▸ **bind**<**A0**, **A1**, **A2**, **A3**, **A**, **R**>(`this`: object, `thisArg`: any, `arg0`: A0, `arg1`: A1, `arg2`: A2, `arg3`: A3): *object*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:384

**Type parameters:**

▪ **A0**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`thisArg` | any |
`arg0` | A0 |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

**Returns:** *object*

▸ **bind**<**AX**, **R**>(`this`: object, `thisArg`: any, ...`args`: AX[]): *object*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:385

**Type parameters:**

▪ **AX**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`thisArg` | any |
`...args` | AX[] |

**Returns:** *object*

___

###  call

▸ **call**<**T**, **A**>(`this`: object, `thisArg`: T, ...`args`: A): *void*

*Overrides [Function](function.md).[call](function.md#call)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:372

Calls the function with the specified object as the this value and the specified rest arguments as the arguments.

**Type parameters:**

▪ **T**

▪ **A**: *any[]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | object | - |
`thisArg` | T | The object to be used as the this object. |
`...args` | A | Argument values to be passed to the function.  |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Function](function.md).[toString](function.md#tostring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:296

Returns a string representation of a function.

**Returns:** *string*
