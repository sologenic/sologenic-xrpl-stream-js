import { v4 as uuid } from 'uuid';
export default class HashQueue {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvcXVldWVzL2hhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFTO0lBRzVCLFlBQVksT0FBc0M7UUFGMUMsU0FBSSxHQUE2QixJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUd0RSxPQUFRLENBQUM7SUFDWCxDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBQ3BDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNO1FBQ2pCLElBQUksSUFBSSxHQUFHLEtBQUssRUFBVSxDQUFDO1FBRTNCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxNQUFNLENBQUMsS0FBYTtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFVLEVBQUUsRUFBVztRQUNyRCxNQUFNLE9BQU8sR0FBRztZQUNkLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FB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