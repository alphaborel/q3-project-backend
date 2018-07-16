
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Ted', last_name: 'Bundy', email: 'ted@aol.com'},
        {first_name: 'Fred', last_name: 'Bundy', email: 'Fred@aol.com'},
        {first_name: 'Ned', last_name: 'Bundy', email: 'ned@aol.com'}
      ]);
    });
};
