const Joi = require('joi');
const Schemas = require('../../schemas');

module.exports = {
  method: 'PUT',
  path: '/api/client/{id}/proposal/{pId}',
  config: {
    description: 'Edit an existing Proposal given valid payload and Id',
    tags: ['api', 'proposals'],
    validate: {
      params: {
        id: Joi.number(),
        pId: Joi.number()
      },
      payload: Schemas.proposal_create
    }
  },
  handler: async ({ server, params, payload }) => server.plugins.proposals.edit(params.pId, payload)
};