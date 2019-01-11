const Joi = require('joi');

module.exports = {
  method: 'DELETE',
  path: '/api/client/{id}/proposal/{pId}',
  config: {
    description: 'Delete an existing Proposal given valid id',
    tags: ['api', 'proposals'],
    validate: {
      params: {
        id: Joi.number(),
        pId: Joi.number()
      }
    }
  },
  handler: async ({ server, params }) => server.plugins.proposals.delete(params.pId)
};