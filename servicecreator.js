function createLevelDBConfigSetService(execlib, ParentService, leveldbconfigsetlib, leveldblib) {
  'use strict';
  
  var lib = execlib.lib,
    LevelDBConfigSetMixin = leveldbconfigsetlib.LevelDBConfigSetMixin;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user'), leveldblib) 
    };
  }

  function LevelDBConfigSetService(prophash) {
    ParentService.call(this, prophash);
    LevelDBConfigSetMixin.call(this, prophash);
  }
  
  ParentService.inherit(LevelDBConfigSetService, factoryCreator);
  LevelDBConfigSetMixin.addMethods(LevelDBConfigSetService);
  
  LevelDBConfigSetService.prototype.__cleanUp = function() {
    LevelDBConfigSetService.prototype.destroy.call(this, prophash);
    ParentService.prototype.__cleanUp.call(this);
  };
  
  return LevelDBConfigSetService;
}

module.exports = createLevelDBConfigSetService;
