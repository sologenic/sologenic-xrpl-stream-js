import test from 'ava';
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
  });

  t.throws(() => {
    new XrplAccount(address, undefined, undefined, keypair.privateKey);
  }, {
    instanceOf: XrplKeypairException
  });

  t.notThrows(() => {
    new XrplAccount(address, undefined, keypair.publicKey, keypair.privateKey);
  });

  t.false(new XrplAccount(address, undefined, keypair.publicKey, keypair.privateKey).hasSecret());
  t.true(new XrplAccount(address, undefined, keypair.publicKey, keypair.privateKey).hasKeypair());

  t.throws(() => {
    new XrplAccount(address, undefined, undefined, undefined)
  }, {
    instanceOf: XrplKeypairOrSecretMissingException
  });
});
