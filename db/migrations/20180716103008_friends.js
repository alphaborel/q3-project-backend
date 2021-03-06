exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (t)=>{
  t.increments('id').primary();
  t.integer('usr_id').references('id').inTable('users');
  t.integer('friend_id').references('id').inTable('users');
  t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
