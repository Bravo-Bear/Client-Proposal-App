const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Proposal extends Model {
  static get tableName() {
    return 'proposals'
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Client',
        join: {
          from: 'proposals.clients_id',
          to: 'clients.id'
        }
      }
    }
  }
}

module.exports = Proposal