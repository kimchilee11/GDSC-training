
exports.up = async function(knex) {
  await knex.schema.createTable('authors', table => {
      table.increments('id').unsigned().primary();
      table.string('name');
      table.string('address');
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  
};
