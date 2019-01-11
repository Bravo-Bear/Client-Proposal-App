
exports.up = function (knex, Promise) { 
  return Promise.all([
    knex.schema.createTable('clients', table => {
      table.increments('id').primary()
      table.string('company_name').notNullable()
      table.string('address').notNullable()
      table.string('phone_number').notNullable()
      table.string('email').notNullable()
      table.string('website')
      table.timestamp('updated_at').defaultTo(knex.fn.now())
      table.timestamp('created_at').defaultTo(knex.fn.now())
    })])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('clients')
  ])
};
