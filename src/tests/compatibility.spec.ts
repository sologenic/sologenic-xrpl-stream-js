import test from 'ava';
import * as SologenicTypes from '../types';
import { SologenicTxHandler } from '../lib/txhandler';
import XrplAccount, { XrplAddressException, XrplSecretException, XrplKeypairException, XrplKeypairOrSecretMissingException } from '../lib/account';
import { generateSeed, deriveAddress, deriveKeypair } from 'ripple-keypairs';

test.serial('validate backwards compatibility', async function(t) {
  const seed = 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv';
  const keypair = deriveKeypair(seed);
  const address = deriveAddress(keypair.publicKey);

  const xrplAccount = new XrplAccount(address, seed, keypair.publicKey, keypair.privateKey);

  try {
    const sologenic = await new SologenicTxHandler(
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

    await sologenic.setAccount(<SologenicTypes.Account>{
      address: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      secret: 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv'
    });

    t.is(sologenic.getAccount().getAddress(), xrplAccount.getAddress());
    t.is(sologenic.getAccount().getSecret(), xrplAccount.getSecret());

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
    }).on('failed', (event: SologenicTypes.FailedEvent) => {
      console.log('TX FAILED:', event);
    });

    await tx.promise;

  } catch (error) {
    console.log('Error:', error);
  }
});


