const Hoek = require('hoek');
const Boom = require('boom');

const { confidant } = require('hapi-utility-belt');

module.exports = new confidant({

  port: process.env.APP_PORT || 4000,
  host: process.env.APP_HOST || 'localhost',

  routes: {
    cors: {
      origin: ['*']
    },
    validate: {

      $filter: 'env',
      development: {
        // REMOVED ASYNC FROM PAYLOAD FUNCTION FOR LINTING, PUT ASYNC BACK IF VALIDATION BREAKS
        failAction: (request, h, err) => {

          if (err) {

            throw Boom.badRequest(err.message);
          }
        }
      },
      $default: {}
    }
  }
});