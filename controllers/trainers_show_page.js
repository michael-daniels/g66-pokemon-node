var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    knex('trainers').innerJoin('pokemon', 'trainers.id', 'pokemon.trainer_id').where('trainers.id', req.params.id)
      .then ((results) => {
        console.log(results)
        res.render('trainers_show_page', {current_trainer:results});
      })

  },

};
