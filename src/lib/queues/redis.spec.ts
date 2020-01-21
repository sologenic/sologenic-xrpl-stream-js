import test from 'ava';

import RedisQueue from './redis';

const _ = require('underscore');

test.before(async t => {
  _.extend(t.context, {
    data: {
      message: "Hello, World"
    },
    session: new RedisQueue({})
  });
});

test("add to the queue", async t => {
  var session = (<any>t.context).session;
  var queue = "add_to_queue";
  var data = (<any>t.context).data;

  var result = await session.add(queue, data);

  t.true(typeof(result.id) === 'string');
  t.true(typeof(result.data) === 'object');

  var response = await session.get(queue, result.id) || {
    id: undefined
  };

  t.true(response.id === result.id);
});

test("add to the queue with custom id", async t => {
  var session = (<any>t.context).session;
  var queue = "add_to_queue_with_redis_custom_id";
  var data = (<any>t.context).data;
  var custom_id = 'foobar';

  await session.del(queue, custom_id);

  var result = await session.add(queue, data, custom_id);

  t.true(typeof(result.id) === 'string');
  t.true(typeof(result.data) === 'object');

  var response = await session.get(queue, custom_id) || {
    id: undefined
  };

  t.true(response.id === custom_id);

  await session.appendEvent(queue, custom_id, "foo");
  await session.appendEvent(queue, custom_id, "bar");
  await session.appendEvent(queue, custom_id, "baz");

  let results = await session.get(queue, custom_id) || {
    events: []
  };

  t.true(results.data.events.length == 3);
});

test('validate retrieve with an invalid object identifier is undefined', async t => {
  var session = (<any>t.context).session;
  var queue = "invalid_object_identifier";

  t.true(await session.get(queue, "barfoo") === undefined);
});

test('store and retrieve objects', async t => {
  try {
    var session = (<any>t.context).session;
    var queue = "store_and_retrieve";

    await session.delAll(queue);

    var objects = [
      { message: "Message 1" },
      { message: "Message 2" },
      { message: "Message 3" },
      { message: "Message 4" }
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
      t.log(items.length);
      t.log(objects.length);
      t.true(items.length === objects.length);
    } else {
      t.fail("Failing because items.length !== objects.length - 1");
    }
  } catch(error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});

test('delete objects from queue', async t => {
  try {
    var session = (<any>t.context).session;
    var queue = "delete_all_objects_from_queue";

    var objects = [
      { message: "Message 1" },
      { message: "Message 2" },
      { message: "Message 3" },
      { message: "Message 4" }
    ];

    for (var index in objects) {
      await session.add(queue, objects[index]);
    }

    let items = [];
    items = await session.getAll(queue);

    if (items)
      t.true(items.length === objects.length, "Checking that items.length === objects.length");
    else
      t.fail("Failing test because the items.length !== objects.length");

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
    t.false(await session.pop(queue), "Verify return type is false because there are no more elements left to pop");

    items = await session.getAll(queue);
    items && t.true(items.length === 0, "Checking that items.length === 0");
  } catch (error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});
