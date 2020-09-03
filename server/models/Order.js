const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let orderSchema = new Schema({
  StartDate: Date,
  EndDate: Date,
  PrintTime: Date,
  Const: Number,
  CreateDate: Date,
  FilamentUse: { type: Schema.Types.ObjectId, ref: "Filament" },
  Model: { type: Schema.Types.ObjectId, ref: "Model" },
  PrinterUse: { type: Schema.Types.ObjectId, ref: "Printer" }
});

module.exports = mongoose.model("Order", orderSchema);
