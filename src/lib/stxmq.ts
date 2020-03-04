import {
  MQTX,
  IQueue,
  QUEUE_TYPE_STXMQ_REDIS,
  QUEUE_TYPE_STXMQ_HASH,
  TransactionHandlerOptions
} from '../types';

/**
 * Import redis queue implementation
 */
import RedisQueue from './queues/redis';

/**
 * Import hash queue implementation
 */
import HashQueue from './queues/hash';

/**
 * The TXMQƨ class is an implementation that calls the methods against the queue
 * instances.  When constructing the [[SologenicTxHandler]] the `sologenicOptions`
 * parameter is passed to this classes constructor.
*/
export class TXMQƨ {
  private queue: IQueue;

  constructor(sologenicOptions: TransactionHandlerOptions) {
    try {
      switch (sologenicOptions!.queueType) {
        case QUEUE_TYPE_STXMQ_REDIS:
          this.queue = new RedisQueue(sologenicOptions.redis!);
          break;

        case QUEUE_TYPE_STXMQ_HASH:
          this.queue = new HashQueue(sologenicOptions.hash!);
          break;

        default:
          this.queue = new HashQueue(sologenicOptions.hash!);
          break;
      }
    } catch (error) {
      throw new Error('Unable to initialize TXMQ');
    }
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
  public async add(queue: string, data: MQTX, id?: string): Promise<MQTX> {
    return this.queue.add(queue, data, id);
  }

  /**
   * Returns a single object from the queue or undefined
   *
   * @param queue  Queue name
   * @param id     Key used to retrieve the data
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {
    return this.queue.get(queue, id);
  }

  /**
   * Returns all objects from within the queue
   *
   * @param queue  Queue name
   */
  public async getAll(queue?: string): Promise<Array<MQTX> | Map<string, Array<MQTX>>> {
    return this.queue.getAll(queue);
  }
  /**
   * Pop and element from the end of the queue
   *
   * @param queue  Queue name
   */
  public async pop(queue: string): Promise<MQTX | undefined> {
    return this.queue.pop(queue);
  }

  /**
   * Delete an element from the queue
   *
   * @param queue  Queue name
   * @param id     Key used to retrieve the data
   */
  public async del(queue: string, id: string): Promise<boolean> {
    return this.queue.del(queue, id);
  }

  /**
   * Delete all items from the queue
   *
   * @param queue  Queue name
   */
  public async delAll(queue: string): Promise<boolean> {
    return this.queue.delAll(queue);
  }

  /**
   * @ignore  Not used anymore, to be removed.
   */
  public async appendEvent(
    queue: string,
    id: string,
    event_name: string
  ): Promise<boolean> {
    return this.queue.appendEvent(queue, id, event_name);
  }

  public async deleteOlderThan(maximumTimeToLive: number): Promise<number> {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const items = await this.queue.getAll();
    let counter: number = 0;

    if (typeof items !== 'undefined') {
      for (var [queue, values] of items.entries()) {
        if (values.hasOwnProperty('length')) {
          var contents: Array<MQTX> = <Array<MQTX>>values;

          for (var item of contents) {
            if (item.created <= currentTime - maximumTimeToLive) {
              // console.log(`TTL expired {${item.created} < ${currentTime} - ${maximumTimeToLive}}: ${item.id}`)

              if (await this.queue.del(typeof queue === 'string' ? queue : queue.toFixed(), item.id)) {
                counter++;
              }
            }
          }
        }
      }
    }

    return counter;
  }
}
