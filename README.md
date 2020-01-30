![sologenic-xrpl-stream-js](https://www.sologenic.com/images/solo-plain.png)

# [&#x1a8; Sologenic Ecosystem](https://www.sologenic.com)

_&#x1a8;_ _sologenic_ is a sophisticated ecosystem that facilitates investing and trading of on-demand tokenized assets, including Stocks and ETFs from 25+ global exchanges on top of the XRP Ledger.

- [White Paper](https://www.sologenic.com/downloads/sologenic-whitepaper.pdf)

- [One Pager](https://www.sologenic.com/downloads/sologenic-onepage.pdf)

# [&#x1a8; Sologenic XRPL Stream](https://github.com/sologenic/sologenic-xrpl-stream-js)

## How to Participate

We have a community for questions and support at [sologenic-dev.slack.com](https://sologenic-dev.slack.com). To receive an invite for the community please fill out the [form](https://docs.google.com/forms/d/e/1FAIpQLSdcpIL-u2FsqBZj0ikG7UyJe3l9If7sVr7MdTpVnINQJJbsQg/viewform) and we'll send you your invite link.

## Install

```
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

    sologenic.on('queued', (id, tx) => {
      console.log('GLOBAL QUEUED: ', id, tx);
    });
    sologenic.on('dispatched', (id, tx) => {
      console.log('GLOBAL DISPATCHED:', id, tx);
    });
    sologenic.on('requeued', id => {
      console.log('GLOBAL REQUEUED:', id);
    });
    sologenic.on('warning', (id, type, reason) => {
      console.log('GLOBAL WARNING:', id, type, reason);
    });
    sologenic.on('validated', (id, result) => {
      console.log('GLOBAL VALIDATED:', id, result);
    });
    sologenic.on('failed', (id, type, reason) => {
      console.log('GLOBAL FAILED:', id, type, reason);
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

    tx.events
      .on('queued', tx => {
        console.log('QUEUED', tx);
      })
      .on('dispatched', (tx, dispatched) => {
        console.log('DISPATCHED', tx, dispatched);
      })
      .on('requeued', (tx, result) => {
        console.log('REQUEUED', tx, result);
      })
      .on('warning', (type, code) => {
        console.log('warning:', type, code);
      })
      .on('validated', (dispatched, result) => {
        console.log('VALIDATED', dispatched, result);
      })
      .on('failed', (type, code) => {
        console.log('failed:', type, code);
      });

    console.log(await tx.promise);
  } catch (error) {
    console.log('Error:', error);
  }
})();
```
