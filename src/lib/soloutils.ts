import fetch, { RequestInfo } from 'node-fetch'

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

/**
 * Perform a asynchronous request and cast the result back to a
 * type.  In our case, we're using this to cast to [[IFaucet]].
 */
export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request, { method: 'POST' });
  const body = await response.json();

  return body;
}

export function wait(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
