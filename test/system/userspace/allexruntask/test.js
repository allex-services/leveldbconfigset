function traverser(taskobj) {
  var sink, ldblib;
  if (!(taskobj && taskobj.sink)) {
    process.exit(1);
  }
  sink = taskobj.sink;
  ldblib = taskobj.execlib.execSuite.libRegistry.get('allex_leveldblib').value;
  ldblib.streamInSink(sink, 'traverseKVStorage', {}, console.log.bind(console, '!'));
}

function go(taskobj){
  var confsink,
    execLib,
    lib,
    q,
    qlib;
  if (!(taskobj && taskobj.sink)){
    process.exit(0);
    return;
  }
  confsink = taskobj.sink;
  execLib = taskobj.execlib;
  lib = execLib.lib;
  q = lib.q;
  qlib = lib.qlib,
  p2c = qlib.promise2console,
  executor = qlib.executor,
  username = 'blahuser';
  function p2cb (func, caption) {
    return function () {
      return p2c(func(), caption);
    };
  }
  function ender () {
    p2c = null;
    traverser(taskobj);
    taskobj = null;
  }
  p2c(confsink.call('getConfig', username), 'GET CONFIG').then(
    executor(p2cb(confsink.call.bind(confsink, 'put', username, 'width',5+(~~(Math.random()*15))), 'PUT WIDTH'))
  ).then(
    executor(p2cb(confsink.call.bind(confsink, 'put', username, 'height',10+(~~(Math.random()*20))), 'PUT HEIGHT'))
  ).then(
    executor(p2cb(confsink.call.bind(confsink, 'put', username, 'weight',50+(~~(Math.random()*50))), 'PUT WEIGHT'))
  ).then(
    executor(p2cb(confsink.call.bind(confsink, 'getConfig', username), 'getConfig'))
  ).then(
    executor(p2cb(confsink.call.bind(confsink, 'safeGet', username, 'width', 42), 'safeGet width'))
  ).then(
    executor(p2cb(confsink.call.bind(confsink, 'get', username, 'height'), 'GET HEIGHT'))
  ).then(
    executor(p2cb(confsink.call.bind(confsink, 'get', username, 'weight'), 'GET WEIGHT'))
  ).then(
    ender
  );
}

module.exports = {
  sinkname: 'Config',
  identity: {name: 'user', role: 'user'},
  task: {
    name : go
  }
};
