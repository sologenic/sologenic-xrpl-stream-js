import { MQTX, IQueue, TransactionHandlerOptions } from '../../types/queues';
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
export default class TXMQƨ implements IQueue {
    private queue;
    constructor(sologenicOptions: TransactionHandlerOptions);
    deleteQueue(queue: string): Promise<boolean>;
    queues(): Promise<string[]>;
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
    add(queue: string, data: MQTX, id?: string): Promise<MQTX>;
    /**
     * Returns a single object from the queue or undefined
     *
     * @param queue  Queue name
     * @param id     Key used to retrieve the data
     */
    get(queue: string, id: string): Promise<MQTX | undefined>;
    /**
     * Returns all objects from within the queue
     *
     * @param queue  Queue name
     */
    getAll(queue?: string): Promise<MQTX[]>;
    /**
     * Pop and element from the end of the queue
     *
     * @param queue  Queue name
     */
    pop(queue: string): Promise<MQTX | undefined>;
    /**
     * Delete an element from the queue
     *
     * @param queue  Queue name
     * @param id     Key used to retrieve the data
     */
    del(queue: string, id: string): Promise<boolean>;
    /**
     * Delete all items from the queue
     *
     * @param queue  Queue name
     */
    delAll(queue: string): Promise<boolean>;
    /**
     * @ignore  Not used anymore, to be removed.
     */
    appendEvent(queue: string, id: string, event_name: string): Promise<boolean>;
    /**
     * Delete entries older than maximumTimeToLive (seconds)
    */
    deleteOlderThan(maximumTimeToLive: number, queue?: string): Promise<number>;
}
export { HashQueue, RedisQueue };
