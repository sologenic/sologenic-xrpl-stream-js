/*
If you have problems running these test cases due to a SSL certificate
issue with the s.devnet.rippletest.net and the nodejs SSL CA bundle, run
the test cases with the environment variable:

$ NODE_TLS_REJECT_UNAUTHORIZED=0 npm run watch
*/

import test from 'ava';
import util from 'util';

import *  as SologenicTypes from '../types';

import SologenicTxHandler from './sologenictxhandler';

import { SologenicError } from './error';
import { EventEmitter } from 'events';

const axios = require('axios');
const _ = require('underscore');

/* Use before each so we use a different address for each request */
test.beforeEach(async t => {
  _.extend(t.context, {
    server: "wss://s.devnet.rippletest.net:51233",
    faucet: "https://faucet.devnet.rippletest.net/accounts",
    invalid_account: {
      address: 'foo',
      secret: 'bar'
    }
  });

  let result = await axios.post((<any>t.context).faucet);

  // Give the XRPL some (2.5s) time to settle after generating
  // a wallet through the XRPL faucet, we want to make sure our
  // address is recognized by the ledger otherwise we get
  // an 'invalid_xrp_address' error. (sad face)

  await util.promisify(setTimeout)(2500);

  t.is(typeof(result.data!.account), 'object');

  _.extend(t.context, {
    valid_account: {
      address: result.data.account.address,
      secret: result.data.account.secret
    }
  });

  t.true((<any>(<any>t.context).valid_account).address !== undefined);
  t.true((<any>(<any>t.context).invalid_account).address !== undefined);
});

test('sologenic tx hash initialization', async t => {
  let rippleOptions: SologenicTypes.RippleAPIOptions = {
    server: (<any>t.context).server
  };

  let thOptions: SologenicTypes.TransactionHandlerOptions = {
    queueType: SologenicTypes.QUEUE_TYPE_STXMQ_HASH
  };

  let handler = new SologenicTxHandler(rippleOptions, thOptions);
  await handler.connect();

  const valid_account: SologenicTypes.Account = (<any>(<any>t.context).valid_account);
  const invalid_account: SologenicTypes.Account = (<any>(<any>t.context).invalid_account);

  await t.throwsAsync<SologenicError>(handler.setAccount(invalid_account));

  await t.notThrowsAsync(handler.setAccount(valid_account));
});

test('sologenic tx redis initialization', async t => {
  let rippleOptions: SologenicTypes.RippleAPIOptions = {
    server: (<any>t.context).server,
    trace: false
  };

  let thOptions: SologenicTypes.TransactionHandlerOptions = {
    queueType: SologenicTypes.QUEUE_TYPE_STXMQ_REDIS
  };

  let handler = new SologenicTxHandler(rippleOptions, thOptions);
  await handler.connect();

  const valid_account: SologenicTypes.Account = (<any>(<any>t.context).valid_account);
  const invalid_account: SologenicTypes.Account = (<any>(<any>t.context).invalid_account);

  await t.throwsAsync<SologenicError>(handler.setAccount(invalid_account));

  await t.notThrowsAsync(handler.setAccount(valid_account));
});

test('submit transaction to xrp ledger on hash queue', async t => {
  try {
    let rippleOptions: SologenicTypes.RippleAPIOptions = {
      server: (<any>t.context).server,
      trace: false
    };

    let thOptions: SologenicTypes.TransactionHandlerOptions = {
      queueType: SologenicTypes.QUEUE_TYPE_STXMQ_HASH
    };

    let handler: SologenicTxHandler = new SologenicTxHandler(rippleOptions, thOptions);
    await handler.connect();

    await handler.setAccount(<any>(<any>t.context).valid_account);

    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: "AccountSet",
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    let events: EventEmitter = transaction!.events;

    t.true(events instanceof EventEmitter);

    events.on('queued', function(/*e*/) {
      // console.debug("Queued event = " + e);
      // console.debug(e);
    }).on('dispatched', function(/*e*/) {
      // console.debug("Dispatched event = " + e);
      // console.debug(e);
    }).on('requeued', function(/*e*/) {
      // console.debug("Requeued event = " + e);
      // console.debug(e);
    }).on('warning', function(/*e*/) {
      // console.debug("Warning event = " + e);
      // console.debug(e);
    }).on('validated', function(/*e*/) {
      // console.debug("Validated event = " + e);
      // console.debug(e);
    });

    let rtx: SologenicTypes.ResolvedTX = await transaction.promise;

    if (rtx) {
      t.true(typeof(rtx.accountSequence) !== undefined, 'Verify account sequence is a number');
      t.true(typeof(rtx.fee) === 'string', 'Verify fee is a string (0.00012 currently)');
      t.true(typeof(rtx.ledgerVersion) === 'number', 'Verify ledger version');
      t.true(typeof(rtx.timestamp) === 'string', 'Verify timestamp');
      t.true(rtx.hash.length === 64);
    } else {
      t.fail("Resolved TX not resolved");
    }
  } catch (error) {
    t.fail(`Caught an exception, failing test case = ${error}`);
  }
});

test('submit transaction to xrp ledger on redis queue', async t => {
  try {
    let rippleOptions: SologenicTypes.RippleAPIOptions = {
      server: (<any>t.context).server
    };

    let thOptions: SologenicTypes.TransactionHandlerOptions = {
      queueType: SologenicTypes.QUEUE_TYPE_STXMQ_REDIS
    };

    let handler: SologenicTxHandler = new SologenicTxHandler(rippleOptions, thOptions);
    await handler.connect();

    await handler.setAccount(<any>(<any>t.context).valid_account);

    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: "AccountSet",
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);
    let events: EventEmitter = transaction!.events;

    t.true(events instanceof EventEmitter);

    events.on('queued', function(e) {
      t.log("Queued event = " + e);
    }).on('dispatched', function(e) {
      t.log("Dispatched event = " + e);
    }).on('requeued', function(e) {
      t.log("Requeued event = " + e);
    }).on('warning', function(e) {
      t.log("Warning event = " + e);
    }).on('validated', function(e) {
      t.log("Validated event = " + e);
    });

    handler.on('failed', function(/*e*/) {
      // Failed transaction
    });

    let rtx: SologenicTypes.ResolvedTX = await transaction.promise;

    if (rtx) {
      t.true(typeof(rtx.accountSequence) !== undefined, 'Verify account sequence is a number');
      t.true(typeof(rtx.fee) === 'string', 'Verify fee is a string (0.00012 currently)');
      t.true(typeof(rtx.ledgerVersion) === 'number', 'Verify ledger version');
      t.true(typeof(rtx.timestamp) === 'string', 'Verify timestamp');

      t.true(rtx.hash.length === 64);

      /*
      sologenictxhandler › submit transaction to xrp ledger on redis queue
      ℹ Queued event = [object Object]
      ℹ Dispatched event = [object Object]
      ℹ Validated event = [object Object]
      ℹ {
          accountSequence: 3278288,
          dispatchedSequence: 3278288,
          fee: '0.000012',
          hash: 'FF222D4C1775332C654F71744693A9A2C84772477ACCA3368B62A5F685B97A40',
          ledgerVersion: 3278289,
          timestamp: '2019-12-18T23:53:12.000Z',
        }
      ℹ {
          address: 'r2PXRXHHD3tXPzCh6pmy3PAGokFBmMaTo',
          id: 'FF222D4C1775332C654F71744693A9A2C84772477ACCA3368B62A5F685B97A40',
          outcome: {
            balanceChanges: {
              r2PXRXHHD3tXPzCh6pmy3PAGokFBmMaTo: Array [ … ],
            },
            fee: '0.000012',
            indexInLedger: 1,
            ledgerVersion: 3278289,
            orderbookChanges: {},
            result: 'tesSUCCESS',
            timestamp: '2019-12-18T23:53:12.000Z',
          },
          sequence: 3278288,
          specification: {},
          type: 'settings',
        }
      */

      const xrplTransaction = await handler.getRippleApi().getTransaction(rtx.hash);

      t.is(xrplTransaction.outcome!.result, 'tesSUCCESS');

      /*
       * Uncomment if you want to see the result of the resolved transaction and
       * XRPL transaction

      t.log(rtx);
      t.log(xrplTransaction);
      */

      t.true(rtx.hash === xrplTransaction.id);
      t.true(rtx.accountSequence === xrplTransaction.sequence);
      t.true(xrplTransaction.type === "settings");
      t.true(xrplTransaction.address === <any>(<any>t.context).valid_account.address);

    } else {
      t.fail("Resolved TX not resolved");
    }
  } catch (error) {
    t.fail(`Caught an exception, failing test case = ${error}`);
  }
});
