[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](../modules/_inspector_.md) › [Debugger](../modules/_inspector_.debugger.md) › [GetPossibleBreakpointsParameterType](_inspector_.debugger.getpossiblebreakpointsparametertype.md)

# Interface: GetPossibleBreakpointsParameterType

## Hierarchy

* **GetPossibleBreakpointsParameterType**

## Index

### Properties

* [end](_inspector_.debugger.getpossiblebreakpointsparametertype.md#optional-end)
* [restrictToFunction](_inspector_.debugger.getpossiblebreakpointsparametertype.md#optional-restricttofunction)
* [start](_inspector_.debugger.getpossiblebreakpointsparametertype.md#start)

## Properties

### `Optional` end

• **end**? : *[Location](_inspector_.debugger.location.md)*

Defined in node_modules/@types/node/inspector.d.ts:948

End of range to search possible breakpoint locations in (excluding). When not specified, end of scripts is used as end of range.

___

### `Optional` restrictToFunction

• **restrictToFunction**? : *undefined | false | true*

Defined in node_modules/@types/node/inspector.d.ts:952

Only consider locations which are in the same (non-nested) function as start.

___

###  start

• **start**: *[Location](_inspector_.debugger.location.md)*

Defined in node_modules/@types/node/inspector.d.ts:944

Start of range to search possible breakpoint locations in.
