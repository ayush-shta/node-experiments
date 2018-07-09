exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.string('task').notNull();
    table
      .bool('is_completed')
      .notNull()
      .defaultTo(false);
    table
      .integer('user_id')
      .notNull()
      .index()
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
