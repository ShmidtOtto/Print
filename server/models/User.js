const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  UserName: String,
  Email: String,
  Password: String,
  Login: String,
  DateOfRegistration: Date,
  DateOfLastLogin: Date,
  CreateDate: Date,
  Printers: [{ type: Schema.Types.ObjectId, ref: "Printer" }]
});

module.exports = mongoose.model("User", userSchema);
