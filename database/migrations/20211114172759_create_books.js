
exports.up = async function(knex) {
  await knex.schema.createTable('books', table => {
      table.increments('id').unsigned().primary();
      table.string('title').notNullable();
      table.integer('author_id').unsigned().references('id').inTable('authors');
      table.timestamps(true, true);
  })
};

exports.down = knex => knex.schema.dropTable('books');
