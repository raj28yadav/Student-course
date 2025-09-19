const express = require("express");
const Student = require("../models/student");
const { model, mongo, default: mongoose } = require("mongoose");
const router = express.Router();



router.get("/students", (req, res) => {
    return res.render("home");
})
router.post("/students", (req, res) => {

})


module.exports = router;






// Requirements
// 1. POST/students: Create a new student.
// 2. POST/courses: Create a new course with a capacity limit.
// 3. POST/enroll: Enroll a student in a course.
// Reject if enrolledCount >= capacity.
// Increment enrolledCount on success.
// 4. GET/students/:id/courses: List all courses a student is enrolled in.
// 5. GET/courses/:id/students: List all students in a course.
// 6. DELETE /unenroll: Remove a student from a course and decrement enrolled Count