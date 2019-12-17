import test from 'ava';

import HashQueue from './hash';

const _ = require('underscore');

test.before(async t => { 
  _.extend(t.context, {  
    data: {
      message: "Hello, World"
    },
    session: new HashQueue({})
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
  var queue = "add_to_queue_with_custom_id";
  var data = (<any>t.context).data;
  var custom_id = 'foobar';

  var result = await session.add(queue, data, custom_id);

  t.true(typeof(result.id) === 'string');
  t.true(typeof(result.data) === 'object');

  var response = await session.get(queue, custom_id) || { 
    id: undefined 
  }; 

  t.true(response.id === custom_id);
});

test('validate retrieve with an invalid object identifier is undefined', async t => {
  var session = (<any>t.context).session;
  var queue = "invalid_object_identifier";

  t.true(await session.get(queue, "barfoo") === undefined);
});

test('store and retrieve objects', async t => {
  var session = (<any>t.context).session;
  var queue = "store_and_retrieve";

  await session.delAll();

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
    t.true(items.length === objects.length);
  }
});

test('delete objects from queue', async t => {
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
  items && t.true(items.length === objects.length, "Checking that items.length === objects.length");

  /* Pop an item off the queue */
  t.true(await session.pop(queue));

  /* Delete an item */
  t.true(await session.del(queue, items[0].id));

  /* Delete the remaining items */
  t.true(await session.delAll(queue));

  items = await session.getAll(queue);
  items && t.true(items.length === 0, "Checking that items.length === 0");
});