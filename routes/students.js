const express = require("express");
const studentsController = require("../controllers/studentsController");

const router = express.Router();

//------------------------------------------[GET all students - READ]
router.get("/", studentsController.fetchAllStudents);
//------------------------------------------[GET specific student by ID - READ]
router.get("/:id", studentsController.fetchStudent);
//------------------------------------------[POST new student - CREATE]
router.post("/", studentsController.createStudent);
//------------------------------------------[PUT new student - UPDATE]
router.put("/:id", studentsController.updateStudent);
//------------------------------------------[DELETE a student - DELETE]
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;