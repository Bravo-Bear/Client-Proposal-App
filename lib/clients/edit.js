module.exports = async (server, id, payload) => {
  // Edit one Existing Client 
  const { Client } = server.plugins.db

  const clients = Client
    .query()
    .patchAndFetchById(id, payload)

  return await clients
}