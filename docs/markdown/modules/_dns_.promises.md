[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md) › [promises](_dns_.promises.md)

# Module: promises

## Index

### Classes

* [Resolver](../classes/_dns_.promises.resolver.md)

### Functions

* [getServers](_dns_.promises.md#getservers)
* [lookup](_dns_.promises.md#lookup)
* [lookupService](_dns_.promises.md#lookupservice)
* [resolve](_dns_.promises.md#resolve)
* [resolve4](_dns_.promises.md#resolve4)
* [resolve6](_dns_.promises.md#resolve6)
* [resolveAny](_dns_.promises.md#resolveany)
* [resolveCname](_dns_.promises.md#resolvecname)
* [resolveMx](_dns_.promises.md#resolvemx)
* [resolveNaptr](_dns_.promises.md#resolvenaptr)
* [resolveNs](_dns_.promises.md#resolvens)
* [resolvePtr](_dns_.promises.md#resolveptr)
* [resolveSoa](_dns_.promises.md#resolvesoa)
* [resolveSrv](_dns_.promises.md#resolvesrv)
* [resolveTxt](_dns_.promises.md#resolvetxt)
* [reverse](_dns_.promises.md#reverse)
* [setServers](_dns_.promises.md#setservers)

## Functions

###  getServers

▸ **getServers**(): *string[]*

Defined in node_modules/@types/node/dns.d.ts:294

**Returns:** *string[]*

___

###  lookup

▸ **lookup**(`hostname`: string, `family`: number): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

Defined in node_modules/@types/node/dns.d.ts:296

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`family` | number |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

▸ **lookup**(`hostname`: string, `options`: [LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md)): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

Defined in node_modules/@types/node/dns.d.ts:297

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

▸ **lookup**(`hostname`: string, `options`: [LookupAllOptions](../interfaces/_dns_.lookupalloptions.md)): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:298

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [LookupAllOptions](../interfaces/_dns_.lookupalloptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*

▸ **lookup**(`hostname`: string, `options`: [LookupOptions](../interfaces/_dns_.lookupoptions.md)): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md) | [LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:299

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [LookupOptions](../interfaces/_dns_.lookupoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md) | [LookupAddress](../interfaces/_dns_.lookupaddress.md)[]›*

▸ **lookup**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

Defined in node_modules/@types/node/dns.d.ts:300

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[LookupAddress](../interfaces/_dns_.lookupaddress.md)›*

___

###  lookupService

▸ **lookupService**(`address`: string, `port`: number): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/dns.d.ts:302

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`port` | number |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

___

###  resolve

▸ **resolve**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:304

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "A"): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:305

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "A" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "AAAA"): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "AAAA" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "ANY"): *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*

Defined in node_modules/@types/node/dns.d.ts:307

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "ANY" |

**Returns:** *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "CNAME"): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:308

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "CNAME" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "MX"): *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:309

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "MX" |

**Returns:** *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "NAPTR"): *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:310

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "NAPTR" |

**Returns:** *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "NS"): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:311

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "NS" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "PTR"): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:312

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "PTR" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "SOA"): *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*

Defined in node_modules/@types/node/dns.d.ts:313

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "SOA" |

**Returns:** *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*

▸ **resolve**(`hostname`: string, `rrtype`: "SRV"): *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:314

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "SRV" |

**Returns:** *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*

▸ **resolve**(`hostname`: string, `rrtype`: "TXT"): *[Promise](../interfaces/promise.md)‹string[][]›*

Defined in node_modules/@types/node/dns.d.ts:315

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | "TXT" |

**Returns:** *[Promise](../interfaces/promise.md)‹string[][]›*

▸ **resolve**(`hostname`: string, `rrtype`: string): *[Promise](../interfaces/promise.md)‹string[] | [MxRecord](../interfaces/_dns_.mxrecord.md)[] | [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] | [SoaRecord](../interfaces/_dns_.soarecord.md) | [SrvRecord](../interfaces/_dns_.srvrecord.md)[] | string[][] | [AnyRecord](_dns_.md#anyrecord)[]›*

Defined in node_modules/@types/node/dns.d.ts:316

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`rrtype` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[] | [MxRecord](../interfaces/_dns_.mxrecord.md)[] | [NaptrRecord](../interfaces/_dns_.naptrrecord.md)[] | [SoaRecord](../interfaces/_dns_.soarecord.md) | [SrvRecord](../interfaces/_dns_.srvrecord.md)[] | string[][] | [AnyRecord](_dns_.md#anyrecord)[]›*

___

###  resolve4

▸ **resolve4**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:318

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve4**(`hostname`: string, `options`: [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md)): *[Promise](../interfaces/promise.md)‹[RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:319

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

▸ **resolve4**(`hostname`: string, `options`: [ResolveOptions](../interfaces/_dns_.resolveoptions.md)): *[Promise](../interfaces/promise.md)‹string[] | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:320

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [ResolveOptions](../interfaces/_dns_.resolveoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹string[] | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

___

###  resolve6

▸ **resolve6**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:322

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

▸ **resolve6**(`hostname`: string, `options`: [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md)): *[Promise](../interfaces/promise.md)‹[RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:323

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

▸ **resolve6**(`hostname`: string, `options`: [ResolveOptions](../interfaces/_dns_.resolveoptions.md)): *[Promise](../interfaces/promise.md)‹string[] | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:324

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |
`options` | [ResolveOptions](../interfaces/_dns_.resolveoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹string[] | [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)[]›*

___

###  resolveAny

▸ **resolveAny**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*

Defined in node_modules/@types/node/dns.d.ts:326

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[AnyRecord](_dns_.md#anyrecord)[]›*

___

###  resolveCname

▸ **resolveCname**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:328

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

___

###  resolveMx

▸ **resolveMx**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:330

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[MxRecord](../interfaces/_dns_.mxrecord.md)[]›*

___

###  resolveNaptr

▸ **resolveNaptr**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:332

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[NaptrRecord](../interfaces/_dns_.naptrrecord.md)[]›*

___

###  resolveNs

▸ **resolveNs**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:334

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

___

###  resolvePtr

▸ **resolvePtr**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:336

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

___

###  resolveSoa

▸ **resolveSoa**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*

Defined in node_modules/@types/node/dns.d.ts:338

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[SoaRecord](../interfaces/_dns_.soarecord.md)›*

___

###  resolveSrv

▸ **resolveSrv**(`hostname`: string): *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*

Defined in node_modules/@types/node/dns.d.ts:340

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹[SrvRecord](../interfaces/_dns_.srvrecord.md)[]›*

___

###  resolveTxt

▸ **resolveTxt**(`hostname`: string): *[Promise](../interfaces/promise.md)‹string[][]›*

Defined in node_modules/@types/node/dns.d.ts:342

**Parameters:**

Name | Type |
------ | ------ |
`hostname` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[][]›*

___

###  reverse

▸ **reverse**(`ip`: string): *[Promise](../interfaces/promise.md)‹string[]›*

Defined in node_modules/@types/node/dns.d.ts:344

**Parameters:**

Name | Type |
------ | ------ |
`ip` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹string[]›*

___

###  setServers

▸ **setServers**(`servers`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›): *void*

Defined in node_modules/@types/node/dns.d.ts:346

**Parameters:**

Name | Type |
------ | ------ |
`servers` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |

**Returns:** *void*
