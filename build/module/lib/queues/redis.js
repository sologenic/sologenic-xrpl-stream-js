import Redis from 'ioredis';
import { v4 as uuid } from 'uuid';
export default class RedisQueue {
    constructor(options) {
        try {
            this.redis = new Redis(options);
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
                id: typeof id !== 'undefined' ? id : uuid(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3F1ZXVlcy9yZWRpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFPNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTSxDQUFDLE9BQU8sT0FBTyxVQUFVO0lBRzNCLFlBQVksT0FBdUM7UUFDakQsSUFBSTtZQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQWE7UUFDcEMsSUFBSSxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBVSxFQUFFLEVBQVc7UUFDckQsSUFBSTtZQUNGLE1BQU0sT0FBTyxHQUFHO2dCQUNkLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDaEcsSUFBSTthQUNMLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUM1QztTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQVU7UUFDeEMsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRTtnQkFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDcEIsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxPQUFPLFNBQVMsQ0FBQzthQUNsQjtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFhO1FBQy9CLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZELElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBVSxFQUFFLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFhO1FBQzVCLElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqRDs7O2NBR0U7WUFFRixPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUUzRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFVO1FBQ3hDLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBVSxFQUFFLEVBQUU7Z0JBQzNDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRTlCLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3BCLE9BQU8sTUFBTSxDQUFDO2lCQUNmO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFeEQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFDRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQWE7UUFDL0IsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0MsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBYSxFQUFFLEVBQVUsRUFBRSxVQUFrQjtRQUNwRSxJQUFJO1lBQ0YsSUFBSSxNQUFNLENBQUM7WUFFWCxNQUFNLEdBQVUsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUxQyxJQUFJLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVc7Z0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFeEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Q0FDSiJ9