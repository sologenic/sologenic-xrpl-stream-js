[typescript](../README.md) › [Globals](../globals.md) › ["perf_hooks"](../modules/_perf_hooks_.md) › [PerformanceEntry](_perf_hooks_.performanceentry.md)

# Interface: PerformanceEntry

## Hierarchy

* **PerformanceEntry**

  ↳ [PerformanceNodeTiming](_perf_hooks_.performancenodetiming.md)

## Index

### Properties

* [duration](_perf_hooks_.performanceentry.md#duration)
* [entryType](_perf_hooks_.performanceentry.md#entrytype)
* [kind](_perf_hooks_.performanceentry.md#optional-kind)
* [name](_perf_hooks_.performanceentry.md#name)
* [startTime](_perf_hooks_.performanceentry.md#starttime)

## Properties

###  duration

• **duration**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:9

The total number of milliseconds elapsed for this entry.
This value will not be meaningful for all Performance Entry types.

___

###  entryType

• **entryType**: *string*

Defined in node_modules/@types/node/perf_hooks.d.ts:25

The type of the performance entry.
Currently it may be one of: 'node', 'mark', 'measure', 'gc', or 'function'.

___

### `Optional` kind

• **kind**? : *undefined | number*

Defined in node_modules/@types/node/perf_hooks.d.ts:32

When performanceEntry.entryType is equal to 'gc', the performance.kind property identifies
the type of garbage collection operation that occurred.
The value may be one of perf_hooks.constants.

___

###  name

• **name**: *string*

Defined in node_modules/@types/node/perf_hooks.d.ts:14

The name of the performance entry.

___

###  startTime

• **startTime**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:19

The high resolution millisecond timestamp marking the starting time of the Performance Entry.
