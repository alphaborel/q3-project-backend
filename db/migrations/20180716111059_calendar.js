exports.up = function(knex, Promise) {
  return knex.schema.createTable('calendar', (t)=>{
  t.increments('id').primary();
  t.integer('usr_id').references('id').inTable('users').notNull().onDelete('cascade');
  t.string('date');
  t.string('when');
  t.integer('poll_id').unique().notNull();
  t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('calendar');
};
