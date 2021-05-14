import { EventEmitter } from 'events';
import XrplAccount from '../lib/account';
import { IXummSubmitAdditional } from './xumm';

export interface ISologenicTxHandler extends EventEmitter {
  on(event: string, listener: Function): this;
}

export interface ISologenicTxSigner {
  sign(
    txJson: TX,
    txId: string,
    account: XrplAccount,
    signingOptions: any
  ): Promise<SignedTx>;

  getIncludeSequence(): boolean;
  requestConnection(): any;
  cancelSigning(cancel: boolean): any;
  signerID: string;
}

export interface SignerConnectionRef {
  address?: string;
  accounts?: object[];
  publicKey?: string;
  tx_json?: TX;
  meta?: {
    identifier: string;
    expires_at: string;
    submit: boolean;
    pushed: boolean;
    opened: boolean;
    resolved: boolean;
    signed: boolean;
    cancelled: boolean;
    expired: boolean;
  };
  refs?: {
    qr: string;
    ws: string;
    deeplink: string;
  };
}

export interface LedgerSelectedAccount {
  address: string;
  index: number;
  publicKey: string;
  info?: object | null;
}

export interface TX {
  Account: string;
  TransactionType: string;
  Memos?: { Memo: any }[];
  Flags?: any;
  TransactionMetadata?: {
    offlineMeta?: object;
    xummMeta?: IXummSubmitAdditional;
  };
  [Field: string]: string | number | object | Array<any> | undefined;
}

export interface TxJSON {
  [Field: string]: any;
}

export interface SignedTx {
  id: string;
  signedTransaction: string;
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
  unsignedTx?: UnsignedTx;
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

export interface SigningEvent {
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
  unsignedTx?: UnsignedTx;
  dispatchedTx: DispatchedTx;
}

export interface TxResult {
  status: any;
  hash?: any;
  sequence?: any;
  firstLedger?: any;
  lastLedger?: any;
}

export interface TxFailedResult {
  status: any;
  reason: string;
}

export interface DispatchedTx {
  unsignedTx?: UnsignedTx;
  result: TxResult;
}

export interface FailedTx {
  unsignedTx?: UnsignedTx;
  result: TxFailedResult;
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
  /**
   * @description events: Each instance of the submit() gets an instance of `EventEmitter` these events are emitted when certain actions take place within the transaction submission.
   *              Events: {queued, dispatched, requeued, warning, validated}
   *
   * @description id: This is the uuid generated in a non-blocking approach so clients can later use this id for reference. The id is of type of string and are generated using v4 of uuid library.
   *              e.g: 6316751c-bde4-412b-ac9a-7d05e548171f
   *
   * @description promise: This property contains a promise and resolves only when a transaction has been validated.
   *              Contains: hash, dispatchedSequence, accountSequence, ledgerVersion, timestamp, fee
   */
  events: EventEmitter;
  id: string;
  promise: Promise<ResolvedTx>;
}

export interface UnsignedTx {
  id: string;
  data: TxJSON;
}
