const Joi = require('joi');

module.exports = {
  method: 'GET',
  path: '/api/client/{id}',
  config: {
    description: 'gets one client by ID',
    tags: ['api', 'clients'],
    validate: {
      params: {
        id: Joi.number()
      }
    }
  },
  handler: async ({ server, params }) => server.plugins.clients.readOne(params.id)
};