[typescript](../README.md) › [Globals](../globals.md) › ["https"](_https_.md)

# Module: "https"

## Index

### Classes

* [Agent](../classes/_https_.agent.md)
* [Server](../classes/_https_.server.md)

### Interfaces

* [AgentOptions](../interfaces/_https_.agentoptions.md)

### Type aliases

* [RequestOptions](_https_.md#requestoptions)
* [ServerOptions](_https_.md#serveroptions)

### Variables

* [globalAgent](_https_.md#let-globalagent)

### Functions

* [createServer](_https_.md#createserver)
* [get](_https_.md#get)
* [request](_https_.md#request)

## Type aliases

###  RequestOptions

Ƭ **RequestOptions**: *[RequestOptions](../interfaces/_http_.requestoptions.md) & [SecureContextOptions](../interfaces/_tls_.securecontextoptions.md) & object*

Defined in node_modules/@types/node/https.d.ts:9

___

###  ServerOptions

Ƭ **ServerOptions**: *[SecureContextOptions](../interfaces/_tls_.securecontextoptions.md) & [TlsOptions](../interfaces/_tls_.tlsoptions.md) & [ServerOptions](../interfaces/_http_.serveroptions.md)*

Defined in node_modules/@types/node/https.d.ts:7

## Variables

### `Let` globalAgent

• **globalAgent**: *[Agent](../classes/_https_.agent.md)*

Defined in node_modules/@types/node/https.d.ts:52

## Functions

###  createServer

▸ **createServer**(`requestListener?`: http.RequestListener): *[Server](../classes/_https_.server.md)*

Defined in node_modules/@types/node/https.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`requestListener?` | http.RequestListener |

**Returns:** *[Server](../classes/_https_.server.md)*

▸ **createServer**(`options`: [ServerOptions](_https_.md#serveroptions), `requestListener?`: http.RequestListener): *[Server](../classes/_https_.server.md)*

Defined in node_modules/@types/node/https.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ServerOptions](_https_.md#serveroptions) |
`requestListener?` | http.RequestListener |

**Returns:** *[Server](../classes/_https_.server.md)*

___

###  get

▸ **get**(`options`: [RequestOptions](_https_.md#requestoptions) | string | [URL](../classes/_url_.url.md), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/https.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RequestOptions](_https_.md#requestoptions) &#124; string &#124; [URL](../classes/_url_.url.md) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*

▸ **get**(`url`: string | [URL](../classes/_url_.url.md), `options`: [RequestOptions](_https_.md#requestoptions), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/https.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`url` | string &#124; [URL](../classes/_url_.url.md) |
`options` | [RequestOptions](_https_.md#requestoptions) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*

___

###  request

▸ **request**(`options`: [RequestOptions](_https_.md#requestoptions) | string | [URL](../classes/_url_.url.md), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/https.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RequestOptions](_https_.md#requestoptions) &#124; string &#124; [URL](../classes/_url_.url.md) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*

▸ **request**(`url`: string | [URL](../classes/_url_.url.md), `options`: [RequestOptions](_https_.md#requestoptions), `callback?`: undefined | function): *[ClientRequest](../classes/_http_.clientrequest.md)*

Defined in node_modules/@types/node/https.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`url` | string &#124; [URL](../classes/_url_.url.md) |
`options` | [RequestOptions](_https_.md#requestoptions) |
`callback?` | undefined &#124; function |

**Returns:** *[ClientRequest](../classes/_http_.clientrequest.md)*
