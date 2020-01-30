[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [resolveAny](_dns_.resolveany.md)

# Module: resolveAny

## Callable

▸ **resolveAny**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:239

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [AnyRecord](_dns_.md#anyrecord)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [AnyRecord](_dns_.md#anyrecord)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.resolveany.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*

Defined in node_modules/@types/node/dns.d.ts:241

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*
