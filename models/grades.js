const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    student_Id: Number,
    scores: Array,
    class_Id: Number
});

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade