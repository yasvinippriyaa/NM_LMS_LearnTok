require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const crudRoutes = require("./routes/crudRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Database connection
connection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

app.use("/api", crudRoutes); 

// Listening on port
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}...`);
});
