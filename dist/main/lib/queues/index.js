"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisQueue = exports.HashQueue = void 0;
const queues_1 = require("../../types/queues");
/**
 * Import redis queue implementation
 */
const redis_1 = __importDefault(require("./redis"));
exports.RedisQueue = redis_1.default;
/**
 * Import hash queue implementation
 */
const hash_1 = __importDefault(require("./hash"));
exports.HashQueue = hash_1.default;
/**
 * The TXMQƨ class is an implementation that calls the methods against the queue
 * instances.  When constructing the [[SologenicTxHandler]] the `sologenicOptions`
 * parameter is passed to this classes constructor.
*/
class TXMQƨ {
    constructor(sologenicOptions) {
        try {
            switch (sologenicOptions.queueType) {
                case queues_1.QUEUE_TYPE_STXMQ_REDIS:
                    this.queue = new redis_1.default(sologenicOptions.redis);
                    break;
                case queues_1.QUEUE_TYPE_STXMQ_HASH:
                    this.queue = new hash_1.default(sologenicOptions.hash);
                    break;
                default:
                    this.queue = new hash_1.default(sologenicOptions.hash);
                    break;
            }
        }
        catch (error) {
            throw new Error('Unable to initialize TXMQ');
        }
    }
    deleteQueue(queue) {
        return this.queue.deleteQueue(queue);
    }
    queues() {
        return this.queue.queues();
    }
    /**
     * Add a new data object to a queue with an optional `id`.  If the `id` is not provided
     * an unique UUID will generated and assigned.  This method will return the created
     * object rather than just the `id`.
     *
     * @todo Only return `id` from this method
     *
     * @param queue  Queue name
     * @param data   Object of keys and values
     * @param id     Optional `id` key to store the data against
     */
    async add(queue, data, id) {
        return this.queue.add(queue, data, id);
    }
    /**
     * Returns a single object from the queue or undefined
     *
     * @param queue  Queue name
     * @param id     Key used to retrieve the data
     */
    async get(queue, id) {
        return this.queue.get(queue, id);
    }
    /**
     * Returns all objects from within the queue
     *
     * @param queue  Queue name
     */
    async getAll(queue) {
        return this.queue.getAll(queue);
    }
    /**
     * Pop and element from the end of the queue
     *
     * @param queue  Queue name
     */
    async pop(queue) {
        const result = await this.queue.pop(queue);
        const items = await this.queue.getAll(queue);
        if (items.length < 1) {
            await this.queue.deleteQueue(queue);
        }
        return result;
    }
    /**
     * Delete an element from the queue
     *
     * @param queue  Queue name
     * @param id     Key used to retrieve the data
     */
    async del(queue, id) {
        const result = await this.queue.del(queue, id);
        const items = await this.queue.getAll(queue);
        if (items.length < 1) {
            await this.queue.deleteQueue(queue);
        }
        return result;
    }
    /**
     * Delete all items from the queue
     *
     * @param queue  Queue name
     */
    async delAll(queue) {
        const result = await this.queue.delAll(queue);
        await this.queue.deleteQueue(queue);
        return result;
    }
    /**
     * @ignore  Not used anymore, to be removed.
     */
    async appendEvent(queue, id, event_name) {
        return this.queue.appendEvent(queue, id, event_name);
    }
    /**
     * Delete entries older than maximumTimeToLive (seconds)
    */
    async deleteOlderThan(maximumTimeToLive, queue) {
        let counter = 0;
        const currentTime = Math.floor(new Date().getTime() / 1000);
        const queueNames = await this.queue.queues();
        if (maximumTimeToLive < 0) {
            return counter;
        }
        for (var queueName in queueNames) {
            if (queueNames[queueName] !== queue)
                // Skip the queue if it does not match what we're looking for (if specified)
                continue;
            const items = await this.queue.getAll(queueNames[queueName]);
            for (var key in items) {
                if (items[key].created + maximumTimeToLive <= currentTime) {
                    // console.log(`Item (${items[key].created} is older than ${currentTime}), so ${JSON.stringify(items[key])} will be deleted`);
                    await this.queue.del(queueNames[queueName], items[key].id);
                    counter++;
                }
            }
        }
        return counter;
    }
}
exports.default = TXMQƨ;
