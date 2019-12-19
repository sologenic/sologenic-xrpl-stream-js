import test from 'ava';

import RedisQueue from './redis';

test("add to the queue", async t => {
  let session = new RedisQueue({
    host: 'localhost',
    port: 6379,
    database: 1
  });

  let q = "queue";
  let data = {
    message: "Hello, World"
  };

  var p = await session.add(q, data);

  if ('message' in data)
    t.true(p.data['message'] === data['message']);

  t.pass();
});

test('validate retrieve with an invalid object identifier is undefined', async t => {
  let session = new RedisQueue({
    host: 'localhost',
    port: 6379,
    database: 1
  });

  let q = "queue";

  t.true(await session.get(q, "1") == undefined);
});

test('store and retrieve object', async t => {
  let session = new RedisQueue({
    host: 'localhost',
    port: 6379,
    database: 1
  });

  let q = "queue";

  let data = {
    message: "Hello, World"
  };

  var store1 = await session.add(q, data);
  await session.add(q, data);
  await session.add(q, data);
  await session.add(q, data);
  await session.add(q, data);

  // Sleep for 500 milliseconds to make sure we can retrieve our value back
  await new Promise(
    resolve => setTimeout(resolve, 2500)).then(() => {
  });

  t.log("Attempting to retrieve " + store1.id);

  var retrieve = await session.get(q, store1.id);

  if (retrieve) {
    t.true(retrieve.data['message'] === data['message']);
  } else {
    t.fail();
  }
});

test('retrieve all objects from data store', async t => {
  let session = new RedisQueue({
    host: 'localhost',
    port: 6379,
    database: 1
  });

  let q = "queue";

  let data = {
    message: "Hello, World"
  };

  await session.add(q, data);
  await session.add(q, data);
  await session.add(q, data);
  await session.add(q, data);

  await new Promise(
    resolve => setTimeout(resolve, 500)).then(() => {
  });

  var all_data = await session.getAll(q);

  t.true(all_data.length > 0);
});

test('delete all objects from data store', async t => {
  let q = "queue";
  let session = new RedisQueue({
    host: 'localhost',
    port: 6379,
    database: 1
  });

  let data = {
    message: "Hello, World"
  };

  await session.add(q, data);
  await session.add(q, data);
  await session.add(q, data);
  await session.add(q, data);

  // Sleep for 500 milliseconds to make sure we can retrieve our value back
  await new Promise(
    resolve => setTimeout(resolve, 5000)).then(() => {
  });

  t.true(await session.delAll(q));
});
