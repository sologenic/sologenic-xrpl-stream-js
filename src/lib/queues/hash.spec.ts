import anyTest, {TestInterface} from 'ava';
import HashQueue from './hash';

const test = anyTest as TestInterface<{
  session: any,
  data: any
}>;

test.before(async t => {
  t.context.data = { message: "Hello, World" }
  t.context.session = new HashQueue({})
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

    var objects = [
      { message: 'Message 1' },
      { message: 'Message 2' },
      { message: 'Message 3' },
      { message: 'Message 4' }
    ];

    for (var index in objects) {
      let result = await session.add(queue, objects[index]);
      let response = await session.get(queue, result.id);

      t.true(typeof result.id === 'string');
      t.true(typeof response.id === 'string');

      t.is(result.id, response.id);
    }

    let items = await session.getAll(queue);

    if (items) {
      t.true(items.length === objects.length);
    }
  } catch (error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});

test.serial('delete objects from queue', async t => {
  try {
    var session = t.context.session;
    var queue = 'delete_all_objects_from_queue';

    var objects = [
      { message: 'Message 1' },
      { message: 'Message 2' },
      { message: 'Message 3' },
      { message: 'Message 4' }
    ];

    // Empty the queue first
    await session.delAll(queue);

    // Add each element to the queue
    for (var index in objects) {
      let _created_object = await session.add(queue, objects[index]);
      t.true(typeof _created_object !== 'undefined');

      // Get the object back from the queue
      var _result = await session.get(queue, _created_object.id);

      t.true(typeof _result !== 'undefined');
      t.true(_result.data.message === objects[index].message);
    }

    let items = await session.getAll(queue);

    if (items)
      t.true(
        items.length === objects.length,
        'Checking that items.length === objects.length'
      );
    else t.fail('Failing test because the items.length !== objects.length');

    /* Pop an item off the queue */
    t.true(
      typeof (await session.pop(queue)) === 'object',
      "Verify that the returned element is of type 'object'"
    );

    /* Delete an item */
    t.true(await session.del(queue, items[0].id), 'Delete the first item');

    /* Delete the remaining items */
    t.true(await session.delAll(queue));

    /* Delete an item */
    t.false(
      await session.del(queue, items[0].id),
      'Verify return type is false because there are no more elements to delete'
    );

    /* Pop an item off the queue */
    t.is(
      await session.pop(queue), undefined,
      'Verify return type is false because there are no more elements left to pop'
    );

    items = await session.getAll(queue);

    t.true(items!.length === 0, 'Checking that items.length === 0');
  } catch (error) {
    t.fail(`Failing test, caught an exception = ${error}`);
  }
});
