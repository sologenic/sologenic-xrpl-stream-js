[typescript](../README.md) › [Globals](../globals.md) › ["net"](_net_.md)

# Module: "net"

## Index

### Classes

* [Server](../classes/_net_.server.md)
* [Socket](../classes/_net_.socket.md)

### Interfaces

* [AddressInfo](../interfaces/_net_.addressinfo.md)
* [ConnectOpts](../interfaces/_net_.connectopts.md)
* [IpcNetConnectOpts](../interfaces/_net_.ipcnetconnectopts.md)
* [IpcSocketConnectOpts](../interfaces/_net_.ipcsocketconnectopts.md)
* [ListenOptions](../interfaces/_net_.listenoptions.md)
* [OnReadOpts](../interfaces/_net_.onreadopts.md)
* [SocketConstructorOpts](../interfaces/_net_.socketconstructoropts.md)
* [TcpNetConnectOpts](../interfaces/_net_.tcpnetconnectopts.md)
* [TcpSocketConnectOpts](../interfaces/_net_.tcpsocketconnectopts.md)

### Type aliases

* [LookupFunction](_net_.md#lookupfunction)
* [NetConnectOpts](_net_.md#netconnectopts)
* [SocketConnectOpts](_net_.md#socketconnectopts)

### Functions

* [connect](_net_.md#connect)
* [createConnection](_net_.md#createconnection)
* [createServer](_net_.md#createserver)
* [isIP](_net_.md#isip)
* [isIPv4](_net_.md#isipv4)
* [isIPv6](_net_.md#isipv6)

## Type aliases

###  LookupFunction

Ƭ **LookupFunction**: *function*

Defined in node_modules/@types/node/net.d.ts:6

#### Type declaration:

▸ (`hostname`: string, `options`: [LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md), `callback`: function): *void*

**Parameters:**

▪ **hostname**: *string*

▪ **options**: *[LookupOneOptions](../interfaces/_dns_.lookuponeoptions.md)*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `address`: string, `family`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`address` | string |
`family` | number |

___

###  NetConnectOpts

Ƭ **NetConnectOpts**: *[TcpNetConnectOpts](../interfaces/_net_.tcpnetconnectopts.md) | [IpcNetConnectOpts](../interfaces/_net_.ipcnetconnectopts.md)*

Defined in node_modules/@types/node/net.d.ts:255

___

###  SocketConnectOpts

Ƭ **SocketConnectOpts**: *[TcpSocketConnectOpts](../interfaces/_net_.tcpsocketconnectopts.md) | [IpcSocketConnectOpts](../interfaces/_net_.ipcsocketconnectopts.md)*

Defined in node_modules/@types/node/net.d.ts:54

## Functions

###  connect

▸ **connect**(`options`: [NetConnectOpts](_net_.md#netconnectopts), `connectionListener?`: undefined | function): *[Socket](../classes/_net_.socket.md)*

Defined in node_modules/@types/node/net.d.ts:259

**Parameters:**

Name | Type |
------ | ------ |
`options` | [NetConnectOpts](_net_.md#netconnectopts) |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_net_.socket.md)*

▸ **connect**(`port`: number, `host?`: undefined | string, `connectionListener?`: undefined | function): *[Socket](../classes/_net_.socket.md)*

Defined in node_modules/@types/node/net.d.ts:260

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`host?` | undefined &#124; string |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_net_.socket.md)*

▸ **connect**(`path`: string, `connectionListener?`: undefined | function): *[Socket](../classes/_net_.socket.md)*

Defined in node_modules/@types/node/net.d.ts:261

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_net_.socket.md)*

___

###  createConnection

▸ **createConnection**(`options`: [NetConnectOpts](_net_.md#netconnectopts), `connectionListener?`: undefined | function): *[Socket](../classes/_net_.socket.md)*

Defined in node_modules/@types/node/net.d.ts:262

**Parameters:**

Name | Type |
------ | ------ |
`options` | [NetConnectOpts](_net_.md#netconnectopts) |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_net_.socket.md)*

▸ **createConnection**(`port`: number, `host?`: undefined | string, `connectionListener?`: undefined | function): *[Socket](../classes/_net_.socket.md)*

Defined in node_modules/@types/node/net.d.ts:263

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`host?` | undefined &#124; string |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_net_.socket.md)*

▸ **createConnection**(`path`: string, `connectionListener?`: undefined | function): *[Socket](../classes/_net_.socket.md)*

Defined in node_modules/@types/node/net.d.ts:264

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Socket](../classes/_net_.socket.md)*

___

###  createServer

▸ **createServer**(`connectionListener?`: undefined | function): *[Server](../classes/_net_.server.md)*

Defined in node_modules/@types/node/net.d.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Server](../classes/_net_.server.md)*

▸ **createServer**(`options?`: undefined | object, `connectionListener?`: undefined | function): *[Server](../classes/_net_.server.md)*

Defined in node_modules/@types/node/net.d.ts:258

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |
`connectionListener?` | undefined &#124; function |

**Returns:** *[Server](../classes/_net_.server.md)*

___

###  isIP

▸ **isIP**(`input`: string): *number*

Defined in node_modules/@types/node/net.d.ts:265

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *number*

___

###  isIPv4

▸ **isIPv4**(`input`: string): *boolean*

Defined in node_modules/@types/node/net.d.ts:266

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *boolean*

___

###  isIPv6

▸ **isIPv6**(`input`: string): *boolean*

Defined in node_modules/@types/node/net.d.ts:267

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *boolean*
