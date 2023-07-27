import { RippleAPI } from 'sologenic-ripple-lib-1-10-0-patched';
export default class SologenicTxSigner {
    constructor(options) {
        this.includeSequence = false;
        this.signerID = 'default';
        this.cancelled = false;
        if (options && options.hasOwnProperty('rippleApi')) {
            this.rippleApi = options.rippleApi;
        }
        else {
            this.rippleApi = new RippleAPI({});
        }
    }
    /**
     * Should we include a sequence number (for xumm, let xumm decide)
     */
    getIncludeSequence() {
        return this.includeSequence;
    }
    cancelSigning(cancel) {
        return (this.cancelled = cancel);
    }
    async sign(txJson, txId, account, signingOptions) {
        txJson;
        txId;
        account;
        signingOptions;
        throw new Error('Method not implemented.');
    }
    async requestConnection() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sb2dlbmljX3R4X3NpZ25lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2lnbmluZy9zb2xvZ2VuaWNfdHhfc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU1oRSxNQUFNLENBQUMsT0FBTyxPQUFnQixpQkFBaUI7SUFPN0MsWUFBWSxPQUFZO1FBSmQsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDM0MsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBR3pCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQWtCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRU0sYUFBYSxDQUFDLE1BQWU7UUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2YsTUFBeUIsRUFDekIsSUFBWSxFQUNaLE9BQXFCLEVBQ3JCLGNBQW9CO1FBRXBCLE1BQU0sQ0FBQztRQUNQLElBQUksQ0FBQztRQUNMLE9BQU8sQ0FBQztRQUNSLGNBQWMsQ0FBQztRQUVmLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sS0FBSyxDQUFDLGlCQUFpQjtRQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGIn0=