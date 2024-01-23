const Books = require("../model/Books");

const getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await Books.find();

    return res.status(200).json(allBooks);
  } catch (error) {
    next(error);
  }
};
const getOneBook = async (req, res, next) => {
  try {
    // const {bookId} = req.params
    // const getOneBook = await Books.findById(bookId);

    return res.status(200).json(req.book); // or json(getOneBook)
  } catch (error) {
    next(error);
  }
};
const addNewBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.BookImage = req.file.path;
    }

    const Book = await Books.create(req.body);
    res.status(201).json(Book);
  } catch (error) {
    next(error);
  }
};
const updateBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    await req.book.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
const removeBookByID = async (req, res, next) => {
  try {
    await req.book.deleteOne();
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllBooks,
  getOneBook,
  addNewBook,
  updateBook,
  removeBookByID,
};
