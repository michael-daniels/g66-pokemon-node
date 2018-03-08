var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    knex('pokemon').then((results) => {
      res.render('pokemon', {allpokemon:results});
    })
  },

  add: function(req, res, next) {
    knex('pokemon').insert({
      name: req.body.name,
      trainer_id: null,
      cp:req.body.cp,
      in_gym:false,
    }).then(() => {
        res.redirect('/pokemon');
      })
  },
};
