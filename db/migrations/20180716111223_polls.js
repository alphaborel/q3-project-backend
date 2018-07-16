exports.up = function(knex, Promise) {
  return knex.schema.createTable('polls', (t)=>{
  t.increments('id').primary();
  t.integer('poll_table_id').references('poll_id').inTable('calendar').notNull()
  t.integer('poll_question_id').unique().notNull();
  t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('polls');
};
