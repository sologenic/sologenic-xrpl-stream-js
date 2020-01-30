[typescript](../README.md) › [Globals](../globals.md) › ["crypto"](_crypto_.md) › [generateKeyPair](_crypto_.generatekeypair.md)

# Module: generateKeyPair

## Callable

▸ **generateKeyPair**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "pem"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:554

**Parameters:**

▪ **type**: *"rsa"*

▪ **options**: *[RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "pem"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: string, `privateKey`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | string |
`privateKey` | string |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "der"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:555

**Parameters:**

▪ **type**: *"rsa"*

▪ **options**: *[RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "der"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: string, `privateKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | string |
`privateKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "pem"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:556

**Parameters:**

▪ **type**: *"rsa"*

▪ **options**: *[RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "pem"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [Buffer](../classes/buffer.md), `privateKey`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [Buffer](../classes/buffer.md) |
`privateKey` | string |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "der"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:557

**Parameters:**

▪ **type**: *"rsa"*

▪ **options**: *[RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "der"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [Buffer](../classes/buffer.md), `privateKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [Buffer](../classes/buffer.md) |
`privateKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "rsa", `options`: [RSAKeyPairKeyObjectOptions](../interfaces/_crypto_.rsakeypairkeyobjectoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:558

**Parameters:**

▪ **type**: *"rsa"*

▪ **options**: *[RSAKeyPairKeyObjectOptions](../interfaces/_crypto_.rsakeypairkeyobjectoptions.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [KeyObject](../classes/_crypto_.keyobject.md), `privateKey`: [KeyObject](../classes/_crypto_.keyobject.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [KeyObject](../classes/_crypto_.keyobject.md) |
`privateKey` | [KeyObject](../classes/_crypto_.keyobject.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "pem"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:560

**Parameters:**

▪ **type**: *"dsa"*

▪ **options**: *[DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "pem"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: string, `privateKey`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | string |
`privateKey` | string |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "der"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:561

**Parameters:**

▪ **type**: *"dsa"*

▪ **options**: *[DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "der"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: string, `privateKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | string |
`privateKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "pem"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:562

**Parameters:**

▪ **type**: *"dsa"*

▪ **options**: *[DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "pem"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [Buffer](../classes/buffer.md), `privateKey`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [Buffer](../classes/buffer.md) |
`privateKey` | string |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "der"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:563

**Parameters:**

▪ **type**: *"dsa"*

▪ **options**: *[DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "der"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [Buffer](../classes/buffer.md), `privateKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [Buffer](../classes/buffer.md) |
`privateKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "dsa", `options`: [DSAKeyPairKeyObjectOptions](../interfaces/_crypto_.dsakeypairkeyobjectoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:564

**Parameters:**

▪ **type**: *"dsa"*

▪ **options**: *[DSAKeyPairKeyObjectOptions](../interfaces/_crypto_.dsakeypairkeyobjectoptions.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [KeyObject](../classes/_crypto_.keyobject.md), `privateKey`: [KeyObject](../classes/_crypto_.keyobject.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [KeyObject](../classes/_crypto_.keyobject.md) |
`privateKey` | [KeyObject](../classes/_crypto_.keyobject.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "pem"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:566

**Parameters:**

▪ **type**: *"ec"*

▪ **options**: *[ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "pem"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: string, `privateKey`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | string |
`privateKey` | string |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "der"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:567

**Parameters:**

▪ **type**: *"ec"*

▪ **options**: *[ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "der"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: string, `privateKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | string |
`privateKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "pem"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:568

**Parameters:**

▪ **type**: *"ec"*

▪ **options**: *[ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "pem"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [Buffer](../classes/buffer.md), `privateKey`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [Buffer](../classes/buffer.md) |
`privateKey` | string |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "der"›, `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:569

**Parameters:**

▪ **type**: *"ec"*

▪ **options**: *[ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "der"›*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [Buffer](../classes/buffer.md), `privateKey`: [Buffer](../classes/buffer.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [Buffer](../classes/buffer.md) |
`privateKey` | [Buffer](../classes/buffer.md) |

**Returns:** *void*

▸ **generateKeyPair**(`type`: "ec", `options`: [ECKeyPairKeyObjectOptions](../interfaces/_crypto_.eckeypairkeyobjectoptions.md), `callback`: function): *void*

Defined in node_modules/@types/node/crypto.d.ts:570

**Parameters:**

▪ **type**: *"ec"*

▪ **options**: *[ECKeyPairKeyObjectOptions](../interfaces/_crypto_.eckeypairkeyobjectoptions.md)*

▪ **callback**: *function*

▸ (`err`: [Error](../interfaces/error.md) | null, `publicKey`: [KeyObject](../classes/_crypto_.keyobject.md), `privateKey`: [KeyObject](../classes/_crypto_.keyobject.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/error.md) &#124; null |
`publicKey` | [KeyObject](../classes/_crypto_.keyobject.md) |
`privateKey` | [KeyObject](../classes/_crypto_.keyobject.md) |

**Returns:** *void*

## Index

### Functions

* [__promisify__](_crypto_.generatekeypair.md#__promisify__)

## Functions

###  __promisify__

▸ **__promisify__**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "pem"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:573

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "pem"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "der"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:574

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"pem", "der"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "pem"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:575

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "pem"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "rsa", `options`: [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "der"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:576

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairOptions](../interfaces/_crypto_.rsakeypairoptions.md)‹"der", "der"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "rsa", `options`: [RSAKeyPairKeyObjectOptions](../interfaces/_crypto_.rsakeypairkeyobjectoptions.md)): *[Promise](../interfaces/promise.md)‹[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)›*

Defined in node_modules/@types/node/crypto.d.ts:577

**Parameters:**

Name | Type |
------ | ------ |
`type` | "rsa" |
`options` | [RSAKeyPairKeyObjectOptions](../interfaces/_crypto_.rsakeypairkeyobjectoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)›*

▸ **__promisify__**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "pem"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:579

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "pem"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "der"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:580

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"pem", "der"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "pem"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:581

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "pem"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "dsa", `options`: [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "der"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:582

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairOptions](../interfaces/_crypto_.dsakeypairoptions.md)‹"der", "der"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "dsa", `options`: [DSAKeyPairKeyObjectOptions](../interfaces/_crypto_.dsakeypairkeyobjectoptions.md)): *[Promise](../interfaces/promise.md)‹[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)›*

Defined in node_modules/@types/node/crypto.d.ts:583

**Parameters:**

Name | Type |
------ | ------ |
`type` | "dsa" |
`options` | [DSAKeyPairKeyObjectOptions](../interfaces/_crypto_.dsakeypairkeyobjectoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)›*

▸ **__promisify__**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "pem"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:585

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "pem"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "der"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:586

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"pem", "der"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "pem"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:587

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "pem"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "ec", `options`: [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "der"›): *[Promise](../interfaces/promise.md)‹object›*

Defined in node_modules/@types/node/crypto.d.ts:588

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairOptions](../interfaces/_crypto_.eckeypairoptions.md)‹"der", "der"› |

**Returns:** *[Promise](../interfaces/promise.md)‹object›*

▸ **__promisify__**(`type`: "ec", `options`: [ECKeyPairKeyObjectOptions](../interfaces/_crypto_.eckeypairkeyobjectoptions.md)): *[Promise](../interfaces/promise.md)‹[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)›*

Defined in node_modules/@types/node/crypto.d.ts:589

**Parameters:**

Name | Type |
------ | ------ |
`type` | "ec" |
`options` | [ECKeyPairKeyObjectOptions](../interfaces/_crypto_.eckeypairkeyobjectoptions.md) |

**Returns:** *[Promise](../interfaces/promise.md)‹[KeyPairKeyObjectResult](../interfaces/_crypto_.keypairkeyobjectresult.md)›*
