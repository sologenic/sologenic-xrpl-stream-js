import fetch, { RequestInfo } from 'node-fetch'

// {"account":{"xAddress":"T7jQb738NQviPKxvtsheynRuEyz9wdUJGigLLAY4xmft8BP","classicAddress":"rfNviyjg6vFzhjXfdyrorSF2UnRyX5vDPE","address":"rfNviyjg6vFzhjXfdyrorSF2UnRyX5vDPE","secret":"sndYJr1oufWAPhHpMbQPgmYtSSiKn"},"balance":10000}* Closing connection 0

export interface IFaucetAccount {
  xAddress: string;
  classicAddress: string;
  address: string;
  secret: string;
}

export interface IFaucet {
  account: IFaucetAccount;
  balance: number;
}

export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request, { method: 'POST' });
  const body = await response.json();

  return body;
}
