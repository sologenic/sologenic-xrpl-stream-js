[typescript](../README.md) › [Globals](../globals.md) › ["http"](../modules/_http_.md) › [Agent](_http_.agent.md)

# Class: Agent

## Hierarchy

* **Agent**

  ↳ [Agent](_https_.agent.md)

## Index

### Constructors

* [constructor](_http_.agent.md#constructor)

### Properties

* [maxFreeSockets](_http_.agent.md#maxfreesockets)
* [maxSockets](_http_.agent.md#maxsockets)
* [requests](_http_.agent.md#requests)
* [sockets](_http_.agent.md#sockets)

### Methods

* [destroy](_http_.agent.md#destroy)

## Constructors

###  constructor

\+ **new Agent**(`opts?`: [AgentOptions](../interfaces/_http_.agentoptions.md)): *[Agent](_http_.agent.md)*

Defined in node_modules/@types/node/http.d.ts:333

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [AgentOptions](../interfaces/_http_.agentoptions.md) |

**Returns:** *[Agent](_http_.agent.md)*

## Properties

###  maxFreeSockets

• **maxFreeSockets**: *number*

Defined in node_modules/@types/node/http.d.ts:326

___

###  maxSockets

• **maxSockets**: *number*

Defined in node_modules/@types/node/http.d.ts:327

___

###  requests

• **requests**: *object*

Defined in node_modules/@types/node/http.d.ts:331

#### Type declaration:

* \[ **key**: *string*\]: [IncomingMessage](_http_.incomingmessage.md)[]

___

###  sockets

• **sockets**: *object*

Defined in node_modules/@types/node/http.d.ts:328

#### Type declaration:

* \[ **key**: *string*\]: [Socket](_net_.socket.md)[]

## Methods

###  destroy

▸ **destroy**(): *void*

Defined in node_modules/@types/node/http.d.ts:343

Destroy any sockets that are currently in use by the agent.
It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
sockets may hang open for quite a long time before the server terminates them.

**Returns:** *void*
