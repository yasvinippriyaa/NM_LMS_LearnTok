const User = require("../models/userModel");
const Course = require("../models/courseModel");

// Display All User Data
const user_index = (req, res) => {
	User.find({})
		.then((users) => res.json(users))
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error fetching users.");
		});
};

// Show a particular User Detail by Id
const user_details = (req, res) => {
	User.findById(req.params.id, function (err, user) {
		if (!user) {
			res.status(404).send("User not found");
		} else {
			res.json(user);
		}
	});
};

// Delete User by Id
const user_delete = (req, res) => {
	User.findById(req.params.id, function (err, user) {
		if (!user) {
			res.status(404).send("User not found");
		} else {
			User.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("User deleted");
				})
				.catch(function (err) {
					console.error(err);
					res.status(400).send("User deletion failed.");
				});
		}
	});
};

// Display All Course Data
const course_index = (req, res) => {
	Course.find({})
		.then((courses) => res.json(courses))
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error fetching courses.");
		});
};

// Show a particular Course Detail by Id
const course_detail = (req, res) => {
	Course.findById(req.params.id, function (err, course) {
		if (!course) {
			res.status(404).send("Course not found");
		} else {
			res.json(course);
		}
	});
};

// Delete Course by Id
const course_delete = (req, res) => {
	Course.findById(req.params.id, function (err, course) {
		if (!course) {
			res.status(404).send("Course not found");
		} else {
			Course.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Course deleted");
				})
				.catch(function (err) {
					console.error(err);
					res.status(400).send("Course deletion failed.");
				});
		}
	});
};

module.exports = {
	user_index,
	user_details,
	user_delete,
	course_index,
	course_detail,
	course_delete,
};
