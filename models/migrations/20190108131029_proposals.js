
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('proposals', table => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('subtitle')
      table.string('dri').notNullable()
      table.string('project_details').notNullable()
      table.date('target_completion_date').notNullable()
      table.string('project_length').notNullable()
      table.integer('development_hours')
      table.float('total_price').notNullable()
      table.specificType('execution_timeline', 'JSONB[]').notNullable()
      table.string('ongoing_charges')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
      table.integer('clients_id')
        .references('clients.id')
        .onDelete('CASCADE');
    })])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('proposals')
  ])
};
