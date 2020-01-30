[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](nodejs.md)

# Module: NodeJS

## Index

### Classes

* [EventEmitter](../classes/nodejs.eventemitter.md)
* [Immediate](../classes/nodejs.immediate.md)
* [Module](../classes/nodejs.module.md)
* [Timeout](../classes/nodejs.timeout.md)

### Interfaces

* [CallSite](../interfaces/nodejs.callsite.md)
* [ConsoleConstructor](../interfaces/nodejs.consoleconstructor.md)
* [ConsoleConstructorOptions](../interfaces/nodejs.consoleconstructoroptions.md)
* [CpuUsage](../interfaces/nodejs.cpuusage.md)
* [Domain](../interfaces/nodejs.domain.md)
* [ErrnoException](../interfaces/nodejs.errnoexception.md)
* [Global](../interfaces/nodejs.global.md)
* [HRTime](../interfaces/nodejs.hrtime.md)
* [InspectOptions](../interfaces/nodejs.inspectoptions.md)
* [MemoryUsage](../interfaces/nodejs.memoryusage.md)
* [Process](../interfaces/nodejs.process.md)
* [ProcessEnv](../interfaces/nodejs.processenv.md)
* [ProcessRelease](../interfaces/nodejs.processrelease.md)
* [ProcessReport](../interfaces/nodejs.processreport.md)
* [ProcessVersions](../interfaces/nodejs.processversions.md)
* [ReadWriteStream](../interfaces/nodejs.readwritestream.md)
* [ReadableStream](../interfaces/nodejs.readablestream.md)
* [ResourceUsage](../interfaces/nodejs.resourceusage.md)
* [Socket](../interfaces/nodejs.socket.md)
* [Timer](../interfaces/nodejs.timer.md)
* [WritableStream](../interfaces/nodejs.writablestream.md)

### Type aliases

* [ArrayBufferView](nodejs.md#arraybufferview)
* [BeforeExitListener](nodejs.md#beforeexitlistener)
* [DisconnectListener](nodejs.md#disconnectlistener)
* [ExitListener](nodejs.md#exitlistener)
* [MessageListener](nodejs.md#messagelistener)
* [MultipleResolveListener](nodejs.md#multipleresolvelistener)
* [MultipleResolveType](nodejs.md#multipleresolvetype)
* [NewListenerListener](nodejs.md#newlistenerlistener)
* [Platform](nodejs.md#platform)
* [RejectionHandledListener](nodejs.md#rejectionhandledlistener)
* [RemoveListenerListener](nodejs.md#removelistenerlistener)
* [Signals](nodejs.md#signals)
* [SignalsListener](nodejs.md#signalslistener)
* [TypedArray](nodejs.md#typedarray)
* [UncaughtExceptionListener](nodejs.md#uncaughtexceptionlistener)
* [UnhandledRejectionListener](nodejs.md#unhandledrejectionlistener)
* [WarningListener](nodejs.md#warninglistener)

## Type aliases

###  ArrayBufferView

Ƭ **ArrayBufferView**: *[TypedArray](nodejs.md#typedarray) | [DataView](../interfaces/dataview.md)*

Defined in node_modules/@types/node/globals.d.ts:1156

___

###  BeforeExitListener

Ƭ **BeforeExitListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:715

#### Type declaration:

▸ (`code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

___

###  DisconnectListener

Ƭ **DisconnectListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:716

#### Type declaration:

▸ (): *void*

___

###  ExitListener

Ƭ **ExitListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:717

#### Type declaration:

▸ (`code`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

___

###  MessageListener

Ƭ **MessageListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:722

#### Type declaration:

▸ (`message`: any, `sendHandle`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle` | any |

___

###  MultipleResolveListener

Ƭ **MultipleResolveListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:726

#### Type declaration:

▸ (`type`: [MultipleResolveType](nodejs.md#multipleresolvetype), `promise`: [Promise](../interfaces/promise.md)‹any›, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [MultipleResolveType](nodejs.md#multipleresolvetype) |
`promise` | [Promise](../interfaces/promise.md)‹any› |
`value` | any |

___

###  MultipleResolveType

Ƭ **MultipleResolveType**: *"resolve" | "reject"*

Defined in node_modules/@types/node/globals.d.ts:713

___

###  NewListenerListener

Ƭ **NewListenerListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:724

#### Type declaration:

▸ (`type`: string | symbol, `listener`: function): *void*

**Parameters:**

▪ **type**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  Platform

Ƭ **Platform**: *"aix" | "android" | "darwin" | "freebsd" | "linux" | "openbsd" | "sunos" | "win32" | "cygwin" | "netbsd"*

Defined in node_modules/@types/node/globals.d.ts:696

___

###  RejectionHandledListener

Ƭ **RejectionHandledListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:718

#### Type declaration:

▸ (`promise`: [Promise](../interfaces/promise.md)‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`promise` | [Promise](../interfaces/promise.md)‹any› |

___

###  RemoveListenerListener

Ƭ **RemoveListenerListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:725

#### Type declaration:

▸ (`type`: string | symbol, `listener`: function): *void*

**Parameters:**

▪ **type**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  Signals

Ƭ **Signals**: *"SIGABRT" | "SIGALRM" | "SIGBUS" | "SIGCHLD" | "SIGCONT" | "SIGFPE" | "SIGHUP" | "SIGILL" | "SIGINT" | "SIGIO" | "SIGIOT" | "SIGKILL" | "SIGPIPE" | "SIGPOLL" | "SIGPROF" | "SIGPWR" | "SIGQUIT" | "SIGSEGV" | "SIGSTKFLT" | "SIGSTOP" | "SIGSYS" | "SIGTERM" | "SIGTRAP" | "SIGTSTP" | "SIGTTIN" | "SIGTTOU" | "SIGUNUSED" | "SIGURG" | "SIGUSR1" | "SIGUSR2" | "SIGVTALRM" | "SIGWINCH" | "SIGXCPU" | "SIGXFSZ" | "SIGBREAK" | "SIGLOST" | "SIGINFO"*

Defined in node_modules/@types/node/globals.d.ts:707

___

###  SignalsListener

Ƭ **SignalsListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:723

#### Type declaration:

▸ (`signal`: [Signals](nodejs.md#signals)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signal` | [Signals](nodejs.md#signals) |

___

###  TypedArray

Ƭ **TypedArray**: *[Uint8Array](../interfaces/uint8array.md) | [Uint8ClampedArray](../interfaces/uint8clampedarray.md) | [Uint16Array](../interfaces/uint16array.md) | [Uint32Array](../interfaces/uint32array.md) | [Int8Array](../interfaces/int8array.md) | [Int16Array](../interfaces/int16array.md) | [Int32Array](../interfaces/int32array.md) | [Float32Array](../interfaces/float32array.md) | [Float64Array](../interfaces/float64array.md)*

Defined in node_modules/@types/node/globals.d.ts:1155

___

###  UncaughtExceptionListener

Ƭ **UncaughtExceptionListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:719

#### Type declaration:

▸ (`error`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/error.md) |

___

###  UnhandledRejectionListener

Ƭ **UnhandledRejectionListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:720

#### Type declaration:

▸ (`reason`: object | null | undefined, `promise`: [Promise](../interfaces/promise.md)‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | object &#124; null &#124; undefined |
`promise` | [Promise](../interfaces/promise.md)‹any› |

___

###  WarningListener

Ƭ **WarningListener**: *function*

Defined in node_modules/@types/node/globals.d.ts:721

#### Type declaration:

▸ (`warning`: [Error](../interfaces/error.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`warning` | [Error](../interfaces/error.md) |
