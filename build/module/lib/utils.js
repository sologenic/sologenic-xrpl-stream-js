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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBaUIsTUFBTSxPQUFPLENBQUM7QUFDdEMsT0FBTyxLQUFzQixNQUFNLFlBQVksQ0FBQztBQVdoRDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLElBQUksQ0FDeEIsR0FBZ0IsRUFDaEIsU0FBaUIsTUFBTSxFQUN2QixPQUFnQixFQUNoQixJQUFhO0lBRWIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ2hDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLEdBQUcsT0FBTztTQUNYO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBRUQsTUFBTSxDQUFDLEtBQUssVUFBVSxXQUFXLENBQy9CLEdBQVcsRUFDWCxNQUFjLEVBQ2QsT0FBZ0IsRUFDaEIsSUFBYTtJQUViLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQztZQUMzQixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLEdBQUcsT0FBTzthQUNYO1lBQ0QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDdEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxZQUFvQixF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