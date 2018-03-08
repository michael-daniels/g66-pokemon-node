//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");

module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', pokemon.main);
}
