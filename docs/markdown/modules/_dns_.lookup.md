[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [lookup](_dns_.lookup.md)

# Module: lookup

## Callable

▸ **lookup**(`hostname`: string, `family`: number, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:26

**Parameters:**

▪ **hostname**: *string*

▪ **family**: *number*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `address`: string, `family`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`address` | string |
`family` | number |

**Returns:** *void*

▸ **lookup**(`hostname`: string, `options`: [LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:27

**Parameters:**

▪ **hostname**: *string*

▪ **options**: *[LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `address`: string, `family`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`address` | string |
`family` | number |

**Returns:** *void*

▸ **lookup**(`hostname`: string, `options`: [LookupAllOptions](../interfaces/_dns_.lookupalloptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:28

**Parameters:**

▪ **hostname**: *string*

▪ **options**: *[LookupAllOptions](../interfaces/_dns_.lookupalloptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `addresses`: [LookupAddress](../interfaces/_dns_.lookupaddress.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`addresses` | [LookupAddress](../interfaces/_dns_.lookupaddress.md)[] |

**Returns:** *void*

▸ **lookup**(`hostname`: string, `options`: [LookupOptions](../interfaces/_dns_.lookupoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:29

**Parameters:**

▪ **hostname**: *string*

▪ **options**: *[LookupOptions](../interfaces/_dns_.lookupoptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `address`: string | [LookupAddress](../interfaces/_dns_.lookupaddress.md)[], `family`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`address` | string &#124; [LookupAddress](../interfaces/_dns_.lookupaddress.md)[] |
`family` | number |

**Returns:** *void*

▸ **lookup**(`hostname`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:30

**Parameters:**

▪ **hostname**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `address`: string, `family`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`address` | string |
`family` | number |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_dns_.lookup.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`hostname`: string, `options`: [LookupAllOptions](../interfaces/_dns_.lookupalloptions.md)): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [LookupAllOptions](../interfaces/_dns_.lookupalloptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*

▸ **__promisify__**(`hostname`: string, `options?`: [LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md) | number): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

Defined in node_modules/@types/node/dns.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options?` | [LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md) &#124; number |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

▸ **__promisify__**(`hostname`: string, `options`: [LookupOptions](../interfaces/_dns_.lookupoptions.md)): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md) | [LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [LookupOptions](../interfaces/_dns_.lookupoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md) | [LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*
