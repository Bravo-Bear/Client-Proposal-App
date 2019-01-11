const { requireFiles } = require('hapi-utility-belt');

const plugin = requireFiles(__dirname);

module.exports = {

  name: 'clients',
  register: (server) => {

    server.expose({
      create: (payload) => plugin.create(server, payload),
      delete: (id) => plugin.delete(server, id),
      readAll: (query) => plugin.readAll(server, query),
      readOne: (id) => plugin.readOne(server, id),
      edit: (id, payload) => plugin.edit(server, id, payload)
    });
  }
};