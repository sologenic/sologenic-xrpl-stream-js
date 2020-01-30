[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [resolve6](_dns_.resolve6.md)

# Module: resolve6

## Callable

▸ **resolve6**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:188

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] |

**Returns:** *void*

▸ **resolve6**(`hostname`: string, `options`: [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:189

**Parameters:**

▪ **hostname**: *string*

▪ **options**: *[ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[] |

**Returns:** *void*

▸ **resolve6**(`hostname`: string, `options`: [ResolveOptions](../interfaces/_dns_.resolveoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:190

**Parameters:**

▪ **hostname**: *string*

▪ **options**: *[ResolveOptions](../interfaces/_dns_.resolveoptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: string[] | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | string[] &#124; [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.resolve6.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:194

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **__promisify__**(`hostname`: string, `options`: [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md)): *[Promise](../interfaces/promise.md)‹[RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:195

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

▸ **__promisify__**(`hostname`: string, `options?`: [ResolveOptions](../interfaces/_dns_.resolveoptions.md)): *[Promise](../interfaces/promise.md)‹string[] | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:196

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options?` | [ResolveOptions](../interfaces/_dns_.resolveoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹string[] | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*
