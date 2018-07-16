exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t)=>{
  t.increments('id').primary();
  t.string('first_name');
  t.string('last_name');
  t.text('profile_pic');
  t.string('email').unique().notNull();
  t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
