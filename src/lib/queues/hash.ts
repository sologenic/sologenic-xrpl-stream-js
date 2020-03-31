import { MQTX, IQueue, HashTransactionHandlerOptions } from '../../types';

import { v4 as uuid } from 'uuid';

export default class HashQueue implements IQueue {
  private hash: Map<string, Array<MQTX>> = new Map<string, Array<MQTX>>();

  constructor(options: HashTransactionHandlerOptions) {
    options!;
  }

  public async deleteQueue(queue: string): Promise<boolean> {
    if (this.hash.hasOwnProperty(queue)) {
      return this.hash.delete(queue);
    }

    return false;
  }

  public async queues(): Promise<string[]> {
    var keys = Array<string>();

    for (var key in this.hash) {
        if (this.hash.hasOwnProperty(key)) {
          keys.push(key);
        }
    }

    return keys;
  }

  private _exist(queue: string): boolean {
    return this.hash.has(queue);
  }

  /**
   *
   * @param queue
   * @param data
   * @param id
   * @description add an object to the queue
   */
  public async add(queue: string, data: MQTX, id?: string): Promise<MQTX> {
    const element = {
      id: typeof id !== 'undefined' ? id : uuid(),
      created: data.hasOwnProperty('created') ? data.created : Math.floor(new Date().getTime() / 1000),
      data,
    };

    var _queue = this._exist(queue) ? this.hash.get(queue) : new Array<MQTX>();

    if (_queue instanceof Array) {
      _queue.push(element);

      this.hash.set(queue, _queue);
    }

    return element;
  }

  /**
   *
   * @param queue
   * @param id
   * @description returns a specific object within the queue
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {
    var _queue = this._exist(queue) ? this.hash.get(queue) : new Array<MQTX>();

    var found = undefined;

    if (_queue instanceof Array) {
      _queue.forEach(obj => {
        if (obj.id === id) found = obj;
      });
    }

    return found;
  }

  /**
   *
   * @param queue
   * @description returns all elements of the queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    return this.hash.get(queue) || Array<MQTX>();

    /*
    this.hash.forEach(function(_, key, data) {
      elements.set(key, data.get(key) || []);
    });

    return elements;
    */
  }

  /**
   *
   * @param queue
   * @description pop an element off the end of the queue
   */

  public async pop(queue: string): Promise<MQTX | undefined> {
    try {
      if (this._exist(queue)) {
        const data = this.hash.get(queue) || [];

        if (data.length > 0) {
          const item = data.pop();

          this.hash.set(queue, data);

          return item;
        }

        return undefined;
      }
    } catch (error) {
      return undefined;
    }

    return undefined;
  }

  /**
   *
   * @param queue
   * @param id
   * @description delete an object by id from the queue
   */
  public async del(queue: string, id: string): Promise<boolean> {
    if (this._exist(queue)) {
      const data = this.hash.get(queue);

      if (typeof data !== 'undefined') {
        const filteredObjects = data.filter(e => e.id !== id);

        if (data.length > filteredObjects.length) {
          this.hash.set(queue, filteredObjects);

          return true;
        }
      }
    }

    return false;
  }

  /**
   * @param queue
   * @description delete all elements from the queue
   */
  public async delAll(queue: string): Promise<boolean> {
    return this.hash.delete(queue);
  }

  public async appendEvent(
    queue: string,
    id: string,
    event_name: string
  ): Promise<boolean> {
    try {
      let result;

      result = <MQTX>await this.get(queue, id);

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
