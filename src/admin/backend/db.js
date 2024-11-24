require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	mongoose
		.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Connected to MongoDB");
		})
		.catch((err) => {
			console.error(`Could not connect to MongoDB: ${err}`);
			process.exit(1); // Exit the process with an error code
		});
};
