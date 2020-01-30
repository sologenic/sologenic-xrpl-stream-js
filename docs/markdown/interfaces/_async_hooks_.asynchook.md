[typescript](../README.md) › [Globals](../globals.md) › ["async_hooks"](../modules/_async_hooks_.md) › [AsyncHook](_async_hooks_.asynchook.md)

# Interface: AsyncHook

## Hierarchy

* **AsyncHook**

## Index

### Methods

* [disable](_async_hooks_.asynchook.md#disable)
* [enable](_async_hooks_.asynchook.md#enable)

## Methods

###  disable

▸ **disable**(): *this*

Defined in node_modules/@types/node/async_hooks.d.ts:61

Disable the callbacks for a given AsyncHook instance from the global pool of AsyncHook callbacks to be executed. Once a hook has been disabled it will not be called again until enabled.

**Returns:** *this*

___

###  enable

▸ **enable**(): *this*

Defined in node_modules/@types/node/async_hooks.d.ts:56

Enable the callbacks for a given AsyncHook instance. If no callbacks are provided enabling is a noop.

**Returns:** *this*
