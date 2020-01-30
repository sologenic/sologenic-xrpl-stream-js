[typescript](../README.md) › [Globals](../globals.md) › ["perf_hooks"](_perf_hooks_.md)

# Module: "perf_hooks"

## Index

### Modules

* [constants](_perf_hooks_.constants.md)

### Classes

* [PerformanceObserver](../classes/_perf_hooks_.performanceobserver.md)

### Interfaces

* [EventLoopDelayMonitor](../interfaces/_perf_hooks_.eventloopdelaymonitor.md)
* [EventLoopMonitorOptions](../interfaces/_perf_hooks_.eventloopmonitoroptions.md)
* [Performance](../interfaces/_perf_hooks_.performance.md)
* [PerformanceEntry](../interfaces/_perf_hooks_.performanceentry.md)
* [PerformanceNodeTiming](../interfaces/_perf_hooks_.performancenodetiming.md)
* [PerformanceObserverEntryList](../interfaces/_perf_hooks_.performanceobserverentrylist.md)

### Type aliases

* [PerformanceObserverCallback](_perf_hooks_.md#performanceobservercallback)

### Variables

* [performance](_perf_hooks_.md#const-performance)

### Functions

* [monitorEventLoopDelay](_perf_hooks_.md#monitoreventloopdelay)

## Type aliases

###  PerformanceObserverCallback

Ƭ **PerformanceObserverCallback**: *function*

Defined in node_modules/@types/node/perf_hooks.d.ts:214

#### Type declaration:

▸ (`list`: [PerformanceObserverEntryList](../interfaces/_perf_hooks_.performanceobserverentrylist.md), `observer`: [PerformanceObserver](../classes/_perf_hooks_.performanceobserver.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`list` | [PerformanceObserverEntryList](../interfaces/_perf_hooks_.performanceobserverentrylist.md) |
`observer` | [PerformanceObserver](../classes/_perf_hooks_.performanceobserver.md) |

## Variables

### `Const` performance

• **performance**: *[Performance](../interfaces/_perf_hooks_.performance.md)*

Defined in node_modules/@types/node/perf_hooks.d.ts:240

## Functions

###  monitorEventLoopDelay

▸ **monitorEventLoopDelay**(`options?`: [EventLoopMonitorOptions](../interfaces/_perf_hooks_.eventloopmonitoroptions.md)): *[EventLoopDelayMonitor](../interfaces/_perf_hooks_.eventloopdelaymonitor.md)*

Defined in node_modules/@types/node/perf_hooks.d.ts:303

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [EventLoopMonitorOptions](../interfaces/_perf_hooks_.eventloopmonitoroptions.md) |

**Returns:** *[EventLoopDelayMonitor](../interfaces/_perf_hooks_.eventloopdelaymonitor.md)*
