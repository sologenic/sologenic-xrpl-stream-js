[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](_inspector_.md)

# Module: "inspector"

The inspector module provides an API for interacting with the V8 inspector.

## Index

### Modules

* [Console](_inspector_.console.md)
* [Debugger](_inspector_.debugger.md)
* [HeapProfiler](_inspector_.heapprofiler.md)
* [NodeRuntime](_inspector_.noderuntime.md)
* [NodeTracing](_inspector_.nodetracing.md)
* [NodeWorker](_inspector_.nodeworker.md)
* [Profiler](_inspector_.profiler.md)
* [Runtime](_inspector_.runtime.md)
* [Schema](_inspector_.schema.md)

### Classes

* [Session](../classes/_inspector_.session.md)

### Interfaces

* [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)

### Functions

* [close](_inspector_.md#close)
* [open](_inspector_.md#open)
* [url](_inspector_.md#url)

## Functions

###  close

▸ **close**(): *void*

Defined in node_modules/@types/node/inspector.d.ts:3028

Deactivate the inspector. Blocks until there are no active connections.

**Returns:** *void*

___

###  open

▸ **open**(`port?`: undefined | number, `host?`: undefined | string, `wait?`: undefined | false | true): *void*

Defined in node_modules/@types/node/inspector.d.ts:3023

Activate inspector on host and port. Equivalent to node --inspect=[[host:]port], but can be done programatically after node has started.
If wait is true, will block until a client has connected to the inspect port and flow control has been passed to the debugger client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`port?` | undefined &#124; number | Port to listen on for inspector connections. Optional, defaults to what was specified on the CLI. |
`host?` | undefined &#124; string | Host to listen on for inspector connections. Optional, defaults to what was specified on the CLI. |
`wait?` | undefined &#124; false &#124; true | Block until a client has connected. Optional, defaults to false.  |

**Returns:** *void*

___

###  url

▸ **url**(): *string | undefined*

Defined in node_modules/@types/node/inspector.d.ts:3033

Return the URL of the active inspector, or `undefined` if there is none.

**Returns:** *string | undefined*
