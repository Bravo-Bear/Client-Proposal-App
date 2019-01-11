module.exports = async (server, { page, limit }) => {

  const { Client } = server.plugins.db;

  const clients = Client
    .query()
    .page(page, limit);

  return await clients
}