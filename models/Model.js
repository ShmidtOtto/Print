const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let modelSchema = new Schema({
  Name: String,
  Height: Number,
  Weight: Number,
  Width: Number,
  Length: Number,
  Color: Number,
  CreateDate: Date
});

module.exports = mongoose.model("Model", modelSchema);
