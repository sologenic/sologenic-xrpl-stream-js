[typescript](../README.md) › [Globals](../globals.md) › ["async_hooks"](../modules/_async_hooks_.md) › [HookCallbacks](_async_hooks_.hookcallbacks.md)

# Interface: HookCallbacks

## Hierarchy

* **HookCallbacks**

## Index

### Methods

* [after](_async_hooks_.hookcallbacks.md#optional-after)
* [before](_async_hooks_.hookcallbacks.md#optional-before)
* [destroy](_async_hooks_.hookcallbacks.md#optional-destroy)
* [init](_async_hooks_.hookcallbacks.md#optional-init)
* [promiseResolve](_async_hooks_.hookcallbacks.md#optional-promiseresolve)

## Methods

### `Optional` after

▸ **after**(`asyncId`: number): *void*

Defined in node_modules/@types/node/async_hooks.d.ts:36

Called immediately after the callback specified in before is completed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`asyncId` | number | the unique identifier assigned to the resource which has executed the callback.  |

**Returns:** *void*

___

### `Optional` before

▸ **before**(`asyncId`: number): *void*

Defined in node_modules/@types/node/async_hooks.d.ts:30

When an asynchronous operation is initiated or completes a callback is called to notify the user.
The before callback is called just before said callback is executed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`asyncId` | number | the unique identifier assigned to the resource about to execute the callback.  |

**Returns:** *void*

___

### `Optional` destroy

▸ **destroy**(`asyncId`: number): *void*

Defined in node_modules/@types/node/async_hooks.d.ts:49

Called after the resource corresponding to asyncId is destroyed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`asyncId` | number | a unique ID for the async resource  |

**Returns:** *void*

___

### `Optional` init

▸ **init**(`asyncId`: number, `type`: string, `triggerAsyncId`: number, `resource`: [Object](object.md)): *void*

Defined in node_modules/@types/node/async_hooks.d.ts:23

Called when a class is constructed that has the possibility to emit an asynchronous event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`asyncId` | number | a unique ID for the async resource |
`type` | string | the type of the async resource |
`triggerAsyncId` | number | the unique ID of the async resource in whose execution context this async resource was created |
`resource` | [Object](object.md) | reference to the resource representing the async operation, needs to be released during destroy  |

**Returns:** *void*

___

### `Optional` promiseResolve

▸ **promiseResolve**(`asyncId`: number): *void*

Defined in node_modules/@types/node/async_hooks.d.ts:43

Called when a promise has resolve() called. This may not be in the same execution id
as the promise itself.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`asyncId` | number | the unique id for the promise that was resolve()d.  |

**Returns:** *void*
