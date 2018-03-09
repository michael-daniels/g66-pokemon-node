var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    knex('trainers').then((results) => {
      res.render('trainers', {alltrainers:results});
    })
  },

};
