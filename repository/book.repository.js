const { getConnection } = require("../database");

class BookRepository {
    async findBooks() {
        return getConnection('books').select('*');
    }

    async createOne(data) {
        return getConnection('books').insert(data);
    }

    async deleteOne(id) {
        return getConnection('books').where('id', '=', id).del();
    }

    async updateOne(id, data) {
        return getConnection('books').where('id', '=', id).update(data);
    }

    async getOne(id) {
        return getConnection('books').where('id', '=', id);
    }

}

module.exports.BookRepository = new BookRepository();