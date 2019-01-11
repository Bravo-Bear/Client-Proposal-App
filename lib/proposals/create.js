module.exports = async (server, id, payload) => {
  // Create a New Proposal   
  const { Client } = server.plugins.db;

  const clients = await Client.query().findById(id)

  if (!clients) {
    return { Error: 'Unable to Locate User at given Id, Unable to Create Proposal' }
  }

  const proposal = await clients.$relatedQuery('proposals')
    .allowInsert('[details, addValue, specification, timeline, maintenance, completionDate]')
    .insert(payload)

  return proposal
}