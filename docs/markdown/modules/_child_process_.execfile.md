[typescript](../README.md) › [Globals](../globals.md) › ["child_process"](_child_process_.md) › [execFile](_child_process_.execfile.md)

# Module: execFile

## Callable

▸ **execFile**(`file`: string): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:317

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `options`: object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) | undefined | null): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:318

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`options` | object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) &#124; undefined &#124; null |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args?`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | null): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:319

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args?` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› &#124; null |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null, `options`: object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) | undefined | null): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:320

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› &#124; undefined &#124; null |
`options` | object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) &#124; undefined &#124; null |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:323

**Parameters:**

▪ **file**: *string*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string, `stderr`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string |
`stderr` | string |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null, `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:324

**Parameters:**

▪ **file**: *string*

▪ **args**: *[ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string, `stderr`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string |
`stderr` | string |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `options`: [ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:327

**Parameters:**

▪ **file**: *string*

▪ **options**: *[ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: [Buffer](../classes/buffer.md), `stderr`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | [Buffer](../classes/buffer.md) |
`stderr` | [Buffer](../classes/buffer.md) |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null, `options`: [ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:328

**Parameters:**

▪ **file**: *string*

▪ **args**: *[ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null*

▪ **options**: *[ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: [Buffer](../classes/buffer.md), `stderr`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | [Buffer](../classes/buffer.md) |
`stderr` | [Buffer](../classes/buffer.md) |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `options`: [ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:336

**Parameters:**

▪ **file**: *string*

▪ **options**: *[ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string, `stderr`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string |
`stderr` | string |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null, `options`: [ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:337

**Parameters:**

▪ **file**: *string*

▪ **args**: *[ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null*

▪ **options**: *[ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string, `stderr`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string |
`stderr` | string |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `options`: [ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:346

**Parameters:**

▪ **file**: *string*

▪ **options**: *[ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string | [Buffer](../classes/buffer.md), `stderr`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string &#124; [Buffer](../classes/buffer.md) |
`stderr` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null, `options`: [ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:351

**Parameters:**

▪ **file**: *string*

▪ **args**: *[ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null*

▪ **options**: *[ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string | [Buffer](../classes/buffer.md), `stderr`: string | [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string &#124; [Buffer](../classes/buffer.md) |
`stderr` | string &#124; [Buffer](../classes/buffer.md) |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `options`: [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:359

**Parameters:**

▪ **file**: *string*

▪ **options**: *[ExecFileOptions](../interfaces/_child_process_.execfileoptions.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string, `stderr`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string |
`stderr` | string |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null, `options`: [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md), `callback`: function): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:360

**Parameters:**

▪ **file**: *string*

▪ **args**: *[ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null*

▪ **options**: *[ExecFileOptions](../interfaces/_child_process_.execfileoptions.md)*

▪ **callback**: *function*

▸ (`error`: [Error](../interfaces/error.md) | null, `stdout`: string, `stderr`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) &#124; null |
`stdout` | string |
`stderr` | string |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `options`: object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) | undefined | null, `callback`: function | undefined | null): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:363

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`options` | object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) &#124; undefined &#124; null |
`callback` | function &#124; undefined &#124; null |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

▸ **execFile**(`file`: string, `args`: [ReadonlyArray](../interfaces/readonlyarray.md)‹string› | undefined | null, `options`: object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) | undefined | null, `callback`: function | undefined | null): *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

Defined in node_modules/@types/node/child_process.d.ts:368

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | [ReadonlyArray](../interfaces/readonlyarray.md)‹string› &#124; undefined &#124; null |
`options` | object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) &#124; undefined &#124; null |
`callback` | function &#124; undefined &#124; null |

**Returns:** *[ChildProcess](../interfaces/_child_process_.childprocess.md)*

## Index

### Functions

* [__promisify__](_child_process_.execfile.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`file`: string): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:377

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `args`: string[] | undefined | null): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:378

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | string[] &#124; undefined &#124; null |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `options`: [ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:379

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`options` | [ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `args`: string[] | undefined | null, `options`: [ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:380

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | string[] &#124; undefined &#124; null |
`options` | [ExecFileOptionsWithBufferEncoding](../interfaces/_child_process_.execfileoptionswithbufferencoding.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `options`: [ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:381

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`options` | [ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `args`: string[] | undefined | null, `options`: [ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:382

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | string[] &#124; undefined &#124; null |
`options` | [ExecFileOptionsWithStringEncoding](../interfaces/_child_process_.execfileoptionswithstringencoding.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `options`: [ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:383

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`options` | [ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `args`: string[] | undefined | null, `options`: [ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:384

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | string[] &#124; undefined &#124; null |
`options` | [ExecFileOptionsWithOtherEncoding](../interfaces/_child_process_.execfileoptionswithotherencoding.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `options`: [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:385

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`options` | [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `args`: string[] | undefined | null, `options`: [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md)): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | string[] &#124; undefined &#124; null |
`options` | [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `options`: object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) | undefined | null): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`options` | object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) &#124; undefined &#124; null |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

▸ **__promisify__**(`file`: string, `args`: string[] | undefined | null, `options`: object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) | undefined | null): *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*

Defined in node_modules/@types/node/child_process.d.ts:388

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |
`args` | string[] &#124; undefined &#124; null |
`options` | object & [ExecFileOptions](../interfaces/_child_process_.execfileoptions.md) &#124; undefined &#124; null |

**Returns:** *[PromiseWithChild](../interfaces/_child_process_.promisewithchild.md)‹object›*
