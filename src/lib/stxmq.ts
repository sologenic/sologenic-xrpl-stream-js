import Redis from 'ioredis';
import MySQL from 'mysql';
import { v4 as uuid } from 'uuid';
import { MQTX } from '../types';

export class TXMQƨ {
  private datastore: { type: string; store: any } = { type: "", store: null };
  constructor(store: string, config: any) {
    try {
      const stores: any = {
        redis: new Redis(config),
        mysql: MySQL.createConnection(config)
      };
      this.datastore = {
        type: store,
        store: stores[store]
      }
      if (this.datastore.type === "mysql") {
        this.connectToMySQL();
      }
    } catch (error) {
      throw new Error('Unable to initialize TXMQ');
    }
  }

  // Only if store type is "mysql"
  public connectToMySQL(): void {
    this.datastore.store.connect((err: any) => {
      if (err) throw new Error("Cannot connect to MySQL");
    });
    this.datastore.store.query(
      `
        CREATE TABLE IF NOT EXISTS sologenic_generated (
          element VARCHAR (255) NOT NULL
        )
      `, (err: any, result: any) => {
        if (err) throw new Error("Error occured while generating table");
        console.log(result);
      }
    );
  }

  /**
   *
   * @param queue
   * @param data
   * @param id
   */
  public async add(queue: string | undefined, data: object, id?: string): Promise<MQTX | undefined> {
    try {
      const element = {
        id: typeof id !== 'undefined' ? id : uuid(),
        data
      };
      if (this.datastore.type === "redis") {
        const result = await this.datastore.store.rpush(queue, JSON.stringify(element));
        if (result > 0) {
          return element;
        } else {
          throw new Error("Can't add TX to Redis");
        }
      }
      if (this.datastore.type === "mysql") {
        const result = await new Promise((resolve, reject) => {
          this.datastore.store.query(
            `INSERT INTO sologenic_generated (
              element
            ) VALUES ("${JSON.stringify(element)}")`,
            (err: any, result: any) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
        if (result) {
          return element;
        } else {
          throw new Error("Can't add TX to MySQL");
        }
      }
      return undefined;
    } catch (error) {
      throw new Error("Can't add TX to store");
    }
  }
  /**
   *
   * @param queue
   * @param id
   */
  public async get(queue: string | undefined, id: string): Promise<MQTX | undefined> {
    try {
      if (this.datastore.type === "redis") {
        const elements = await this.datastore.store.lrange(queue, 0, -1);
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
      }
      if (this.datastore.type === "mysql") {
        const elements: any = await new Promise((resolve, reject) => {
          this.datastore.store.query(
            `
              SELECT * FROM sologenic_generated
            `,
            (err: any, result: any) => {
              if (err) reject(err);
              resolve(result);
            }
          );
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
        });
      }
      return undefined;
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
