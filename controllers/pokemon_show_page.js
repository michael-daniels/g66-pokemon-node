var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    knex('pokemon').innerJoin('trainers', 'pokemon.trainer_id', 'trainers.id').where('pokemon.id', req.params.id)
      .then((results) => {
        res.render('pokemon_show_page', {current_pokemon:results});
      })
  },

};
