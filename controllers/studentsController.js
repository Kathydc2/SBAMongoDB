const Student = require("../models/students");

const fetchAllStudents = async (req, res) => {
    const students = await Student.find({});
    res.json({students: students});
};

const fetchStudent = async (req, res) => {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    res.json({student: student});
};

const createStudent = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const {name,student_Id,class_Id,email} = req.body;
    const student = await Student.create({
        name: name,
        student_Id: student_Id,
        class_Id: class_Id,
        email: email
    });
    res.json({student: student});
};

const updateStudent = async (req, res) => {
    const studentId = req.params.id;
    const {name,student_Id,class_Id,email} = req.body;
    const student = await Student.findByIdAndUpdate(studentId,{
        name: name,
        student_Id: student_Id,
        class_Id: class_Id,
        email: email
    });
    const updatedStudent = await Student.findById(studentId);
    res.json({student: updatedStudent});
};

const deleteStudent = async (req, res) => {
    const studentId = req.params.id;
    await Student.findByIdAndDelete(studentId);
    res.json({success: "Student has been deleted successfully"});
};

module.exports = {
    fetchAllStudents,
    fetchStudent,
    createStudent,
    updateStudent,
    deleteStudent
}