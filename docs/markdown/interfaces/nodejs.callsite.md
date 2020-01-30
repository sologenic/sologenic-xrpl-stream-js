[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [CallSite](nodejs.callsite.md)

# Interface: CallSite

## Hierarchy

* **CallSite**

## Index

### Methods

* [getColumnNumber](nodejs.callsite.md#getcolumnnumber)
* [getEvalOrigin](nodejs.callsite.md#getevalorigin)
* [getFileName](nodejs.callsite.md#getfilename)
* [getFunction](nodejs.callsite.md#getfunction)
* [getFunctionName](nodejs.callsite.md#getfunctionname)
* [getLineNumber](nodejs.callsite.md#getlinenumber)
* [getMethodName](nodejs.callsite.md#getmethodname)
* [getThis](nodejs.callsite.md#getthis)
* [getTypeName](nodejs.callsite.md#gettypename)
* [isConstructor](nodejs.callsite.md#isconstructor)
* [isEval](nodejs.callsite.md#iseval)
* [isNative](nodejs.callsite.md#isnative)
* [isToplevel](nodejs.callsite.md#istoplevel)

## Methods

###  getColumnNumber

▸ **getColumnNumber**(): *number | null*

Defined in node_modules/@types/node/globals.d.ts:570

Current column number [if this function was defined in a script]

**Returns:** *number | null*

___

###  getEvalOrigin

▸ **getEvalOrigin**(): *string | undefined*

Defined in node_modules/@types/node/globals.d.ts:576

A call site object representing the location where eval was called
[if this function was created using a call to eval]

**Returns:** *string | undefined*

___

###  getFileName

▸ **getFileName**(): *string | null*

Defined in node_modules/@types/node/globals.d.ts:560

Name of the script [if this function was defined in a script]

**Returns:** *string | null*

___

###  getFunction

▸ **getFunction**(): *[Function](function.md) | undefined*

Defined in node_modules/@types/node/globals.d.ts:542

Current function

**Returns:** *[Function](function.md) | undefined*

___

###  getFunctionName

▸ **getFunctionName**(): *string | null*

Defined in node_modules/@types/node/globals.d.ts:549

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

**Returns:** *string | null*

___

###  getLineNumber

▸ **getLineNumber**(): *number | null*

Defined in node_modules/@types/node/globals.d.ts:565

Current line number [if this function was defined in a script]

**Returns:** *number | null*

___

###  getMethodName

▸ **getMethodName**(): *string | null*

Defined in node_modules/@types/node/globals.d.ts:555

Name of the property [of "this" or one of its prototypes] that holds
the current function

**Returns:** *string | null*

___

###  getThis

▸ **getThis**(): *any*

Defined in node_modules/@types/node/globals.d.ts:529

Value of "this"

**Returns:** *any*

___

###  getTypeName

▸ **getTypeName**(): *string | null*

Defined in node_modules/@types/node/globals.d.ts:537

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

**Returns:** *string | null*

___

###  isConstructor

▸ **isConstructor**(): *boolean*

Defined in node_modules/@types/node/globals.d.ts:596

Is this a constructor call?

**Returns:** *boolean*

___

###  isEval

▸ **isEval**(): *boolean*

Defined in node_modules/@types/node/globals.d.ts:586

Does this call take place in code defined by a call to eval?

**Returns:** *boolean*

___

###  isNative

▸ **isNative**(): *boolean*

Defined in node_modules/@types/node/globals.d.ts:591

Is this call in native V8 code?

**Returns:** *boolean*

___

###  isToplevel

▸ **isToplevel**(): *boolean*

Defined in node_modules/@types/node/globals.d.ts:581

Is this a toplevel invocation, that is, is "this" the global object?

**Returns:** *boolean*
