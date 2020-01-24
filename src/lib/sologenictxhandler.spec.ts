/*
If you have problems running these test cases due to a SSL certificate
issue with the s.devnet.rippletest.net and the nodejs SSL CA bundle, run
the test cases with the environment variable:

$ NODE_TLS_REJECT_UNAUTHORIZED=0 npm run watch
*/

import test from 'ava';

import * as SologenicTypes from '../types';
import { SologenicTxHandler } from './sologenictxhandler';
import { SologenicError } from './error';
import { TXMQƨ } from './stxmq';

const pEvent = require('p-event');

const axios = require('axios');
const _ = require('underscore');

const NETWORK_LIST = {
  dev: {
    wss: 'wss://s.devnet.rippletest.net:51233',
    faucet: 'https://faucet.devnet.rippletest.net/accounts'
  },

  test: {
    wss: 'wss://s.altnet.rippletest.net:51233',
    faucet: 'https://faucet.altnet.rippletest.net/accounts'
  }
}

const NETWORK = NETWORK_LIST.dev;

/* Use before each so we use a different address for each request */
test.beforeEach(async t => {
  _.extend(t.context, {
    server: NETWORK.wss,
    faucet: NETWORK.faucet
  });

  let valid_account_result = await axios.post((<any>t.context).faucet);
  let invalid_account_result = await axios.post((<any>t.context).faucet);
  let empty_account_result = await axios.post((<any>t.context).faucet);

  /*
  t.log(valid_account_result);
  t.log(invalid_account_result);
  t.log(empty_account_result);
  */

  _.extend(t.context, {
    invalid_account: {
      address: invalid_account_result.data.account.address,
      secret: invalid_account_result.data.account.secret
    },
    valid_account: {
      address: valid_account_result.data.account.address,
      secret: valid_account_result.data.account.secret
    },
    empty_account: {
      address: empty_account_result.data.account.address,
      secret: empty_account_result.data.account.secret
    }
  });

  let rippleOptions: SologenicTypes.RippleAPIOptions = {
    server: (<any>t.context).server,
    trace: false
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

test('sologenic stxmq initialization', t => {
  t.notThrows(() => {
    new TXMQƨ({
      queueType: SologenicTypes.QUEUE_TYPE_STXMQ_HASH
    });
  });
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
    t.fail(error);
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
    t.fail();
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
      .on('validated', (dispatched: SologenicTypes.dispatchedTX, result: SologenicTypes.txResult) => {
        t.true(dispatched != null);
        t.is(result.status, 'tesSUCCESS');
      })
      .on('failed', (type: any, code: any) => {
        t.fail(type);
        t.fail(code);
      });

    await transaction.promise;
  } catch (error) {
    t.fail(error);
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

test('transaction should fail with insufficient fee', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    await handler.setAccount(<any>(<any>t.context).valid_account);

    handler.fetchCurrentState();
    handler.setLedgerBaseFeeXRP('0');

    // See flags at https://xrpl.org/accountset.html
    let tx: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    let transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    let [, code] = await pEvent(transaction.events, 'requeued', { multiArgs: true });
    t.is(code.result.status, 'telINSUF_FEE_P');

    let [, fcode] = await pEvent(transaction.events, 'failed', { multiArgs: true });
    t.is(fcode, 'invalid_xrp_address');

  } catch (error) {
    t.fail(error);
  }
});

test('transaction should fail because not enough funds are available', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    await handler.setAccount(<any>(<any>t.context).empty_account);

    // See flags at https://xrpl.org/accountset.html
    let tx1: SologenicTypes.TX = {
      Account: <any>(<any>t.context).empty_account.address,
      TransactionType: 'Payment',
      Amount: handler.getRippleApi().xrpToDrops('99999'),
      Destination: <any>(<any>t.context).valid_account.address
    };

    // Send all funds out of this account to our valid_account, then
    // we'll send another transaction which will not be successful
    // because we'll be out of funds.

    let transaction1: SologenicTypes.TransactionObject = handler.submit(tx1);
    let [, code] = await pEvent(transaction1.events, 'failed', { multiArgs: true });

    t.is(code, 'tecUNFUNDED_PAYMENT');

  } catch (error) {
    t.fail(error);
  }
});

test('transaction should fail because account is not funded', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    let xrplAddress = handler.getRippleApi().generateAddress();

    await handler.setAccount(<any>(<any>t.context).valid_account);

    // Activate the new account
    let tx1: SologenicTypes.TX = {
      Account: <any>(<any>t.context).valid_account.address,
      TransactionType: 'Payment',
      Amount: handler.getRippleApi().xrpToDrops('20'),
      Destination: xrplAddress.address
    };

    let transaction1: SologenicTypes.TransactionObject = handler.submit(tx1);
    await pEvent(transaction1.events, 'validated');

    // With the newly activated account perform an underfunded transaction
    await handler.setAccount({
      'address': xrplAddress.address,
      'secret': xrplAddress.secret
    });

    // See flags at https://xrpl.org/accountset.html
    let tx2: SologenicTypes.TX = {
      Account: xrplAddress.address,
      TransactionType: 'Payment',
      Amount: handler.getRippleApi().xrpToDrops('100'),
      Destination: <any>(<any>t.context).valid_account.address
    };

    let transaction2: SologenicTypes.TransactionObject = handler.submit(tx2);

    let tx2Promise = <any> await transaction2.promise;
    t.is(tx2Promise.result.reason, 'tecUNFUNDED_PAYMENT');

  } catch (error) {
    t.fail(error);
  }
});

test('transaction should return next sequence', async t => {
  try {
    let handler: SologenicTxHandler = (<any>t.context)!.handler;

    await handler.setAccount(<any>(<any>t.context).valid_account);
    handler.setAccountSequence(0);

    let sequence = <Number> await handler.fetchCurrentState();
    t.true(sequence != 0);

  } catch (error) {
    t.fail(error);
  }
});
