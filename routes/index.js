var express = require('express');
var router = express.Router();
const knex = require("../db/knex.js");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/api/users", function(req, res){
  knex.column(
      'first_name',
      'last_name',
      'email'
    ).select().from('users').then((results)=>{
        res.send(results);
    })
})

router.post("/api/users", function(req, res){
  knex('users').where('email', req.body.email).then(results => {
    res.send(results)
  })
})


router.get("/api/users/:id", function(req, res){
  knex('users').where('email', req.session.email).then((results)=>{
        res.send(results);
    })
})


module.exports = router;
