// Course: { id: string, title: string, capacity: number, enrolled Count: number}
const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    id: {
        type : String,
        required : true,
        unique : true,
    },
    title : {
        type : String,
        required : true,
    },
    capacity : {
        type : Number,
        required : true,
    },
    enrolledCount :{
        type : Number,
        required : true,
    }   
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;