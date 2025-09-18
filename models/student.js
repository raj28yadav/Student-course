const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        uniqure: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;

// Student: (id: string, name: string, email: string)
// Course: { id: string, title: string, capacity: number, enrolled Count: number}

