[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [lookupService](_dns_.lookupservice.md)

# Module: lookupService

## Callable

▸ **lookupService**(`address`: string, `port`: number, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:39

**Parameters:**

▪ **address**: *string*

▪ **port**: *number*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `hostname`: string, `service`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`hostname` | string |
`service` | string |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.lookupservice.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`address`: string, `port`: number): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/dns.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`port` | number |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*
