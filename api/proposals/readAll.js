const Schemas = require('../../schemas');

module.exports = {
  method: 'GET',
  path: '/api/client/{id}/proposal',
  config: {
    description: 'gets all Proposals paginated by optional query params',
    tags: ['api', 'proposals'],
    validate: {
      query: Schemas.query_paginate
    }
  },
  handler: async ({ server, query }) => server.plugins.proposals.readAll(query)
};