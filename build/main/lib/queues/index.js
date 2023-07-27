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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3F1ZXVlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrQ0FNNEI7QUFFNUI7O0dBRUc7QUFDSCxvREFBaUM7QUF5Sy9CLHFCQXpLSyxlQUFVLENBeUtMO0FBdktaOztHQUVHO0FBQ0gsa0RBQStCO0FBbUs3QixvQkFuS0ssY0FBUyxDQW1LTDtBQWpLWDs7OztFQUlFO0FBQ0YsTUFBcUIsS0FBSztJQUd4QixZQUFZLGdCQUEyQztRQUNyRCxJQUFJO1lBQ0YsUUFBUSxnQkFBaUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQ25DLEtBQUssK0JBQXNCO29CQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQU0sQ0FBQyxDQUFDO29CQUNyRCxNQUFNO2dCQUVSLEtBQUssOEJBQXFCO29CQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksY0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxDQUFDO29CQUNuRCxNQUFNO2dCQUVSO29CQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxjQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSyxDQUFDLENBQUM7b0JBQ25ELE1BQU07YUFDVDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWE7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FB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