const Assignment = require("../models/assignments");

const fetchAllAssignments = async (req, res) => {
    const assignments = await Assignment.find({});
    res.json({assignments: assignments});
};

const fetchAssignment = async (req, res) => {
    const assignmentId = req.params.id;
    const assignment = await Assignment.findById(assignmentId);
    res.json({assignment: assignment});
};

const createAssignment = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const {student_Id,assignment_Work,due_Date} = req.body;
    const assignment = await Assignment.create({
        student_Id: student_Id,
        assignment_Work: assignment_Work,
        due_Date: due_Date
    });
    res.json({assignment: assignment});
};

const updateAssignment = async (req, res) => {
    const assignmentId = req.params.id;
    const {student_Id,assignment_Work,due_Date} = req.body;
    const assignment = await Assignment.findByIdAndUpdate(assignmentId,{
        student_Id: student_Id,
        assignment_Work: assignment_Work,
        due_Date: due_Date
    });
    const updatedAssignment = await Assignment.findById(assignmentId);
    res.json({assignment: updatedAssignment});
};

const deleteAssignment = async (req, res) => {
    try {
        console.log(req.params.id)
        const assignmentId = req.params.id;
        const deletedAssignment = await Assignment.findByIdAndDelete(assignmentId);
        console.log(deletedAssignment)
        res.json({Success: "Assignment has been deleted successfully"});

    } catch (error){
        console.log(error.message)
        res.status(400).send({message: error.message})

    }
   
};

module.exports = {
    fetchAllAssignments,
    fetchAssignment,
    createAssignment,
    updateAssignment,
    deleteAssignment
}