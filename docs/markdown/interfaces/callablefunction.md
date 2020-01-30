[typescript](../README.md) › [Globals](../globals.md) › [CallableFunction](callablefunction.md)

# Interface: CallableFunction

## Hierarchy

* [Function](function.md)

  ↳ **CallableFunction**

## Index

### Properties

* [Function](callablefunction.md#function)
* [arguments](callablefunction.md#arguments)
* [caller](callablefunction.md#caller)
* [length](callablefunction.md#length)
* [name](callablefunction.md#name)
* [prototype](callablefunction.md#prototype)

### Methods

* [[Symbol.hasInstance]](callablefunction.md#[symbol.hasinstance])
* [apply](callablefunction.md#apply)
* [bind](callablefunction.md#bind)
* [call](callablefunction.md#call)
* [toString](callablefunction.md#tostring)

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

▸ **apply**<**T**, **R**>(`this`: function, `thisArg`: T): *R*

*Overrides [Function](function.md).[apply](function.md#apply)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:334

Calls the function with the specified object as the this value and the elements of specified array as the arguments.

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

▪ **thisArg**: *T*

The object to be used as the this object.

**Returns:** *R*

▸ **apply**<**T**, **A**, **R**>(`this`: function, `thisArg`: T, `args`: A): *R*

*Overrides [Function](function.md).[apply](function.md#apply)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:335

**Type parameters:**

▪ **T**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T, ...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...args` | A |

▪ **thisArg**: *T*

▪ **args**: *A*

**Returns:** *R*

___

###  bind

▸ **bind**<**T**>(`this`: T, `thisArg`: [ThisParameterType](../globals.md#thisparametertype)‹T›): *[OmitThisParameter](../globals.md#omitthisparameter)‹T›*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:350

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | T | - |
`thisArg` | [ThisParameterType](../globals.md#thisparametertype)‹T› | The object to be used as the this object. |

**Returns:** *[OmitThisParameter](../globals.md#omitthisparameter)‹T›*

▸ **bind**<**T**, **A0**, **A**, **R**>(`this`: function, `thisArg`: T, `arg0`: A0): *function*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:351

**Type parameters:**

▪ **T**

▪ **A0**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T, `arg0`: A0, ...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`arg0` | A0 |
`...args` | A |

▪ **thisArg**: *T*

▪ **arg0**: *A0*

**Returns:** *function*

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **bind**<**T**, **A0**, **A1**, **A**, **R**>(`this`: function, `thisArg`: T, `arg0`: A0, `arg1`: A1): *function*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:352

**Type parameters:**

▪ **T**

▪ **A0**

▪ **A1**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T, `arg0`: A0, `arg1`: A1, ...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`arg0` | A0 |
`arg1` | A1 |
`...args` | A |

▪ **thisArg**: *T*

▪ **arg0**: *A0*

▪ **arg1**: *A1*

**Returns:** *function*

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **bind**<**T**, **A0**, **A1**, **A2**, **A**, **R**>(`this`: function, `thisArg`: T, `arg0`: A0, `arg1`: A1, `arg2`: A2): *function*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:353

**Type parameters:**

▪ **T**

▪ **A0**

▪ **A1**

▪ **A2**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T, `arg0`: A0, `arg1`: A1, `arg2`: A2, ...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`arg0` | A0 |
`arg1` | A1 |
`arg2` | A2 |
`...args` | A |

▪ **thisArg**: *T*

▪ **arg0**: *A0*

▪ **arg1**: *A1*

▪ **arg2**: *A2*

**Returns:** *function*

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **bind**<**T**, **A0**, **A1**, **A2**, **A3**, **A**, **R**>(`this`: function, `thisArg`: T, `arg0`: A0, `arg1`: A1, `arg2`: A2, `arg3`: A3): *function*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:354

**Type parameters:**

▪ **T**

▪ **A0**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T, `arg0`: A0, `arg1`: A1, `arg2`: A2, `arg3`: A3, ...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`arg0` | A0 |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`...args` | A |

▪ **thisArg**: *T*

▪ **arg0**: *A0*

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

**Returns:** *function*

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

▸ **bind**<**T**, **AX**, **R**>(`this`: function, `thisArg`: T, ...`args`: AX[]): *function*

*Overrides [Function](function.md).[bind](function.md#bind)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:355

**Type parameters:**

▪ **T**

▪ **AX**

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T, ...`args`: AX[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...args` | AX[] |

▪ **thisArg**: *T*

▪... **args**: *AX[]*

**Returns:** *function*

▸ (...`args`: AX[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | AX[] |

___

###  call

▸ **call**<**T**, **A**, **R**>(`this`: function, `thisArg`: T, ...`args`: A): *R*

*Overrides [Function](function.md).[call](function.md#call)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:342

Calls the function with the specified object as the this value and the specified rest arguments as the arguments.

**Type parameters:**

▪ **T**

▪ **A**: *any[]*

▪ **R**

**Parameters:**

▪ **this**: *function*

▸ (`this`: T, ...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...args` | A |

▪ **thisArg**: *T*

The object to be used as the this object.

▪... **args**: *A*

Argument values to be passed to the function.

**Returns:** *R*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Function](function.md).[toString](function.md#tostring)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:296

Returns a string representation of a function.

**Returns:** *string*
