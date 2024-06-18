"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
    const seed = (0, ripple_keypairs_1.generateSeed)();
    const keypair = (0, ripple_keypairs_1.deriveKeypair)(seed);
    const address = (0, ripple_keypairs_1.deriveAddress)(keypair.publicKey);
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
    const seed = (0, ripple_keypairs_1.generateSeed)();
    const keypair = (0, ripple_keypairs_1.deriveKeypair)(seed);
    const address = (0, ripple_keypairs_1.deriveAddress)(keypair.publicKey);
    t.throws(() => {
        new account_1.default("", undefined, undefined, undefined);
    }, {
        instanceOf: account_1.XrplAddressException
    });
});
ava_1.default.serial('validate account with address, but invalid secret', async function (t) {
    const seed = (0, ripple_keypairs_1.generateSeed)();
    const keypair = (0, ripple_keypairs_1.deriveKeypair)(seed);
    const address = (0, ripple_keypairs_1.deriveAddress)(keypair.publicKey);
    t.throws(() => {
        new account_1.default(address, "", undefined, undefined);
    }, {
        instanceOf: account_1.XrplSecretException
    });
});
ava_1.default.serial('validate account with address and secret is valid', async function (t) {
    const seed = (0, ripple_keypairs_1.generateSeed)();
    const keypair = (0, ripple_keypairs_1.deriveKeypair)(seed);
    const address = (0, ripple_keypairs_1.deriveAddress)(keypair.publicKey);
    t.notThrows(() => {
        new account_1.default(address, seed, undefined, undefined);
    });
    t.true(new account_1.default(address, seed, undefined, undefined).hasSecret());
    t.false(new account_1.default(address, seed, undefined, undefined).hasKeypair());
});
ava_1.default.serial('validate account with address but invalid keypair combinations', async function (t) {
    const seed = (0, ripple_keypairs_1.generateSeed)();
    const keypair = (0, ripple_keypairs_1.deriveKeypair)(seed);
    const address = (0, ripple_keypairs_1.deriveAddress)(keypair.publicKey);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2FjY291bnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXVCO0FBR3ZCLDBEQUFtSjtBQUNuSixxREFBNkU7QUFFN0UsYUFBSSxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxLQUFLLFdBQVUsQ0FBQztJQUM5RCxNQUFNLElBQUksR0FBRyxJQUFBLDhCQUFZLEdBQUUsQ0FBQztJQUM1QixNQUFNLE9BQU8sR0FBRyxJQUFBLCtCQUFhLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBQSwrQkFBYSxFQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVqRCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8saUJBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDcEUsQ0FBQyxFQUFFO1FBQ0QsVUFBVSxFQUFFLDhCQUFvQjtLQUNqQyxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8saUJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDbEUsQ0FBQyxFQUFFO1FBQ0QsVUFBVSxFQUFFLDZCQUFtQjtLQUNoQyxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8saUJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQzVFLENBQUMsRUFBRTtRQUNELFVBQVUsRUFBRSw4QkFBb0I7S0FDakMsQ0FB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