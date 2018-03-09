var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    let in_gym_true = [];
    let in_gym_false = [];
    knex('pokemon').then((results) => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].in_gym == true) {
          in_gym_true.push(results[i])
        } else {
          in_gym_false.push(results[i])
        }
      }
      res.render('gym', {in_gym_false:in_gym_false, in_gym_true:in_gym_true});
    })
  },

  add_gym: function(req, res, next) {
    knex('pokemon').where('id', req.body.id).update({in_gym: true})
      .then((results) => {
      res.redirect('/gym');
    })
  },

  remove_gym: function(req, res, next) {
    knex('pokemon').where('id', req.body.id).update({in_gym: false})
      .then((results) => {
      res.redirect('/gym');
    })
  },

  reset: function(req, res, next) {
    knex('pokemon').update({in_gym:false})
      .then(() => {
        res.redirect('/gym')
      })
  },

};
