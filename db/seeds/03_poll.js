
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('poll').del()
    .then(function () {
      // Inserts seed entries
      return knex('poll').insert([
        {usr_id: 1, date: '07 21 2018', activity: 'Go Hunting'},
        {usr_id: 1, date: '07 22 2018', activity: 'Go Hiking'},
        {usr_id: 1, date: '07 23 2018', activity: 'Dirt Bikes'}
      ]);
    });
};
