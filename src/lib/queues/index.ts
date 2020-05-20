import {
  MQTX,
  IQueue,
  QUEUE_TYPE_STXMQ_REDIS,
  QUEUE_TYPE_STXMQ_HASH,
  TransactionHandlerOptions
} from '../../types/queues';

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

  public deleteQueue(queue: string): Promise<boolean> {
    return this.queue.deleteQueue(queue);
  }

  public queues(): Promise<string[]> {
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
  public async getAll(queue?: string): Promise<MQTX[]> {
    return this.queue.getAll(queue);
  }
  /**
   * Pop and element from the end of the queue
   *
   * @param queue  Queue name
   */
  public async pop(queue: string): Promise<MQTX | undefined> {
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
  public async del(queue: string, id: string): Promise<boolean> {
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
  public async delAll(queue: string): Promise<boolean> {
    const result = await this.queue.delAll(queue);

    await this.queue.deleteQueue(queue);

    return result;
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

  /**
   * Delete entries older than maximumTimeToLive (seconds)
  */
  public async deleteOlderThan(maximumTimeToLive: number, queue?: string): Promise<number> {
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

export {
  HashQueue,
  RedisQueue
};
