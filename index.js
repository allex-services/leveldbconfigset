function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['allex_leveldbconfigservice', 'allex:leveldbconfigset:lib', 'allex:leveldb:lib']
    },
    sinkmap: {
      dependencies: ['allex_leveldbconfigservice']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
