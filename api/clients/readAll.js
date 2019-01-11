const Schemas = require('../../schemas');

module.exports = {
  method: 'GET',
  path: '/api/clients',
  config: {
    description: 'gets all clients paginated by optional query params',
    tags: ['api', 'clients'],
    validate: {
      query: Schemas.query_paginate
    }
  },
  handler: async ({ server, query }) => server.plugins.clients.readAll(query)
};