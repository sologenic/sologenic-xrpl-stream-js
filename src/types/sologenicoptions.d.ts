import { MQTX } from '../types';

import { EventEmitter } from 'events';

export interface IQueue {
  add(queue: string, data: object, id?: string): Promise<MQTX>;
  get(queue: string, id: string): Promise<MQTX | undefined>;
  getAll(queue: string): Promise<Array<MQTX>>;
  pop(queue: string): Promise<MQTX | undefined>;
  del(queue: string, id: string): Promise<boolean>;
  delAll(queue: string): Promise<boolean>;
  appendEvent(queue: string, id: string, event_name: string): Promise<boolean>;
}

export interface TransactionHandlerOptions {
  queueType?: string;
  clearCache?: boolean;
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
  keypair: KeyPair;
}

export interface KeyPair {
  publicKey: string;
  privateKey: string;
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
export interface TxJSON {
  [Field: string]: any;
}

export interface SignedTx {
  signedTransaction: string;
  id: string;
}

export interface FormattedSubmitResponse {
  resultCode: string;
  resultMessage: string;
}

export interface ValidatedEvent {
  id: string;
  resolvedTx: ResolvedTx;
  dispatchedTx: DispatchedTx;
  reason: string;
}

export interface WarningEvent {
  id: string;
  state: string;
  reason: string;
  dispatchedTx?: DispatchedTx;
  unsignedTx?: UnsignedTx
}

export interface RequeuedEvent {
  id: string;
  reason: string;
  dispatchedTx: DispatchedTx;
}

export interface QueuedEvent {
  id: string;
  txJson: TxJSON;
}

export interface FailedEvent {
  id: string;
  failedTx: FailedTx;
  reason: string;
  result: any;
}

export interface DispatchedEvent {
  id: string;
  unsignedTx: UnsignedTx,
  dispatchedTx: DispatchedTx
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

export interface DispatchedTx {
  unsignedTx: UnsignedTx;
  result: txResult;
}

export interface FailedTx {
  unsignedTx: UnsignedTx;
  result: txFailedResult;
}

export interface ResolvedTx {
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
  promise: Promise<ResolvedTx>;
}

export interface UnsignedTx {
  id: string;
  data: TxJSON;
}
