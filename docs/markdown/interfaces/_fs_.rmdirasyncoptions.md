[typescript](../README.md) › [Globals](../globals.md) › ["fs"](../modules/_fs_.md) › [RmDirAsyncOptions](_fs_.rmdirasyncoptions.md)

# Interface: RmDirAsyncOptions

## Hierarchy

* [RmDirOptions](_fs_.rmdiroptions.md)

  ↳ **RmDirAsyncOptions**

## Index

### Properties

* [emfileWait](_fs_.rmdirasyncoptions.md#optional-emfilewait)
* [maxBusyTries](_fs_.rmdirasyncoptions.md#optional-maxbusytries)
* [recursive](_fs_.rmdirasyncoptions.md#optional-recursive)

## Properties

### `Optional` emfileWait

• **emfileWait**? : *undefined | number*

Defined in node_modules/@types/node/fs.d.ts:709

If an `EMFILE` error is encountered, Node.js will
retry the operation with a linear backoff of 1ms longer on each try until the
timeout duration passes this limit. This option is ignored if the `recursive`
option is not `true`.

**`default`** 1000

___

### `Optional` maxBusyTries

• **maxBusyTries**? : *undefined | number*

Defined in node_modules/@types/node/fs.d.ts:717

If an `EBUSY`, `ENOTEMPTY`, or `EPERM` error is
encountered, Node.js will retry the operation with a linear backoff wait of
100ms longer on each try. This option represents the number of retries. This
option is ignored if the `recursive` option is not `true`.

**`default`** 3

___

### `Optional` recursive

• **recursive**? : *undefined | false | true*

*Inherited from [RmDirOptions](_fs_.rmdiroptions.md).[recursive](_fs_.rmdiroptions.md#optional-recursive)*

Defined in node_modules/@types/node/fs.d.ts:698

If `true`, perform a recursive directory removal. In
recursive mode, errors are not reported if `path` does not exist, and
operations are retried on failure.

**`experimental`** 

**`default`** false
