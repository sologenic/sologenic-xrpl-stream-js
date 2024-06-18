"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const offline_1 = require("../../lib/signing/offline");
const account_1 = __importDefault(require("../../lib/account"));
const binaryCodec = require('ripple-binary-codec');
const test = ava_1.default;
test.serial("sign a transaction and verify the signature", async (t) => {
    const account = new account_1.default("rE3uRzyUuKCFGuuUSKPPz7MeLcbckeuczu", "snevTM71p4xj5ZQcnBvpHeb9P3Umn");
    const txJson = {
        Account: account.getAddress(),
        TransactionType: 'AccountSet',
        SetFlag: 1
    };
    const signer = new offline_1.OfflineSigner({});
    // Encode transaction and sign
    const signedTx = await signer.sign(txJson, "1234", account, {});
    // Decode the transaction
    const decodedTransaction = binaryCodec.decode(signedTx.signedTransaction);
    t.is(decodedTransaction.TransactionType, txJson.TransactionType);
    t.is(decodedTransaction.SetFlag, txJson.SetFlag);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Rlc3RzL3NpZ25pbmcvb2ZmbGluZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQTJDO0FBRTNDLHVEQUEwRDtBQUMxRCxnRUFBNEM7QUFHNUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFbkQsTUFBTSxJQUFJLEdBQUcsYUFHWCxDQUFDO0FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2Q0FBNkMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDbkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBVyxDQUM3QixvQ0FBb0MsRUFDcEMsK0JBQStCLENBQUMsQ0FBQztJQUVuQyxNQUFNLE1BQU0sR0FBRztRQUNiLE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFO1FBQzdCLGVBQWUsRUFBRSxZQUFZO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLElBQUksdUJBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVyQyw4QkFBOEI7SUFDOUIsTUFBTSxRQUFRLEdBQWEsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTFFLHlCQUF5QjtJQUN6QixNQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFMUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQyJ9