const { BookService } = require('../service/book.service')
const { updateBookDto } = require('../dto/update-book.dto')

class BookController {

  async getBooks(req, res) {
    const data = await BookService.getBooks();
    return res.status('200').json(data);
  }

  async createBook(req, res) {
    await BookService.createBook(req.body);
    console.log(req.body);
    return res.status('200').json();
  }

  async deleteBook(req, res) {
    const { id } = req.params;
    await BookService.deleteBook(id);
    return res.status('200').json(id);
  }

  async updateBook(req, res ) {
    const { id } = req.params;
    await BookService.updateBook(id, (req.body));
    return res.status('200').json(id);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const data = await BookService.getOne(id);
    return res.status('200').json(data);
  }

}

module.exports.BookController = new BookController();
