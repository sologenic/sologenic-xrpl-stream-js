[typescript](../README.md) › [Globals](../globals.md) › ["net"](../modules/_net_.md) › [IpcNetConnectOpts](_net_.ipcnetconnectopts.md)

# Interface: IpcNetConnectOpts

## Hierarchy

  ↳ [IpcSocketConnectOpts](_net_.ipcsocketconnectopts.md)

* [SocketConstructorOpts](_net_.socketconstructoropts.md)

  ↳ **IpcNetConnectOpts**

## Index

### Properties

* [allowHalfOpen](_net_.ipcnetconnectopts.md#optional-allowhalfopen)
* [fd](_net_.ipcnetconnectopts.md#optional-fd)
* [onread](_net_.ipcnetconnectopts.md#optional-onread)
* [path](_net_.ipcnetconnectopts.md#path)
* [readable](_net_.ipcnetconnectopts.md#optional-readable)
* [timeout](_net_.ipcnetconnectopts.md#optional-timeout)
* [writable](_net_.ipcnetconnectopts.md#optional-writable)

## Properties

### `Optional` allowHalfOpen

• **allowHalfOpen**? : *undefined | false | true*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[allowHalfOpen](_net_.socketconstructoropts.md#optional-allowhalfopen)*

Defined in node_modules/@types/node/net.d.ts:16

___

### `Optional` fd

• **fd**? : *undefined | number*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[fd](_net_.socketconstructoropts.md#optional-fd)*

Defined in node_modules/@types/node/net.d.ts:15

___

### `Optional` onread

• **onread**? : *[OnReadOpts](_net_.onreadopts.md)*

*Inherited from [ConnectOpts](_net_.connectopts.md).[onread](_net_.connectopts.md#optional-onread)*

Defined in node_modules/@types/node/net.d.ts:37

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

___

###  path

• **path**: *string*

*Inherited from [IpcSocketConnectOpts](_net_.ipcsocketconnectopts.md).[path](_net_.ipcsocketconnectopts.md#path)*

Defined in node_modules/@types/node/net.d.ts:51

___

### `Optional` readable

• **readable**? : *undefined | false | true*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[readable](_net_.socketconstructoropts.md#optional-readable)*

Defined in node_modules/@types/node/net.d.ts:17

___

### `Optional` timeout

• **timeout**? : *undefined | number*

Defined in node_modules/@types/node/net.d.ts:252

___

### `Optional` writable

• **writable**? : *undefined | false | true*

*Inherited from [SocketConstructorOpts](_net_.socketconstructoropts.md).[writable](_net_.socketconstructoropts.md#optional-writable)*

Defined in node_modules/@types/node/net.d.ts:18
