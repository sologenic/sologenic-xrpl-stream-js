import { Method } from 'axios';
import { RequestInfo } from 'node-fetch';
import { Market, BookOffer } from '../types/orderbook';
/**
 * Perform a asynchronous request and cast the result back to a
 * type.  In our case, we're using this to cast to [[IFaucet]].
 */
export declare function http<T>(url: RequestInfo, method?: string, headers?: object, body?: string): Promise<T>;
export declare function httpRequest<T>(url: string, method: Method, headers?: object, body?: string): Promise<T>;
/**
 * Pause execution for X milliseconds
 *
 * @param milliseconds Number of milliseconds to wait before resolving the promise.
 * @returns {Promise}
 */
export declare const wait: (milliseconds: number) => Promise<unknown>;
/**
 * https://italonascimento.github.io/applying-a-timeout-to-your-promises/
 * @param milliseconds
 * @param promise
 */
export declare const promiseTimeout: (milliseconds: number, promise: any) => Promise<any>;
/** Retrieve return push token if its the correct one */
export declare const getToken: (signerAddress: string, wallet: string) => any;
export declare const formatOrderbook: (offers: BookOffer[], market: Market) => {
    bids: unknown[];
    asks: unknown[];
};
