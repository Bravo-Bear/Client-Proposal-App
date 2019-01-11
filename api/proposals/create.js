const Schemas = require('../../schemas');
const Joi = require('joi');

module.exports = {
  method: 'POST',
  path: '/api/client/{id}/proposal',
  config: {
    description: 'Create a New Proposal given valid payload',
    tags: ['api', 'proposals'],
    validate: {
      params: {
        id: Joi.number()
      },
      payload: Schemas.proposal_create
    }
  },
  handler: async ({ server, params, payload }) => server.plugins.proposals.create(params.id, payload)
};