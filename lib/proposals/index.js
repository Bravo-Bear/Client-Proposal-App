const { requireFiles } = require('hapi-utility-belt');

const plugin = requireFiles(__dirname);

module.exports = {

  name: 'proposals',
  register: (server) => {

    server.expose({
      create: (id, payload) => plugin.create(server,id, payload),
      delete: (id) => plugin.delete(server, id),
      readAll: (query) => plugin.readAll(server, query),
      readOne: (id) => plugin.readOne(server, id),
      edit: (id, payload) => plugin.edit(server, id, payload)
    });
  }
};