const Grade = require("../models/grades");

const fetchAllGrades = async (req, res) => {
    const grades = await Grade.find({});
    res.json({grades: grades});
};

const fetchGrade = async (req,res) => {
    const gradeId = req.params.id;
    const grade = await Grade.findById(gradeId);
    res.json({grade: grade});
};

const createGrade = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const {student_Id,scores,class_Id} = req.body;
    const grade = await Grade.create({
        student_Id: student_Id,
        scores: scores,
        class_Id: class_Id
    });
    res.json({grade: grade});
};

const updateGrade = async (req, res) => {
    const gradeId = req.params.id;
    const {student_Id,scores,class_Id} = req.body;
    const grade = await Grade.findByIdAndUpdate(gradeId,{
        student_Id: student_Id,
        scores: scores,
        class_Id: class_Id
    });
    const updatedGrade = await Grade.findById(gradeId);
    res.json({grade: updatedGrade});
};

const deleteGrade = async (req, res) => {
    const gradeId = req.params.id;
    await Grade.findByIdAndDelete(gradeId);
    res.json({success: "Grade has been deleted successfully"});
};

module.exports = {
    fetchAllGrades,
    fetchGrade,
    createGrade,
    updateGrade,
    deleteGrade
}