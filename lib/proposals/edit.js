module.exports = async (server, id, payload) => {
  // Edit an existing Proposal
  const { Proposal } = server.plugins.db

  const proposals = Proposal
    .query()
    .patchAndFetchById(id, payload)
 
  return await proposals
}