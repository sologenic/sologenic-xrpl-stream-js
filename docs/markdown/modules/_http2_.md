[typescript](../README.md) › [Globals](../globals.md) › ["http2"](_http2_.md)

# Module: "http2"

## Index

### Modules

* [constants](_http2_.constants.md)

### Classes

* [ClientHttp2Session](../classes/_http2_.clienthttp2session.md)
* [ClientHttp2Stream](../classes/_http2_.clienthttp2stream.md)
* [Http2SecureServer](../classes/_http2_.http2secureserver.md)
* [Http2Server](../classes/_http2_.http2server.md)
* [Http2ServerRequest](../classes/_http2_.http2serverrequest.md)
* [Http2ServerResponse](../classes/_http2_.http2serverresponse.md)
* [Http2Session](../classes/_http2_.http2session.md)
* [Http2Stream](../classes/_http2_.http2stream.md)
* [ServerHttp2Session](../classes/_http2_.serverhttp2session.md)
* [ServerHttp2Stream](../classes/_http2_.serverhttp2stream.md)

### Interfaces

* [AlternativeServiceOptions](../interfaces/_http2_.alternativeserviceoptions.md)
* [ClientSessionOptions](../interfaces/_http2_.clientsessionoptions.md)
* [ClientSessionRequestOptions](../interfaces/_http2_.clientsessionrequestoptions.md)
* [IncomingHttpHeaders](../interfaces/_http2_.incominghttpheaders.md)
* [IncomingHttpStatusHeader](../interfaces/_http2_.incominghttpstatusheader.md)
* [SecureClientSessionOptions](../interfaces/_http2_.secureclientsessionoptions.md)
* [SecureServerOptions](../interfaces/_http2_.secureserveroptions.md)
* [SecureServerSessionOptions](../interfaces/_http2_.secureserversessionoptions.md)
* [ServerOptions](../interfaces/_http2_.serveroptions.md)
* [ServerSessionOptions](../interfaces/_http2_.serversessionoptions.md)
* [ServerStreamFileResponseOptions](../interfaces/_http2_.serverstreamfileresponseoptions.md)
* [ServerStreamFileResponseOptionsWithError](../interfaces/_http2_.serverstreamfileresponseoptionswitherror.md)
* [ServerStreamResponseOptions](../interfaces/_http2_.serverstreamresponseoptions.md)
* [SessionOptions](../interfaces/_http2_.sessionoptions.md)
* [SessionState](../interfaces/_http2_.sessionstate.md)
* [Settings](../interfaces/_http2_.settings.md)
* [StatOptions](../interfaces/_http2_.statoptions.md)
* [StreamPriorityOptions](../interfaces/_http2_.streampriorityoptions.md)
* [StreamState](../interfaces/_http2_.streamstate.md)

### Functions

* [connect](_http2_.md#connect)
* [createSecureServer](_http2_.md#createsecureserver)
* [createServer](_http2_.md#createserver)
* [getDefaultSettings](_http2_.md#getdefaultsettings)
* [getPackedSettings](_http2_.md#getpackedsettings)
* [getUnpackedSettings](_http2_.md#getunpackedsettings)

## Functions

###  connect

▸ **connect**(`authority`: string | [URL](../classes/_url_.url.md), `listener?`: undefined | function): *[ClientHttp2Session](../classes/_http2_.clienthttp2session.md)*

Defined in node_modules/@types/node/http2.d.ts:954

**Parameters:**

Name | Type |
------ | ------ |
`authority` | string &#124; [URL](../classes/_url_.url.md) |
`listener?` | undefined &#124; function |

**Returns:** *[ClientHttp2Session](../classes/_http2_.clienthttp2session.md)*

▸ **connect**(`authority`: string | [URL](../classes/_url_.url.md), `options?`: [ClientSessionOptions](../interfaces/_http2_.clientsessionoptions.md) | [SecureClientSessionOptions](../interfaces/_http2_.secureclientsessionoptions.md), `listener?`: undefined | function): *[ClientHttp2Session](../classes/_http2_.clienthttp2session.md)*

Defined in node_modules/@types/node/http2.d.ts:955

**Parameters:**

Name | Type |
------ | ------ |
`authority` | string &#124; [URL](../classes/_url_.url.md) |
`options?` | [ClientSessionOptions](../interfaces/_http2_.clientsessionoptions.md) &#124; [SecureClientSessionOptions](../interfaces/_http2_.secureclientsessionoptions.md) |
`listener?` | undefined &#124; function |

**Returns:** *[ClientHttp2Session](../classes/_http2_.clienthttp2session.md)*

___

###  createSecureServer

▸ **createSecureServer**(`onRequestHandler?`: undefined | function): *[Http2SecureServer](../classes/_http2_.http2secureserver.md)*

Defined in node_modules/@types/node/http2.d.ts:951

**Parameters:**

Name | Type |
------ | ------ |
`onRequestHandler?` | undefined &#124; function |

**Returns:** *[Http2SecureServer](../classes/_http2_.http2secureserver.md)*

▸ **createSecureServer**(`options`: [SecureServerOptions](../interfaces/_http2_.secureserveroptions.md), `onRequestHandler?`: undefined | function): *[Http2SecureServer](../classes/_http2_.http2secureserver.md)*

Defined in node_modules/@types/node/http2.d.ts:952

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SecureServerOptions](../interfaces/_http2_.secureserveroptions.md) |
`onRequestHandler?` | undefined &#124; function |

**Returns:** *[Http2SecureServer](../classes/_http2_.http2secureserver.md)*

___

###  createServer

▸ **createServer**(`onRequestHandler?`: undefined | function): *[Http2Server](../classes/_http2_.http2server.md)*

Defined in node_modules/@types/node/http2.d.ts:948

**Parameters:**

Name | Type |
------ | ------ |
`onRequestHandler?` | undefined &#124; function |

**Returns:** *[Http2Server](../classes/_http2_.http2server.md)*

▸ **createServer**(`options`: [ServerOptions](../interfaces/_http2_.serveroptions.md), `onRequestHandler?`: undefined | function): *[Http2Server](../classes/_http2_.http2server.md)*

Defined in node_modules/@types/node/http2.d.ts:949

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ServerOptions](../interfaces/_http2_.serveroptions.md) |
`onRequestHandler?` | undefined &#124; function |

**Returns:** *[Http2Server](../classes/_http2_.http2server.md)*

___

###  getDefaultSettings

▸ **getDefaultSettings**(): *[Settings](../interfaces/_http2_.settings.md)*

Defined in node_modules/@types/node/http2.d.ts:944

**Returns:** *[Settings](../interfaces/_http2_.settings.md)*

___

###  getPackedSettings

▸ **getPackedSettings**(`settings`: [Settings](../interfaces/_http2_.settings.md)): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/http2.d.ts:945

**Parameters:**

Name | Type |
------ | ------ |
`settings` | [Settings](../interfaces/_http2_.settings.md) |

**Returns:** *[Buffer](../classes/buffer.md)*

___

###  getUnpackedSettings

▸ **getUnpackedSettings**(`buf`: [Uint8Array](../interfaces/uint8array.md)): *[Settings](../interfaces/_http2_.settings.md)*

Defined in node_modules/@types/node/http2.d.ts:946

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [Uint8Array](../interfaces/uint8array.md) |

**Returns:** *[Settings](../interfaces/_http2_.settings.md)*
