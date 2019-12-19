import { Client } from 'memjs';
import { v4 as uuid } from 'uuid';
import { IQueue, MQTX } from '../../types';

export default class MemcacheQueue implements IQueue {
  private client: Client;

  constructor(options: any) {
    this.client = Client.create(options.servers, options.clientOpts);
  }

  /**
   *
   * @param queue
   * @param data
   * @param id
   */
  public async add(queue: string, data: object, id?: string): Promise<MQTX> {
    try{
      const elem: MQTX = {
        id: typeof id !== "undefined" ? id : uuid(),
        data
      };
      const q = await this.client.get(queue);
      if (!q || !q.value) {
        const newQueue = await this.client.add(queue, new Buffer(
          JSON.stringify([elem])
        ),{});
        if (newQueue) {
          return elem;
        } else {
          throw new Error("Can't add TX to Memcache");
        }
      }
      const elements: MQTX[] = JSON.parse(
        q.value.toString()
      );
      const newArray = elements;
      newArray.push(elem);
      const added = await this.client.set(queue, new Buffer(JSON.stringify(newArray)), {});
      if (added) {
        return elem;
      } else {
        throw new Error("Can't add TX to Memcache");
      }
    } catch (error) {
      throw new Error(error.message || "Can't add TX to Memcache");
    }
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async get(queue: string, id: string): Promise<MQTX | undefined> {
    try {
      const q = await this.client.get(queue);
      if (!q || !q.value) {
        throw new Error("Queue doesn't exist");
      }
      const elements: MQTX[] = JSON.parse(
        q.value.toString()
      );
      const element = elements.find(i => i.id === id);
      return element || undefined;
    } catch (error) {
      throw new Error(error.message || "Can't get TX from Memcache");
    }
  }

  /**
   *
   * @param queue
   */
  public async getAll(queue: string): Promise<Array<MQTX>> {
    try {
      const q = await this.client.get(queue);
      if (!q || !q.value) {
        throw new Error("Queue doesn't exist");
      }
      const elements: MQTX[] = JSON.parse(
        q.value.toString()
      );
      return elements.length > 0 ? elements : [];
    } catch (error) {
      throw new Error(error.message || "Can't get TX from Memcached");
    }
  }

  /**
   *
   * @param queue
   */
  public async pop(queue: string): Promise<boolean | Array<any>> {
    try {
      const q = await this.client.get(queue);
      if (!q || !q.value) {
        throw new Error("Queue doesn't exist");
      }
      const elements: MQTX[] = JSON.parse(
        q.value.toString()
      );
      const newArray = elements;
      newArray.shift();
      const refreshed = await this.client.set(queue, new Buffer(JSON.stringify(newArray)), {});
      return refreshed;
    } catch (error) {
      throw new Error(error.message || "Can't remove TX from Memcached");
    }
  }

  /**
   *
   * @param queue
   * @param id
   */
  public async del(queue: string, id: string): Promise<boolean | Array<any>> {
    try {
      const q = await this.client.get(queue);
      if (!q || !q.value) {
        throw new Error("Queue doesn't exist");
      }
      const elements: MQTX[] = JSON.parse(
        q.value.toString()
      );
      const filtered = elements.filter(item => item.id !== id);
      const refreshed = await this.client.set(queue, new Buffer(JSON.stringify(filtered)), {});
      return refreshed;
    } catch (error) {
      throw new Error(error.message || "Can't remove TX from Memcached");
    }
  }

  /**
   *
   * @param queue
   */
  public async delAll(queue: string): Promise<boolean> {
    try {
      const q = await this.client.get(queue);
      if (!q || !q.value) {
        throw new Error("Queue doesn't exist");
      }
      const d = await this.client.delete(queue);
      return d;
    } catch (error) {
      throw new Error("Can't remove TX from Memcached");
    }
  }
}

