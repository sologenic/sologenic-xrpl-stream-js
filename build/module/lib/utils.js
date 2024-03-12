import axios from 'axios';
import fetch from 'node-fetch';
/**
 * Perform a asynchronous request and cast the result back to a
 * type.  In our case, we're using this to cast to [[IFaucet]].
 */
export async function http(url, method = 'POST', headers, body) {
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
export async function httpRequest(url, method, headers, body) {
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
    }
    catch (e) {
        throw new Error(e);
    }
}
/**
 * Pause execution for X milliseconds
 *
 * @param milliseconds Number of milliseconds to wait before resolving the promise.
 * @returns {Promise}
 */
export const wait = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
/**
 * https://italonascimento.github.io/applying-a-timeout-to-your-promises/
 * @param milliseconds
 * @param promise
 */
export const promiseTimeout = function (milliseconds, promise) {
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
export const getToken = (signerAddress, wallet) => {
    const sessionNet = sessionStorage.mode ? sessionStorage.mode : '_mainnet';
    const tokenStorage = wallet === 'solo'
        ? sessionNet === '_mainnet'
            ? localStorage.swToken
            : localStorage.swToken_testnet
        : sessionNet === '_mainnet'
            ? localStorage.xummToken
            : localStorage.xummToken_testnet;
    if (!tokenStorage)
        return null;
    const lsSWToken = JSON.parse(tokenStorage);
    if (signerAddress === lsSWToken.signer)
        return lsSWToken.push_token;
    return null;
};
const _ = require('lodash');
const xrpl = require('xrpl');
const bignumber_js_1 = require('bignumber.js');
function removeUndefined(obj) {
    return _.omitBy(obj, _.isUndefined);
}
const parseAmount = (amount) => {
    if (typeof amount === 'string') {
        return {
            currency: 'XRP',
            value: xrpl.dropsToXrp(amount)
        };
    }
    return {
        currency: amount.currency,
        value: amount.value,
        issuer: amount.issuer
    };
};
function parseOrderbookOrder(data) {
    const flags = xrpl.OfferCreateFlags;
    const direction = (data.Flags & flags.tfSell) === 0 ? 'buy' : 'sell';
    const takerGetsAmount = parseAmount(data.TakerGets);
    const takerPaysAmount = parseAmount(data.TakerPays);
    const quantity = direction === 'buy' ? takerPaysAmount : takerGetsAmount;
    const totalPrice = direction === 'buy' ? takerGetsAmount : takerPaysAmount;
    const specification = removeUndefined({
        direction: direction,
        quantity: quantity,
        totalPrice: totalPrice,
        passive: (data.Flags & flags.tfPassive) !== 0 || undefined,
        expirationTime: data.Expiration
    });
    const properties = {
        maker: data.Account,
        sequence: data.Sequence
    };
    const takerGetsFunded = data.taker_gets_funded
        ? parseAmount(data.taker_gets_funded)
        : undefined;
    const takerPaysFunded = data.taker_pays_funded
        ? parseAmount(data.taker_pays_funded)
        : undefined;
    const available = removeUndefined({
        fundedAmount: takerGetsFunded,
        priceOfFundedAmount: takerPaysFunded
    });
    const state = _.isEmpty(available) ? undefined : available;
    return removeUndefined({ specification, properties, state, data });
}
function isSameIssue(a, b) {
    return a.currency === b.currency && a.issuer === b.issuer;
}
function directionFilter(direction, order) {
    return order.specification.direction === direction;
}
function flipOrder(order) {
    const specification = order.specification;
    const flippedSpecification = {
        quantity: specification.totalPrice,
        totalPrice: specification.quantity,
        direction: specification.direction === 'buy' ? 'sell' : 'buy'
    };
    const newSpecification = _.merge({}, specification, flippedSpecification);
    return _.merge({}, order, { specification: newSpecification });
}
function alignOrder(base, order) {
    const quantity = order.specification.quantity;
    return isSameIssue(quantity, base) ? order : flipOrder(order);
}
export const formatOrderbook = (offers, market) => {
    var orders = offers.sort((a, b) => {
        return new bignumber_js_1(a.quality).comparedTo(b.quality);
    });
    orders = orders.map(parseOrderbookOrder);
    const alignedOrders = orders.map(_.partial(alignOrder, market.base));
    const bids = alignedOrders.filter(_.partial(directionFilter, 'buy'));
    const asks = alignedOrders.filter(_.partial(directionFilter, 'sell'));
    return { bids, asks };
};
