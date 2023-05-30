"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const txhandler_1 = require("../lib/txhandler");
const account_1 = __importDefault(require("../lib/account"));
const ripple_keypairs_1 = require("ripple-keypairs");
ava_1.default.serial('validate backwards compatibility, using secret wallets', async function (t) {
    const seed = 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv';
    const keypair = ripple_keypairs_1.deriveKeypair(seed);
    const address = ripple_keypairs_1.deriveAddress(keypair.publicKey);
    const xrplAccount = new account_1.default(address, seed, keypair.publicKey, keypair.privateKey);
    try {
        const sologenic = await new txhandler_1.SologenicTxHandler(
        // RippleAPI Options
        {}, 
        // Sologenic Options, hash or redis
        {
            clearCache: true,
            queueType: 'hash',
            hash: {}
        }).connect();
        // Events have their own types now.
        sologenic.on('queued', (event) => {
            console.log('GLOBAL QUEUED: ', event);
        });
        sologenic.on('dispatched', (event) => {
            console.log('GLOBAL DISPATCHED:', event);
        });
        sologenic.on('requeued', (event) => {
            console.log('GLOBAL REQUEUED:', event);
        });
        sologenic.on('warning', (event) => {
            console.log('GLOBAL WARNING:', event);
        });
        sologenic.on('validated', (event) => {
            console.log('GLOBAL VALIDATED:', event);
        });
        sologenic.on('failed', (event) => {
            console.log('GLOBAL FAILED:', event);
        });
        await sologenic.setAccount({
            address: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
            secret: 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv'
        });
        t.is(sologenic.getAccount().getAddress(), xrplAccount.getAddress());
        t.is(sologenic.getAccount().getSecret(), xrplAccount.getSecret());
        await sologenic.submit({
            TransactionType: 'Payment',
            Account: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
            Destination: 'rUwty6Pf4gzUmCLVuKwrRWPYaUiUiku8Rg',
            Amount: {
                currency: '534F4C4F00000000000000000000000000000000',
                issuer: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
                value: '100000000'
            }
        }).promise;
    }
    catch (error) {
        t.fail(error);
    }
});
ava_1.default.serial('validate backwards compatibility, using keypair', async function (t) {
    const seed = 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv';
    const keypair = ripple_keypairs_1.deriveKeypair(seed);
    const address = ripple_keypairs_1.deriveAddress(keypair.publicKey);
    try {
        const sologenic = await new txhandler_1.SologenicTxHandler(
        // RippleAPI Options
        {}, 
        // Sologenic Options, hash or redis
        {
            clearCache: true,
            queueType: 'hash',
            hash: {}
        }).connect();
        await sologenic.setAccount({
            address: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
            keypair: {
                publicKey: keypair.publicKey,
                privateKey: keypair.privateKey
            }
        });
        t.is(sologenic.getAccount().getAddress(), address);
        t.is(sologenic.getAccount().getSecret(), undefined);
        t.is(sologenic.getAccount().getKeypair().publicKey, keypair.publicKey);
        t.is(sologenic.getAccount().getKeypair().privateKey, keypair.privateKey);
        await sologenic.submit({
            TransactionType: 'Payment',
            Account: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
            Destination: 'rUwty6Pf4gzUmCLVuKwrRWPYaUiUiku8Rg',
            Amount: {
                currency: '534F4C4F00000000000000000000000000000000',
                issuer: 'rNbe8nh1K6nDC5XNsdAzHMtgYDXHZB486G',
                value: '100000000'
            }
        }).promise;
    }
    catch (error) {
        t.fail(error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGF0aWJpbGl0eS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2NvbXBhdGliaWxpdHkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixnREFBc0Q7QUFDdEQsNkRBS3dCO0FBQ3hCLHFEQUE2RTtBQUU3RSxhQUFJLENBQUMsTUFBTSxDQUNULHdEQUF3RCxFQUN4RCxLQUFLLFdBQVUsQ0FBQztJQUNkLE1BQU0sSUFBSSxHQUFHLCtCQUErQixDQUFDO0lBQzdDLE1BQU0sT0FBTyxHQUFHLCtCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsTUFBTSxPQUFPLEdBQUcsK0JBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFakQsTUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBVyxDQUNqQyxPQUFPLEVBQ1AsSUFBSSxFQUNKLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLE9BQU8sQ0FBQyxVQUFVLENBQ25CLENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLDhCQUFrQjtRQUM1QyxvQkFBb0I7UUFDcEIsRUFBRTtRQUNGLG1DQUFtQztRQUNuQztZQUNFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FDRixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRVosbUNBQW1DO1FBQ25DLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBaUMsRUFBRSxFQUFFO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQXFDLEVBQUUsRUFBRTtZQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFv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