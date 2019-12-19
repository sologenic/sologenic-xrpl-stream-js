import {
  MQTX,
  IQueue,
  QUEUE_TYPE_STXMQ_REDIS,
  QUEUE_TYPE_STXMQ_HASH,
  QUEUE_TYPE_STXMQ_MEMCACHE
  // QUEUE_TYPE_STXMQ_AMQP
} from '../types';

import RedisQueue from './queues/redis';
import HashQueue from './queues/hash';
import MemcacheQueue from './queues/memcached';
// import AmqpQueue from './queues/amqp';

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

        case QUEUE_TYPE_STXMQ_MEMCACHE:
          this.queue = new MemcacheQueue(sologenicOptions!.memcache);
          break;

        default:
          this.queue = new HashQueue(sologenicOptions!.hash);
          break;
      }
    }
    catch (error) {
      throw new Error('Unable to initialize TXMQ');
    }
  }

  // Only if store type is "mysql"
  // public connectToMySQL(): void {
  //   this.datastore.store.connect((err: any) => {
  //     if (err) { throw new Error("Cannot connect to MySQL"); }
  //   });
  //   this.datastore.store.query(
  //     `
  //       CREATE TABLE IF NOT EXISTS sologenic_generated (
  //         id INTEGER AUTO_INCREMENT
  //         element VARCHAR (255) NOT NULL
  //       )
  //     `, (err: any, result: any) => {
  //       if (err) { throw new Error("Error occured while generating table"); }
  //       console.log(result);
  //     }
  //   );
  // }

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
  public async pop(queue: string): Promise<boolean | Array<any>> {
    return this.queue.pop(queue);
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async del(queue: string, id: string): Promise<boolean | any[]> {
    return this.queue.del(queue, id);
  }

  /**
   *
   *
   *
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> {
    return this.queue.delAll(queue);
  }
}
