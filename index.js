function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['allex_leveldbconfigservice', 'allex_leveldbconfigsetlib', 'allex_leveldblib']
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
