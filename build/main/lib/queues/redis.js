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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3F1ZXVlcy9yZWRpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE0QjtBQU81QiwrQkFBa0M7QUFFbEMsTUFBcUIsVUFBVTtJQUczQixZQUFZLE9BQXVDO1FBQ2pELElBQUksQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBQ3BDLElBQUksTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU07UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFVLEVBQUUsRUFBVztRQUNyRCxJQUFJLENBQUM7WUFDSCxNQUFNLE9BQU8sR0FBRztnQkFDZCxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUEsU0FBSSxHQUFFO2dCQUMzQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENB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