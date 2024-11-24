const express = require("express");
const crudController = require("../controllers/crudController");
const router = express.Router();


// User routes
router.get("/users", crudController.user_index); // Get all users
router.get("/users/:id", crudController.user_details); // Get user details by ID
router.delete("/users/:id", crudController.user_delete); // Delete user by ID

// Course routes
router.get("/courses", crudController.course_index); // Get all courses
router.get("/courses/:id", crudController.course_detail); // Get course details by ID
router.delete("/courses/:id", crudController.course_delete); // Delete course by ID

module.exports = router;
