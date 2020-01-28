import {
  MQTX,
  IQueue,
  QUEUE_TYPE_STXMQ_REDIS,
  QUEUE_TYPE_STXMQ_HASH
} from '../types';

import RedisQueue from './queues/redis';
import HashQueue from './queues/hash';

export class TXMQƨ {
  private queue: IQueue;

  constructor(sologenicOptions: any) {
    try {
      switch (sologenicOptions!.queueType) {
        case QUEUE_TYPE_STXMQ_REDIS:
          this.queue = new RedisQueue(sologenicOptions!.redis);
          break;

        case QUEUE_TYPE_STXMQ_HASH:
          this.queue = new HashQueue(sologenicOptions!.hash);
          break;
        default:
          this.queue = new HashQueue(sologenicOptions!.hash);
          break;
      }
    } catch (error) {
      throw new Error('Unable to initialize TXMQ');
    }
  }

  /**
   *
   * @param queue
   * @param data
   * @param id
   */
  public async add(queue: string, data: object, id?: string): Promise<MQTX> {
    return this.queue.add(queue, data, id);
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {
    return this.queue.get(queue, id);
  }

  /**
   *
   * @param queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    return this.queue.getAll(queue);
  }
  /**
   *
   * @param queue
   */
  public async pop(queue: string): Promise<MQTX | boolean> {
    return this.queue.pop(queue);
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async del(queue: string, id: string): Promise<boolean> {
    return this.queue.del(queue, id);
  }

  /**
   *
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> {
    return this.queue.delAll(queue);
  }

  /**
   *
   * @param queue
   * @param id
   * @param event_name
   */
  public async appendEvent(queue: string, id: string, event_name: string): Promise<boolean> {
    return this.queue.appendEvent(queue, id, event_name);
  }
}
