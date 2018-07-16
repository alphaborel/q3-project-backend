exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (t)=>{
  t.increments('id').primary();
  t.integer('usr_id').references('id').inTable('users').onDelete('cascade');
  t.integer('friend_id').references('id').inTable('users').onDelete('cascade');
  t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
