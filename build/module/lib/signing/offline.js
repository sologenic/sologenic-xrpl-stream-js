import { SologenicTxSigner } from './index';
import { Wallet } from 'xrpl';
export class OfflineSigner extends SologenicTxSigner {
    constructor(options) {
        super(options);
        this.signerID = 'offline';
        this.includeSequence = true;
    }
    requestConnection() {
        return true;
    }
    async sign(txJson, txId, account, signingOptions) {
        try {
            if (!this.wallet || this.wallet.classicAddress !== account.getAddress()) {
                // const { publicKey, privateKey } = account.getKeypair();
                // this.wallet = Wallet.fromSeed(account.getSecret());
                if (account.hasMnemonic()) {
                    this.wallet = Wallet.fromMnemonic(account.getMnemonic());
                }
                else {
                    this.wallet = Wallet.fromSeed(account.getSecret());
                }
            }
            // txJson.SigningPubKey = this.wallet.publicKey;
            delete txJson.SigningPubKey;
            if (!signingOptions) {
            }
            // Sign the transaction using the secret provided on init
            // console.log(Signing transaction txJson=${txJson}, secret=${account.secret}, keypair=${account.keypair})
            // Delete the transaction metadata if it exists since the signing will fail
            // as this TransactionMetadata is not known to the schema.
            if (txJson.TransactionMetadata) {
                delete txJson.TransactionMetadata;
            }
            if (txJson.LastLedgerSequence)
                txJson.LastLedgerSequence = Number(txJson.LastLedgerSequence) + 1000;
            let signedTx = this.wallet.sign(JSON.parse(JSON.stringify(txJson)));
            // const signedTx: SologenicTypes.SignedTx = this.rippleApi.sign(
            //   JSON.stringify(txJson),
            //   account.getSecret(),
            //   signingOptions,
            //   account.getKeypair()
            // );
            signedTx.id = txId;
            return signedTx;
        }
        catch (error) {
            console.log('EROEROEROEORERER', error);
            throw error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2lnbmluZy9vZmZsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTlCLE1BQU0sT0FBTyxhQUFjLFNBQVEsaUJBQWlCO0lBTWxELFlBQVksT0FBWTtRQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFIakIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUszQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FDUixNQUF5QixFQUN6QixJQUFZLEVBQ1osT0FBb0IsRUFDcEIsY0FBb0I7UUFFcEIsSUFBSTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDdkUsMERBQTBEO2dCQUMxRCxzREFBc0Q7Z0JBQ3RELElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7aUJBQzFEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztpQkFDcEQ7YUFDRjtZQUVELGdEQUFnRDtZQUNoRCxPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFFNUIsSUFBSSxDQUFDLGNBQWMsRUFBRTthQUNwQjtZQUVELHlEQUF5RDtZQUN6RCwwR0FBMEc7WUFFMUcsMkVBQTJFO1lBQzNFLDBEQUEwRDtZQUMxRCxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtnQkFDOUIsT0FBTyxNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDbkM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0I7Z0JBQzNCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRXZFLElBQUksUUFBUSxHQUE0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ25DLENBQUM7WUFFRixpRUFBaUU7WUFDakUsNEJBQTRCO1lBQzVCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIseUJBQXlCO1lBQ3pCLEtBQUs7WUFFTCxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztZQUVuQixPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV2QyxNQUFNLEtBQUssQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUNGIn0=