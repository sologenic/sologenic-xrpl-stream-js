[typescript](../README.md) › [Globals](../globals.md) › ["dns"](_dns_.md)

# Module: "dns"

## Index

### Modules

* [lookup](_dns_.lookup.md)
* [lookupService](_dns_.lookupservice.md)
* [promises](_dns_.promises.md)
* [resolve](_dns_.resolve.md)
* [resolve4](_dns_.resolve4.md)
* [resolve6](_dns_.resolve6.md)
* [resolveAny](_dns_.resolveany.md)
* [resolveCname](_dns_.resolvecname.md)
* [resolveMx](_dns_.resolvemx.md)
* [resolveNaptr](_dns_.resolvenaptr.md)
* [resolveNs](_dns_.resolvens.md)
* [resolvePtr](_dns_.resolveptr.md)
* [resolveSoa](_dns_.resolvesoa.md)
* [resolveSrv](_dns_.resolvesrv.md)
* [resolveTxt](_dns_.resolvetxt.md)

### Classes

* [Resolver](../classes/_dns_.resolver.md)

### Interfaces

* [AnyARecord](../interfaces/_dns_.anyarecord.md)
* [AnyAaaaRecord](../interfaces/_dns_.anyaaaarecord.md)
* [AnyCnameRecord](../interfaces/_dns_.anycnamerecord.md)
* [AnyMxRecord](../interfaces/_dns_.anymxrecord.md)
* [AnyNaptrRecord](../interfaces/_dns_.anynaptrrecord.md)
* [AnyNsRecord](../interfaces/_dns_.anynsrecord.md)
* [AnyPtrRecord](../interfaces/_dns_.anyptrrecord.md)
* [AnySoaRecord](../interfaces/_dns_.anysoarecord.md)
* [AnySrvRecord](../interfaces/_dns_.anysrvrecord.md)
* [AnyTxtRecord](../interfaces/_dns_.anytxtrecord.md)
* [LookupAddress](../interfaces/_dns_.lookupaddress.md)
* [LookupAllOptions](../interfaces/_dns_.lookupalloptions.md)
* [LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md)
* [LookupOptions](../interfaces/_dns_.lookupoptions.md)
* [MxRecord](../interfaces/_dns_.mxrecord.md)
* [NaptrRecord](../interfaces/_dns_.naptrrecord.md)
* [RecordWithTtl](../interfaces/_dns_.recordwithttl.md)
* [ResolveOptions](../interfaces/_dns_.resolveoptions.md)
* [ResolveWithTtlOptions](../interfaces/_dns_.resolvewithttloptions.md)
* [SoaRecord](../interfaces/_dns_.soarecord.md)
* [SrvRecord](../interfaces/_dns_.srvrecord.md)

### Type aliases

* [AnyRecord](_dns_.md#anyrecord)
* [AnyRecordWithTtl](_dns_.md#anyrecordwithttl)

### Variables

* [ADDRCONFIG](_dns_.md#const-addrconfig)
* [ADDRGETNETWORKPARAMS](_dns_.md#const-addrgetnetworkparams)
* [BADFAMILY](_dns_.md#const-badfamily)
* [BADFLAGS](_dns_.md#const-badflags)
* [BADHINTS](_dns_.md#const-badhints)
* [BADNAME](_dns_.md#const-badname)
* [BADQUERY](_dns_.md#const-badquery)
* [BADRESP](_dns_.md#const-badresp)
* [BADSTR](_dns_.md#const-badstr)
* [CANCELLED](_dns_.md#const-cancelled)
* [CONNREFUSED](_dns_.md#const-connrefused)
* [DESTRUCTION](_dns_.md#const-destruction)
* [EOF](_dns_.md#const-eof)
* [FILE](_dns_.md#const-file)
* [FORMERR](_dns_.md#const-formerr)
* [LOADIPHLPAPI](_dns_.md#const-loadiphlpapi)
* [NODATA](_dns_.md#const-nodata)
* [NOMEM](_dns_.md#const-nomem)
* [NONAME](_dns_.md#const-noname)
* [NOTFOUND](_dns_.md#const-notfound)
* [NOTIMP](_dns_.md#const-notimp)
* [NOTINITIALIZED](_dns_.md#const-notinitialized)
* [REFUSED](_dns_.md#const-refused)
* [SERVFAIL](_dns_.md#const-servfail)
* [TIMEOUT](_dns_.md#const-timeout)
* [V4MAPPED](_dns_.md#const-v4mapped)

### Functions

* [getServers](_dns_.md#getservers)
* [reverse](_dns_.md#reverse)
* [setServers](_dns_.md#setservers)

## Type aliases

###  AnyRecord

Ƭ **AnyRecord**: *[AnyARecord](../interfaces/_dns_.anyarecord.md) | [AnyAaaaRecord](../interfaces/_dns_.anyaaaarecord.md) | [AnyCnameRecord](../interfaces/_dns_.anycnamerecord.md) | [AnyMxRecord](../interfaces/_dns_.anymxrecord.md) | [AnyNaptrRecord](../interfaces/_dns_.anynaptrrecord.md) | [AnyNsRecord](../interfaces/_dns_.anynsrecord.md) | [AnyPtrRecord](../interfaces/_dns_.anyptrrecord.md) | [AnySoaRecord](../interfaces/_dns_.anysoarecord.md) | [AnySrvRecord](../interfaces/_dns_.anysrvrecord.md) | [AnyTxtRecord](../interfaces/_dns_.anytxtrecord.md)*

Defined in node_modules/@types/node/dns.d.ts:136

___

###  AnyRecordWithTtl

Ƭ **AnyRecordWithTtl**: *[AnyARecord](../interfaces/_dns_.anyarecord.md) | [AnyAaaaRecord](../interfaces/_dns_.anyaaaarecord.md)*

Defined in node_modules/@types/node/dns.d.ts:59

**`deprecated`** Use AnyARecord or AnyAaaaRecord instead.

## Variables

### `Const` ADDRCONFIG

• **ADDRCONFIG**: *number*

Defined in node_modules/@types/node/dns.d.ts:3

___

### `Const` ADDRGETNETWORKPARAMS

• **ADDRGETNETWORKPARAMS**: *string*

Defined in node_modules/@types/node/dns.d.ts:271

___

### `Const` BADFAMILY

• **BADFAMILY**: *string*

Defined in node_modules/@types/node/dns.d.ts:257

___

### `Const` BADFLAGS

• **BADFLAGS**: *string*

Defined in node_modules/@types/node/dns.d.ts:266

___

### `Const` BADHINTS

• **BADHINTS**: *string*

Defined in node_modules/@types/node/dns.d.ts:268

___

### `Const` BADNAME

• **BADNAME**: *string*

Defined in node_modules/@types/node/dns.d.ts:256

___

### `Const` BADQUERY

• **BADQUERY**: *string*

Defined in node_modules/@types/node/dns.d.ts:255

___

### `Const` BADRESP

• **BADRESP**: *string*

Defined in node_modules/@types/node/dns.d.ts:258

___

### `Const` BADSTR

• **BADSTR**: *string*

Defined in node_modules/@types/node/dns.d.ts:265

___

### `Const` CANCELLED

• **CANCELLED**: *string*

Defined in node_modules/@types/node/dns.d.ts:272

___

### `Const` CONNREFUSED

• **CONNREFUSED**: *string*

Defined in node_modules/@types/node/dns.d.ts:259

___

### `Const` DESTRUCTION

• **DESTRUCTION**: *string*

Defined in node_modules/@types/node/dns.d.ts:264

___

### `Const` EOF

• **EOF**: *string*

Defined in node_modules/@types/node/dns.d.ts:261

___

### `Const` FILE

• **FILE**: *string*

Defined in node_modules/@types/node/dns.d.ts:262

___

### `Const` FORMERR

• **FORMERR**: *string*

Defined in node_modules/@types/node/dns.d.ts:250

___

### `Const` LOADIPHLPAPI

• **LOADIPHLPAPI**: *string*

Defined in node_modules/@types/node/dns.d.ts:270

___

### `Const` NODATA

• **NODATA**: *string*

Defined in node_modules/@types/node/dns.d.ts:249

___

### `Const` NOMEM

• **NOMEM**: *string*

Defined in node_modules/@types/node/dns.d.ts:263

___

### `Const` NONAME

• **NONAME**: *string*

Defined in node_modules/@types/node/dns.d.ts:267

___

### `Const` NOTFOUND

• **NOTFOUND**: *string*

Defined in node_modules/@types/node/dns.d.ts:252

___

### `Const` NOTIMP

• **NOTIMP**: *string*

Defined in node_modules/@types/node/dns.d.ts:253

___

### `Const` NOTINITIALIZED

• **NOTINITIALIZED**: *string*

Defined in node_modules/@types/node/dns.d.ts:269

___

### `Const` REFUSED

• **REFUSED**: *string*

Defined in node_modules/@types/node/dns.d.ts:254

___

### `Const` SERVFAIL

• **SERVFAIL**: *string*

Defined in node_modules/@types/node/dns.d.ts:251

___

### `Const` TIMEOUT

• **TIMEOUT**: *string*

Defined in node_modules/@types/node/dns.d.ts:260

___

### `Const` V4MAPPED

• **V4MAPPED**: *number*

Defined in node_modules/@types/node/dns.d.ts:4

## Functions

###  getServers

▸ **getServers**(): *string[]*

Defined in node_modules/@types/node/dns.d.ts:246

**Returns:** *string[]*

___

###  reverse

▸ **reverse**(`ip`: string, `callback`: function): *void*

Defined in node_modules/@types/node/dns.d.ts:244

**Parameters:**

▪ **ip**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `hostnames`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`hostnames` | string[] |

**Returns:** *void*

___

###  setServers

▸ **setServers**(`servers`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string›): *void*

Defined in node_modules/@types/node/dns.d.ts:245

**Parameters:**

Name | Type |
------ | ------ |
`servers` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› |

**Returns:** *void*
