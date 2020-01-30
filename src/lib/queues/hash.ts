import { MQTX, IQueue } from '../../types';

import { v4 as uuid } from 'uuid';

export default class HashQueue implements IQueue {
  private hash: Map<string, Array<MQTX>> = new Map<string, Array<MQTX>>();

  constructor(options: any) {
    options;
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
  public async add(queue: string, data: object, id?: string): Promise<MQTX> {
    const element = {
      id: typeof id !== 'undefined' ? id : uuid(),
      data
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
    return this._exist(queue) ? this.hash.get(queue) || [] : [];
  }

  /**
   *
   * @param queue
   * @description pop an element off the end of the queue
   */

  public async pop(queue: string): Promise<MQTX | boolean> {
    return new Promise((resolve, reject) => {
      try {
        if (this._exist(queue)) {
          let data = this.hash.get(queue) || [];

          if (data.length > 0) {
            let element = data.pop();

            this.hash.set(queue, data);
            resolve(element);
          }
          resolve(false);
        }
      } catch (error) {
        reject(false);
      }
    });
  }

  /**
   *
   * @param queue
   * @param id
   * @description delete an object by id from the queue
   */
  public async del(queue: string, id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        if (this._exist(queue)) {
          const data = this.hash.get(queue) || [];

          const filtered = data.filter(function(e) {
            return e.id !== id;
          });

          this.hash.set(queue, filtered);

          resolve(data.length - 1 === (this.hash.get(queue) || []).length);
        } else {
          resolve(false);
        }
      } catch (error) {
        reject(false);
      }
    });
  }

  /**
   *
   * @param queue
   * @description delete all elements from the queue
   */
  public delAll(queue: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        if (this._exist(queue)) {
          resolve(this.hash.delete(queue));
        }
      } catch (error) {
        reject(false);
      }
    });
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
