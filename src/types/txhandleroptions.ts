import { ISologenicTxSigner } from "./txhandler";
import { RedisTransactionHandlerOptions, HashTransactionHandlerOptions } from "./queues";

export interface TransactionHandlerOptions {
    queueType?: string;
    clearCache?: boolean;
    redis?: RedisTransactionHandlerOptions;
    hash?: HashTransactionHandlerOptions;
    maximumTimeToLive?: number;
    signingMechanism?: ISologenicTxSigner;
    clientType?: string;
}