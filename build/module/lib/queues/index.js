import { QUEUE_TYPE_STXMQ_REDIS, QUEUE_TYPE_STXMQ_HASH } from '../../types/queues';
/**
 * Import redis queue implementation
 */
import RedisQueue from './redis';
/**
 * Import hash queue implementation
 */
import HashQueue from './hash';
/**
 * The TXMQƨ class is an implementation that calls the methods against the queue
 * instances.  When constructing the [[SologenicTxHandler]] the `sologenicOptions`
 * parameter is passed to this classes constructor.
*/
export default class TXMQƨ {
    constructor(sologenicOptions) {
        try {
            switch (sologenicOptions.queueType) {
                case QUEUE_TYPE_STXMQ_REDIS:
                    this.queue = new RedisQueue(sologenicOptions.redis);
                    break;
                case QUEUE_TYPE_STXMQ_HASH:
                    this.queue = new HashQueue(sologenicOptions.hash);
                    break;
                default:
                    this.queue = new HashQueue(sologenicOptions.hash);
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
export { HashQueue, RedisQueue };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3F1ZXVlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUV0QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCOztHQUVHO0FBQ0gsT0FBTyxVQUFVLE1BQU0sU0FBUyxDQUFDO0FBRWpDOztHQUVHO0FBQ0gsT0FBTyxTQUFTLE1BQU0sUUFBUSxDQUFDO0FBRS9COzs7O0VBSUU7QUFDRixNQUFNLENBQUMsT0FBTyxPQUFPLEtBQUs7SUFHeEIsWUFBWSxnQkFBMkM7UUFDckQsSUFBSTtZQUNGLFFBQVEsZ0JBQWlCLENBQUMsU0FBUyxFQUFFO2dCQUNuQyxLQUFLLHNCQUFzQjtvQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFNLENBQUMsQ0FBQztvQkFDckQsTUFBTTtnQkFFUixLQUFLLHFCQUFxQjtvQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLENBQUMsQ0FBQztvQkFDbkQsTUFBTTtnQkFFUjtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxDQUFDO29CQUNuRCxNQUFNO2FBQ1Q7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVNLFdBQVcsQ0FBQyxLQUFhO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7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