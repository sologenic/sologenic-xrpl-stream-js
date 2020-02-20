import Redis from 'ioredis';
import { MQTX, IQueue, RedisTransactionHandlerOptions } from '../../types';

import { v4 as uuid } from 'uuid';

export default class RedisQueue implements IQueue {
    private redis: any;

    constructor(options: RedisTransactionHandlerOptions) {
      try {
        this.redis = new Redis(options);
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
    public async add(queue: string, data: MQTX, id?: string): Promise<MQTX> {
      try {
        const element = {
          id: typeof id !== 'undefined' ? id : uuid(),
          created: data.created ? data.created : Math.floor(new Date().getTime() / 1000),
          data
        };
        const result = await this.redis.rpush(queue, JSON.stringify(element));
        if (result > 0) {
          return element;
        } else {
          throw new Error("Can't get TX from Redis");
        }
      } catch (error) {
        throw new Error("Can't get TX from Redis");
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
    public async getAll(queue?: string): Promise<Array<MQTX> | Map<string, Array<MQTX>>> {
      try {
        if (queue) {
          const elements = await this.redis.lrange(queue, 0, -1);

          if (elements.length > 0) {
            return elements.map((el: string) => {
              return JSON.parse(el);
            });
          }
        } else {
          let keys = [];
          let result = new Map<string, Array<MQTX>>();

          if (typeof queue === 'undefined') {
            keys.push(...(await this.redis.keys('*')));
          }

          for (const key in keys) {
            const elements = await this.redis.lrange(keys[key], 0, -1);

            if (elements.length > 0) {
              if (typeof keys[key] !== 'undefined') {
                result.set(keys[key], elements.map((el: string) => {
                  return JSON.parse(el);
                }));
              }
            } else {
              result.set(keys[key], []);
            }
          }

          return result;
        }

        return [];
      } catch (error) {
        throw new Error("Can't get TX from Redis");
      }
    }

    /**
     *
     * @param queue
     */
    public async pop(queue: string): Promise<MQTX | undefined> {
      try {
        const element = await this.redis.blpop(queue, 1);

        /*
        If the returned element not undefined
        and its length is greater than 0, return the object
        */

        return (element && element.length > 0) ? JSON.parse(element[1]) : undefined;

        } catch (error) {
        throw new Error("Can't get TX from Redis");
      }
    }

    public async del(queue: string, id: string): Promise<boolean> {
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

    public async appendEvent(queue: string, id: string, event_name: string): Promise<boolean> {
      try {
        let result;

        result = <MQTX> await this.get(queue, id);

        if (result && typeof result.data.events === 'undefined')
          result.data.events = [];

        result.data.events.push(event_name);

        await this.del(queue, id);
        await this.add(queue, result!.data, id);

        return true;
      } catch (error) {
        return false;
      }
    }
}
