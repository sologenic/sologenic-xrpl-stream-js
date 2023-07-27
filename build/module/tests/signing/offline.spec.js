import anyTest from 'ava';
import { OfflineSigner } from '../../lib/signing/offline';
import XrplAccount from '../../lib/account';
const binaryCodec = require('ripple-binary-codec');
const test = anyTest;
test.serial("sign a transaction and verify the signature", async (t) => {
    const account = new XrplAccount("rE3uRzyUuKCFGuuUSKPPz7MeLcbckeuczu", "snevTM71p4xj5ZQcnBvpHeb9P3Umn");
    const txJson = {
        Account: account.getAddress(),
        TransactionType: 'AccountSet',
        SetFlag: 1
    };
    const signer = new OfflineSigner({});
    // Encode transaction and sign
    const signedTx = await signer.sign(txJson, "1234", account, {});
    // Decode the transaction
    const decodedTransaction = binaryCodec.decode(signedTx.signedTransaction);
    t.is(decodedTransaction.TransactionType, txJson.TransactionType);
    t.is(decodedTransaction.SetFlag, txJson.SetFlag);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Rlc3RzL3NpZ25pbmcvb2ZmbGluZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBd0IsTUFBTSxLQUFLLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sV0FBVyxNQUFNLG1CQUFtQixDQUFDO0FBRzVDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sSUFBSSxHQUFHLE9BR1gsQ0FBQztBQUVILElBQUksQ0FBQyxNQUFNLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ25FLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUM3QixvQ0FBb0MsRUFDcEMsK0JBQStCLENBQUMsQ0FBQztJQUVuQyxNQUFNLE1BQU0sR0FBRztRQUNiLE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFO1FBQzdCLGVBQWUsRUFBRSxZQUFZO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXJDLDhCQUE4QjtJQUM5QixNQUFNLFFBQVEsR0FBYSxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFMUUseUJBQXlCO0lBQ3pCLE1BQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUUxRSxDQUFDLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDIn0=