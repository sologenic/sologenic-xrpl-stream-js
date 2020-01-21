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
import { EventEmitter } from 'events';

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
    trace: false
  };

  let thOptions: SologenicTypes.TransactionHandlerOptions = {
    queueType: SologenicTypes.QUEUE_TYPE_STXMQ_REDIS
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

  const valid_account: SologenicTypes.Account = <any>(
    (<any>t.context).valid_account
  );
  const invalid_account: SologenicTypes.Account = <any>(
    (<any>t.context).invalid_account
  );

  try {
    await handler.setAccount(invalid_account);
    t.pass();

  } catch (error) {
    t.log(error);
    t.fail(error);
  }

  await t.notThrowsAsync(handler.setAccount(valid_account));
});

test('submit transaction to xrp ledger on redis queue', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    await handler.setAccount(<any>(<any>t.context).valid_account);

    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: 'AccountSet'
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);
    let events: EventEmitter = transaction!.events;

    t.true(events instanceof EventEmitter);

    let rtx: SologenicTypes.ResolvedTX = await transaction.promise;
    if (rtx) {
      t.true(
        typeof rtx.accountSequence !== undefined,
        'Verify account sequence is a number'
      );
      t.true(
        typeof rtx.fee === 'string',
        'Verify fee is a string (0.00012 currently)'
      );
      t.true(typeof rtx.ledgerVersion === 'number', 'Verify ledger version');
      t.true(typeof rtx.timestamp === 'string', 'Verify timestamp');

      t.true(rtx.hash.length === 64);

      const xrplTransaction = await handler
        .getRippleApi()
        .getTransaction(rtx.hash);

      t.is(xrplTransaction.outcome!.result, 'tesSUCCESS');

      t.true(rtx.hash === xrplTransaction.id);
      t.true(rtx.accountSequence === xrplTransaction.sequence);
      t.true(xrplTransaction.type === 'settings');
      t.true(
        xrplTransaction.address === <any>(<any>t.context).valid_account.address
      );
    } else {
      t.fail('Resolved TX not resolved');
    }
  } catch (error) {
    t.fail(`Caught an exception, failing test case = ${error}`);
  }
});
