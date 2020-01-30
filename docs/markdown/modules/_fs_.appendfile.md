[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [appendFile](_fs_.appendfile.md)

# Module: appendFile

## Callable

▸ **appendFile**(`file`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `options`: [WriteFileOptions](_fs_.md#writefileoptions), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1424

Asynchronously append data to a file, creating the file if it does not exist.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
`options` | [WriteFileOptions](_fs_.md#writefileoptions) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **appendFile**(`file`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1433

Asynchronously append data to a file, creating the file if it does not exist.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.appendfile.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`file`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `options?`: [WriteFileOptions](_fs_.md#writefileoptions)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1449

Asynchronously append data to a file, creating the file if it does not exist.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
`options?` | [WriteFileOptions](_fs_.md#writefileoptions) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
