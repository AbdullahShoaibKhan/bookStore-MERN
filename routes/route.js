const router = require("express").Router();
const {
  addBook,
  updateBook,
  deleteBook,
  findBook,
  findAllBook,
} = require("../controller/controller.js");

//add a book
router.post("/add", addBook);
// update a book
router.put("/:id", updateBook);
//delete a book
router.delete("/:id", deleteBook);
//find a book
router.get("/:id", findBook);
//find all books
router.get("/", findAllBook);

module.exports = router;
