var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    knex('pokemon').then((results) => {
      res.render('pokemon', {allpokemon:results});
    })
  },

  add: function(req, res, next) {
    knex('pokemon').insert({
      pokemon_name: req.body.pokemon_name,
      trainer_id: null,
      cp:req.body.cp,
      in_gym:false,
    }).then(() => {
        res.redirect('/pokemon');
      })
  },

  edit: function(req, res, next) {
    knex('pokemon').where('pokemon.id', req.params.id)
      .then((results) => {
        console.log(results)
        res.render('edit', {current_pokemon:results});
      })
  },

  update: function(req, res, next) {
    knex('pokemon').where('id', req.params.id).update({
      pokemon_name:req.body.pokemon_name,
      trainer_id:req.body.trainer_id,
      cp:req.body.cp,
      in_gym:false
    }).then(() => {
      res.redirect('/pokemon')
    })
  },

  delete: function(req, res, next) {
    knex('pokemon').where('id', req.params.id).del()
      .then(() => {
        res.redirect('/pokemon');
      })
  },

  add_gym_home: function(req, res, next) {
    knex('pokemon').where('id', req.params.id).update({in_gym: true})
      .then((results) => {
      res.redirect('/pokemon');
    })
  },

  remove_gym_home: function(req, res, next) {
    knex('pokemon').where('id', req.params.id).update({in_gym: false})
      .then((results) => {
      res.redirect('/pokemon');
    })
  },
};
