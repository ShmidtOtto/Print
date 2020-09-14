let express = require("express");
let Router = express.Router();
let User = require("../models/User.js");

Router.get("/users", async function (request, response) {
	try {
		let Users = await User.find({});
		response.json(Users);
	} catch (er) {
		console.log(er);
		response.status(500).json({
			"message": er
		})
	}
})

Router.get("/user/:id", async function (request, response) {
	let id = request.params.id;
	try {
        let foundUser = await User.findOne({ _id: id});
        response.status(200).json(foundUser);
    } catch(err) {
        console.log(err);
        response.status(500).json({
            message: "Server error"
        })
    }
})

Router.post("/user", async function (request, response) {
	console.log(request.body);
	try {
		if (!!request.body) {
			let newUserRecord = new User({
				UserName: request.body.UserName,
				Email: request.body.Email,
				Password: request.body.Password,
				Login: request.body.Login,
				DateOfRegistration: request.body.DateOfRegistration,
				DateOfLastLogin: request.body.DateOfLastLogin,
				CreateDate: request.body.CreateDate
			});
			await newUserRecord.save(function (err) {
				if (err) {
					response.status(500).json({
						message: "Внутреняя ошибка сервера, запись не была сохранена"
					});
				} else {
					response.status(200).json({
						message: "Запись успешно сохранена"
					});
				}
			})
		} else {
			response.status(303).json({
				message: "Не удалось сохранить запись"
			});
		}
	} catch (err) {
		console.log(err);
		response.status(500).json({
			message: err
		})
	}
})

module.exports = Router;
