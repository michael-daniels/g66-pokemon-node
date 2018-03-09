var knex = require('../db/knex');

module.exports = {

  main: function(req, res, next) {
    if(!req.session.current_user) {
      req.session.current_user = [{}];
    }
    res.redirect('/pokemon')
  },


};
