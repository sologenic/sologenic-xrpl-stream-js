import Redis from 'ioredis';
import Memcached from 'memcached';

import { v4 as uuid } from 'uuid';
import { MQTX,
  IQueue, 
  QUEUE_TYPE_STXMQ_REDIS, 
  QUEUE_TYPE_STXMQ_MEMCACHE, 
  QUEUE_TYPE_STXMQ_HASH } from '../types';

export class HashQueue implements IQueue {
  private hash = {};

  constructor(queueOptions: any) { 
    throw new Error("Not Implemeneted");

    // Satisfy editor warnings about objects not being read
    queueOptions.queueType;

    if (this.hash instanceof Object) {
      this.hash = {};
    }
  }

  /**
   *
   * @param queue
   * @param data
   * @param id
   */
  public async add(queue: string, data: object, id?: string): Promise<MQTX> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {  
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   */
  public async pop(queue: string): Promise<boolean | Array<any>> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async del(queue: string, id: string): Promise<boolean | any[]> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
};

export class MemcacheQueue implements IQueue {
  private memcache: any;

  constructor(queueOptions: any) {
    throw new Error("Not Implemeneted");

    try {
      this.memcache = new Memcached(queueOptions);
    } catch (error) {
      throw new Error('Unable to initialize memcache');
    }
  }

  /**
   *
   * @param queue
   * @param data
   * @param id
   */
  public async add(queue: string, data: object, id?: string): Promise<MQTX> {
    throw new Error("Method not implemented.");
  }  

  /**
   *
   * @param queue
   * @param id
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {  
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   */
  public async pop(queue: string): Promise<boolean | Array<any>> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async del(queue: string, id: string): Promise<boolean | any[]> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @param queue
   */
  delAll(queue: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export class RedisQueue implements IQueue {
  private redis: any;

  constructor(queueOptions: any) {
    try {
      this.redis = new Redis(queueOptions);
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
    try {
      const element = {
        id: typeof id !== 'undefined' ? id : uuid(),
        data
      };
      const result = await this.redis.rpush(queue, JSON.stringify(element));
      if (result > 0) {
        return element;
      } else {
        throw new Error("Can't add TX to Redis");
      }
    } catch (error) {
      throw new Error("Can't add TX to Redis");
    }
  }
  /**
   *
   * @param queue
   * @param id
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {
    try {
      const elements = await this.redis.lrange(queue, 0, -1);
      const element = elements.find((el: string) => {
        const parsed = JSON.parse(el);
        if (parsed.id === id) {
          return parsed;
        }
      });
      if (element) {
        return JSON.parse(element);
      } else {
        return undefined;
      }
    } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }
  /**
   *
   * @param queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    try {
      const elements = await this.redis.lrange(queue, 0, -1);

      if (elements.length > 0) {
        return elements.map((el: string) => {
          return JSON.parse(el);
        });
      } else {
        return [];
      }
    } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }
  /**
   *
   * @param queue
   */
  public async pop(queue: string): Promise<boolean | Array<any>> {
    try {
      const element = await this.redis.blpop(queue, 1);

      if (element && element.length > 0) {
        return JSON.parse(element[1]);
      } else {
        return false;
      }
    } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }

  public async del(queue: string, id: string): Promise<boolean | Array<any>> {
    try {
      const elements = await this.redis.lrange(queue, 0, -1);
      const element = elements.find((el: string) => {
        const parsed = JSON.parse(el);
        if (parsed.id === id) {
          return parsed;
        }
      });

      const result = await this.redis.lrem(queue, 1, element);

      if (result) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }
  /**
   *
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> {
    try {
      const elements = await this.redis.del(queue);
      if (elements > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }
}

export class TXMQƨ {
  private queue: IQueue;

  constructor(sologenicOptions: any) {
    try {
      switch (sologenicOptions!.queueType) {
        case QUEUE_TYPE_STXMQ_MEMCACHE:
          this.queue = new MemcacheQueue(sologenicOptions!.options);
          break;

        case QUEUE_TYPE_STXMQ_REDIS:
          this.queue = new RedisQueue(sologenicOptions!.options);
          break;

        case QUEUE_TYPE_STXMQ_HASH:
        default:        
          this.queue = new HashQueue(sologenicOptions!.options);
          break;
      }
    }
    catch (error) { 
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
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> { 
    return this.queue.delAll(queue);
  }
}