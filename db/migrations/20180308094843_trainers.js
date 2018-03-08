
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon',(table)=>{
    table.increments();
    table.string('pokemon_name');
    table.integer('trainer_id');
    table.integer('cp');
    table.boolean('in_gym');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
