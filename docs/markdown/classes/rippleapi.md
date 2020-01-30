[typescript](../README.md) › [Globals](../globals.md) › [RippleAPI](rippleapi.md)

# Class: RippleAPI

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **RippleAPI**

  ↳ [RippleAPIBroadcast](rippleapibroadcast.md)

## Index

### Constructors

* [constructor](rippleapi.md#constructor)

### Properties

* [_feeCushion](rippleapi.md#_feecushion)
* [_maxFeeXRP](rippleapi.md#_maxfeexrp)
* [combine](rippleapi.md#combine)
* [computeLedgerHash](rippleapi.md#computeledgerhash)
* [connect](rippleapi.md#connect)
* [connection](rippleapi.md#connection)
* [deriveAddress](rippleapi.md#deriveaddress)
* [deriveKeypair](rippleapi.md#derivekeypair)
* [disconnect](rippleapi.md#disconnect)
* [dropsToXrp](rippleapi.md#dropstoxrp)
* [errors](rippleapi.md#errors)
* [generateAddress](rippleapi.md#generateaddress)
* [getAccountInfo](rippleapi.md#getaccountinfo)
* [getAccountObjects](rippleapi.md#getaccountobjects)
* [getBalanceSheet](rippleapi.md#getbalancesheet)
* [getBalances](rippleapi.md#getbalances)
* [getFee](rippleapi.md#getfee)
* [getLedger](rippleapi.md#getledger)
* [getLedgerVersion](rippleapi.md#getledgerversion)
* [getOrderbook](rippleapi.md#getorderbook)
* [getOrders](rippleapi.md#getorders)
* [getPaths](rippleapi.md#getpaths)
* [getPaymentChannel](rippleapi.md#getpaymentchannel)
* [getServerInfo](rippleapi.md#getserverinfo)
* [getSettings](rippleapi.md#getsettings)
* [getTransaction](rippleapi.md#gettransaction)
* [getTransactions](rippleapi.md#gettransactions)
* [getTrustlines](rippleapi.md#gettrustlines)
* [isConnected](rippleapi.md#isconnected)
* [isValidAddress](rippleapi.md#isvalidaddress)
* [isValidSecret](rippleapi.md#isvalidsecret)
* [iso8601ToRippleTime](rippleapi.md#iso8601torippletime)
* [parseAccountFlags](rippleapi.md#parseaccountflags)
* [prepareCheckCancel](rippleapi.md#preparecheckcancel)
* [prepareCheckCash](rippleapi.md#preparecheckcash)
* [prepareCheckCreate](rippleapi.md#preparecheckcreate)
* [prepareEscrowCancellation](rippleapi.md#prepareescrowcancellation)
* [prepareEscrowCreation](rippleapi.md#prepareescrowcreation)
* [prepareEscrowExecution](rippleapi.md#prepareescrowexecution)
* [prepareOrder](rippleapi.md#prepareorder)
* [prepareOrderCancellation](rippleapi.md#prepareordercancellation)
* [preparePayment](rippleapi.md#preparepayment)
* [preparePaymentChannelClaim](rippleapi.md#preparepaymentchannelclaim)
* [preparePaymentChannelCreate](rippleapi.md#preparepaymentchannelcreate)
* [preparePaymentChannelFund](rippleapi.md#preparepaymentchannelfund)
* [prepareSettings](rippleapi.md#preparesettings)
* [prepareTrustline](rippleapi.md#preparetrustline)
* [rippleTimeToISO8601](rippleapi.md#rippletimetoiso8601)
* [sign](rippleapi.md#sign)
* [signPaymentChannelClaim](rippleapi.md#signpaymentchannelclaim)
* [submit](rippleapi.md#submit)
* [txFlags](rippleapi.md#txflags)
* [verifyPaymentChannelClaim](rippleapi.md#verifypaymentchannelclaim)
* [xrpToDrops](rippleapi.md#xrptodrops)
* [_PRIVATE](rippleapi.md#static-_private)
* [defaultMaxListeners](rippleapi.md#static-defaultmaxlisteners)
* [formatBidsAndAsks](rippleapi.md#static-formatbidsandasks)
* [renameCounterpartyToIssuer](rippleapi.md#static-renamecounterpartytoissuer)

### Methods

* [_requestAll](rippleapi.md#_requestall)
* [addListener](rippleapi.md#addlistener)
* [convertStringToHex](rippleapi.md#convertstringtohex)
* [emit](rippleapi.md#emit)
* [eventNames](rippleapi.md#eventnames)
* [getMaxListeners](rippleapi.md#getmaxlisteners)
* [hasNextPage](rippleapi.md#hasnextpage)
* [listenerCount](rippleapi.md#listenercount)
* [listeners](rippleapi.md#listeners)
* [off](rippleapi.md#off)
* [on](rippleapi.md#on)
* [once](rippleapi.md#once)
* [prepareTransaction](rippleapi.md#preparetransaction)
* [prependListener](rippleapi.md#prependlistener)
* [prependOnceListener](rippleapi.md#prependoncelistener)
* [rawListeners](rippleapi.md#rawlisteners)
* [removeAllListeners](rippleapi.md#removealllisteners)
* [removeListener](rippleapi.md#removelistener)
* [request](rippleapi.md#request)
* [requestNextPage](rippleapi.md#requestnextpage)
* [setMaxListeners](rippleapi.md#setmaxlisteners)
* [listenerCount](rippleapi.md#static-listenercount)

## Constructors

###  constructor

\+ **new RippleAPI**(`options?`: [APIOptions](../interfaces/apioptions.md)): *[RippleAPI](rippleapi.md)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [APIOptions](../interfaces/apioptions.md) |

**Returns:** *[RippleAPI](rippleapi.md)*

## Properties

###  _feeCushion

• **_feeCushion**: *number*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:54

___

###  _maxFeeXRP

• **_maxFeeXRP**: *string*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:55

___

###  combine

• **combine**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:122

___

###  computeLedgerHash

• **computeLedgerHash**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:127

___

###  connect

• **connect**: *typeof connect*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:87

___

###  connection

• **connection**: *[Connection](connection.md)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:56

___

###  deriveAddress

• **deriveAddress**: *any*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:126

___

###  deriveKeypair

• **deriveKeypair**: *any*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:125

___

###  disconnect

• **disconnect**: *typeof disconnect*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:88

___

###  dropsToXrp

• **dropsToXrp**: *typeof dropsToXrp*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:132

___

###  errors

• **errors**: *typeof errors*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:130

___

###  generateAddress

• **generateAddress**: *typeof generateAddressAPI*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:124

___

###  getAccountInfo

• **getAccountInfo**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:102

___

###  getAccountObjects

• **getAccountObjects**: *typeof getAccountObjects*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:103

___

###  getBalanceSheet

• **getBalanceSheet**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:97

___

###  getBalances

• **getBalances**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:96

___

###  getFee

• **getFee**: *typeof getFee*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:91

___

###  getLedger

• **getLedger**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:105

___

###  getLedgerVersion

• **getLedgerVersion**: *typeof getLedgerVersion*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:92

___

###  getOrderbook

• **getOrderbook**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:99

___

###  getOrders

• **getOrders**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:100

___

###  getPaths

• **getPaths**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:98

___

###  getPaymentChannel

• **getPaymentChannel**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:104

___

###  getServerInfo

• **getServerInfo**: *typeof getServerInfo*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:90

___

###  getSettings

• **getSettings**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:101

___

###  getTransaction

• **getTransaction**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:93

___

###  getTransactions

• **getTransactions**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:94

___

###  getTrustlines

• **getTrustlines**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:95

___

###  isConnected

• **isConnected**: *typeof isConnected*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:89

___

###  isValidAddress

• **isValidAddress**: *typeof isValidAddress*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:171

___

###  isValidSecret

• **isValidSecret**: *typeof isValidSecret*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:172

___

###  iso8601ToRippleTime

• **iso8601ToRippleTime**: *typeof iso8601ToRippleTime*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:134

___

###  parseAccountFlags

• **parseAccountFlags**: *typeof parseAccountFlags*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:106

___

###  prepareCheckCancel

• **prepareCheckCancel**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:119

___

###  prepareCheckCash

• **prepareCheckCash**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:118

___

###  prepareCheckCreate

• **prepareCheckCreate**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:117

___

###  prepareEscrowCancellation

• **prepareEscrowCancellation**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:113

___

###  prepareEscrowCreation

• **prepareEscrowCreation**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:111

___

###  prepareEscrowExecution

• **prepareEscrowExecution**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:112

___

###  prepareOrder

• **prepareOrder**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:109

___

###  prepareOrderCancellation

• **prepareOrderCancellation**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:110

___

###  preparePayment

• **preparePayment**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:107

___

###  preparePaymentChannelClaim

• **preparePaymentChannelClaim**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:116

___

###  preparePaymentChannelCreate

• **preparePaymentChannelCreate**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:114

___

###  preparePaymentChannelFund

• **preparePaymentChannelFund**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:115

___

###  prepareSettings

• **prepareSettings**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:120

___

###  prepareTrustline

• **prepareTrustline**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:108

___

###  rippleTimeToISO8601

• **rippleTimeToISO8601**: *typeof rippleTimeToISO8601*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:133

___

###  sign

• **sign**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:121

___

###  signPaymentChannelClaim

• **signPaymentChannelClaim**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:128

___

###  submit

• **submit**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:123

___

###  txFlags

• **txFlags**: *object*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:135

#### Type declaration:

* **AccountSet**(): *object*

  * **AllowXRP**: *number*

  * **DisallowXRP**: *number*

  * **OptionalAuth**: *number*

  * **OptionalDestTag**: *number*

  * **RequireAuth**: *number*

  * **RequireDestTag**: *number*

* **OfferCreate**(): *object*

  * **FillOrKill**: *number*

  * **ImmediateOrCancel**: *number*

  * **Passive**: *number*

  * **Sell**: *number*

* **Payment**(): *object*

  * **LimitQuality**: *number*

  * **NoRippleDirect**: *number*

  * **PartialPayment**: *number*

* **PaymentChannelClaim**(): *object*

  * **Close**: *number*

  * **Renew**: *number*

* **TrustSet**(): *object*

  * **ClearFreeze**: *number*

  * **ClearNoRipple**: *number*

  * **NoRipple**: *number*

  * **SetAuth**: *number*

  * **SetFreeze**: *number*

  * **SetNoRipple**: *number*

* **Universal**(): *object*

  * **FullyCanonicalSig**: *number*

___

###  verifyPaymentChannelClaim

• **verifyPaymentChannelClaim**: *typeof __type*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:129

___

###  xrpToDrops

• **xrpToDrops**: *typeof xrpToDrops*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:131

___

### `Static` _PRIVATE

▪ **_PRIVATE**: *object*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:57

#### Type declaration:

* **RangeSet**: *typeof RangeSet*

* **ledgerUtils**: *typeof ledgerUtils*

* **schemaValidator**: *typeof schemaValidator*

* **validate**: *typeof validate*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

___

### `Static` formatBidsAndAsks

▪ **formatBidsAndAsks**: *typeof formatBidsAndAsks*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:64

___

### `Static` renameCounterpartyToIssuer

▪ **renameCounterpartyToIssuer**: *typeof renameCounterpartyToIssuer*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:63

## Methods

###  _requestAll

▸ **_requestAll**(`command`: "account_offers", `params`: [AccountOffersRequest](../interfaces/accountoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)[]›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:84

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_offers" |
`params` | [AccountOffersRequest](../interfaces/accountoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)[]›*

▸ **_requestAll**(`command`: "book_offers", `params`: [BookOffersRequest](../interfaces/bookoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)[]›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:85

**Parameters:**

Name | Type |
------ | ------ |
`command` | "book_offers" |
`params` | [BookOffersRequest](../interfaces/bookoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)[]›*

▸ **_requestAll**(`command`: "account_lines", `params`: [AccountLinesRequest](../interfaces/accountlinesrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountLinesResponse](../interfaces/accountlinesresponse.md)[]›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:86

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_lines" |
`params` | [AccountLinesRequest](../interfaces/accountlinesrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountLinesResponse](../interfaces/accountlinesresponse.md)[]›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[addListener](nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  convertStringToHex

▸ **convertStringToHex**(`string`: string): *string*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:83

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |

**Returns:** *string*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[emit](nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[eventNames](nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  hasNextPage

▸ **hasNextPage**<**T**>(`currentResponse`: T): *boolean*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:76

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`currentResponse` | T |

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listenerCount](nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[off](nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[on](nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[once](nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prepareTransaction

▸ **prepareTransaction**(`txJSON`: [TransactionJSON](../globals.md#transactionjson), `instructions?`: [Instructions](../globals.md#instructions)): *[Promise](../interfaces/promise.md)‹[Prepare](../globals.md#prepare)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`txJSON` | [TransactionJSON](../globals.md#transactionjson) |
`instructions?` | [Instructions](../globals.md#instructions) |

**Returns:** *[Promise](../interfaces/promise.md)‹[Prepare](../globals.md#prepare)›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependListener](nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[prependOnceListener](nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[rawListeners](nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  request

▸ **request**(`command`: "account_info", `params`: [AccountInfoRequest](../interfaces/accountinforequest.md)): *[Promise](../interfaces/promise.md)‹[AccountInfoResponse](../interfaces/accountinforesponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_info" |
`params` | [AccountInfoRequest](../interfaces/accountinforequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountInfoResponse](../interfaces/accountinforesponse.md)›*

▸ **request**(`command`: "account_lines", `params`: [AccountLinesRequest](../interfaces/accountlinesrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountLinesResponse](../interfaces/accountlinesresponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_lines" |
`params` | [AccountLinesRequest](../interfaces/accountlinesrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountLinesResponse](../interfaces/accountlinesresponse.md)›*

▸ **request**(`command`: "account_objects", `params`: [AccountObjectsRequest](../interfaces/accountobjectsrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountObjectsResponse](../interfaces/accountobjectsresponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_objects" |
`params` | [AccountObjectsRequest](../interfaces/accountobjectsrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountObjectsResponse](../interfaces/accountobjectsresponse.md)›*

▸ **request**(`command`: "account_offers", `params`: [AccountOffersRequest](../interfaces/accountoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_offers" |
`params` | [AccountOffersRequest](../interfaces/accountoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)›*

▸ **request**(`command`: "book_offers", `params`: [BookOffersRequest](../interfaces/bookoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`command` | "book_offers" |
`params` | [BookOffersRequest](../interfaces/bookoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)›*

▸ **request**(`command`: "gateway_balances", `params`: [GatewayBalancesRequest](../interfaces/gatewaybalancesrequest.md)): *[Promise](../interfaces/promise.md)‹[GatewayBalancesResponse](../interfaces/gatewaybalancesresponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`command` | "gateway_balances" |
`params` | [GatewayBalancesRequest](../interfaces/gatewaybalancesrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[GatewayBalancesResponse](../interfaces/gatewaybalancesresponse.md)›*

▸ **request**(`command`: "ledger", `params`: [LedgerRequest](../interfaces/ledgerrequest.md)): *[Promise](../interfaces/promise.md)‹[LedgerResponse](../interfaces/ledgerresponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`command` | "ledger" |
`params` | [LedgerRequest](../interfaces/ledgerrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LedgerResponse](../interfaces/ledgerresponse.md)›*

▸ **request**(`command`: "ledger_entry", `params`: [LedgerEntryRequest](../interfaces/ledgerentryrequest.md)): *[Promise](../interfaces/promise.md)‹[LedgerEntryResponse](../interfaces/ledgerentryresponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`command` | "ledger_entry" |
`params` | [LedgerEntryRequest](../interfaces/ledgerentryrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LedgerEntryResponse](../interfaces/ledgerentryresponse.md)›*

▸ **request**(`command`: "server_info", `params?`: [ServerInfoRequest](../interfaces/serverinforequest.md)): *[Promise](../interfaces/promise.md)‹[ServerInfoResponse](../interfaces/serverinforesponse.md)›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`command` | "server_info" |
`params?` | [ServerInfoRequest](../interfaces/serverinforequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[ServerInfoResponse](../interfaces/serverinforesponse.md)›*

▸ **request**(`command`: string, `params`: any): *[Promise](../interfaces/promise.md)‹any›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:75

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`params` | any |

**Returns:** *[Promise](../interfaces/promise.md)‹any›*

___

###  requestNextPage

▸ **requestNextPage**<**T**>(`command`: string, `params`: object, `currentResponse`: T): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:79

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`params` | object |
`currentResponse` | T |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
