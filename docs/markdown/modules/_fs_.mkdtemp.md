[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [mkdtemp](_fs_.mkdtemp.md)

# Module: mkdtemp

## Callable

▸ **mkdtemp**(`prefix`: string, `options`: object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:793

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

▪ **prefix**: *string*

▪ **options**: *object | [BufferEncoding](../globals.md#bufferencoding) | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `folder`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`folder` | string |

**Returns:** *void*

▸ **mkdtemp**(`prefix`: string, `options`: "buffer" | object, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:800

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

▪ **prefix**: *string*

▪ **options**: *"buffer" | object*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `folder`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`folder` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **mkdtemp**(`prefix`: string, `options`: object | string | undefined | null, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:807

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

▪ **prefix**: *string*

▪ **options**: *object | string | undefined | null*

The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `folder`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`folder` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **mkdtemp**(`prefix`: string, `callback`: function): *void*

Defined in node_modules/@types/node/fs.d.ts:813

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

▪ **prefix**: *string*

▪ **callback**: *function*

▸ (`err`: [ErrnoException](../interfaces/nodejs.errnoexception.md) | null, `folder`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [ErrnoException](../interfaces/nodejs.errnoexception.md) &#124; null |
`folder` | string |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_fs_.mkdtemp.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`prefix`: string, `options?`: object | [BufferEncoding](../globals.md#bufferencoding) | null): *[Promise](../interfaces/promise.md)‹string›*

Defined in node_modules/@types/node/fs.d.ts:822

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options?` | object &#124; [BufferEncoding](../globals.md#bufferencoding) &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string›*

▸ **__promisify__**(`prefix`: string, `options`: object | "buffer"): *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:829

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options` | object &#124; "buffer" | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹[Buffer](../classes/buffer.md)›*

▸ **__promisify__**(`prefix`: string, `options?`: object | string | null): *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*

Defined in node_modules/@types/node/fs.d.ts:836

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | - |
`options?` | object &#124; string &#124; null | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.  |

**Returns:** *[Promise](../interfaces/promise.md)‹string | [Buffer](../classes/buffer.md)›*
