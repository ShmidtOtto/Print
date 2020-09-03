const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let printerSchema = new Schema({
  Name: String,
  PrintAreaLength: Number,
  PrintAreaHeight: Number,
  PrintAreaWidth: Number,
  CreateDate: Date,
  FilamentsUse: [{ type: Schema.Types.ObjectId, ref: "Filament" }],
  PrinterType: { type: Schema.Types.ObjectId, ref: "PrinterType" }
});

module.exports = mongoose.model("Printer", printerSchema);
