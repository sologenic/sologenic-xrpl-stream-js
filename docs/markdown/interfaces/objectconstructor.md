[typescript](../README.md) › [Globals](../globals.md) › [ObjectConstructor](objectconstructor.md)

# Interface: ObjectConstructor

## Hierarchy

* **ObjectConstructor**

## Callable

▸ (): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:153

**Returns:** *any*

▸ (`value`: any): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:154

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

## Index

### Constructors

* [constructor](objectconstructor.md#constructor)

### Properties

* [prototype](objectconstructor.md#prototype)

### Methods

* [assign](objectconstructor.md#assign)
* [create](objectconstructor.md#create)
* [defineProperties](objectconstructor.md#defineproperties)
* [defineProperty](objectconstructor.md#defineproperty)
* [entries](objectconstructor.md#entries)
* [freeze](objectconstructor.md#freeze)
* [getOwnPropertyDescriptor](objectconstructor.md#getownpropertydescriptor)
* [getOwnPropertyDescriptors](objectconstructor.md#getownpropertydescriptors)
* [getOwnPropertyNames](objectconstructor.md#getownpropertynames)
* [getOwnPropertySymbols](objectconstructor.md#getownpropertysymbols)
* [getPrototypeOf](objectconstructor.md#getprototypeof)
* [is](objectconstructor.md#is)
* [isExtensible](objectconstructor.md#isextensible)
* [isFrozen](objectconstructor.md#isfrozen)
* [isSealed](objectconstructor.md#issealed)
* [keys](objectconstructor.md#keys)
* [preventExtensions](objectconstructor.md#preventextensions)
* [seal](objectconstructor.md#seal)
* [setPrototypeOf](objectconstructor.md#setprototypeof)
* [values](objectconstructor.md#values)

## Constructors

###  constructor

\+ **new ObjectConstructor**(`value?`: any): *[Object](object.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:152

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Object](object.md)*

## Properties

###  prototype

• **prototype**: *[Object](object.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:158

A reference to the prototype for a class of objects.

## Methods

###  assign

▸ **assign**<**T**, **U**>(`target`: T, `source`: U): *T & U*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | T | The target object to copy to. |
`source` | U | The source object from which to copy properties.  |

**Returns:** *T & U*

▸ **assign**<**T**, **U**, **V**>(`target`: T, `source1`: U, `source2`: V): *T & U & V*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

**Type parameters:**

▪ **T**

▪ **U**

▪ **V**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | T | The target object to copy to. |
`source1` | U | The first source object from which to copy properties. |
`source2` | V | The second source object from which to copy properties.  |

**Returns:** *T & U & V*

▸ **assign**<**T**, **U**, **V**, **W**>(`target`: T, `source1`: U, `source2`: V, `source3`: W): *T & U & V & W*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

**Type parameters:**

▪ **T**

▪ **U**

▪ **V**

▪ **W**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | T | The target object to copy to. |
`source1` | U | The first source object from which to copy properties. |
`source2` | V | The second source object from which to copy properties. |
`source3` | W | The third source object from which to copy properties.  |

**Returns:** *T & U & V & W*

▸ **assign**(`target`: object, ...`sources`: any[]): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:313

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | object | The target object to copy to. |
`...sources` | any[] | One or more source objects from which to copy properties  |

**Returns:** *any*

___

###  create

▸ **create**(`o`: object | null): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:185

Creates an object that has the specified prototype or that has null prototype.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object &#124; null | Object to use as a prototype. May be null.  |

**Returns:** *any*

▸ **create**(`o`: object | null, `properties`: [PropertyDescriptorMap](propertydescriptormap.md) & [ThisType](thistype.md)‹any›): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:192

Creates an object that has the specified prototype, and that optionally contains specified properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object &#124; null | Object to use as a prototype. May be null |
`properties` | [PropertyDescriptorMap](propertydescriptormap.md) & [ThisType](thistype.md)‹any› | JavaScript object that contains one or more property descriptors.  |

**Returns:** *any*

___

###  defineProperties

▸ **defineProperties**(`o`: any, `properties`: [PropertyDescriptorMap](propertydescriptormap.md) & [ThisType](thistype.md)‹any›): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:207

Adds one or more properties to an object, and/or modifies attributes of existing properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object. |
`properties` | [PropertyDescriptorMap](propertydescriptormap.md) & [ThisType](thistype.md)‹any› | JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.  |

**Returns:** *any*

___

###  defineProperty

▸ **defineProperty**(`o`: any, `p`: [PropertyKey](../globals.md#propertykey), `attributes`: [PropertyDescriptor](propertydescriptor.md) & [ThisType](thistype.md)‹any›): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:200

Adds a property to an object, or modifies attributes of an existing property.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
`p` | [PropertyKey](../globals.md#propertykey) | The property name. |
`attributes` | [PropertyDescriptor](propertydescriptor.md) & [ThisType](thistype.md)‹any› | Descriptor for the property. It can be for a data property or an accessor property.  |

**Returns:** *any*

___

###  entries

▸ **entries**<**T**>(`o`: object | [ArrayLike](arraylike.md)‹T›): *[string, T][]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.object.d.ts:38

Returns an array of key/values of the enumerable properties of an object

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object &#124; [ArrayLike](arraylike.md)‹T› | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.  |

**Returns:** *[string, T][]*

▸ **entries**(`o`: object): *[string, any][]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.object.d.ts:44

Returns an array of key/values of the enumerable properties of an object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.  |

**Returns:** *[string, any][]*

___

###  freeze

▸ **freeze**<**T**>(`a`: T[]): *keyof T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:219

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T[] |

**Returns:** *keyof T[]*

▸ **freeze**<**T**>(`f`: T): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:225

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

**Type parameters:**

▪ **T**: *[Function](function.md)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | T |

**Returns:** *T*

▸ **freeze**<**T**>(`o`: T): *[Readonly](../globals.md#readonly)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:231

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | T | Object on which to lock the attributes.  |

**Returns:** *[Readonly](../globals.md#readonly)‹T›*

___

###  getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`: any, `p`: [PropertyKey](../globals.md#propertykey)): *[PropertyDescriptor](propertydescriptor.md) | undefined*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:172

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object that contains the property. |
`p` | [PropertyKey](../globals.md#propertykey) | Name of the property.  |

**Returns:** *[PropertyDescriptor](propertydescriptor.md) | undefined*

___

###  getOwnPropertyDescriptors

▸ **getOwnPropertyDescriptors**<**T**>(`o`: T): *object & object*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.object.d.ts:50

Returns an object containing all own property descriptors of an object

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | T | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.  |

**Returns:** *object & object*

___

###  getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`: any): *string[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:179

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object that contains the own properties.  |

**Returns:** *string[]*

___

###  getOwnPropertySymbols

▸ **getOwnPropertySymbols**(`o`: any): *symbol[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object to retrieve the symbols from.  |

**Returns:** *symbol[]*

___

###  getPrototypeOf

▸ **getPrototypeOf**(`o`: any): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:164

Returns the prototype of an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | The object that references the prototype.  |

**Returns:** *any*

___

###  is

▸ **is**(`value1`: any, `value2`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:332

Returns true if the values are the same value, false otherwise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value1` | any | The first value. |
`value2` | any | The second value.  |

**Returns:** *boolean*

___

###  isExtensible

▸ **isExtensible**(`o`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:255

Returns a value that indicates whether new properties can be added to an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object to test.  |

**Returns:** *boolean*

___

###  isFrozen

▸ **isFrozen**(`o`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:249

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object to test.  |

**Returns:** *boolean*

___

###  isSealed

▸ **isSealed**(`o`: any): *boolean*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:243

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | Object to test.  |

**Returns:** *boolean*

___

###  keys

▸ **keys**(`o`: object): *string[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:261

Returns the names of the enumerable string properties and methods of an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.  |

**Returns:** *string[]*

▸ **keys**(`o`: object): *string[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.  |

**Returns:** *string[]*

___

###  preventExtensions

▸ **preventExtensions**<**T**>(`o`: T): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:237

Prevents the addition of new properties to an object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | T | Object to make non-extensible.  |

**Returns:** *T*

___

###  seal

▸ **seal**<**T**>(`o`: T): *T*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:213

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | T | Object on which to lock the attributes.  |

**Returns:** *T*

___

###  setPrototypeOf

▸ **setPrototypeOf**(`o`: any, `proto`: object | null): *any*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:339

Sets the prototype of a specified object o to object proto or null. Returns the object o.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | The object to change its prototype. |
`proto` | object &#124; null | The value of the new prototype or null.  |

**Returns:** *any*

___

###  values

▸ **values**<**T**>(`o`: object | [ArrayLike](arraylike.md)‹T›): *T[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.object.d.ts:26

Returns an array of values of the enumerable properties of an object

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object &#124; [ArrayLike](arraylike.md)‹T› | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.  |

**Returns:** *T[]*

▸ **values**(`o`: object): *any[]*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.object.d.ts:32

Returns an array of values of the enumerable properties of an object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | object | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.  |

**Returns:** *any[]*
