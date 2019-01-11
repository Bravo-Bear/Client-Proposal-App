module.exports = async (server, { page, limit }) => {

  const { Proposal } = server.plugins.db;

  const proposals = Proposal
    .query()
    .page(page, limit);

  return await proposals
}