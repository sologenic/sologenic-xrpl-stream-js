import test from 'ava';
import * as SologenicTypes from '../types';
import { SologenicTxHandler } from '../lib/txhandler';
import XrplAccount, { XrplAddressException, XrplSecretException, XrplKeypairException, XrplKeypairOrSecretMissingException } from '../lib/account';
import { generateSeed, deriveAddress, deriveKeypair } from 'ripple-keypairs';

test.serial('validate backwards compatibility, using secret wallets', async function(t) {
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

    await sologenic.submit({
      TransactionType: 'Payment',
      Account: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      Destination: 'rUwty6Pf4gzUmCLVuKwrRWPYaUiUiku8Rg',
      Amount: {
        currency: '534F4C4F00000000000000000000000000000000',
        issuer: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
        value: '100000000'
      }
    }).promise;

  } catch (error) {
    t.fail(error);
  }
});

test.serial('validate backwards compatibility, using keypair', async function(t) {
  const seed = 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv';
  const keypair = deriveKeypair(seed);
  const address = deriveAddress(keypair.publicKey);

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

    await sologenic.setAccount(<SologenicTypes.Account>{
      address: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      keypair: {
        publicKey: keypair.publicKey,
        privateKey: keypair.privateKey
      }
    });

    t.is(sologenic.getAccount().getAddress(), address);
    t.is(sologenic.getAccount().getSecret(), undefined);
    t.is(sologenic.getAccount().getKeypair().publicKey, keypair.publicKey);
    t.is(sologenic.getAccount().getKeypair().privateKey, keypair.privateKey);

    await sologenic.submit({
      TransactionType: 'Payment',
      Account: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
      Destination: 'rUwty6Pf4gzUmCLVuKwrRWPYaUiUiku8Rg',
      Amount: {
        currency: '534F4C4F00000000000000000000000000000000',
        issuer: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
        value: '100000000'
      }
    }).promise;

  } catch (error) {
    t.fail(error);
  }
});


