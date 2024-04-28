const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    student_Id: { type: Number, required: true },
    assignment_Work: { type: [String], required: true },
    due_Date: { type: Date, required: true },
    
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment