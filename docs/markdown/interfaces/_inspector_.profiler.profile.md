[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Profiler](../modules/_inspector_.profiler.md) › [Profile](_inspector_.profiler.profile.md)

# Interface: Profile

Profile.

## Hierarchy

* **Profile**

## Index

### Properties

* [endTime](_inspector_.profiler.profile.md#endtime)
* [nodes](_inspector_.profiler.profile.md#nodes)
* [samples](_inspector_.profiler.profile.md#optional-samples)
* [startTime](_inspector_.profiler.profile.md#starttime)
* [timeDeltas](_inspector_.profiler.profile.md#optional-timedeltas)

## Properties

###  endTime

• **endTime**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1482

Profiling end timestamp in microseconds.

___

###  nodes

• **nodes**: *[ProfileNode](_inspector_.profiler.profilenode.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:1474

The list of profile nodes. First item is the root node.

___

### `Optional` samples

• **samples**? : *number[]*

Defined in node_modules/@types/node/inspector.d.ts:1486

Ids of samples top nodes.

___

###  startTime

• **startTime**: *number*

Defined in node_modules/@types/node/inspector.d.ts:1478

Profiling start timestamp in microseconds.

___

### `Optional` timeDeltas

• **timeDeltas**? : *number[]*

Defined in node_modules/@types/node/inspector.d.ts:1490

Time intervals between adjacent samples in microseconds. The first delta is relative to the profile startTime.
