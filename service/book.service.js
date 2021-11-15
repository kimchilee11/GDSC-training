const { BookRepository } = require('../repository/book.repository');

class BookService {
	async createBook(book) {
		try {
			await BookRepository.createOne(book);
			return;
		} catch (error) {
			console.log(error);
		}
	}

	getBooks() {
		return BookRepository.findBooks();
	}

	deleteBook(id) {
		return BookRepository.deleteOne(id);
	}

	updateBook(id, data) {
		return BookRepository.updateOne(id, data);
	}

	getOne(id) {
		try {
			return BookRepository.getOne(id);
		} catch (error) {
			console.log(error);
		}
	}
}
module.exports.BookService = new BookService();