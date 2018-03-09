
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trainers',(table)=>{
    table.increments();
    table.string('trainer_name');
    table.string('img_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trainers');
};
