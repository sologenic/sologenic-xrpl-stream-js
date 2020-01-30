[typescript](../README.md) › [Globals](../globals.md) › ["net"](../modules/_net_.md) › [IpcSocketConnectOpts](_net_.ipcsocketconnectopts.md)

# Interface: IpcSocketConnectOpts

## Hierarchy

* [ConnectOpts](_net_.connectopts.md)

  ↳ **IpcSocketConnectOpts**

  ↳ [IpcNetConnectOpts](_net_.ipcnetconnectopts.md)

## Index

### Properties

* [onread](_net_.ipcsocketconnectopts.md#optional-onread)
* [path](_net_.ipcsocketconnectopts.md#path)

## Properties

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

Defined in node_modules/@types/node/net.d.ts:51
