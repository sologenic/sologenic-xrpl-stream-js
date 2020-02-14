![sologenic-xrpl-stream-js](https://www.sologenic.com/images/solo-plain.png)

<!--ts-->
   * [<a href="https://www.sologenic.com" rel="nofollow">ƨ Sologenic Ecosystem</a>](#ƨ-sologenic-ecosystem)
   * [<a href="https://github.com/sologenic/sologenic-xrpl-stream-js">ƨ Sologenic XRPL Stream</a>](#ƨ-sologenic-xrpl-stream)
      * [How to Participate](#how-to-participate)
      * [Install](#install)
      * [Node Package Manager Scripts](#node-package-manager-scripts)
         * [Creating a packagable distribution](#creating-a-packagable-distribution)
         * [Testing](#testing)
            * [One-time execution of the unit tests](#one-time-execution-of-the-unit-tests)
            * [Persistent execution of unit tests (watching for changes)](#persistent-execution-of-unit-tests-watching-for-changes)
         * [Generating documentation](#generating-documentation)
            * [Generating HTML documentation only](#generating-html-documentation-only)
            * [Generating markdown documentation only](#generating-markdown-documentation-only)
      * [Typescript Example](#typescript-example)
         * [Intializing the Sologenic XRPL stream with a hash-based queue](#intializing-the-sologenic-xrpl-stream-with-a-hash-based-queue)
         * [Intializing the Sologenic XRPL stream with a redis-based queue](#intializing-the-sologenic-xrpl-stream-with-a-redis-based-queue)
         * [Sending a Payment with XRPL account and secret](#sending-a-payment-with-xrpl-account-and-secret)
         * [Sending a Payment with XRPL account and keypair](#sending-a-payment-with-xrpl-account-and-keypair)
         * [Event Emitter and Listeners](#event-emitter-and-listeners)
         * [Transactions](#transactions)

<!-- Added by: pmcconna, at: Thu Feb 13 16:57:12 PST 2020 -->

<!--te-->

# [&#x1a8; Sologenic Ecosystem](https://www.sologenic.com)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/sologenic/sologenic-xrpl-stream-js)
![GitHub contributors](https://img.shields.io/github/contributors/sologenic/sologenic-xrpl-stream-js)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/sologenic/sologenic-xrpl-stream-js)

_&#x1a8;_ _sologenic_ is a sophisticated ecosystem that facilitates investing and trading of on-demand tokenized assets, including Stocks and ETFs from 25+ global exchanges on top of the XRP Ledger.

- [White Paper](https://www.sologenic.com/downloads/sologenic-whitepaper.pdf)

- [One Pager](https://www.sologenic.com/downloads/sologenic-onepage.pdf)

# [&#x1a8; Sologenic XRPL Stream](https://github.com/sologenic/sologenic-xrpl-stream-js)

## How to Participate

We have a community for questions and support at [sologenic-dev.slack.com](https://sologenic-dev.slack.com). To receive an invite for the community please fill out the [form](https://docs.google.com/forms/d/e/1FAIpQLSdcpIL-u2FsqBZj0ikG7UyJe3l9If7sVr7MdTpVnINQJJbsQg/viewform) and we'll send you your invite link.

## Install

```bash
$ npm install sologenic-xrpl-stream-js
```

## Node Package Manager Scripts

Each `npm` script defined in `package.json` can be run by simply running the command `npm run-script <script name>`

For example, notably the following scripts are frequently used when creating a packagable distribution, testing,
and generating documentation.

### Creating a packagable distribution

`npm run-s build`

### Testing

#### One-time execution of the unit tests

The following command will iterate over all test cases (files with `.spec.ts`) as their suffix.

`npm run-s test`

#### Persistent execution of unit tests (watching for changes)

The following command will iterate over all test cases (files with `.spec.ts`) as their suffix.  But it will also watch for changes to the `.spec.ts` and `.ts` scripts and run tests on change.

`npm run-s watch`

### Generating documentation

The following command will generate both HTML and markdown documentation in the `docs/` folder.

`npm run-s doc`

#### Generating HTML documentation only

The following command will generate HTML only documentation.

`npm run-s doc:html`

#### Generating markdown documentation only

The following command will generate markdown only documentation.

`npm run-s doc:markdown`

## Typescript Example

When using the `sologenic-xrpl-stream-js` library on the server side, we recommend using `redis` as the queue storage mechanism, whereas when using the library on the client side, we recommend using `hash` as on the client side you will most likely not have a `redis` server accessible to you.

### Intializing the Sologenic XRPL stream with a hash-based queue

```typescript
'use strict';
const ƨ = require('sologenic-xrpl-stream-js');

(async () => {
  try {
    const sologenic = await new ƨ.SologenicTxHandler(
      // RippleAPI Options
      {
        server: 'wss://testnet.xrpl-labs.com', // Kudos to Wietse Wind
      },
      // Sologenic Options, hash or redis (see SologenicOptions in documentation)
      {
        // Clear the cache before accessing the queue, since this is a hash-based 
        // queue it will be initialized empty, so this will have no effect.
        clearCache: true,
        queueType: "hash",
        hash: {}
      }
    ).connect();
);
```

### Intializing the Sologenic XRPL stream with a redis-based queue

```typescript
'use strict';
const ƨ = require('sologenic-xrpl-stream-js');

(async () => {
  try {
    const sologenic = await new ƨ.SologenicTxHandler(
      // RippleAPI Options
      {
        server: 'wss://testnet.xrpl-labs.com', // Kudos to Wietse Wind
      },
      // Sologenic Options, hash or redis
      {
        // Clear the cache before accessing the queue, since this is a redis-based 
        // queue it will be emptied before after connecting.  Please make sure there
        // is no data in the database you're accessing you want to preserve.
        clearCache: true,
        queueType: 'redis',
        redis: {          
          // The IP address or hostname of the redis queue
          // host: '127.0.0.1',

          // The port of the redis queue
          // port: 6379,

          // The password to access the redis queue
          // password: 'password',

          // The database number of the redis queue (if multiple database support is active)
          // database: 1
        }
      }
    ).connect();
);
```

Note: When using a redis queue, you must have an active redis server which the transactional handler can connect.

### Sending a Payment with XRPL account and secret

```js
'use strict';
const ƨ = require('sologenic-xrpl-stream-js');

(async () => {
  try {
    const sologenic = await new ƨ.SologenicTxHandler(
      // RippleAPI Options
      {
        server: 'wss://testnet.xrpl-labs.com', // Kudos to Wietse Wind
      },
      // Sologenic Options, hash or redis
      {
        clearCache: true,
        queueType: "hash",
        hash: {}
      }
    ).connect();
   
    // Events have their own types now.
    sologenic.on('queued', (event: SologenicTypes.QueuedEvent) => {
      console.log('GLOBAL QUEUED: ', event);
    });
    sologenic.on('dispatched', (event: SologenicTypes.DispatchedEvent) => {
      console.log('GLOBAL DISPATCHED:', event);
    });
    sologenic.on('requeued', (event: SologenicTypes.RequeuedEvent) => {
      console.log('GLOBAL REQUEUED:', event);
    });
    sologenic.on('warning', (event: SologenicTypes.WarningEvent) => {
      console.log('GLOBAL WARNING:', event);
    });
    sologenic.on('validated', (event: SologenicTypes.ValidatedEvent) => {
      console.log('GLOBAL VALIDATED:', event);
    });
    sologenic.on('failed', (event: SologenicTypes.FailedEvent) => {
      console.log('GLOBAL FAILED:', event);
    });

    await sologenic.setAccount({
      address: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      secret: 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv'
    });

    const tx = sologenic.submit({
      TransactionType: 'Payment',
      Account: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      Destination: 'rUwty6Pf4gzUmCLVuKwrRWPYaUiUiku8Rg',
      Amount: {
        currency: '534F4C4F00000000000000000000000000000000',
        issuer: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
        value: '100000000'
      }
    });

    // Events have their own types now.
    tx.events.on('queued', (event: SologenicTypes.QueuedEvent) => {
      console.log('TX QUEUED: ', event);
    }).on('dispatched', (event: SologenicTypes.DispatchedEvent) => {
      console.log('TX DISPATCHED:', event);
    }).on('requeued', (event: SologenicTypes.RequeuedEvent) => {
      console.log('TX REQUEUED:', event);
    }).on('warning', (event: SologenicTypes.WarningEvent) => {
      console.log('TX WARNING:', event);
    }).on('validated', (event: SologenicTypes.ValidatedEvent) => {
      console.log('TX VALIDATED:', event);
    });.on('failed', (event: SologenicTypes.FailedEvent) => {
      console.log('TX FAILED:', event);
    });

    console.log(await tx.promise);
  } catch (error) {
    console.log('Error:', error);
  }
})();
```

### Sending a Payment with XRPL account and keypair

```js
'use strict';
const ƨ = require('sologenic-xrpl-stream-js');

(async () => {
  try {
    const sologenic = await new ƨ.SologenicTxHandler(
      // RippleAPI Options
      {
        server: 'wss://testnet.xrpl-labs.com', // Kudos to Wietse Wind
      },
      // Sologenic Options, hash or redis
      {
        clearCache: true,
        queueType: "hash",
        hash: {}
      }
    ).connect();
   
    // Events have their own types now.
    sologenic.on('queued', (event: SologenicTypes.QueuedEvent) => {
      console.log('GLOBAL QUEUED: ', event);
    });
    sologenic.on('dispatched', (event: SologenicTypes.DispatchedEvent) => {
      console.log('GLOBAL DISPATCHED:', event);
    });
    sologenic.on('requeued', (event: SologenicTypes.RequeuedEvent) => {
      console.log('GLOBAL REQUEUED:', event);
    });
    sologenic.on('warning', (event: SologenicTypes.WarningEvent) => {
      console.log('GLOBAL WARNING:', event);
    });
    sologenic.on('validated', (event: SologenicTypes.ValidatedEvent) => {
      console.log('GLOBAL VALIDATED:', event);
    });
    sologenic.on('failed', (event: SologenicTypes.FailedEvent) => {
      console.log('GLOBAL FAILED:', event);
    });

    await sologenic.setAccount({
      address: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      keypair: {
        publicKey: 'my public key with permission to sign transaction for address',
        privateKey: 'my private key with permission to sign transactions for address'
      }
    });

    const tx = sologenic.submit({
      TransactionType: 'Payment',
      Account: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      Destination: 'rUwty6Pf4gzUmCLVuKwrRWPYaUiUiku8Rg',
      Amount: {
        currency: '534F4C4F00000000000000000000000000000000',
        issuer: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
        value: '100000000'
      }
    });

    // Events have their own types now.
    tx.events.on('queued', (event: SologenicTypes.QueuedEvent) => {
      console.log('TX QUEUED: ', event);
    }).on('dispatched', (event: SologenicTypes.DispatchedEvent) => {
      console.log('TX DISPATCHED:', event);
    }).on('requeued', (event: SologenicTypes.RequeuedEvent) => {
      console.log('TX REQUEUED:', event);
    }).on('warning', (event: SologenicTypes.WarningEvent) => {
      console.log('TX WARNING:', event);
    }).on('validated', (event: SologenicTypes.ValidatedEvent) => {
      console.log('TX VALIDATED:', event);
    });.on('failed', (event: SologenicTypes.FailedEvent) => {
      console.log('TX FAILED:', event);
    });

    console.log(await tx.promise);
  } catch (error) {
    console.log('Error:', error);
  }
})();
```

## Event Emitter and Listeners

There are 6 different events that you'll receive while a transaction is being processed by the library.  Each event has its own type associated with it as you can see in the `src/types/sologenicoptions.d.ts`.  See below for a list of events and the emitted objects.

* Event (validated): `SologenicTypes.ValidatedEvent`
* Event (warning): `SologenicTypes.WarningEvent`
* Event (requeued): `SologenicTypes.RequeuedEvent`
* Event (queued): `SologenicTypes.QueuedEvent`
* Event (failed): `SologenicTypes.FailedEvent`
* Event (dispatched): `SologenicTypes.DispatchedEvent`

As you can see below in the `transactions` section there is a snippet of code there.  The reason we added this is because we wanted to outline that we have two separate event emitters that emit events based on the transactions.  One of the event emitters being a global emitter that receives all events, and then a transaction based event emitter which receives events for only the transaction it has subscribed to.  

For example, the `sologenic.on()` subscriptions (event listeners) to events are global, meaning you'll receive events for every transaction you submit.  Whereas, the `tx.events.on()` subscriptions (event listeners) are specific to the transactions themselves, once the transaction has been `validated` or `failed` you will no longer receive transactions as the listeners are all unsubscribed automatically.

```typescript
// Events have their own types now.
sologenic.on('queued', (event: SologenicTypes.QueuedEvent) => {
  console.log('GLOBAL QUEUED: ', event);
});
sologenic.on('dispatched', (event: SologenicTypes.DispatchedEvent) => {
  console.log('GLOBAL DISPATCHED:', event);
});
sologenic.on('requeued', (event: SologenicTypes.RequeuedEvent) => {
  console.log('GLOBAL REQUEUED:', event);
});
sologenic.on('warning', (event: SologenicTypes.WarningEvent) => {
  console.log('GLOBAL WARNING:', event);
});
sologenic.on('validated', (event: SologenicTypes.ValidatedEvent) => {
  console.log('GLOBAL VALIDATED:', event);
});
sologenic.on('failed', (event: SologenicTypes.FailedEvent) => {
  console.log('GLOBAL FAILED:', event);
});

await sologenic.setAccount({
  address: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
  keypair: {
    publicKey: 'my public key with permission to sign transaction for address',
    privateKey: 'my private key with permission to sign transactions for address'
  }
});

const tx = sologenic.submit({
  TransactionType: 'Payment',
  Account: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
  Destination: 'rUwty6Pf4gzUmCLVuKwrRWPYaUiUiku8Rg',
  Amount: {
    currency: '534F4C4F00000000000000000000000000000000',
    issuer: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
    value: '100000000'
  }
});

// Events have their own types now.
tx.events.on('queued', (event: SologenicTypes.QueuedEvent) => {
  console.log('TX QUEUED: ', event);
}).on('dispatched', (event: SologenicTypes.DispatchedEvent) => {
  console.log('TX DISPATCHED:', event);
}).on('requeued', (event: SologenicTypes.RequeuedEvent) => {
  console.log('TX REQUEUED:', event);
}).on('warning', (event: SologenicTypes.WarningEvent) => {
  console.log('TX WARNING:', event);
}).on('validated', (event: SologenicTypes.ValidatedEvent) => {
  console.log('TX VALIDATED:', event);
});.on('failed', (event: SologenicTypes.FailedEvent) => {
  console.log('TX FAILED:', event);
});
```

## Transactions

Each transaction that is created by the `sologenic-xrpl-stream-js` library will have a unique `uuidv4` that is used for tracking purposes in the queue system.  The `tx.id` is not the same as the XRPL ledger hash.

Example snippet from `src/lib/sologenictxhandler.ts`

```typescript
public submit(tx: SologenicTypes.TX): SologenicTypes.TransactionObject {
  try {
    // Generate a unique ID using the uuid library
    const id = uuid();

    // Add a new EventEmitter to txEvents array identifiable with the generated id.
    this.txEvents![id] = new EventEmitter();
    this._initiateTx(id, tx);
 ```

 When you are receiving events while the transaction is undergoing processing in the XRPL, you'll receive your transaction ID which can be then used to verify your transaction has been completed.  In addition, once the transaction has been validated in the XRPL, you will notice that the `tx.id` is appended to a memo-field within the transaction itself.

 The `tx.id` field is non-async and does not change if the transaction is requeued or failed so that you have the option of going back to check the state.
