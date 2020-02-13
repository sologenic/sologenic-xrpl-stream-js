import fetch, { RequestInfo } from 'node-fetch'

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

/**
 * Pause execution for X milliseconds
 *
 * @param milliseconds Number of milliseconds to wait before resolving the promise.
 * @returns {Promise}
 */
export const wait = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
