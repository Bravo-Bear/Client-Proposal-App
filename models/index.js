const Hoek = require('hoek');
const Knex = require('knex');
const { Model } = require('objection');
const { requireFiles } = require('hapi-utility-belt');

const Models = requireFiles(__dirname + '/models');
const ConnectionConfig = require('./knexfile');

module.exports = {

  name: 'db',
  register: (server, options = {}) => {

    const config = Hoek.applyToDefaults(ConnectionConfig, options);
    const knex = Knex(config);

    Model.knex(knex);

    server.expose(Models);
    server.expose({ knex });
  }
}