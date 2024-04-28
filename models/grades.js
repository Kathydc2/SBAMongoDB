const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    student_Id: { type: Number, required: true },
    scores: { type: [Number], required: true },
    class_Id: { type: Number, required: true }
});

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade