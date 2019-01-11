const { requireAndFlatten } = require('hapi-utility-belt');

const routes = requireAndFlatten(__dirname);

module.exports = {

  name: 'api',
  register: (server) => {

    server.route(routes);
  }
};