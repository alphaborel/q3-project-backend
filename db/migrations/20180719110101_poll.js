exports.up = function(knex, Promise) {
  return knex.schema.createTable('poll', (t)=>{
  t.increments('id').primary();
  t.integer('usr_id').references('id').inTable('users');
  t.string('date');
  t.string('activity');
  t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('poll');
};
