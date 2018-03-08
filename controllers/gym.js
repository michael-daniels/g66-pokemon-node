var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    knex('pokemon').where('in_gym', '<>', 'true').then((results) => {
      res.render('gym', {allpokemon:results});
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

};
