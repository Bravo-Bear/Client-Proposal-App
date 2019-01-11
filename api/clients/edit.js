const Schemas = require('../../schemas');
const Joi = require('joi');

module.exports = {
  method: 'PUT',
  path: '/api/client/{id}',
  config: {
    description: 'Deletes an client given valid client Id',
    tags: ['api', 'clients'],
    validate: {
      params: {
        id: Joi.number()
      },
      payload: Schemas.client_create
    }
  },
  handler: async ({ server, params, payload }) => server.plugins.clients.edit(params.id, payload)
};