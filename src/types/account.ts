export interface KeyPair {
  publicKey: string;
  privateKey: string;
}

export interface Account {
  address: string;
  secret?: string;
  keypair?: KeyPair;
}
