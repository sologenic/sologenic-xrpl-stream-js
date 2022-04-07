"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DcentSigner = void 0;
const index_1 = require("./index");
const error_1 = require("../error");
const binaryCodec = require('ripple-binary-codec');
const DcentWebConnector = require('dcent-web-connector');
class DcentSigner extends index_1.SologenicTxSigner {
    constructor(options) {
        super(options);
        this.signerID = 'dcent';
        this.bip32Path = "m/44'/144'/0'/0/0";
        this.address = '';
        this.includeSequence = true;
    }
    async requestConnection() {
        try {
            // Request connection to Ledger Device (Speculos uses http, the actual device use webusb)
            const dcentInfo = await DcentWebConnector.getAccountInfo();
            const ripple_account = dcentInfo.body.parameter.account.find((acc) => acc.coin_name === 'RIPPLE');
            if (typeof ripple_account === 'undefined') {
                throw new Error('Ripple Account Not Found.');
            }
            const ripple_address = await DcentWebConnector.getAddress('ripple', ripple_account.address_path);
            if (ripple_address.body.parameter.address) {
                DcentWebConnector.popupWindowClose();
            }
            this.address = ripple_address.body.parameter.address;
            return {
                address: ripple_address.body.parameter.address
            };
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async sign(txJson, txId, _account, _signingOptions = {}) {
        try {
            if (txJson.TransactionMetadata)
                delete txJson.TransactionMetadata;
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 100;
            const signedTX = await DcentWebConnector.getXrpSignedTransaction(txJson, this.bip32Path);
            txJson.SigningPubKey = signedTX.body.parameter.pubkey.toUpperCase();
            txJson.TxnSignature = signedTX.body.parameter.sign.toUpperCase();
            // Return the signed transaction
            DcentWebConnector.popupWindowClose();
            return {
                id: txId,
                signedTransaction: binaryCodec.encode(txJson)
            };
        }
        catch (e) {
            // This error is thrown if the user rejects the transaction on the D'Cent
            if (e.body.error.code === 'user_cancel') {
                DcentWebConnector.popupWindowClose();
                throw new error_1.SologenicError('2003');
            }
            throw new error_1.SologenicError('1000');
        }
    }
}
exports.DcentSigner = DcentSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNlbnRfc2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zaWduaW5nL2RjZW50X3NpZ25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxtQ0FBNEM7QUFDNUMsb0NBQTBDO0FBQzFDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25ELE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFekQsTUFBYSxXQUFZLFNBQVEseUJBQWlCO0lBS2hELFlBQVksT0FBWTtRQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFMakIsYUFBUSxHQUFXLE9BQU8sQ0FBQztRQUNqQixjQUFTLEdBQVcsbUJBQW1CLENBQUM7UUFDeEMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUk3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFJO1lBQ0YseUZBQXlGO1lBQ3pGLE1BQU0sU0FBUyxHQUFHLE1BQU0saUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFM0QsTUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDMUQsQ0FBQyxHQUEwQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FDM0QsQ0FBQztZQUVGLElBQUksT0FBTyxjQUFjLEtBQUssV0FBVyxFQUFFO2dCQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDOUM7WUFFRCxNQUFNLGNBQWMsR0FBRyxNQUFNLGlCQUFpQixDQUFDLFVBQVUsQ0FDdkQsUUFBUSxFQUNSLGNBQWMsQ0FBQyxZQUFZLENBQzVCLENBQUM7WUFFRixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDekMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ3JELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87YUFDL0MsQ0FBQztTQUNIO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUNSLE1BQXlCLEVBQ3pCLElBQVksRUFDWixRQUFzQixFQUN0QixrQkFBdUIsRUFBRTtRQUV6QixJQUFJO1lBQ0YsSUFBSSxNQUFNLENBQUMsbUJBQW1CO2dCQUFFLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ2xFLElBQUksTUFBTSxDQUFDLGtCQUFrQjtnQkFDM0IsTUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFdEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDOUQsTUFBTSxFQUNOLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztZQUVGLE1BQU0sQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWpFLGdDQUFnQztZQUNoQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JDLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDOUMsQ0FBQztTQUNIO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVix5RUFBeUU7WUFDekUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO2dCQUN2QyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNyQyxNQUFNLElBQUksc0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztZQUVELE1BQU0sSUFBSSxzQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztDQUNGO0FBNUVELGtDQTRFQyJ9