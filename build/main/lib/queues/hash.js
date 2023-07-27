"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class HashQueue {
    constructor(options) {
        this.hash = new Map();
        options;
    }
    async deleteQueue(queue) {
        if (this.hash.hasOwnProperty(queue)) {
            return this.hash.delete(queue);
        }
        return false;
    }
    async queues() {
        var keys = Array();
        for (var key in this.hash) {
            if (this.hash.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }
    _exist(queue) {
        return this.hash.has(queue);
    }
    /**
     *
     * @param queue
     * @param data
     * @param id
     * @description add an object to the queue
     */
    async add(queue, data, id) {
        const element = {
            id: typeof id !== 'undefined' ? id : uuid_1.v4(),
            created: data.hasOwnProperty('created') ? data.created : Math.floor(new Date().getTime() / 1000),
            data,
        };
        var _queue = this._exist(queue) ? this.hash.get(queue) : new Array();
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
    async get(queue, id) {
        var _queue = this._exist(queue) ? this.hash.get(queue) : new Array();
        var found = undefined;
        if (_queue instanceof Array) {
            _queue.forEach(obj => {
                if (obj.id === id)
                    found = obj;
            });
        }
        return found;
    }
    /**
     *
     * @param queue
     * @description returns all elements of the queue
     */
    async getAll(queue) {
        return this.hash.get(queue) || Array();
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
    async pop(queue) {
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
        }
        catch (error) {
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
    async del(queue, id) {
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
    async delAll(queue) {
        return this.hash.delete(queue);
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
exports.default = HashQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcXVldWVzL2hhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrQkFBa0M7QUFFbEMsTUFBcUIsU0FBUztJQUc1QixZQUFZLE9BQXNDO1FBRjFDLFNBQUksR0FBNkIsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFHdEUsT0FBUSxDQUFDO0lBQ1gsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBYTtRQUNwQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTTtRQUNqQixJQUFJLElBQUksR0FBRyxLQUFLLEVBQVUsQ0FBQztRQUUzQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQWE7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBVSxFQUFFLEVBQVc7UUFDckQsTUFBTSxPQUFPLEdBQUc7WUFDZCxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQUksRUFB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