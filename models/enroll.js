const mongoose = require("mongoose");
const enrollSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true, 
    },
    studentName: {
        type: String,
        required: true,
    },
    courseId: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    }
})