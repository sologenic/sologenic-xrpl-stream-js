[typescript](../README.md) › [Globals](../globals.md) › ["dgram"](_dgram_.md)

# Module: "dgram"

## Index

### Classes

* [Socket](../classes/_dgram_.socket.md)

### Interfaces

* [BindOptions](../interfaces/_dgram_.bindoptions.md)
* [RemoteInfo](../interfaces/_dgram_.remoteinfo.md)
* [SocketOptions](../interfaces/_dgram_.socketoptions.md)

### Type aliases

* [SocketType](_dgram_.md#sockettype)

### Functions

* [createSocket](_dgram_.md#createsocket)

## Type aliases

###  SocketType

Ƭ **SocketType**: *"udp4" | "udp6"*

Defined in node_modules/@types/node/dgram.d.ts:19

## Functions

###  createSocket

▸ **createSocket**(`type`: [SocketType](_dgram_.md#sockettype), `callback?`: undefined | function): *[Socket](../classes/_dgram_.socket.md)*

Defined in node_modules/@types/node/dgram.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`type` | [SocketType](_dgram_.md#sockettype) |
`callback?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_dgram_.socket.md)*

▸ **createSocket**(`options`: [SocketOptions](../interfaces/_dgram_.socketoptions.md), `callback?`: undefined | function): *[Socket](../classes/_dgram_.socket.md)*

Defined in node_modules/@types/node/dgram.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SocketOptions](../interfaces/_dgram_.socketoptions.md) |
`callback?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_dgram_.socket.md)*
