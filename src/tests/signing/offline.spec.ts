import anyTest, {TestInterface} from 'ava';

import { OfflineSigner } from '../../lib/signing/offline';
import XrplAccount from '../../lib/account';
import * as SologenicTypes from '../../types';

const binaryCodec = require('ripple-binary-codec');

const test = anyTest as TestInterface<{
  session: any,
  data: any
}>;

test.serial("sign a transaction and verify the signature", async t => {
  const account = new XrplAccount(
    "rE3uRzyUuKCFGuuUSKPPz7MeLcbckeuczu",
    "snevTM71p4xj5ZQcnBvpHeb9P3Umn");

  const txJson = {
    Account: account.getAddress(),
    TransactionType: 'AccountSet',
    SetFlag: 1
  };

  const signer = new OfflineSigner({});

  // Encode transaction and sign
  const signedTx: SologenicTypes.SignedTx = await signer.sign(txJson, "1234", account, {});

  // Decode the transaction
  const decodedTransaction = binaryCodec.decode(signedTx.signedTransaction);

  t.is(decodedTransaction.TransactionType, txJson.TransactionType);
  t.is(decodedTransaction.SetFlag, txJson.SetFlag);
});

test.serial("sign a transaction and verify the flags", async t => {
  const account = new XrplAccount(
    "rE3uRzyUuKCFGuuUSKPPz7MeLcbckeuczu",
    "snevTM71p4xj5ZQcnBvpHeb9P3Umn");

  const txJson = {
    Account: account.getAddress(),
    TransactionType: 'AccountSet',
    SetFlag: 1
  };

  const signer = new OfflineSigner({});

  // Encode transaction and sign
  const signedTx: SologenicTypes.SignedTx = await signer.sign(txJson, "1234", account, {});

  // Decode the transaction
  const decodedTransaction = binaryCodec.decode(signedTx.signedTransaction);

  t.is(decodedTransaction.TransactionType, txJson.TransactionType);
  t.is(decodedTransaction.SetFlag, txJson.SetFlag);

  // Verify the tfFullyCanonicalSig is set.
  t.is((decodedTransaction.Flags & 0x80000000) >>> 0, 2147483648);
});
