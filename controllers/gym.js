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
      console.log('in gym true: ', in_gym_true);
      console.log('in gym false: ', in_gym_false);
      res.render('gym', {in_gym_false:in_gym_false, in_gym_true:in_gym_true});
    })
  },

  // main: function(req, res, next) {
  //   knex('pokemon').where('in_gym', '<>', 'true').then((results) => {
  //     res.render('gym', {allpokemon:results});
  //   })
  // },

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

};
