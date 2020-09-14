const express = require("express");
let app = express();
require('dotenv').config();
let cors = require("cors");
const mongoose = require('mongoose');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://Otto:529440Otto@cluster0.fx1qy.mongodb.net/Main?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).catch((err) => {
	console.log(err);
});

const User = require("./models/User.js");
const Filament = require("./models/Filament.js");
const PrinterType = require("./models/PrinterType.js");

const UserRouter = require("./routes/UserRouter.js");
app.use("", UserRouter);

app.listen(process.env.LISTEN_PORT, () => {
	console.log("Слушаю на проту " + process.env.LISTEN_PORT);
});
