const Joi = require('joi');

module.exports = {
  method: 'DELETE',
  path: '/api/client/{id}',
  config: {
    description: 'Deletes an client given valid client Id',
    tags: ['api', 'clients'],
    validate: {
      params: {
        id: Joi.number()
      }
    }
  },
  handler: async ({ server, params }) => server.plugins.clients.delete(params.id)
};