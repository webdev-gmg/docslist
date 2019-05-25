const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  synopsis: String,
  lead:{type:Boolean},
  license:{type:String, required:true},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
