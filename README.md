![sologenic-xrpl-stream-js](https://www.sologenic.com/images/solo-plain.png)

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

## Example

```js
'use strict';
const ƨ = require('sologenic-xrpl-stream-js');

(async () => {
  try {
    const sologenic = await new ƨ.SologenicTxHandler(
      // RippleAPI Options
      {
        server: 'wss://testnet.xrpl-labs.com' // Kudos to Wietse Wind
      },
      // Sologenic Options, hash or redis
      {
        clearCache: true,
        // queueType: "hash",
        // hash: {}

        queueType: 'redis',
        redis: {
          host: '127.0.0.1',
          port: 6379
        }
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
