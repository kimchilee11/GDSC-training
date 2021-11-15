var express = require('express');
const { BookController } = require('../controller/book.controller');
const createBookMiddleware = require('../middlewares/create-book.middleware');
const updateBookMiddleware = require('../middlewares/update-book.middleware');
var router = express.Router();


router.get('/', BookController.getBooks);

router.get('/:id', BookController.getOne);

router.post('/',createBookMiddleware, BookController.createBook);

router.put('/:id', updateBookMiddleware, BookController.updateBook);

router.delete('/:id', BookController.deleteBook );


module.exports = router;
