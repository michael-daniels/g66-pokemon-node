//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const pokemon_show_page = require("../controllers/pokemon_show_page.js");
const gym = require("../controllers/gym.js");
const trainers = require("../controllers/trainers.js");
const trainers_show_page = require("../controllers/trainers_show_page.js");

module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', pokemon.main);

  app.post('/pokemon/add', pokemon.add);

  app.get('/pokemon/edit/:id', pokemon.edit);

  app.post('/pokemon/edit/:id/update', pokemon.update);

  app.get('/pokemon/delete/:id', pokemon.delete);

  app.get('/pokemon/pokemon_show_page/:id', pokemon_show_page.main);

  app.get('/pokemon/gym/add/:id', pokemon.add_gym_home);

  app.get('/pokemon/gym/remove/:id', pokemon.remove_gym_home);

  app.get('/gym', gym.main);

  app.post('/gym/add/', gym.add_gym);

  app.post('/gym/remove/', gym.remove_gym);

  app.get('/gym/reset', gym.reset);

  app.get('/trainers', trainers.main);

  app.get('/trainers/trainers_show_page/:id', trainers_show_page.main);

}
