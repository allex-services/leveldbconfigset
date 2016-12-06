module.exports = {
  getConfig: [{
    title: 'Username',
    type: 'string'
  }],
  put: [{
    title: 'Set Name',
    type: 'string'
  },{
    title: 'Key',
    anyOf: [{type: 'array'}, {type: 'object'}, {type: 'string'}, {type: 'number'}]
  },{
    title: 'Value',
    anyOf: [{type: 'array'}, {type: 'object'}, {type: 'string'}, {type: 'number'}]
  }],
  get: [{
    title: 'Set Name',
    type: 'string'
  },{
    title: 'Key',
    anyOf: [{type: 'array'}, {type: 'object'}, {type: 'string'}, {type: 'number'}]
  }],
  safeGet: [{
    title: 'Set Name',
    type: 'string'
  },{
    title: 'Key',
    anyOf: [{type: 'array'}, {type: 'object'}, {type: 'string'}, {type: 'number'}]
  },{
    title: 'Default'
  }],
  del: [{
    title: 'Set Name',
    type: 'string'
  },{
    title: 'Key',
    anyOf: [{type: 'array'}, {type: 'object'}, {type: 'string'}, {type: 'number'}]
  }],
};
