import test from 'ava';
import util from 'util';

import *  as SologenicTypes from '../types';

import SologenicTxHandler from './sologenictxhandler';

import { SologenicError } from './error';
import { EventEmitter } from 'events';

const axios = require('axios');
const _ = require('underscore');

test.before(async t => { 
  _.extend(t.context, {  
    server: "wss://s.devnet.rippletest.net:51233",
    faucet: "https://faucet.devnet.rippletest.net/accounts",
    invalid_account: {
      address: 'foo',
      secret: 'bar'
    }
  });

  let result = await axios.post((<any>t.context).faucet);

  // Give the XRPL some (2.5s) time to settle before continuing since
  // we want to make sure our address is recognized by the ledger
  // otherwise we get an 'invalid_xrp_address' error.

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
    server: (<any>t.context).server
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

test('submit transaction to xrp ledger', async t => {
  let rippleOptions: SologenicTypes.RippleAPIOptions = {
    server: (<any>t.context).server
  };

  let thOptions: SologenicTypes.TransactionHandlerOptions = { 
    queueType: SologenicTypes.QUEUE_TYPE_STXMQ_HASH
  };
    
  let handler = new SologenicTxHandler(rippleOptions, thOptions);

  await handler.connect();
  await handler.setAccount(<any>(<any>t.context).valid_account);

  let tx: SologenicTypes.TX = {
    Account: <any>(<any>t.context).valid_account.address,
    TransactionType: "AccountSet",
  };

  let transaction: SologenicTypes.TransactionObject = handler.submit(tx);
  let events: EventEmitter = transaction!.events;

  t.true(events instanceof EventEmitter);

  events.on('queued', function() {    
    // console.debug("Queued event = " + e);
    // console.debug(e);
  }).on('dispatched', function() {
    // console.debug("Dispatched event = " + e);
    // console.debug(e);
  }).on('requeued', function() {
    // console.debug("Requeued event = " + e);
    // console.debug(e);
  }).on('warning', function() {
    // console.debug("Warning event = " + e);
    // console.debug(e);
  }).on('validated', function() { 
    // console.debug("Validated event = " + e);
    // console.debug(e);
  });

  let rtx: SologenicTypes.ResolvedTX = await transaction.promise;

  t.log(rtx);

  t.true(typeof(rtx.accountSequence) === 'number', 'Verify account sequence is a number');
  t.true(typeof(rtx.fee) === 'string', 'Verify fee is a string (0.00012 currently)');
  t.true(typeof(rtx.ledgerVersion) === 'number', 'Verify ledger version');
  t.true(typeof(rtx.timestamp) === 'string', 'Verify timestamp');

  t.true(rtx.hash.length === 64);
});