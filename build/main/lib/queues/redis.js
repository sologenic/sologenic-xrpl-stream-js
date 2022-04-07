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
                id: typeof id !== 'undefined' ? id : uuid_1.v4(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3F1ZXVlcy9yZWRpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE0QjtBQU81QiwrQkFBa0M7QUFFbEMsTUFBcUIsVUFBVTtJQUczQixZQUFZLE9BQXVDO1FBQ2pELElBQUk7WUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksaUJBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBYTtRQUNwQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU1QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU07UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFVLEVBQUUsRUFBVztRQUNyRCxJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUc7Z0JBQ2QsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFJLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENB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