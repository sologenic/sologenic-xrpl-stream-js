/*
If you have problems running these test cases due to a SSL certificate
issue with the s.devnet.rippletest.net and the nodejs SSL CA bundle, run
the test cases with the environment variable:

$ NODE_TLS_REJECT_UNAUTHORIZED=0 npm run watch
*/

import test from 'ava';

import *  as SologenicTypes from '../types';
import SologenicTxHandler from './sologenictxhandler';

// import { SologenicError } from './error';
// import { EventEmitter } from 'events';

const _ = require('underscore');

/* Use before each so we use a different address for each request */
test.before(async t => {
  _.extend(t.context, {
    server: "wss://s.devnet.rippletest.net:51233",
    faucet: "https://faucet.devnet.rippletest.net/accounts",
  });

  let master = {
    'account': {
      'address': 'rnhbLtRcM4PvdiPurLHCUW4Ne7mC34n11w',
      'secret': 'ssZn7oPLeHqVBNEFhPipbEEuLVDf7'
    }
  };

  let alice = {
    'account': {
      'address': 'rhqi7fh1Vq7ykn1hcjG6DCVj6urtj6SpAQ',
      'secret': 'sh1xoGnCVBKXMMqAaEMfNHyMa5Hef'
    }
  };

  let bob = {
    'account': {
      'address': 'rJB7dTeTkZzvrbErGJdrPdGVirG4okNwVM',
      'secret': 'ssbxEaHmxh6YhbeUr3XQNghtQ1qwJ'
    }
  };

  let charlie = {
    'account': {
      'address': 'rKvGgJoAx7N8H63R5bkjmHb9RGH2apjmiG',
      'secret': 'ssfnNzrBiwxu8eSSy1S3WfRcZpWV9'
    }
  };

  _.extend(t.context, {
    accounts: {
      master: master,
      alice: alice,
      bob: bob,
      charlie: charlie
    },
    xrplOptions: {
      server: (<any>t.context).server,
      trace: true
    },
    transactionHandlerOptions: {
      queueType: SologenicTypes.QUEUE_TYPE_STXMQ_HASH,
    }
  });

  /* Configure a SignerList */
  let handler = new SologenicTxHandler(
    (<any>t.context).xrplOptions,
    (<any>t.context).transactionHandlerOptions);

  await handler.connect();

  _.extend(t.context, {
    handler: handler
  });

  const signerListTx = {
    Flags: 0,
    TransactionType: "SignerListSet",
    Account: master!.account.address,
    Fee: "10000",
    SignerQuorum: 3,
    SignerEntries: [
      { SignerEntry: { Account: alice!.account.address, SignerWeight: 2 } },
      { SignerEntry: { Account: bob!.account.address, SignerWeight: 1 } },
      { SignerEntry: { Account: charlie!.account.address, SignerWeight: 1 } }
    ]};

    /* Get the next account sequence */
    const accountInfo = await handler.getRippleApi().getAccountInfo(master!.account.address);

    /* Prepare the signer set list transaction */
    const preparedTransaction = await handler.getRippleApi().prepareTransaction(signerListTx, {
      sequence: accountInfo.sequence,
    });

    const preparedTransactionJson = preparedTransaction.txJSON;

    /* Sign the transaction */
    const signedSignerListTxJson = handler.getRippleApi().sign(preparedTransactionJson, master!.account.secret);

    /* Submit the transaction to the ledger */
    let result = await handler.getRippleApi().submit(
      signedSignerListTxJson.signedTransaction);

    /* tesSUCCESS = 0 */
    t.is(result.resultCode, "tesSUCCESS");
    t.is(result.resultMessage, "The transaction was applied. Only final in a validated ledger.");
  });

test('send a transaction and fail with quorum requirements not being met', async t => {
  let handler = (<any>t.context).handler;

  /* 1,000,000 drops equals 1 XRP (we're sending 0.5 XRP) */
  let totalDrops = "500000";
  let feeInXrp = "0.00012";

  const paymentTx = {
      TransactionType: "Payment",
      Account: (<any>t.context).accounts.master.account.address,
      Amount: totalDrops,
      Destination: (<any>t.context).accounts.alice.account.address
    }

  /* Get the next account sequence */
  const accountInfo = await handler.getRippleApi().getAccountInfo((<any>t.context).accounts.master.account.address);

  /* Prepare the signer set list transaction */
  const preparedTransaction = await handler.getRippleApi().prepareTransaction(paymentTx, {
    sequence: parseInt(accountInfo.sequence) + 1,
    fee: feeInXrp
  });

  const preparedTransactionJson = preparedTransaction.txJSON;

  /* Sign the transaction as alice */
  const aliceSignedTransaction = handler.getRippleApi().sign(
    preparedTransactionJson,
    (<any>t.context).accounts.alice.account.secret, {
      signAs: (<any>t.context).accounts.alice.account.address
    });

  /* Combine the signatures */
  const signedTransaction = handler.getRippleApi().combine([
    aliceSignedTransaction.signedTransaction
  ]);

  /* Submit the transaction to the ledger */
  let result = await handler.getRippleApi().submit(
    signedTransaction.signedTransaction);

  t.is(result.resultCode, 'tefBAD_QUORUM');
  t.is(result.resultMessage, 'Signatures provided do not meet the quorum.');
});

test('send a transaction and pass with quorum requirements being met', async t => {
  let handler = (<any>t.context).handler;

  /* 1,000,000 drops equals 1 XRP (we're sending 0.5 XRP) */
  let totalDrops = "500000";
  let feeInXrp = "0.00012";

  const paymentTx = {
      TransactionType: "Payment",
      Account: (<any>t.context).accounts.master.account.address,
      Amount: totalDrops,
      Destination: (<any>t.context).accounts.alice.account.address
    }

  /* Get the next account sequence */
  const accountInfo = await handler.getRippleApi().getAccountInfo((<any>t.context).accounts.master.account.address);

  /* Prepare the signer set list transaction */
  const preparedTransaction = await handler.getRippleApi().prepareTransaction(paymentTx, {
    sequence: parseInt(accountInfo.sequence) + 1,
    fee: feeInXrp
  });

  const preparedTransactionJson = preparedTransaction.txJSON;

  /* Sign the transaction as alice */
  const aliceSignedTransaction = handler.getRippleApi().sign(
    preparedTransactionJson,
    (<any>t.context).accounts.alice.account.secret, {
      signAs: (<any>t.context).accounts.alice.account.address
    });

  /* Sign the transaction as alice */
  const bobSignedTransaction = handler.getRippleApi().sign(
    preparedTransactionJson,
    (<any>t.context).accounts.bob.account.secret, {
      signAs: (<any>t.context).accounts.bob.account.address
    });

  /* Combine the signatures */
  const signedTransaction = handler.getRippleApi().combine([
    aliceSignedTransaction.signedTransaction,
    bobSignedTransaction.signedTransaction
  ]);

  /* Submit the transaction to the ledger */
  let result = await handler.getRippleApi().submit(
    signedTransaction.signedTransaction);

  t.is(result.resultCode, 'tesSUCCESS');
  t.is(result.resultMessage, 'The transaction was applied. Only final in a validated ledger.');
});

test('check account after assignment to determine if it requires multi-signing', async t => {
  let handler: SologenicTxHandler = (<any>t.context).handler;

  /* 1,000,000 drops equals 1 XRP (we're sending 0.5 XRP) */

  /*
  let totalDrops = "500000";
  let feeInXrp = "0.00012";

  const paymentTx = {
      TransactionType: "Payment",
      Account: (<any>t.context).accounts.master.account.address,
      Amount: totalDrops,
      Destination: (<any>t.context).accounts.alice.account.address
    }
  */

  let xrpAccount: SologenicTypes.Account = {
    address: (<any>t.context).accounts.master.account.address,
    secret: (<any>t.context).accounts.master.account.secret
  };

  xrpAccount.address = (<any>t.context).accounts.master.account.address;
  xrpAccount.secret = (<any>t.context).accounts.master.account.secret;

  await handler.setAccount(xrpAccount);
  // await handler.connect();

  const account = handler.getAccount();

  if (!account) {
    throw new Error("Unable to load account");
  }

  t.is(account.signers!.length, 3);
  t.is(account.signers!.length, account.signer_quorum);
  t.is(account.signer_quorum, 3);
});
