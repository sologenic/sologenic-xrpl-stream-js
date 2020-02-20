import anyTest, {TestInterface} from 'ava';

import { TXMQƨ } from '../stxmq';
import { MQTX, QUEUE_TYPE_STXMQ_REDIS } from '../../types';

const test = anyTest as TestInterface<{
  session: any,
  data: any
}>;

test.before(async t => {
  t.context.data = { message: "Hello, World" }
  t.context.session = new TXMQƨ({
    queueType: QUEUE_TYPE_STXMQ_REDIS,
    redis: {
      host: 'localhost'
    }
  });
});

test.serial("add to the queue", async t => {
  var session = t.context.session;
  var data = t.context.data;
  var queue = "add_to_queue";

  var result = await session.add(queue, data);

  t.true(typeof(result.id) === 'string');
  t.true(typeof(result.data) === 'object');

  var response = await session.get(queue, result.id) || {
    id: undefined
  };

  t.true(response.id === result.id);

  // Make sure we cleanup after the tests
  await session.delAll(queue);
});

test.serial("add to the queue with custom id", async t => {
  var session = t.context.session;
  var data = t.context.data;
  var queue = "add_to_queue_with_redis_custom_id";
  var custom_id = 'foobar';

  await session.del(queue, custom_id);

  var result = await session.add(queue, data, custom_id);

  t.true(typeof(result.id) === 'string');
  t.true(typeof(result.data) === 'object');

  var response = await session.get(queue, custom_id) || {
    id: undefined
  };

  t.true(response.id === custom_id);

  // Make sure we cleanup after the tests
  await session.delAll(queue);
});

test.serial('validate retrieve with an invalid object identifier is undefined', async t => {
  var session = t.context.session;
  var queue = "invalid_object_identifier";

  t.true(await session.get(queue, "barfoo") === undefined);
});

test.serial('store and retrieve objects', async t => {
  try {
    var session = t.context.session;
    var queue = "store_and_retrieve";

    await session.delAll(queue);

    var objects: Array<MQTX> = [
      { id: '1', data: [ 'Message 1' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '2', data: [ 'Message 2' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '3', data: [ 'Message 3' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '4', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '5', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '6', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '7', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '8', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
    ];

    for (var index in objects) {
      let result = await session.add(queue, objects[index]);
      let response = await session.get(queue, result.id);

      t.true(typeof(result.id) === 'string');
      t.true(typeof(response.id) === 'string');

      t.is(result.id, response.id);
    }

    let items = await session.getAll(queue);

    if (items) {
      t.true(items.length === objects.length);
    } else {
      t.fail("Failing because items.length !== objects.length - 1");
    }

    // Make sure we cleanup after the tests
    await session.delAll(queue);

  } catch(error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});

test.serial('delete objects from queue', async t => {
  try {
    var session = t.context.session;
    var queue = "delete_all_objects_from_queue";

    var objects: Array<MQTX> = [
      { id: '1', data: [ 'Message 1' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '2', data: [ 'Message 2' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '3', data: [ 'Message 3' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '4', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '5', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '6', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '7', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
      { id: '8', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) },
    ];

    // Empty the queue first
    await session.delAll(queue);

    // Get all items to make sure we've emptied the queue
    let items = await session.getAll(queue);
    items && t.true(items.length === 0, "Checking that items.length === 0");

    // Recreate the queue and add the new objects
    objects.forEach(async function(v) {
      await session.add(queue, v);
    });

    // Get the items before we perform a cleanup
    let beforeDeletedItems = await session.getAll(queue);

    // Delete everything older than 900 seconds (15 minutes)
    let deletedItemsCount: number = await session.deleteOlderThan(900);

    // Get the items after the cleanup
    let afterDeletedItems = await session.getAll(queue);

    // Make sure that the beforeCleanup - deletedItemsCount === afterCleanup
    // console.log(`beforeDeletedItems: ${beforeDeletedItems.length}, deletedItems: ${deletedItemsCount}, afterDeletedItems: ${afterDeletedItems.length}`);

    t.true(typeof afterDeletedItems === "object");
    t.true((beforeDeletedItems.length - deletedItemsCount) === afterDeletedItems.length,
      "Checking that items.length === objects.length");

    /* Pop an item off the queue */
    t.true(typeof(await session.pop(queue)) === 'object', "Verify that the returned element is of type 'object'");

    items = await session.getAll(queue);

    /* Delete an item */
    t.true(await session.del(queue, items[0].id), "Delete the first item");

    /* Delete the remaining items */
    t.true(await session.delAll(queue));

    /* Delete an item */
    t.false(await session.del(queue, items[0].id), "Verify return type is false because there are no more elements to delete");

    /* Pop an item off the queue */
    t.is(await session.pop(queue), undefined,
      'Verify return type is false because there are no more elements left to pop'
    );

    items = await session.getAll(queue);

    items && t.true(items.length === 0, "Checking that items.length === 0");
  } catch (error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});
