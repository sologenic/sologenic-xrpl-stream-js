[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [resolveNaptr](_dns_.resolvenaptr.md)

# Module: resolveNaptr

## Callable

▸ **resolveNaptr**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:209

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.resolvenaptr.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*
