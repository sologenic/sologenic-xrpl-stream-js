[typescript](../README.md) › [Globals](../globals.md) › ["util"](_util_.md) › [promisify](_util_.promisify.md)

# Module: promisify

## Callable

▸ **promisify**<**TCustom**>(`fn`: [CustomPromisify](../interfaces/_util_.custompromisify.md)‹TCustom›): *TCustom*

Defined in node_modules/@types/node/util.d.ts:86

**Type parameters:**

▪ **TCustom**: *[Function](../interfaces/function.md)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [CustomPromisify](../interfaces/_util_.custompromisify.md)‹TCustom› |

**Returns:** *TCustom*

▸ **promisify**<**TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:87

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`callback`: function): *void*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`result` | TResult |

**Returns:** *function*

▸ (): *[Promise](../interfaces/promise.md)‹TResult›*

▸ **promisify**(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:88

**Parameters:**

▪ **fn**: *function*

▸ (`callback`: function): *void*

**Parameters:**

▪ **callback**: *function*

▸ (`err?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *function*

▸ (): *[Promise](../interfaces/promise.md)‹void›*

▸ **promisify**<**T1**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:89

**Type parameters:**

▪ **T1**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`result` | TResult |

**Returns:** *function*

▸ (`arg1`: T1): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

▸ **promisify**<**T1**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:90

**Type parameters:**

▪ **T1**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **callback**: *function*

▸ (`err?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *function*

▸ (`arg1`: T1): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

▸ **promisify**<**T1**, **T2**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:91

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`result` | TResult |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |

▸ **promisify**<**T1**, **T2**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:92

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **callback**: *function*

▸ (`err?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |

▸ **promisify**<**T1**, **T2**, **T3**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:93

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`result` | TResult |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

▸ **promisify**<**T1**, **T2**, **T3**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:94

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **callback**: *function*

▸ (`err?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:95

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`result` | TResult |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:98

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **callback**: *function*

▸ (`err?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**, **T5**, **TResult**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:99

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

▪ **TResult**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **arg5**: *T5*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `result`: TResult): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`result` | TResult |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): *[Promise](../interfaces/promise.md)‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |

▸ **promisify**<**T1**, **T2**, **T3**, **T4**, **T5**>(`fn`: function): *function*

Defined in node_modules/@types/node/util.d.ts:102

**Type parameters:**

▪ **T1**

▪ **T2**

▪ **T3**

▪ **T4**

▪ **T5**

**Parameters:**

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5, `callback`: function): *void*

**Parameters:**

▪ **arg1**: *T1*

▪ **arg2**: *T2*

▪ **arg3**: *T3*

▪ **arg4**: *T4*

▪ **arg5**: *T5*

▪ **callback**: *function*

▸ (`err?`: [Error](../interfaces/error.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../interfaces/error.md) &#124; null |

**Returns:** *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, `arg4`: T4, `arg5`: T5): *[Promise](../interfaces/promise.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`arg4` | T4 |
`arg5` | T5 |

▸ **promisify**(`fn`: [Function](../interfaces/function.md)): *[Function](../interfaces/function.md)*

Defined in node_modules/@types/node/util.d.ts:105

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Function](../interfaces/function.md) |

**Returns:** *[Function](../interfaces/function.md)*

## Index

### Variables

* [custom](_util_.promisify.md#const-custom)

## Variables

### `Const` custom

• **custom**: *keyof symbol*

Defined in node_modules/@types/node/ts3.2/util.d.ts:9
