import test from 'ava';
import * as SologenicTypes from '../types';
import { SologenicTxHandler } from '../lib/txhandler';
import XrplAccount, { XrplAddressException, XrplSecretException, XrplKeypairException, XrplKeypairOrSecretMissingException } from '../lib/account';
import { generateSeed, deriveAddress, deriveKeypair } from 'ripple-keypairs';

test.serial('validate construction of account', async function(t) {
  const seed = generateSeed();
  const keypair = deriveKeypair(seed);
  const address = deriveAddress(keypair.publicKey);

  t.throws(() => {
    return XrplAccount.getAccount("", undefined, undefined, undefined)
  }, {
    instanceOf: XrplAddressException
  });

  t.throws(() => {
    return XrplAccount.getAccount(address, "", undefined, undefined)
  }, {
    instanceOf: XrplSecretException
  });

  t.throws(() => {
    return XrplAccount.getAccount(address, seed, keypair.publicKey, undefined)
  }, {
    instanceOf: XrplKeypairException
  });

  t.notThrows(() => {
    return XrplAccount.getAccount(address, undefined, keypair.publicKey, keypair.privateKey);
  });
});

test.serial('validate account with invalid address', async function(t) {
  const seed = generateSeed();
  const keypair = deriveKeypair(seed);
  const address = deriveAddress(keypair.publicKey);

  t.throws(() => {
    new XrplAccount("", undefined, undefined, undefined)
  }, {
    instanceOf: XrplAddressException
  });
});

test.serial('validate account with address, but invalid secret', async function(t) {
  const seed = generateSeed();
  const keypair = deriveKeypair(seed);
  const address = deriveAddress(keypair.publicKey);

  t.throws(() => {
    new XrplAccount(address, "", undefined, undefined)
  }, {
    instanceOf: XrplSecretException
  });
});

test.serial('validate account with address and secret is valid', async function(t) {
  const seed = generateSeed();
  const keypair = deriveKeypair(seed);
  const address = deriveAddress(keypair.publicKey);

  t.notThrows(() => {
    new XrplAccount(address, seed, undefined, undefined)
  });

  t.true(new XrplAccount(address, seed, undefined, undefined).hasSecret());
  t.false(new XrplAccount(address, seed, undefined, undefined).hasKeypair());
});

test.serial('validate account with address but invalid keypair combinations', async function(t) {
  const seed = generateSeed();
  const keypair = deriveKeypair(seed);
  const address = deriveAddress(keypair.publicKey);

  t.throws(() => {
    new XrplAccount(address, undefined, keypair.publicKey, undefined);
  }, {
    instanceOf: XrplKeypairException
  }, "Missing secret or private key");

  t.throws(() => {
    new XrplAccount(address, undefined, undefined, keypair.privateKey);
  }, {
    instanceOf: XrplKeypairException
  }, "Missing secret or public key");

  t.notThrows(() => {
    new XrplAccount(address, undefined, keypair.publicKey, keypair.privateKey);
  }, "Missing secret");

  t.false(new XrplAccount(address, undefined, keypair.publicKey, keypair.privateKey).hasSecret(), "Has secret");
  t.true(new XrplAccount(address, undefined, keypair.publicKey, keypair.privateKey).hasKeypair(), "Has keypair");
});
