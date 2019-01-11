module.exports = async (server, id) => {

  const { Proposal } = server.plugins.db;

  const proposals = Proposal
    .query()
    .findById(id)

  return await proposals
}