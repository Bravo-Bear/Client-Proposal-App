module.exports = async (server, id) => {
  // Delete a exsiting Client
  const { Client } = server.plugins.db

  const clients = await Client
    .query()
    .deleteById(id)

  if (!clients) {
    return { error: 'Unable to delete client at given ID' }
  }

  return { success: 'Client has been successfully deleted' }
}