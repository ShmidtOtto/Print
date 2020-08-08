const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let workCardSchema = new Schema({
  CreateDate: Date,
  Performer: { type: Schema.Types.ObjectId, ref: "User" },
  Customer: { type: Schema.Types.ObjectId, ref: "User" },
  Orders: [{ tyep: Schema.Types.ObjectId, ref: "Order"}]
}),

module.exports = mongoose.model("WorkCard", workCardSchema);
