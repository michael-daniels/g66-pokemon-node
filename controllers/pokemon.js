var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    let results1;
    let results2;
    knex('pokemon').orderBy('cp', 'asc').then((results) => {
      results1 = results;
      knex('trainers')
      .then((results) => {
        results2 = results
        res.render('pokemon', {allpokemon:results1, alltrainers:results2});
      })
    })
  },

  add: function(req, res, next) {
    knex('pokemon').insert({
      pokemon_name: req.body.pokemon_name,
      trainer_id: req.body.trainer_id,
      cp:req.body.cp,
      in_gym:false,
    }).then(() => {
        res.redirect('/pokemon');
      })
  },

  edit: function(req, res, next) {
    let results1;
    let results2;
    knex('pokemon').where('pokemon.id', req.params.id)
      .then((results) => {
        results1 = results
        knex('trainers')
        .then((results) => {
          results2 = results
          res.render('edit', {current_pokemon:results1, all_trainers:results2})
        })
      })
  },

  update: function(req, res, next) {
    knex('pokemon').where('id', req.params.id).update({
      pokemon_name:req.body.pokemon_name,
      trainer_id:req.body.trainer_id,
      cp:req.body.cp,
      in_gym:false
    }).then(() => {
      res.redirect(`/pokemon/pokemon_show_page/${req.params.id}`)
    })
  },

  delete: function(req, res, next) {
    knex('pokemon').where('id', req.params.id).del()
      .then(() => {
        res.redirect('/pokemon');
      })
  },

  add_gym_home: function(req, res, next) {
    var totalInGym = 1;
    knex('pokemon').then((results) => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].in_gym == true) {
          totalInGym++
        }
      }
      console.log(totalInGym)
    }).then(() => {
        if (totalInGym < 3) {
          knex('pokemon').where('id', req.params.id).update({in_gym:true})
            .then(() => {
              if (req.session.current_user[0].p1 == undefined) {
                req.session.current_user[0].p1 = req.params.id
              } else {
                req.session.current_user[0].p2 = req.params.id
              }
              res.redirect('/pokemon')
            })
        } else {
          res.redirect('/pokemon')
        }
    })
  },

  remove_gym_home: function(req, res, next) {
    knex('pokemon').where('id', req.params.id).update({in_gym: false})
      .then((results) => {
      if (req.session.current_user[0].p1 == req.params.id) {
        delete req.session.current_user[0].p1
      }
      if (req.session.current_user[0].p2 == req.params.id) {
        delete req.session.current_user[0].p2
      }
      res.redirect('/pokemon');
    })
  },
};
