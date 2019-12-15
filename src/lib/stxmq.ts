import Redis from 'ioredis';
import MySQL from 'mysql';
import { v4 as uuid } from 'uuid';
import { MQTX } from '../types';

export class TXMQƨ {
  private datastore: { type: string; store: any } = { type: "", store: null };
  constructor(store: string, config: any) {
    try {
      const stores: any = {
        redis: store === "redis" ? new Redis(config) : null,
        mysql: store === "mysql" ? MySQL.createConnection(config) : null
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
      if (err) { throw new Error("Cannot connect to MySQL"); }
    });
    this.datastore.store.query(
      `
        CREATE TABLE IF NOT EXISTS sologenic_generated (
          id INTEGER AUTO_INCREMENT
          element VARCHAR (255) NOT NULL
        )
      `, (err: any, result: any) => {
        if (err) { throw new Error("Error occured while generating table"); }
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
            (err: any, obj: any) => {
              if (err) { reject(err); }
              resolve(obj);
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
              if (err) { reject(err); }
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
      throw new Error("Can't get TX from store");
    }
  }
  /**
   *
   * @param queue
   */
  public async getAll(queue?: string): Promise<Array<MQTX>> {
    try {
      if (this.datastore.type === "redis") {
        const elements = await this.datastore.store.lrange(queue, 0, -1);

        if (elements.length > 0) {
          return elements.map((el: string) => {
            return JSON.parse(el);
          });
        } else {
          return [];
        }
      }
      if (this.datastore.type === "mysql") {
        const elements: any = await new Promise((resolve, reject) => {
          this.datastore.store.query(
            "SELECT * FROM sologenic_generated",
            (err: any, results: any) => {
              if (err) { reject(err); }
              resolve(results);
            }
          );
        });
        if (elements.length > 0) {
          return elements.map((el: string) => JSON.parse(el));
        } else {
          return [];
        }
      }
      return [];
    } catch (error) {
      throw new Error("Can't get TX from store");
    }
  }
  /**
   *
   * @param queue
   */
  public async pop(queue?: string): Promise<boolean | Array<any>> {
    try {
      if (this.datastore.type === "redis") {
        const element = await this.datastore.store.blpop(queue, 1);
        return (element && element.length > 0) ? [JSON.parse(element[1])] : false;
      }
      if (this.datastore.type === "mysql") {
        const element: any = await new Promise((resolve, reject) => {
          this.datastore.store.query(
            `DELETE FROM sologenic_generated WHERE id = (SELECT MAX(id) FROM sologenic_generated)`,
            (err: any, results: any) => {
              if (err) { reject(err); }
              resolve(results.affectedRows);
            }
          );
        });
        return (element && element > 0) ? [element] : false;
      }
      return false;
    } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }

  public async del(queue: string | undefined, id: string): Promise<boolean | Array<any>> {
    try {
      if (this.datastore.type === "redis") {
        const elements = await this.datastore.store.lrange(queue, 0, -1);
        const element = elements.find((el: string) => {
        const parsed = JSON.parse(el);
        return parsed.id === id;
      });

      const result = await this.datastore.store.lrem(queue, 1, element);

      if (result) {
        return true;
      } else {
        return false;
      }
    }

    if (this.datastore.type === "mysql") {
      const elements: any = await new Promise((resolve, reject) => {
        this.datastore.store.query(
          "SELECT * FROM sologenic_generated",
          (err: any, results: any) => {
            if (err) { reject(err); }
            resolve(results);
          }
        );
      });
      const element = elements.find((el: string) => {
        const parsed = JSON.parse(el);
        return parsed.id === id;
      });
      const r: any = await new Promise((resolve, reject) => {
        this.datastore.store.query(
          "DELETE FROM sologenic_generated WHERE element = ?",
          element,
          (err: any, results: any) => {
            if (err) { reject(err); }
            resolve(results.affectedRows);
          }
        );
      });
      return r > 0;
    }
    return false;
  } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }
  /**
   *
   * @param queue
   */
  public async delAll(queue?: string): Promise<boolean> {
    try {
      if (this.datastore.type === "redis") {
        const elements = await this.datastore.store.del(queue);
        return elements > 0;
      }
      if (this.datastore.type === "mysql") {
        const elements: any = await new Promise((resolve, reject) => {
          this.datastore.store.query(
            "DELETE FROM sologenic_generated",
            (err: any, results: any) => {
              if (err) { reject(err); }
              resolve(results.affectedRows);
            }
          );
        });
        return elements > 0;
      }
      return false;
    } catch (error) {
      throw new Error("Can't get TX from Redis");
    }
  }
}
