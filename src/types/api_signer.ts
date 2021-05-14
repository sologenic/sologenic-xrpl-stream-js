import * as TXTypes from './txhandler';

export interface SoloWalletSignerSubmitPayload {
  tx_json: TXTypes.TX;
  meta: {
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
  signer?: string;
  txid?: string;
  tx_hex?: string;
}

export interface XummWalletSignerSubmitPayload {
  tx_json: TXTypes.TX;
  meta: {
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
  signer?: string;
  txid?: string;
  tx_hex?: string;
}

export interface SocketResponse {
  meta: object;
  signed: boolean;
  opened?: boolean;
}
