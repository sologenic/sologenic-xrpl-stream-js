[typescript](../README.md) › [Globals](../globals.md) › [Connection](connection.md)

# Class: Connection

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Connection**

## Index

### Constructors

* [constructor](connection.md#constructor)

### Properties

* [_authorization](connection.md#private-optional-_authorization)
* [_availableLedgerVersions](connection.md#private-_availableledgerversions)
* [_certificate](connection.md#private-optional-_certificate)
* [_console](connection.md#private-optional-_console)
* [_fee_base](connection.md#private-_fee_base)
* [_fee_ref](connection.md#private-_fee_ref)
* [_isReady](connection.md#private-_isready)
* [_key](connection.md#private-optional-_key)
* [_ledgerVersion](connection.md#protected-_ledgerversion)
* [_nextRequestID](connection.md#private-_nextrequestid)
* [_onOpenErrorBound](connection.md#private-_onopenerrorbound)
* [_onUnexpectedCloseBound](connection.md#private-_onunexpectedclosebound)
* [_passphrase](connection.md#private-optional-_passphrase)
* [_proxyAuthorization](connection.md#private-optional-_proxyauthorization)
* [_proxyURL](connection.md#private-optional-_proxyurl)
* [_retry](connection.md#private-_retry)
* [_retryTimer](connection.md#private-_retrytimer)
* [_shouldBeConnected](connection.md#_shouldbeconnected)
* [_state](connection.md#_state)
* [_timeout](connection.md#private-_timeout)
* [_trace](connection.md#private-_trace)
* [_trustedCertificates](connection.md#private-optional-_trustedcertificates)
* [_url](connection.md#private-_url)
* [_ws](connection.md#private-_ws)
* [defaultMaxListeners](connection.md#static-defaultmaxlisteners)

### Methods

* [_calculateTimeout](connection.md#_calculatetimeout)
* [_clearReconnectTimer](connection.md#_clearreconnecttimer)
* [_createWebSocket](connection.md#_createwebsocket)
* [_disconnect](connection.md#_disconnect)
* [_onMessage](connection.md#_onmessage)
* [_onOpen](connection.md#_onopen)
* [_onOpenError](connection.md#_onopenerror)
* [_onUnexpectedClose](connection.md#_onunexpectedclose)
* [_parseMessage](connection.md#_parsemessage)
* [_rebindOnUnexpectedClose](connection.md#_rebindonunexpectedclose)
* [_retryConnect](connection.md#_retryconnect)
* [_send](connection.md#_send)
* [_unbindOnUnexpectedClose](connection.md#_unbindonunexpectedclose)
* [_updateFees](connection.md#_updatefees)
* [_updateLedgerVersions](connection.md#_updateledgerversions)
* [_whenReady](connection.md#_whenready)
* [addListener](connection.md#addlistener)
* [connect](connection.md#connect)
* [disconnect](connection.md#disconnect)
* [emit](connection.md#emit)
* [eventNames](connection.md#eventnames)
* [getFeeBase](connection.md#getfeebase)
* [getFeeRef](connection.md#getfeeref)
* [getLedgerVersion](connection.md#getledgerversion)
* [getMaxListeners](connection.md#getmaxlisteners)
* [hasLedgerVersion](connection.md#hasledgerversion)
* [hasLedgerVersions](connection.md#hasledgerversions)
* [isConnected](connection.md#isconnected)
* [listenerCount](connection.md#listenercount)
* [listeners](connection.md#listeners)
* [off](connection.md#off)
* [on](connection.md#on)
* [once](connection.md#once)
* [prependListener](connection.md#prependlistener)
* [prependOnceListener](connection.md#prependoncelistener)
* [rawListeners](connection.md#rawlisteners)
* [reconnect](connection.md#reconnect)
* [removeAllListeners](connection.md#removealllisteners)
* [removeListener](connection.md#removelistener)
* [request](connection.md#request)
* [setMaxListeners](connection.md#setmaxlisteners)
* [listenerCount](connection.md#static-listenercount)

## Constructors

###  constructor

\+ **new Connection**(`url`: any, `options?`: [ConnectionOptions](../interfaces/_tls_.connectionoptions.md)): *[Connection](connection.md)*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`url` | any |
`options?` | [ConnectionOptions](../interfaces/_tls_.connectionoptions.md) |

**Returns:** *[Connection](connection.md)*

## Properties

### `Private` `Optional` _authorization

• **_authorization**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:21

___

### `Private` _availableLedgerVersions

• **_availableLedgerVersions**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:30

___

### `Private` `Optional` _certificate

• **_certificate**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:25

___

### `Private` `Optional` _console

• **_console**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:18

___

### `Private` _fee_base

• **_fee_base**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:36

___

### `Private` _fee_ref

• **_fee_ref**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:37

___

### `Private` _isReady

• **_isReady**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:27

___

### `Private` `Optional` _key

• **_key**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:23

___

### `Protected` _ledgerVersion

• **_ledgerVersion**: *null | number*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:29

___

### `Private` _nextRequestID

• **_nextRequestID**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:31

___

### `Private` _onOpenErrorBound

• **_onOpenErrorBound**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:34

___

### `Private` _onUnexpectedCloseBound

• **_onUnexpectedCloseBound**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:35

___

### `Private` `Optional` _passphrase

• **_passphrase**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:24

___

### `Private` `Optional` _proxyAuthorization

• **_proxyAuthorization**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:20

___

### `Private` `Optional` _proxyURL

• **_proxyURL**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:19

___

### `Private` _retry

• **_retry**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:32

___

### `Private` _retryTimer

• **_retryTimer**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:33

___

###  _shouldBeConnected

• **_shouldBeConnected**: *boolean*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:44

___

###  _state

• **_state**: *number*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:43

___

### `Private` _timeout

• **_timeout**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:26

___

### `Private` _trace

• **_trace**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:17

___

### `Private` `Optional` _trustedCertificates

• **_trustedCertificates**? : *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:22

___

### `Private` _url

• **_url**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:16

___

### `Private` _ws

• **_ws**: *any*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:28

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  _calculateTimeout

▸ **_calculateTimeout**(`retriesCount`: any): *number*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`retriesCount` | any |

**Returns:** *number*

___

###  _clearReconnectTimer

▸ **_clearReconnectTimer**(): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:49

**Returns:** *void*

___

###  _createWebSocket

▸ **_createWebSocket**(): *[WebSocket](websocket.md)*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:54

**Returns:** *[WebSocket](websocket.md)*

___

###  _disconnect

▸ **_disconnect**(`calledByUser`: any): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`calledByUser` | any |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  _onMessage

▸ **_onMessage**(`message`: any): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |

**Returns:** *void*

___

###  _onOpen

▸ **_onOpen**(): *[Promise](../interfaces/promise.md)‹never›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:50

**Returns:** *[Promise](../interfaces/promise.md)‹never›*

___

###  _onOpenError

▸ **_onOpenError**(`reject`: any, `error`: any): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`reject` | any |
`error` | any |

**Returns:** *void*

___

###  _onUnexpectedClose

▸ **_onUnexpectedClose**(`beforeOpen`: any, `resolve`: any, `reject`: any, `code`: any): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`beforeOpen` | any |
`resolve` | any |
`reject` | any |
`code` | any |

**Returns:** *void*

___

###  _parseMessage

▸ **_parseMessage**(`message`: any): *[string, [Object](../interfaces/object.md)] | ["error", string, string, [Object](../interfaces/object.md)]*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |

**Returns:** *[string, [Object](../interfaces/object.md)] | ["error", string, string, [Object](../interfaces/object.md)]*

___

###  _rebindOnUnexpectedClose

▸ **_rebindOnUnexpectedClose**(): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:51

**Returns:** *void*

___

###  _retryConnect

▸ **_retryConnect**(): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:48

**Returns:** *void*

___

###  _send

▸ **_send**(`message`: string): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  _unbindOnUnexpectedClose

▸ **_unbindOnUnexpectedClose**(): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:52

**Returns:** *void*

___

###  _updateFees

▸ **_updateFees**(`data`: any): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  _updateLedgerVersions

▸ **_updateLedgerVersions**(`data`: any): *void*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  _whenReady

▸ **_whenReady**<**T**>(`promise`: [Promise](../interfaces/promise.md)‹T›): *[Promise](../interfaces/promise.md)‹T›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:59

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | [Promise](../interfaces/promise.md)‹T› |

**Returns:** *[Promise](../interfaces/promise.md)‹T›*

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

###  connect

▸ **connect**(): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:55

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

___

###  disconnect

▸ **disconnect**(): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:56

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

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

###  getFeeBase

▸ **getFeeBase**(): *[Promise](../interfaces/promise.md)‹number›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:63

**Returns:** *[Promise](../interfaces/promise.md)‹number›*

___

###  getFeeRef

▸ **getFeeRef**(): *[Promise](../interfaces/promise.md)‹number›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:64

**Returns:** *[Promise](../interfaces/promise.md)‹number›*

___

###  getLedgerVersion

▸ **getLedgerVersion**(): *[Promise](../interfaces/promise.md)‹number›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:60

**Returns:** *[Promise](../interfaces/promise.md)‹number›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  hasLedgerVersion

▸ **hasLedgerVersion**(`ledgerVersion`: any): *[Promise](../interfaces/promise.md)‹boolean›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`ledgerVersion` | any |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  hasLedgerVersions

▸ **hasLedgerVersions**(`lowLedgerVersion`: any, `highLedgerVersion`: any): *[Promise](../interfaces/promise.md)‹boolean›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`lowLedgerVersion` | any |
`highLedgerVersion` | any |

**Returns:** *[Promise](../interfaces/promise.md)‹boolean›*

___

###  isConnected

▸ **isConnected**(): *boolean*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:45

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

###  reconnect

▸ **reconnect**(): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:58

**Returns:** *[Promise](../interfaces/promise.md)‹void›*

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

▸ **request**(`request`: any, `timeout?`: undefined | number): *[Promise](../interfaces/promise.md)‹any›*

Defined in node_modules/ripple-lib/dist/npm/common/connection.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`request` | any |
`timeout?` | undefined &#124; number |

**Returns:** *[Promise](../interfaces/promise.md)‹any›*

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
