exports.up = function(knex, Promise) {
  return knex.schema.createTable('poll_questions', (t)=>{
  t.increments('id').primary();
  t.integer('question_id').references('poll_question_id').inTable('polls').notNull();
  t.string('poll_question');
  t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('poll_questions');
};
