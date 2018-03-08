//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const show_page = require("../controllers/show_page.js");

module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', pokemon.main);

  app.post('/pokemon/add', pokemon.add);

  app.get('/pokemon/delete/:id', pokemon.delete);

  app.get('/pokemon/show_page/:id', show_page.main);
}
