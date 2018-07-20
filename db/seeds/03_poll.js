
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('poll').del()
    .then(function () {
      // Inserts seed entries
      return knex('poll').insert([
        {usr_id: 1, date: 'SAT Jul 21 2018 00:00:00 GMT-0700 (Mountain Standard Time)', activity: 'Go Hunting'},
        {usr_id: 1, date: 'SUN Jul 22 2018 00:00:00 GMT-0700 (Mountain Standard Time)', activity: 'Go Hiking'},
        {usr_id: 1, date: 'MON Jul 23 2018 00:00:00 GMT-0700 (Mountain Standard Time)', activity: 'Dirt Bikes'}
      ]);
    });
};
