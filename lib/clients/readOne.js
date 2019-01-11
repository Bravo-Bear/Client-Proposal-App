module.exports = async (server, id) => {

  const { Client } = server.plugins.db;

  const clients = Client
    .query()
    .findById(id)

  return await clients
}