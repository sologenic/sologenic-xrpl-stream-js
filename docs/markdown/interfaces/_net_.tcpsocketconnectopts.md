[typescript](../README.md) › [Globals](../globals.md) › ["net"](../modules/_net_.md) › [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md)

# Interface: TcpSocketConnectOpts

## Hierarchy

* [ConnectOpts](_net_.connectopts.md)

  ↳ **TcpSocketConnectOpts**

  ↳ [TcpNetConnectOpts](_net_.tcpnetconnectopts.md)

## Index

### Properties

* [family](_net_.tcpsocketconnectopts.md#optional-family)
* [hints](_net_.tcpsocketconnectopts.md#optional-hints)
* [host](_net_.tcpsocketconnectopts.md#optional-host)
* [localAddress](_net_.tcpsocketconnectopts.md#optional-localaddress)
* [localPort](_net_.tcpsocketconnectopts.md#optional-localport)
* [lookup](_net_.tcpsocketconnectopts.md#optional-lookup)
* [onread](_net_.tcpsocketconnectopts.md#optional-onread)
* [port](_net_.tcpsocketconnectopts.md#port)

## Properties

### `Optional` family

• **family**? : *undefined | number*

Defined in node_modules/@types/node/net.d.ts:46

___

### `Optional` hints

• **hints**? : *undefined | number*

Defined in node_modules/@types/node/net.d.ts:45

___

### `Optional` host

• **host**? : *undefined | string*

Defined in node_modules/@types/node/net.d.ts:42

___

### `Optional` localAddress

• **localAddress**? : *undefined | string*

Defined in node_modules/@types/node/net.d.ts:43

___

### `Optional` localPort

• **localPort**? : *undefined | number*

Defined in node_modules/@types/node/net.d.ts:44

___

### `Optional` lookup

• **lookup**? : *[LookupFunction](../modules/_net_.md#lookupfunction)*

Defined in node_modules/@types/node/net.d.ts:47

___

### `Optional` onread

• **onread**? : *[OnReadOpts](_net_.onreadopts.md)*

*Inherited from [ConnectOpts](_net_.connectopts.md).[onread](_net_.connectopts.md#optional-onread)*

Defined in node_modules/@types/node/net.d.ts:37

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

___

###  port

• **port**: *number*

Defined in node_modules/@types/node/net.d.ts:41
