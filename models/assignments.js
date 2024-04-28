const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    student_Id: Number,
    assignment_Work: [String],
    due_Date: Date
    
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment