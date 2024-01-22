const express = require("express");
const {
  getAllBooks,
  addNewBook,
  getOneBook,
  removeBookByID,
  updateBook,
} = require("./controlers");
const Books = require("../model/Books");
const router = express.Router();

router.param("_id", async (req, res, next, _id) => {
  const book = await Books.findById(_id);
  if (!book) return res.status(404).json({ message: "book not found" });
  req.book = book;
  next();
});

router.get("/", getAllBooks);
router.get("/:_id", getOneBook);
router.post("/", addNewBook);
router.delete("/:_id", removeBookByID);
router.put("/:_id", updateBook);
module.exports = router;
