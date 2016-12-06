function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['allex:leveldbconfig', 'allex:leveldbconfigset:lib']
    },
    sinkmap: {
      dependencies: ['allex:leveldbconfig']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;