"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const uuid_1 = require("uuid");
class RedisQueue {
    constructor(options) {
        try {
            this.redis = new ioredis_1.default(options);
        }
        catch (error) {
            throw new Error('Unable to initialize TXMQ');
        }
    }
    async deleteQueue(queue) {
        if (await this.redis.exists(queue)) {
            await this.redis.del(queue);
            return true;
        }
        return false;
    }
    async queues() {
        return this.redis.keys('*');
    }
    /**
     *
     * @param queue
     * @param data
     * @param id
     */
    async add(queue, data, id) {
        try {
            const element = {
                id: typeof id !== 'undefined' ? id : (0, uuid_1.v4)(),
                created: data.hasOwnProperty('created') ? data.created : Math.floor(new Date().getTime() / 1000),
                data
            };
            const result = await this.redis.rpush(queue, JSON.stringify(element));
            if (result > 0) {
                return element;
            }
            else {
                throw new Error("Can't get TX from Redis");
            }
        }
        catch (error) {
            throw new Error("Can't get TX from Redis");
        }
    }
    /**
     *
     * @param queue
     * @param id
     */
    async get(queue, id) {
        try {
            const elements = await this.redis.lrange(queue, 0, -1);
            const element = elements.find((el) => {
                const parsed = JSON.parse(el);
                if (parsed.id === id) {
                    return parsed;
                }
            });
            if (element) {
                return JSON.parse(element);
            }
            else {
                return undefined;
            }
        }
        catch (error) {
            throw new Error("Can't get TX from Redis");
        }
    }
    /**
     *
     * @param queue
     */
    async getAll(queue) {
        const elements = await this.redis.lrange(queue, 0, -1);
        if (elements.length > 0) {
            return elements.map((el) => {
                return JSON.parse(el);
            });
        }
        return [];
    }
    /**
     *
     * @param queue
     */
    async pop(queue) {
        try {
            const element = await this.redis.blpop(queue, 1);
            /*
            If the returned element not undefined
            and its length is greater than 0, return the object
            */
            return (element && element.length > 0) ? JSON.parse(element[1]) : undefined;
        }
        catch (error) {
            throw new Error("Can't get TX from Redis");
        }
    }
    async del(queue, id) {
        try {
            const elements = await this.redis.lrange(queue, 0, -1);
            const element = elements.find((el) => {
                const parsed = JSON.parse(el);
                if (parsed.id === id) {
                    return parsed;
                }
            });
            const result = await this.redis.lrem(queue, 1, element);
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            throw new Error("Can't get TX from Redis");
        }
    }
    /**
     *
     * @param queue
     */
    async delAll(queue) {
        try {
            const elements = await this.redis.del(queue);
            if (elements > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            throw new Error("Can't get TX from Redis");
        }
    }
    async appendEvent(queue, id, event_name) {
        try {
            let result;
            result = await this.get(queue, id);
            if (result && typeof result.data.events === 'undefined')
                result.data.events = [];
            result.data.events.push(event_name);
            await this.del(queue, id);
            await this.add(queue, result.data, id);
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.default = RedisQueue;
