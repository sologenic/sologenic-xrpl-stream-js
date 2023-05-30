"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatOrderbook = exports.promiseTimeout = exports.wait = exports.httpRequest = exports.http = void 0;
const axios_1 = __importDefault(require("axios"));
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * Perform a asynchronous request and cast the result back to a
 * type.  In our case, we're using this to cast to [[IFaucet]].
 */
async function http(url, method = 'POST', headers, body) {
    const response = await node_fetch_1.default(url, {
        method: method,
        body: body,
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
    });
    return await response.json();
}
exports.http = http;
async function httpRequest(url, method, headers, body) {
    try {
        const response = await axios_1.default({
            url: url,
            method: method,
            headers: Object.assign({ 'Content-type': 'application/json' }, headers),
            data: body
        });
        return response.data;
    }
    catch (e) {
        throw new Error(e);
    }
}
exports.httpRequest = httpRequest;
/**
 * Pause execution for X milliseconds
 *
 * @param milliseconds Number of milliseconds to wait before resolving the promise.
 * @returns {Promise}
 */
exports.wait = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
/**
 * https://italonascimento.github.io/applying-a-timeout-to-your-promises/
 * @param milliseconds
 * @param promise
 */
exports.promiseTimeout = function (milliseconds, promise) {
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
exports.formatOrderbook = (offers, market) => {
    var orders = offers.sort((a, b) => {
        return new bignumber_js_1(a.quality).comparedTo(b.quality);
    });
    orders = orders.map(parseOrderbookOrder);
    const alignedOrders = orders.map(_.partial(alignOrder, market.base));
    const bids = alignedOrders.filter(_.partial(directionFilter, 'buy'));
    const asks = alignedOrders.filter(_.partial(directionFilter, 'sell'));
    return { bids, asks };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFzQztBQUN0Qyw0REFBZ0Q7QUFXaEQ7OztHQUdHO0FBQ0ksS0FBSyxVQUFVLElBQUksQ0FDeEIsR0FBZ0IsRUFDaEIsU0FBaUIsTUFBTSxFQUN2QixPQUFnQixFQUNoQixJQUFhO0lBRWIsTUFBTSxRQUFRLEdBQUcsTUFBTSxvQkFBSyxDQUFDLEdBQUcsRUFBRTtRQUNoQyxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxrQkFDTCxjQUFjLEVBQUUsa0JBQWtCLElBQy9CLE9BQU8sQ0FDWDtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQWhCRCxvQkFnQkM7QUFFTSxLQUFLLFVBQVUsV0FBVyxDQUMvQixHQUFXLEVBQ1gsTUFBYyxFQUNkLE9BQWdCLEVBQ2hCLElBQWE7SUFFYixJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUM7WUFDM0IsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sa0JBQ0wsY0FBYyxFQUFFLGtCQUFrQixJQUMvQixPQUFPLENBQ1g7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztLQUN0QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUM7QUFyQkQsa0NBcUJDO0FBRUQ7Ozs7O0dBS0c7QUFDVSxRQUFBLElBQUksR0FBRyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtJQUMzQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMs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