[typescript](../README.md) › [Globals](../globals.md) › ["async_hooks"](../modules/_async_hooks_.md) › [AsyncResourceOptions](_async_hooks_.asyncresourceoptions.md)

# Interface: AsyncResourceOptions

## Hierarchy

* **AsyncResourceOptions**

## Index

### Properties

* [requireManualDestroy](_async_hooks_.asyncresourceoptions.md#optional-requiremanualdestroy)
* [triggerAsyncId](_async_hooks_.asyncresourceoptions.md#optional-triggerasyncid)

## Properties

### `Optional` requireManualDestroy

• **requireManualDestroy**? : *undefined | false | true*

Defined in node_modules/@types/node/async_hooks.d.ts:85

Disables automatic `emitDestroy` when the object is garbage collected.
This usually does not need to be set (even if `emitDestroy` is called
manually), unless the resource's `asyncId` is retrieved and the
sensitive API's `emitDestroy` is called with it.
Default: `false`

___

### `Optional` triggerAsyncId

• **triggerAsyncId**? : *undefined | number*

Defined in node_modules/@types/node/async_hooks.d.ts:76

The ID of the execution context that created this async event.
Default: `executionAsyncId()`
