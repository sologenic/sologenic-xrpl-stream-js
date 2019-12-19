import test from 'ava';

import MemcacheQueue from './memcached';

test("add to queue", async (t) => {
  const session = new MemcacheQueue({
    servers: "F84418:5C35FDB85A992DD32E1188ADAE6320E4@mc2.dev.ec2.memcachier.com:11211",
    clientOpts: {
      expires: 6000
    }
  });
  const queue = "test_queue";
  const data = {
    message: "Hello Memcached"
  };
  const elem = await session.add(queue, data);
  console.log(elem);
  t.true(typeof elem.data.message !== "undefined");
  t.pass();
});

test("get all items in queue", async (t) => {
  const session = new MemcacheQueue({
    servers: "F84418:5C35FDB85A992DD32E1188ADAE6320E4@mc2.dev.ec2.memcachier.com:11211",
    clientOpts: {
      expires: 6000
    }
  });
  const queue = "test_queue";
  const elems = await session.getAll(queue);
  console.log(elems);
  t.true(elems.length > 0);
  t.pass();
});
