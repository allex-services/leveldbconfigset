loadMochaIntegration('allex_leveldblib');

describe('Basic tests', function () {
  it('Find Config', function () {
    return findSink({
      sinkname: 'Config'
    });
  });
  createSinkLevelDBHookIt({
    instancename: 'Hook',
    sinkname: 'Config',
    hookTo: {keys: [['bla', '***']], scan: true}
  });
  it('Write and expect width', function () {
    var w = Hook.wait();
    Config.call('put', 'bla', 'width', 5);
    return expect(w).to.eventually.have.property(1, 5);
  });
  it('Write and expect height', function () {
    var w = Hook.wait();
    Config.call('put', 'bla', 'height', 5);
    return expect(w).to.eventually.have.property(1, 5);
  });
  it('Write and NOT expect height', function () {
    var w = Hook.wait();
    Config.call('put', 'tra', 'height', 5).then(
      Hook.wait.bind(Hook)
    );
    return expect(w).to.eventually.be.empty;
  });
  it('Unhook/Hook', function () {
    return Hook.unhook([['bla', '***']]).then(
      Hook.hook({keys: [['***', 'weight']]})
    );
  });
  it('Write and NOT expect bla', function () {
    var w = Hook.wait();
    Config.call('put', 'bla', 'height', 5).then(
      Hook.wait.bind(Hook)
    );
    return expect(w).to.eventually.be.empty;
  });
  it('Write and expect width', function () {
    var w = Hook.wait();
    Config.call('put', 'x', 'weight', 8);
    return expect(w).to.eventually.have.property(1, 8);
  });
  it ('Finish', function () {
    Config.destroy();
  });
});


