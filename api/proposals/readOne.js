const Joi = require('joi');

module.exports = {
  method: 'GET',
  path: '/api/client/{id}/proposal/{pId}',
  config: {
    description: 'gets one client by ID',
    tags: ['api', 'proposals'],
    validate: {
      params: {
        id: Joi.number(),
        pId: Joi.number()
      }
    }
  },
  handler: async ({ server, params }) => server.plugins.proposals.readOne(params.pId)
};