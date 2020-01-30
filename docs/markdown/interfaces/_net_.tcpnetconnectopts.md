[typescript](../README.md) › [Globals](../globals.md) › ["net"](../modules/_net_.md) › [TcpNetConnectOpts](_net_.tcpnetconnectopts.md)

# Interface: TcpNetConnectOpts

## Hierarchy

  ↳ [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md)

* [SocketConstructorOpts](_net_.socketconstructoropts.md)

  ↳ **TcpNetConnectOpts**

## Index

### Properties

* [allowHalfOpen](_net_.tcpnetconnectopts.md#optional-allowhalfopen)
* [family](_net_.tcpnetconnectopts.md#optional-family)
* [fd](_net_.tcpnetconnectopts.md#optional-fd)
* [hints](_net_.tcpnetconnectopts.md#optional-hints)
* [host](_net_.tcpnetconnectopts.md#optional-host)
* [localAddress](_net_.tcpnetconnectopts.md#optional-localaddress)
* [localPort](_net_.tcpnetconnectopts.md#optional-localport)
* [lookup](_net_.tcpnetconnectopts.md#optional-lookup)
* [onread](_net_.tcpnetconnectopts.md#optional-onread)
* [port](_net_.tcpnetconnectopts.md#port)
* [readable](_net_.tcpnetconnectopts.md#optional-readable)
* [timeout](_net_.tcpnetconnectopts.md#optional-timeout)
* [writable](_net_.tcpnetconnectopts.md#optional-writable)

## Properties

### `Optional` allowHalfOpen

• **allowHalfOpen**? : *undefined | false | true*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[allowHalfOpen](_net_.socketconstructoropts.md#optional-allowhalfopen)*

Defined in node_modules/@types/node/net.d.ts:16

___

### `Optional` family

• **family**? : *undefined | number*

*Inherited from [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md).[family](_net_.tcpsocketconnectopts.md#optional-family)*

Defined in node_modules/@types/node/net.d.ts:46

___

### `Optional` fd

• **fd**? : *undefined | number*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[fd](_net_.socketconstructoropts.md#optional-fd)*

Defined in node_modules/@types/node/net.d.ts:15

___

### `Optional` hints

• **hints**? : *undefined | number*

*Inherited from [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md).[hints](_net_.tcpsocketconnectopts.md#optional-hints)*

Defined in node_modules/@types/node/net.d.ts:45

___

### `Optional` host

• **host**? : *undefined | string*

*Inherited from [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md).[host](_net_.tcpsocketconnectopts.md#optional-host)*

Defined in node_modules/@types/node/net.d.ts:42

___

### `Optional` localAddress

• **localAddress**? : *undefined | string*

*Inherited from [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md).[localAddress](_net_.tcpsocketconnectopts.md#optional-localaddress)*

Defined in node_modules/@types/node/net.d.ts:43

___

### `Optional` localPort

• **localPort**? : *undefined | number*

*Inherited from [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md).[localPort](_net_.tcpsocketconnectopts.md#optional-localport)*

Defined in node_modules/@types/node/net.d.ts:44

___

### `Optional` lookup

• **lookup**? : *[LookupFunction](../modules/_net_.md#lookupfunction)*

*Inherited from [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md).[lookup](_net_.tcpsocketconnectopts.md#optional-lookup)*

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

*Inherited from [TcpSocketConnectOpts](_net_.tcpsocketconnectopts.md).[port](_net_.tcpsocketconnectopts.md#port)*

Defined in node_modules/@types/node/net.d.ts:41

___

### `Optional` readable

• **readable**? : *undefined | false | true*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[readable](_net_.socketconstructoropts.md#optional-readable)*

Defined in node_modules/@types/node/net.d.ts:17

___

### `Optional` timeout

• **timeout**? : *undefined | number*

Defined in node_modules/@types/node/net.d.ts:248

___

### `Optional` writable

• **writable**? : *undefined | false | true*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[writable](_net_.socketconstructoropts.md#optional-writable)*

Defined in node_modules/@types/node/net.d.ts:18
