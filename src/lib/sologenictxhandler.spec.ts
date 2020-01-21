/*
If you have problems running these test cases due to a SSL certificate
issue with the s.devnet.rippletest.net and the nodejs SSL CA bundle, run
the test cases with the environment variable:

$ NODE_TLS_REJECT_UNAUTHORIZED=0 npm run watch
*/

import test from 'ava';
import util from 'util';

import * as SologenicTypes from '../types';
import { SologenicTxHandler } from './sologenictxhandler';
import { SologenicError } from './error';

const axios = require('axios');
const _ = require('underscore');

/* Use before each so we use a different address for each request */
test.beforeEach(async t => {
  _.extend(t.context, {
    server: 'wss://s.devnet.rippletest.net:51233',
    faucet: 'https://faucet.devnet.rippletest.net/accounts',
    // The invalid account will need to be replaced once its balance is
    // depleted, this will take quite some time before that happens however.
    invalid_account: {
      address: 'rfQoHxJsXoRVWZxZyJpigYeMC8fdnz8wak',
      secret: 'snmy3Yr94vaV15jxNPkPeAgbnanxY'
    }
  });

  let result = await axios.post((<any>t.context).faucet);

  // Give the XRPL some (2.5s) time to settle after generating
  // a wallet through the XRPL faucet, we want to make sure our
  // address is recognized by the ledger otherwise we get
  // an 'invalid_xrp_address' error. (sad face)

  await util.promisify(setTimeout)(2500);

  t.is(typeof result.data!.account, 'object');

  _.extend(t.context, {
    valid_account: {
      address: result.data.account.address,
      secret: result.data.account.secret
    }
  });

  t.true((<any>(<any>t.context).valid_account).address !== undefined);
  t.true((<any>(<any>t.context).invalid_account).address !== undefined);

  let rippleOptions: SologenicTypes.RippleAPIOptions = {
    server: (<any>t.context).server,
    trace: true
  };

  let thOptions: SologenicTypes.TransactionHandlerOptions = {
    queueType: SologenicTypes.QUEUE_TYPE_STXMQ_HASH
  };

  _.extend(t.context, {
    handler: await (new SologenicTxHandler(rippleOptions, thOptions).connect())
  });
});

test.afterEach(async t => {
  let handler: SologenicTxHandler = (<any>t.context)!.handler;

  if (handler.getRippleApi().isConnected())
    await handler.getRippleApi().disconnect();
});

test('sologenic tx hash initialization', async t => {
  let handler: SologenicTxHandler = (<any>t.context)!.handler;

  let valid_account: SologenicTypes.Account = <any>(
    (<any>t.context).valid_account
  );

  await t.throwsAsync<SologenicError>(handler.setAccount({
    address: 'foobar',
    secret: 'barbaz'
  }));

  await t.notThrowsAsync(handler.setAccount(valid_account));
});

test('transaction to sologenic xrpl stream', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    await handler.setAccount(<any>(<any>t.context).valid_account);

    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: 'AccountSet'
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    let eventsReceived: Array<string> = [];

    // noUnusedLocals is enabled in the tsconfig, so we access the object at least once
    transaction.events
      .on('queued', tx => {
        tx;

        eventsReceived.push('queued');
      })
      .on('dispatched', (tx, dispatched) => {
        tx; dispatched;

        eventsReceived.push('dispatched');
      })
      .on('requeued', (tx, result) => {
        tx; result;

        eventsReceived.push('requeued');
      })
      .on('warning', (type, code) => {
        type; code;

        eventsReceived.push('warning');
      })
      .on('validated', (dispatched, result) => {
        dispatched; result;

        eventsReceived.push('validated');
      })
      .on('failed', (type, code) => {
        type; code;

        eventsReceived.push('failed');
      });

    let resolvedTx: SologenicTypes.ResolvedTX = await transaction.promise;

    t.true(
      typeof resolvedTx.accountSequence !== undefined,
      'Verify account sequence is a number'
    );

    t.true(
      typeof resolvedTx.fee === 'string',
      'Verify fee is a string (0.00012 currently)'
    );

    t.true(typeof resolvedTx.ledgerVersion === 'number', 'Verify ledger version');
    t.true(typeof resolvedTx.timestamp === 'string', 'Verify timestamp');
    t.true(resolvedTx.hash.length === 64);

    t.false(eventsReceived.includes('failed'))
    t.true(eventsReceived.includes('queued'));
    t.true(eventsReceived.includes('dispatched'));
    t.true(eventsReceived.includes('validated'));

  } catch (error) {
    t.fail(`Caught an exception, failing test case = ${error}`);
  }
});

// https://xrpl.org/transaction-results.html
test('transaction should fail immediately (invalid flags)', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;
    await handler.setAccount(<any>(<any>t.context).valid_account);

    // See flags at https://xrpl.org/accountset.html
    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: 'AccountSet',
      SetFlag: -1
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    transaction.events
      .on('failed', (type: any, code: any) => {
        t.is(code, '-1 not in range 0 <= $val <= 4294967295');
        t.is(type, 'dispatch');
      });

    await transaction.promise;
  } catch (error) {
    t.fail(error);
  }
});

test('transaction should be successful', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    await handler.setAccount(<any>(<any>t.context).valid_account);

    // See flags at https://xrpl.org/accountset.html
    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    transaction.events
      .on('validated', (dispatched: any, result: any) => {
        t.true((<any>dispatched).unsignedTX != null);
        t.true(result!.status === 'tesSUCCESS');
      })
      .on('failed', (type: any, code: any) => {
        t.fail(type);
        t.fail(code);
      });

    await transaction.promise;
  } catch (error) {
    t.log(error);
  }
});

test('transaction should fail with invalid_xrp_address', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    await handler.setAccount(<any>(<any>t.context).invalid_account);

    // See flags at https://xrpl.org/accountset.html
    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    transaction.events
      .on('failed', (type: any, code: any) => {
        t.is(code, 'invalid_xrp_address');
        t.is(type, 'dispatch');
      });

    await transaction.promise;
  } catch (error) {
    t.log(error);
  }
});
