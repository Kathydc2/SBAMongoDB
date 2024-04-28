const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    student_Id: String,
    class_Id: String,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student