exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pokemon').del(),

    knex('pokemon').insert({id: 500, pokemon_name: "Bulbasaur",
      cp: 15, in_gym: false, trainer_id: 1 }),
    knex('pokemon').insert({id: 501, pokemon_name: "Ivysaur",
      cp: 60, in_gym: false, trainer_id: 1}),
    knex('pokemon').insert({id: 502, pokemon_name: "Venasaur",
      cp: 100, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 503, pokemon_name: "Charmander",
      cp: 15, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 504, pokemon_name: "Charmeleon",
      cp: 55, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 505, pokemon_name: "Charizard",
      cp: 99, in_gym: false, trainer_id: 3}),
    knex('pokemon').insert({id: 506, pokemon_name: "Squirtle",
      cp: 19, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 507, pokemon_name: "Wartortle",
      cp: 22, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 508, pokemon_name: "Blastoise",
      cp: 111, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 509, pokemon_name: "Caterpie",
      cp: 5, in_gym: false, trainer_id: 3}),
    knex('pokemon').insert({id: 510, pokemon_name: "Metapod",
      cp: 18, in_gym: false, trainer_id: 1}),
    knex('pokemon').insert({id: 511, pokemon_name: "Butterfree",
     cp: 104, in_gym: false, trainer_id: 1})
  );
};
