import test from 'ava';
import { SologenicTxHandler } from '../lib/txhandler';
import XrplAccount from '../lib/account';
import { deriveAddress, deriveKeypair } from 'ripple-keypairs';
test.serial('validate backwards compatibility, using secret wallets', async function (t) {
    const seed = 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv';
    const keypair = deriveKeypair(seed);
    const address = deriveAddress(keypair.publicKey);
    const xrplAccount = new XrplAccount(address, seed, keypair.publicKey, keypair.privateKey);
    try {
        const sologenic = await new SologenicTxHandler(
        // RippleAPI Options
        {
            server: 'wss://testnet.xrpl-labs.com',
        }, 
        // Sologenic Options, hash or redis
        {
            clearCache: true,
            queueType: "hash",
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
test.serial('validate backwards compatibility, using keypair', async function (t) {
    const seed = 'ssH5SSKYvHBynnrYoCnmvsbxrNGEv';
    const keypair = deriveKeypair(seed);
    const address = deriveAddress(keypair.publicKey);
    try {
        const sologenic = await new SologenicTxHandler(
        // RippleAPI Options
        {
            server: 'wss://testnet.xrpl-labs.com',
        }, 
        // Sologenic Options, hash or redis
        {
            clearCache: true,
            queueType: "hash",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGF0aWJpbGl0eS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2NvbXBhdGliaWxpdHkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxXQUFxSCxNQUFNLGdCQUFnQixDQUFDO0FBQ25KLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdFLElBQUksQ0FBQyxNQUFNLENBQUMsd0RBQXdELEVBQUUsS0FBSyxXQUFVLENBQUM7SUFDcEYsTUFBTSxJQUFJLEdBQUcsK0JBQStCLENBQUM7SUFDN0MsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFakQsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUxRixJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLGtCQUFrQjtRQUM1QyxvQkFBb0I7UUFDcEI7WUFDRSxNQUFNLEVBQUUsNkJBQTZCO1NBQ3RDO1FBQ0QsbUNBQW1DO1FBQ25DO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLE1BQU07WUFDakIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUNGLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFWixtQ0FBbUM7UUFDbkMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFpQyxFQUFFLEVBQUU7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFB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