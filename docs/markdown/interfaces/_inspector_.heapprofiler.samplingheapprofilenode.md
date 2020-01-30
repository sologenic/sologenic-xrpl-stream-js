[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [HeapProfiler](../modules/_inspector_.heapprofiler.md) › [SamplingHeapProfileNode](_inspector_.heapprofiler.samplingheapprofilenode.md)

# Interface: SamplingHeapProfileNode

Sampling Heap Profile node. Holds callsite information, allocation statistics and child nodes.

## Hierarchy

* **SamplingHeapProfileNode**

## Index

### Properties

* [callFrame](_inspector_.heapprofiler.samplingheapprofilenode.md#callframe)
* [children](_inspector_.heapprofiler.samplingheapprofilenode.md#children)
* [selfSize](_inspector_.heapprofiler.samplingheapprofilenode.md#selfsize)

## Properties

###  callFrame

• **callFrame**: *[CallFrame](_inspector_.runtime.callframe.md)*

Defined in node_modules/@types/node/inspector.d.ts:1691

Function location.

___

###  children

• **children**: *[SamplingHeapProfileNode](_inspector_.heapprofiler.samplingheapprofilenode.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:1699

Child nodes.

___

###  selfSize

• **selfSize**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1695

Allocations size in bytes for the node excluding children.
