[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [resolveSoa](_dns_.resolvesoa.md)

# Module: resolveSoa

## Callable

▸ **resolveSoa**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:224

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `address`: [SoaRecord](../interfaces/_dns_.soarecord.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`address` | [SoaRecord](../interfaces/_dns_.soarecord.md) |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.resolvesoa.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*

Defined in node_modules/@types/node/dns.d.ts:226

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*
