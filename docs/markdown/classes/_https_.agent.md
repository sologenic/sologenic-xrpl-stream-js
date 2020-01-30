[typescript](../README.md) › [Globals](../globals.md) › ["https"](../modules/_https_.md) › [Agent](_https_.agent.md)

# Class: Agent

## Hierarchy

* [Agent](_http_.agent.md)

  ↳ **Agent**

## Index

### Constructors

* [constructor](_https_.agent.md#constructor)

### Properties

* [maxFreeSockets](_https_.agent.md#maxfreesockets)
* [maxSockets](_https_.agent.md#maxsockets)
* [options](_https_.agent.md#options)
* [requests](_https_.agent.md#requests)
* [sockets](_https_.agent.md#sockets)

### Methods

* [destroy](_https_.agent.md#destroy)

## Constructors

###  constructor

\+ **new Agent**(`options?`: [AgentOptions](../interfaces/_https_.agentoptions.md)): *[Agent](_https_.agent.md)*

*Overrides [Agent](_http_.agent.md).[constructor](_http_.agent.md#constructor)*

Defined in node_modules/@types/node/https.d.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [AgentOptions](../interfaces/_https_.agentoptions.md) |

**Returns:** *[Agent](_https_.agent.md)*

## Properties

###  maxFreeSockets

• **maxFreeSockets**: *number*

*Inherited from [Agent](_http_.agent.md).[maxFreeSockets](_http_.agent.md#maxfreesockets)*

Defined in node_modules/@types/node/http.d.ts:326

___

###  maxSockets

• **maxSockets**: *number*

*Inherited from [Agent](_http_.agent.md).[maxSockets](_http_.agent.md#maxsockets)*

Defined in node_modules/@types/node/http.d.ts:327

___

###  options

• **options**: *[AgentOptions](../interfaces/_https_.agentoptions.md)*

Defined in node_modules/@types/node/https.d.ts:21

___

###  requests

• **requests**: *object*

*Inherited from [Agent](_http_.agent.md).[requests](_http_.agent.md#requests)*

Defined in node_modules/@types/node/http.d.ts:331

#### Type declaration:

* \[ **key**: *string*\]: [IncomingMessage](_http_.incomingmessage.md)[]

___

###  sockets

• **sockets**: *object*

*Inherited from [Agent](_http_.agent.md).[sockets](_http_.agent.md#sockets)*

Defined in node_modules/@types/node/http.d.ts:328

#### Type declaration:

* \[ **key**: *string*\]: [Socket](_net_.socket.md)[]

## Methods

###  destroy

▸ **destroy**(): *void*

*Inherited from [Agent](_http_.agent.md).[destroy](_http_.agent.md#destroy)*

Defined in node_modules/@types/node/http.d.ts:343

Destroy any sockets that are currently in use by the agent.
It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
sockets may hang open for quite a long time before the server terminates them.

**Returns:** *void*
