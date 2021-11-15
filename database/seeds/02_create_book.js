
exports.seed = function(knex) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {title: 'Sach 1', author_id: 1},
        {title: 'Sach 1', author_id: 2},
        {title: 'Sach 1', author_id: 1}
      ]);
    });
};
