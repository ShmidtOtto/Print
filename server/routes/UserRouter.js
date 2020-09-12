let express = require("express");
let Router = express.Router();
let User = require("../models/User.js");

Router.get("/users", async function (request, response) {
	try {
		console.log("Попытались подключится");
		let Users = await User.find();
		console.log("Ок");
		response.json(Users);
	} catch (er) {
		console.log(er);
		response.status(500).json({
			"message": er
		})
	}
})

Router.put("/user", async function (request, response) {
	console.log(request.body);
	response.json({
		message: "Ok"
	})
})

module.exports = Router;
