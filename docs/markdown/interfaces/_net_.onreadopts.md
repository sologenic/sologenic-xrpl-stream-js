[typescript](../README.md) › [Globals](../globals.md) › ["net"](../modules/_net_.md) › [OnReadOpts](_net_.onreadopts.md)

# Interface: OnReadOpts

## Hierarchy

* **OnReadOpts**

## Index

### Properties

* [buffer](_net_.onreadopts.md#buffer)

### Methods

* [callback](_net_.onreadopts.md#callback)

## Properties

###  buffer

• **buffer**: *[Uint8Array](uint8array.md) | function*

Defined in node_modules/@types/node/net.d.ts:22

## Methods

###  callback

▸ **callback**(`bytesWritten`: number, `buf`: [Uint8Array](uint8array.md)): *boolean*

Defined in node_modules/@types/node/net.d.ts:28

This function is called for every chunk of incoming data.
Two arguments are passed to it: the number of bytes written to buffer and a reference to buffer.
Return false from this function to implicitly pause() the socket.

**Parameters:**

Name | Type |
------ | ------ |
`bytesWritten` | number |
`buf` | [Uint8Array](uint8array.md) |

**Returns:** *boolean*
