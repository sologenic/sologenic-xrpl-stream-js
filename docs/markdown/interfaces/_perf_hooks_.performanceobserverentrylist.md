[typescript](../README.md) › [Globals](../globals.md) › ["perf_hooks"](../modules/_perf_hooks_.md) › [PerformanceObserverEntryList](_perf_hooks_.performanceobserverentrylist.md)

# Interface: PerformanceObserverEntryList

## Hierarchy

* **PerformanceObserverEntryList**

## Index

### Methods

* [getEntries](_perf_hooks_.performanceobserverentrylist.md#getentries)
* [getEntriesByName](_perf_hooks_.performanceobserverentrylist.md#getentriesbyname)
* [getEntriesByType](_perf_hooks_.performanceobserverentrylist.md#getentriesbytype)

## Methods

###  getEntries

▸ **getEntries**(): *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

Defined in node_modules/@types/node/perf_hooks.d.ts:199

**Returns:** *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.

___

###  getEntriesByName

▸ **getEntriesByName**(`name`: string, `type?`: undefined | string): *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

Defined in node_modules/@types/node/perf_hooks.d.ts:205

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type?` | undefined &#124; string |

**Returns:** *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.

___

###  getEntriesByType

▸ **getEntriesByType**(`type`: string): *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

Defined in node_modules/@types/node/perf_hooks.d.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[PerformanceEntry](_perf_hooks_.performanceentry.md)[]*

Returns a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
whose performanceEntry.entryType is equal to type.
