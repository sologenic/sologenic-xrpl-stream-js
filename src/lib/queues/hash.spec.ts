import anyTest, {TestInterface, after} from 'ava';

import { TXMQƨ } from '../stxmq';
import { MQTX, QUEUE_TYPE_STXMQ_HASH } from '../../types';

const test = anyTest as TestInterface<{
  session: any,
  data: any
}>;

test.before(async t => {
  t.context.data = { message: "Hello, World" }
  t.context.session = new TXMQƨ({
    queueType: QUEUE_TYPE_STXMQ_HASH
  });
});

test.serial('add to the queue', async t => {
  var session = t.context.session;
  var data = t.context.data;
  var queue = 'add_to_queue';

  var result = await session.add(queue, data);

  t.true(typeof result.id === 'string');
  t.true(typeof result.data === 'object');

  var response = (await session.get(queue, result.id)) || {
    id: undefined
  };

  t.true(response.id === result.id);
});

test.serial("add to the queue with custom id", async t => {
  var session = t.context.session;
  var data = t.context.data;
  var queue = "add_to_queue_with_hash_custom_id";
  var custom_id = 'foobar';

  await session.del(queue, custom_id);

  var result = await session.add(queue, data, custom_id);

  t.true(typeof(result.id) === 'string');
  t.true(typeof(result.data) === 'object');

  var response = await session.get(queue, custom_id) || {
    id: undefined
  };

  t.true(response.id === custom_id);
});

test.serial('validate retrieve with an invalid object identifier is undefined', async t => {
  var session = t.context.session;
  var queue = 'invalid_object_identifier';

  t.true((await session.get(queue, 'barfoo')) === undefined);
});

test.serial('store and retrieve objects', async t => {
  try {
    var session = t.context.session;
    var queue = 'store_and_retrieve';

    await session.delAll(queue);

    var objects: Array<MQTX> = [
      { id: '1', data: [ 'Message 1' ], created: Math.floor(new Date().getTime() / 1000) - 10 },
      { id: '2', data: [ 'Message 2' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
      { id: '3', data: [ 'Message 3' ], created: Math.floor(new Date().getTime() / 1000) - 10 },
      { id: '4', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
    ];

    for (var index in objects) {
      let result = await session.add(queue, objects[index]);
      let response = await session.get(queue, result.id);

      t.true(typeof result.id === 'string');
      t.true(typeof response.id === 'string');

      t.is(result.id, response.id);
    }

    let items = await session.getAll(queue);

    t.true(typeof items === "object");
    t.true(items.length === objects.length);

  } catch (error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});

test.serial('delete objects from queue', async t => {
  try {
    var session = t.context.session;
    var queue = 'delete_all_objects_from_queue';

    var objects: Array<MQTX> = [
      { id: '1', data: [ 'Message 1' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '2', data: [ 'Message 2' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
      { id: '3', data: [ 'Message 3' ], created: Math.floor(new Date().getTime() / 1000) - 901 },
      { id: '4', data: [ 'Message 4' ], created: Math.floor(new Date().getTime() / 1000) - 0 },
    ];

    // Empty the queue first
    await session.delAll(queue);

    // Get all items to make sure we've emptied the queue
    let items = await session.getAll(queue);
    items && t.true(items.length === 0, "Checking that items.length === 0");

    // Add each element to the queue
    for (var index in objects) {
      let _created_object = await session.add(queue, objects[index]);
      t.true(typeof _created_object !== 'undefined');

      // Get the object back from the queue
      var _result = await session.get(queue, _created_object.id);

      t.true(typeof _result !== 'undefined');
      t.true(_result.data.data[0] === objects[index].data[0]);
    }

    let beforeDeletedItems = await session.getAll(queue);

    // Delete everything older than 20 seconds
    let deletedItems: number = await session.deleteOlderThan(900);

    let afterDeletedItems = await session.getAll(queue);

    // console.log(`beforeDeletedItems: ${beforeDeletedItems.length}, deletedItems: ${deletedItems}, afterDeletedItems: ${afterDeletedItems.length}`);

    t.true(typeof afterDeletedItems === "object");
    t.true((beforeDeletedItems.length - deletedItems) === afterDeletedItems.length,
      "Checking that items.length === objects.length");

    /* Pop an item off the queue */
    t.true(typeof (await session.pop(queue)) === 'object',
      "Verify that the returned element is of type 'object'"
    );

    /* Delete an item */
    t.true(await session.del(queue, afterDeletedItems[0].id), 'Delete the first item');

    /* Delete the remaining items */
    t.true(await session.delAll(queue));

    /* Delete an item */
    t.false(
      await session.del(queue, afterDeletedItems[0].id),
      'Verify return type is false because there are no more elements to delete'
    );

    /* Pop an item off the queue */
    t.is(
      await session.pop(queue), undefined,
      'Verify return type is false because there are no more elements left to pop'
    );

    items = await session.getAll(queue);
    items && t.true(items.length === 0, "Checking that items.length === 0");
  } catch (error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});
