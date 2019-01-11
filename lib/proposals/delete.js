module.exports = async (server, id) => {
  // Delete a exsiting Client
  const { Proposal } = server.plugins.db

  const proposal = await Proposal
    .query()
    .deleteById(id)

  if (!proposal) {
    return {Error: 'Unable to delete proposal'}
  }
  
  return { Success: 'Proposal has been successfully deleted' }
}