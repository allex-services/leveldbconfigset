function createUser(execlib, ParentUser, leveldblib) {
  'use strict';
  if (!ParentUser) {
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  var lib = execlib.lib,
    qlib = lib.qlib;

  function User(prophash) {
    ParentUser.call(this, prophash);
  }
  
  ParentUser.inherit(User, require('../methoddescriptors/user'), [/*visible state fields here*/]/*or a ctor for StateStream filter*/);
  User.prototype.__cleanUp = function () {
    ParentUser.prototype.__cleanUp.call(this);
  };

  User.prototype.getConfig = function (setname, defer) {
    qlib.promise2defer(this.__service.getConfig(setname), defer);
  };

  User.prototype.put = function (setname, key, value, defer) {
    qlib.promise2defer(this.__service.put(setname, key, value), defer);
  };

  User.prototype.get = function (setname, key, defer) {
    qlib.promise2defer(this.__service.get(setname, key), defer);
  };

  User.prototype.safeGet = function (setname, key, dflt, defer) {
    qlib.promise2defer(this.__service.safeGet(setname, key, dflt), defer);
  };

  User.prototype.del = function (setname, key, defer) {
    ParentUser.prototype.del([setname, key], defer);
  };

  return User;
}

module.exports = createUser;
