import { MQTX } from '../types';

import { EventEmitter } from 'events';

export interface IQueue {
  add(queue: string, data: object, id?: string): Promise<MQTX>;
  get(queue: string, id: string): Promise<MQTX | undefined>;
  getAll(queue: string): Promise<Array<MQTX>>;
  pop(queue: string): Promise<MQTX | boolean>;
  del(queue: string, id: string): Promise<boolean>;
  delAll(queue: string): Promise<boolean>;
}

export interface TransactionHandlerOptions {
  queueType?: string;

  redis?: {
    port?: number;
    host?: string;
    family?: number;
    password?: string;
    db?: number;
  };

  hash?: {};
}

export declare interface ISologenicTxHandler extends EventEmitter {
  on(event: string, listener: Function): this;
}

export interface RippleAPIOptions {
  trace?: boolean;
  proxy?: string;
  proxyAuthorization?: string;
  authorization?: string;
  trustedCertificates?: string[];
  key?: string;
  passphrase?: string;
  certificate?: string;
  timeout?: number;
  server?: string;
  feeCushion?: number;
  maxFeeXRP?: string;
}

export interface Account {
  address: string;
  secret: string;
}

export interface Ledger {
  baseFeeXRP: string;
  ledgerHash?: string;
  ledgerVersion: number;
  ledgerTimestamp: string;
  reserveBaseXRP?: string;
  reserveIncrementXRP?: string;
  transactionCount?: number;
  validatedLedgerVersions?: string;
}

export interface TX {
  Account: string;
  TransactionType: string;
  Memos?: { Memo: any }[];
  Flags?: any;
  [Field: string]: string | number | Array<any> | undefined;
}
export interface txJSON {
  [Field: string]: any;
}

export interface signedTX {
  signedTransaction: string;
  id: string;
}

export interface FormattedSubmitResponse {
  resultCode: string;
  resultMessage: string;
}

export interface txResult {
  status: any;
  hash?: any;
  sequence?: any;
  firstLedger?: any;
  lastLedger?: any;
}

export interface txFailedResult {
  status: any;
  reason: string;
}

export interface dispatchedTX {
  unsignedTX: unsignedTX;
  result: txResult;
}
export interface failedTX {
  unsignedTX: unsignedTX;
  result: txFailedResult;
}
export interface ResolvedTX {
  hash: string;
  sequence: number;
  accountSequence: number;
  ledgerVersion: number;
  timestamp: string;
  fee: string;
}

export interface TransactionObject {
  events: EventEmitter;
  id: string;
  promise: Promise<ResolvedTX>;
}

export interface unsignedTX {
  id: string;
  data: txJSON;
}
