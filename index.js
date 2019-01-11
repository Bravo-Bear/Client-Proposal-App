const Hapi = require('hapi');

const { flatten } = require('hapi-utility-belt');

const ServerConfig = require('./config/server');
const PluginsConfig = require('./config/plugin');


module.exports = async () => {

  const server = new Hapi.server(ServerConfig.get('/'));

  const plugins = flatten([

    PluginsConfig.get('/base'),
    PluginsConfig.get('/environment'),
    PluginsConfig.get('/local')
  ], 2);

  await server.register(plugins);

  return server;
}