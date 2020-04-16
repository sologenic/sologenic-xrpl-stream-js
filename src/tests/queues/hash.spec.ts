import anyTest, {TestInterface} from 'ava';
import { MQTX, QUEUE_TYPE_STXMQ_HASH } from '../../types/queues';
import { v4 as uuid } from 'uuid';

import TXMQƨ from '../../lib/queues';

const test = anyTest as TestInterface<{
  session: TXMQƨ,
  data: MQTX,
  queue: string
}>;

test.beforeEach(async t => {
  // Before each test create a unique queue
  t.context.queue = `queue_${uuid()}`;
  t.context.data = <MQTX>{ id: uuid(), data: {
    message: `Hello, World: ${uuid()}`
  }};

  t.context.session = new TXMQƨ({
    queueType: QUEUE_TYPE_STXMQ_HASH
  });
});

test.afterEach(async t => {
  // Cleanup after each test
  await t.context.session.delAll(t.context.queue);
});

test.serial('get all queues (should only be one at a time)', async t => {
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

test.serial('add item to the queue', async t => {
  var session = t.context.session;
  var result = await session.add(t.context.queue, t.context.data);

  t.is(typeof result.id, 'string');
  t.is(typeof result.data, 'object');

  var response = (await session.get(t.context.queue, result.id)) || {
    id: undefined
  };

  t.is(response.id, result.id);
});

test.serial("add item to the queue, with a custom id for", async t => {
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

  t.is(response!.id, custom_id);
});

test.serial('validate attempt to get an invalid object id is undefined', async t => {
  var session = t.context.session;

  t.true((await session.get(t.context.queue, 'barfoo')) === undefined);
});

test.serial('validate pop an item off the queue', async t => {
  var session = t.context.session;

  const result = await session.add(t.context.queue, t.context.data);

  let items = await session.getAll(t.context.queue);
  t.is(items.length, 1);

  await session.pop(t.context.queue);

  items = await session.getAll(t.context.queue);
  t.is(items.length, 0);
});

test.serial('store and retrieve multiple objects', async t => {
  try {
    var session = t.context.session;
    await t.context.session.delAll(t.context.queue);

    var objects: Array<MQTX> = [
      { id: '1', data: [ 'Message 1' ], created: Math.floor(new Date().getTime() / 1000) - 10 },
      { id: '2', data: [ 'Message 2' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
      { id: '3', data: [ 'Message 3' ], created: Math.floor(new Date().getTime() / 1000) - 10 },
      { id: '4', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
    ];

    for (var index in objects) {
      const add_result = await session.add(t.context.queue, objects[index]);
      t.is(typeof add_result.id, 'string');
      t.is(typeof add_result.data, 'object');

      const get_result = await session.get(t.context.queue, add_result.id);

      t.is(add_result.id, get_result!.id);
      t.deepEqual(add_result.data, get_result!.data);
    }

    let items = await session.getAll(t.context.queue);

    t.is(items.length, objects.length);

  } catch (error) {
    t.fail();
  }
});

test.serial('add and remove (delete) multiple objects from queue', async t => {
  try {
    var session = t.context.session;
    await t.context.session.delAll(t.context.queue);

    var objects: Array<MQTX> = [
      { id: '1', data: [ 'Message 1' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '2', data: [ 'Message 2' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
      { id: '3', data: [ 'Message 3' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '4', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
      { id: '5', data: [ 'Message 5' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
      { id: '6', data: [ 'Message 6' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
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
    t.is(typeof(await session.pop(t.context.queue)), 'object');

    items_ = <MQTX[]> await session.getAll(t.context.queue);
    t.true(await session.del(t.context.queue, items_[0].id));

    // Delete the remaining items, since all items should be gone now
    items_ = <MQTX[]> await session.getAll(t.context.queue);
    t.true(items_.length > 0);
    t.true(await session.delAll(t.context.queue));

    // Delete an item
    t.false(await session.del(t.context.queue, items_[0].id));

    // Pop an item off the queue
    t.is(await session.pop(t.context.queue), undefined);

  } catch (error) {
    t.fail();
  }
});

test.serial('delete items older than 900 seconds', async t => {
  var session = t.context.session;
  await t.context.session.delAll(t.context.queue);

  var objects: Array<MQTX> = [
    { id: '1', data: [ 'Message 1' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
    { id: '2', data: [ 'Message 2' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
    { id: '3', data: [ 'Message 3' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
    { id: '4', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
    { id: '5', data: [ 'Message 5' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
    { id: '6', data: [ 'Message 6' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
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
