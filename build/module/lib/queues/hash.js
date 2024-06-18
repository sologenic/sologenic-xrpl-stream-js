import { v4 as uuid } from 'uuid';
export default class HashQueue {
    hash = new Map();
    constructor(options) {
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
            id: typeof id !== 'undefined' ? id : uuid(),
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
