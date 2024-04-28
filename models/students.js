const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    student_Id: { type: Number, required: true },
    class_Id: { type: Number, required: true },
    email: { type: String, required: true }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student