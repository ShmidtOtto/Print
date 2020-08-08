const mongoose = require("mongoose");
const User = require("./models/User.js");
const Filament = require("./models/Filament.js");
const PrinterType = require("./models/PrinterType.js");
mongoose.connect("mongodb+srv://Otto:529440@cluster0.fx1qy.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology: true })
if(false){
  let newUser = new User({
    UserName: "Otto Shmidt",
    Email: "test@mail.ru",
    Password: "1235",
    Login: "Otto",
    DateOfRegistration: new Date(),
    DateOfLastLogin: new Date(),
    CreateDate: new Date
  });
  newUser.save((err) => {
    if(err){
      return console.log(err)
    }
    console.log("Пользователь сохранён");
  });
  let newFilament = new Filament({
    Name: "ABS",
    Code: "1",
    CreateDate: new Date()
  });
  newFilament.save((err) => {
    if(err){
      return console.log(err);
    }
    console.log("Филамент сохранён");
  });
  let newPrinterType = new PrinterType({
    Name: "XYZ",
    Code: "1",
    CreateDate: new Date()
  });
  newPrinterType.save((err) => {
    if(err){
      return console.log(err);
    }
    console.log("Филаммент сохранён");
  });
}
//mongoose.disconnect();
console.log("БД отключена");
