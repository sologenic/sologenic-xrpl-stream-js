[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [resolveSrv](_dns_.resolvesrv.md)

# Module: resolveSrv

## Callable

▸ **resolveSrv**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:229

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [SrvRecord](../interfaces/_dns_.srvrecord.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [SrvRecord](../interfaces/_dns_.srvrecord.md)[] |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.resolvesrv.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:231

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*
