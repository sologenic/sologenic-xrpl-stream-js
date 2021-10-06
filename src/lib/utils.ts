import axios, { Method } from 'axios';
import fetch, { RequestInfo } from 'node-fetch';

/**
 * Perform a asynchronous request and cast the result back to a
 * type.  In our case, we're using this to cast to [[IFaucet]].
 */
export async function http<T>(
  url: RequestInfo,
  method: string = 'POST',
  headers?: object,
  body?: string
): Promise<T> {
  const response = await fetch(url, {
    method: method,
    body: body,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });

  return await response.json();
}

export async function httpRequest<T>(
  url: string,
  method: Method,
  headers?: object,
  body?: string
): Promise<T> {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: {
        'Content-type': 'application/json',
        ...headers
      },
      data: body
    });

    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * Pause execution for X milliseconds
 *
 * @param milliseconds Number of milliseconds to wait before resolving the promise.
 * @returns {Promise}
 */
export const wait = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

/**
 * https://italonascimento.github.io/applying-a-timeout-to-your-promises/
 * @param milliseconds
 * @param promise
 */

export const promiseTimeout = function(milliseconds: number, promise: any) {
  // Create a promise that rejects in <ms> milliseconds
  let timeout = new Promise((_, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject('Timed out in ' + milliseconds + 'ms.');
    }, milliseconds);
  });

  // Returns a race between our timeout and the passed in promise
  return Promise.race([promise, timeout]);
};

/** Retrieve return push token if its the correct one */
export const getToken = (signerAddress: string, wallet: string) => {
  const sessionNet = sessionStorage.mode ? sessionStorage.mode : '_mainnet';
  const tokenStorage =
    wallet === 'solo'
      ? sessionNet === '_mainnet'
        ? localStorage.swToken
        : localStorage.swToken_testnet
      : sessionNet === '_mainnet'
      ? localStorage.xummToken
      : localStorage.xummToken_testnet;

  if (!tokenStorage) return null;

  const lsSWToken = JSON.parse(tokenStorage);

  if (signerAddress === lsSWToken.signer) return lsSWToken.push_token;

  return null;
};
