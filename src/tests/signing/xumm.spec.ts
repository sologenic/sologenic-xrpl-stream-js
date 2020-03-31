import anyTest, {TestInterface} from 'ava';
import { SologenicError } from '../../lib/error';
import { XummSigner } from '../../lib/signing/xumm';

const test = anyTest as TestInterface<{
  session: any,
  data: any
}>;

test.serial("time out a signing a request with xumm", async t => {
  const xs = new XummSigner({
    xummApiKey: process.env.XUMM_API_KEY,
    xummApiSecret: process.env.XUMM_API_SECRET,
    maximumExecutionTime: 1000
  });

  const tx = {
    Account: 'rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt',
    TransactionType: 'AccountSet',
    SetFlag: 5
  };

  // Should immmediately throw an error because we have set our maximum execution time to 1ms
  await t.throwsAsync(async () => {
    await xs.sign(JSON.stringify(tx), "1234", undefined, undefined)
  }, { instanceOf: SologenicError });
});
