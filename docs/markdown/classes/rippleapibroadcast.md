[typescript](../README.md) › [Globals](../globals.md) › [RippleAPIBroadcast](rippleapibroadcast.md)

# Class: RippleAPIBroadcast

## Hierarchy

  ↳ [RippleAPI](rippleapi.md)

  ↳ **RippleAPIBroadcast**

## Index

### Constructors

* [constructor](rippleapibroadcast.md#constructor)

### Properties

* [_apis](rippleapibroadcast.md#private-_apis)
* [_feeCushion](rippleapibroadcast.md#_feecushion)
* [_maxFeeXRP](rippleapibroadcast.md#_maxfeexrp)
* [combine](rippleapibroadcast.md#combine)
* [computeLedgerHash](rippleapibroadcast.md#computeledgerhash)
* [connect](rippleapibroadcast.md#connect)
* [connection](rippleapibroadcast.md#connection)
* [deriveAddress](rippleapibroadcast.md#deriveaddress)
* [deriveKeypair](rippleapibroadcast.md#derivekeypair)
* [disconnect](rippleapibroadcast.md#disconnect)
* [dropsToXrp](rippleapibroadcast.md#dropstoxrp)
* [errors](rippleapibroadcast.md#errors)
* [generateAddress](rippleapibroadcast.md#generateaddress)
* [getAccountInfo](rippleapibroadcast.md#getaccountinfo)
* [getAccountObjects](rippleapibroadcast.md#getaccountobjects)
* [getBalanceSheet](rippleapibroadcast.md#getbalancesheet)
* [getBalances](rippleapibroadcast.md#getbalances)
* [getFee](rippleapibroadcast.md#getfee)
* [getLedger](rippleapibroadcast.md#getledger)
* [getLedgerVersion](rippleapibroadcast.md#getledgerversion)
* [getOrderbook](rippleapibroadcast.md#getorderbook)
* [getOrders](rippleapibroadcast.md#getorders)
* [getPaths](rippleapibroadcast.md#getpaths)
* [getPaymentChannel](rippleapibroadcast.md#getpaymentchannel)
* [getServerInfo](rippleapibroadcast.md#getserverinfo)
* [getSettings](rippleapibroadcast.md#getsettings)
* [getTransaction](rippleapibroadcast.md#gettransaction)
* [getTransactions](rippleapibroadcast.md#gettransactions)
* [getTrustlines](rippleapibroadcast.md#gettrustlines)
* [isConnected](rippleapibroadcast.md#isconnected)
* [isValidAddress](rippleapibroadcast.md#isvalidaddress)
* [isValidSecret](rippleapibroadcast.md#isvalidsecret)
* [iso8601ToRippleTime](rippleapibroadcast.md#iso8601torippletime)
* [ledgerVersion](rippleapibroadcast.md#ledgerversion)
* [parseAccountFlags](rippleapibroadcast.md#parseaccountflags)
* [prepareCheckCancel](rippleapibroadcast.md#preparecheckcancel)
* [prepareCheckCash](rippleapibroadcast.md#preparecheckcash)
* [prepareCheckCreate](rippleapibroadcast.md#preparecheckcreate)
* [prepareEscrowCancellation](rippleapibroadcast.md#prepareescrowcancellation)
* [prepareEscrowCreation](rippleapibroadcast.md#prepareescrowcreation)
* [prepareEscrowExecution](rippleapibroadcast.md#prepareescrowexecution)
* [prepareOrder](rippleapibroadcast.md#prepareorder)
* [prepareOrderCancellation](rippleapibroadcast.md#prepareordercancellation)
* [preparePayment](rippleapibroadcast.md#preparepayment)
* [preparePaymentChannelClaim](rippleapibroadcast.md#preparepaymentchannelclaim)
* [preparePaymentChannelCreate](rippleapibroadcast.md#preparepaymentchannelcreate)
* [preparePaymentChannelFund](rippleapibroadcast.md#preparepaymentchannelfund)
* [prepareSettings](rippleapibroadcast.md#preparesettings)
* [prepareTrustline](rippleapibroadcast.md#preparetrustline)
* [rippleTimeToISO8601](rippleapibroadcast.md#rippletimetoiso8601)
* [sign](rippleapibroadcast.md#sign)
* [signPaymentChannelClaim](rippleapibroadcast.md#signpaymentchannelclaim)
* [submit](rippleapibroadcast.md#submit)
* [txFlags](rippleapibroadcast.md#txflags)
* [verifyPaymentChannelClaim](rippleapibroadcast.md#verifypaymentchannelclaim)
* [xrpToDrops](rippleapibroadcast.md#xrptodrops)
* [_PRIVATE](rippleapibroadcast.md#static-_private)
* [defaultMaxListeners](rippleapibroadcast.md#static-defaultmaxlisteners)
* [formatBidsAndAsks](rippleapibroadcast.md#static-formatbidsandasks)
* [renameCounterpartyToIssuer](rippleapibroadcast.md#static-renamecounterpartytoissuer)

### Methods

* [_requestAll](rippleapibroadcast.md#_requestall)
* [addListener](rippleapibroadcast.md#addlistener)
* [convertStringToHex](rippleapibroadcast.md#convertstringtohex)
* [emit](rippleapibroadcast.md#emit)
* [eventNames](rippleapibroadcast.md#eventnames)
* [getMaxListeners](rippleapibroadcast.md#getmaxlisteners)
* [getMethodNames](rippleapibroadcast.md#getmethodnames)
* [hasNextPage](rippleapibroadcast.md#hasnextpage)
* [listenerCount](rippleapibroadcast.md#listenercount)
* [listeners](rippleapibroadcast.md#listeners)
* [off](rippleapibroadcast.md#off)
* [on](rippleapibroadcast.md#on)
* [onLedgerEvent](rippleapibroadcast.md#onledgerevent)
* [once](rippleapibroadcast.md#once)
* [prepareTransaction](rippleapibroadcast.md#preparetransaction)
* [prependListener](rippleapibroadcast.md#prependlistener)
* [prependOnceListener](rippleapibroadcast.md#prependoncelistener)
* [rawListeners](rippleapibroadcast.md#rawlisteners)
* [removeAllListeners](rippleapibroadcast.md#removealllisteners)
* [removeListener](rippleapibroadcast.md#removelistener)
* [request](rippleapibroadcast.md#request)
* [requestNextPage](rippleapibroadcast.md#requestnextpage)
* [setMaxListeners](rippleapibroadcast.md#setmaxlisteners)
* [listenerCount](rippleapibroadcast.md#static-listenercount)

## Constructors

###  constructor

\+ **new RippleAPIBroadcast**(`servers`: any, `options`: any): *[RippleAPIBroadcast](rippleapibroadcast.md)*

*Overrides [RippleAPI](rippleapi.md).[constructor](rippleapi.md#constructor)*

Defined in node_modules/ripple-lib/dist/npm/broadcast.d.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`servers` | any |
`options` | any |

**Returns:** *[RippleAPIBroadcast](rippleapibroadcast.md)*

## Properties

### `Private` _apis

• **_apis**: *any*

Defined in node_modules/ripple-lib/dist/npm/broadcast.d.ts:4

___

###  _feeCushion

• **_feeCushion**: *number*

*Inherited from [RippleAPI](rippleapi.md).[_feeCushion](rippleapi.md#_feecushion)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:54

___

###  _maxFeeXRP

• **_maxFeeXRP**: *string*

*Inherited from [RippleAPI](rippleapi.md).[_maxFeeXRP](rippleapi.md#_maxfeexrp)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:55

___

###  combine

• **combine**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[combine](rippleapi.md#combine)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:122

___

###  computeLedgerHash

• **computeLedgerHash**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[computeLedgerHash](rippleapi.md#computeledgerhash)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:127

___

###  connect

• **connect**: *typeof connect*

*Inherited from [RippleAPI](rippleapi.md).[connect](rippleapi.md#connect)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:87

___

###  connection

• **connection**: *[Connection](connection.md)*

*Inherited from [RippleAPI](rippleapi.md).[connection](rippleapi.md#connection)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:56

___

###  deriveAddress

• **deriveAddress**: *any*

*Inherited from [RippleAPI](rippleapi.md).[deriveAddress](rippleapi.md#deriveaddress)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:126

___

###  deriveKeypair

• **deriveKeypair**: *any*

*Inherited from [RippleAPI](rippleapi.md).[deriveKeypair](rippleapi.md#derivekeypair)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:125

___

###  disconnect

• **disconnect**: *typeof disconnect*

*Inherited from [RippleAPI](rippleapi.md).[disconnect](rippleapi.md#disconnect)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:88

___

###  dropsToXrp

• **dropsToXrp**: *typeof dropsToXrp*

*Inherited from [RippleAPI](rippleapi.md).[dropsToXrp](rippleapi.md#dropstoxrp)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:132

___

###  errors

• **errors**: *typeof errors*

*Inherited from [RippleAPI](rippleapi.md).[errors](rippleapi.md#errors)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:130

___

###  generateAddress

• **generateAddress**: *typeof generateAddressAPI*

*Inherited from [RippleAPI](rippleapi.md).[generateAddress](rippleapi.md#generateaddress)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:124

___

###  getAccountInfo

• **getAccountInfo**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getAccountInfo](rippleapi.md#getaccountinfo)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:102

___

###  getAccountObjects

• **getAccountObjects**: *typeof getAccountObjects*

*Inherited from [RippleAPI](rippleapi.md).[getAccountObjects](rippleapi.md#getaccountobjects)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:103

___

###  getBalanceSheet

• **getBalanceSheet**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getBalanceSheet](rippleapi.md#getbalancesheet)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:97

___

###  getBalances

• **getBalances**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getBalances](rippleapi.md#getbalances)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:96

___

###  getFee

• **getFee**: *typeof getFee*

*Inherited from [RippleAPI](rippleapi.md).[getFee](rippleapi.md#getfee)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:91

___

###  getLedger

• **getLedger**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getLedger](rippleapi.md#getledger)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:105

___

###  getLedgerVersion

• **getLedgerVersion**: *typeof getLedgerVersion*

*Inherited from [RippleAPI](rippleapi.md).[getLedgerVersion](rippleapi.md#getledgerversion)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:92

___

###  getOrderbook

• **getOrderbook**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getOrderbook](rippleapi.md#getorderbook)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:99

___

###  getOrders

• **getOrders**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getOrders](rippleapi.md#getorders)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:100

___

###  getPaths

• **getPaths**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getPaths](rippleapi.md#getpaths)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:98

___

###  getPaymentChannel

• **getPaymentChannel**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getPaymentChannel](rippleapi.md#getpaymentchannel)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:104

___

###  getServerInfo

• **getServerInfo**: *typeof getServerInfo*

*Inherited from [RippleAPI](rippleapi.md).[getServerInfo](rippleapi.md#getserverinfo)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:90

___

###  getSettings

• **getSettings**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getSettings](rippleapi.md#getsettings)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:101

___

###  getTransaction

• **getTransaction**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getTransaction](rippleapi.md#gettransaction)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:93

___

###  getTransactions

• **getTransactions**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getTransactions](rippleapi.md#gettransactions)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:94

___

###  getTrustlines

• **getTrustlines**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[getTrustlines](rippleapi.md#gettrustlines)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:95

___

###  isConnected

• **isConnected**: *typeof isConnected*

*Inherited from [RippleAPI](rippleapi.md).[isConnected](rippleapi.md#isconnected)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:89

___

###  isValidAddress

• **isValidAddress**: *typeof isValidAddress*

*Inherited from [RippleAPI](rippleapi.md).[isValidAddress](rippleapi.md#isvalidaddress)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:171

___

###  isValidSecret

• **isValidSecret**: *typeof isValidSecret*

*Inherited from [RippleAPI](rippleapi.md).[isValidSecret](rippleapi.md#isvalidsecret)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:172

___

###  iso8601ToRippleTime

• **iso8601ToRippleTime**: *typeof iso8601ToRippleTime*

*Inherited from [RippleAPI](rippleapi.md).[iso8601ToRippleTime](rippleapi.md#iso8601torippletime)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:134

___

###  ledgerVersion

• **ledgerVersion**: *number | undefined*

Defined in node_modules/ripple-lib/dist/npm/broadcast.d.ts:3

___

###  parseAccountFlags

• **parseAccountFlags**: *typeof parseAccountFlags*

*Inherited from [RippleAPI](rippleapi.md).[parseAccountFlags](rippleapi.md#parseaccountflags)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:106

___

###  prepareCheckCancel

• **prepareCheckCancel**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareCheckCancel](rippleapi.md#preparecheckcancel)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:119

___

###  prepareCheckCash

• **prepareCheckCash**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareCheckCash](rippleapi.md#preparecheckcash)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:118

___

###  prepareCheckCreate

• **prepareCheckCreate**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareCheckCreate](rippleapi.md#preparecheckcreate)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:117

___

###  prepareEscrowCancellation

• **prepareEscrowCancellation**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareEscrowCancellation](rippleapi.md#prepareescrowcancellation)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:113

___

###  prepareEscrowCreation

• **prepareEscrowCreation**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareEscrowCreation](rippleapi.md#prepareescrowcreation)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:111

___

###  prepareEscrowExecution

• **prepareEscrowExecution**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareEscrowExecution](rippleapi.md#prepareescrowexecution)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:112

___

###  prepareOrder

• **prepareOrder**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareOrder](rippleapi.md#prepareorder)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:109

___

###  prepareOrderCancellation

• **prepareOrderCancellation**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareOrderCancellation](rippleapi.md#prepareordercancellation)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:110

___

###  preparePayment

• **preparePayment**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[preparePayment](rippleapi.md#preparepayment)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:107

___

###  preparePaymentChannelClaim

• **preparePaymentChannelClaim**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[preparePaymentChannelClaim](rippleapi.md#preparepaymentchannelclaim)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:116

___

###  preparePaymentChannelCreate

• **preparePaymentChannelCreate**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[preparePaymentChannelCreate](rippleapi.md#preparepaymentchannelcreate)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:114

___

###  preparePaymentChannelFund

• **preparePaymentChannelFund**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[preparePaymentChannelFund](rippleapi.md#preparepaymentchannelfund)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:115

___

###  prepareSettings

• **prepareSettings**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareSettings](rippleapi.md#preparesettings)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:120

___

###  prepareTrustline

• **prepareTrustline**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[prepareTrustline](rippleapi.md#preparetrustline)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:108

___

###  rippleTimeToISO8601

• **rippleTimeToISO8601**: *typeof rippleTimeToISO8601*

*Inherited from [RippleAPI](rippleapi.md).[rippleTimeToISO8601](rippleapi.md#rippletimetoiso8601)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:133

___

###  sign

• **sign**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[sign](rippleapi.md#sign)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:121

___

###  signPaymentChannelClaim

• **signPaymentChannelClaim**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[signPaymentChannelClaim](rippleapi.md#signpaymentchannelclaim)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:128

___

###  submit

• **submit**: *typeof __type*

*Inherited from [RippleAPI](rippleapi.md).[submit](rippleapi.md#submit)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:123

___

###  txFlags

• **txFlags**: *object*

*Inherited from [RippleAPI](rippleapi.md).[txFlags](rippleapi.md#txflags)*

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

*Inherited from [RippleAPI](rippleapi.md).[verifyPaymentChannelClaim](rippleapi.md#verifypaymentchannelclaim)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:129

___

###  xrpToDrops

• **xrpToDrops**: *typeof xrpToDrops*

*Inherited from [RippleAPI](rippleapi.md).[xrpToDrops](rippleapi.md#xrptodrops)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:131

___

### `Static` _PRIVATE

▪ **_PRIVATE**: *object*

*Inherited from [RippleAPI](rippleapi.md).[_PRIVATE](rippleapi.md#static-_private)*

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

*Inherited from [RippleAPI](rippleapi.md).[formatBidsAndAsks](rippleapi.md#static-formatbidsandasks)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:64

___

### `Static` renameCounterpartyToIssuer

▪ **renameCounterpartyToIssuer**: *typeof renameCounterpartyToIssuer*

*Inherited from [RippleAPI](rippleapi.md).[renameCounterpartyToIssuer](rippleapi.md#static-renamecounterpartytoissuer)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:63

## Methods

###  _requestAll

▸ **_requestAll**(`command`: "account_offers", `params`: [AccountOffersRequest](../interfaces/accountoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)[]›*

*Inherited from [RippleAPI](rippleapi.md).[_requestAll](rippleapi.md#_requestall)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:84

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_offers" |
`params` | [AccountOffersRequest](../interfaces/accountoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)[]›*

▸ **_requestAll**(`command`: "book_offers", `params`: [BookOffersRequest](../interfaces/bookoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)[]›*

*Inherited from [RippleAPI](rippleapi.md).[_requestAll](rippleapi.md#_requestall)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:85

**Parameters:**

Name | Type |
------ | ------ |
`command` | "book_offers" |
`params` | [BookOffersRequest](../interfaces/bookoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)[]›*

▸ **_requestAll**(`command`: "account_lines", `params`: [AccountLinesRequest](../interfaces/accountlinesrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountLinesResponse](../interfaces/accountlinesresponse.md)[]›*

*Inherited from [RippleAPI](rippleapi.md).[_requestAll](rippleapi.md#_requestall)*

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

*Inherited from [RippleAPI](rippleapi.md).[convertStringToHex](rippleapi.md#convertstringtohex)*

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

###  getMethodNames

▸ **getMethodNames**(): *string[]*

Defined in node_modules/ripple-lib/dist/npm/broadcast.d.ts:7

**Returns:** *string[]*

___

###  hasNextPage

▸ **hasNextPage**<**T**>(`currentResponse`: T): *boolean*

*Inherited from [RippleAPI](rippleapi.md).[hasNextPage](rippleapi.md#hasnextpage)*

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

###  onLedgerEvent

▸ **onLedgerEvent**(`ledger`: any): *void*

Defined in node_modules/ripple-lib/dist/npm/broadcast.d.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ledger` | any |

**Returns:** *void*

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

*Inherited from [RippleAPI](rippleapi.md).[prepareTransaction](rippleapi.md#preparetransaction)*

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

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_info" |
`params` | [AccountInfoRequest](../interfaces/accountinforequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountInfoResponse](../interfaces/accountinforesponse.md)›*

▸ **request**(`command`: "account_lines", `params`: [AccountLinesRequest](../interfaces/accountlinesrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountLinesResponse](../interfaces/accountlinesresponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_lines" |
`params` | [AccountLinesRequest](../interfaces/accountlinesrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountLinesResponse](../interfaces/accountlinesresponse.md)›*

▸ **request**(`command`: "account_objects", `params`: [AccountObjectsRequest](../interfaces/accountobjectsrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountObjectsResponse](../interfaces/accountobjectsresponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_objects" |
`params` | [AccountObjectsRequest](../interfaces/accountobjectsrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountObjectsResponse](../interfaces/accountobjectsresponse.md)›*

▸ **request**(`command`: "account_offers", `params`: [AccountOffersRequest](../interfaces/accountoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`command` | "account_offers" |
`params` | [AccountOffersRequest](../interfaces/accountoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[AccountOffersResponse](../interfaces/accountoffersresponse.md)›*

▸ **request**(`command`: "book_offers", `params`: [BookOffersRequest](../interfaces/bookoffersrequest.md)): *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`command` | "book_offers" |
`params` | [BookOffersRequest](../interfaces/bookoffersrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[BookOffersResponse](../interfaces/bookoffersresponse.md)›*

▸ **request**(`command`: "gateway_balances", `params`: [GatewayBalancesRequest](../interfaces/gatewaybalancesrequest.md)): *[Promise](../interfaces/promise.md)‹[GatewayBalancesResponse](../interfaces/gatewaybalancesresponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`command` | "gateway_balances" |
`params` | [GatewayBalancesRequest](../interfaces/gatewaybalancesrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[GatewayBalancesResponse](../interfaces/gatewaybalancesresponse.md)›*

▸ **request**(`command`: "ledger", `params`: [LedgerRequest](../interfaces/ledgerrequest.md)): *[Promise](../interfaces/promise.md)‹[LedgerResponse](../interfaces/ledgerresponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`command` | "ledger" |
`params` | [LedgerRequest](../interfaces/ledgerrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LedgerResponse](../interfaces/ledgerresponse.md)›*

▸ **request**(`command`: "ledger_entry", `params`: [LedgerEntryRequest](../interfaces/ledgerentryrequest.md)): *[Promise](../interfaces/promise.md)‹[LedgerEntryResponse](../interfaces/ledgerentryresponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`command` | "ledger_entry" |
`params` | [LedgerEntryRequest](../interfaces/ledgerentryrequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[LedgerEntryResponse](../interfaces/ledgerentryresponse.md)›*

▸ **request**(`command`: "server_info", `params?`: [ServerInfoRequest](../interfaces/serverinforequest.md)): *[Promise](../interfaces/promise.md)‹[ServerInfoResponse](../interfaces/serverinforesponse.md)›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

Defined in node_modules/ripple-lib/dist/npm/api.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`command` | "server_info" |
`params?` | [ServerInfoRequest](../interfaces/serverinforequest.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[ServerInfoResponse](../interfaces/serverinforesponse.md)›*

▸ **request**(`command`: string, `params`: any): *[Promise](../interfaces/promise.md)‹any›*

*Inherited from [RippleAPI](rippleapi.md).[request](rippleapi.md#request)*

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

*Inherited from [RippleAPI](rippleapi.md).[requestNextPage](rippleapi.md#requestnextpage)*

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
