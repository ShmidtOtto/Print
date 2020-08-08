const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let filamentSchema = new Schema({
  Name: String,
  Code: String,
  CreateDate: Date
});

module.exports = mongoose.model("Filament", filamentSchema);
