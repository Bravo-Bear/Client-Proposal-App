const Schemas = require('../../schemas');

module.exports = {
  method: 'POST',
  path: '/api/clients',
  config: {
    description: 'creates a new client given valid payload',
    tags: ['api', 'clients'],
    validate: {
      payload: Schemas.client_create
    }
  },
  handler: async ({ server, payload }) => server.plugins.clients.create(payload)
};