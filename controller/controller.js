const Book = require("../models/Book");

const addBook = async (req, res) => {
  const { BookName, Author, Genre, Desc, Price, PublishedBy } = req.body;
  try {
    const savedBook = await Book.create({
      BookName,
      Author,
      Genre,
      Desc,
      Price,
      PublishedBy,
    });

    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json({ message: "book not saved" });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    await book.updateOne({ $set: req.body });
    res.status(200).json("post updated");
  } catch (err) {
    res.status(500).json(err).json({ message: "post not updated" });
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Post Deleted" });
};

const findBook = async (req, res) => {
  let book;
  try {
    book = await Book.findById(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
  return res.status(200).json({ book });
};

const findAllBook = async (req, res, next) => {
  let book;

  try {
    book = await Book.find();
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ book });
};

module.exports = { addBook, updateBook, deleteBook, findBook, findAllBook };
