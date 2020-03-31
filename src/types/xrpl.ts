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
