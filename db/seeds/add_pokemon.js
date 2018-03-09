exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pokemon').del(),

    knex('pokemon').insert({id: 500, pokemon_name: "Bulbasaur",
      cp: 15, in_gym: false, trainer_id: 1, img_url:'http://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png' }),
    knex('pokemon').insert({id: 501, pokemon_name: "Ivysaur",
      cp: 60, in_gym: false, trainer_id: 1, img_url:'https://vignette.wikia.nocookie.net/pokemonfakemon/images/2/22/Ivysaur_Dream.png/revision/latest?cb=20110530041659'}),
    knex('pokemon').insert({id: 502, pokemon_name: "Venasaur",
      cp: 100, in_gym: false, trainer_id: 2, img_url:'https://vignette.wikia.nocookie.net/pokemonfakemon/images/0/02/Venusaur_Dream.png/revision/latest?cb=20110530041700'}),
    knex('pokemon').insert({id: 503, pokemon_name: "Charmander",
      cp: 15, in_gym: false, trainer_id: 2, img_url:'https://vignette.wikia.nocookie.net/pokemonpets/images/0/0b/2004-Shiny-Charmander.png/revision/latest?cb=20160920013622'}),
    knex('pokemon').insert({id: 504, pokemon_name: "Charmeleon",
      cp: 55, in_gym: false, trainer_id: 2, img_url:'http://static.pokemonpets.com/images/monsters-images-300-300/5-Charmeleon.png'}),
    knex('pokemon').insert({id: 505, pokemon_name: "Charizard",
      cp: 99, in_gym: false, trainer_id: 3, img_url:'https://vignette.wikia.nocookie.net/majestic-guardians/images/9/95/Charizard.png/revision/latest?cb=20120827123206'}),
    knex('pokemon').insert({id: 506, pokemon_name: "Squirtle",
      cp: 19, in_gym: false, trainer_id: 4, img_url:'https://vignette.wikia.nocookie.net/pokemon/images/2/23/007Squirtle_AG_anime_2.png/revision/latest?cb=20150101074735'}),
    knex('pokemon').insert({id: 507, pokemon_name: "Wartortle",
      cp: 22, in_gym: false, trainer_id: 4, img_url:'https://pre00.deviantart.net/5e35/th/pre/i/2016/347/c/a/wartortle_by_monstermmorpg-darj5zp.png'}),
    knex('pokemon').insert({id: 508, pokemon_name: "Blastoise",
      cp: 111, in_gym: false, trainer_id: 4, img_url:'https://vignette.wikia.nocookie.net/pokemonfakemon/images/a/a9/Blastoise_Dream.png/revision/latest?cb=20110530041703'}),
    knex('pokemon').insert({id: 509, pokemon_name: "Caterpie",
      cp: 5, in_gym: false, trainer_id: 3, img_url:'https://vignette.wikia.nocookie.net/pokemonfakemon/images/0/03/Caterpie_Dream.png/revision/latest?cb=20110530041704'}),
    knex('pokemon').insert({id: 510, pokemon_name: "Metapod",
      cp: 18, in_gym: false, trainer_id: 1, img_url:'https://vignette.wikia.nocookie.net/videojuego/images/b/b1/Metapod.gif/revision/latest?cb=20070527120420'}),
    knex('pokemon').insert({id: 511, pokemon_name: "Butterfree",
     cp: 104, in_gym: false, trainer_id: 1, img_url:'https://pre00.deviantart.net/ff34/th/pre/f/2016/204/d/8/vector__270___butterfree_by_dashiesparkle-d9atf5o.png'})
  );
};
