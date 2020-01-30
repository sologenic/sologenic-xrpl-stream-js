[typescript](../README.md) › [Globals](../globals.md) › ["http"](_http_.md)

# Module: "http"

## Index

### Classes

* [Agent](../classes/_http_.agent.md)
* [ClientRequest](../classes/_http_.clientrequest.md)
* [IncomingMessage](../classes/_http_.incomingmessage.md)
* [OutgoingMessage](../classes/_http_.outgoingmessage.md)
* [Server](../classes/_http_.server.md)
* [ServerResponse](../classes/_http_.serverresponse.md)

### Interfaces

* [AgentOptions](../interfaces/_http_.agentoptions.md)
* [ClientRequestArgs](../interfaces/_http_.clientrequestargs.md)
* [IncomingHttpHeaders](../interfaces/_http_.incominghttpheaders.md)
* [InformationEvent](../interfaces/_http_.informationevent.md)
* [OutgoingHttpHeaders](../interfaces/_http_.outgoinghttpheaders.md)
* [RequestOptions](../interfaces/_http_.requestoptions.md)
* [ServerOptions](../interfaces/_http_.serveroptions.md)

### Type aliases

* [RequestListener](_http_.md#requestlistener)

### Variables

* [METHODS](_http_.md#const-methods)
* [STATUS_CODES](_http_.md#const-status_codes)
* [globalAgent](_http_.md#let-globalagent)
* [maxHeaderSize](_http_.md#const-maxheadersize)

### Functions

* [createServer](_http_.md#createserver)
* [get](_http_.md#get)
* [request](_http_.md#request)

## Type aliases

###  RequestListener

Ƭ **RequestListener**: *function*

Defined in node_modules/@types/node/http.d.ts:97

#### Type declaration:

▸ (`req`: [IncomingMessage](../classes/_http_.incomingmessage.md), `res`: [ServerResponse](../classes/_http_.serverresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | [IncomingMessage](../classes/_http_.incomingmessage.md) |
`res` | [ServerResponse](../classes/_http_.serverresponse.md) |

## Variables

### `Const` METHODS

• **METHODS**: *string[]*

Defined in node_modules/@types/node/http.d.ts:346

___

### `Const` STATUS_CODES

• **STATUS_CODES**: *object*

Defined in node_modules/@types/node/http.d.ts:348

#### Type declaration:

* \[ **errorCode**: *string*\]: string | undefined

___

### `Let` globalAgent

• **globalAgent**: *[Agent](../classes/_http_.agent.md)*

Defined in node_modules/@types/node/http.d.ts:363

___

### `Const` maxHeaderSize

• **maxHeaderSize**: *number*

Defined in node_modules/@types/node/http.d.ts:369

Read-only property specifying the maximum allowed size of HTTP headers in bytes.
Defaults to 8KB. Configurable using the [`--max-http-header-size`][] CLI option.

## Functions

###  createServer

▸ **createServer**(`requestListener?`: [RequestListener](_http_.md#requestlistener)): *[Server](../classes/_http_.server.md)*

Defined in node_modules/@types/node/http.d.ts:353

**Parameters:**

Name | Type |
------ | ------ |
`requestListener?` | [RequestListener](_http_.md#requestlistener) |

**Returns:** *[Server](../classes/_http_.server.md)*

▸ **createServer**(`options`: [ServerOptions](../interfaces/_http_.serveroptions.md), `requestListener?`: [RequestListener](_http_.md#requestlistener)): *[Server](../classes/_http_.server.md)*

Defined in node_modules/@types/node/http.d.ts:354

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ServerOptions](../interfaces/_http_.serveroptions.md) |
`requestListener?` | [RequestListener](_http_.md#requestlistener) |

**Returns:** *[Server](../classes/_http_.server.md)*

___

###  get

▸ **get**(`options`: [RequestOptions](../interfaces/_http_.requestoptions.md) | string | [URL](../classes/_url_.url.md), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/http.d.ts:361

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RequestOptions](../interfaces/_http_.requestoptions.md) &#124; string &#124; [URL](../classes/_url_.url.md) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*

▸ **get**(`url`: string | [URL](../classes/_url_.url.md), `options`: [RequestOptions](../interfaces/_http_.requestoptions.md), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/http.d.ts:362

**Parameters:**

Name | Type |
------ | ------ |
`url` | string &#124; [URL](../classes/_url_.url.md) |
`options` | [RequestOptions](../interfaces/_http_.requestoptions.md) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*

___

###  request

▸ **request**(`options`: [RequestOptions](../interfaces/_http_.requestoptions.md) | string | [URL](../classes/_url_.url.md), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/http.d.ts:359

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RequestOptions](../interfaces/_http_.requestoptions.md) &#124; string &#124; [URL](../classes/_url_.url.md) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*

▸ **request**(`url`: string | [URL](../classes/_url_.url.md), `options`: [RequestOptions](../interfaces/_http_.requestoptions.md), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/http.d.ts:360

**Parameters:**

Name | Type |
------ | ------ |
`url` | string &#124; [URL](../classes/_url_.url.md) |
`options` | [RequestOptions](../interfaces/_http_.requestoptions.md) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*
