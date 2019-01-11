const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Client extends Model {
  static get tableName() {
    return 'clients'
  }
  
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      proposals: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Proposal',
        join: {
          from: 'clients.id',
          to: 'proposals.clients_id'
        }
      }
    }
  }
}

module.exports = Client