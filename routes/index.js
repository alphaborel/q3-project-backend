var express = require('express');
var router = express.Router();
const knex = require("../db/knex.js");


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
  console.log('input', req.body.email);
  knex('users').where('email', req.body.email)
  .then(results => {
    res.json(results)
  })
})

router.get("/api/poll/", function(req, res){
  knex('poll').then(results => {
    res.json(results)
  })
})


module.exports = router;
