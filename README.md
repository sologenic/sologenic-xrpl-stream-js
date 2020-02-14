![sologenic-xrpl-stream-js](https://www.sologenic.com/images/solo-plain.png)

<!--ts-->
   * [<a href="https://www.sologenic.com" rel="nofollow">ƨ Sologenic Ecosystem</a>](#ƨ-sologenic-ecosystem)
   * [<a href="https://github.com/sologenic/sologenic-xrpl-stream-js">ƨ Sologenic XRPL Stream</a>](#ƨ-sologenic-xrpl-stream)
      * [How to Participate](#how-to-participate)
      * [Install](#install)
      * [Typescript Example](#typescript-example)
         * [Intializing the Sologenic XRPL stream with a hash-based queue](#intializing-the-sologenic-xrpl-stream-with-a-hash-based-queue)
         * [Intializing the Sologenic XRPL stream with a redis-based queue](#intializing-the-sologenic-xrpl-stream-with-a-redis-based-queue)
         * [Sending a Payment with XRPL account and secret](#sending-a-payment-with-xrpl-account-and-secret)
         * [Sending a Payment with XRPL account and keypair](#sending-a-payment-with-xrpl-account-and-keypair)

<!-- Added by: pmcconna, at: Thu Feb 13 16:11:43 PST 2020 -->

<!--te-->

# [&#x1a8; Sologenic Ecosystem](https://www.sologenic.com)

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

## Typescript Example

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
