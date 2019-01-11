const { confidant } = require('hapi-utility-belt');

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT, NODE_ENV } = process.env;

module.exports = new confidant({

  client: 'pg',
  debug: {
    $filter: 'env',
    development: true,
    $default: false
  },
  connection: {

    $filter: 'env',
    development: `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    production: `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/proposals`
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'proposals_migrations'
  }
});