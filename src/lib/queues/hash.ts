import { MQTX, IQueue } from '../../types';

import { v4 as uuid } from 'uuid';

export default class HashQueue implements IQueue {
  private hash = new Map<any, Array<MQTX>>();

  constructor(options: any) {
    options;
  }

  /**
   *
   * @param queue
   * @param data
   * @param id
   */
  public async add(queue: string, data: object, id?: string): Promise<MQTX> {
    const element = {
      id: typeof id !== 'undefined' ? id : uuid(),
      data
    };

    var _queue = this.hash.has(queue) ? this.hash.get(queue) : new Array<MQTX>();

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
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {
    var _queue = this.hash.has(queue) ? this.hash.get(queue) : new Array<MQTX>();

    var found = undefined;

    if (_queue instanceof Array) {
      _queue.forEach((obj) => {
        if (obj.id == id)
          found = obj;
      });
    }

    return found;
  }

  /**
   *
   * @param queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    return this.hash.has(queue) ? this.hash.get(queue) || [] : [];
  }

  /**
   *
   * @param queue
   */
  public async pop(queue: string): Promise<boolean | Array<any>> {
    if (this.hash.has(queue)) {
      var _queue = this.hash.get(queue) || [];

      if (_queue.length > 0 && _queue.pop()) {
        this.hash.set(queue, _queue);
      } else {
        return false;
      }

      return _queue;
    }

    return false;
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async del(queue: string, id: string): Promise<boolean | any[]> {
    if (this.hash.has(queue)) {
      var _queue = this.hash.get(queue) || [];

      _queue.filter(function(value) {
        return value.id != id;
      });

      this.hash.set(queue, _queue);
    }

    return false;
  }

  /**
   *
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> {
    if (this.hash.has(queue)) {
      var _queue = new Array<MQTX>();

      this.hash.set(queue, _queue);

      return true;
    }

    return false;
  }
};
