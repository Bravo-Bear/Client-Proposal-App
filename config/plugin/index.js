const { confidant, tryRequirePlugins } = require('hapi-utility-belt');

const plugins = new confidant({

  base: [
    { plugin: require('good'), options: require('./good.json') }
  ],
  environment: {

    $filter: 'env',
    development: tryRequirePlugins([

      { plugin: 'blipp', options: {} }
    ]),
    $default: []
  },
  local: [
    require('../../models'),
    require('../../api'),

    require('../../lib/clients'),
    require('../../lib/proposals')
  ]
})

module.exports = plugins;