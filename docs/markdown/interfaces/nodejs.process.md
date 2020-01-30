[typescript](../README.md) › [Globals](../globals.md) › [NodeJS](../modules/nodejs.md) › [Process](nodejs.process.md)

# Interface: Process

## Hierarchy

* [EventEmitter](../classes/nodejs.eventemitter.md)

  ↳ **Process**

## Index

### Properties

* [allowedNodeEnvironmentFlags](nodejs.process.md#allowednodeenvironmentflags)
* [arch](nodejs.process.md#arch)
* [argv](nodejs.process.md#argv)
* [argv0](nodejs.process.md#argv0)
* [config](nodejs.process.md#config)
* [connected](nodejs.process.md#connected)
* [debugPort](nodejs.process.md#debugport)
* [domain](nodejs.process.md#domain)
* [env](nodejs.process.md#env)
* [execArgv](nodejs.process.md#execargv)
* [execPath](nodejs.process.md#execpath)
* [exitCode](nodejs.process.md#optional-exitcode)
* [features](nodejs.process.md#features)
* [hrtime](nodejs.process.md#hrtime)
* [mainModule](nodejs.process.md#optional-mainmodule)
* [pid](nodejs.process.md#pid)
* [platform](nodejs.process.md#platform)
* [ppid](nodejs.process.md#ppid)
* [release](nodejs.process.md#release)
* [report](nodejs.process.md#optional-report)
* [stderr](nodejs.process.md#stderr)
* [stdin](nodejs.process.md#stdin)
* [stdout](nodejs.process.md#stdout)
* [title](nodejs.process.md#title)
* [version](nodejs.process.md#version)
* [versions](nodejs.process.md#versions)

### Methods

* [abort](nodejs.process.md#abort)
* [addListener](nodejs.process.md#addlistener)
* [chdir](nodejs.process.md#chdir)
* [cpuUsage](nodejs.process.md#cpuusage)
* [cwd](nodejs.process.md#cwd)
* [disconnect](nodejs.process.md#disconnect)
* [emit](nodejs.process.md#emit)
* [emitWarning](nodejs.process.md#emitwarning)
* [eventNames](nodejs.process.md#eventnames)
* [exit](nodejs.process.md#exit)
* [getMaxListeners](nodejs.process.md#getmaxlisteners)
* [getegid](nodejs.process.md#getegid)
* [geteuid](nodejs.process.md#geteuid)
* [getgid](nodejs.process.md#getgid)
* [getgroups](nodejs.process.md#getgroups)
* [getuid](nodejs.process.md#getuid)
* [hasUncaughtExceptionCaptureCallback](nodejs.process.md#hasuncaughtexceptioncapturecallback)
* [kill](nodejs.process.md#kill)
* [listenerCount](nodejs.process.md#listenercount)
* [listeners](nodejs.process.md#listeners)
* [memoryUsage](nodejs.process.md#memoryusage)
* [nextTick](nodejs.process.md#nexttick)
* [off](nodejs.process.md#off)
* [on](nodejs.process.md#on)
* [once](nodejs.process.md#once)
* [openStdin](nodejs.process.md#openstdin)
* [prependListener](nodejs.process.md#prependlistener)
* [prependOnceListener](nodejs.process.md#prependoncelistener)
* [rawListeners](nodejs.process.md#rawlisteners)
* [removeAllListeners](nodejs.process.md#removealllisteners)
* [removeListener](nodejs.process.md#removelistener)
* [resourceUsage](nodejs.process.md#resourceusage)
* [send](nodejs.process.md#optional-send)
* [setMaxListeners](nodejs.process.md#setmaxlisteners)
* [setUncaughtExceptionCaptureCallback](nodejs.process.md#setuncaughtexceptioncapturecallback)
* [setegid](nodejs.process.md#setegid)
* [seteuid](nodejs.process.md#seteuid)
* [setgid](nodejs.process.md#setgid)
* [setgroups](nodejs.process.md#setgroups)
* [setuid](nodejs.process.md#setuid)
* [umask](nodejs.process.md#umask)
* [uptime](nodejs.process.md#uptime)

## Properties

###  allowedNodeEnvironmentFlags

• **allowedNodeEnvironmentFlags**: *[ReadonlySet](readonlyset.md)‹string›*

Defined in node_modules/@types/node/globals.d.ts:926

The `process.allowedNodeEnvironmentFlags` property is a special,
read-only `Set` of flags allowable within the [`NODE_OPTIONS`][]
environment variable.

___

###  arch

• **arch**: *string*

Defined in node_modules/@types/node/globals.d.ts:891

___

###  argv

• **argv**: *string[]*

Defined in node_modules/@types/node/globals.d.ts:835

___

###  argv0

• **argv0**: *string*

Defined in node_modules/@types/node/globals.d.ts:836

___

###  config

• **config**: *object*

Defined in node_modules/@types/node/globals.d.ts:861

#### Type declaration:

* **target_defaults**(): *object*

  * **cflags**: *any[]*

  * **default_configuration**: *string*

  * **defines**: *string[]*

  * **include_dirs**: *string[]*

  * **libraries**: *string[]*

* **variables**(): *object*

  * **clang**: *number*

  * **host_arch**: *string*

  * **node_install_npm**: *boolean*

  * **node_install_waf**: *boolean*

  * **node_prefix**: *string*

  * **node_shared_openssl**: *boolean*

  * **node_shared_v8**: *boolean*

  * **node_shared_zlib**: *boolean*

  * **node_use_dtrace**: *boolean*

  * **node_use_etw**: *boolean*

  * **node_use_openssl**: *boolean*

  * **target_arch**: *string*

  * **v8_no_strict_aliasing**: *number*

  * **v8_use_snapshot**: *boolean*

  * **visibility**: *string*

___

###  connected

• **connected**: *boolean*

Defined in node_modules/@types/node/globals.d.ts:919

___

###  debugPort

• **debugPort**: *number*

Defined in node_modules/@types/node/globals.d.ts:842

___

###  domain

• **domain**: *[Domain](nodejs.domain.md)*

Defined in node_modules/@types/node/globals.d.ts:914

___

###  env

• **env**: *[ProcessEnv](nodejs.processenv.md)*

Defined in node_modules/@types/node/globals.d.ts:844

___

###  execArgv

• **execArgv**: *string[]*

Defined in node_modules/@types/node/globals.d.ts:837

___

###  execPath

• **execPath**: *string*

Defined in node_modules/@types/node/globals.d.ts:838

___

### `Optional` exitCode

• **exitCode**? : *undefined | number*

Defined in node_modules/@types/node/globals.d.ts:846

___

###  features

• **features**: *object*

Defined in node_modules/@types/node/globals.d.ts:898

#### Type declaration:

* **debug**: *boolean*

* **inspector**: *boolean*

* **ipv6**: *boolean*

* **tls**: *boolean*

* **tls_alpn**: *boolean*

* **tls_ocsp**: *boolean*

* **tls_sni**: *boolean*

* **uv**: *boolean*

___

###  hrtime

• **hrtime**: *[HRTime](nodejs.hrtime.md)*

Defined in node_modules/@types/node/globals.d.ts:913

___

### `Optional` mainModule

• **mainModule**? : *[NodeModule](nodemodule.md)*

Defined in node_modules/@types/node/globals.d.ts:893

___

###  pid

• **pid**: *number*

Defined in node_modules/@types/node/globals.d.ts:888

___

###  platform

• **platform**: *[Platform](../modules/nodejs.md#platform)*

Defined in node_modules/@types/node/globals.d.ts:892

___

###  ppid

• **ppid**: *number*

Defined in node_modules/@types/node/globals.d.ts:889

___

###  release

• **release**: *[ProcessRelease](nodejs.processrelease.md)*

Defined in node_modules/@types/node/globals.d.ts:897

___

### `Optional` report

• **report**? : *[ProcessReport](nodejs.processreport.md)*

Defined in node_modules/@types/node/globals.d.ts:931

Only available with `--experimental-report`

___

###  stderr

• **stderr**: *[WriteStream](_process_.__global.nodejs.writestream.md)*

Defined in node_modules/@types/node/globals.d.ts:832

Can also be a tty.WriteStream, not typed due to limitation.s

___

###  stdin

• **stdin**: *[ReadStream](_process_.__global.nodejs.readstream.md)*

Defined in node_modules/@types/node/globals.d.ts:833

___

###  stdout

• **stdout**: *[WriteStream](_process_.__global.nodejs.writestream.md)*

Defined in node_modules/@types/node/globals.d.ts:828

Can also be a tty.WriteStream, not typed due to limitation.s

___

###  title

• **title**: *string*

Defined in node_modules/@types/node/globals.d.ts:890

___

###  version

• **version**: *string*

Defined in node_modules/@types/node/globals.d.ts:859

___

###  versions

• **versions**: *[ProcessVersions](nodejs.processversions.md)*

Defined in node_modules/@types/node/globals.d.ts:860

## Methods

###  abort

▸ **abort**(): *void*

Defined in node_modules/@types/node/globals.d.ts:839

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "beforeExit", `listener`: [BeforeExitListener](../modules/nodejs.md#beforeexitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:949

EventEmitter
  1. beforeExit
  2. disconnect
  3. exit
  4. message
  5. rejectionHandled
  6. uncaughtException
  7. unhandledRejection
  8. warning
  9. message
 10. <All OS Signals>
 11. newListener/removeListener inherited from EventEmitter

**Parameters:**

Name | Type |
------ | ------ |
`event` | "beforeExit" |
`listener` | [BeforeExitListener](../modules/nodejs.md#beforeexitlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "disconnect", `listener`: [DisconnectListener](../modules/nodejs.md#disconnectlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:950

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |
`listener` | [DisconnectListener](../modules/nodejs.md#disconnectlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "exit", `listener`: [ExitListener](../modules/nodejs.md#exitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:951

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`listener` | [ExitListener](../modules/nodejs.md#exitlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "rejectionHandled", `listener`: [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:952

**Parameters:**

Name | Type |
------ | ------ |
`event` | "rejectionHandled" |
`listener` | [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "uncaughtException", `listener`: [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:953

**Parameters:**

Name | Type |
------ | ------ |
`event` | "uncaughtException" |
`listener` | [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "unhandledRejection", `listener`: [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:954

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unhandledRejection" |
`listener` | [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "warning", `listener`: [WarningListener](../modules/nodejs.md#warninglistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:955

**Parameters:**

Name | Type |
------ | ------ |
`event` | "warning" |
`listener` | [WarningListener](../modules/nodejs.md#warninglistener) |

**Returns:** *this*

▸ **addListener**(`event`: "message", `listener`: [MessageListener](../modules/nodejs.md#messagelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:956

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`listener` | [MessageListener](../modules/nodejs.md#messagelistener) |

**Returns:** *this*

▸ **addListener**(`event`: [Signals](../modules/nodejs.md#signals), `listener`: [SignalsListener](../modules/nodejs.md#signalslistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:957

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Signals](../modules/nodejs.md#signals) |
`listener` | [SignalsListener](../modules/nodejs.md#signalslistener) |

**Returns:** *this*

▸ **addListener**(`event`: "newListener", `listener`: [NewListenerListener](../modules/nodejs.md#newlistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:958

**Parameters:**

Name | Type |
------ | ------ |
`event` | "newListener" |
`listener` | [NewListenerListener](../modules/nodejs.md#newlistenerlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "removeListener", `listener`: [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:959

**Parameters:**

Name | Type |
------ | ------ |
`event` | "removeListener" |
`listener` | [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener) |

**Returns:** *this*

▸ **addListener**(`event`: "multipleResolves", `listener`: [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[addListener](../classes/nodejs.eventemitter.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:960

**Parameters:**

Name | Type |
------ | ------ |
`event` | "multipleResolves" |
`listener` | [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener) |

**Returns:** *this*

___

###  chdir

▸ **chdir**(`directory`: string): *void*

Defined in node_modules/@types/node/globals.d.ts:840

**Parameters:**

Name | Type |
------ | ------ |
`directory` | string |

**Returns:** *void*

___

###  cpuUsage

▸ **cpuUsage**(`previousValue?`: [CpuUsage](nodejs.cpuusage.md)): *[CpuUsage](nodejs.cpuusage.md)*

Defined in node_modules/@types/node/globals.d.ts:895

**Parameters:**

Name | Type |
------ | ------ |
`previousValue?` | [CpuUsage](nodejs.cpuusage.md) |

**Returns:** *[CpuUsage](nodejs.cpuusage.md)*

___

###  cwd

▸ **cwd**(): *string*

Defined in node_modules/@types/node/globals.d.ts:841

**Returns:** *string*

___

###  disconnect

▸ **disconnect**(): *void*

Defined in node_modules/@types/node/globals.d.ts:918

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "beforeExit", `code`: number): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:962

**Parameters:**

Name | Type |
------ | ------ |
`event` | "beforeExit" |
`code` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "disconnect"): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:963

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |

**Returns:** *boolean*

▸ **emit**(`event`: "exit", `code`: number): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:964

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`code` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "rejectionHandled", `promise`: [Promise](promise.md)‹any›): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:965

**Parameters:**

Name | Type |
------ | ------ |
`event` | "rejectionHandled" |
`promise` | [Promise](promise.md)‹any› |

**Returns:** *boolean*

▸ **emit**(`event`: "uncaughtException", `error`: [Error](error.md)): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:966

**Parameters:**

Name | Type |
------ | ------ |
`event` | "uncaughtException" |
`error` | [Error](error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "unhandledRejection", `reason`: any, `promise`: [Promise](promise.md)‹any›): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:967

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unhandledRejection" |
`reason` | any |
`promise` | [Promise](promise.md)‹any› |

**Returns:** *boolean*

▸ **emit**(`event`: "warning", `warning`: [Error](error.md)): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:968

**Parameters:**

Name | Type |
------ | ------ |
`event` | "warning" |
`warning` | [Error](error.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `message`: any, `sendHandle`: any): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:969

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`message` | any |
`sendHandle` | any |

**Returns:** *this*

▸ **emit**(`event`: [Signals](../modules/nodejs.md#signals), `signal`: [Signals](../modules/nodejs.md#signals)): *boolean*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:970

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Signals](../modules/nodejs.md#signals) |
`signal` | [Signals](../modules/nodejs.md#signals) |

**Returns:** *boolean*

▸ **emit**(`event`: "newListener", `eventName`: string | symbol, `listener`: function): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:971

**Parameters:**

▪ **event**: *"newListener"*

▪ **eventName**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **emit**(`event`: "removeListener", `eventName`: string, `listener`: function): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:972

**Parameters:**

▪ **event**: *"removeListener"*

▪ **eventName**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **emit**(`event`: "multipleResolves", `listener`: [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[emit](../classes/nodejs.eventemitter.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:973

**Parameters:**

Name | Type |
------ | ------ |
`event` | "multipleResolves" |
`listener` | [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener) |

**Returns:** *this*

___

###  emitWarning

▸ **emitWarning**(`warning`: string | [Error](error.md), `name?`: undefined | string, `ctor?`: [Function](function.md)): *void*

Defined in node_modules/@types/node/globals.d.ts:843

**Parameters:**

Name | Type |
------ | ------ |
`warning` | string &#124; [Error](error.md) |
`name?` | undefined &#124; string |
`ctor?` | [Function](function.md) |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *[Array](regexpmatcharray.md#array)‹string | symbol›*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[eventNames](../classes/nodejs.eventemitter.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:623

**Returns:** *[Array](regexpmatcharray.md#array)‹string | symbol›*

___

###  exit

▸ **exit**(`code?`: undefined | number): *never*

Defined in node_modules/@types/node/globals.d.ts:845

**Parameters:**

Name | Type |
------ | ------ |
`code?` | undefined &#124; number |

**Returns:** *never*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[getMaxListeners](../classes/nodejs.eventemitter.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:615

**Returns:** *number*

___

###  getegid

▸ **getegid**(): *number*

Defined in node_modules/@types/node/globals.d.ts:853

**Returns:** *number*

___

###  geteuid

▸ **geteuid**(): *number*

Defined in node_modules/@types/node/globals.d.ts:851

**Returns:** *number*

___

###  getgid

▸ **getgid**(): *number*

Defined in node_modules/@types/node/globals.d.ts:847

**Returns:** *number*

___

###  getgroups

▸ **getgroups**(): *number[]*

Defined in node_modules/@types/node/globals.d.ts:855

**Returns:** *number[]*

___

###  getuid

▸ **getuid**(): *number*

Defined in node_modules/@types/node/globals.d.ts:849

**Returns:** *number*

___

###  hasUncaughtExceptionCaptureCallback

▸ **hasUncaughtExceptionCaptureCallback**(): *boolean*

Defined in node_modules/@types/node/globals.d.ts:858

**Returns:** *boolean*

___

###  kill

▸ **kill**(`pid`: number, `signal?`: string | number): *void*

Defined in node_modules/@types/node/globals.d.ts:887

**Parameters:**

Name | Type |
------ | ------ |
`pid` | number |
`signal?` | string &#124; number |

**Returns:** *void*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[listenerCount](../classes/nodejs.eventemitter.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:619

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: "beforeExit"): *[BeforeExitListener](../modules/nodejs.md#beforeexitlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1027

**Parameters:**

Name | Type |
------ | ------ |
`event` | "beforeExit" |

**Returns:** *[BeforeExitListener](../modules/nodejs.md#beforeexitlistener)[]*

▸ **listeners**(`event`: "disconnect"): *[DisconnectListener](../modules/nodejs.md#disconnectlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1028

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |

**Returns:** *[DisconnectListener](../modules/nodejs.md#disconnectlistener)[]*

▸ **listeners**(`event`: "exit"): *[ExitListener](../modules/nodejs.md#exitlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1029

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |

**Returns:** *[ExitListener](../modules/nodejs.md#exitlistener)[]*

▸ **listeners**(`event`: "rejectionHandled"): *[RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1030

**Parameters:**

Name | Type |
------ | ------ |
`event` | "rejectionHandled" |

**Returns:** *[RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener)[]*

▸ **listeners**(`event`: "uncaughtException"): *[UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1031

**Parameters:**

Name | Type |
------ | ------ |
`event` | "uncaughtException" |

**Returns:** *[UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener)[]*

▸ **listeners**(`event`: "unhandledRejection"): *[UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1032

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unhandledRejection" |

**Returns:** *[UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener)[]*

▸ **listeners**(`event`: "warning"): *[WarningListener](../modules/nodejs.md#warninglistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1033

**Parameters:**

Name | Type |
------ | ------ |
`event` | "warning" |

**Returns:** *[WarningListener](../modules/nodejs.md#warninglistener)[]*

▸ **listeners**(`event`: "message"): *[MessageListener](../modules/nodejs.md#messagelistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1034

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |

**Returns:** *[MessageListener](../modules/nodejs.md#messagelistener)[]*

▸ **listeners**(`event`: [Signals](../modules/nodejs.md#signals)): *[SignalsListener](../modules/nodejs.md#signalslistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1035

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Signals](../modules/nodejs.md#signals) |

**Returns:** *[SignalsListener](../modules/nodejs.md#signalslistener)[]*

▸ **listeners**(`event`: "newListener"): *[NewListenerListener](../modules/nodejs.md#newlistenerlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1036

**Parameters:**

Name | Type |
------ | ------ |
`event` | "newListener" |

**Returns:** *[NewListenerListener](../modules/nodejs.md#newlistenerlistener)[]*

▸ **listeners**(`event`: "removeListener"): *[RemoveListenerListener](../modules/nodejs.md#removelistenerlistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1037

**Parameters:**

Name | Type |
------ | ------ |
`event` | "removeListener" |

**Returns:** *[RemoveListenerListener](../modules/nodejs.md#removelistenerlistener)[]*

▸ **listeners**(`event`: "multipleResolves"): *[MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)[]*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[listeners](../classes/nodejs.eventemitter.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:1038

**Parameters:**

Name | Type |
------ | ------ |
`event` | "multipleResolves" |

**Returns:** *[MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)[]*

___

###  memoryUsage

▸ **memoryUsage**(): *[MemoryUsage](nodejs.memoryusage.md)*

Defined in node_modules/@types/node/globals.d.ts:894

**Returns:** *[MemoryUsage](nodejs.memoryusage.md)*

___

###  nextTick

▸ **nextTick**(`callback`: [Function](function.md), ...`args`: any[]): *void*

Defined in node_modules/@types/node/globals.d.ts:896

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [Function](function.md) |
`...args` | any[] |

**Returns:** *void*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[off](../classes/nodejs.eventemitter.md#off)*

Defined in node_modules/@types/node/globals.d.ts:612

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: "beforeExit", `listener`: [BeforeExitListener](../modules/nodejs.md#beforeexitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:975

**Parameters:**

Name | Type |
------ | ------ |
`event` | "beforeExit" |
`listener` | [BeforeExitListener](../modules/nodejs.md#beforeexitlistener) |

**Returns:** *this*

▸ **on**(`event`: "disconnect", `listener`: [DisconnectListener](../modules/nodejs.md#disconnectlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:976

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |
`listener` | [DisconnectListener](../modules/nodejs.md#disconnectlistener) |

**Returns:** *this*

▸ **on**(`event`: "exit", `listener`: [ExitListener](../modules/nodejs.md#exitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:977

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`listener` | [ExitListener](../modules/nodejs.md#exitlistener) |

**Returns:** *this*

▸ **on**(`event`: "rejectionHandled", `listener`: [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:978

**Parameters:**

Name | Type |
------ | ------ |
`event` | "rejectionHandled" |
`listener` | [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener) |

**Returns:** *this*

▸ **on**(`event`: "uncaughtException", `listener`: [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:979

**Parameters:**

Name | Type |
------ | ------ |
`event` | "uncaughtException" |
`listener` | [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener) |

**Returns:** *this*

▸ **on**(`event`: "unhandledRejection", `listener`: [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:980

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unhandledRejection" |
`listener` | [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener) |

**Returns:** *this*

▸ **on**(`event`: "warning", `listener`: [WarningListener](../modules/nodejs.md#warninglistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:981

**Parameters:**

Name | Type |
------ | ------ |
`event` | "warning" |
`listener` | [WarningListener](../modules/nodejs.md#warninglistener) |

**Returns:** *this*

▸ **on**(`event`: "message", `listener`: [MessageListener](../modules/nodejs.md#messagelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:982

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`listener` | [MessageListener](../modules/nodejs.md#messagelistener) |

**Returns:** *this*

▸ **on**(`event`: [Signals](../modules/nodejs.md#signals), `listener`: [SignalsListener](../modules/nodejs.md#signalslistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:983

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Signals](../modules/nodejs.md#signals) |
`listener` | [SignalsListener](../modules/nodejs.md#signalslistener) |

**Returns:** *this*

▸ **on**(`event`: "newListener", `listener`: [NewListenerListener](../modules/nodejs.md#newlistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:984

**Parameters:**

Name | Type |
------ | ------ |
`event` | "newListener" |
`listener` | [NewListenerListener](../modules/nodejs.md#newlistenerlistener) |

**Returns:** *this*

▸ **on**(`event`: "removeListener", `listener`: [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:985

**Parameters:**

Name | Type |
------ | ------ |
`event` | "removeListener" |
`listener` | [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener) |

**Returns:** *this*

▸ **on**(`event`: "multipleResolves", `listener`: [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[on](../classes/nodejs.eventemitter.md#on)*

Defined in node_modules/@types/node/globals.d.ts:986

**Parameters:**

Name | Type |
------ | ------ |
`event` | "multipleResolves" |
`listener` | [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: "beforeExit", `listener`: [BeforeExitListener](../modules/nodejs.md#beforeexitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:988

**Parameters:**

Name | Type |
------ | ------ |
`event` | "beforeExit" |
`listener` | [BeforeExitListener](../modules/nodejs.md#beforeexitlistener) |

**Returns:** *this*

▸ **once**(`event`: "disconnect", `listener`: [DisconnectListener](../modules/nodejs.md#disconnectlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:989

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |
`listener` | [DisconnectListener](../modules/nodejs.md#disconnectlistener) |

**Returns:** *this*

▸ **once**(`event`: "exit", `listener`: [ExitListener](../modules/nodejs.md#exitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:990

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`listener` | [ExitListener](../modules/nodejs.md#exitlistener) |

**Returns:** *this*

▸ **once**(`event`: "rejectionHandled", `listener`: [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:991

**Parameters:**

Name | Type |
------ | ------ |
`event` | "rejectionHandled" |
`listener` | [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener) |

**Returns:** *this*

▸ **once**(`event`: "uncaughtException", `listener`: [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:992

**Parameters:**

Name | Type |
------ | ------ |
`event` | "uncaughtException" |
`listener` | [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener) |

**Returns:** *this*

▸ **once**(`event`: "unhandledRejection", `listener`: [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:993

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unhandledRejection" |
`listener` | [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener) |

**Returns:** *this*

▸ **once**(`event`: "warning", `listener`: [WarningListener](../modules/nodejs.md#warninglistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:994

**Parameters:**

Name | Type |
------ | ------ |
`event` | "warning" |
`listener` | [WarningListener](../modules/nodejs.md#warninglistener) |

**Returns:** *this*

▸ **once**(`event`: "message", `listener`: [MessageListener](../modules/nodejs.md#messagelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:995

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`listener` | [MessageListener](../modules/nodejs.md#messagelistener) |

**Returns:** *this*

▸ **once**(`event`: [Signals](../modules/nodejs.md#signals), `listener`: [SignalsListener](../modules/nodejs.md#signalslistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:996

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Signals](../modules/nodejs.md#signals) |
`listener` | [SignalsListener](../modules/nodejs.md#signalslistener) |

**Returns:** *this*

▸ **once**(`event`: "newListener", `listener`: [NewListenerListener](../modules/nodejs.md#newlistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:997

**Parameters:**

Name | Type |
------ | ------ |
`event` | "newListener" |
`listener` | [NewListenerListener](../modules/nodejs.md#newlistenerlistener) |

**Returns:** *this*

▸ **once**(`event`: "removeListener", `listener`: [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:998

**Parameters:**

Name | Type |
------ | ------ |
`event` | "removeListener" |
`listener` | [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener) |

**Returns:** *this*

▸ **once**(`event`: "multipleResolves", `listener`: [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[once](../classes/nodejs.eventemitter.md#once)*

Defined in node_modules/@types/node/globals.d.ts:999

**Parameters:**

Name | Type |
------ | ------ |
`event` | "multipleResolves" |
`listener` | [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener) |

**Returns:** *this*

___

###  openStdin

▸ **openStdin**(): *[Socket](nodejs.socket.md)*

Defined in node_modules/@types/node/globals.d.ts:834

**Returns:** *[Socket](nodejs.socket.md)*

___

###  prependListener

▸ **prependListener**(`event`: "beforeExit", `listener`: [BeforeExitListener](../modules/nodejs.md#beforeexitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1001

**Parameters:**

Name | Type |
------ | ------ |
`event` | "beforeExit" |
`listener` | [BeforeExitListener](../modules/nodejs.md#beforeexitlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "disconnect", `listener`: [DisconnectListener](../modules/nodejs.md#disconnectlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1002

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |
`listener` | [DisconnectListener](../modules/nodejs.md#disconnectlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "exit", `listener`: [ExitListener](../modules/nodejs.md#exitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1003

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`listener` | [ExitListener](../modules/nodejs.md#exitlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "rejectionHandled", `listener`: [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1004

**Parameters:**

Name | Type |
------ | ------ |
`event` | "rejectionHandled" |
`listener` | [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "uncaughtException", `listener`: [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1005

**Parameters:**

Name | Type |
------ | ------ |
`event` | "uncaughtException" |
`listener` | [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "unhandledRejection", `listener`: [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1006

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unhandledRejection" |
`listener` | [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "warning", `listener`: [WarningListener](../modules/nodejs.md#warninglistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1007

**Parameters:**

Name | Type |
------ | ------ |
`event` | "warning" |
`listener` | [WarningListener](../modules/nodejs.md#warninglistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "message", `listener`: [MessageListener](../modules/nodejs.md#messagelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1008

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`listener` | [MessageListener](../modules/nodejs.md#messagelistener) |

**Returns:** *this*

▸ **prependListener**(`event`: [Signals](../modules/nodejs.md#signals), `listener`: [SignalsListener](../modules/nodejs.md#signalslistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1009

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Signals](../modules/nodejs.md#signals) |
`listener` | [SignalsListener](../modules/nodejs.md#signalslistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "newListener", `listener`: [NewListenerListener](../modules/nodejs.md#newlistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1010

**Parameters:**

Name | Type |
------ | ------ |
`event` | "newListener" |
`listener` | [NewListenerListener](../modules/nodejs.md#newlistenerlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "removeListener", `listener`: [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1011

**Parameters:**

Name | Type |
------ | ------ |
`event` | "removeListener" |
`listener` | [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener) |

**Returns:** *this*

▸ **prependListener**(`event`: "multipleResolves", `listener`: [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependListener](../classes/nodejs.eventemitter.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:1012

**Parameters:**

Name | Type |
------ | ------ |
`event` | "multipleResolves" |
`listener` | [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: "beforeExit", `listener`: [BeforeExitListener](../modules/nodejs.md#beforeexitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1014

**Parameters:**

Name | Type |
------ | ------ |
`event` | "beforeExit" |
`listener` | [BeforeExitListener](../modules/nodejs.md#beforeexitlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "disconnect", `listener`: [DisconnectListener](../modules/nodejs.md#disconnectlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1015

**Parameters:**

Name | Type |
------ | ------ |
`event` | "disconnect" |
`listener` | [DisconnectListener](../modules/nodejs.md#disconnectlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "exit", `listener`: [ExitListener](../modules/nodejs.md#exitlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1016

**Parameters:**

Name | Type |
------ | ------ |
`event` | "exit" |
`listener` | [ExitListener](../modules/nodejs.md#exitlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "rejectionHandled", `listener`: [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1017

**Parameters:**

Name | Type |
------ | ------ |
`event` | "rejectionHandled" |
`listener` | [RejectionHandledListener](../modules/nodejs.md#rejectionhandledlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "uncaughtException", `listener`: [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1018

**Parameters:**

Name | Type |
------ | ------ |
`event` | "uncaughtException" |
`listener` | [UncaughtExceptionListener](../modules/nodejs.md#uncaughtexceptionlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unhandledRejection", `listener`: [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1019

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unhandledRejection" |
`listener` | [UnhandledRejectionListener](../modules/nodejs.md#unhandledrejectionlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "warning", `listener`: [WarningListener](../modules/nodejs.md#warninglistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1020

**Parameters:**

Name | Type |
------ | ------ |
`event` | "warning" |
`listener` | [WarningListener](../modules/nodejs.md#warninglistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "message", `listener`: [MessageListener](../modules/nodejs.md#messagelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1021

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`listener` | [MessageListener](../modules/nodejs.md#messagelistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: [Signals](../modules/nodejs.md#signals), `listener`: [SignalsListener](../modules/nodejs.md#signalslistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1022

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Signals](../modules/nodejs.md#signals) |
`listener` | [SignalsListener](../modules/nodejs.md#signalslistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "newListener", `listener`: [NewListenerListener](../modules/nodejs.md#newlistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1023

**Parameters:**

Name | Type |
------ | ------ |
`event` | "newListener" |
`listener` | [NewListenerListener](../modules/nodejs.md#newlistenerlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "removeListener", `listener`: [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1024

**Parameters:**

Name | Type |
------ | ------ |
`event` | "removeListener" |
`listener` | [RemoveListenerListener](../modules/nodejs.md#removelistenerlistener) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "multipleResolves", `listener`: [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener)): *this*

*Overrides [EventEmitter](../classes/nodejs.eventemitter.md).[prependOnceListener](../classes/nodejs.eventemitter.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:1025

**Parameters:**

Name | Type |
------ | ------ |
`event` | "multipleResolves" |
`listener` | [MultipleResolveListener](../modules/nodejs.md#multipleresolvelistener) |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *[Function](function.md)[]*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[rawListeners](../classes/nodejs.eventemitter.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *[Function](function.md)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeAllListeners](../classes/nodejs.eventemitter.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[removeListener](../classes/nodejs.eventemitter.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:611

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  resourceUsage

▸ **resourceUsage**(): *[ResourceUsage](nodejs.resourceusage.md)*

Defined in node_modules/@types/node/globals.d.ts:933

**Returns:** *[ResourceUsage](nodejs.resourceusage.md)*

___

### `Optional` send

▸ **send**(`message`: any, `sendHandle?`: any, `options?`: undefined | object, `callback?`: undefined | function): *boolean*

Defined in node_modules/@types/node/globals.d.ts:917

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |
`sendHandle?` | any |
`options?` | undefined &#124; object |
`callback?` | undefined &#124; function |

**Returns:** *boolean*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [EventEmitter](../classes/nodejs.eventemitter.md).[setMaxListeners](../classes/nodejs.eventemitter.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setUncaughtExceptionCaptureCallback

▸ **setUncaughtExceptionCaptureCallback**(`cb`: function | null): *void*

Defined in node_modules/@types/node/globals.d.ts:857

**Parameters:**

Name | Type |
------ | ------ |
`cb` | function &#124; null |

**Returns:** *void*

___

###  setegid

▸ **setegid**(`id`: number | string): *void*

Defined in node_modules/@types/node/globals.d.ts:854

**Parameters:**

Name | Type |
------ | ------ |
`id` | number &#124; string |

**Returns:** *void*

___

###  seteuid

▸ **seteuid**(`id`: number | string): *void*

Defined in node_modules/@types/node/globals.d.ts:852

**Parameters:**

Name | Type |
------ | ------ |
`id` | number &#124; string |

**Returns:** *void*

___

###  setgid

▸ **setgid**(`id`: number | string): *void*

Defined in node_modules/@types/node/globals.d.ts:848

**Parameters:**

Name | Type |
------ | ------ |
`id` | number &#124; string |

**Returns:** *void*

___

###  setgroups

▸ **setgroups**(`groups`: [Array](regexpmatcharray.md#array)‹string | number›): *void*

Defined in node_modules/@types/node/globals.d.ts:856

**Parameters:**

Name | Type |
------ | ------ |
`groups` | [Array](regexpmatcharray.md#array)‹string &#124; number› |

**Returns:** *void*

___

###  setuid

▸ **setuid**(`id`: number | string): *void*

Defined in node_modules/@types/node/globals.d.ts:850

**Parameters:**

Name | Type |
------ | ------ |
`id` | number &#124; string |

**Returns:** *void*

___

###  umask

▸ **umask**(`mask?`: undefined | number): *number*

Defined in node_modules/@types/node/globals.d.ts:911

Can only be set if not in worker thread.

**Parameters:**

Name | Type |
------ | ------ |
`mask?` | undefined &#124; number |

**Returns:** *number*

___

###  uptime

▸ **uptime**(): *number*

Defined in node_modules/@types/node/globals.d.ts:912

**Returns:** *number*
