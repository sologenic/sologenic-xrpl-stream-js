"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const account_1 = __importStar(require("../lib/account"));
const ripple_keypairs_1 = require("ripple-keypairs");
ava_1.default.serial('validate construction of account', async function (t) {
    const seed = ripple_keypairs_1.generateSeed();
    const keypair = ripple_keypairs_1.deriveKeypair(seed);
    const address = ripple_keypairs_1.deriveAddress(keypair.publicKey);
    t.throws(() => {
        return account_1.default.getAccount("", undefined, undefined, undefined);
    }, {
        instanceOf: account_1.XrplAddressException
    });
    t.throws(() => {
        return account_1.default.getAccount(address, "", undefined, undefined);
    }, {
        instanceOf: account_1.XrplSecretException
    });
    t.throws(() => {
        return account_1.default.getAccount(address, seed, keypair.publicKey, undefined);
    }, {
        instanceOf: account_1.XrplKeypairException
    });
    t.notThrows(() => {
        return account_1.default.getAccount(address, undefined, keypair.publicKey, keypair.privateKey);
    });
});
ava_1.default.serial('validate account with invalid address', async function (t) {
    const seed = ripple_keypairs_1.generateSeed();
    const keypair = ripple_keypairs_1.deriveKeypair(seed);
    const address = ripple_keypairs_1.deriveAddress(keypair.publicKey);
    t.throws(() => {
        new account_1.default("", undefined, undefined, undefined);
    }, {
        instanceOf: account_1.XrplAddressException
    });
});
ava_1.default.serial('validate account with address, but invalid secret', async function (t) {
    const seed = ripple_keypairs_1.generateSeed();
    const keypair = ripple_keypairs_1.deriveKeypair(seed);
    const address = ripple_keypairs_1.deriveAddress(keypair.publicKey);
    t.throws(() => {
        new account_1.default(address, "", undefined, undefined);
    }, {
        instanceOf: account_1.XrplSecretException
    });
});
ava_1.default.serial('validate account with address and secret is valid', async function (t) {
    const seed = ripple_keypairs_1.generateSeed();
    const keypair = ripple_keypairs_1.deriveKeypair(seed);
    const address = ripple_keypairs_1.deriveAddress(keypair.publicKey);
    t.notThrows(() => {
        new account_1.default(address, seed, undefined, undefined);
    });
    t.true(new account_1.default(address, seed, undefined, undefined).hasSecret());
    t.false(new account_1.default(address, seed, undefined, undefined).hasKeypair());
});
ava_1.default.serial('validate account with address but invalid keypair combinations', async function (t) {
    const seed = ripple_keypairs_1.generateSeed();
    const keypair = ripple_keypairs_1.deriveKeypair(seed);
    const address = ripple_keypairs_1.deriveAddress(keypair.publicKey);
    t.throws(() => {
        new account_1.default(address, undefined, keypair.publicKey, undefined);
    }, {
        instanceOf: account_1.XrplKeypairException
    }, "Missing secret or private key");
    t.throws(() => {
        new account_1.default(address, undefined, undefined, keypair.privateKey);
    }, {
        instanceOf: account_1.XrplKeypairException
    }, "Missing secret or public key");
    t.notThrows(() => {
        new account_1.default(address, undefined, keypair.publicKey, keypair.privateKey);
    }, "Missing secret");
    t.false(new account_1.default(address, undefined, keypair.publicKey, keypair.privateKey).hasSecret(), "Has secret");
    t.true(new account_1.default(address, undefined, keypair.publicKey, keypair.privateKey).hasKeypair(), "Has keypair");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2FjY291bnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBdUI7QUFHdkIsMERBQW1KO0FBQ25KLHFEQUE2RTtBQUU3RSxhQUFJLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLEtBQUssV0FBVSxDQUFDO0lBQzlELE1BQU0sSUFBSSxHQUFHLDhCQUFZLEVBQUUsQ0FBQztJQUM1QixNQUFNLE9BQU8sR0FBRywrQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLCtCQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWpELENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxpQkFBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUNwRSxDQUFDLEVBQUU7UUFDRCxVQUFVLEVBQUUsOEJBQW9CO0tBQ2pDLENBQUMsQ0FBQztJQUVILENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxpQkFBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUNsRSxDQUFDLEVBQUU7UUFDRCxVQUFVLEVBQUUsNkJBQW1CO0tBQ2hDLENBQUMsQ0FBQztJQUVILENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxpQkFBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDNUUsQ0FBQyxFQUFFO1FBQ0QsVUFBVSxFQUFFLDhCQUFvQjtLQUNqQyxDQUFDLENBQUM7SUFFSCxDQUFDLENB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