const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let printerTypeSchema = new Schema({
  Name: String,
  Code: String,
  CreateDate: Date
});

module.exports = mongoose.model("PrinterType", printerTypeSchema);
