//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const show_page = require("../controllers/show_page.js");
const gym = require("../controllers/gym.js");

module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', pokemon.main);

  app.post('/pokemon/add', pokemon.add);

  app.get('/pokemon/edit/:id', pokemon.edit);

  app.post('/pokemon/edit/:id/update', pokemon.update);

  app.get('/pokemon/delete/:id', pokemon.delete);

  app.get('/pokemon/show_page/:id', show_page.main);

  app.get('/pokemon/gym/add/:id', pokemon.add_gym_home);

  app.get('/pokemon/gym/remove/:id', pokemon.remove_gym_home);

  app.get('/gym', gym.main);

  app.post('/gym/add/', gym.add_gym);

  app.post('/gym/remove/', gym.remove_gym);

}
