[typescript](../README.md) › [Globals](../globals.md) › ["http2"](../modules/_http2_.md) › [ServerSessionOptions](_http2_.serversessionoptions.md)

# Interface: ServerSessionOptions

## Hierarchy

* [SessionOptions](_http2_.sessionoptions.md)

  ↳ **ServerSessionOptions**

  ↳ [SecureServerSessionOptions](_http2_.secureserversessionoptions.md)

  ↳ [ServerOptions](_http2_.serveroptions.md)

## Index

### Properties

* [Http1IncomingMessage](_http2_.serversessionoptions.md#optional-http1incomingmessage)
* [Http1ServerResponse](_http2_.serversessionoptions.md#optional-http1serverresponse)
* [Http2ServerRequest](_http2_.serversessionoptions.md#optional-http2serverrequest)
* [Http2ServerResponse](_http2_.serversessionoptions.md#optional-http2serverresponse)
* [createConnection](_http2_.serversessionoptions.md#optional-createconnection)
* [maxDeflateDynamicTableSize](_http2_.serversessionoptions.md#optional-maxdeflatedynamictablesize)
* [maxHeaderListPairs](_http2_.serversessionoptions.md#optional-maxheaderlistpairs)
* [maxOutstandingPings](_http2_.serversessionoptions.md#optional-maxoutstandingpings)
* [maxSendHeaderBlockLength](_http2_.serversessionoptions.md#optional-maxsendheaderblocklength)
* [maxSessionMemory](_http2_.serversessionoptions.md#optional-maxsessionmemory)
* [paddingStrategy](_http2_.serversessionoptions.md#optional-paddingstrategy)
* [peerMaxConcurrentStreams](_http2_.serversessionoptions.md#optional-peermaxconcurrentstreams)
* [selectPadding](_http2_.serversessionoptions.md#optional-selectpadding)
* [settings](_http2_.serversessionoptions.md#optional-settings)

## Properties

### `Optional` Http1IncomingMessage

• **Http1IncomingMessage**? : *typeof IncomingMessage*

Defined in node_modules/@types/node/http2.d.ts:455

___

### `Optional` Http1ServerResponse

• **Http1ServerResponse**? : *typeof ServerResponse*

Defined in node_modules/@types/node/http2.d.ts:456

___

### `Optional` Http2ServerRequest

• **Http2ServerRequest**? : *typeof Http2ServerRequest*

Defined in node_modules/@types/node/http2.d.ts:457

___

### `Optional` Http2ServerResponse

• **Http2ServerResponse**? : *typeof Http2ServerResponse*

Defined in node_modules/@types/node/http2.d.ts:458

___

### `Optional` createConnection

• **createConnection**? : *undefined | function*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[createConnection](_http2_.sessionoptions.md#optional-createconnection)*

Defined in node_modules/@types/node/http2.d.ts:446

___

### `Optional` maxDeflateDynamicTableSize

• **maxDeflateDynamicTableSize**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxDeflateDynamicTableSize](_http2_.sessionoptions.md#optional-maxdeflatedynamictablesize)*

Defined in node_modules/@types/node/http2.d.ts:437

___

### `Optional` maxHeaderListPairs

• **maxHeaderListPairs**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxHeaderListPairs](_http2_.sessionoptions.md#optional-maxheaderlistpairs)*

Defined in node_modules/@types/node/http2.d.ts:439

___

### `Optional` maxOutstandingPings

• **maxOutstandingPings**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxOutstandingPings](_http2_.sessionoptions.md#optional-maxoutstandingpings)*

Defined in node_modules/@types/node/http2.d.ts:440

___

### `Optional` maxSendHeaderBlockLength

• **maxSendHeaderBlockLength**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxSendHeaderBlockLength](_http2_.sessionoptions.md#optional-maxsendheaderblocklength)*

Defined in node_modules/@types/node/http2.d.ts:441

___

### `Optional` maxSessionMemory

• **maxSessionMemory**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[maxSessionMemory](_http2_.sessionoptions.md#optional-maxsessionmemory)*

Defined in node_modules/@types/node/http2.d.ts:438

___

### `Optional` paddingStrategy

• **paddingStrategy**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[paddingStrategy](_http2_.sessionoptions.md#optional-paddingstrategy)*

Defined in node_modules/@types/node/http2.d.ts:442

___

### `Optional` peerMaxConcurrentStreams

• **peerMaxConcurrentStreams**? : *undefined | number*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[peerMaxConcurrentStreams](_http2_.sessionoptions.md#optional-peermaxconcurrentstreams)*

Defined in node_modules/@types/node/http2.d.ts:443

___

### `Optional` selectPadding

• **selectPadding**? : *undefined | function*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[selectPadding](_http2_.sessionoptions.md#optional-selectpadding)*

Defined in node_modules/@types/node/http2.d.ts:444

___

### `Optional` settings

• **settings**? : *[Settings](_http2_.settings.md)*

*Inherited from [SessionOptions](_http2_.sessionoptions.md).[settings](_http2_.sessionoptions.md#optional-settings)*

Defined in node_modules/@types/node/http2.d.ts:445
