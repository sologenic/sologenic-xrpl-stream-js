[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Profiler](../modules/_inspector_.profiler.md) › [FunctionCoverage](_inspector_.profiler.functioncoverage.md)

# Interface: FunctionCoverage

Coverage data for a JavaScript function.

## Hierarchy

* **FunctionCoverage**

## Index

### Properties

* [functionName](_inspector_.profiler.functioncoverage.md#functionname)
* [isBlockCoverage](_inspector_.profiler.functioncoverage.md#isblockcoverage)
* [ranges](_inspector_.profiler.functioncoverage.md#ranges)

## Properties

###  functionName

• **functionName**: *string*

Defined in node_modules/@types/node/inspector.d.ts:1532

JavaScript function name.

___

###  isBlockCoverage

• **isBlockCoverage**: *boolean*

Defined in node_modules/@types/node/inspector.d.ts:1540

Whether coverage data for this function has block granularity.

___

###  ranges

• **ranges**: *[CoverageRange](_inspector_.profiler.coveragerange.md)[]*

Defined in node_modules/@types/node/inspector.d.ts:1536

Source ranges inside the function with coverage data.
