[typescript](../README.md) › [Globals](../globals.md) › [PromiseConstructor](promiseconstructor.md)

# Interface: PromiseConstructor

## Hierarchy

* **PromiseConstructor**

## Index

### Constructors

* [constructor](promiseconstructor.md#constructor)

### Properties

* [[Symbol.species]](promiseconstructor.md#[symbol.species])
* [prototype](promiseconstructor.md#prototype)

### Methods

* [all](promiseconstructor.md#all)
* [race](promiseconstructor.md#race)
* [reject](promiseconstructor.md#reject)
* [resolve](promiseconstructor.md#resolve)

## Constructors

###  constructor

\+ **new PromiseConstructor**<**T**>(`executor`: function): *[Promise](promise.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:25

Creates a new Promise.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **executor**: *function*

A callback used to initialize the promise. This callback is passed two arguments:
a resolve callback used to resolve the promise with a value or the result of another promise,
and a reject callback used to reject the promise with a provided reason or error.

▸ (`resolve`: function, `reject`: function): *void*

**Parameters:**

▪ **resolve**: *function*

▸ (`value?`: T | [PromiseLike](promiselike.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | T &#124; [PromiseLike](promiselike.md)‹T› |

▪ **reject**: *function*

▸ (`reason?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`reason?` | any |

**Returns:** *[Promise](promise.md)‹T›*

## Properties

###  [Symbol.species]

• **[Symbol.species]**: *[PromiseConstructor](promiseconstructor.md)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:173

___

###  prototype

• **prototype**: *[Promise](promise.md)‹any›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:25

A reference to the prototype.

## Methods

###  all

▸ **all**<**TAll**>(`values`: [Iterable](iterable.md)‹TAll | [PromiseLike](promiselike.md)‹TAll››): *[Promise](promise.md)‹TAll[]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:226

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **TAll**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | [Iterable](iterable.md)‹TAll &#124; [PromiseLike](promiselike.md)‹TAll›› | An array of Promises. |

**Returns:** *[Promise](promise.md)‹TAll[]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**, **T7**, **T8**, **T9**, **T10**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:41

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

▪ **T7**

▪ **T8**

▪ **T9**

▪ **T10**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>, T4 &#124; PromiseLike<T4>, T5 &#124; PromiseLike<T5>, T6 &#124; PromiseLike<T6>, T7 &#124; PromiseLike<T7>, T8 &#124; PromiseLike<T8>, T9 &#124; PromiseLike<T9>, T10 &#124; PromiseLike<T10>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**, **T7**, **T8**, **T9**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7, T8, T9]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:49

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

▪ **T7**

▪ **T8**

▪ **T9**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>, T4 &#124; PromiseLike<T4>, T5 &#124; PromiseLike<T5>, T6 &#124; PromiseLike<T6>, T7 &#124; PromiseLike<T7>, T8 &#124; PromiseLike<T8>, T9 &#124; PromiseLike<T9>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7, T8, T9]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**, **T7**, **T8**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7, T8]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:57

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

▪ **T7**

▪ **T8**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>, T4 &#124; PromiseLike<T4>, T5 &#124; PromiseLike<T5>, T6 &#124; PromiseLike<T6>, T7 &#124; PromiseLike<T7>, T8 &#124; PromiseLike<T8>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7, T8]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**, **T7**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:65

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

▪ **T7**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>, T4 &#124; PromiseLike<T4>, T5 &#124; PromiseLike<T5>, T6 &#124; PromiseLike<T6>, T7 &#124; PromiseLike<T7>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6, T7]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**, **T4**, **T5**, **T6**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:73

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **T6**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>, T4 &#124; PromiseLike<T4>, T5 &#124; PromiseLike<T5>, T6 &#124; PromiseLike<T6>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3, T4, T5, T6]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**, **T4**, **T5**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): *[Promise](promise.md)‹[T1, T2, T3, T4, T5]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:81

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>, T4 &#124; PromiseLike<T4>, T5 &#124; PromiseLike<T5>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3, T4, T5]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**, **T4**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): *[Promise](promise.md)‹[T1, T2, T3, T4]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:89

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>, T4 &#124; PromiseLike<T4>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3, T4]›*

A new Promise.

▸ **all**<**T1**, **T2**, **T3**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): *[Promise](promise.md)‹[T1, T2, T3]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:97

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>, T3 &#124; PromiseLike<T3>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2, T3]›*

A new Promise.

▸ **all**<**T1**, **T2**>(`values`: keyof [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): *[Promise](promise.md)‹[T1, T2]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:105

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof [T1 &#124; PromiseLike<T1>, T2 &#124; PromiseLike<T2>] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹[T1, T2]›*

A new Promise.

▸ **all**<**T**>(`values`: keyof (T | PromiseLike<T>)[]): *[Promise](promise.md)‹T[]›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:113

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof (T &#124; PromiseLike<T>)[] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹T[]›*

A new Promise.

___

###  race

▸ **race**<**T**>(`values`: [Iterable](iterable.md)‹T | [PromiseLike](promiselike.md)‹T››): *[Promise](promise.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:234

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | [Iterable](iterable.md)‹T &#124; [PromiseLike](promiselike.md)‹T›› | An array of Promises. |

**Returns:** *[Promise](promise.md)‹T›*

A new Promise.

▸ **race**<**T**>(`values`: keyof T[]): *[Promise](promise.md)‹T extends PromiseLike<infer U> ? U : T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:121

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | An array of Promises. |

**Returns:** *[Promise](promise.md)‹T extends PromiseLike<infer U> ? U : T›*

A new Promise.

▸ **race**<**T**>(`values`: [Iterable](iterable.md)‹T›): *[Promise](promise.md)‹T extends PromiseLike<infer U> ? U : T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:129

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | [Iterable](iterable.md)‹T› | An iterable of Promises. |

**Returns:** *[Promise](promise.md)‹T extends PromiseLike<infer U> ? U : T›*

A new Promise.

___

###  reject

▸ **reject**<**T**>(`reason?`: any): *[Promise](promise.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:136

Creates a new rejected promise for the provided reason.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reason?` | any | The reason the promise was rejected. |

**Returns:** *[Promise](promise.md)‹T›*

A new rejected Promise.

___

###  resolve

▸ **resolve**<**T**>(`value`: T | [PromiseLike](promiselike.md)‹T›): *[Promise](promise.md)‹T›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:143

Creates a new resolved promise for the provided value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T &#124; [PromiseLike](promiselike.md)‹T› | A promise. |

**Returns:** *[Promise](promise.md)‹T›*

A promise whose internal state matches the provided promise.

▸ **resolve**(): *[Promise](promise.md)‹void›*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.promise.d.ts:149

Creates a new resolved promise .

**Returns:** *[Promise](promise.md)‹void›*

A resolved promise.
