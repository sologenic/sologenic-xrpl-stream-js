[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [writeFile](_fs_.writefile.md)

# Module: writeFile

## Callable

▸ **writeFile**(`path`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `options`: [WriteFileOptions](_fs_.md#writefileoptions), `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1370

Asynchronously writes data to a file, replacing the file if it already exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
`options` | [WriteFileOptions](_fs_.md#writefileoptions) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

▸ **writeFile**(`path`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `callback`: [NoParamCallback](_fs_.md#noparamcallback)): *void*

Defined in node_modules/@types/node/fs.d.ts:1379

Asynchronously writes data to a file, replacing the file if it already exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.  |
`callback` | [NoParamCallback](_fs_.md#noparamcallback) | - |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.writefile.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`path`: [PathLike](_fs_.md#pathlike) | number, `data`: any, `options?`: [WriteFileOptions](_fs_.md#writefileoptions)): *[Promise](../interfaces/promise.md)‹void›*

Defined in node_modules/@types/node/fs.d.ts:1395

Asynchronously writes data to a file, replacing the file if it already exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | [PathLike](_fs_.md#pathlike) &#124; number | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
`data` | any | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
`options?` | [WriteFileOptions](_fs_.md#writefileoptions) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹void›*
