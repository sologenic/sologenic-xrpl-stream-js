[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Session](_inspector_.session.md)

# Class: Session

The inspector.Session is used for dispatching messages to the V8 inspector back-end and receiving message responses and notifications.

## Hierarchy

  ↳ [EventEmitter](_events_.internal.eventemitter.md)

  ↳ **Session**

## Index

### Constructors

* [constructor](_inspector_.session.md#constructor)

### Properties

* [defaultMaxListeners](_inspector_.session.md#static-defaultmaxlisteners)

### Methods

* [addListener](_inspector_.session.md#addlistener)
* [connect](_inspector_.session.md#connect)
* [disconnect](_inspector_.session.md#disconnect)
* [emit](_inspector_.session.md#emit)
* [eventNames](_inspector_.session.md#eventnames)
* [getMaxListeners](_inspector_.session.md#getmaxlisteners)
* [listenerCount](_inspector_.session.md#listenercount)
* [listeners](_inspector_.session.md#listeners)
* [off](_inspector_.session.md#off)
* [on](_inspector_.session.md#on)
* [once](_inspector_.session.md#once)
* [post](_inspector_.session.md#post)
* [prependListener](_inspector_.session.md#prependlistener)
* [prependOnceListener](_inspector_.session.md#prependoncelistener)
* [rawListeners](_inspector_.session.md#rawlisteners)
* [removeAllListeners](_inspector_.session.md#removealllisteners)
* [removeListener](_inspector_.session.md#removelistener)
* [setMaxListeners](_inspector_.session.md#setmaxlisteners)
* [listenerCount](_inspector_.session.md#static-listenercount)

## Constructors

###  constructor

\+ **new Session**(): *[Session](_inspector_.session.md)*

Defined in node_modules/@types/node/inspector.d.ts:1904

Create a new instance of the inspector.Session class.
The inspector session needs to be connected through session.connect() before the messages can be dispatched to the inspector backend.

**Returns:** *[Session](_inspector_.session.md)*

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[defaultMaxListeners](../interfaces/isologenictxhandler.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2349

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "inspectorNotification", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2354

Emitted when any notification from the V8 Inspector is received.

**Parameters:**

▪ **event**: *"inspectorNotification"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object› |

**Returns:** *this*

▸ **addListener**(`event`: "Runtime.executionContextCreated", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2359

Issued when new execution context is created.

**Parameters:**

▪ **event**: *"Runtime.executionContextCreated"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Runtime.executionContextDestroyed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2364

Issued when execution context is destroyed.

**Parameters:**

▪ **event**: *"Runtime.executionContextDestroyed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Runtime.executionContextsCleared", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2369

Issued when all executionContexts were cleared in browser

**Parameters:**

▪ **event**: *"Runtime.executionContextsCleared"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "Runtime.exceptionThrown", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2374

Issued when exception was thrown and unhandled.

**Parameters:**

▪ **event**: *"Runtime.exceptionThrown"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Runtime.exceptionRevoked", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2379

Issued when unhandled exception was revoked.

**Parameters:**

▪ **event**: *"Runtime.exceptionRevoked"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Runtime.consoleAPICalled", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2384

Issued when console API was called.

**Parameters:**

▪ **event**: *"Runtime.consoleAPICalled"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Runtime.inspectRequested", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2389

Issued when object should be inspected (for example, as a result of inspect() command line API call).

**Parameters:**

▪ **event**: *"Runtime.inspectRequested"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Debugger.scriptParsed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2394

Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger.

**Parameters:**

▪ **event**: *"Debugger.scriptParsed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Debugger.scriptFailedToParse", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2399

Fired when virtual machine fails to parse the script.

**Parameters:**

▪ **event**: *"Debugger.scriptFailedToParse"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Debugger.breakpointResolved", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2404

Fired when breakpoint is resolved to an actual script and location.

**Parameters:**

▪ **event**: *"Debugger.breakpointResolved"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Debugger.paused", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2409

Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.

**Parameters:**

▪ **event**: *"Debugger.paused"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Debugger.resumed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2414

Fired when the virtual machine resumed execution.

**Parameters:**

▪ **event**: *"Debugger.resumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "Console.messageAdded", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2419

Issued when new console message is added.

**Parameters:**

▪ **event**: *"Console.messageAdded"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Profiler.consoleProfileStarted", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2424

Sent when new profile recording is started using console.profile() call.

**Parameters:**

▪ **event**: *"Profiler.consoleProfileStarted"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "Profiler.consoleProfileFinished", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2426

**Parameters:**

▪ **event**: *"Profiler.consoleProfileFinished"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "HeapProfiler.addHeapSnapshotChunk", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2427

**Parameters:**

▪ **event**: *"HeapProfiler.addHeapSnapshotChunk"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "HeapProfiler.resetProfiles", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2428

**Parameters:**

▪ **event**: *"HeapProfiler.resetProfiles"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "HeapProfiler.reportHeapSnapshotProgress", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2429

**Parameters:**

▪ **event**: *"HeapProfiler.reportHeapSnapshotProgress"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "HeapProfiler.lastSeenObjectId", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2434

If heap objects tracking has been started then backend regularly sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

**Parameters:**

▪ **event**: *"HeapProfiler.lastSeenObjectId"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "HeapProfiler.heapStatsUpdate", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2439

If heap objects tracking has been started then backend may send update for one or more fragments

**Parameters:**

▪ **event**: *"HeapProfiler.heapStatsUpdate"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "NodeTracing.dataCollected", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2444

Contains an bucket of collected trace events.

**Parameters:**

▪ **event**: *"NodeTracing.dataCollected"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "NodeTracing.tracingComplete", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2450

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.

**Parameters:**

▪ **event**: *"NodeTracing.tracingComplete"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "NodeWorker.attachedToWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2455

Issued when attached to a worker.

**Parameters:**

▪ **event**: *"NodeWorker.attachedToWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "NodeWorker.detachedFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2460

Issued when detached from the worker.

**Parameters:**

▪ **event**: *"NodeWorker.detachedFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "NodeWorker.receivedMessageFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2466

Notifies about a new protocol message received from the session
(session ID is provided in attachedToWorker notification).

**Parameters:**

▪ **event**: *"NodeWorker.receivedMessageFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)› |

**Returns:** *this*

▸ **addListener**(`event`: "NodeRuntime.waitingForDisconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[addListener](../interfaces/isologenictxhandler.md#addlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2474

This event is fired instead of `Runtime.executionContextDestroyed` when
enabled.
It is fired when the Node process finished all code execution and is
waiting for all frontends to disconnect.

**Parameters:**

▪ **event**: *"NodeRuntime.waitingForDisconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  connect

▸ **connect**(): *void*

Defined in node_modules/@types/node/inspector.d.ts:1916

Connects a session to the inspector back-end.
An exception will be thrown if there is already a connected session established either
through the API or by a front-end connected to the Inspector WebSocket port.

**Returns:** *void*

___

###  disconnect

▸ **disconnect**(): *void*

Defined in node_modules/@types/node/inspector.d.ts:1923

Immediately close the session. All pending message callbacks will be called with an error.
session.connect() will need to be called to be able to send messages again.
Reconnected session will lose all inspector state, such as enabled agents or configured breakpoints.

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2476

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "inspectorNotification", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2477

**Parameters:**

Name | Type |
------ | ------ |
`event` | "inspectorNotification" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object› |

**Returns:** *boolean*

▸ **emit**(`event`: "Runtime.executionContextCreated", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2478

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Runtime.executionContextCreated" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Runtime.executionContextDestroyed", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2479

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Runtime.executionContextDestroyed" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Runtime.executionContextsCleared"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2480

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Runtime.executionContextsCleared" |

**Returns:** *boolean*

▸ **emit**(`event`: "Runtime.exceptionThrown", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2481

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Runtime.exceptionThrown" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Runtime.exceptionRevoked", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2482

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Runtime.exceptionRevoked" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Runtime.consoleAPICalled", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2483

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Runtime.consoleAPICalled" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Runtime.inspectRequested", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2484

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Runtime.inspectRequested" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Debugger.scriptParsed", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2485

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Debugger.scriptParsed" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Debugger.scriptFailedToParse", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2486

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Debugger.scriptFailedToParse" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Debugger.breakpointResolved", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2487

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Debugger.breakpointResolved" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Debugger.paused", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2488

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Debugger.paused" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Debugger.resumed"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2489

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Debugger.resumed" |

**Returns:** *boolean*

▸ **emit**(`event`: "Console.messageAdded", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2490

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Console.messageAdded" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Profiler.consoleProfileStarted", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2491

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Profiler.consoleProfileStarted" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "Profiler.consoleProfileFinished", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2492

**Parameters:**

Name | Type |
------ | ------ |
`event` | "Profiler.consoleProfileFinished" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "HeapProfiler.addHeapSnapshotChunk", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2493

**Parameters:**

Name | Type |
------ | ------ |
`event` | "HeapProfiler.addHeapSnapshotChunk" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "HeapProfiler.resetProfiles"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2494

**Parameters:**

Name | Type |
------ | ------ |
`event` | "HeapProfiler.resetProfiles" |

**Returns:** *boolean*

▸ **emit**(`event`: "HeapProfiler.reportHeapSnapshotProgress", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2495

**Parameters:**

Name | Type |
------ | ------ |
`event` | "HeapProfiler.reportHeapSnapshotProgress" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "HeapProfiler.lastSeenObjectId", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2496

**Parameters:**

Name | Type |
------ | ------ |
`event` | "HeapProfiler.lastSeenObjectId" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "HeapProfiler.heapStatsUpdate", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2497

**Parameters:**

Name | Type |
------ | ------ |
`event` | "HeapProfiler.heapStatsUpdate" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "NodeTracing.dataCollected", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2498

**Parameters:**

Name | Type |
------ | ------ |
`event` | "NodeTracing.dataCollected" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "NodeTracing.tracingComplete"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2499

**Parameters:**

Name | Type |
------ | ------ |
`event` | "NodeTracing.tracingComplete" |

**Returns:** *boolean*

▸ **emit**(`event`: "NodeWorker.attachedToWorker", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2500

**Parameters:**

Name | Type |
------ | ------ |
`event` | "NodeWorker.attachedToWorker" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "NodeWorker.detachedFromWorker", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2501

**Parameters:**

Name | Type |
------ | ------ |
`event` | "NodeWorker.detachedFromWorker" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "NodeWorker.receivedMessageFromWorker", `message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)›): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2502

**Parameters:**

Name | Type |
------ | ------ |
`event` | "NodeWorker.receivedMessageFromWorker" |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)› |

**Returns:** *boolean*

▸ **emit**(`event`: "NodeRuntime.waitingForDisconnect"): *boolean*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[emit](../interfaces/isologenictxhandler.md#emit)*

Defined in node_modules/@types/node/inspector.d.ts:2503

**Parameters:**

Name | Type |
------ | ------ |
`event` | "NodeRuntime.waitingForDisconnect" |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[eventNames](../interfaces/isologenictxhandler.md#eventnames)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[eventNames](nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *[Array](../interfaces/regexpmatcharray.md#array)‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[getMaxListeners](../interfaces/isologenictxhandler.md#getmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[getMaxListeners](nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listenerCount](nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listeners](../interfaces/isologenictxhandler.md#listeners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[listeners](nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[off](../interfaces/isologenictxhandler.md#off)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[off](nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2505

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "inspectorNotification", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2510

Emitted when any notification from the V8 Inspector is received.

**Parameters:**

▪ **event**: *"inspectorNotification"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object› |

**Returns:** *this*

▸ **on**(`event`: "Runtime.executionContextCreated", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2515

Issued when new execution context is created.

**Parameters:**

▪ **event**: *"Runtime.executionContextCreated"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Runtime.executionContextDestroyed", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2520

Issued when execution context is destroyed.

**Parameters:**

▪ **event**: *"Runtime.executionContextDestroyed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Runtime.executionContextsCleared", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2525

Issued when all executionContexts were cleared in browser

**Parameters:**

▪ **event**: *"Runtime.executionContextsCleared"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "Runtime.exceptionThrown", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2530

Issued when exception was thrown and unhandled.

**Parameters:**

▪ **event**: *"Runtime.exceptionThrown"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Runtime.exceptionRevoked", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2535

Issued when unhandled exception was revoked.

**Parameters:**

▪ **event**: *"Runtime.exceptionRevoked"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Runtime.consoleAPICalled", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2540

Issued when console API was called.

**Parameters:**

▪ **event**: *"Runtime.consoleAPICalled"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Runtime.inspectRequested", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2545

Issued when object should be inspected (for example, as a result of inspect() command line API call).

**Parameters:**

▪ **event**: *"Runtime.inspectRequested"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Debugger.scriptParsed", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2550

Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger.

**Parameters:**

▪ **event**: *"Debugger.scriptParsed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Debugger.scriptFailedToParse", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2555

Fired when virtual machine fails to parse the script.

**Parameters:**

▪ **event**: *"Debugger.scriptFailedToParse"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Debugger.breakpointResolved", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2560

Fired when breakpoint is resolved to an actual script and location.

**Parameters:**

▪ **event**: *"Debugger.breakpointResolved"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Debugger.paused", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2565

Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.

**Parameters:**

▪ **event**: *"Debugger.paused"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Debugger.resumed", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2570

Fired when the virtual machine resumed execution.

**Parameters:**

▪ **event**: *"Debugger.resumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "Console.messageAdded", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2575

Issued when new console message is added.

**Parameters:**

▪ **event**: *"Console.messageAdded"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Profiler.consoleProfileStarted", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2580

Sent when new profile recording is started using console.profile() call.

**Parameters:**

▪ **event**: *"Profiler.consoleProfileStarted"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "Profiler.consoleProfileFinished", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2582

**Parameters:**

▪ **event**: *"Profiler.consoleProfileFinished"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "HeapProfiler.addHeapSnapshotChunk", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2583

**Parameters:**

▪ **event**: *"HeapProfiler.addHeapSnapshotChunk"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "HeapProfiler.resetProfiles", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2584

**Parameters:**

▪ **event**: *"HeapProfiler.resetProfiles"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "HeapProfiler.reportHeapSnapshotProgress", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2585

**Parameters:**

▪ **event**: *"HeapProfiler.reportHeapSnapshotProgress"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "HeapProfiler.lastSeenObjectId", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2590

If heap objects tracking has been started then backend regularly sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

**Parameters:**

▪ **event**: *"HeapProfiler.lastSeenObjectId"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "HeapProfiler.heapStatsUpdate", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2595

If heap objects tracking has been started then backend may send update for one or more fragments

**Parameters:**

▪ **event**: *"HeapProfiler.heapStatsUpdate"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "NodeTracing.dataCollected", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2600

Contains an bucket of collected trace events.

**Parameters:**

▪ **event**: *"NodeTracing.dataCollected"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "NodeTracing.tracingComplete", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2606

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.

**Parameters:**

▪ **event**: *"NodeTracing.tracingComplete"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "NodeWorker.attachedToWorker", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2611

Issued when attached to a worker.

**Parameters:**

▪ **event**: *"NodeWorker.attachedToWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "NodeWorker.detachedFromWorker", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2616

Issued when detached from the worker.

**Parameters:**

▪ **event**: *"NodeWorker.detachedFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "NodeWorker.receivedMessageFromWorker", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2622

Notifies about a new protocol message received from the session
(session ID is provided in attachedToWorker notification).

**Parameters:**

▪ **event**: *"NodeWorker.receivedMessageFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)› |

**Returns:** *this*

▸ **on**(`event`: "NodeRuntime.waitingForDisconnect", `listener`: function): *this*

*Overrides [Domain](_domain_.domain.md).[on](_domain_.domain.md#on)*

Defined in node_modules/@types/node/inspector.d.ts:2630

This event is fired instead of `Runtime.executionContextDestroyed` when
enabled.
It is fired when the Node process finished all code execution and is
waiting for all frontends to disconnect.

**Parameters:**

▪ **event**: *"NodeRuntime.waitingForDisconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2632

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "inspectorNotification", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2637

Emitted when any notification from the V8 Inspector is received.

**Parameters:**

▪ **event**: *"inspectorNotification"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object› |

**Returns:** *this*

▸ **once**(`event`: "Runtime.executionContextCreated", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2642

Issued when new execution context is created.

**Parameters:**

▪ **event**: *"Runtime.executionContextCreated"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Runtime.executionContextDestroyed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2647

Issued when execution context is destroyed.

**Parameters:**

▪ **event**: *"Runtime.executionContextDestroyed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Runtime.executionContextsCleared", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2652

Issued when all executionContexts were cleared in browser

**Parameters:**

▪ **event**: *"Runtime.executionContextsCleared"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "Runtime.exceptionThrown", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2657

Issued when exception was thrown and unhandled.

**Parameters:**

▪ **event**: *"Runtime.exceptionThrown"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Runtime.exceptionRevoked", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2662

Issued when unhandled exception was revoked.

**Parameters:**

▪ **event**: *"Runtime.exceptionRevoked"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Runtime.consoleAPICalled", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2667

Issued when console API was called.

**Parameters:**

▪ **event**: *"Runtime.consoleAPICalled"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Runtime.inspectRequested", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2672

Issued when object should be inspected (for example, as a result of inspect() command line API call).

**Parameters:**

▪ **event**: *"Runtime.inspectRequested"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Debugger.scriptParsed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2677

Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger.

**Parameters:**

▪ **event**: *"Debugger.scriptParsed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Debugger.scriptFailedToParse", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2682

Fired when virtual machine fails to parse the script.

**Parameters:**

▪ **event**: *"Debugger.scriptFailedToParse"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Debugger.breakpointResolved", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2687

Fired when breakpoint is resolved to an actual script and location.

**Parameters:**

▪ **event**: *"Debugger.breakpointResolved"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Debugger.paused", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2692

Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.

**Parameters:**

▪ **event**: *"Debugger.paused"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Debugger.resumed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2697

Fired when the virtual machine resumed execution.

**Parameters:**

▪ **event**: *"Debugger.resumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "Console.messageAdded", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2702

Issued when new console message is added.

**Parameters:**

▪ **event**: *"Console.messageAdded"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Profiler.consoleProfileStarted", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2707

Sent when new profile recording is started using console.profile() call.

**Parameters:**

▪ **event**: *"Profiler.consoleProfileStarted"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "Profiler.consoleProfileFinished", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2709

**Parameters:**

▪ **event**: *"Profiler.consoleProfileFinished"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "HeapProfiler.addHeapSnapshotChunk", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2710

**Parameters:**

▪ **event**: *"HeapProfiler.addHeapSnapshotChunk"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "HeapProfiler.resetProfiles", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2711

**Parameters:**

▪ **event**: *"HeapProfiler.resetProfiles"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "HeapProfiler.reportHeapSnapshotProgress", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2712

**Parameters:**

▪ **event**: *"HeapProfiler.reportHeapSnapshotProgress"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "HeapProfiler.lastSeenObjectId", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2717

If heap objects tracking has been started then backend regularly sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

**Parameters:**

▪ **event**: *"HeapProfiler.lastSeenObjectId"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "HeapProfiler.heapStatsUpdate", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2722

If heap objects tracking has been started then backend may send update for one or more fragments

**Parameters:**

▪ **event**: *"HeapProfiler.heapStatsUpdate"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "NodeTracing.dataCollected", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2727

Contains an bucket of collected trace events.

**Parameters:**

▪ **event**: *"NodeTracing.dataCollected"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "NodeTracing.tracingComplete", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2733

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.

**Parameters:**

▪ **event**: *"NodeTracing.tracingComplete"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "NodeWorker.attachedToWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2738

Issued when attached to a worker.

**Parameters:**

▪ **event**: *"NodeWorker.attachedToWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "NodeWorker.detachedFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2743

Issued when detached from the worker.

**Parameters:**

▪ **event**: *"NodeWorker.detachedFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "NodeWorker.receivedMessageFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2749

Notifies about a new protocol message received from the session
(session ID is provided in attachedToWorker notification).

**Parameters:**

▪ **event**: *"NodeWorker.receivedMessageFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)› |

**Returns:** *this*

▸ **once**(`event`: "NodeRuntime.waitingForDisconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[once](../interfaces/isologenictxhandler.md#once)*

Defined in node_modules/@types/node/inspector.d.ts:2757

This event is fired instead of `Runtime.executionContextDestroyed` when
enabled.
It is fired when the Node process finished all code execution and is
waiting for all frontends to disconnect.

**Parameters:**

▪ **event**: *"NodeRuntime.waitingForDisconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  post

▸ **post**(`method`: string, `params?`: undefined | object, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1929

Posts a message to the inspector back-end. callback will be notified when a response is received.
callback is a function that accepts two optional arguments - error and message-specific result.

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params?` | undefined &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: string, `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1930

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Schema.getDomains", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1935

Returns supported domains.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Schema.getDomains" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.evaluate", `params?`: [EvaluateParameterType](../interfaces/_inspector_.runtime.evaluateparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1940

Evaluates expression on global object.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.evaluate" |
`params?` | [EvaluateParameterType](../interfaces/_inspector_.runtime.evaluateparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.evaluate", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1941

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.evaluate" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.awaitPromise", `params?`: [AwaitPromiseParameterType](../interfaces/_inspector_.runtime.awaitpromiseparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1946

Add handler to promise with given promise object id.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.awaitPromise" |
`params?` | [AwaitPromiseParameterType](../interfaces/_inspector_.runtime.awaitpromiseparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.awaitPromise", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1947

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.awaitPromise" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.callFunctionOn", `params?`: [CallFunctionOnParameterType](../interfaces/_inspector_.runtime.callfunctiononparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1952

Calls function with given declaration on the given object. Object group of the result is inherited from the target object.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.callFunctionOn" |
`params?` | [CallFunctionOnParameterType](../interfaces/_inspector_.runtime.callfunctiononparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.callFunctionOn", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1953

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.callFunctionOn" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.getProperties", `params?`: [GetPropertiesParameterType](../interfaces/_inspector_.runtime.getpropertiesparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1958

Returns properties of a given object. Object group of the result is inherited from the target object.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.getProperties" |
`params?` | [GetPropertiesParameterType](../interfaces/_inspector_.runtime.getpropertiesparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.getProperties", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1959

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.getProperties" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.releaseObject", `params?`: [ReleaseObjectParameterType](../interfaces/_inspector_.runtime.releaseobjectparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1964

Releases remote object with given id.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.releaseObject" |
`params?` | [ReleaseObjectParameterType](../interfaces/_inspector_.runtime.releaseobjectparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.releaseObject", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1965

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.releaseObject" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.releaseObjectGroup", `params?`: [ReleaseObjectGroupParameterType](../interfaces/_inspector_.runtime.releaseobjectgroupparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1970

Releases all remote objects that belong to a given group.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.releaseObjectGroup" |
`params?` | [ReleaseObjectGroupParameterType](../interfaces/_inspector_.runtime.releaseobjectgroupparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.releaseObjectGroup", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1971

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.releaseObjectGroup" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.runIfWaitingForDebugger", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1976

Tells inspected instance to run if it was waiting for debugger to attach.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.runIfWaitingForDebugger" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.enable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1981

Enables reporting of execution contexts creation by means of <code>executionContextCreated</code> event. When the reporting gets enabled the event will be sent immediately for each existing execution context.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.enable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.disable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1986

Disables reporting of execution contexts creation.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.disable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.discardConsoleEntries", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1991

Discards collected exceptions and console API calls.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.discardConsoleEntries" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.setCustomObjectFormatterEnabled", `params?`: [SetCustomObjectFormatterEnabledParameterType](../interfaces/_inspector_.runtime.setcustomobjectformatterenabledparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1996

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.setCustomObjectFormatterEnabled" |
`params?` | [SetCustomObjectFormatterEnabledParameterType](../interfaces/_inspector_.runtime.setcustomobjectformatterenabledparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.setCustomObjectFormatterEnabled", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:1997

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.setCustomObjectFormatterEnabled" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.compileScript", `params?`: [CompileScriptParameterType](../interfaces/_inspector_.runtime.compilescriptparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2002

Compiles expression.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.compileScript" |
`params?` | [CompileScriptParameterType](../interfaces/_inspector_.runtime.compilescriptparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.compileScript", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2003

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.compileScript" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.runScript", `params?`: [RunScriptParameterType](../interfaces/_inspector_.runtime.runscriptparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2008

Runs script with given id in a given context.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.runScript" |
`params?` | [RunScriptParameterType](../interfaces/_inspector_.runtime.runscriptparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.runScript", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2009

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.runScript" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.queryObjects", `params?`: [QueryObjectsParameterType](../interfaces/_inspector_.runtime.queryobjectsparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2011

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.queryObjects" |
`params?` | [QueryObjectsParameterType](../interfaces/_inspector_.runtime.queryobjectsparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.queryObjects", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2012

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.queryObjects" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.globalLexicalScopeNames", `params?`: [GlobalLexicalScopeNamesParameterType](../interfaces/_inspector_.runtime.globallexicalscopenamesparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2017

Returns all let, const and class variables from global scope.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.globalLexicalScopeNames" |
`params?` | [GlobalLexicalScopeNamesParameterType](../interfaces/_inspector_.runtime.globallexicalscopenamesparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Runtime.globalLexicalScopeNames", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2022

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Runtime.globalLexicalScopeNames" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.enable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2027

Enables debugger for the given page. Clients should not assume that the debugging has been enabled until the result for this command is received.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.enable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.disable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2032

Disables debugger for given page.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.disable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBreakpointsActive", `params?`: [SetBreakpointsActiveParameterType](../interfaces/_inspector_.debugger.setbreakpointsactiveparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2037

Activates / deactivates all breakpoints on the page.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBreakpointsActive" |
`params?` | [SetBreakpointsActiveParameterType](../interfaces/_inspector_.debugger.setbreakpointsactiveparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBreakpointsActive", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2038

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBreakpointsActive" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setSkipAllPauses", `params?`: [SetSkipAllPausesParameterType](../interfaces/_inspector_.debugger.setskipallpausesparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2043

Makes page not interrupt on any pauses (breakpoint, exception, dom exception etc).

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setSkipAllPauses" |
`params?` | [SetSkipAllPausesParameterType](../interfaces/_inspector_.debugger.setskipallpausesparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setSkipAllPauses", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2044

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setSkipAllPauses" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBreakpointByUrl", `params?`: [SetBreakpointByUrlParameterType](../interfaces/_inspector_.debugger.setbreakpointbyurlparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2049

Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in <code>locations</code> property. Further matching script parsing will result in subsequent <code>breakpointResolved</code> events issued. This logical breakpoint will survive page reloads.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBreakpointByUrl" |
`params?` | [SetBreakpointByUrlParameterType](../interfaces/_inspector_.debugger.setbreakpointbyurlparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBreakpointByUrl", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2050

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBreakpointByUrl" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBreakpoint", `params?`: [SetBreakpointParameterType](../interfaces/_inspector_.debugger.setbreakpointparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2055

Sets JavaScript breakpoint at a given location.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBreakpoint" |
`params?` | [SetBreakpointParameterType](../interfaces/_inspector_.debugger.setbreakpointparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBreakpoint", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2056

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBreakpoint" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.removeBreakpoint", `params?`: [RemoveBreakpointParameterType](../interfaces/_inspector_.debugger.removebreakpointparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2061

Removes JavaScript breakpoint.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.removeBreakpoint" |
`params?` | [RemoveBreakpointParameterType](../interfaces/_inspector_.debugger.removebreakpointparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.removeBreakpoint", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2062

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.removeBreakpoint" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.getPossibleBreakpoints", `params?`: [GetPossibleBreakpointsParameterType](../interfaces/_inspector_.debugger.getpossiblebreakpointsparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2067

Returns possible locations for breakpoint. scriptId in start and end range locations should be the same.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.getPossibleBreakpoints" |
`params?` | [GetPossibleBreakpointsParameterType](../interfaces/_inspector_.debugger.getpossiblebreakpointsparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.getPossibleBreakpoints", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2072

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.getPossibleBreakpoints" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.continueToLocation", `params?`: [ContinueToLocationParameterType](../interfaces/_inspector_.debugger.continuetolocationparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2077

Continues execution until specific location is reached.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.continueToLocation" |
`params?` | [ContinueToLocationParameterType](../interfaces/_inspector_.debugger.continuetolocationparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.continueToLocation", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2078

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.continueToLocation" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.pauseOnAsyncCall", `params?`: [PauseOnAsyncCallParameterType](../interfaces/_inspector_.debugger.pauseonasynccallparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2083

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.pauseOnAsyncCall" |
`params?` | [PauseOnAsyncCallParameterType](../interfaces/_inspector_.debugger.pauseonasynccallparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.pauseOnAsyncCall", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2084

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.pauseOnAsyncCall" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.stepOver", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2089

Steps over the statement.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.stepOver" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.stepInto", `params?`: [StepIntoParameterType](../interfaces/_inspector_.debugger.stepintoparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2094

Steps into the function call.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.stepInto" |
`params?` | [StepIntoParameterType](../interfaces/_inspector_.debugger.stepintoparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.stepInto", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2095

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.stepInto" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.stepOut", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2100

Steps out of the function call.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.stepOut" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.pause", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2105

Stops on the next JavaScript statement.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.pause" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.scheduleStepIntoAsync", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2111

This method is deprecated - use Debugger.stepInto with breakOnAsyncCall and Debugger.pauseOnAsyncTask instead. Steps into next scheduled async task if any is scheduled before next pause. Returns success when async task is actually scheduled, returns error if no task were scheduled or another scheduleStepIntoAsync was called.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.scheduleStepIntoAsync" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.resume", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2116

Resumes JavaScript execution.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.resume" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.getStackTrace", `params?`: [GetStackTraceParameterType](../interfaces/_inspector_.debugger.getstacktraceparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2122

Returns stack trace with given <code>stackTraceId</code>.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.getStackTrace" |
`params?` | [GetStackTraceParameterType](../interfaces/_inspector_.debugger.getstacktraceparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.getStackTrace", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2123

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.getStackTrace" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.searchInContent", `params?`: [SearchInContentParameterType](../interfaces/_inspector_.debugger.searchincontentparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2128

Searches for given string in script content.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.searchInContent" |
`params?` | [SearchInContentParameterType](../interfaces/_inspector_.debugger.searchincontentparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.searchInContent", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2129

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.searchInContent" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setScriptSource", `params?`: [SetScriptSourceParameterType](../interfaces/_inspector_.debugger.setscriptsourceparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2134

Edits JavaScript source live.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setScriptSource" |
`params?` | [SetScriptSourceParameterType](../interfaces/_inspector_.debugger.setscriptsourceparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setScriptSource", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2135

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setScriptSource" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.restartFrame", `params?`: [RestartFrameParameterType](../interfaces/_inspector_.debugger.restartframeparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2140

Restarts particular call frame from the beginning.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.restartFrame" |
`params?` | [RestartFrameParameterType](../interfaces/_inspector_.debugger.restartframeparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.restartFrame", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2141

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.restartFrame" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.getScriptSource", `params?`: [GetScriptSourceParameterType](../interfaces/_inspector_.debugger.getscriptsourceparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2146

Returns source for the script with given id.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.getScriptSource" |
`params?` | [GetScriptSourceParameterType](../interfaces/_inspector_.debugger.getscriptsourceparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.getScriptSource", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2147

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.getScriptSource" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setPauseOnExceptions", `params?`: [SetPauseOnExceptionsParameterType](../interfaces/_inspector_.debugger.setpauseonexceptionsparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2152

Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is <code>none</code>.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setPauseOnExceptions" |
`params?` | [SetPauseOnExceptionsParameterType](../interfaces/_inspector_.debugger.setpauseonexceptionsparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setPauseOnExceptions", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2153

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setPauseOnExceptions" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.evaluateOnCallFrame", `params?`: [EvaluateOnCallFrameParameterType](../interfaces/_inspector_.debugger.evaluateoncallframeparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2158

Evaluates expression on a given call frame.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.evaluateOnCallFrame" |
`params?` | [EvaluateOnCallFrameParameterType](../interfaces/_inspector_.debugger.evaluateoncallframeparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.evaluateOnCallFrame", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2159

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.evaluateOnCallFrame" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setVariableValue", `params?`: [SetVariableValueParameterType](../interfaces/_inspector_.debugger.setvariablevalueparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2164

Changes value of variable in a callframe. Object-based scopes are not supported and must be mutated manually.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setVariableValue" |
`params?` | [SetVariableValueParameterType](../interfaces/_inspector_.debugger.setvariablevalueparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setVariableValue", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2165

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setVariableValue" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setReturnValue", `params?`: [SetReturnValueParameterType](../interfaces/_inspector_.debugger.setreturnvalueparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2171

Changes return value in top frame. Available only at return break position.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setReturnValue" |
`params?` | [SetReturnValueParameterType](../interfaces/_inspector_.debugger.setreturnvalueparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setReturnValue", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2172

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setReturnValue" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setAsyncCallStackDepth", `params?`: [SetAsyncCallStackDepthParameterType](../interfaces/_inspector_.debugger.setasynccallstackdepthparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2177

Enables or disables async call stacks tracking.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setAsyncCallStackDepth" |
`params?` | [SetAsyncCallStackDepthParameterType](../interfaces/_inspector_.debugger.setasynccallstackdepthparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setAsyncCallStackDepth", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2178

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setAsyncCallStackDepth" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBlackboxPatterns", `params?`: [SetBlackboxPatternsParameterType](../interfaces/_inspector_.debugger.setblackboxpatternsparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2184

Replace previous blackbox patterns with passed ones. Forces backend to skip stepping/pausing in scripts with url matching one of the patterns. VM will try to leave blackboxed script by performing 'step in' several times, finally resorting to 'step out' if unsuccessful.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBlackboxPatterns" |
`params?` | [SetBlackboxPatternsParameterType](../interfaces/_inspector_.debugger.setblackboxpatternsparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBlackboxPatterns", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2185

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBlackboxPatterns" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBlackboxedRanges", `params?`: [SetBlackboxedRangesParameterType](../interfaces/_inspector_.debugger.setblackboxedrangesparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2191

Makes backend skip steps in the script in blackboxed ranges. VM will try leave blacklisted scripts by performing 'step in' several times, finally resorting to 'step out' if unsuccessful. Positions array contains positions where blackbox state is changed. First interval isn't blackboxed. Array should be sorted.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBlackboxedRanges" |
`params?` | [SetBlackboxedRangesParameterType](../interfaces/_inspector_.debugger.setblackboxedrangesparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Debugger.setBlackboxedRanges", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2192

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Debugger.setBlackboxedRanges" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Console.enable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2197

Enables console domain, sends the messages collected so far to the client by means of the <code>messageAdded</code> notification.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Console.enable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Console.disable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2202

Disables console domain, prevents further console messages from being reported to the client.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Console.disable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Console.clearMessages", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2207

Does nothing.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Console.clearMessages" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.enable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2209

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.enable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.disable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2211

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.disable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.setSamplingInterval", `params?`: [SetSamplingIntervalParameterType](../interfaces/_inspector_.profiler.setsamplingintervalparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2216

Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.setSamplingInterval" |
`params?` | [SetSamplingIntervalParameterType](../interfaces/_inspector_.profiler.setsamplingintervalparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.setSamplingInterval", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2217

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.setSamplingInterval" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.start", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2219

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.start" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.stop", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2221

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.stop" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.startPreciseCoverage", `params?`: [StartPreciseCoverageParameterType](../interfaces/_inspector_.profiler.startprecisecoverageparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2226

Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code coverage may be incomplete. Enabling prevents running optimized code and resets execution counters.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.startPreciseCoverage" |
`params?` | [StartPreciseCoverageParameterType](../interfaces/_inspector_.profiler.startprecisecoverageparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.startPreciseCoverage", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2227

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.startPreciseCoverage" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.stopPreciseCoverage", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2232

Disable precise code coverage. Disabling releases unnecessary execution count records and allows executing optimized code.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.stopPreciseCoverage" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.takePreciseCoverage", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2237

Collect coverage data for the current isolate, and resets execution counters. Precise code coverage needs to have started.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.takePreciseCoverage" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.getBestEffortCoverage", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2242

Collect coverage data for the current isolate. The coverage data may be incomplete due to garbage collection.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.getBestEffortCoverage" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.startTypeProfile", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2248

Enable type profile.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.startTypeProfile" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.stopTypeProfile", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2254

Disable type profile. Disabling releases type profile data collected so far.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.stopTypeProfile" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "Profiler.takeTypeProfile", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2260

Collect type profile.

**`experimental`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | "Profiler.takeTypeProfile" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.enable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2262

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.enable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.disable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2264

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.disable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.startTrackingHeapObjects", `params?`: [StartTrackingHeapObjectsParameterType](../interfaces/_inspector_.heapprofiler.starttrackingheapobjectsparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2266

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.startTrackingHeapObjects" |
`params?` | [StartTrackingHeapObjectsParameterType](../interfaces/_inspector_.heapprofiler.starttrackingheapobjectsparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.startTrackingHeapObjects", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2267

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.startTrackingHeapObjects" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.stopTrackingHeapObjects", `params?`: [StopTrackingHeapObjectsParameterType](../interfaces/_inspector_.heapprofiler.stoptrackingheapobjectsparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2269

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.stopTrackingHeapObjects" |
`params?` | [StopTrackingHeapObjectsParameterType](../interfaces/_inspector_.heapprofiler.stoptrackingheapobjectsparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.stopTrackingHeapObjects", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2270

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.stopTrackingHeapObjects" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.takeHeapSnapshot", `params?`: [TakeHeapSnapshotParameterType](../interfaces/_inspector_.heapprofiler.takeheapsnapshotparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2272

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.takeHeapSnapshot" |
`params?` | [TakeHeapSnapshotParameterType](../interfaces/_inspector_.heapprofiler.takeheapsnapshotparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.takeHeapSnapshot", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2273

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.takeHeapSnapshot" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.collectGarbage", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2275

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.collectGarbage" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.getObjectByHeapObjectId", `params?`: [GetObjectByHeapObjectIdParameterType](../interfaces/_inspector_.heapprofiler.getobjectbyheapobjectidparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2277

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.getObjectByHeapObjectId" |
`params?` | [GetObjectByHeapObjectIdParameterType](../interfaces/_inspector_.heapprofiler.getobjectbyheapobjectidparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.getObjectByHeapObjectId", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2282

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.getObjectByHeapObjectId" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.addInspectedHeapObject", `params?`: [AddInspectedHeapObjectParameterType](../interfaces/_inspector_.heapprofiler.addinspectedheapobjectparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2287

Enables console to refer to the node with given id via $x (see Command Line API for more details $x functions).

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.addInspectedHeapObject" |
`params?` | [AddInspectedHeapObjectParameterType](../interfaces/_inspector_.heapprofiler.addinspectedheapobjectparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.addInspectedHeapObject", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2288

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.addInspectedHeapObject" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.getHeapObjectId", `params?`: [GetHeapObjectIdParameterType](../interfaces/_inspector_.heapprofiler.getheapobjectidparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2290

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.getHeapObjectId" |
`params?` | [GetHeapObjectIdParameterType](../interfaces/_inspector_.heapprofiler.getheapobjectidparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.getHeapObjectId", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2291

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.getHeapObjectId" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.startSampling", `params?`: [StartSamplingParameterType](../interfaces/_inspector_.heapprofiler.startsamplingparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2293

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.startSampling" |
`params?` | [StartSamplingParameterType](../interfaces/_inspector_.heapprofiler.startsamplingparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.startSampling", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2294

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.startSampling" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.stopSampling", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2296

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.stopSampling" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "HeapProfiler.getSamplingProfile", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2298

**Parameters:**

Name | Type |
------ | ------ |
`method` | "HeapProfiler.getSamplingProfile" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeTracing.getCategories", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2303

Gets supported tracing categories.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeTracing.getCategories" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeTracing.start", `params?`: [StartParameterType](../interfaces/_inspector_.nodetracing.startparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2308

Start trace events collection.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeTracing.start" |
`params?` | [StartParameterType](../interfaces/_inspector_.nodetracing.startparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeTracing.start", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2309

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeTracing.start" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeTracing.stop", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2315

Stop trace events collection. Remaining collected events will be sent as a sequence of
dataCollected events followed by tracingComplete event.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeTracing.stop" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeWorker.sendMessageToWorker", `params?`: [SendMessageToWorkerParameterType](../interfaces/_inspector_.nodeworker.sendmessagetoworkerparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2320

Sends protocol message over session with given id.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeWorker.sendMessageToWorker" |
`params?` | [SendMessageToWorkerParameterType](../interfaces/_inspector_.nodeworker.sendmessagetoworkerparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeWorker.sendMessageToWorker", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2321

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeWorker.sendMessageToWorker" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeWorker.enable", `params?`: [EnableParameterType](../interfaces/_inspector_.nodeworker.enableparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2327

Instructs the inspector to attach to running workers. Will also attach to new workers
as they start

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeWorker.enable" |
`params?` | [EnableParameterType](../interfaces/_inspector_.nodeworker.enableparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeWorker.enable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2328

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeWorker.enable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeWorker.disable", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2333

Detaches from all running workers and disables attaching to new workers as they are started.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeWorker.disable" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeWorker.detach", `params?`: [DetachParameterType](../interfaces/_inspector_.nodeworker.detachparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2338

Detached from the worker with given sessionId.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeWorker.detach" |
`params?` | [DetachParameterType](../interfaces/_inspector_.nodeworker.detachparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeWorker.detach", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2339

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeWorker.detach" |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeRuntime.notifyWhenWaitingForDisconnect", `params?`: [NotifyWhenWaitingForDisconnectParameterType](../interfaces/_inspector_.noderuntime.notifywhenwaitingfordisconnectparametertype.md), `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2344

Enable the `NodeRuntime.waitingForDisconnect`.

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeRuntime.notifyWhenWaitingForDisconnect" |
`params?` | [NotifyWhenWaitingForDisconnectParameterType](../interfaces/_inspector_.noderuntime.notifywhenwaitingfordisconnectparametertype.md) |
`callback?` | undefined &#124; function |

**Returns:** *void*

▸ **post**(`method`: "NodeRuntime.notifyWhenWaitingForDisconnect", `callback?`: undefined | function): *void*

Defined in node_modules/@types/node/inspector.d.ts:2345

**Parameters:**

Name | Type |
------ | ------ |
`method` | "NodeRuntime.notifyWhenWaitingForDisconnect" |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2759

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "inspectorNotification", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2764

Emitted when any notification from the V8 Inspector is received.

**Parameters:**

▪ **event**: *"inspectorNotification"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object› |

**Returns:** *this*

▸ **prependListener**(`event`: "Runtime.executionContextCreated", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2769

Issued when new execution context is created.

**Parameters:**

▪ **event**: *"Runtime.executionContextCreated"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Runtime.executionContextDestroyed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2774

Issued when execution context is destroyed.

**Parameters:**

▪ **event**: *"Runtime.executionContextDestroyed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Runtime.executionContextsCleared", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2779

Issued when all executionContexts were cleared in browser

**Parameters:**

▪ **event**: *"Runtime.executionContextsCleared"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "Runtime.exceptionThrown", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2784

Issued when exception was thrown and unhandled.

**Parameters:**

▪ **event**: *"Runtime.exceptionThrown"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Runtime.exceptionRevoked", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2789

Issued when unhandled exception was revoked.

**Parameters:**

▪ **event**: *"Runtime.exceptionRevoked"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Runtime.consoleAPICalled", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2794

Issued when console API was called.

**Parameters:**

▪ **event**: *"Runtime.consoleAPICalled"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Runtime.inspectRequested", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2799

Issued when object should be inspected (for example, as a result of inspect() command line API call).

**Parameters:**

▪ **event**: *"Runtime.inspectRequested"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Debugger.scriptParsed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2804

Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger.

**Parameters:**

▪ **event**: *"Debugger.scriptParsed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Debugger.scriptFailedToParse", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2809

Fired when virtual machine fails to parse the script.

**Parameters:**

▪ **event**: *"Debugger.scriptFailedToParse"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Debugger.breakpointResolved", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2814

Fired when breakpoint is resolved to an actual script and location.

**Parameters:**

▪ **event**: *"Debugger.breakpointResolved"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Debugger.paused", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2819

Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.

**Parameters:**

▪ **event**: *"Debugger.paused"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Debugger.resumed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2824

Fired when the virtual machine resumed execution.

**Parameters:**

▪ **event**: *"Debugger.resumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "Console.messageAdded", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2829

Issued when new console message is added.

**Parameters:**

▪ **event**: *"Console.messageAdded"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Profiler.consoleProfileStarted", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2834

Sent when new profile recording is started using console.profile() call.

**Parameters:**

▪ **event**: *"Profiler.consoleProfileStarted"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "Profiler.consoleProfileFinished", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2836

**Parameters:**

▪ **event**: *"Profiler.consoleProfileFinished"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "HeapProfiler.addHeapSnapshotChunk", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2837

**Parameters:**

▪ **event**: *"HeapProfiler.addHeapSnapshotChunk"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "HeapProfiler.resetProfiles", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2838

**Parameters:**

▪ **event**: *"HeapProfiler.resetProfiles"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "HeapProfiler.reportHeapSnapshotProgress", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2839

**Parameters:**

▪ **event**: *"HeapProfiler.reportHeapSnapshotProgress"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "HeapProfiler.lastSeenObjectId", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2844

If heap objects tracking has been started then backend regularly sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

**Parameters:**

▪ **event**: *"HeapProfiler.lastSeenObjectId"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "HeapProfiler.heapStatsUpdate", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2849

If heap objects tracking has been started then backend may send update for one or more fragments

**Parameters:**

▪ **event**: *"HeapProfiler.heapStatsUpdate"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "NodeTracing.dataCollected", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2854

Contains an bucket of collected trace events.

**Parameters:**

▪ **event**: *"NodeTracing.dataCollected"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "NodeTracing.tracingComplete", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2860

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.

**Parameters:**

▪ **event**: *"NodeTracing.tracingComplete"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "NodeWorker.attachedToWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2865

Issued when attached to a worker.

**Parameters:**

▪ **event**: *"NodeWorker.attachedToWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "NodeWorker.detachedFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2870

Issued when detached from the worker.

**Parameters:**

▪ **event**: *"NodeWorker.detachedFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "NodeWorker.receivedMessageFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2876

Notifies about a new protocol message received from the session
(session ID is provided in attachedToWorker notification).

**Parameters:**

▪ **event**: *"NodeWorker.receivedMessageFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)› |

**Returns:** *this*

▸ **prependListener**(`event`: "NodeRuntime.waitingForDisconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependListener](../interfaces/isologenictxhandler.md#prependlistener)*

Defined in node_modules/@types/node/inspector.d.ts:2884

This event is fired instead of `Runtime.executionContextDestroyed` when
enabled.
It is fired when the Node process finished all code execution and is
waiting for all frontends to disconnect.

**Parameters:**

▪ **event**: *"NodeRuntime.waitingForDisconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2886

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "inspectorNotification", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2891

Emitted when any notification from the V8 Inspector is received.

**Parameters:**

▪ **event**: *"inspectorNotification"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹object› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Runtime.executionContextCreated", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2896

Issued when new execution context is created.

**Parameters:**

▪ **event**: *"Runtime.executionContextCreated"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Runtime.executionContextDestroyed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2901

Issued when execution context is destroyed.

**Parameters:**

▪ **event**: *"Runtime.executionContextDestroyed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Runtime.executionContextsCleared", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2906

Issued when all executionContexts were cleared in browser

**Parameters:**

▪ **event**: *"Runtime.executionContextsCleared"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Runtime.exceptionThrown", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2911

Issued when exception was thrown and unhandled.

**Parameters:**

▪ **event**: *"Runtime.exceptionThrown"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Runtime.exceptionRevoked", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2916

Issued when unhandled exception was revoked.

**Parameters:**

▪ **event**: *"Runtime.exceptionRevoked"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Runtime.consoleAPICalled", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2921

Issued when console API was called.

**Parameters:**

▪ **event**: *"Runtime.consoleAPICalled"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Runtime.inspectRequested", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2926

Issued when object should be inspected (for example, as a result of inspect() command line API call).

**Parameters:**

▪ **event**: *"Runtime.inspectRequested"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Debugger.scriptParsed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2931

Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger.

**Parameters:**

▪ **event**: *"Debugger.scriptParsed"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptParsedEventDataType](../interfaces/_inspector_.debugger.scriptparsedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Debugger.scriptFailedToParse", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2936

Fired when virtual machine fails to parse the script.

**Parameters:**

▪ **event**: *"Debugger.scriptFailedToParse"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ScriptFailedToParseEventDataType](../interfaces/_inspector_.debugger.scriptfailedtoparseeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Debugger.breakpointResolved", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2941

Fired when breakpoint is resolved to an actual script and location.

**Parameters:**

▪ **event**: *"Debugger.breakpointResolved"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[BreakpointResolvedEventDataType](../interfaces/_inspector_.debugger.breakpointresolvedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Debugger.paused", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2946

Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.

**Parameters:**

▪ **event**: *"Debugger.paused"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[PausedEventDataType](../interfaces/_inspector_.debugger.pausedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Debugger.resumed", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2951

Fired when the virtual machine resumed execution.

**Parameters:**

▪ **event**: *"Debugger.resumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Console.messageAdded", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2956

Issued when new console message is added.

**Parameters:**

▪ **event**: *"Console.messageAdded"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[MessageAddedEventDataType](../interfaces/_inspector_.console.messageaddedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Profiler.consoleProfileStarted", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2961

Sent when new profile recording is started using console.profile() call.

**Parameters:**

▪ **event**: *"Profiler.consoleProfileStarted"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileStartedEventDataType](../interfaces/_inspector_.profiler.consoleprofilestartedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "Profiler.consoleProfileFinished", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2963

**Parameters:**

▪ **event**: *"Profiler.consoleProfileFinished"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ConsoleProfileFinishedEventDataType](../interfaces/_inspector_.profiler.consoleprofilefinishedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "HeapProfiler.addHeapSnapshotChunk", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2964

**Parameters:**

▪ **event**: *"HeapProfiler.addHeapSnapshotChunk"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AddHeapSnapshotChunkEventDataType](../interfaces/_inspector_.heapprofiler.addheapsnapshotchunkeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "HeapProfiler.resetProfiles", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2965

**Parameters:**

▪ **event**: *"HeapProfiler.resetProfiles"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "HeapProfiler.reportHeapSnapshotProgress", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2966

**Parameters:**

▪ **event**: *"HeapProfiler.reportHeapSnapshotProgress"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReportHeapSnapshotProgressEventDataType](../interfaces/_inspector_.heapprofiler.reportheapsnapshotprogresseventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "HeapProfiler.lastSeenObjectId", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2971

If heap objects tracking has been started then backend regularly sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.

**Parameters:**

▪ **event**: *"HeapProfiler.lastSeenObjectId"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[LastSeenObjectIdEventDataType](../interfaces/_inspector_.heapprofiler.lastseenobjectideventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "HeapProfiler.heapStatsUpdate", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2976

If heap objects tracking has been started then backend may send update for one or more fragments

**Parameters:**

▪ **event**: *"HeapProfiler.heapStatsUpdate"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[HeapStatsUpdateEventDataType](../interfaces/_inspector_.heapprofiler.heapstatsupdateeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "NodeTracing.dataCollected", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2981

Contains an bucket of collected trace events.

**Parameters:**

▪ **event**: *"NodeTracing.dataCollected"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DataCollectedEventDataType](../interfaces/_inspector_.nodetracing.datacollectedeventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "NodeTracing.tracingComplete", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2987

Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.

**Parameters:**

▪ **event**: *"NodeTracing.tracingComplete"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "NodeWorker.attachedToWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2992

Issued when attached to a worker.

**Parameters:**

▪ **event**: *"NodeWorker.attachedToWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[AttachedToWorkerEventDataType](../interfaces/_inspector_.nodeworker.attachedtoworkereventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "NodeWorker.detachedFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:2997

Issued when detached from the worker.

**Parameters:**

▪ **event**: *"NodeWorker.detachedFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[DetachedFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.detachedfromworkereventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "NodeWorker.receivedMessageFromWorker", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:3003

Notifies about a new protocol message received from the session
(session ID is provided in attachedToWorker notification).

**Parameters:**

▪ **event**: *"NodeWorker.receivedMessageFromWorker"*

▪ **listener**: *function*

▸ (`message`: [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [InspectorNotification](../interfaces/_inspector_.inspectornotification.md)‹[ReceivedMessageFromWorkerEventDataType](../interfaces/_inspector_.nodeworker.receivedmessagefromworkereventdatatype.md)› |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "NodeRuntime.waitingForDisconnect", `listener`: function): *this*

*Overrides [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[prependOnceListener](../interfaces/isologenictxhandler.md#prependoncelistener)*

Defined in node_modules/@types/node/inspector.d.ts:3011

This event is fired instead of `Runtime.executionContextDestroyed` when
enabled.
It is fired when the Node process finished all code execution and is
waiting for all frontends to disconnect.

**Parameters:**

▪ **event**: *"NodeRuntime.waitingForDisconnect"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](../interfaces/function.md)[]*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[rawListeners](../interfaces/isologenictxhandler.md#rawlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[rawListeners](nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](../interfaces/function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeAllListeners](../interfaces/isologenictxhandler.md#removealllisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeAllListeners](nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[removeListener](../interfaces/isologenictxhandler.md#removelistener)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[removeListener](nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[setMaxListeners](../interfaces/isologenictxhandler.md#setmaxlisteners)*

*Overrides [EventEmitter](nodejs.eventemitter.md).[setMaxListeners](nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_events_.internal.eventemitter.md), `event`: string | symbol): *number*

*Inherited from [ISologenicTxHandler](../interfaces/isologenictxhandler.md).[listenerCount](../interfaces/isologenictxhandler.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_events_.internal.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
