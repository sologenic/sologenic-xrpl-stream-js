[typescript](../README.md) › [Globals](../globals.md) › ["perf_hooks"](../modules/_perf_hooks_.md) › [EventLoopDelayMonitor](_perf_hooks_.eventloopdelaymonitor.md)

# Interface: EventLoopDelayMonitor

## Hierarchy

* **EventLoopDelayMonitor**

## Index

### Properties

* [exceeds](_perf_hooks_.eventloopdelaymonitor.md#exceeds)
* [max](_perf_hooks_.eventloopdelaymonitor.md#max)
* [mean](_perf_hooks_.eventloopdelaymonitor.md#mean)
* [min](_perf_hooks_.eventloopdelaymonitor.md#min)
* [percentiles](_perf_hooks_.eventloopdelaymonitor.md#percentiles)
* [stddev](_perf_hooks_.eventloopdelaymonitor.md#stddev)

### Methods

* [disable](_perf_hooks_.eventloopdelaymonitor.md#disable)
* [enable](_perf_hooks_.eventloopdelaymonitor.md#enable)
* [percentile](_perf_hooks_.eventloopdelaymonitor.md#percentile)
* [reset](_perf_hooks_.eventloopdelaymonitor.md#reset)

## Properties

###  exceeds

• **exceeds**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:280

The number of times the event loop delay exceeded the maximum 1 hour eventloop delay threshold.

___

###  max

• **max**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:290

The maximum recorded event loop delay.

___

###  mean

• **mean**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:295

The mean of the recorded event loop delays.

___

###  min

• **min**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:285

The minimum recorded event loop delay.

___

###  percentiles

• **percentiles**: *[Map](map.md)‹number, number›*

Defined in node_modules/@types/node/perf_hooks.d.ts:275

A `Map` object detailing the accumulated percentile distribution.

___

###  stddev

• **stddev**: *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:300

The standard deviation of the recorded event loop delays.

## Methods

###  disable

▸ **disable**(): *boolean*

Defined in node_modules/@types/node/perf_hooks.d.ts:259

Disables the event loop delay sample timer. Returns `true` if the timer was stopped, `false` if it was already stopped.

**Returns:** *boolean*

___

###  enable

▸ **enable**(): *boolean*

Defined in node_modules/@types/node/perf_hooks.d.ts:255

Enables the event loop delay sample timer. Returns `true` if the timer was started, `false` if it was already started.

**Returns:** *boolean*

___

###  percentile

▸ **percentile**(`percentile`: number): *number*

Defined in node_modules/@types/node/perf_hooks.d.ts:270

Returns the value at the given percentile.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`percentile` | number | A percentile value between 1 and 100.  |

**Returns:** *number*

___

###  reset

▸ **reset**(): *void*

Defined in node_modules/@types/node/perf_hooks.d.ts:264

Resets the collected histogram data.

**Returns:** *void*
