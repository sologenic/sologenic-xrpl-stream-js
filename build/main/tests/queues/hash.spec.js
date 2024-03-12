"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const queues_1 = require("../../types/queues");
const uuid_1 = require("uuid");
const queues_2 = __importDefault(require("../../lib/queues"));
const test = ava_1.default;
test.beforeEach(async (t) => {
    // Before each test create a unique queue
    t.context.queue = `queue_${(0, uuid_1.v4)()}`;
    t.context.data = { id: (0, uuid_1.v4)(), data: {
            message: `Hello, World: ${(0, uuid_1.v4)()}`
        } };
    t.context.session = new queues_2.default({
        queueType: queues_1.QUEUE_TYPE_STXMQ_HASH
    });
});
test.afterEach(async (t) => {
    // Cleanup after each test
    await t.context.session.delAll(t.context.queue);
});
test.serial('get all queues (should only be one at a time)', async (t) => {
    var session = t.context.session;
    var result = await session.add(t.context.queue, t.context.data);
    t.is(typeof result.id, 'string');
    t.is(typeof result.data, 'object');
    var response = (await session.get(t.context.queue, result.id)) || {
        id: undefined
    };
    t.is(response.id, result.id);
    const queues = await t.context.session.queues();
    t.true(queues.length > 0);
});
test.serial('add item to the queue', async (t) => {
    var session = t.context.session;
    var result = await session.add(t.context.queue, t.context.data);
    t.is(typeof result.id, 'string');
    t.is(typeof result.data, 'object');
    var response = (await session.get(t.context.queue, result.id)) || {
        id: undefined
    };
    t.is(response.id, result.id);
});
test.serial("add item to the queue, with a custom id for", async (t) => {
    var session = t.context.session;
    var custom_id = 'foobar';
    // Expect the the object does not already exist
    t.false(await session.del(t.context.queue, custom_id));
    var result = await session.add(t.context.queue, t.context.data, custom_id);
    t.is(typeof result.id, 'string');
    t.is(typeof result.data, 'object');
    var response = await session.get(t.context.queue, custom_id);
    if (typeof response === 'undefined') {
        t.fail();
    }
    t.is(response.id, custom_id);
});
test.serial('validate attempt to get an invalid object id is undefined', async (t) => {
    var session = t.context.session;
    t.true((await session.get(t.context.queue, 'barfoo')) === undefined);
});
test.serial('validate pop an item off the queue', async (t) => {
    var session = t.context.session;
    const result = await session.add(t.context.queue, t.context.data);
    let items = await session.getAll(t.context.queue);
    t.is(items.length, 1);
    await session.pop(t.context.queue);
    items = await session.getAll(t.context.queue);
    t.is(items.length, 0);
});
test.serial('store and retrieve multiple objects', async (t) => {
    try {
        var session = t.context.session;
        await t.context.session.delAll(t.context.queue);
        var objects = [
            { id: '1', data: ['Message 1'], created: Math.floor(new Date().getTime() / 1000) - 10 },
            { id: '2', data: ['Message 2'], created: Math.floor(new Date().getTime() / 1000) - 0 },
            { id: '3', data: ['Message 3'], created: Math.floor(new Date().getTime() / 1000) - 10 },
            { id: '4', data: ['Message 4'], created: Math.floor(new Date().getTime() / 1000) - 0 },
        ];
        for (var index in objects) {
            const add_result = await session.add(t.context.queue, objects[index]);
            t.is(typeof add_result.id, 'string');
            t.is(typeof add_result.data, 'object');
            const get_result = await session.get(t.context.queue, add_result.id);
            t.is(add_result.id, get_result.id);
            t.deepEqual(add_result.data, get_result.data);
        }
        let items = await session.getAll(t.context.queue);
        t.is(items.length, objects.length);
    }
    catch (error) {
        t.fail();
    }
});
test.serial('add and remove (delete) multiple objects from queue', async (t) => {
    try {
        var session = t.context.session;
        await t.context.session.delAll(t.context.queue);
        var objects = [
            { id: '1', data: ['Message 1'], created: Math.floor(new Date().getTime() / 1000) - 901 },
            { id: '2', data: ['Message 2'], created: Math.floor(new Date().getTime() / 1000) - 0 },
            { id: '3', data: ['Message 3'], created: Math.floor(new Date().getTime() / 1000) - 901 },
            { id: '4', data: ['Message 4'], created: Math.floor(new Date().getTime() / 1000) - 0 },
            { id: '5', data: ['Message 5'], created: Math.floor(new Date().getTime() / 1000) - 0 },
            { id: '6', data: ['Message 6'], created: Math.floor(new Date().getTime() / 1000) - 0 },
        ];
        // Verify our queue is empty
        let items = await session.getAll(t.context.queue);
        t.true(items.length === 0);
        // Add each element to the queue
        for (var index in objects) {
            let object_ = await session.add(t.context.queue, objects[index]);
            t.is(typeof object_, 'object');
            // Verify the object is returned from the queue
            var result_ = await session.get(t.context.queue, object_.id);
            t.is(typeof result_, 'object');
            t.deepEqual(object_, result_);
        }
        // Delete all items older than 900 seconds (we expect that we'll delete two)
        let deleted_ = await session.deleteOlderThan(900, t.context.queue);
        let items_ = await session.getAll(t.context.queue);
        // Expect that the number of items in the queue is now equal to the initial object
        // count minus the deleted_ items count
        t.is(items_.length, objects.length - deleted_);
        // Pop an item from the queue (since we should have only deleted two items)
        // we should have another 4 items on the queue still
        t.is(typeof (await session.pop(t.context.queue)), 'object');
        items_ = await session.getAll(t.context.queue);
        t.true(await session.del(t.context.queue, items_[0].id));
        // Delete the remaining items, since all items should be gone now
        items_ = await session.getAll(t.context.queue);
        t.true(items_.length > 0);
        t.true(await session.delAll(t.context.queue));
        // Delete an item
        t.false(await session.del(t.context.queue, items_[0].id));
        // Pop an item off the queue
        t.is(await session.pop(t.context.queue), undefined);
    }
    catch (error) {
        t.fail();
    }
});
test.serial('delete items older than 900 seconds', async (t) => {
    var session = t.context.session;
    await t.context.session.delAll(t.context.queue);
    var objects = [
        { id: '1', data: ['Message 1'], created: Math.floor(new Date().getTime() / 1000) - 901 },
        { id: '2', data: ['Message 2'], created: Math.floor(new Date().getTime() / 1000) - 0 },
        { id: '3', data: ['Message 3'], created: Math.floor(new Date().getTime() / 1000) - 901 },
        { id: '4', data: ['Message 4'], created: Math.floor(new Date().getTime() / 1000) - 0 },
        { id: '5', data: ['Message 5'], created: Math.floor(new Date().getTime() / 1000) - 0 },
        { id: '6', data: ['Message 6'], created: Math.floor(new Date().getTime() / 1000) - 0 },
    ];
    // Add each element to the queue
    for (var index in objects) {
        let object_ = await session.add(t.context.queue, objects[index]);
        t.is(typeof object_, 'object');
        // Verify the object is returned from the queue
        var result_ = await session.get(t.context.queue, object_.id);
        t.is(typeof result_, 'object');
        t.deepEqual(object_, result_);
    }
    // Verify our queue is equal to the same number of objects we have
    let items = await session.getAll(t.context.queue);
    t.true(items.length === objects.length);
    // Delete entries older than 900 seconds
    const deleted_ = await t.context.session.deleteOlderThan(900, t.context.queue);
    // Get all items in our queue
    items = await session.getAll(t.context.queue);
    t.is(deleted_, 2);
    t.true(items.length === objects.length - deleted_);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Rlc3RzL3F1ZXVlcy9oYXNoLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBMkM7QUFDM0MsK0NBQWlFO0FBQ2pFLCtCQUFrQztBQUVsQyw4REFBcUM7QUFFckMsTUFBTSxJQUFJLEdBQUcsYUFJWCxDQUFDO0FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDeEIseUNBQXlDO0lBQ3pDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBQSxTQUFJLEdBQUUsRUFBRSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFTLEVBQUUsRUFBRSxFQUFFLElBQUEsU0FBSSxHQUFFLEVBQUUsSUFBSSxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsSUFBQSxTQUFJLEdBQUUsRUFBRTtTQUNuQyxFQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLGdCQUFLLENBQUM7UUFDNUIsU0FBUyxFQUFFLDhCQUFxQjtLQUNqQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ3ZCLDBCQUEwQjtJQUMxQixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQywrQ0FBK0MsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDckUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxNQUFNLEdBQUcs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