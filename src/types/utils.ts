/**
 * Supporting interface for our faucet account so that we can
 * cast (deserialize) the JSON response to an object in our tests.
 */
export interface IFaucetAccount {
  xAddress: string;
  classicAddress: string;
  address: string;
  secret: string;
}

/**
 * Supporting interface for our faucet account so that we can
 * cast (deserialize) the JSON response to an object in our tests.
 */
export interface IFaucet {
  account: IFaucetAccount;
  balance: number;
}
