import { ISologenicTxSigner } from "./txhandler";

export interface IQueue {
  add(queue: string, data: MQTX, id?: string): Promise<MQTX>;
  get(queue: string, id: string): Promise<MQTX | undefined>;
  getAll(queue?: string): Promise<MQTX[]>;
  pop(queue: string): Promise<MQTX | undefined>;
  del(queue: string, id: string): Promise<boolean>;
  delAll(queue: string): Promise<boolean>;
  appendEvent(queue: string, id: string, event_name: string): Promise<boolean>;
  queues(): Promise<string[]>;
  deleteQueue(queue: string): Promise<boolean>;
}

export interface HashTransactionHandlerOptions {}

export interface RedisTransactionHandlerOptions {
  port?: number;
  host?: string;
  family?: number;
  password?: string;
  db?: number;
}

export interface TransactionHandlerOptions {
  queueType?: string;
  clearCache?: boolean;
  redis?: RedisTransactionHandlerOptions
  hash?: HashTransactionHandlerOptions
  maximumTimeToLive?: number;
  signingMechanism?: ISologenicTxSigner;
}

export interface MQTX {
  id: string;
  data: any;
  created: number;
}

export declare const QUEUE_TYPE_STXMQ_REDIS = 'redis';
export declare const QUEUE_TYPE_STXMQ_HASH = 'hash';
