[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [realpathSync](_fs_.realpathsync.md)

# Module: realpathSync

## Callable

▸ **realpathSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *string*

Defined in node_modules/@types/node/fs.d.ts:647

Synchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string*

▸ **realpathSync**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:654

Synchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **realpathSync**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:661

Synchronous realpath(3) - return the canonicalized absolute pathname.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *string | [Buffer](../classes/buffer.md)*

## Index

### Functions

* [native](_fs_.realpathsync.md#native)

## Functions

###  native

▸ **native**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *string*

Defined in node_modules/@types/node/fs.d.ts:664

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null |

**Returns:** *string*

▸ **native**(`path`: [PathLike](_fs_.md#pathlike), `options`: object | "buffer"): *[Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:665

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options` | object &#124; "buffer" |

**Returns:** *[Buffer](../classes/buffer.md)*

▸ **native**(`path`: [PathLike](_fs_.md#pathlike), `options?`: object | string | null): *string | [Buffer](../classes/buffer.md)*

Defined in node_modules/@types/node/fs.d.ts:666

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) |
`options?` | object &#124; string &#124; null |

**Returns:** *string | [Buffer](../classes/buffer.md)*
