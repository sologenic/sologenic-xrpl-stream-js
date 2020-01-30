[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [resolveMx](_dns_.resolvemx.md)

# Module: resolveMx

## Callable

▸ **resolveMx**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:204

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [MxRecord](../interfaces/_dns_.mxrecord.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [MxRecord](../interfaces/_dns_.mxrecord.md)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.resolvemx.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:206

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*
