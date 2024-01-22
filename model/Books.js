const { model, Schema } = require("mongoose");
const booksSchema = new Schema({
  BookTitle: { type: String, required: true },
  BookAuthor: { type: String, required: true },
  BookPrice: { type: Number, required: 5 },
  BookImage: {},
});
module.exports = model("book", booksSchema);
