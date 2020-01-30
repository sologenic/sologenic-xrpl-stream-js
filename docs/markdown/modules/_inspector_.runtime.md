[typescript](../README.md) › [Globals](../globals.md) › ["inspector"](_inspector_.md) › [Runtime](_inspector_.runtime.md)

# Module: Runtime

## Index

### Interfaces

* [AwaitPromiseParameterType](../interfaces/_inspector_.runtime.awaitpromiseparametertype.md)
* [AwaitPromiseReturnType](../interfaces/_inspector_.runtime.awaitpromisereturntype.md)
* [CallArgument](../interfaces/_inspector_.runtime.callargument.md)
* [CallFrame](../interfaces/_inspector_.runtime.callframe.md)
* [CallFunctionOnParameterType](../interfaces/_inspector_.runtime.callfunctiononparametertype.md)
* [CallFunctionOnReturnType](../interfaces/_inspector_.runtime.callfunctiononreturntype.md)
* [CompileScriptParameterType](../interfaces/_inspector_.runtime.compilescriptparametertype.md)
* [CompileScriptReturnType](../interfaces/_inspector_.runtime.compilescriptreturntype.md)
* [ConsoleAPICalledEventDataType](../interfaces/_inspector_.runtime.consoleapicalledeventdatatype.md)
* [CustomPreview](../interfaces/_inspector_.runtime.custompreview.md)
* [EntryPreview](../interfaces/_inspector_.runtime.entrypreview.md)
* [EvaluateParameterType](../interfaces/_inspector_.runtime.evaluateparametertype.md)
* [EvaluateReturnType](../interfaces/_inspector_.runtime.evaluatereturntype.md)
* [ExceptionDetails](../interfaces/_inspector_.runtime.exceptiondetails.md)
* [ExceptionRevokedEventDataType](../interfaces/_inspector_.runtime.exceptionrevokedeventdatatype.md)
* [ExceptionThrownEventDataType](../interfaces/_inspector_.runtime.exceptionthrowneventdatatype.md)
* [ExecutionContextCreatedEventDataType](../interfaces/_inspector_.runtime.executioncontextcreatedeventdatatype.md)
* [ExecutionContextDescription](../interfaces/_inspector_.runtime.executioncontextdescription.md)
* [ExecutionContextDestroyedEventDataType](../interfaces/_inspector_.runtime.executioncontextdestroyedeventdatatype.md)
* [GetPropertiesParameterType](../interfaces/_inspector_.runtime.getpropertiesparametertype.md)
* [GetPropertiesReturnType](../interfaces/_inspector_.runtime.getpropertiesreturntype.md)
* [GlobalLexicalScopeNamesParameterType](../interfaces/_inspector_.runtime.globallexicalscopenamesparametertype.md)
* [GlobalLexicalScopeNamesReturnType](../interfaces/_inspector_.runtime.globallexicalscopenamesreturntype.md)
* [InspectRequestedEventDataType](../interfaces/_inspector_.runtime.inspectrequestedeventdatatype.md)
* [InternalPropertyDescriptor](../interfaces/_inspector_.runtime.internalpropertydescriptor.md)
* [ObjectPreview](../interfaces/_inspector_.runtime.objectpreview.md)
* [PropertyDescriptor](../interfaces/_inspector_.runtime.propertydescriptor.md)
* [PropertyPreview](../interfaces/_inspector_.runtime.propertypreview.md)
* [QueryObjectsParameterType](../interfaces/_inspector_.runtime.queryobjectsparametertype.md)
* [QueryObjectsReturnType](../interfaces/_inspector_.runtime.queryobjectsreturntype.md)
* [ReleaseObjectGroupParameterType](../interfaces/_inspector_.runtime.releaseobjectgroupparametertype.md)
* [ReleaseObjectParameterType](../interfaces/_inspector_.runtime.releaseobjectparametertype.md)
* [RemoteObject](../interfaces/_inspector_.runtime.remoteobject.md)
* [RunScriptParameterType](../interfaces/_inspector_.runtime.runscriptparametertype.md)
* [RunScriptReturnType](../interfaces/_inspector_.runtime.runscriptreturntype.md)
* [SetCustomObjectFormatterEnabledParameterType](../interfaces/_inspector_.runtime.setcustomobjectformatterenabledparametertype.md)
* [StackTrace](../interfaces/_inspector_.runtime.stacktrace.md)
* [StackTraceId](../interfaces/_inspector_.runtime.stacktraceid.md)

### Type aliases

* [ExecutionContextId](_inspector_.runtime.md#executioncontextid)
* [RemoteObjectId](_inspector_.runtime.md#remoteobjectid)
* [ScriptId](_inspector_.runtime.md#scriptid)
* [Timestamp](_inspector_.runtime.md#timestamp)
* [UniqueDebuggerId](_inspector_.runtime.md#uniquedebuggerid)
* [UnserializableValue](_inspector_.runtime.md#unserializablevalue)

## Type aliases

###  ExecutionContextId

Ƭ **ExecutionContextId**: *number*

Defined in node_modules/@types/node/inspector.d.ts:266

Id of an execution context.

___

###  RemoteObjectId

Ƭ **RemoteObjectId**: *string*

Defined in node_modules/@types/node/inspector.d.ts:53

Unique object identifier.

___

###  ScriptId

Ƭ **ScriptId**: *string*

Defined in node_modules/@types/node/inspector.d.ts:48

Unique script identifier.

___

###  Timestamp

Ƭ **Timestamp**: *number*

Defined in node_modules/@types/node/inspector.d.ts:335

Number of milliseconds since epoch.

___

###  UniqueDebuggerId

Ƭ **UniqueDebuggerId**: *string*

Defined in node_modules/@types/node/inspector.d.ts:390

Unique identifier of current debugger.

**`experimental`** 

___

###  UnserializableValue

Ƭ **UnserializableValue**: *string*

Defined in node_modules/@types/node/inspector.d.ts:58

Primitive value which cannot be JSON-stringified.
