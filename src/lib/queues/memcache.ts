import Memcached from 'memcached';
import { MQTX, IQueue } from '../../types';

import { v4 as uuid } from 'uuid';

export default class MemcacheQueue implements IQueue {
  private memcache: any;

  constructor(options: any) {
    try {
      this.memcache = new Memcached(options!.locations);
      this.memcache;
      uuid;

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
    queue; data; id;

    const element = {
      id: typeof id !== 'undefined' ? id : uuid(),
      data
    };
    
    return element;
  }
  /**
   *
   * @param queue
   * @param id
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {
    queue; id;

    return undefined;
  }
  /**
   *
   * @param queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    queue;

    return [];
  }
  /**
   *
   * @param queue
   */
  public async pop(queue: string): Promise<boolean | Array<any>> {
    queue;

    return false;
  }

  public async del(queue: string, id: string): Promise<boolean | Array<any>> {
    queue; id

    return false;
  }
  /**
   *
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> {
    queue;

    return false;
  }
}  