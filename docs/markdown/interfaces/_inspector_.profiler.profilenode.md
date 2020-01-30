[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Profiler](../modules/_inspector_.profiler.md) › [ProfileNode](_inspector_.profiler.profilenode.md)

# Interface: ProfileNode

Profile node. Holds callsite information, execution statistics and child nodes.

## Hierarchy

* **ProfileNode**

## Index

### Properties

* [callFrame](_inspector_.profiler.profilenode.md#callframe)
* [children](_inspector_.profiler.profilenode.md#optional-children)
* [deoptReason](_inspector_.profiler.profilenode.md#optional-deoptreason)
* [hitCount](_inspector_.profiler.profilenode.md#optional-hitcount)
* [id](_inspector_.profiler.profilenode.md#id)
* [positionTicks](_inspector_.profiler.profilenode.md#optional-positionticks)

## Properties

###  callFrame

• **callFrame**: *[CallFrame](_inspector_.runtime.callframe.md)*

Defined in node_modules/@types/node/inspector.d.ts:1448

Function location.

___

### `Optional` children

• **children**? : *number[]*

Defined in node_modules/@types/node/inspector.d.ts:1456

Child node ids.

___

### `Optional` deoptReason

• **deoptReason**? : *undefined | string*

Defined in node_modules/@types/node/inspector.d.ts:1460

The reason of being not optimized. The function may be deoptimized or marked as don't optimize.

___

### `Optional` hitCount

• **hitCount**? : *undefined | number*

Defined in node_modules/@types/node/inspector.d.ts:1452

Number of samples where this node was on top of the call stack.

___

###  id

• **id**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1444

Unique id of the node.

___

### `Optional` positionTicks

• **positionTicks**? : *[PositionTickInfo](_inspector_.profiler.positiontickinfo.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:1464

An array of source position ticks.
